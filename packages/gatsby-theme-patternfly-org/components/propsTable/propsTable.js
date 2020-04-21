import React from 'react';
import { Badge } from '@patternfly/react-core';
import { Table, TableHeader, TableBody } from '@patternfly/react-table';

const renderType = prop => {
  if (prop.annotatedType) {
    return prop.annotatedType;
  }
  else if (prop.type) {
    // JS prop
    return prop.type.name;
  } else if (prop.tsType) {
    // TS Prop
    if (prop.tsType.raw) {
      // Raw is like 'h1' | 'h2' | 'h3'
      return prop.tsType.raw;
    }
    return prop.tsType.name;
  }

  return '';
};

export const PropsTable = props => {
  const columns = [
    { title: 'Name' },
    { title: 'Type' },
    { title: 'Required' },
    { title: 'Default' },
    { title: 'Description' }
  ];

  return (
    <Table
      variant="compact"
      aria-label={props.caption}
      cells={columns}
      caption={props.caption}
      gridBreakPoint="grid-lg"
      rows={props.rows
        .filter(row => !row.hide)
        .map((row, idx) => ({
          cells: [
            <div className='pf-m-fit-content'>
              {row.deprecated && 'Deprecated: '}
              {row.name}
              {row.beta && <Badge key={`${row.name}-${idx}`} className="ws-beta-badge pf-u-ml-sm">Beta</Badge>}
            </div>,
            renderType(row),
            <div>
              {row.required ? 'Yes' : 'No'}
            </div>,
            row.defaultValue && row.defaultValue.value,
            row.description
          ]
        }))}
    >
      <TableHeader />
      <TableBody />
    </Table>
  );
}
