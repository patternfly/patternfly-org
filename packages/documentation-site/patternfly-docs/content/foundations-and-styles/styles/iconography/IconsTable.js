import React from 'react';
import {
  Button,
  Divider,
  SearchInput,
  Toolbar,
  ToolbarContent,
  ToolbarItem,
  EmptyState,
  EmptyStateBody,
  Tooltip,
  TooltipPosition
} from '@patternfly/react-core';
import * as icons from '@patternfly/react-icons';
import './icons.css';
import {
  Table,
  Tbody,
  Thead,
  Tr,
  Th,
  Td
} from '@patternfly/react-table';
import { iconsData } from './icons';
import { saveAs } from 'file-saver';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import * as iconUnicodes from '@patternfly/patternfly/assets/icons/iconUnicodes.json';

export const IconsTable = () => {
  const columns = ['Icon', 'Name', 'Style', 'React', 'Usage', 'Unicode'];
  const [searchValue, setSearchValue] = React.useState('');
  const [isCopied, setCopied] = React.useState(false);
  const [sortByIndex, setSortByIndex] = React.useState(1);
  const [sortDirection, setSortDirection] = React.useState('asc');

  const getSortParams = columnIndex => ({
    sortBy: {
      index: sortByIndex,
      direction: sortDirection,
      defaultDirection: 'asc' // starting sort direction when first sorting a column. Defaults to 'asc'
    },
    onSort: (_event, index, direction) => {
      setSortByIndex(index);
      setSortDirection(direction);
    },
    columnIndex
  });

  const onDownloadSvg = (currentTarget, name) => {
    const domNode = currentTarget.querySelector("svg").cloneNode(true);
    domNode.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    domNode.setAttribute("width", "100%");
    domNode.setAttribute("height", "100%");
    const { outerHTML } = domNode;
    const preface = '<?xml version="1.0" standalone="no"?>\r\n';
    const filename = `${name}.svg`;

    const blob = new Blob([preface, outerHTML], {
      type: 'image/svg+xml;charset=utf-8'
    });

    saveAs(blob, filename);
  };

  const clipboardCopyFunc = (event, text) => {
    navigator.clipboard.writeText(text.toString());
    setCopied(true);
  };

  const filteredRows = React.useMemo(() => {
    return iconsData.filter(icon => {
      return icon.Name.toLowerCase().includes(searchValue.toLowerCase()) ||
        icon.Contextual_usage?.toLowerCase().includes(searchValue.toLowerCase()) ||
        icon.Extra_context?.toLowerCase().includes(searchValue.toLowerCase()) ||
        icon.React_name.toLowerCase().includes(searchValue.toLowerCase()) ||
        (typeof icon.Type === "string" && icon.Type.toLowerCase().includes(searchValue.toLowerCase())) ||
        (Array.isArray(icon.Type) && icon.Type.filter((type) => type.toLowerCase().includes(searchValue.toLowerCase())).length > 0)
    });
  }, [searchValue]);

  const sortedRows = React.useMemo(() => {
    let rows = filteredRows;
    if (sortByIndex !== null) {
      rows.sort((a, b) => {
        const cellA = sortByIndex === 1 ? a.Name.toLowerCase() : a.Contextual_usage.toLowerCase();
        const cellB = sortByIndex === 1 ? b.Name.toLowerCase() : b.Contextual_usage.toLowerCase();
        return cellA < cellB
          ? -1
          : cellA > cellB
            ? 1 : 0
      });
    }
    return sortDirection === 'asc' ? rows : rows.reverse();
  }, [sortByIndex, sortDirection, filteredRows]);

  return (
    <div>
      <Toolbar id="data-toolbar-table">
        <ToolbarContent>
          <ToolbarItem>
            <SearchInput
              name="iconsSearch"
              id="iconsSearch"
              aria-label="Search icons"
              placeholder="Search for any icon, attribute, or usage guideline"
              value={searchValue}
              onChange={(_, value) => setSearchValue(value)}
              onClear={() => setSearchValue('')}
            />
          </ToolbarItem>
          <ToolbarItem align={{ default: 'alignRight' }}>
            <b>{filteredRows.length} items</b>
          </ToolbarItem>
        </ToolbarContent>
      </Toolbar>
      <Divider />
      <Table
        aria-label="Filterable PatternFly icons"
        variant={'compact'}
        id="ws-icons-table"
      >
        <Thead>
          <Tr>
            <Th>{columns[0]}</Th>
            <Th sort={getSortParams(1)}>{columns[1]}</Th>
            <Th>{columns[2]}</Th>
            <Th>{columns[3]}</Th>
            <Th sort={getSortParams(4)}>{columns[4]}</Th>
            <Th modifier="fitContent">{columns[5]}</Th>
          </Tr>
        </Thead>
        <Tbody>
          {sortedRows.map((icon, index) => {
            const Icon = icons[icon.React_name];
            const iconUnicode = icon.Unicode || iconUnicodes.default[icon.Name] || '';

            return (
              <Tr key={index}>
                <Td dataLabel={columns[0]}>
                  <Tooltip content="Download SVG" position={TooltipPosition.right}>
                    <Button
                      aria-label={`Download SVG ${icon.Name}`}
                      onClick={(event) => onDownloadSvg(event.currentTarget, icon.Name)}
                      variant="plain"
                    >
                      <Icon color={icon.color || ''} />
                    </Button>
                  </Tooltip>
                </Td>
                <Td dataLabel={columns[1]} modifier="fitContent">{icon.Name}</Td>
                <Td dataLabel={columns[2]}>{icon.Style}</Td>
                <Td dataLabel={columns[4]}>{icon.React_name}</Td>
                <Td dataLabel={columns[5]}>
                  {icon.Contextual_usage}
                  {icon.Extra_context && (
                    <React.Fragment>
                      <br/><br/>{icon.Extra_context}
                    </React.Fragment>
                  )}
                </Td>
                <Td dataLabel={columns[6]}>
                  <Tooltip
                    trigger="mouseenter focus click"
                    content={<div>{isCopied ? 'Copied' : 'Copy'}</div>}
                    position={TooltipPosition.left}
                    exitDelay={isCopied ? 1000 : 100}
                    onTooltipHidden={() => setCopied(false)}
                  >
                    <Button
                      aria-label={`Copy ${icon.Name} icon unicode to clipboard`}
                      variant="plain"
                      onClick={(event) => clipboardCopyFunc(event, iconUnicode)}
                    >
                      {iconUnicode}
                    </Button>
                  </Tooltip>
                </Td>
              </Tr>
            )
          })}
        </Tbody>
      </Table>

      {filteredRows.length === 0 && (
        <EmptyState titleText={`No results found for "${ searchValue }"`} headingLevel="h4" icon={SearchIcon}>
          <EmptyStateBody>We couldn't find any icons that matched your search. If none of the icons listed fit
            your use case, you may use any additional 'fa' icons within <a href="https://fontawesome.com/icons?d=gallery&amp;m=free">Font Awesome's free set</a>.
          </EmptyStateBody>
        </EmptyState>
      )}
    </div>
  );
}
