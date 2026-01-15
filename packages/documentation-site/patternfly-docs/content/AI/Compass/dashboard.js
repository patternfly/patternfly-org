import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Compass, CompassHeader, CompassContent, CompassPanel, CompassMessageBar, Hero, Tabs, TabsComponent, Tab, TabTitleText, ActionList, ActionListGroup, ActionListItem, Button, Tooltip, Content, Avatar, Dropdown, DropdownItem, DropdownList, Flex, MenuToggle, Grid, GridItem, Icon, SkipToContent } from '@patternfly/react-core';
import PlayIcon from '@patternfly/react-icons/dist/esm/icons/play-icon';
import OutlinedPlusSquare from '@patternfly/react-icons/dist/esm/icons/outlined-plus-square-icon';
import OutlinedCopy from '@patternfly/react-icons/dist/esm/icons/outlined-copy-icon';
import OutlinedQuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/outlined-question-circle-icon';
import { MessageBar } from '@patternfly/chatbot';
import { RHAutomationsLogo } from './assets/RHAutomationsLogo';
import { RHAiExperienceIcon } from './assets/RHAiExperienceIcon';
import AnimationsOverviewClusterInventory from "./cards/AnimationsOverviewClusterInventory";
import AnimationsOverviewNetworkActivity from "./cards/AnimationsOverviewNetworkActivity";
import AnimationsOverviewStorage from "./cards/AnimationsOverviewStorage";
import AnimationsOverviewMemoryUtilization from "./cards/AnimationsOverviewMemoryUtilization";
import { ClusterDetailsCard } from './cards/ClusterDetailsCard';
import { RecentActivityCard } from './cards/RecentActivityCard';
import heroBg from './assets/hero-bg.png';
import wallpaperDark from './assets/wallpaper-dark.png';
import wallpaperLight from './assets/wallpaper-light.png';
import imgAvatar from './assets/avatar.jpg';
export const CompassBasic = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isThinking, setIsThinking] = useState(false);
    const navContent = (_jsx(_Fragment, { children: _jsx(CompassPanel, { isPill: true, hasNoPadding: true, children: _jsxs(Tabs, { activeKey: activeTab, isNav: true, onSelect: (_event, tabIndex) => setActiveTab(tabIndex), component: TabsComponent.nav, "aria-label": "Compass global", inset: { default: 'insetXl' }, children: [_jsx(Tab, { eventKey: 0, title: _jsx(TabTitleText, { children: "Dashboard" }) }), _jsx(Tab, { eventKey: 1, title: _jsx(TabTitleText, { children: "Builder" }), isDisabled: true }), _jsx(Tab, { eventKey: 2, title: _jsx(TabTitleText, { children: "Automations" }) }), _jsx(Tab, { eventKey: 3, title: _jsx(TabTitleText, { children: "Approvals" }), isDisabled: true }), _jsx(Tab, { eventKey: 4, title: _jsx(TabTitleText, { children: "Configuration" }) }), _jsx(Tab, { eventKey: 5, title: _jsx(TabTitleText, { children: "Test Page" }) })] }) }) }));
    const westContent = (_jsx(CompassPanel, { isPill: true, children: _jsxs(ActionList, { isIconList: true, isVertical: true, children: [_jsxs(ActionListGroup, { children: [_jsx(ActionListItem, { children: _jsx(Tooltip, { content: "Play", children: _jsx(Button, { variant: "plain", icon: _jsx(PlayIcon, {}), "aria-label": "Play", isCircle: true }) }) }), _jsx(ActionListItem, { children: _jsx(Tooltip, { content: "Add", children: _jsx(Button, { variant: "plain", icon: _jsx(OutlinedPlusSquare, {}), "aria-label": "Add", isCircle: true }) }) })] }), _jsx(ActionListItem, { children: _jsx(Tooltip, { content: "Assistant", children: _jsx(Button, { variant: "plain", icon: _jsx(Icon, { style: { translate: ".05em .1em; scale: 1.1" }, children: _jsx(RHAiExperienceIcon, {}) }), "aria-label": "Assistant", isCircle: true, className: "pf-v6-m-ai-indicator" }) }) }), _jsxs(ActionListGroup, { children: [_jsx(ActionListItem, { children: _jsx(Tooltip, { content: "Help", children: _jsx(Button, { variant: "plain", icon: _jsx(OutlinedQuestionCircleIcon, {}), "aria-label": "Help", isCircle: true }) }) }), _jsx(ActionListItem, { children: _jsx(Tooltip, { content: "Copy", children: _jsx(Button, { variant: "plain", icon: _jsx(OutlinedCopy, {}), "aria-label": "Copy", isCircle: true }) }) })] })] }) }));
    const userDropdownItems = (_jsxs(_Fragment, { children: [_jsx(DropdownItem, { children: "My profile" }, "group 2 profile"), _jsx(DropdownItem, { children: "User management" }, "group 2 user"), _jsx(DropdownItem, { children: "Logout" }, "group 2 logout")] }));
    const onDropdownSelect = () => {
        setIsDropdownOpen(false);
    };
    const onDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const userDropdown = (_jsx(Dropdown, { isOpen: isDropdownOpen, onSelect: () => onDropdownSelect, onOpenChange: (isOpen) => setIsDropdownOpen(isOpen), popperProps: { position: "right" }, toggle: (toggleRef) => (_jsx(MenuToggle, { ref: toggleRef, onClick: onDropdownToggle, isExpanded: isDropdownOpen, variant: "plain", isCircle: true, children: _jsxs(Flex, { alignItems: { default: "alignItemsCenter" }, gap: { default: "gapMd" }, children: ["Aliyah Frazier", _jsx(Avatar, { src: imgAvatar, alt: "", size: "md" })] }) })), children: _jsx(DropdownList, { children: userDropdownItems }) }));
    const northContent = _jsx(CompassHeader, { logo: _jsx("a", { href: "#", "aria-label": "Red Hat automations", tabIndex: 0, children: _jsx(RHAutomationsLogo, {}) }), nav: navContent, profile: userDropdown });
    const mainContent = (_jsxs(_Fragment, { children: [_jsx(Hero, { gradientDark: { stop1: '#3d2785', stop2: '#1b0d33', stop3: '#000' }, backgroundSrcDark: heroBg, children: _jsxs(Content, { children: [_jsx("h1", { children: "Automation that does more" }), _jsx("p", { children: "Red\u00A0Hat Ansible Automation Platform offers more capabilities, accessibility, and flexibility, so you can bring the power of automation to the teams, tasks, and environments that need it." }), _jsx(ActionList, { children: _jsxs(ActionListGroup, { children: [_jsx(ActionListItem, { children: _jsx(Button, { variant: "primary", children: "Upgrade today" }) }), _jsx(ActionListItem, { children: _jsx(Button, { variant: "secondary", children: "Talk to a Red Hatter" }) })] }) })] }) }), _jsx(CompassContent, { id: "main", children: _jsxs(Grid, { hasGutter: true, style: { maxHeight: 'none' }, children: [_jsx(GridItem, { span: 12, sm: 12, md: 6, lg: 4, xl: 3, rowSpan: 4, children: _jsx(ClusterDetailsCard, {}) }), _jsx(GridItem, { span: 12, sm: 12, md: 6, lg: 4, xl: 3, rowSpan: 2, children: _jsx(AnimationsOverviewClusterInventory, {}) }), _jsx(GridItem, { span: 12, sm: 12, md: 6, lg: 4, xl: 3, rowSpan: 2, children: _jsx(AnimationsOverviewStorage, {}) }), _jsx(GridItem, { span: 12, sm: 12, md: 12, lg: 8, xl: 3, rowSpan: 2, children: _jsx(AnimationsOverviewMemoryUtilization, {}) }), _jsx(GridItem, { span: 12, sm: 12, md: 12, lg: 12, xl: 3, rowSpan: 2, children: _jsx(AnimationsOverviewNetworkActivity, {}) }), _jsx(GridItem, { span: 12, sm: 12, md: 12, lg: 8, xl: 6, rowSpan: 2, children: _jsx(RecentActivityCard, {}) })] }) })] }));
    const eastContent = (_jsx(CompassPanel, { isPill: true, children: _jsx(ActionList, { isIconList: true, isVertical: true, children: _jsxs(ActionListGroup, { children: [_jsx(ActionListItem, { children: _jsx(Tooltip, { content: "Help 2", children: _jsx(Button, { variant: "plain", icon: _jsx(OutlinedQuestionCircleIcon, {}), "aria-label": "Help 2", isCircle: true }) }) }), _jsx(ActionListItem, { children: _jsx(Tooltip, { content: "Add", children: _jsx(Button, { variant: "plain", icon: _jsx(OutlinedPlusSquare, {}), "aria-label": "Add", isCircle: true }) }) }), _jsx(ActionListItem, { children: _jsx(Tooltip, { content: "Help 3", children: _jsx(Button, { variant: "plain", icon: _jsx(OutlinedQuestionCircleIcon, {}), "aria-label": "Help 3", isCircle: true }) }) })] }) }) }));
    const handleSendMessage = () => {
        setIsThinking(true);
        setTimeout(() => {
            setIsThinking(false);
        }, 10000); // 10 seconds
    };
    const southContent = (_jsxs(CompassMessageBar, { children: [_jsx(CompassPanel, { isPill: true, hasNoPadding: true, hasNoBorder: true, children: _jsx(MessageBar, { isCompact: true, onSendMessage: handleSendMessage, alwayShowSendButton: true, hasAttachButton: false, hasAiIndicator: true, isThinking: isThinking }) }), _jsx("div", { className: "pf-v6-screen-reader", "aria-live": "polite", children: isThinking && "AI is thinking..." })] }));
    const skipToContentClick = (e) => {
        e.preventDefault();
        const mainContent = document.getElementById('main');
        if (mainContent) {
            mainContent.focus();
        }
    };
    return (_jsxs(_Fragment, { children: [_jsx(SkipToContent, { onClick: skipToContentClick, href: "#main", children: "Skip to content" }), _jsx(Compass, { header: northContent, sidebarStart: westContent, main: mainContent, sidebarEnd: eastContent, footer: southContent, backgroundSrcDark: wallpaperDark, backgroundSrcLight: wallpaperLight })] }));
};
//# sourceMappingURL=dashboard.js.map