import React from 'react';
import PropTypes from 'prop-types';
import { Form, TextInput } from '@patternfly/react-core';
import { Table, TableHeader, TableBody, sortable, SortByDirection } from '@patternfly/react-table';
import * as tokensModule from '@patternfly/react-tokens';
import { StyleSheet, css } from '@patternfly/react-styles';

const propTypes = {
  variables: PropTypes.oneOf(PropTypes.string, PropTypes.array)
};

const defaultProps = {
  variables: null
};

const styles = StyleSheet.create({
  color: {
    display: 'inline-block',
    height: 18,
    width: 18,
    border: `${tokensModule.global_BorderWidth_sm.var} solid ${tokensModule.global_BorderColor.var}`,
    marginRight: tokensModule.global_spacer_sm.var,
    verticalAlign: 'middle'
  },
  value: {
    verticalAlign: 'middle'
  },
  tokenCell: {
    whiteSpace: 'nowrap'
  },
  search: `
    &.pf-c-form {
      margin: ${tokensModule.global_spacer_md.var} 0;
    }
    .pf-c-form__label {
      --pf-c-form__label--FontSize: ${tokensModule.global_FontSize_lg.var};
    }
  `
});
const isColorRegex = /^(#|rgb)/;

class Tokens extends React.Component {
  constructor(props) {
    super(props);
    const dataRows = [];
    // let allVariables = {};
    // Object.entries(tokensModule).map(([key, token]) => {
    //   const shortName = token.name.split('--')[1].split('__')[0];
    //   if (!allVariables[shortName]) {
    //     allVariables[shortName] = [];
    //   }
    //   allVariables[shortName].push(tokensModule[key]);
    // }, []);

    // const regex = new RegExp(`^--pf-(c|l)-${props.component}(--|__)`, 'g');
    // const match = regex.test(token.name);
    // if (!match) {
    //   return;
    // }
    Object.entries(tokensModule).map(([key, token]) => {
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
    // if (props.isReact) {
    //   columns = [{ title: 'React Tokens', transforms: [sortable] }];
    // } else {
    //   columns = [];
    // }
    this.state = {
      searchValue: '',
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
    dataRows.map(dataRow => {
      let toPush = [];
      // if (this.props.isReact) {
      //   toPush = [<span className={css(styles.tokenCell)}>{dataRow[0]}</span>];
      // } else {
      //   toPush = [];
      // }
      rows.push(toPush.concat([
        <span className={css(styles.tokenCell)}>{dataRow[1]}</span>,
        <span className={css(styles.tokenCell)}>{dataRow[0]}</span>,
        <span>
          {isColorRegex.test(dataRow[2]) && <span className={css(styles.color)} style={{backgroundColor: dataRow[2]}} />}
          <span className={css(styles.value)}>{dataRow[2]}</span>
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
      searchValue
    }));
  };

  render() {
    const { searchValue, columns, rows, dataRows, sortBy } = this.state;
    const { component, title } = this.props;
    const searchRE = new RegExp(searchValue, 'i');
    const filteredTokens = dataRows.filter(c => {
      return searchRE.test(c[0]) || searchRE.test(c[1]) || searchRE.test(c[2]);
    });
    const filteredRows = this.processToComponents(filteredTokens);

    return (
      <>
        <Form className={css(styles.search)} onSubmit={event => { event.preventDefault(); return false; }}>
          <TextInput
                type="text"
                id="primaryIconsSearch"
                name="primaryIconsSearch"
                placeholder="Search Variables"
                value={searchValue}
                onChange={this.handleSearchChange}
              />
        </Form>
        <Table variant="compact" aria-label="CSS Variables" sortBy={sortBy} onSort={this.onSort} cells={columns} rows={filteredRows}>
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