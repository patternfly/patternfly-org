import React from 'react';
import { Table, TableHeader, TableBody } from '@patternfly/react-table';
import { ExclamationCircleIcon } from '@patternfly/react-icons';

const renderType = prop => {
  if (prop.type) {
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

const PropsTable = props => {
  const columns = [
    { title: 'Name' },
    { title: 'Type' },
    { title: 'Required' },
    { title: 'Default' },
    { title: 'Description' }
  ];

  return (
    <Table
      className="pf-m-grid-2xl"
      variant="compact"
      aria-label={props.caption}
      cells={columns}
      caption={props.caption}
      rows={props.rows.map(row => ({
        cells: [
          row.name,
          renderType(row),
          <div>
            {row.required && <ExclamationCircleIcon />}
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

export default PropsTable;
