import React from 'react';
import { Badge } from '@patternfly/react-core';
import { Table, TableHeader, TableBody } from '@patternfly/react-table';

export const PropsTable = ({
  caption,
  rows
}) => {
  const columns = [
    { title: 'Name' },
    { title: 'Type' },
    { title: 'Required' },
    { title: 'Default' },
    { title: 'Description' }
  ];

  return (
    <Table
      className="pf-u-mb-md"
      variant="compact"
      aria-label={caption}
      cells={columns}
      caption={caption}
      gridBreakPoint="grid-lg"
      rows={rows.map((row, idx) => ({
        cells: [
          <div className='pf-m-fit-content'>
            {row.deprecated && 'Deprecated: '}
            {row.name}
            {row.beta &&
              <Badge key={`${row.name}-${idx}`} className="ws-beta-badge pf-u-ml-sm">
                Beta
              </Badge>}
          </div>,
          row.type,
          <div>
            {row.required ? 'Yes' : 'No'}
          </div>,
          row.defaultValue,
          row.description
        ]
      }))}
    >
      <TableHeader />
      <TableBody />
    </Table>
  );
}
