import React from 'react';
import { iconRecommendations } from './recommendations';
import {
  Table,
  TableHeader,
  TableBody,
  // TableVariant
} from '@patternfly/react-table';
import * as icons from '@patternfly/react-icons';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';

export const IconRecommendations = () => {
  const columns = ['Old icon', 'Updated icon', 'Updated contextual usage'];
  const rows = iconRecommendations.map((rowObj, idx) => {
    const columnNames = Object.keys(rowObj);
    const cells = columnNames.map(columnName => { // old
      const cellObj = {
        title: [],
        key: `${columnName}-${idx}`
      }; 
      rowObj[columnName].map((cellLine, index) => {
        const { icon, name, reactIcon } = cellLine;
        const Icon = icons[reactIcon];
        (columnName === 'iconUsage')
          ? cellObj.title = cellLine
          : cellObj.title.push(<div className={`${css(styles.modifiers.fitContent)} ws-recommendations-entry`} key={`${name}-${index}`}><span className="ws-recommendations-icon">{Icon && <Icon />}</span>{icon}</div>);
          return null;
      })
      return cellObj;
    });
    return cells;
  });

  return (
    <Table
      aria-label="Updated icons table"
      cells={columns}
      rows={rows}
      className="ws-icons-recommendations"
      // variant={TableVariant.compact}
    >
      <TableHeader />
      <TableBody />
    </Table>
  )
}
