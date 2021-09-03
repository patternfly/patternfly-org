import React from 'react';
import { Badge } from '@patternfly/react-core';
import {
  Table,
  TableHeader,
  TableBody,
  cellWidth
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
        caption={<div><span className="ws-prop-required">*</span> indicates prop is required</div>}
        cells={columns}
        gridBreakPoint="grid-lg"
        rows={rows.map((row, idx) => ({
          cells: [
            <div className="pf-m-break-word">
              {row.deprecated && 'Deprecated: '}
              {row.name}
              {row.required ? <span key={row.name} className="ws-prop-required">*</span> : ''}
              {row.beta && (
                <Badge key={`${row.name}-${idx}`} className="ws-beta-badge pf-u-ml-sm">
                  Beta
                </Badge>
              )}
            </div>,
            <div className="pf-m-break-word">
              <PropTypeWithLinks type={row.type} allPropComponents={allPropComponents} />
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
