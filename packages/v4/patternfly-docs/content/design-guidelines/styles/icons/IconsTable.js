import React from 'react';
import {
  Button,
  Divider,
  SearchInput,
  Toolbar,
  ToolbarContent,
  ToolbarItem,
  EmptyState,
  EmptyStateHeader,
  EmptyStateIcon,
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
  const columns = ['Icon', 'Name', 'Style', 'React', 'Usage/tooltip', 'Unicode'];
  const [searchValue, setSearchValue] = React.useState('');
  const [isCopied, setCopied] = React.useState(false);

  const onDownloadSvg = (currentTarget, name) => {
    const domNode = currentTarget.children[0].cloneNode(true);
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
        icon.Label?.toLowerCase().includes(searchValue.toLowerCase()) ||
        (typeof icon.Type === "string" && icon.Type.toLowerCase().includes(searchValue.toLowerCase())) ||
        (Array.isArray(icon.Type) && icon.Type.filter((type) => type.toLowerCase().includes(searchValue.toLowerCase())).length > 0)
    });
  }, [searchValue]);

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
            <Th>{columns[1]}</Th>
            <Th>{columns[2]}</Th>
            <Th>{columns[3]}</Th>
            <Th>{columns[4]}</Th>
            <Th>{columns[5]}</Th>
            <Th modifier="fitContent">{columns[6]}</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredRows.map(icon => {
            const Icon = icons[icon.React_name];
            const iconUnicode = icon.Unicode || iconUnicodes.default[icon.Name] || '';
            return (
              <Tr key={icon.Name}>
                <Td dataLabel={columns[0]} className="pf-c-table__favorite">
                  <Tooltip content="Download SVG" position={TooltipPosition.right}>
                    <Button
                      aria-label={`Download SVG ${icon.Name}`}
                      onClick={(event) => onDownloadSvg(event.currentTarget, icon.Name)}
                      variant="plain"
                    >
                      <Icon color={icon.color || 'var(--pf-global--Color--100)'} />
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
                  {icon.Label && (
                    <React.Fragment>
                      <br/><br/>Tooltip:{icon.Label}
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
        <EmptyState>
          <EmptyStateHeader titleText={`No results found for "${ searchValue }"`} headingLevel="h4" icon={<EmptyStateIcon icon={SearchIcon} />} />
          <EmptyStateBody>We couldn't find any icons that matched your search. If none of the icons listed fit
            your use case, you may use any additional 'fa' icons within <a href="https://fontawesome.com/icons?d=gallery&amp;m=free">Font Awesome's free set</a>.
          </EmptyStateBody>
        </EmptyState>
      )}
    </div>
  );
}
