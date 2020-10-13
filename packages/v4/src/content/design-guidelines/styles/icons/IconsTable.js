import React from 'react';
import {
  Divider,
  InputGroup,
  TextInput, 
  Title, 
  Button,
  ButtonVariant,
  Toolbar,
  ToolbarContent,
  ToolbarItem,
  EmptyState, 
  EmptyStateVariant, 
  EmptyStateIcon, 
  EmptyStateBody,
  Tooltip,
  TooltipPosition
} from '@patternfly/react-core';
import * as icons from '@patternfly/react-icons';
import './icons.css';
import {
  Table,
  TableHeader,
  TableBody,
  TableVariant,
  sortable,
  SortByDirection
} from '@patternfly/react-table';
import { iconsData } from './icons';
import { saveAs } from 'file-saver';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';

export class IconsTable extends React.Component {
  state = {
    searchValue: '',
    columns: [
      'Icon',
      { title: 'Name', transforms: [sortable], props: { className: css(styles.modifiers.fitContent)} },
      'Style',
      { title: 'Type', transforms: [sortable] },
      { title: 'React', props: { className: css(styles.modifiers.fitContent)} },
      { title: 'Contextual usage', transforms: [sortable] }
    ],
    sortBy: {}
  };

  handleSearchChange = (checked, event) => {
    const searchValue = event.target.value;
    this.setState(() => ({
      searchValue
    }));
  };

  onSort = (_event, index, direction) => {
    this.setState({
      sortBy: {
        index,
        direction
      }
    });
  }

  onDownloadSvg = ({ currentTarget }) => {
    const domNode = currentTarget.cloneNode(true);
    domNode.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    domNode.setAttribute("width", "100%");
    domNode.setAttribute("height", "100%");
    const { outerHTML } = domNode;
    const preface = '<?xml version="1.0" standalone="no"?>\r\n';
    const name = currentTarget.parentElement.nextSibling.textContent;
    const filename = `${name}.svg`;

    const blob = new Blob([preface, outerHTML], {
      type: 'image/svg+xml;charset=utf-8'
    });

    saveAs(blob, filename);
  };

  render() {
    const { searchValue, columns, sortBy } = this.state;
    const { direction, index } = sortBy;
    const SearchIcon = icons.SearchIcon;
    const searchRE = new RegExp(searchValue, 'i');
    const iconRows = iconsData
      .map(({Style, Name, React_name: ReactName, Type, Contextual_usage}) => {
        const Icon = icons[ReactName];
        return {
          cells: [
            {
              title: <Tooltip content="Download SVG" position={TooltipPosition.bottom}><Icon onClick={this.onDownloadSvg} /></Tooltip>,
              props: { column: 'Icon' }
            },
            {
              title: Name,
              props: { column: 'Name' }
            },
            Style,
            {
              title: Type,
              props: { column: 'Type' }
            },
            ReactName,
            {
              title: Contextual_usage,
              props: { column: 'Contextual usage' }
            }
          ]
        }
      });

    let filteredRows = iconRows.filter(row => {
      return row.cells.some(cell => {
        const searchField = typeof cell.title === 'string'
          ? cell.title
          : cell;
        return searchRE.test(searchField);
      })
    })

    if (direction) {
      const sortedRows = filteredRows.sort((a, b) => {
        return a.cells[index].title < b.cells[index].title
          ? -1
          : a.cells[index].title > b.cells[index].title
            ? 1 : 0});
      filteredRows = direction === SortByDirection.asc ? sortedRows : sortedRows.reverse();
    }
    
    return (
      <div>
        <Toolbar id="data-toolbar-table">
          <ToolbarContent>
            <ToolbarItem>
              <InputGroup>
                <TextInput
                  name="iconsSearch"
                  id="iconsSearch" type="search"
                  aria-label="Search icons"
                  placeholder="Search for any icon, attribute, or usage guideline"
                  value={searchValue}
                  onChange={this.handleSearchChange}
                />
                <Button variant={ButtonVariant.control} aria-label="search button for search input">
                  <SearchIcon />
                </Button>
              </InputGroup>
            </ToolbarItem>
            <ToolbarItem alignment={{ default: 'alignRight' }}>
              <b>{filteredRows.length} items</b>
            </ToolbarItem>
          </ToolbarContent>
        </Toolbar>
        <Divider />
        <Table
          aria-label="Sortable Table"
          sortBy={sortBy}
          onSort={this.onSort}
          cells={columns}
          rows={filteredRows}
          variant={TableVariant.compact}
          id="ws-icons-table"
        >
          <TableHeader />
          <TableBody />
        </Table>

        {filteredRows.length === 0 && (
          <EmptyState variant={EmptyStateVariant.full}>
            <EmptyStateIcon icon={icons.SearchIcon}/>
            <Title headingLevel="h5" size="2xl">
              No results found for "{ searchValue }"
            </Title>
            <EmptyStateBody>
            We couldn't find any icons that matched your search. If none of the icons listed fit 
            your use case, you may use any additional 'fa' icons within <a href="https://fontawesome.com/icons?d=gallery&amp;m=free">Font Awesome's free set</a>.
            </EmptyStateBody>
          </EmptyState>
        )}
      </div>
    );
  }
}
