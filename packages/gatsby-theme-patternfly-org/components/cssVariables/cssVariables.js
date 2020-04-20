import React from "react";
import { debounce } from "@patternfly/react-core";
import {
  Table,
  TableHeader,
  TableBody,
  sortable,
  SortByDirection,
  expandable
} from "@patternfly/react-table";
import * as tokensModule from "@patternfly/react-tokens/dist/variables/js";
import global_spacer_md from "@patternfly/react-tokens/dist/js/global_spacer_md";
import LevelUpAltIcon from "@patternfly/react-icons/dist/js/icons/level-up-alt-icon";
import { CSSSearch } from './cssSearch';

import "./cssVariables.css";

const isColorRegex = /^(#|rgb)/;

const mappingAsList = (property, values) => (
  <div>
    <div
      style={{
        padding: `4px 0 4px calc(${global_spacer_md.value})`
      }}
    >
      <span style={{ paddingLeft: '16px' }}>
        {property}
      </span>
    </div>
    {values.map((entry, index) => (
      <div
        style={{
          padding: `4px 0 4px calc(${global_spacer_md.value} * ${index + 3})`
        }}
      >
        <LevelUpAltIcon style={{ transform: 'rotate(90deg)' }} />
        <span style={{ paddingLeft: '16px' }}>
          {entry}
        </span>
      </div>
    ))}
  </div>
);

export class CSSVariables extends React.Component {
  constructor(props) {
    super(props);
    // Ensure array in case of multiple prefixes
    this.prefix =
      typeof props.prefix === "string" ? [props.prefix] : props.prefix;
    const applicableFiles = Object.entries(tokensModule)
      .filter(([key, val]) => {
        for (let i = 0; i < this.prefix.length; i++) {
          if (
            key === this.prefix[i].replace("pf-", "").replace(/-+/g, "_")
          ) {
            return true;
          }
        }
        return false;
      })
      .sort(([key1], [key2]) => key1.localeCompare(key2))
      .map(([key, val]) => {
        if (props.selector) {
          return {
            [props.selector]: val[props.selector]
          }
        }
        return val;
      });

    this.columns = props.hideSelectorColumn ? [] : [
      {
        title: "Selector",
        transforms: [sortable],
        cellFormatters: [expandable]
      }
    ];
    this.columns = this.columns.concat([
      { title: "Variable", transforms: [sortable] },
      { title: "React Token", transforms: [sortable] },
      { title: "Value", transforms: [sortable] }
    ]);

    this.state = {
      applicableFiles,
      rows: this.getFilteredRows(applicableFiles),
      sortBy: {
        index: 0,
        direction: "asc" // a-z
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
          const passes =
            searchRE === undefined ||
            searchRE.test(selector) ||
            searchRE.test(val.property) ||
            searchRE.test(val.token) ||
            searchRE.test(val.value) ||
            (val.values && searchRE.test(JSON.stringify(val.values)));
          if (passes) {
            const rowKey = `${selector}_${val.property}`;
            let cells = this.props.hideSelectorColumn ? [] : [selector];
            cells = cells.concat([
              val.property,
              val.token,
              <div key={rowKey}>
                <div
                  key={`${rowKey}_1`}
                  className="pf-l-flex pf-m-space-items-sm"
                >
                  {isColorRegex.test(val.value) && (
                    <div
                      key={`${rowKey}_2`}
                      className="pf-l-flex pf-m-column pf-m-align-self-center"
                    >
                      <span
                        className="ws-color-box"
                        style={{ backgroundColor: val.value }}
                      />
                    </div>
                  )}
                  <div
                    key={`${rowKey}_3`}
                    className="pf-l-flex pf-m-column pf-m-align-self-center ws-td-text"
                  >
                    {val.value}
                  </div>
                </div>
              </div>
            ]);
            filteredRows.push({
              isOpen: val.values ? false : undefined,
              cells
            });
            rowNumber += 1;
            if (val.values) {
              filteredRows.push({
                parent: rowNumber,
                fullWidth: true,
                cells: [
                  {
                    title: mappingAsList(val.property, val.values)
                  }
                ]
              });
              rowNumber += 1;
            }
          }
        });
      });
    });
    return filteredRows;
  };

  onCollapse(event, rowKey, isOpen) {
    const { rows } = this.state;
    rows[rowKey].isOpen = isOpen;
    this.setState({
      rows
    });
  }

  getDebouncedFiltedRows = debounce(value => {
    const searchRE = new RegExp(value, "i");
    this.setState({
      rows: this.getFilteredRows(this.state.applicableFiles, searchRE)
    });
  }, 500);

  onSort = (_event, index, direction) => {
    const sortedRows = this.state.rows.sort((a, b) =>
      a[index] < b[index] ? -1 : a[index] > b[index] ? 1 : 0
    );
    this.setState({
      sortBy: {
        index,
        direction
      },
      rows:
        direction === SortByDirection.asc ? sortedRows : sortedRows.reverse()
    });
  };

  render() {
    return (
      <React.Fragment>
        <CSSSearch getDebouncedFiltedRows={this.getDebouncedFiltedRows} />
        <Table
          variant="compact"
          aria-label={`CSS Variables for prefixes ${this.prefix.join(" ")}`}
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
