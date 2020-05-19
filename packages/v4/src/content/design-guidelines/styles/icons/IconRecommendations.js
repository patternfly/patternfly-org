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
        const Icon = reactIcon !== 'svg' && icons[reactIcon];
        const iconSvg = reactIcon === 'svg' && <img src={iconSvgs[name]} className="ws-icon-svg" alt={`${icon} icon`} />;
        
        (columnName === 'iconUsage')
          ? cellObj.title = cellLine
          : cellObj.title.push(<div className={`${css(styles.modifiers.fitContent)} ws-recommendations-entry`} key={`${name}-${index}`}><span className="ws-recommendations-icon">
            {Icon && <Icon />}
            {iconSvg && iconSvg}
            {}
          </span>{icon}</div>);
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
