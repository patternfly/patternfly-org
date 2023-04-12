import React from "react";
import { SearchInput } from "@patternfly/react-core";

export class CSSSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterValue: ""
    };
  }

  onFilterChange = (event) => {
    this.setState(
      {
        filterValue: event.target.value
      },
      () => this.props.getDebouncedFilteredRows(this.state.filterValue)
    );
  };

  render() {
    return (
      <SearchInput
        aria-label="Filter CSS Variables"
        placeholder="Filter CSS Variables"
        value={this.state.filterValue}
        onChange={this.onFilterChange}
      />
    );
  }
}
