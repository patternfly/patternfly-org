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
import * as iconUnicodes from '@patternfly/patternfly/assets/icons/iconUnicodes.json';

export class IconsTable extends React.Component {
  state = {
    searchValue: '',
    columns: [
      'Icon',
      { title: 'Name', transforms: [sortable] },
      'Style',
      'Type',
      'React',
      { title: 'Contextual usage', transforms: [sortable] },
      { title: 'Tooltip label', props: { style: { overflow: 'visible' } }},
      { title: 'Unicode', props: { className: css(styles.modifiers.fitContent)}}
    ],
    sortBy: {},
    tooltipContent: 'Copy'
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

  onCopyText = event => {
    const text = event.currentTarget.textContent;
    const clipboard = event.currentTarget.parentElement;
    const el = document.createElement('textarea');
    el.value = text.toString();
    clipboard.appendChild(el);
    el.select();
    document.execCommand('copy');
    clipboard.removeChild(el);
    this.setState({ tooltipContent: 'Copied' })
  }

  onHoverUnicode = () => {
    this.setState({ tooltipContent: 'Copy' })
  }

  customRowWrapper = ({
    trRef,
    rowProps,
    ...props
  }) => {
    const removeBorder = props.row.removeBorder;
    const customStyle = {
      borderBottom: 'none'
    }
    return (
      <tr
        {...props}
        ref={trRef}
        style={removeBorder ? customStyle : {}}
      />
    );
  }

  buildRows = ({Style = ' ', Name = ' ', React_name: ReactName = ' ', Type = ' ', Contextual_usage = ' ', color, Label = ' ', Unicode}, removeBorder = false) => {
    const hasIcon = ReactName !== ' ';
    const Icon = hasIcon
      ? icons[ReactName]
      : null;
    // 2 unicodes are hard coded in icons.js, otherwise find in unicodes mapping from Core
    const iconUnicode = Unicode
      ? Unicode
      : iconUnicodes.default[Name];
  
    return {
      removeBorder,
      cells: [
        {
          title: hasIcon
            ? (<Tooltip content="Download SVG" position={TooltipPosition.bottom}><Icon onClick={this.onDownloadSvg} color={color} /></Tooltip>)
            : ' ',
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
        },
        {
          title: Label,
          props: { column: 'Tooltip label' },
        },
        {
          title: <Tooltip content={this.state.tooltipContent} position={TooltipPosition.bottom}><span onMouseEnter={this.onHoverUnicode} onClick={this.onCopyText} color={color}>{iconUnicode}</span></Tooltip>,
          props: { column: 'Unicode' }
        }
      ]
    }
  };

  render() {
    const { searchValue, columns, sortBy } = this.state;
    const { direction, index } = sortBy;
    const SearchIcon = icons.SearchIcon;
    const searchRE = new RegExp(searchValue, 'i');
    const iconRows = iconsData
      .map(row => {
        if (Array.isArray(row)) {
          const lastIdx = row.length - 1;
          return row.map((subRow, idx) => idx < lastIdx
            ? this.buildRows(subRow, true)
            : this.buildRows(subRow, false)
          )
        }
        return this.buildRows(row);
      })

    let filteredRows = iconRows.filter(row => {
      const isSearchMatch = row =>row.cells.some(cell => {
        const searchField = typeof cell.title === 'string'
          ? cell.title
          : cell;
        return searchRE.test(searchField);
      })

      return Array.isArray(row)
        ? row.some(subRow => isSearchMatch(subRow))
        : isSearchMatch(row)
    })

    if (direction) {
      const sortedRows = filteredRows.sort((a, b) => {
        a = Array.isArray(a) ? a[0] : a;
        b = Array.isArray(b) ? b[0] : b;
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
          rows={filteredRows.flat()}
          variant={TableVariant.compact}
          id="ws-icons-table"
          rowWrapper={this.customRowWrapper}
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
