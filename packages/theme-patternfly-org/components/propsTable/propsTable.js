import React from 'react';
import { Badge } from '@patternfly/react-core';
import {
  Table,
  TableHeader,
  TableBody,
  fitContent,
  cellWidth,
  breakWord
} from '@patternfly/react-table';
import { AutoLinkHeader } from '../autoLinkHeader/autoLinkHeader';
import { PropTypeWithLinks } from './propTypeWithLinks';

export const PropsTable = ({
  title,
  rows,
  allPropComponents
}) => {
  const columns = [
    { title: 'Name', transforms: [cellWidth(15)] },
    { title: 'Type', transforms: [cellWidth(20)] },
    { title: 'Required', transforms: [fitContent] },
    { title: 'Default', transforms: [] },
    { title: 'Description', transforms: [] }
  ];

  return (
    <React.Fragment>
      <AutoLinkHeader size="h3">
        {title}
      </AutoLinkHeader>
      <Table
        className="pf-u-mt-md pf-u-mb-lg"
        variant="compact"
        aria-label={title}
        cells={columns}
        gridBreakPoint="grid-lg"
        rows={rows.map((row, idx) => ({
          cells: [
            <div className="pf-m-break-word">
              {row.deprecated && 'Deprecated: '}
              {row.name}
              {row.beta && (
                <Badge key={`${row.name}-${idx}`} className="ws-beta-badge pf-u-ml-sm">
                  Beta
                </Badge>
              )}
            </div>,
            <div className="pf-m-break-word">
              <PropTypeWithLinks type={row.type} allPropComponents={allPropComponents} />
            </div>,
            <div>
              {row.required ? 'Yes' : 'No'}
            </div>,
            <div className="pf-m-break-word">
              {row.defaultValue}
            </div>,
            <div className="pf-m-break-word">
              {row.description}
            </div>
          ]
        }))}
      >
        <TableHeader />
        <TableBody />
      </Table>
    </React.Fragment>
  );
}
