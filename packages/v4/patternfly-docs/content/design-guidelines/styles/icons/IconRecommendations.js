import React from 'react';
import {
  Divider,
  SearchInput,
  Toolbar,
  ToolbarContent,
  ToolbarItem,
  EmptyState,
  EmptyStateHeader,
  EmptyStateIcon,
  EmptyStateBody,
  Spinner
} from '@patternfly/react-core';
import * as icons from '@patternfly/react-icons';
import './icons.css';
import {
  Table,
  Thead,
  Th,
  Tr,
  Td,
  Tbody
} from '@patternfly/react-table';
import { recommendationsArray } from './icon-migrations';
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
import SearchIcon from "@patternfly/react-icons/dist/esm/icons/search-icon";

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

export const IconRecommendations = () => {
  const [searchValue, setSearchValue] = React.useState('');

  const filteredRows = React.useMemo(() => {
    return recommendationsArray.filter(recommendation => {
      const oldRec = recommendation[0];
      const newRec = recommendation[1];
      return oldRec.iconName.toLowerCase().includes(searchValue.toLowerCase()) ||
        oldRec.iconUsage.toLowerCase().includes(searchValue.toLowerCase()) ||
        oldRec.type.toLowerCase().includes(searchValue.toLowerCase()) ||
        newRec.iconName.toLowerCase().includes(searchValue.toLowerCase()) ||
        newRec.iconUsage.toLowerCase().includes(searchValue.toLowerCase()) ||
        newRec.type.toLowerCase().includes(searchValue.toLowerCase())
    });
  }, [searchValue]);

  return (
    <div>
      <Toolbar id="data-toolbar-recs">
        <ToolbarContent>
          <ToolbarItem>
            <SearchInput
              name="recommendedIconsSearch"
              id="recommendedIconsSearch"
              aria-label="Search update icon recommendations"
              placeholder="Search for any icon or usage guideline"
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
        aria-label="Updated icons table"
        className="ws-icons-recommendations"
        variant="compact"
      >
        <Thead>
          <Tr>
            <Th>Old icon</Th>
            <Th>Updated icon</Th>
            <Th>Contextual usage</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredRows.map((recommendation, index) => (
            <Tr key={index}>
              <Td data-label="Old icon" modifier="fitContent">
                {recommendation.map(oldRec => {
                  if (oldRec.iconType === "old") {
                    const oldIconSvg = oldRec.reactIcon === 'svg' &&
                      <img src={iconSvgs[oldRec.iconName]} className="ws-icon-svg" alt={`${oldRec.iconName} icon`}/>;
                    const OldIcon = oldRec.reactIcon !== 'svg' && icons[oldRec.reactIcon];
                    return (
                      <div className="ws-recommendations-entry">
                      <span className="ws-recommendations-icon">
                        {OldIcon && <OldIcon/>}
                        {oldIconSvg}
                      </span>
                        {oldRec.iconName}
                      </div>
                    );
                  } else return '';
                })}
              </Td>
              <Td data-label="Updated icon"  modifier="fitContent">
                {recommendation.map(newRec => {
                  if (newRec.iconType === "new") {
                    const newIconSvg = newRec.reactIcon === 'svg' &&
                      <img src={iconSvgs[newRec.iconName]} className="ws-icon-svg" alt={`${newRec.iconName} icon`}/>;
                    const NewIcon = newRec.reactIcon !== 'svg' && icons[newRec.reactIcon];
                    return (
                      <div className="ws-recommendations-entry">
                        <span className="ws-recommendations-icon">
                          {NewIcon && <NewIcon/>}
                          {newIconSvg}
                          {newRec.reactIcon === 'PF-Spinner-Component' && <Spinner size='md'/>}
                        </span>
                        {newRec.iconName}
                      </div>
                    );
                  } else return '';
                })}
              </Td>
              <Td data-label="Contextual usage">
                {recommendation.map(rec => {
                  return rec.iconUsage
                })}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      {filteredRows.length === 0 && (
        <EmptyState>
          <EmptyStateHeader titleText={`No results found for "${ searchValue }"`} headingLevel="h5" icon={<EmptyStateIcon icon={SearchIcon} />} />
          <EmptyStateBody>
            We couldn't find any icons that matched your search. Try entering a new search term to find what you're looking for.
          </EmptyStateBody>
        </EmptyState>
      )}
    </div>
  );
}
