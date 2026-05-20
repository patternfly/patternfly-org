import React from 'react';
import { Button, Tooltip, TooltipPosition } from '@patternfly/react-core';
import {
  Table,
  Tbody,
  Thead,
  Tr,
  Th,
  Td
} from '@patternfly/react-table';
import RhUiArrowCircleUpIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-arrow-circle-up-icon';
import RhUiNotificationFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-notification-fill-icon';
import RhUiSettingsIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-settings-icon';
import RhUiCopyIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-copy-icon';
import RhUiDownloadIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-download-icon';
import RhUiEllipsisVerticalIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-ellipsis-vertical-icon';
import RhUiEditIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-edit-icon';
import RhUiSearchIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-search-icon';
import RhUiZoomOutIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-zoom-out-icon';
import RhUiZoomInIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-zoom-in-icon';
import RhUiSyncIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-sync-icon';
import RhUiTrashIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-trash-icon';
import RhUiExportIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-export-icon';
import RhUiTaskIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-task-icon';

const REACT_LABEL = 'React name';

const ROWS = [
  { Icon: RhUiArrowCircleUpIcon, name: 'rh-ui-arrow-circle-up', reactName: 'RhUiArrowCircleUpIcon', tooltip: 'Upgrade', note: '' },
  { Icon: RhUiNotificationFillIcon, name: 'rh-ui-notification-fill', reactName: 'RhUiNotificationFillIcon', tooltip: 'Notifications', note: '' },
  { Icon: RhUiSettingsIcon, name: 'rh-ui-settings', reactName: 'RhUiSettingsIcon', tooltip: 'Settings', note: '' },
  { Icon: RhUiCopyIcon, name: 'rh-ui-copy', reactName: 'RhUiCopyIcon', tooltip: 'Copy', note: '' },
  { Icon: RhUiDownloadIcon, name: 'rh-ui-download', reactName: 'RhUiDownloadIcon', tooltip: 'Download', note: '' },
  { Icon: RhUiEllipsisVerticalIcon, name: 'rh-ui-ellipsis-vertical', reactName: 'RhUiEllipsisVerticalIcon', tooltip: 'More options', note: '' },
  { Icon: RhUiEditIcon, name: 'rh-ui-edit', reactName: 'RhUiEditIcon', tooltip: 'Edit', note: '' },
  { Icon: RhUiSearchIcon, name: 'rh-ui-search', reactName: 'RhUiSearchIcon', tooltip: 'Search', note: '' },
  { Icon: RhUiZoomOutIcon, name: 'rh-ui-zoom-out', reactName: 'RhUiZoomOutIcon', tooltip: 'Zoom out', note: '' },
  { Icon: RhUiZoomInIcon, name: 'rh-ui-zoom-in', reactName: 'RhUiZoomInIcon', tooltip: 'Zoom in', note: '' },
  { Icon: RhUiSyncIcon, name: 'rh-ui-sync', reactName: 'RhUiSyncIcon', tooltip: 'Sync', note: 'Choose the best fit for your scenario.' },
  { Icon: RhUiTrashIcon, name: 'rh-ui-trash', reactName: 'RhUiTrashIcon', tooltip: 'Delete', note: '' },
  { Icon: RhUiExportIcon, name: 'rh-ui-export', reactName: 'RhUiExportIcon', tooltip: 'Export', note: '' },
  { Icon: RhUiTaskIcon, name: 'rh-ui-task', reactName: 'RhUiTaskIcon', tooltip: 'Tasks', note: '' }
];

export const TooltipIconReferenceTable = () => {
  const [copiedReactName, setCopiedReactName] = React.useState(null);

  return (
    <Table aria-label="Icon tooltip reference" variant="compact">
      <Thead>
        <Tr>
          <Th>Icon</Th>
          <Th>Name</Th>
          <Th>{REACT_LABEL}</Th>
          <Th>Tooltip content</Th>
          <Th>Note</Th>
        </Tr>
      </Thead>
      <Tbody>
        {ROWS.map((row) => {
          const Icon = row.Icon;
          return (
            <Tr key={row.reactName}>
              <Td dataLabel="Icon">
                <Tooltip content={row.tooltip} position={TooltipPosition.right}>
                  <Button variant="plain" aria-label={`Suggested tooltip label: ${row.tooltip}`}>
                    <Icon />
                  </Button>
                </Tooltip>
              </Td>
              <Td dataLabel="Name" modifier="fitContent">
                {row.name}
              </Td>
              <Td dataLabel={REACT_LABEL} modifier="fitContent">
                <Tooltip
                  trigger="mouseenter focus click"
                  content={<div>{copiedReactName === row.reactName ? 'Copied' : 'Copy React name'}</div>}
                  position={TooltipPosition.left}
                  exitDelay={copiedReactName === row.reactName ? 1000 : 100}
                  onTooltipHidden={() => {
                    if (copiedReactName === row.reactName) {
                      setCopiedReactName(null);
                    }
                  }}
                >
                  <span
                    style={{ cursor: 'pointer' }}
                    role="button"
                    tabIndex={0}
                    aria-label={`Copy ${row.reactName} to clipboard`}
                    onClick={() => {
                      navigator.clipboard.writeText(row.reactName);
                      setCopiedReactName(row.reactName);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        navigator.clipboard.writeText(row.reactName);
                        setCopiedReactName(row.reactName);
                      }
                    }}
                  >
                    {row.reactName}
                  </span>
                </Tooltip>
              </Td>
              <Td dataLabel="Tooltip content">{row.tooltip}</Td>
              <Td dataLabel="Note">{row.note || null}</Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};
