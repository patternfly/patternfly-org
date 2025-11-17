import React, { useState, useEffect } from 'react';
import {
  Compass,
  CompassHeader,
  CompassContent,
  CompassMainHeader,
  CompassPanel,
  CompassMessageBar,
  Tabs,
  TabsComponent,
  Tab,
  TabTitleText,
  ActionList,
  ActionListGroup,
  ActionListItem,
  Button,
  Title,
  Tooltip,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem,
  SearchInput,
  ToggleGroup,
  ToggleGroupItem,
  Pagination,
  DescriptionList,
  DescriptionListGroup,
  DescriptionListTerm,
  DescriptionListDescription,
  Label,
  Gallery,
  Card,
  CardBody,
  CardHeader,
  Content,
  Dropdown,
  MenuToggle,
  MenuToggleElement,
  DropdownItem,
  DropdownList,
  Flex,
  Avatar,
  Icon,
  SkipToContent,
  Switch,
  DrawerPanelContent,
  DrawerHead,
  DrawerActions,
  DrawerCloseButton,
  DrawerPanelBody
} from '@patternfly/react-core';
import { ActionsColumn } from '@patternfly/react-table';
import { DataViewToolbar } from '@patternfly/react-data-view/dist/dynamic/DataViewToolbar';
import { DataViewTextFilter } from '@patternfly/react-data-view/dist/dynamic/DataViewTextFilter';
import { DataViewTable } from '@patternfly/react-data-view/dist/dynamic/DataViewTable';
import { MessageBar } from '@patternfly/chatbot';

import PlayIcon from '@patternfly/react-icons/dist/esm/icons/play-icon';
import OutlinedPlusSquare from '@patternfly/react-icons/dist/esm/icons/outlined-plus-square-icon';
import OutlinedCopy from '@patternfly/react-icons/dist/esm/icons/outlined-copy-icon';
import OutlinedQuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/outlined-question-circle-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import ThIcon from '@patternfly/react-icons/dist/esm/icons/th-icon';
import ListIcon from '@patternfly/react-icons/dist/esm/icons/list-icon';

import wallpaperLight from './assets/wallpaper-light.png'
import wallpaperDark from './assets/wallpaper-dark.png'
import imgAvatar from './assets/avatar.jpg';
import { RHAutomationsLogo } from './assets/RHAutomationsLogo';
import { RHAiExperienceIcon } from './assets/RHAiExperienceIcon';

export const CompassIntegrationsDemo: React.FunctionComponent = () => {
  const [isThinking, setIsThinking] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeDisplay, setActiveDisplay] = useState<"table" | "card">("table");
  const [isGlassTheme, setIsGlassTheme] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const onDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    if (isGlassTheme) {
      document.documentElement.classList.add('pf-v6-theme-glass');
    } else {
      document.documentElement.classList.remove('pf-v6-theme-glass');
    }
  }, [isGlassTheme]);

  const integrations = [
    {
      id: 1,
      name: "Ansible Automation Platform",
      description:
        "Ansible Automation Platform is an entrprise framework for building and operating IT automation at scale.",
      status: "success",
      statusText: "Connected",
      type: "MCP Server",
      url: "ansible.example.com",
    },
    {
      id: 2,
      name: "Github",
      description:
        "Github is a code hosting platform for version control and collaboration. ",
      status: "danger",
      statusText: "Disconnected",
      type: "Version Control",
      url: "github.example.com",
    },
    {
      id: 3,
      name: "Kubernetes Cluster",
      description:
        "A Kubernetes cluster is a set of node machines for running containerized applications.",
      status: "warning",
      statusText: "Invalid fields",
      type: "MCP Server",
      url: "k8s.example.com",
    },
    {
      id: 4,
      name: "Docker Registry",
      description:
        "A Docker registry is a storage and distribution system for Docker images.",
      status: "success",
      statusText: "Connected",
      type: "Container Registry",
      url: "registry.example.com",
    },
    {
      id: 5,
      name: "Jenkins CI/CD",
      description:
        "Jenkins is an open source automation server for building, testing, and deploying software.",
      status: "success",
      statusText: "Connected",
      type: "CI/CD",
      url: "jenkins.example.com",
    },
    {
      id: 6,
      name: "GitLab",
      description:
        "GitLab is a complete DevOps platform delivered as a single application.",
      status: "danger",
      statusText: "Disconnected",
      type: "Version Control",
      url: "gitlab.example.com",
    },
    {
      id: 7,
      name: "Prometheus",
      description:
        "Prometheus is a monitoring system and time series database for metrics collection.",
      status: "success",
      statusText: "Connected",
      type: "Monitoring",
      url: "prometheus.example.com",
    },
    {
      id: 8,
      name: "Elasticsearch",
      description:
        "Elasticsearch is a distributed search and analytics engine for all types of data.",
      status: "warning",
      statusText: "Degraded",
      type: "Search Engine",
      url: "elasticsearch.example.com",
    },
    {
      id: 9,
      name: "Redis Cache",
      description:
        "Redis is an in-memory data structure store used as a database, cache, and message broker.",
      status: "success",
      statusText: "Connected",
      type: "Cache",
      url: "redis.example.com",
    },
    {
      id: 10,
      name: "PostgreSQL Database",
      description:
        "PostgreSQL is a powerful, open source object-relational database system.",
      status: "success",
      statusText: "Connected",
      type: "Database",
      url: "postgres.example.com",
    },
    {
      id: 11,
      name: "Apache Kafka",
      description:
        "Apache Kafka is a distributed event streaming platform for building real-time data pipelines.",
      status: "warning",
      statusText: "Limited",
      type: "Message Queue",
      url: "kafka.example.com",
    },
    {
      id: 12,
      name: "Terraform",
      description:
        "Terraform is an infrastructure as code tool for building, changing, and versioning infrastructure.",
      status: "success",
      statusText: "Connected",
      type: "Infrastructure",
      url: "terraform.example.com",
    },
    {
      id: 13,
      name: "Splunk",
      description:
        "Splunk is a platform for searching, monitoring, and analyzing machine-generated big data.",
      status: "danger",
      statusText: "Disconnected",
      type: "Logging",
      url: "splunk.example.com",
    },
  ];

  const handleSendMessage = () => {
    setIsThinking(true);
    setTimeout(() => {
      setIsThinking(false);
    }, 10000); // 10 seconds
  };

  const navContent = (
    <>
      <CompassPanel isPill hasNoPadding>
        <Tabs
          activeKey={1}
          isNav
          onSelect={() => {}}
          component={TabsComponent.nav}
          aria-label="Compass global"
          inset={{ default: 'insetXl' }}
        >
          <Tab eventKey={0} title={<TabTitleText>Tab 1</TabTitleText>} />
          <Tab eventKey={1} title={<TabTitleText>Integrations</TabTitleText>} />
          <Tab eventKey={2} title={<TabTitleText>Tab 3</TabTitleText>} />
          <Tab eventKey={3} title={<TabTitleText>Disabled Tab 4</TabTitleText>} isDisabled />
        </Tabs>
      </CompassPanel>
    </>
  );

  const startSidebarContent = (
    <CompassPanel isPill>
      <ActionList isIconList isVertical>
        <ActionListGroup>
          <ActionListItem>
            <Tooltip content="Play">
              <Button variant="plain" icon={<PlayIcon />} aria-label="Play" isCircle />
            </Tooltip>
          </ActionListItem>
          <ActionListItem>
            <Tooltip content="Add">
              <Button variant="plain" icon={<OutlinedPlusSquare />} aria-label="Add" isCircle />
            </Tooltip>
          </ActionListItem>
        </ActionListGroup>
        <ActionListItem>
          <Tooltip content="Chat with AI">
            <Button variant="plain" icon={<Icon style={{translate: ".05em .1em; scale: 1.1"}}><RHAiExperienceIcon /></Icon>} aria-label="Chat with AI" isCircle className="pf-v6-m-ai-indicator" />
          </Tooltip>
        </ActionListItem>
        <ActionListGroup>
          <ActionListItem>
            <Tooltip content="Help">
              <Button variant="plain" icon={<OutlinedQuestionCircleIcon />} aria-label="Help" isCircle />
            </Tooltip>
          </ActionListItem>
          <ActionListItem>
            <Tooltip content="Copy">
              <Button variant="plain" icon={<OutlinedCopy />} aria-label="Copy" isCircle />
            </Tooltip>
          </ActionListItem>
        </ActionListGroup>
      </ActionList>
    </CompassPanel>
  );

  const endSidebarContent = (
    <CompassPanel isPill>
      <ActionList isIconList isVertical>
        <ActionListGroup>
          <ActionListItem>
            <Tooltip content="Help">
              <Button variant="plain" icon={<OutlinedQuestionCircleIcon />} aria-label="Help" isCircle />
            </Tooltip>
          </ActionListItem>
          <ActionListItem>
            <Tooltip content="Add">
              <Button variant="plain" icon={<OutlinedPlusSquare />} aria-label="Add" isCircle />
            </Tooltip>
          </ActionListItem>
          <ActionListItem>
            <Tooltip content="Other help icon">
              <Button variant="plain" icon={<OutlinedQuestionCircleIcon />} aria-label="Other help" isCircle />
            </Tooltip>
          </ActionListItem>
        </ActionListGroup>
      </ActionList>
    </CompassPanel>
  );

  const userDropdownItems = (
    <>
      <DropdownItem>My profile</DropdownItem>
      <DropdownItem>User management</DropdownItem>
      <DropdownItem>Logout</DropdownItem>
    </>
  );

  const userDropdown = (
    <Dropdown
    isOpen={isDropdownOpen}
    onSelect={() => setIsDropdownOpen(false)}
    onOpenChange={(isOpen: boolean) => setIsDropdownOpen(isOpen)}
    popperProps={{ position: "right" }}
    toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
      <MenuToggle
        ref={toggleRef}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        isExpanded={isDropdownOpen}
        variant="plain"
        isCircle
      >
        <Flex
          alignItems={{ default: "alignItemsCenter" }}
          gap={{ default: "gapMd" }}
        >
          User Name
          <Avatar src={imgAvatar} alt="" size="md" />
        </Flex>
      </MenuToggle>
    )}
  >
    <DropdownList>{userDropdownItems}</DropdownList>
  </Dropdown>
  );

  const headerContent = <CompassHeader 
    logo={<a href="#" aria-label="Red Hat automations" tabIndex={0}><RHAutomationsLogo /></a>}
    nav={navContent} 
    profile={userDropdown}
  />;

  const cardViewContent = (
    <>
      <Toolbar>
        <ToolbarContent>
          <ToolbarGroup>
            <ToolbarItem>
              <SearchInput
                aria-label="Integrations example search input"
                placeholder="Filter by name"
              />
            </ToolbarItem>
          </ToolbarGroup>
          <ToggleGroup>
            <ToggleGroupItem
              icon={<ThIcon />}
              aria-label="Card view"
              isSelected={activeDisplay === "card"}
              onChange={() => {
                setActiveDisplay("card");
              }}
            ></ToggleGroupItem>
            <ToggleGroupItem
              icon={<ListIcon />}
              aria-label="Table view"
              isSelected={activeDisplay === "table"}
              onChange={() => {
                setActiveDisplay("table");
              }}
            ></ToggleGroupItem>
          </ToggleGroup>
          <ToolbarItem variant="pagination" align={{ default: "alignEnd" }}>
            <Pagination
              itemCount={523}
              perPage={20}
              page={1}
              onSetPage={() => { }}
              widgetId="pagination-options-card-view"
              onPerPageSelect={() => { }}
              isCompact
            />
          </ToolbarItem>
        </ToolbarContent>
      </Toolbar>
      <Gallery hasGutter>
        {integrations.map((product) => (
          <Card
            isCompact
            isFullHeight
            key={product.name}
            id={product.name.replace(/ /g, "-")}
          >
            <CardHeader
              actions={{
                actions: (
                  <>
                    <Dropdown
                      isOpen={false}
                      onOpenChange={() => { }}
                      toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                        <MenuToggle
                          ref={toggleRef}
                          aria-label={`${product.name} actions`}
                          variant="plain"
                          icon={<EllipsisVIcon />}
                        />
                      )}
                      popperProps={{ position: "right" }}
                    />
                  </>
                ),
              }}
            >
              <Content component="h2">{product.name}</Content>
              <Content component="small">{product.type}</Content>
            </CardHeader>
            <CardBody isFilled>{product.description}</CardBody>
            <CardBody>
              <DescriptionList aria-label={`${product.name} details`}>
                <DescriptionListGroup>
                  <DescriptionListTerm>Status</DescriptionListTerm>
                  <DescriptionListDescription>
                    <Label
                      status={
                        product.status as
                        | "success"
                        | "danger"
                        | "warning"
                        | "info"
                        | "custom"
                        | undefined
                      }
                      isCompact
                      variant="outline"
                    >
                      {product.statusText}
                    </Label>
                  </DescriptionListDescription>
                </DescriptionListGroup>
                <DescriptionListGroup>
                  <DescriptionListTerm>Url</DescriptionListTerm>
                  <DescriptionListDescription>
                    <a>{product.url}</a>
                  </DescriptionListDescription>
                </DescriptionListGroup>
              </DescriptionList>
            </CardBody>
          </Card>
        ))}
      </Gallery>
    </>
  );

  const rowActions = [
    {
      title: "Some action",
      onClick: () => console.log("clicked on Some action"), // eslint-disable-line no-console
    },
    {
      title: <div>Another action</div>,
      onClick: () => console.log("clicked on Another action"), // eslint-disable-line no-console
    },
    {
      isSeparator: true,
    },
    {
      title: "Third action",
      onClick: () => console.log("clicked on Third action"), // eslint-disable-line no-console
    },
  ];

  const rows = integrations.map(
    ({ name, type, status, statusText }, index) => ({
      id: name,
      row: [
        {
          id: "select",
          row: name,
          cell: undefined,
          props: {
            select: {
              index,
              rowIndex: index,
              onSelect: () => { },
              isSelected: false,
              'aria-label': `Select row ${name}`,
            },
          },
        },
        name,
        type,
        {
          cell: (
            <Label
              status={
                status as
                | "success"
                | "danger"
                | "warning"
                | "info"
                | "custom"
                | undefined
              }
              isCompact
              variant="outline"
            >
              {statusText}
            </Label>
          ),
        },
        {
          cell: <ActionsColumn items={rowActions} />,
          props: { isActionCell: true },
        },
      ],
    })
  );

  const columns = [
    {
      cell: undefined,
      props: {
        select: {
          onSelect: () => { },
          isSelected: false,
          'aria-label': "Select all",
        },
      },
    },
    "Name",
    "Type",
    "Status",
    {
      cell: undefined,
      props: {
        screenReaderText: "Actions",
      },
    }
  ];

  const tableViewContent = (
    <>
      <DataViewToolbar
        clearAllFilters={() => { }}
        filters={
          <DataViewTextFilter
            filterId="name"
            title="Name"
            placeholder="Filter by name"
          />
        }
        actions={
          <ToggleGroup>
            <ToggleGroupItem
              icon={<ThIcon />}
              aria-label="grid icon button"
              isSelected={activeDisplay === "card"}
              onChange={() => setActiveDisplay("card")}
            ></ToggleGroupItem>
            <ToggleGroupItem
              icon={<ListIcon />}
              aria-label="list icon button"
              isSelected={activeDisplay === "table"}
              onChange={() => setActiveDisplay("table")}
            ></ToggleGroupItem>
          </ToggleGroup>
        }
        pagination={<Pagination page={1} perPage={10} isCompact />}
      />
      <DataViewTable
        aria-label="Integrations"
        columns={columns}
        rows={rows}
        className="pf-m-plain"
      />
    </>
  );

  const mainContent = (
    <>
      <CompassMainHeader title={<Title headingLevel="h1">Integrations</Title>} toolbar={(
        <Toolbar hasNoPadding>
          <ToolbarContent>
            <ToolbarGroup>
              <ToolbarItem>
                <Button
                  variant="primary"
                  onClick={onDrawerToggle}
                >
                  Toggle drawer
                </Button>
              </ToolbarItem>
            </ToolbarGroup>
            <ToolbarGroup>
              <ToolbarItem>
                <Button icon={<EllipsisVIcon />} variant="plain" aria-label="More options" />
              </ToolbarItem>
            </ToolbarGroup>
          </ToolbarContent>
        </Toolbar>
      )} />
      <CompassContent>
        <CompassPanel isScrollable id="integrations-main-content" tabIndex={-1}>
          {(() => {
            if (activeDisplay === "table") {
              return tableViewContent;
            } else {
              return cardViewContent;
            }
          })()}
        </CompassPanel>
      </CompassContent>
    </>
  );
  const footerContent = (
    <CompassMessageBar>
      <CompassPanel isPill hasNoPadding hasNoBorder>
        <MessageBar
          isCompact
          onSendMessage={handleSendMessage}
          alwayShowSendButton
          hasAttachButton={false}
          hasAiIndicator
          isThinking={isThinking}
        />
        <div aria-live="polite" className="pf-v6-screen-reader">
          {isThinking ? "Ai is thinking..." : "Ai is ready to chat"}
        </div>
      </CompassPanel>
    </CompassMessageBar>
  );

  const handleClick = (e) => {
    e.preventDefault();
    const mainContentElement = document.getElementById('integrations-main-content');
    if (mainContentElement) {
      mainContentElement.focus();
      mainContentElement.scrollIntoView();
    }
  };

  const drawerContent = (
     <DrawerPanelContent>
      <DrawerHead>
        <span>Content Details</span>
        <DrawerActions>
          <DrawerCloseButton onClick={onDrawerToggle} />
        </DrawerActions>
      </DrawerHead>
      <DrawerPanelBody>
        <Content component="h3">Content Information</Content>
        <Content component="p">
          This drawer contains detailed information about the content.
        </Content>
      </DrawerPanelBody>
    </DrawerPanelContent>
  );

  return (
    <>
      <SkipToContent onClick={handleClick} href="#integrations-main-content">
        Skip to content
      </SkipToContent>
      <Compass
        header={headerContent}
        sidebarStart={startSidebarContent}
        main={mainContent}
        sidebarEnd={endSidebarContent}
        footer={footerContent}
        backgroundSrcDark={wallpaperDark}
        backgroundSrcLight={wallpaperLight}
        drawerContent={drawerContent}
        drawerProps={{ isExpanded: isDrawerOpen, isPill: true }}
      />
        <div
          style={{
            position: 'absolute',
            bottom: '1rem',
            right: '1rem',
            zIndex: 1000
          }}
        >
          <Switch
            id="glass-theme-toggle"
            label="Glass theme"
            isChecked={isGlassTheme}
            onChange={(_, checked) => setIsGlassTheme(checked)}
          />
        </div>
      </>
  );
};
