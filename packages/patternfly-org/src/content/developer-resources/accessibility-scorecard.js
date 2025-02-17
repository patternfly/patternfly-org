import React from 'react';
import { Table, Caption, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';
import { a11yScores } from './a11y-scores';
import { capitalize } from '@patternfly/documentation-framework/helpers/capitalize';

export const AccessibilityScorecard = () => {
  const columnNames = ['criteria', 'status', 'notes'];

  // Get latest report data
  const latestReport = Object.entries(a11yScores[0])[0];
  const [reportDate, reportData] = latestReport;

  return (
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
  );
};
