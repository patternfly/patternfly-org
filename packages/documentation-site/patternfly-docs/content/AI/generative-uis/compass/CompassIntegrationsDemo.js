import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Compass, CompassHeader, CompassContent, CompassMainHeader, CompassPanel, CompassMessageBar, Tabs, TabsComponent, Tab, TabTitleText, ActionList, ActionListGroup, ActionListItem, Button, Title, Tooltip, Toolbar, ToolbarContent, ToolbarGroup, ToolbarItem, SearchInput, ToggleGroup, ToggleGroupItem, Pagination, DescriptionList, DescriptionListGroup, DescriptionListTerm, DescriptionListDescription, Label, Gallery, Card, CardBody, CardHeader, Content, Dropdown, MenuToggle, DropdownItem, DropdownList, Flex, Avatar, Icon, SkipToContent, Switch, DrawerPanelContent, DrawerHead, DrawerActions, DrawerCloseButton, DrawerPanelBody } from '@patternfly/react-core';
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
import wallpaperLight from './assets/wallpaper-light.png';
import wallpaperDark from './assets/wallpaper-dark.png';
import imgAvatar from './assets/avatar.jpg';
import { RHAutomationsLogo } from './assets/RHAutomationsLogo';
import { RHAiExperienceIcon } from './assets/RHAiExperienceIcon';
export const CompassIntegrationsDemo = () => {
    const [isThinking, setIsThinking] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [activeDisplay, setActiveDisplay] = useState("table");
    const [isGlassTheme, setIsGlassTheme] = useState(true);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const onDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };
    useEffect(() => {
        if (isGlassTheme) {
            document.documentElement.classList.add('pf-v6-theme-glass');
        }
        else {
            document.documentElement.classList.remove('pf-v6-theme-glass');
        }
    }, [isGlassTheme]);
    const integrations = [
        {
            id: 1,
            name: "Ansible Automation Platform",
            description: "Ansible Automation Platform is an entrprise framework for building and operating IT automation at scale.",
            status: "success",
            statusText: "Connected",
            type: "MCP Server",
            url: "ansible.example.com",
        },
        {
            id: 2,
            name: "Github",
            description: "Github is a code hosting platform for version control and collaboration. ",
            status: "danger",
            statusText: "Disconnected",
            type: "Version Control",
            url: "github.example.com",
        },
        {
            id: 3,
            name: "Kubernetes Cluster",
            description: "A Kubernetes cluster is a set of node machines for running containerized applications.",
            status: "warning",
            statusText: "Invalid fields",
            type: "MCP Server",
            url: "k8s.example.com",
        },
        {
            id: 4,
            name: "Docker Registry",
            description: "A Docker registry is a storage and distribution system for Docker images.",
            status: "success",
            statusText: "Connected",
            type: "Container Registry",
            url: "registry.example.com",
        },
        {
            id: 5,
            name: "Jenkins CI/CD",
            description: "Jenkins is an open source automation server for building, testing, and deploying software.",
            status: "success",
            statusText: "Connected",
            type: "CI/CD",
            url: "jenkins.example.com",
        },
        {
            id: 6,
            name: "GitLab",
            description: "GitLab is a complete DevOps platform delivered as a single application.",
            status: "danger",
            statusText: "Disconnected",
            type: "Version Control",
            url: "gitlab.example.com",
        },
        {
            id: 7,
            name: "Prometheus",
            description: "Prometheus is a monitoring system and time series database for metrics collection.",
            status: "success",
            statusText: "Connected",
            type: "Monitoring",
            url: "prometheus.example.com",
        },
        {
            id: 8,
            name: "Elasticsearch",
            description: "Elasticsearch is a distributed search and analytics engine for all types of data.",
            status: "warning",
            statusText: "Degraded",
            type: "Search Engine",
            url: "elasticsearch.example.com",
        },
        {
            id: 9,
            name: "Redis Cache",
            description: "Redis is an in-memory data structure store used as a database, cache, and message broker.",
            status: "success",
            statusText: "Connected",
            type: "Cache",
            url: "redis.example.com",
        },
        {
            id: 10,
            name: "PostgreSQL Database",
            description: "PostgreSQL is a powerful, open source object-relational database system.",
            status: "success",
            statusText: "Connected",
            type: "Database",
            url: "postgres.example.com",
        },
        {
            id: 11,
            name: "Apache Kafka",
            description: "Apache Kafka is a distributed event streaming platform for building real-time data pipelines.",
            status: "warning",
            statusText: "Limited",
            type: "Message Queue",
            url: "kafka.example.com",
        },
        {
            id: 12,
            name: "Terraform",
            description: "Terraform is an infrastructure as code tool for building, changing, and versioning infrastructure.",
            status: "success",
            statusText: "Connected",
            type: "Infrastructure",
            url: "terraform.example.com",
        },
        {
            id: 13,
            name: "Splunk",
            description: "Splunk is a platform for searching, monitoring, and analyzing machine-generated big data.",
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
    const navContent = (_jsx(_Fragment, { children: _jsx(CompassPanel, { isPill: true, hasNoPadding: true, children: _jsxs(Tabs, { activeKey: 1, isNav: true, onSelect: () => { }, component: TabsComponent.nav, "aria-label": "Compass global", inset: { default: 'insetXl' }, children: [_jsx(Tab, { eventKey: 0, title: _jsx(TabTitleText, { children: "Tab 1" }) }), _jsx(Tab, { eventKey: 1, title: _jsx(TabTitleText, { children: "Integrations" }) }), _jsx(Tab, { eventKey: 2, title: _jsx(TabTitleText, { children: "Tab 3" }) }), _jsx(Tab, { eventKey: 3, title: _jsx(TabTitleText, { children: "Disabled Tab 4" }), isDisabled: true })] }) }) }));
    const startSidebarContent = (_jsx(CompassPanel, { isPill: true, children: _jsxs(ActionList, { isIconList: true, isVertical: true, children: [_jsxs(ActionListGroup, { children: [_jsx(ActionListItem, { children: _jsx(Tooltip, { content: "Play", children: _jsx(Button, { variant: "plain", icon: _jsx(PlayIcon, {}), "aria-label": "Play", isCircle: true }) }) }), _jsx(ActionListItem, { children: _jsx(Tooltip, { content: "Add", children: _jsx(Button, { variant: "plain", icon: _jsx(OutlinedPlusSquare, {}), "aria-label": "Add", isCircle: true }) }) })] }), _jsx(ActionListItem, { children: _jsx(Tooltip, { content: "Chat with AI", children: _jsx(Button, { variant: "plain", icon: _jsx(Icon, { style: { translate: ".05em .1em; scale: 1.1" }, children: _jsx(RHAiExperienceIcon, {}) }), "aria-label": "Chat with AI", isCircle: true, className: "pf-v6-m-ai-indicator" }) }) }), _jsxs(ActionListGroup, { children: [_jsx(ActionListItem, { children: _jsx(Tooltip, { content: "Help", children: _jsx(Button, { variant: "plain", icon: _jsx(OutlinedQuestionCircleIcon, {}), "aria-label": "Help", isCircle: true }) }) }), _jsx(ActionListItem, { children: _jsx(Tooltip, { content: "Copy", children: _jsx(Button, { variant: "plain", icon: _jsx(OutlinedCopy, {}), "aria-label": "Copy", isCircle: true }) }) })] })] }) }));
    const endSidebarContent = (_jsx(CompassPanel, { isPill: true, children: _jsx(ActionList, { isIconList: true, isVertical: true, children: _jsxs(ActionListGroup, { children: [_jsx(ActionListItem, { children: _jsx(Tooltip, { content: "Help", children: _jsx(Button, { variant: "plain", icon: _jsx(OutlinedQuestionCircleIcon, {}), "aria-label": "Help", isCircle: true }) }) }), _jsx(ActionListItem, { children: _jsx(Tooltip, { content: "Add", children: _jsx(Button, { variant: "plain", icon: _jsx(OutlinedPlusSquare, {}), "aria-label": "Add", isCircle: true }) }) }), _jsx(ActionListItem, { children: _jsx(Tooltip, { content: "Other help icon", children: _jsx(Button, { variant: "plain", icon: _jsx(OutlinedQuestionCircleIcon, {}), "aria-label": "Other help", isCircle: true }) }) })] }) }) }));
    const userDropdownItems = (_jsxs(_Fragment, { children: [_jsx(DropdownItem, { children: "My profile" }), _jsx(DropdownItem, { children: "User management" }), _jsx(DropdownItem, { children: "Logout" })] }));
    const userDropdown = (_jsx(Dropdown, { isOpen: isDropdownOpen, onSelect: () => setIsDropdownOpen(false), onOpenChange: (isOpen) => setIsDropdownOpen(isOpen), popperProps: { position: "right" }, toggle: (toggleRef) => (_jsx(MenuToggle, { ref: toggleRef, onClick: () => setIsDropdownOpen(!isDropdownOpen), isExpanded: isDropdownOpen, variant: "plain", isCircle: true, children: _jsxs(Flex, { alignItems: { default: "alignItemsCenter" }, gap: { default: "gapMd" }, children: ["User Name", _jsx(Avatar, { src: imgAvatar, alt: "", size: "md" })] }) })), children: _jsx(DropdownList, { children: userDropdownItems }) }));
    const headerContent = _jsx(CompassHeader, { logo: _jsx("a", { href: "#", "aria-label": "Red Hat automations", tabIndex: 0, children: _jsx(RHAutomationsLogo, {}) }), nav: navContent, profile: userDropdown });
    const cardViewContent = (_jsxs(_Fragment, { children: [_jsx(Toolbar, { children: _jsxs(ToolbarContent, { children: [_jsx(ToolbarGroup, { children: _jsx(ToolbarItem, { children: _jsx(SearchInput, { "aria-label": "Integrations example search input", placeholder: "Filter by name" }) }) }), _jsxs(ToggleGroup, { children: [_jsx(ToggleGroupItem, { icon: _jsx(ThIcon, {}), "aria-label": "Card view", isSelected: activeDisplay === "card", onChange: () => {
                                        setActiveDisplay("card");
                                    } }), _jsx(ToggleGroupItem, { icon: _jsx(ListIcon, {}), "aria-label": "Table view", isSelected: activeDisplay === "table", onChange: () => {
                                        setActiveDisplay("table");
                                    } })] }), _jsx(ToolbarItem, { variant: "pagination", align: { default: "alignEnd" }, children: _jsx(Pagination, { itemCount: 523, perPage: 20, page: 1, onSetPage: () => { }, widgetId: "pagination-options-card-view", onPerPageSelect: () => { }, isCompact: true }) })] }) }), _jsx(Gallery, { hasGutter: true, children: integrations.map((product) => (_jsxs(Card, { isCompact: true, isFullHeight: true, id: product.name.replace(/ /g, "-"), children: [_jsxs(CardHeader, { actions: {
                                actions: (_jsx(_Fragment, { children: _jsx(Dropdown, { isOpen: false, onOpenChange: () => { }, toggle: (toggleRef) => (_jsx(MenuToggle, { ref: toggleRef, "aria-label": `${product.name} actions`, variant: "plain", icon: _jsx(EllipsisVIcon, {}) })), popperProps: { position: "right" } }) })),
                            }, children: [_jsx(Content, { component: "h2", children: product.name }), _jsx(Content, { component: "small", children: product.type })] }), _jsx(CardBody, { isFilled: true, children: product.description }), _jsx(CardBody, { children: _jsxs(DescriptionList, { "aria-label": `${product.name} details`, children: [_jsxs(DescriptionListGroup, { children: [_jsx(DescriptionListTerm, { children: "Status" }), _jsx(DescriptionListDescription, { children: _jsx(Label, { status: product.status, isCompact: true, variant: "outline", children: product.statusText }) })] }), _jsxs(DescriptionListGroup, { children: [_jsx(DescriptionListTerm, { children: "Url" }), _jsx(DescriptionListDescription, { children: _jsx("a", { children: product.url }) })] })] }) })] }, product.name))) })] }));
    const rowActions = [
        {
            title: "Some action",
            onClick: () => console.log("clicked on Some action"), // eslint-disable-line no-console
        },
        {
            title: _jsx("div", { children: "Another action" }),
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
    const rows = integrations.map(({ name, type, status, statusText }, index) => ({
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
                cell: (_jsx(Label, { status: status, isCompact: true, variant: "outline", children: statusText })),
            },
            {
                cell: _jsx(ActionsColumn, { items: rowActions }),
                props: { isActionCell: true },
            },
        ],
    }));
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
    const tableViewContent = (_jsxs(_Fragment, { children: [_jsx(DataViewToolbar, { clearAllFilters: () => { }, filters: _jsx(DataViewTextFilter, { filterId: "name", title: "Name", placeholder: "Filter by name" }), actions: _jsxs(ToggleGroup, { children: [_jsx(ToggleGroupItem, { icon: _jsx(ThIcon, {}), "aria-label": "grid icon button", isSelected: activeDisplay === "card", onChange: () => setActiveDisplay("card") }), _jsx(ToggleGroupItem, { icon: _jsx(ListIcon, {}), "aria-label": "list icon button", isSelected: activeDisplay === "table", onChange: () => setActiveDisplay("table") })] }), pagination: _jsx(Pagination, { page: 1, perPage: 10, isCompact: true }) }), _jsx(DataViewTable, { "aria-label": "Integrations", columns: columns, rows: rows, className: "pf-m-plain" })] }));
    const mainContent = (_jsxs(_Fragment, { children: [_jsx(CompassMainHeader, { title: _jsx(Title, { headingLevel: "h1", children: "Integrations" }), toolbar: (_jsx(Toolbar, { hasNoPadding: true, children: _jsxs(ToolbarContent, { children: [_jsx(ToolbarGroup, { children: _jsx(ToolbarItem, { children: _jsx(Button, { variant: "primary", onClick: onDrawerToggle, children: "Toggle drawer" }) }) }), _jsx(ToolbarGroup, { children: _jsx(ToolbarItem, { children: _jsx(Button, { icon: _jsx(EllipsisVIcon, {}), variant: "plain", "aria-label": "More options" }) }) })] }) })) }), _jsx(CompassContent, { children: _jsx(CompassPanel, { isScrollable: true, id: "integrations-main-content", tabIndex: -1, children: (() => {
                        if (activeDisplay === "table") {
                            return tableViewContent;
                        }
                        else {
                            return cardViewContent;
                        }
                    })() }) })] }));
    const footerContent = (_jsx(CompassMessageBar, { children: _jsxs(CompassPanel, { isPill: true, hasNoPadding: true, hasNoBorder: true, children: [_jsx(MessageBar, { isCompact: true, onSendMessage: handleSendMessage, alwayShowSendButton: true, hasAttachButton: false, hasAiIndicator: true, isThinking: isThinking }), _jsx("div", { "aria-live": "polite", className: "pf-v6-screen-reader", children: isThinking ? "Ai is thinking..." : "Ai is ready to chat" })] }) }));
    const handleClick = (e) => {
        e.preventDefault();
        const mainContentElement = document.getElementById('integrations-main-content');
        if (mainContentElement) {
            mainContentElement.focus();
            mainContentElement.scrollIntoView();
        }
    };
    const drawerContent = (_jsxs(DrawerPanelContent, { children: [_jsxs(DrawerHead, { children: [_jsx("span", { children: "Content Details" }), _jsx(DrawerActions, { children: _jsx(DrawerCloseButton, { onClick: onDrawerToggle }) })] }), _jsxs(DrawerPanelBody, { children: [_jsx(Content, { component: "h3", children: "Content Information" }), _jsx(Content, { component: "p", children: "This drawer contains detailed information about the content." })] })] }));
    return (_jsxs(_Fragment, { children: [_jsx(SkipToContent, { onClick: handleClick, href: "#integrations-main-content", children: "Skip to content" }), _jsx(Compass, { header: headerContent, sidebarStart: startSidebarContent, main: mainContent, sidebarEnd: endSidebarContent, footer: footerContent, backgroundSrcDark: wallpaperDark, backgroundSrcLight: wallpaperLight, drawerContent: drawerContent, drawerProps: { isExpanded: isDrawerOpen, isPill: true } }), _jsx("div", { style: {
                    position: 'absolute',
                    bottom: '1rem',
                    right: '1rem',
                    zIndex: 1000
                }, children: _jsx(Switch, { id: "glass-theme-toggle", label: "Glass theme", isChecked: isGlassTheme, onChange: (_, checked) => setIsGlassTheme(checked) }) })] }));
};
//# sourceMappingURL=CompassIntegrationsDemo.js.map