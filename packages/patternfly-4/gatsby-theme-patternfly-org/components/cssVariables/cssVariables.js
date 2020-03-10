import React from 'react';
import { TextInput, debounce, SimpleList, SimpleListItem } from '@patternfly/react-core';
import { Table, TableHeader, TableBody, sortable, SortByDirection, expandable } from '@patternfly/react-table';
import * as tokensModule from '@patternfly/react-tokens/dist/variables/js';
import './cssVariables.css';

const isColorRegex = /^(#|rgb)/;

const mappingAsList = val => (
  <SimpleList>
    {val.values.map(entry => <SimpleListItem>{entry}</SimpleListItem>)}
  </SimpleList>
);

export class CSSVariables extends React.Component {
  constructor(props) {
    super(props);
    // Ensure array in case of multiple prefixes
    this.prefix = typeof props.prefix === 'string'
      ? [props.prefix]
      : props.prefix;
    
    const applicableFiles = Object.entries(tokensModule)
    .filter(([key, val]) => {
      for (let i = 0; i < this.prefix.length; i++) {
        if (this.prefix[i] === 'global') {
          if (key === 'patternfly_variables' || key === 'patternfly_charts') {
            return true;
          }
        } else if (key === this.prefix[i].replace('pf-', '').replace(/-+/g, '_')) {
          return true;
        }
      }
      return false
    })
    .sort(([key1], [key2]) => key1.localeCompare(key2))
    .map(([key, val]) => val);

    this.columns = [
      { title: 'Selector', transforms: [sortable], cellFormatters: [expandable] },
      { title: 'Variable', transforms: [sortable] },
      { title: 'React Token', transforms: [sortable] },
      { title: 'Value', transforms: [sortable] }
    ];
    
    this.state = {
      filterValue: '',
      applicableFiles,
      rows: this.getFilteredRows(applicableFiles),
      sortBy: {
        index: 0,
        direction: 'asc' // a-z
      }
    };

    this.getFilteredRows = this.getFilteredRows.bind(this);
    this.getDebouncedFiltedRows = this.getDebouncedFiltedRows.bind(this);
    this.onCollapse = this.onCollapse.bind(this);
  }

  getFilteredRows = (applicableFiles, searchRE) => {
    let filteredRows = [];
    let rowNumber = -1;
    applicableFiles.forEach(file => {
      Object.entries(file).forEach(([selector, values]) => {
        values.forEach(val => {
          const passes = searchRE === undefined || (searchRE.test(selector) || searchRE.test(val.property) || searchRE.test(val.token) || searchRE.test(val.value) || (val.values && searchRE.test(JSON.stringify(val.values))));
          if (passes) {
            const rowKey = `${selector}_${val.property}`;
            filteredRows.push({
              isOpen: val.values ? false : undefined,
              cells: [
                selector,
                val.property,
                val.token,
                <div key={rowKey}>
                  <div key={`${rowKey}_1`} className="pf-l-flex pf-m-space-items-sm">
                    {isColorRegex.test(val.value) && (
                      <div key={`${rowKey}_2`} className="pf-l-flex pf-m-column pf-m-align-self-center">
                        <span className="ws-color-box" style={{ backgroundColor: val.value }} />
                      </div>
                    )}
                    <div key={`${rowKey}_3`} className="pf-l-flex pf-m-column pf-m-align-self-center ws-td-text">
                      {val.value}
                    </div>
                  </div>
                </div>
              ]
            });
            rowNumber += 1;
            if (val.values) {
              filteredRows.push({
                parent: rowNumber,
                fullWidth: true,
                cells: [{
                  title: mappingAsList(val)
                }]
              });
              rowNumber += 1;
            }
          }
        })
      });
    });
    return filteredRows;
  }

  onCollapse(event, rowKey, isOpen) {
    const { rows } = this.state;
    rows[rowKey].isOpen = isOpen;
    this.setState({
      rows
    });
  }

  onFilterChange = (_change, event) => {
    this.setState({
      filterValue: event.target.value
    }, () => this.getDebouncedFiltedRows(this.state.filterValue));
  }

  getDebouncedFiltedRows = debounce(value => {
    const searchRE = new RegExp(value, 'i');
    this.setState({
      rows: this.getFilteredRows(this.state.applicableFiles, searchRE)
    });
  }, 500);

  handleChange = e => {
    let input = e.target.value.toLowerCase();
    this.setDisplayedContacts(input);
  };

  onSort = (_event, index, direction) => {
    const sortedRows = this.state.rows
      .sort((a, b) => (a[index] < b[index] ? -1 : a[index] > b[index] ? 1 : 0));
    this.setState({
      sortBy: {
        index,
        direction
      },
      rows: direction === SortByDirection.asc ? sortedRows : sortedRows.reverse()
    });
  }

  render() {
    return (
      <React.Fragment>
        <TextInput
          type="text"
          aria-label="Filter CSS Variables"
          placeholder="Filter CSS Variables"
          value={this.state.filterValue}
          onChange={this.onFilterChange}
        />
        <Table
          variant="compact"
          aria-label={`CSS Variables for prefixes ${this.prefix.join(' ')}`}
          sortBy={this.state.sortBy}
          onSort={this.onSort}
          cells={this.columns}
          rows={this.state.rows}
          onCollapse={this.onCollapse}
        >
          <TableHeader />
          <TableBody />
        </Table>
      </React.Fragment>
    );
  }
}
