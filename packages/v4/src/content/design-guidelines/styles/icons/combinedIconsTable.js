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
  Spinner,
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
// TODO: Remove these into props
import { iconRecommendations } from './icon-migrations';
import { allIcons } from './icons-all';
// End remove
import { saveAs } from 'file-saver';
import faArrowCircleODown from './fa-arrow-circle-o-down.svg';
import faArrowCircleOUp from './fa-arrow-circle-o-up.svg';
import faClockO from './fa-clock-o.svg';
import faColumns from './fa-columns.svg';
import faTable from './fa-table.svg';
import faTachometer from './fa-tachometer.svg';
import faThLarge from './fa-th-large.svg';
import faTh from './fa-th.svg';
import pfIconHistory from './pf-icon-history.svg';
import pficonKey from './pficon-key.svg';
import pficonSearch from './pficon-search.svg';
import pficonSettings from './pficon-settings.svg';

const iconSvgs = {
  'fa-arrow-circle-o-down': faArrowCircleODown,
  'fa-arrow-circle-o-up': faArrowCircleOUp,
  'fa-clock-o': faClockO,
  'fa-columns': faColumns,
  'fa-table': faTable,
  'fa-tachometer': faTachometer,
  'fa-th-large': faThLarge,
  'fa-th': faTh,
  'pf-icon-history': pfIconHistory,
  'pficon-key': pficonKey,
  'pficon-search': pficonSearch,
  'pficon-settings': pficonSettings
};

const allIconRows = allIcons.map((rowObj, idx) => {
  console.log(rowObj);
  const { reactIcon, Name, Style, Type, React_name: ReactName, color } = rowObj;
  const columnNames = Object.keys(rowObj).filter(key => key !== 'color');
  const cells = columnNames.map(columnName => { // old
    const cellObj = {
      title: [],
      key: `${columnName}-${idx}`
    }; 
    
    rowObj[columnName].map((cellText, index) => {
      const isIconColumn = columnName === 'reactIcon';
      const Icon = isIconColumn ? icons[cellText] : null;

      if (isIconColumn) console.log(cellText, Icon);
      const SpinnerComponent = cellText === 'PF-Spinner-Component';
      
      cellObj.title.push(
        <div className={`ws-recommendations-entry`} key={`${name}-${index}`}>
          {!isIconColumn
            ? cellText
            : (<span className="ws-recommendations-icon">
                {Icon && <Icon color={color} />}
                {SpinnerComponent && <Spinner size='md' />}
              </span>)
          }
        </div>
      );
    })
    return cellObj;
  });
  return cells;
});

const recIconRows = iconRecommendations.map((rowObj, idx) => {
  const columnNames = Object.keys(rowObj);
  const cells = columnNames.map(columnName => { // old
    const cellObj = {
      title: [],
      key: `${columnName}-${idx}`
    }; 
    rowObj[columnName].map((cellLine, index) => {
      const { icon, name, reactIcon } = cellLine;
      const Icon = reactIcon !== 'svg' && icons[reactIcon];
      const iconSvg = reactIcon === 'svg' && <img src={iconSvgs[name]} className="ws-icon-svg" alt={`${icon} icon`} />;
      const SpinnerComponent = reactIcon === 'PF-Spinner-Component';
      
      (columnName === 'iconUsage')
        ? cellObj.title.push(<div className="ws-recommendations-entry" key={`${name}-${index}`}>{cellLine}</div>)
        : cellObj.title.push(<div className={`${css(styles.modifiers.fitContent)} ws-recommendations-entry`} key={`${name}-${index}`}>
          <span className="ws-recommendations-icon">
            {Icon && <Icon />}
            {iconSvg}
            {SpinnerComponent && <Spinner size='md' />}
          </span>
          {icon}
        </div>);

      return null;
    });
    return cellObj;
  });
  return cells;
});

export const CombinedIconsTable = ({isRecommendationsTable = false, isAllIconsTable = false}) => {
  const [searchValue, setSearchValue] = useState('');
  const [sortBy, setSortBy] = useState({});
  const { direction, index } = sortBy;
  const SearchIcon = icons.SearchIcon;
  const searchRE = new RegExp(searchValue, 'i');
  const recIconsColumns = [
    { title: 'Old icon', transforms: [sortable], props: { className: css(styles.modifiers.fitContent)} },
    { title: 'Updated icon', transforms: [sortable], props: { className: css(styles.modifiers.fitContent)} },
    'Contextual usage'
  ];
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

  const onDownloadSvg = ({ currentTarget }) => {
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

  // TODO: make dynamic
  console.log('isAllIconsTable', isAllIconsTable);
  const iconRows = isAllIconsTable
    ? allIconRows
    : recIconRows;
  console.log('iconRows: ', iconRows);

  // TODO: Make dynamic
  // not needed
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

  // console.log('filteredRows',filteredRows)
  
  return (
    <div>
      <Toolbar id="data-toolbar">
        <ToolbarContent>
          <ToolbarItem>
            <InputGroup>
              <TextInput
              // TODO: make dynamic
                name="recommendedIconsSearch"
                id="recommendedIconsSearch" type="search"
                aria-label="Search icons"
                placeholder="Search for any icon or usage guideline"
                value={searchValue}
                onChange={handleSearchChange}
              />
              {/* <Button variant={ButtonVariant.control} aria-label="search button for search input">
                <SearchIcon />
              </Button> */}
            </InputGroup>
          </ToolbarItem>
          <ToolbarItem alignment={{ default: 'alignRight' }}>
            <b>{filteredRows.length} items</b>
          </ToolbarItem>
        </ToolbarContent>
      </Toolbar>
      <Divider />
      <Table
        // TODO: make dynamic
        aria-label="Updated icons table"
        sortBy={sortBy}
        onSort={onSort}
        // cells={columns}
        cells={allIconsColumns}
        // rows={filteredRows}
        rows={iconRows}
        variant={TableVariant.compact}
        // TODO: make dynamic
        className="ws-icons-recommendations"
      >
        <TableHeader />
        <TableBody />
      </Table>

      {filteredRows.length === 0 && (
        <EmptyState variant={EmptyStateVariant.full}>
          <EmptyStateIcon icon={icons.SearchIcon}/>
          <Title headingLevel="h5" size="2xl">
            No results found for "{ searchValue }".
          </Title>
          <EmptyStateBody>
            We couldn't find any icons that matched your search.
            {/* TODO: does this work? */}
            { isAllIconsTable
              ? `Try entering a new search term to find what you're looking for.`
              : `If none of the icons listed fit your use case, you may use any additional 'fa' icons within ${<a href="https://fontawesome.com/icons?d=gallery&amp;m=free">Font Awesome's free set</a>}.` }
          </EmptyStateBody>
        </EmptyState>
      )}
    </div>
  );
}
