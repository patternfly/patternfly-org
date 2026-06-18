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
import RhUiSearchIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-search-icon';

const REACT_COLUMN_LABEL = 'React name';

export const IconsTable = () => {
  const columns = ['Icon', 'Name', 'React', 'Usage'];
  const [searchValue, setSearchValue] = React.useState('');
  const [sortByIndex, setSortByIndex] = React.useState(1);
  const [sortDirection, setSortDirection] = React.useState('asc');
  /** Which row’s React name was last copied (for tooltip feedback). */
  const [copiedReactName, setCopiedReactName] = React.useState(null);

  React.useEffect(() => {
    setCopiedReactName(null);
  }, [searchValue]);

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
        aria-label="Filterable Red Hat UI icons"
        variant={'compact'}
        id="ws-icons-table"
      >
        <Thead>
          <Tr>
            <Th>{columns[0]}</Th>
            <Th sort={getSortParams(1)}>{columns[1]}</Th>
            <Th>{REACT_COLUMN_LABEL}</Th>
            <Th sort={getSortParams(3)}>{columns[3]}</Th>
          </Tr>
        </Thead>
        <Tbody>
          {sortedRows.map((icon, index) => {
            const Icon = icons[icon.React_name];

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
                <Td dataLabel={REACT_COLUMN_LABEL} modifier="fitContent">
                  <Tooltip
                    trigger="mouseenter focus click"
                    content={<div>{copiedReactName === icon.React_name ? 'Copied' : 'Copy React name'}</div>}
                    position={TooltipPosition.left}
                    exitDelay={copiedReactName === icon.React_name ? 1000 : 100}
                    onTooltipHidden={() => {
                      if (copiedReactName === icon.React_name) {
                        setCopiedReactName(null);
                      }
                    }}
                  >
                    <span
                      role="button"
                      tabIndex={0}
                      className="ws-icons-react-name-copy"
                      aria-label={`Copy ${icon.React_name} to clipboard`}
                      onClick={() => {
                        navigator.clipboard.writeText(icon.React_name);
                        setCopiedReactName(icon.React_name);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          navigator.clipboard.writeText(icon.React_name);
                          setCopiedReactName(icon.React_name);
                        }
                      }}
                    >
                      {icon.React_name}
                    </span>
                  </Tooltip>
                </Td>
                <Td dataLabel={columns[3]}>
                  {icon.Contextual_usage}
                  {icon.Extra_context && (
                    <React.Fragment>
                      <br/><br/>{icon.Extra_context}
                    </React.Fragment>
                  )}
                </Td>
              </Tr>
            )
          })}
        </Tbody>
      </Table>

      {filteredRows.length === 0 && (
        <EmptyState titleText={`No results found for "${ searchValue }"`} headingLevel="h4" icon={RhUiSearchIcon}>
          <EmptyStateBody>
            We couldn't find any icons that matched your search. Try different keywords or browse the full list above.
            If you need an icon that isn't listed, you can{' '}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSde61rTDD4keaZEA3JFzBPbQVJ5EgEkhNapsYoI6ajKCsX4_Q/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              request a new icon from the Red Hat brand team
            </a>
            .
          </EmptyStateBody>
        </EmptyState>
      )}
    </div>
  );
}
