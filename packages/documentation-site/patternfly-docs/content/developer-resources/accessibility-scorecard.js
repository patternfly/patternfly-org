import React from 'react';
import { Menu, MenuContainer, MenuToggle, MenuContent, MenuList, MenuItem } from '@patternfly/react-core';
import { Table, Caption, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';
import { a11yScores } from './a11y-scores';
import { capitalize } from '@patternfly/documentation-framework/helpers/capitalize';

export const AccessibilityScorecard = () => {
  const columnNames = ['criteria', 'status', 'notes'];
  const toggleRef = React.useRef(null);
  const menuRef = React.useRef(null);
  const reportDates = a11yScores.reduce((acc, cur) => [...acc, Object.keys(cur)[0]], []);
  const [isToggleOpen, setIsToggleOpen] = React.useState(false);
  const [selectedReportIndex, setSelectedReportIndex] = React.useState(0);
  // Get selected report based on index above
  const [reportDate, reportData] = Object.entries(a11yScores[selectedReportIndex])[0];
  
  const onSelect = (_event, itemId) => {
    setSelectedReportIndex(itemId);
    setIsToggleOpen(false);
  };

  const onToggleClick = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  const toggle = (
    <MenuToggle ref={toggleRef} onClick={onToggleClick} isExpanded={isToggleOpen}>
      Select report date
    </MenuToggle>
  )

  const menu = (
    <Menu ref={menuRef} role="listbox" onSelect={onSelect} selected={selectedReportIndex}>
      <MenuContent>
        <MenuList aria-label="Accessibility reports by date">
          {reportDates.map((reportDate, idx) => (
            <MenuItem itemId={idx}>{reportDate}</MenuItem> 
          ))}
        </MenuList>
      </MenuContent>
    </Menu>
  );

  return (
    <>
      <MenuContainer
        isOpen={isToggleOpen}
        onOpenChange={(isToggleOpen) => setIsToggleOpen(isToggleOpen)}
        menu={menu}
        menuRef={menuRef}
        toggle={toggle}
        toggleRef={toggleRef}
      />
      <Table aria-label="PatternFly.org accessibility scorecard">
        <Caption>Report generated {reportDate}</Caption>
        <Thead>
          <Tr>
            {columnNames.map(columnName => (
              <Th key={columnName}>
                {capitalize(columnName)}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {reportData.map((row, idx) => (
            <Tr key={`${reportDate}-row${idx}`}>
              {columnNames.map(columnName => (
                <Td key={`${reportDate}-row${idx}-${columnName}`} dataLabel={columnName}>
                  {row[columnName]}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
};




