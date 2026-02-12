import React, { useRef, useState, useEffect, FunctionComponent, FormEvent, Fragment } from 'react';
import {
  AlertGroup,
  Alert,
  AlertVariant,
  AlertActionCloseButton,
  Brand,
  Button,
  Content,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  ContentVariants,
  EmptyState,
  EmptyStateActions,
  EmptyStateBody,
  EmptyStateFooter,
  Label,
  Masthead,
  MastheadMain,
  MastheadBrand,
  MastheadToggle,
  MastheadContent,
  MastheadLogo,
  Nav,
  NavItem,
  NavList,
  Page,
  PageSection,
  PageSidebar,
  PageSidebarBody,
  PageToggleButton,
  SkipToContent,
  Tabs,
  Tab,
  TabTitleText,
  Dropdown,
  DropdownList,
  DropdownItem,
  MenuToggle,
  Flex,
  ProgressStepper,
  ProgressStep,
  Spinner,
  Modal,
  Wizard,
  WizardHeader,
  WizardStep,
  ToolbarContent,
  ToolbarItem,
  Toolbar,
  DrawerContent,
  DrawerContentBody,
  Drawer,
  DrawerActions,
  DrawerCloseButton,
  DrawerHead,
  DrawerPanelBody,
  DrawerPanelContent,
  DrawerPanelDescription,
  ModalVariant,
  NotificationDrawer,
  NotificationDrawerBody,
  NotificationDrawerHeader,
  NotificationDrawerList,
  NotificationDrawerListItem,
  NotificationDrawerListItemBody,
  NotificationDrawerListItemHeader,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionToggle,
  Checkbox,
  Gallery,
  GalleryItem,
  Pagination,
  PaginationVariant,
  Breadcrumb,
  BreadcrumbItem,
  PageBreadcrumb,
  PageGroup
} from '@patternfly/react-core';
import { Table, Thead, Tbody, Tr, Th, Td, ExpandableRowContent, TableText } from '@patternfly/react-table';
import { rows, columns } from '@patternfly/react-table/dist/esm/demos/sampleData';
import SkeletonTable from '@patternfly/react-component-groups/dist/dynamic/SkeletonTable';

import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-ellipsis-vertical-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-error-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-check-circle-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-warning-icon';
import ResourcesFullIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-resources-full-icon';
import PortIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-port-icon';

// @ts-ignore
// import pfLogo from '@patternfly/patternfly-react/packages/react-core/src/components/assets/PF-HorizontalLogo-Color.svg';

const PfLogo: React.FunctionComponent = () => (
  <svg height="40px" viewBox="0 0 679 158" aria-hidden>
    <title>PatternFly</title>
    <defs>
      <linearGradient x1="68%" y1="0%" x2="32%" y2="100%" id="pf-logo-gradient">
        <stop stopColor="#2B9AF3" offset="0%" />
        <stop stopColor="#73BCF7" stopOpacity={0.5} offset="100%" />
      </linearGradient>
    </defs>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(206.000000, 45.750000)" fill="var(--pf-t--global--text--color--regular)" fillRule="nonzero">
        <path d="M0,65.25 L0,2.25 L33.21,2.25 C37.35,2.25 41.025,3.135 44.235,4.905 C47.445,6.675 49.98,9.09 51.84,12.15 C53.7,15.21 54.63,18.72 54.63,22.68 C54.63,26.46 53.7,29.865 51.84,32.895 C49.98,35.925 47.43,38.31 44.19,40.05 C40.95,41.79 37.29,42.66 33.21,42.66 L15.48,42.66 L15.48,65.25 L0,65.25 Z M15.48,29.88 L31.41,29.88 C33.69,29.88 35.52,29.22 36.9,27.9 C38.28,26.58 38.97,24.87 38.97,22.77 C38.97,20.61 38.28,18.855 36.9,17.505 C35.52,16.155 33.69,15.48 31.41,15.48 L15.48,15.48 L15.48,29.88 Z" />
        <path d="M77.04,66.06 C73.68,66.06 70.695,65.43 68.085,64.17 C65.475,62.91 63.435,61.17 61.965,58.95 C60.495,56.73 59.76,54.18 59.76,51.3 C59.76,46.74 61.485,43.215 64.935,40.725 C68.385,38.235 73.2,36.99 79.38,36.99 C83.1,36.99 86.7,37.44 90.18,38.34 L90.18,36 C90.18,31.26 87.15,28.89 81.09,28.89 C77.49,28.89 72.69,30.15 66.69,32.67 L61.47,21.96 C69.15,18.48 76.56,16.74 83.7,16.74 C90.3,16.74 95.43,18.315 99.09,21.465 C102.75,24.615 104.58,29.04 104.58,34.74 L104.58,65.25 L90.18,65.25 L90.18,62.37 C88.26,63.69 86.235,64.635 84.105,65.205 C81.975,65.775 79.62,66.06 77.04,66.06 Z M73.62,51.03 C73.62,52.53 74.28,53.7 75.6,54.54 C76.92,55.38 78.75,55.8 81.09,55.8 C84.69,55.8 87.72,55.05 90.18,53.55 L90.18,47.43 C87.42,46.71 84.54,46.35 81.54,46.35 C79.02,46.35 77.07,46.755 75.69,47.565 C74.31,48.375 73.62,49.53 73.62,51.03 Z" />
        <path d="M137.25,65.88 C125.73,65.88 119.97,60.84 119.97,50.76 L119.97,29.79 L110.34,29.79 L110.34,17.64 L119.97,17.64 L119.97,5.4 L134.55,2.25 L134.55,17.64 L147.87,17.64 L147.87,29.79 L134.55,29.79 L134.55,47.88 C134.55,49.98 135.015,51.465 135.945,52.335 C136.875,53.205 138.51,53.64 140.85,53.64 C143.01,53.64 145.2,53.31 147.42,52.65 L147.42,64.44 C146.1,64.86 144.42,65.205 142.38,65.475 C140.34,65.745 138.63,65.88 137.25,65.88 Z" />
        <path d="M177.57,65.88 C166.05,65.88 160.29,60.84 160.29,50.76 L160.29,29.79 L150.66,29.79 L150.66,17.64 L160.29,17.64 L160.29,5.4 L174.87,2.25 L174.87,17.64 L188.19,17.64 L188.19,29.79 L174.87,29.79 L174.87,47.88 C174.87,49.98 175.335,51.465 176.265,52.335 C177.195,53.205 178.83,53.64 181.17,53.64 C183.33,53.64 185.52,53.31 187.74,52.65 L187.74,64.44 C186.42,64.86 184.74,65.205 182.7,65.475 C180.66,65.745 178.95,65.88 177.57,65.88 Z" />
        <path d="M217.62,66.15 C212.76,66.15 208.365,65.055 204.435,62.865 C200.505,60.675 197.4,57.72 195.12,54 C192.84,50.28 191.7,46.11 191.7,41.49 C191.7,36.87 192.795,32.7 194.985,28.98 C197.175,25.26 200.16,22.305 203.94,20.115 C207.72,17.925 211.92,16.83 216.54,16.83 C221.22,16.83 225.36,17.955 228.96,20.205 C232.56,22.455 235.395,25.53 237.465,29.43 C239.535,33.33 240.57,37.8 240.57,42.84 L240.57,46.44 L206.64,46.44 C207.6,48.66 209.1,50.475 211.14,51.885 C213.18,53.295 215.58,54 218.34,54 C222.42,54 225.6,52.8 227.88,50.4 L237.51,58.95 C234.51,61.47 231.435,63.3 228.285,64.44 C225.135,65.58 221.58,66.15 217.62,66.15 Z M206.37,36.27 L226.26,36.27 C225.48,33.99 224.205,32.16 222.435,30.78 C220.665,29.4 218.61,28.71 216.27,28.71 C213.87,28.71 211.8,29.37 210.06,30.69 C208.32,32.01 207.09,33.87 206.37,36.27 Z" />
        <path d="M247.41,65.25 L247.41,17.64 L261.99,17.64 L261.99,22.41 C265.23,18.51 269.4,16.56 274.5,16.56 C277.08,16.62 278.91,17.01 279.99,17.73 L279.99,30.42 C277.95,29.46 275.64,28.98 273.06,28.98 C270.78,28.98 268.665,29.505 266.715,30.555 C264.765,31.605 263.19,33.09 261.99,35.01 L261.99,65.25 L247.41,65.25 Z" />
        <path d="M286.29,65.25 L286.29,17.64 L300.87,17.64 L300.87,20.88 C304.47,18.12 308.73,16.74 313.65,16.74 C317.37,16.74 320.655,17.55 323.505,19.17 C326.355,20.79 328.59,23.04 330.21,25.92 C331.83,28.8 332.64,32.13 332.64,35.91 L332.64,65.25 L318.06,65.25 L318.06,37.89 C318.06,35.25 317.28,33.15 315.72,31.59 C314.16,30.03 312.06,29.25 309.42,29.25 C305.76,29.25 302.91,30.51 300.87,33.03 L300.87,65.25 L286.29,65.25 Z" />
        <polygon points="342 65.25 342 2.25 392.04 2.25 392.04 15.66 357.48 15.66 357.48 27.45 380.52 27.45 380.52 40.41 357.48 40.41 357.48 65.25" />
        <polygon points="399.96 65.25 399.96 2.25 414.54 0 414.54 65.25" />
        <path d="M429.21,84.69 C428.07,84.69 426.96,84.645 425.88,84.555 C424.8,84.465 423.9,84.33 423.18,84.15 L423.18,71.73 C424.38,71.97 425.88,72.09 427.68,72.09 C432.36,72.09 435.51,70.05 437.13,65.97 L437.13,65.88 L418.86,17.64 L434.97,17.64 L445.5,47.61 L457.74,17.64 L473.49,17.64 L452.16,67.68 C450.42,71.82 448.5,75.135 446.4,77.625 C444.3,80.115 441.87,81.915 439.11,83.025 C436.35,84.135 433.05,84.69 429.21,84.69 Z" />
      </g>
      <g transform="translate(0.000000, 0.000000)">
        <path d="M61.826087,0 L158,0 L158,96.173913 L147.695652,96.173913 C100.271201,96.173913 61.826087,57.7287992 61.826087,10.3043478 L61.826087,0 Z" fill="var(--pf-t--color--blue--50)" />
        <path d="M158,3.43478261 L65.2608696,158 L138,158 C149.045695,158 158,149.045695 158,138 L158,3.43478261 Z" fill="url(#pf-logo-gradient)" />
        <path d="M123.652174,-30.9130435 L30.9130435,123.652174 L103.652174,123.652174 C114.697869,123.652174 123.652174,114.697869 123.652174,103.652174 L123.652174,-30.9130435 Z" fill="url(#pf-logo-gradient)" transform="translate(77.282609, 46.369565) scale(1, -1) rotate(90) translate(-77.282609, -46.369565)" />
      </g>
    </g>
  </svg>
);

// @ts-ignore
import openshiftLogo from '../Summit-collage-deploying-openshift-product-icon-RH.png';
// @ts-ignore
import emptyStateLogo from '../Summit-collage-hybrid-cloud-dark-RH.png';
import { Application, NotificationType } from '../types';
import { AnimationsOverview } from '../AnimationsOverview';
import { AnimationsCreateDatabaseForm } from '../AnimationsCreateDatabaseForm';
import { AnimationsHeaderToolbar } from '../AnimationsHeaderToolbar';
import { applicationsData } from './ResourceTableData';

import { CodeEditor, Language } from '@patternfly/react-code-editor';

// Simple component to wrap the empty state logo
const EmptyStateLogoIcon: React.FunctionComponent = () => (
  <img src={emptyStateLogo} alt="Empty state" style={{ width: '200px', height: '200px' }} />
);

const mainContainerPageId = 'main-content-page-layout-default-nav';
const expandableColumns = ['Applications', 'Server', 'Branch', 'Status'];
const initialExpandedServerNames = ['Cost Management']; // Default to expanded

export const AccordionSingleExpandBehavior: React.FunctionComponent = ({ children }) => {
  const [expanded, setExpanded] = useState(undefined);

  const onToggle = (id: string) => {
    if (id === expanded) {
      setExpanded(undefined);
    } else {
      setExpanded(id);
    }
  };

  return (
    <Accordion asDefinitionList={false}>
      <AccordionItem isExpanded={expanded === 'ex-toggle1'}>
        <AccordionToggle
          onClick={() => {
            onToggle('ex-toggle1');
          }}
          id="ex-toggle1"
        >
          Item one
        </AccordionToggle>
        <AccordionContent id="ex-expand1">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem isExpanded={expanded === 'ex-toggle2'}>
        <AccordionToggle
          onClick={() => {
            onToggle('ex-toggle2');
          }}
          id="ex-toggle2"
        >
          Item two
        </AccordionToggle>
        <AccordionContent id="ex-expand2">
          <p>
            Vivamus et tortor sed arcu congue vehicula eget et diam. Praesent nec dictum lorem. Aliquam id diam
            ultrices, faucibus erat id, maximus nunc.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem isExpanded={expanded === 'ex-toggle3'}>
        <AccordionToggle
          onClick={() => {
            onToggle('ex-toggle3');
          }}
          id="ex-toggle3"
        >
          Item three
        </AccordionToggle>
        <AccordionContent id="ex-expand3">
          <p>Morbi vitae urna quis nunc convallis hendrerit. Aliquam congue orci quis ultricies tempus.</p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem isExpanded={expanded === 'ex-toggle4'}>
        <AccordionToggle
          onClick={() => {
            onToggle('ex-toggle4');
          }}
          id="ex-toggle4"
        >
          Item four
        </AccordionToggle>
        <AccordionContent id="ex-expand4">
          <p>
            Donec vel posuere orci. Phasellus quis tortor a ex hendrerit efficitur. Aliquam lacinia ligula pharetra,
            sagittis ex ut, pellentesque diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia Curae; Vestibulum ultricies nulla nibh. Etiam vel dui fermentum ligula ullamcorper eleifend non quis
            tortor. Morbi tempus ornare tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Mauris et velit neque. Donec ultricies condimentum mauris, pellentesque imperdiet libero
            convallis convallis. Aliquam erat volutpat. Donec rutrum semper tempus. Proin dictum imperdiet nibh, quis
            dapibus nulla. Integer sed tincidunt lectus, sit amet auctor eros.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem isExpanded={expanded === 'ex-toggle5'}>
        <AccordionToggle
          onClick={() => {
            onToggle('ex-toggle5');
          }}
          id="ex-toggle5"
        >
          Item five
        </AccordionToggle>
        <AccordionContent id="ex-expand5">
          <p>Vivamus finibus dictum ex id ultrices. Mauris dictum neque a iaculis blandit.</p>
        </AccordionContent>
      </AccordionItem>
      {children && (<AccordionItem isExpanded={expanded === 'ex-toggle6'}>
        <AccordionToggle
          onClick={() => {
            onToggle('ex-toggle6');
          }}
          id="ex-toggle6"
        >
          Nested accordion
        </AccordionToggle>
        <AccordionContent id="ex-expand6">
          {children}
        </AccordionContent>
      </AccordionItem>)}
    </Accordion>
  );
};

export const CodeEditorBasic: React.FunctionComponent = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isLineNumbersVisible, setIsLineNumbersVisible] = useState(true);
  const [isReadOnly, setIsReadOnly] = useState(false);
  const [isMinimapVisible, setIsMinimapVisible] = useState(false);

  const toggleDarkTheme = (checked) => {
    setIsDarkTheme(checked);
  };

  const toggleLineNumbers = (checked) => {
    setIsLineNumbersVisible(checked);
  };
  const toggleReadOnly = (checked) => {
    setIsReadOnly(checked);
  };
  const toggleMinimap = (checked) => {
    setIsMinimapVisible(checked);
  };

  const onEditorDidMount = (editor, monaco) => {
    editor.layout();
    editor.focus();
    monaco.editor.getModels()[0].updateOptions({ tabSize: 5 });
  };

  const onChange = (value) => {
    // eslint-disable-next-line no-console
    console.log(value);
  };

  return (
    <>
      <Checkbox
        label="Dark theme"
        isChecked={isDarkTheme}
        onChange={(_event, checked) => toggleDarkTheme(checked)}
        aria-label="dark theme checkbox"
        id="toggle-theme"
        name="toggle-theme"
      />
      <Checkbox
        label="Line numbers"
        isChecked={isLineNumbersVisible}
        onChange={(_event, checked) => toggleLineNumbers(checked)}
        aria-label="line numbers checkbox"
        id="toggle-line-numbers"
        name="toggle-line-numbers"
      />
      <Checkbox
        label="Read only"
        isChecked={isReadOnly}
        onChange={(_event, checked) => toggleReadOnly(checked)}
        aria-label="read only checkbox"
        id="toggle-read-only"
        name="toggle-read-only"
      />
      <Checkbox
        label="Minimap"
        isChecked={isMinimapVisible}
        onChange={(_event, checked) => toggleMinimap(checked)}
        aria-label="display minimap checkbox"
        id="toggle-minimap"
        name="toggle-minimap"
      />
      <CodeEditor
        isDarkTheme={isDarkTheme}
        isLineNumbersVisible={isLineNumbersVisible}
        isReadOnly={isReadOnly}
        isMinimapVisible={isMinimapVisible}
        isLanguageLabelVisible
        code="Some example content"
        onChange={onChange}
        language={Language.javascript}
        onEditorDidMount={onEditorDidMount}
        height="400px"
      />
    </>
  );
};

export const PaginationSticky: React.FunctionComponent = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(100);
  const [isTopSticky, setIsTopSticky] = useState(false);
  const itemCount = 523;

  const onToggleSticky = () => {
    setIsTopSticky((prev) => !prev);
  };

  const onSetPage = (_event, newPage) => {
    setPage(newPage);
  };

  const onPerPageSelect = (
    _event,
    newPerPage,
    newPage
  ) => {
    setPerPage(newPerPage);
    setPage(newPage);
  };

  const buildCards = () => {
    const numberOfCards = (page - 1) * perPage + perPage - 1 >= itemCount ? itemCount - (page - 1) * perPage : perPage;

    return Array.from({ length: numberOfCards }).map((_value, index) => (
      <GalleryItem key={index}>
        <Card>
          <CardBody>This is a card</CardBody>
        </Card>
      </GalleryItem>
    ));
  };

  return isTopSticky ? (
    <Fragment>
      <Pagination
        itemCount={itemCount}
        perPage={perPage}
        page={page}
        onSetPage={onSetPage}
        widgetId="pagination-options-menu-top"
        onPerPageSelect={onPerPageSelect}
        isSticky
      >
        <button onClick={onToggleSticky}>Toggle to bottom position</button>
      </Pagination>
      <Gallery hasGutter>{buildCards()}</Gallery>
    </Fragment>
  ) : (
    <Fragment>
      <Gallery hasGutter>{buildCards()}</Gallery>
      <Pagination
        itemCount={itemCount}
        perPage={perPage}
        page={page}
        onSetPage={onSetPage}
        widgetId="pagination-options-menu-top"
        onPerPageSelect={onPerPageSelect}
        isSticky
        variant={PaginationVariant.bottom}
      >
        <button onClick={onToggleSticky}>Toggle to top position</button>
      </Pagination>
    </Fragment>
  );
};

export const TableStickyHeader: React.FunctionComponent = () => {
  const renderLabel = (labelText: string) => {
    switch (labelText) {
      case 'Running':
        return <Label color="green">{labelText}</Label>;
      case 'Stopped':
        return <Label color="orange">{labelText}</Label>;
      case 'Needs Maintenance':
        return <Label color="blue">{labelText}</Label>;
      case 'Down':
        return <Label color="red">{labelText}</Label>;
    }
  };

  return (
    <Table aria-label="Sticky Header Table Demo" isStickyHeader>
      <Thead>
        <Tr>
          <Th width={15}>{columns[0]}</Th>
          <Th width={10}>{columns[1]}</Th>
          <Th width={10}>{columns[2]}</Th>
          <Th width={10}>{columns[3]}</Th>
          <Th width={10}>{columns[4]}</Th>
          <Th width={15}>{columns[5]}</Th>
          <Th width={15}>{columns[6]}</Th>
          <Th width={10}>{columns[7]}</Th>
        </Tr>
      </Thead>
      <Tbody>
        {rows.map((row) => (
          <Tr key={row.name}>
            <Td dataLabel={columns[0]}>{row.name}</Td>
            <Td dataLabel={columns[1]}>{row.threads}</Td>
            <Td dataLabel={columns[2]}>{row.applications}</Td>
            <Td dataLabel={columns[3]}>{row.workspaces}</Td>
            <Td dataLabel={columns[4]}>{renderLabel(row.status)}</Td>
            <Td dataLabel={columns[5]}>{row.location}</Td>
            <Td dataLabel={columns[6]}>{row.lastModified}</Td>
            <Td dataLabel={columns[7]}>
              <a href="#">
                <TableText wrapModifier="truncate">{row.url} </TableText>
              </a>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};


const AnimationsPage: FunctionComponent = () => {
  const drawerRef = useRef(null);
  const [isDrawerExpanded, setIsDrawerExpanded] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 'notification-1',
      title: 'Unread info notification title',
      message: 'This is an info notification description.',
      variant: AlertVariant.info,
      timeout: 3000,
      timeoutAnimation: 3000,
      isNew: false,
      isRead: false
    },
    {
      id: 'notification-2',
      title:
        'Unread danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines.',
      message:
        'This is a danger notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines.',
      variant: AlertVariant.danger,
      timeout: 3000,
      timeoutAnimation: 3000,
      isNew: false,
      isRead: true
    },
    {
      id: 'notification-3',
      title: 'Read warning notification title1!!!',
      message: 'This is a warning notification description.',
      variant: AlertVariant.warning,
      timeout: 3000,
      timeoutAnimation: 3000,
      isNew: false,
      isRead: true
    },
    {
      id: 'notification-4',
      title: 'Read success notification title',
      message: 'This is a success notification description.',
      variant: AlertVariant.success,
      timeout: 3000,
      timeoutAnimation: 3000,
      isNew: false,
      isRead: true
    }
  ]);
  const [selectedTab, setSelectedTab] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [showWizardModal, setShowWizardModal] = useState(false);
  const [activeItem, setActiveItem] = useState('dashboard');

  // HERE
  const [openKebabIndex, setOpenKebabIndex] = useState(-1);


  // Data for the table rows
  const activityData = [
    { id: 1, name: 'my-pod-name', project: 'project-test', progress: ['success', 'success', 'success'] },
    { id: 2, name: 'my-pod-name', project: 'project-test', progress: ['success', 'pending', 'default'] },
    { id: 3, name: 'my-pod-name', project: 'project-test', progress: ['success', 'success', 'danger'] },
    { id: 4, name: 'my-pod-name', project: 'project-test', progress: ['success', 'warning', 'pending'] }
  ];

  const dropdownItems = [
    <DropdownItem key="action1">View details</DropdownItem>,
    <DropdownItem key="action2">Monitor activity</DropdownItem>,
    <DropdownItem key="action3">Delete</DropdownItem>
  ];

  // A function to create a kebab toggle for a specific row index
  const kebabToggle = (index) => (toggleRef) => (
    <MenuToggle
      ref={toggleRef}
      variant="plain"
      onClick={() => setOpenKebabIndex(openKebabIndex === index ? -1 : index)}
      isExpanded={openKebabIndex === index}
      aria-label={`Kebab menu for row ${index}`}
    >
      <EllipsisVIcon />
    </MenuToggle>
  );

  const iconMap = {
    success: <CheckCircleIcon />,
    info: <ResourcesFullIcon />,
    pending: <Spinner isInline />,
    danger: <ExclamationCircleIcon />,
    warning: <ExclamationTriangleIcon />
  };

  const recentActivityCard = (
    <Card component="div">
      <CardHeader
        actions={{
          actions: (
            <Dropdown
              isOpen={openKebabIndex === -2} // Use a unique index for the header kebab
              onSelect={() => setOpenKebabIndex(-1)}
              onOpenChange={(isOpen: boolean) => !isOpen && setOpenKebabIndex(-1)}
              toggle={kebabToggle(-2)}
              popperProps={{ position: 'right' }}
            >
              <DropdownList>{dropdownItems}</DropdownList>
            </Dropdown>
          ),
          hasNoOffset: false,
          className: ''
        }}
      >
        <CardTitle>
          <Flex alignItems={{ default: 'alignItemsCenter' }}>
            <PortIcon />
            <span>Recent activity</span>
          </Flex>
        </CardTitle>
      </CardHeader>
      <CardBody>
        <Table aria-label="Recent activity table" variant="compact">
          <Thead>
            <Tr>
              <Th width={30}>Name</Th>
              <Th width={30}>Project</Th>
              <Th width={30}>Progress</Th>
              <Th width={10} />
            </Tr>
          </Thead>
          <Tbody>
            {activityData.map((activity, rowIndex) => (
              <Tr key={activity.id}>
                <Td>
                  <Button variant="link" isInline component="a" href="#">
                    {activity.name}
                  </Button>
                </Td>
                <Td>
                  <Button variant="link" isInline component="a" href="#">
                    {activity.project}
                  </Button>
                </Td>
                <Td>
                  <ProgressStepper isCompact id={`progress-stepper-${rowIndex}`}>
                    {activity.progress.map((stepVariant, stepIndex) => (
                      <ProgressStep
                        id={`${rowIndex}-${stepVariant}-${stepIndex}`}
                        key={stepIndex}
                        variant={stepVariant}
                        icon={iconMap[stepVariant]}
                        aria-label={`Step ${stepIndex + 1} is ${stepVariant}`}
                      />
                    ))}
                  </ProgressStepper>
                </Td>
                <Td isActionCell>
                  <Dropdown
                    isOpen={openKebabIndex === rowIndex}
                    onSelect={() => setOpenKebabIndex(-1)}
                    onOpenChange={(isOpen: boolean) => !isOpen && setOpenKebabIndex(-1)}
                    toggle={kebabToggle(rowIndex)}
                    popperProps={{ position: 'right' }}
                  >
                    <DropdownList>{dropdownItems}</DropdownList>
                  </Dropdown>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </CardBody>
    </Card>
  );

  const onNavSelect = (
    _event: FormEvent<HTMLInputElement>,
    selectedItem: {
      groupId: number | string | null;
      itemId: number | string;
      to: string;
    }
  ) => {
    setActiveItem(selectedItem.itemId);
  };

  const focusDrawer = (_event: any) => {
    if (drawerRef.current === null) {
      return;
    }
    const firstTabbableItem = drawerRef.current.querySelector('a, button') as
      | HTMLAnchorElement
      | HTMLButtonElement
      | null;
    firstTabbableItem?.focus();
  };

  const [isUnreadMap, setIsUnreadMap] = useState(() => {
    const map = {};
    notifications.forEach((n) => {
      map[n.id] = !n.isRead;
    });
    return map;
  });

  const onNotificationClick = (id: string) => {
    setIsUnreadMap({ ...isUnreadMap, [id]: false });
  };

  const getNumberUnread = () => {
    return Object.values(isUnreadMap).reduce((count, value) => count + (value ? 1 : 0), 0);
  };


  return (
    <Page
      masthead={
        <Masthead>
          <MastheadMain>
            <MastheadToggle>
              <PageToggleButton variant="plain" aria-label="Global navigation" isHamburgerButton isExpanded />
            </MastheadToggle>
            <MastheadBrand>
              <MastheadLogo>
                <PfLogo />
              </MastheadLogo>
            </MastheadBrand>
          </MastheadMain>
          <MastheadContent>
            <AnimationsHeaderToolbar
              notifications={notifications}
              isDrawerExpanded={isDrawerExpanded}
              setIsDrawerExpanded={setIsDrawerExpanded}
              setShowWizardModal={setShowWizardModal}
              showWizardModal={showWizardModal}
            />
          </MastheadContent>
        </Masthead>
      }
      sidebar={
        <PageSidebar>
          <PageSidebarBody>
            <Nav onSelect={onNavSelect} aria-label="Sidebar navigation">
              <NavList>
                <NavItem
                  preventDefault
                  id="dashboard"
                  to="#dashboard"
                  itemId="dashboard"
                  isActive={activeItem === 'dashboard'}
                >
                  Dashboard
                </NavItem>
                <NavItem
                  preventDefault
                  id="navItem1"
                  to="#navItem1"
                  itemId="navItem1"
                  isActive={activeItem === 'navItem1'}
                >
                  Nav Item 1
                </NavItem>
                <NavItem
                  preventDefault
                  id="navItem2"
                  to="#navItem2"
                  itemId="navItem2"
                  isActive={activeItem === 'navItem2'}
                >
                  Nav Item 2
                </NavItem>
                <NavItem
                  preventDefault
                  id="navItem3"
                  to="#navItem3"
                  itemId="navItem3"
                  isActive={activeItem === 'navItem3'}
                >
                  Nav Item 3
                </NavItem>
                <NavItem
                  preventDefault
                  id="navItem4"
                  to="#navItem4"
                  itemId="navItem4"
                  isActive={activeItem === 'navItem4'}
                >
                  Nav Item 4
                </NavItem>
                <NavItem
                  preventDefault
                  id="navItem5"
                  to="#navItem5"
                  itemId="navItem5"
                  isActive={activeItem === 'navItem5'}
                >
                  Nav Item 5
                </NavItem>
              </NavList>
            </Nav>
          </PageSidebarBody>
        </PageSidebar>
      }
      isManagedSidebar
      notificationDrawer={
        <NotificationDrawer>
          <NotificationDrawerHeader count={getNumberUnread()} onClose={() => setIsDrawerExpanded(false)} />
          <NotificationDrawerBody>
            <NotificationDrawerList>
              <NotificationDrawerListItem
                variant="info"
                onClick={() => onNotificationClick('notification-1')}
                isRead={!isUnreadMap['notification-1']}
              >
                <NotificationDrawerListItemHeader
                  variant="info"
                  title="Unread info notification title"
                  srTitle="Info notification:"
                />
                <NotificationDrawerListItemBody timestamp="5 minutes ago">
                  This is an info notification description.
                </NotificationDrawerListItemBody>
              </NotificationDrawerListItem>
              <NotificationDrawerListItem
                variant="danger"
                onClick={() => onNotificationClick('notification-2')}
                isRead={!isUnreadMap['notification-2']}
              >
                <NotificationDrawerListItemHeader
                  variant="danger"
                  title="Unread danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines."
                  srTitle="Danger notification:"
                />
                <NotificationDrawerListItemBody timestamp="10 minutes ago">
                  This is a danger notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines.
                </NotificationDrawerListItemBody>
              </NotificationDrawerListItem>
              <NotificationDrawerListItem
                variant="warning"
                onClick={() => onNotificationClick('notification-3')}
                isRead={!isUnreadMap['notification-3']}
              >
                <NotificationDrawerListItemHeader
                  variant="warning"
                  title="Read warning notification title"
                  srTitle="Warning notification:"
                />
                <NotificationDrawerListItemBody timestamp="20 minutes ago">
                  This is a warning notification description.
                </NotificationDrawerListItemBody>
              </NotificationDrawerListItem>
              <NotificationDrawerListItem
                variant="success"
                onClick={() => onNotificationClick('notification-4')}
                isRead={!isUnreadMap['notification-4']}
              >
                <NotificationDrawerListItemHeader
                  variant="success"
                  title="Read success notification title"
                  srTitle="Success notification:"
                />
                <NotificationDrawerListItemBody timestamp="30 minutes ago">
                  This is a success notification description.
                </NotificationDrawerListItemBody>
              </NotificationDrawerListItem>
            </NotificationDrawerList>
          </NotificationDrawerBody>
        </NotificationDrawer>
      }
      onNotificationDrawerExpand={(event) => focusDrawer(event)}
      isNotificationDrawerExpanded={isDrawerExpanded}
      skipToContent={
        <SkipToContent
          onClick={(event: React.MouseEvent) => {
            event.preventDefault();

            const mainContentElement = document.getElementById(mainContainerPageId);
            if (mainContentElement) {
              mainContentElement.focus();
            }
          }}
          href={`#${mainContainerPageId}`}
        >
          Skip to content
        </SkipToContent>
      }
      mainContainerId={mainContainerPageId}
    >
      <PageSection aria-labelledby="main-title">
        {notifications
          .filter((n) => n.isNew)
          .map((alert) => (
            <AlertGroup key={alert.id} hasAnimations isToast isLiveRegion>
              <Alert
                variant={alert.variant}
                title={alert.title}
                timeout={alert.timeout}
                timeoutAnimation={alert.timeoutAnimation}
                onTimeout={() => {
                  setNotifications((prev) =>
                    prev.reduce((acc: NotificationType[], next) => {
                      if (next.id === alert.id) {
                        acc.push({ ...next, isNew: false });
                      } else {
                        acc.push(next);
                      }
                      return acc;
                    }, [])
                  );
                }}
                actionClose={<AlertActionCloseButton title={alert.title} onClose={() => { }} />}
              >
                {alert.message}
              </Alert>
            </AlertGroup>
          ))}
        <Content component={ContentVariants.h1}>Dashboard</Content>
        <Content className="pf-v6-u-mb-md">Everything you need to know about your application</Content>
        <Tabs
          id="tabs"
          activeKey={selectedTab}
          onSelect={(_e, key) => setSelectedTab(Number(key))}
          aria-label="Primary tabs"
        >
          <Tab eventKey={0} title={<TabTitleText>Overview</TabTitleText>} tabContentId="overview" />
          <Tab eventKey={1} title={<TabTitleText>Resources</TabTitleText>} tabContentId="resources" />
          <Tab eventKey={2} title={<TabTitleText>Database</TabTitleText>} tabContentId="database" />
          <Tab eventKey={3} title={<TabTitleText>Other components</TabTitleText>} tabContentId="other-components" />
          <Tab eventKey={4} title={<TabTitleText>Pagination</TabTitleText>} tabContentId="pagination" />
          <Tab eventKey={5} title={<TabTitleText>Sticky header table</TabTitleText>} tabContentId="table" />
        </Tabs>
      </PageSection>
      {selectedTab === 0 && (
        <AnimationsOverview recentActivityCard={recentActivityCard} openshiftLogo={openshiftLogo} />
      )}

      {selectedTab === 1 && (
        <PageSection id="resources">
          <AnimationsResourcesTable />
        </PageSection>
      )}

      {selectedTab === 2 && (
        <PageSection>
          {showForm ? (
            <AnimationsCreateDatabaseForm onClose={() => setShowForm(false)} />
          ) : (
            <EmptyState titleText="No databases found" headingLevel="h4" icon={EmptyStateLogoIcon}>
              <EmptyStateBody>No results match the filter criteria. Clear all filters and try again.</EmptyStateBody>
              <EmptyStateFooter>
                <EmptyStateActions>
                  <Button variant="primary" onClick={() => setShowForm(true)}>
                    Create a database
                  </Button>
                </EmptyStateActions>
              </EmptyStateFooter>
            </EmptyState>
          )}
        </PageSection>
      )}
      {selectedTab === 3 && (
        <>
          <PageSection>
            <AccordionSingleExpandBehavior>
              <AccordionSingleExpandBehavior />
            </AccordionSingleExpandBehavior>
            <CodeEditorBasic />
          </PageSection>
        </>
      )}
      {selectedTab === 4 && (
        <>
          <PageGroup stickyOnBreakpoint={{ default: 'top' }}>
            <PageBreadcrumb>
              <Breadcrumb>
                <BreadcrumbItem>Section home</BreadcrumbItem>
                <BreadcrumbItem to="#">Section title</BreadcrumbItem>
                <BreadcrumbItem to="#">Section title</BreadcrumbItem>
                <BreadcrumbItem to="#" isActive>
                  Section landing
                </BreadcrumbItem>
              </Breadcrumb>
            </PageBreadcrumb>
            <PageSection isWidthLimited aria-labelledby="main-title">
              <Content>
                <h1 id="main-title">Main title</h1>
                <p>This is a full page demo.</p>
              </Content>
            </PageSection>{' '}
          </PageGroup>
          <PageSection>
            <PaginationSticky />
          </PageSection>
        </>
      )}
      {selectedTab === 5 && (
        <PageSection>
          <TableStickyHeader />
        </PageSection>
      )}
      <Modal
        isOpen={showWizardModal}
        variant={ModalVariant.medium}
      >
        <Wizard
          height={400}
          title="Header wizard"
          onClose={() => setShowWizardModal(false)}
          header={
            <WizardHeader
              title="You're a wizard, Harry"
              description="To be clear, all those not named Harry are not wizards."
              closeButtonAriaLabel="Close header"
              onClose={() => setShowWizardModal(false)}
            />
          }
        >
          <WizardStep name="Step 1" id="header-first-step">
            Step 1 content
          </WizardStep>
          <WizardStep name="Step 2" id="header-second-step">
            Step 2 content
          </WizardStep>
          <WizardStep name="Review" id="header-review-step" footer={{ nextButtonText: 'Finish' }}>
            Review step content
          </WizardStep>
        </Wizard>
      </Modal>
    </Page>
  );
};

// Can't break this into a separate file, seems we need to stay in the examples dir when using '@patternfly/react-table'
const AnimationsResourcesTable: FunctionComponent = () => {
  const [areAllExpanded, setAreAllExpanded] = useState(false);
  const [collapseAllAriaLabel, setCollapseAllAriaLabel] = useState('Expand all');
  const [expandedAppNames, setExpandedAppNames] = useState(initialExpandedServerNames);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [loading]);

  useEffect(() => {
    const allExpanded = expandedAppNames.length === applicationsData.length;
    setAreAllExpanded(allExpanded);
    setCollapseAllAriaLabel(allExpanded ? 'Collapse all' : 'Expand all');
  }, [expandedAppNames]);

  const setAppExpanded = (app: Application, isExpanding: boolean) => {
    const others = expandedAppNames.filter((n) => n !== app.name);
    setExpandedAppNames(isExpanding ? [...others, app.name] : others);
  };

  const isAppExpanded = (app: Application) => expandedAppNames.includes(app.name);

  const onCollapseAll = (_event: any, _rowIndex: number, isOpen: boolean) => {
    setExpandedAppNames(isOpen ? applicationsData.map((app) => app.name) : []);
  };

  const [showDrawer, setShowDrawer] = useState(false);

  const panelContent = (
    <DrawerPanelContent>
      <DrawerHead>
        <span>
          Drawer panel header
        </span>
        <DrawerActions>
          <DrawerCloseButton onClick={() => setShowDrawer(false)} />
        </DrawerActions>
      </DrawerHead>
      <DrawerPanelDescription>Drawer panel description</DrawerPanelDescription>
      <DrawerPanelBody>Drawer panel body</DrawerPanelBody>
    </DrawerPanelContent>
  );

  const drawerContent = (<Table id="resources-table" aria-label="Collapsible table" isExpandable hasAnimations>
    <Thead>
      <Tr>
        <Th
          expand={{
            areAllExpanded: !areAllExpanded,
            collapseAllAriaLabel,
            onToggle: onCollapseAll
          }}
          aria-label="Row expansion"
          name="expand"
        />
        {expandableColumns.map((column) => (
          <Th key={column} name={column}>
            {column}
          </Th>
        ))}
      </Tr>
    </Thead>

    {applicationsData.map((app, idx) => (
      <Tbody key={app.name} isExpanded={isAppExpanded(app)}>
        <Tr>
          <Td
            expand={
              app.details
                ? {
                  rowIndex: idx,
                  isExpanded: isAppExpanded(app),
                  onToggle: () => setAppExpanded(app, !isAppExpanded(app))
                }
                : undefined
            }
          />
          <Td>{app.name}</Td>
          <Td>{app.header}</Td>
          <Td>{app.branch}</Td>
          <Td>
            {app.status === 'Running' && <Label status="success">Running</Label>}
            {app.status === 'Degraded' && <Label status="warning">Degraded</Label>}
            {app.status === 'Stopped' && <Label status="danger">Stopped</Label>}
            {app.status !== 'Running' && app.status !== 'Degraded' && app.status !== 'Stopped' && app.status}
          </Td>
        </Tr>
        <Tr isExpanded={isAppExpanded(app)}>
          <Td />
          <Td colSpan={expandableColumns.length}>
            <ExpandableRowContent>{app.details}</ExpandableRowContent>
          </Td>
        </Tr>
      </Tbody>
    ))}
  </Table>)

  return (
    <>
      <Toolbar>
        <ToolbarContent>
          <ToolbarItem><Button variant="primary" onClick={() => setShowDrawer(!showDrawer)}>Show drawer</Button></ToolbarItem>
        </ToolbarContent>
      </Toolbar>
      {loading ? (
        <SkeletonTable
          id="skeleton-table"
          columns={[
            { cell: '', props: { name: 'expand', 'aria-label': 'expand' } },
            ...expandableColumns.map((col) => ({ cell: col, props: { name: col, 'aria-label': col } }))
          ]}
          rows={8}
        />
      ) : (
        <Drawer isExpanded={showDrawer}>
          <DrawerContent panelContent={panelContent}>
            <DrawerContentBody>{drawerContent}</DrawerContentBody>
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
};

export const Animations: FunctionComponent = () => <AnimationsPage />;
