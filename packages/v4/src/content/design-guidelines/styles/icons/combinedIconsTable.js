import React, { useState } from 'react';
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
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
import { iconsArray } from './icons-all';
import { saveAs } from 'file-saver';

const filterRows = (rowsArr, searchTerm) => rowsArr.filter(row => (
  row.some(rowObj => Object.values(rowObj).some(val => val.includes(searchTerm)))
));

const buildColumnsObj = tableColumnsArr => (
  tableColumnsArr.reduce((obj, columnName) => {
    obj[columnName] = [];
    return obj;
  }, {})
);

const buildAllIconsRows = (arr, columnsNamesArr, searchTerm = '') => {
  const filteredRows = filterRows(arr, searchTerm);
  return filteredRows.map(recGroupArr => {
    const newObj = buildColumnsObj(columnsNamesArr);
    return recGroupArr.reduce((acc, cur) => {
      columnsNamesArr.map(name => {
        name !== 'reactName' && newObj[name].push(cur[name] || ' ');
        name === 'reactIcon' && newObj.reactName.push(cur[name]);
      });
      return newObj;
    }, '')
  })
};

const onDownloadSvg = ({ currentTarget }) => {
  const domNode = currentTarget.cloneNode(true);
  domNode.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  domNode.setAttribute("width", "100%");
  domNode.setAttribute("height", "100%");
  const { outerHTML } = domNode;
  const preface = '<?xml version="1.0" standalone="no"?>\r\n';
  const name = currentTarget.id;
  const filename = `${name}.svg`;

  const blob = new Blob([preface, outerHTML], {
    type: 'image/svg+xml;charset=utf-8'
  });

  saveAs(blob, filename);
};

const buildAllIcons = searchTerm => buildAllIconsRows(iconsArray, ['reactIcon', 'name', 'style', 'type', 'reactName', 'iconUsage', 'color'], searchTerm);

const buildAllIconRows = searchTerm => buildAllIcons(searchTerm)
.map((rowObj, idx) => {
  const { color } = rowObj;
  const columnNames = Object.keys(rowObj).filter(key => key !== 'color');
  const cells = columnNames.map(columnName => { // old
    const cellObj = {
      title: [],
      key: `${columnName}-${idx}`
    }; 
    
    rowObj[columnName].map((cellText, index) => {
      const isIconColumn = columnName === 'reactIcon';
      const Icon = isIconColumn ? icons[cellText] : null;
      const iconColor = isIconColumn ? color[index] : null;

      cellObj.title.push(
        <div className={`ws-icons-entry`} key={`${idx}-${index}`}>
          {!isIconColumn
            ? cellText
            : (
              <div>
                <Tooltip
                  content="Download SVG"
                  position={TooltipPosition.bottom}
                >
                  <Icon onClick={onDownloadSvg} color={iconColor} id={`${cellText}-${index}`} />
                </Tooltip>
              </div>
            )
          }
        </div>
      );
    })
    return cellObj;
  });
  return cells;
});

export const CombinedIconsTable = () => {
  const [searchValue, setSearchValue] = useState('');
  const [sortBy, setSortBy] = useState({});
  const { direction, index } = sortBy;
  const SearchIcon = icons.SearchIcon;
  const searchRE = new RegExp(searchValue, 'i');
  const allIconsColumns = [
    'Icon',
    { title: 'Name', transforms: [sortable], props: { className: css(styles.modifiers.fitContent)} },
    'Style',
    { title: 'Type', transforms: [sortable] },
    { title: 'React', props: { className: css(styles.modifiers.fitContent)} },
    { title: 'Contextual usage', transforms: [sortable] }
  ];

  const handleSearchChange = (checked, event) => {
    const searchValue = event.target.value;
    setSearchValue(searchValue);
  };

  const onSort = (_event, index, direction) => {
    setSortBy({
      sortBy: { index, direction }
    });
  }

  const iconRows = buildAllIconRows(searchValue);

  let filteredRows = iconRows.filter(row => {
    return row.some(cell => {
      const searchField = Array.isArray(cell.title)
        ? cell.title.reduce((acc, cur) => acc += (cur.key.split('-').slice(0, -1).join('-') + ' '), '').trim()
        : cell.title.props.children;
      return searchRE.test(searchField);
    })
  })

  if (direction) {
    const sortedRows = filteredRows.sort((a, b) => {
      const cellA = a[index].title[0].key.toLowerCase();
      const cellB = b[index].title[0].key.toLowerCase();
      return cellA < cellB
        ? -1
        : cellA > cellB
          ? 1 : 0});
    filteredRows = direction === SortByDirection.asc ? sortedRows : sortedRows.reverse();
  }
  
  return (
    <div>
      <Toolbar id="data-toolbar">
        <ToolbarContent>
          <ToolbarItem>
            <InputGroup>
              <TextInput
                name="recommendedIconsSearch"
                id="recommendedIconsSearch" type="search"
                aria-label="Search icons"
                placeholder="Search for any icon or usage guideline"
                value={searchValue}
                onChange={handleSearchChange}
              />
              <Button variant={ButtonVariant.control} aria-label="search button for search input">
                <SearchIcon />
              </Button>
            </InputGroup>
          </ToolbarItem>
          <ToolbarItem alignment={{ default: 'alignRight' }}>
            <b>{iconRows.length} items</b>
          </ToolbarItem>
        </ToolbarContent>
      </Toolbar>
      <Divider />
      <Table
        aria-label="Sortable icons table"
        sortBy={sortBy}
        onSort={onSort}
        cells={allIconsColumns}
        rows={iconRows}
        variant={TableVariant.compact}
        id="ws-icons-table"
      >
        <TableHeader />
        <TableBody />
      </Table>

      {iconRows.length === 0 && (
        <EmptyState variant={EmptyStateVariant.full}>
          <EmptyStateIcon icon={icons.SearchIcon}/>
          <Title headingLevel="h5" size="2xl">
            No results found for "{ searchValue }".
          </Title>
          <EmptyStateBody>
            We couldn't find any icons that matched your search. Try entering a new search term to find what you're looking for. If none of the icons listed fit your use case, you may use any additional 'fa' icons within <a href="https://fontawesome.com/icons?d=gallery&amp;m=free">Font Awesome's free set</a>.
          </EmptyStateBody>
        </EmptyState>
      )}
    </div>
  );
}
