import React from 'react';
import { TextInput } from '@patternfly/react-core';
import { Table, TableHeader, TableBody, sortable, SortByDirection } from '@patternfly/react-table';
import * as tokensModule from '@patternfly/react-tokens';
import './cssVariables.css';

const isColorRegex = /^(#|rgb)/;

export default class CSSVariables extends React.Component {
  constructor(props) {
    super(props);
    // Ensure array in case of multiple prefixes
    this.prefix = typeof props.prefix === 'string'
      ? [props.prefix]
      : props.prefix;
    const initialRows = Object.entries(tokensModule)
      .filter(([_key, val]) => {
        for (let i = 0; i < this.prefix.length; i++) {
          if (val.name.includes(this.prefix[i])) {
            return true;
          }
        }
        return false
      })
      .sort(([key1], [key2]) => key1.localeCompare(key2))
      .map(([key, val]) => [
        val.name,
        key,
        val.value
      ]);

    this.columns = [
      { title: 'Variable', transforms: [sortable] },
      { title: 'React Token', transforms: [sortable] },
      { title: 'Value', transforms: [sortable] }
    ];
    
    this.state = {
      filterValue: '',
      rows: initialRows,
      sortBy: {
        index: 0,
        direction: 'asc' // a-z
      }
    };
  }

  onFilterChange = (_change, event) => {
    this.setState({
      filterValue: event.target.value
    });
  }

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
    const searchRE = new RegExp(this.state.filterValue, 'i');
    const filteredRows = this.state.rows
      .filter(c => searchRE.test(c[0]) || searchRE.test(c[1]) || searchRE.test(c[2]));
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
          className="pf-m-grid-2xl"
          variant="compact"
          aria-label="CSS Variables"
          sortBy={this.state.sortBy}
          onSort={this.onSort}
          cells={this.columns}
          rows={filteredRows.map(row => ({
            cells: [
              row[0],
              row[1],
              <div key={row[2]}>
                <div key={`${row[2]}1`} className="pf-l-flex pf-m-space-items-sm">
                  {isColorRegex.test(row[2]) && (
                    <div key={`${row[2]}2`} className="pf-l-flex pf-m-column pf-m-align-self-center">
                      <span className="ws-color-box" style={{ backgroundColor: row[2] }} />
                    </div>
                  )}
                  <div key={`${row[2]}3`} className="pf-l-flex pf-m-column pf-m-align-self-center ws-td-text">
                    {row[2]}
                  </div>
                </div>
              </div>
            ]
          }))}
        >
          <TableHeader />
          <TableBody />
        </Table>
      </React.Fragment>
    );
  }
}
