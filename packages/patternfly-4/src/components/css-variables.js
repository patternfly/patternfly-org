import React from 'react';
import PropTypes from 'prop-types';
import { Form, TextInput } from '@patternfly/react-core';
import { Table, TableHeader, TableBody, sortable, SortByDirection } from '@patternfly/react-table';
import * as tokensModule from '@patternfly/react-tokens';
import { StyleSheet, css } from '@patternfly/react-styles';
import './content/icons.scss';

const propTypes = {
  variables: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  filter: PropTypes.string,
  exact: PropTypes.bool
};

const defaultProps = {
  variables: null,
  filter: null,
  exact: false
};

const styles = StyleSheet.create({
  color: {
    display: 'inline-block',
    height: 18,
    width: 18,
    borderTop: `1px solid #72767b`,
    borderBottom: `1px solid #72767b`,
    marginRight: tokensModule.global_spacer_sm.var,
    verticalAlign: 'middle'
  },
  value: {
    verticalAlign: 'middle'
  },
  tokenCell: {
    whiteSpace: 'nowrap'
  }
});
const isColorRegex = /^(#|rgb)/;

class Tokens extends React.Component {
  constructor(props) {
    super(props);
    const dataRows = [];
    Object.entries(tokensModule).forEach(([key, token]) => {
      if (!token.name || !token.value) {
        return;
      }
      if (props.variables) {
        let variablesArray;
        if (typeof props.variables === 'string') {
          variablesArray = [props.variables];
        } else {
          variablesArray = props.variables;
        }
        let tokenMatch = false;
        for (let i = 0; i < variablesArray.length; i++) {
          const regex = new RegExp(`^--${variablesArray[i]}(--|__)`, 'g');
          const match = regex.test(token.name);
          if (match) {
            tokenMatch = true;
            break;
          }
        }
        if (!tokenMatch) {
          return;
        }
      }
      dataRows.push([
        key,
        token.name,
        token.value,
      ]);
      return;
    }, []);
    const dataRowsSorted = dataRows.sort((a, b) => {
      return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0;
    });
    let columns = [];
    this.state = {
      searchValue: this.props.filter || '',
      searchChanged: false,
      columns: columns.concat([
        { title: 'Variables', transforms: [sortable] },
        { title: 'React Tokens', transforms: [sortable] },
        { title: 'Value', transforms: [sortable] }
      ]),
      dataRows: dataRowsSorted,
      rows: this.processToComponents(dataRowsSorted),
      sortBy: {
        index: 0,
        direction: 'asc' // a-z
      }
    };
    this.onSort = this.onSort.bind(this);
  }

  processToComponents = dataRows => {
    const rows = [];
    dataRows.forEach(dataRow => {
      let toPush = [];
      rows.push(toPush.concat([
        <span key={dataRow[1]} className={css(styles.tokenCell)}>{dataRow[1]}</span>,
        <span key ={dataRow[0]} className={css(styles.tokenCell)}>{dataRow[0]}</span>,
        <span key={dataRow[2]}>
          {isColorRegex.test(dataRow[2]) && <span key={dataRow[2] + 'ic'} className={css(styles.color)} style={{backgroundColor: dataRow[2]}} />}
          <span key={dataRow[2] + 'i'} className={css(styles.value)}>{dataRow[2]}</span>
        </span>
      ]));
    }, []);
    return rows;
  };

  onSort(_event, index, direction) {
    const sortedRows = this.state.dataRows.sort((a, b) => a[index] < b[index] ? -1 : a[index] > b[index] ? 1 : 0);
    this.setState({
      sortBy: {
        index,
        direction
      },
      rows: direction === SortByDirection.asc ? this.processToComponents(sortedRows) : this.processToComponents(sortedRows.reverse())
    })
  }

  handleSearchChange = (checked, event) => {
    const searchValue = event.target.value;
    this.setState(() => ({
      searchValue,
      searchChanged: true
    }));
  };

  render() {
    const { searchValue, columns, dataRows, sortBy, searchChanged } = this.state;
    const { exact } = this.props;
    let searchRE;
    if (exact && !searchChanged) {
      searchRE = new RegExp(`^${searchValue}$`, 'i');
    } else {
      searchRE = new RegExp(searchValue, 'i');
    }
    const filteredTokens = dataRows.filter(c => {
      return searchRE.test(c[0]) || searchRE.test(c[1]) || searchRE.test(c[2]);
    });
    const filteredRows = this.processToComponents(filteredTokens);

    return (
      <>
        <Form className="ws-search" onSubmit={event => { event.preventDefault(); return false; }}>
          <TextInput
            type="text"
            id="primaryIconsSearch"
            name="primaryIconsSearch"
            placeholder="Search CSS Variables"
            value={searchValue}
            onChange={this.handleSearchChange}
          />
        </Form>
        <Table className="pf-m-grid-2xl" variant="compact" aria-label="CSS Variables" sortBy={sortBy} onSort={this.onSort} cells={columns} rows={filteredRows}>
          <TableHeader />
          <TableBody />
        </Table>
      </>
    );
  }
}

Tokens.propTypes = propTypes;
Tokens.defaultProps = defaultProps;

export default Tokens;
