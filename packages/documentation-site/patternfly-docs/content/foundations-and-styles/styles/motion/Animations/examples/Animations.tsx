import React, { useRef, useState, useEffect, FunctionComponent, FormEvent } from 'react';
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
  NotificationDrawerListItemHeader
} from '@patternfly/react-core';
import { Table, Thead, Tbody, Tr, Th, Td, ExpandableRowContent } from '@patternfly/react-table';
import SkeletonTable from '@patternfly/react-component-groups/dist/dynamic/SkeletonTable';

import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-ellipsis-vertical-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-error-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-check-circle-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-warning-icon';
import ResourcesFullIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-resources-full-icon';
import PortIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-port-icon';

// @ts-ignore
import pfLogo from '@patternfly/react-core/src/demos/assets/pf-logo.PF-HorizontalLogo-Color.svg';
// @ts-ignore
import openshiftLogo from '../Summit-collage-deploying-openshift-product-icon-RH.png';
// @ts-ignore
import emptyStateLogo from '../Summit-collage-hybrid-cloud-dark-RH.png';
import { Application, NotificationType } from '../types';
import { AnimationsOverview } from '../AnimationsOverview';
import { AnimationsCreateDatabaseForm } from '../AnimationsCreateDatabaseForm';
import { AnimationsHeaderToolbar } from '../AnimationsHeaderToolbar';
import { applicationsData } from './ResourceTableData';

import './glass.css';

// Simple component to wrap the empty state logo
const EmptyStateLogoIcon: React.FunctionComponent = () => (
  <img src={emptyStateLogo} alt="Empty state" style={{ width: '200px', height: '200px' }} />
);

const mainContainerPageId = 'main-content-page-layout-default-nav';
const expandableColumns = ['Applications', 'Server', 'Branch', 'Status'];
const initialExpandedServerNames = ['Cost Management']; // Default to expanded

const AnimationsPage: FunctionComponent = () => {
  const drawerRef = useRef<HTMLElement | null>(null);
  const [isDrawerExpanded, setIsDrawerExpanded] = useState(false);
  const [notifications, setNotifications] = useState<NotificationType[]>([
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
  const [activeItem, setActiveItem] = useState<number | string>('dashboard');

  // HERE
  const [openKebabIndex, setOpenKebabIndex] = useState<number>(-1);

  interface Activity {
    id: number;
    name: string;
    project: string;
    // Each step is represented by its variant
    progress: ('success' | 'info' | 'pending' | 'warning' | 'danger' | 'default')[];
  }

  // Data for the table rows
  const activityData: Activity[] = [
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
  const kebabToggle = (index: number) => (toggleRef: React.Ref<any>) => (
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

  interface UnreadMap {
    [notificationId: string]: boolean;
  }

  const [isUnreadMap, setIsUnreadMap] = useState<UnreadMap>(() => {
    const map: UnreadMap = {};
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
                <Brand src={pfLogo} alt="PatternFly" heights={{ default: '36px' }} />
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
      <Card component="div">
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
      </Card>
    </>
  );
};

export const Animations: FunctionComponent = () => <AnimationsPage />;
