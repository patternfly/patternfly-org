import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState, useEffect } from 'react';
import { Avatar, Button, ButtonVariant, Dropdown, DropdownItem, DropdownList, MenuToggle, NotificationBadge, Toolbar, ToolbarItem, ToolbarGroup, ToolbarContent } from '@patternfly/react-core';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import QuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/question-circle-icon';
import imgAvatar from '@patternfly/react-core/src/components/assets/avatarImg.svg';
import { useGuidedTour } from './GuidedTourContext';
export const AnimationsHeaderToolbar = ({ notifications, isDrawerExpanded, setIsDrawerExpanded, onStartGuidedTour, onEndGuidedTour }) => {
    const [isActionsMenuOpen, setIsActionsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [shouldNotifyNewNotification, setShouldNotifyNewNotification] = useState(false);
    const { renderTourStepElement, tourStep } = useGuidedTour();
    const previousUnreadCountRef = useRef(notifications.filter((n) => !n.isRead).length);
    const unreadNotificationCount = notifications.filter((n) => !n.isRead).length;
    useEffect(() => {
        let timerId;
        if (unreadNotificationCount > previousUnreadCountRef.current) {
            setShouldNotifyNewNotification(true);
            previousUnreadCountRef.current = unreadNotificationCount;
            timerId = setTimeout(() => setShouldNotifyNewNotification(false), 1200);
        }
        return () => {
            if (timerId) {
                clearTimeout(timerId);
            }
        };
    }, [unreadNotificationCount]);
    return (_jsx(Toolbar, { children: _jsx(ToolbarContent, { children: _jsxs(ToolbarGroup, { align: { default: 'alignEnd' }, children: [_jsxs(ToolbarGroup, { variant: "action-group-plain", children: [_jsx(ToolbarItem, { visibility: { default: 'visible' }, selected: isDrawerExpanded, children: renderTourStepElement('notificationBadge', _jsx(NotificationBadge, { id: "notification-badge", variant: unreadNotificationCount === 0 ? 'read' : 'unread', onClick: () => setIsDrawerExpanded(!isDrawerExpanded), "aria-label": "Notifications", isExpanded: isDrawerExpanded, count: unreadNotificationCount, shouldNotify: shouldNotifyNewNotification })) }), _jsxs(ToolbarGroup, { variant: "action-group-plain", children: [_jsx(ToolbarItem, { children: renderTourStepElement('settingsButton', _jsx(Button, { id: "settings-button", "aria-label": "Settings actions", className: "pf-m-settings", variant: ButtonVariant.plain, icon: _jsx(CogIcon, {}) })) }), _jsx(ToolbarItem, { children: _jsx(Dropdown, { onSelect: () => setIsActionsMenuOpen(false), isOpen: isActionsMenuOpen, id: "help-dropdown", onOpenChange: setIsActionsMenuOpen, popperProps: { position: 'right' }, toggle: (toggleRef) => (_jsx(MenuToggle, { ref: toggleRef, id: "help-menu-toggle", "aria-label": "help actions", variant: "plain", onClick: () => setIsActionsMenuOpen(!isActionsMenuOpen), isExpanded: isActionsMenuOpen, icon: _jsx(QuestionCircleIcon, {}) })), children: _jsx(DropdownList, { children: _jsx(DropdownItem, { onClick: () => (tourStep ? onEndGuidedTour() : onStartGuidedTour()), children: tourStep ? 'End guided tour' : 'Guided tour' }) }) }) })] })] }), _jsx(ToolbarGroup, { children: _jsx(ToolbarItem, { visibility: { default: 'hidden', md: 'visible' }, children: _jsx(Dropdown, { isOpen: isDropdownOpen, onSelect: () => setIsDropdownOpen(false), onOpenChange: setIsDropdownOpen, popperProps: { position: 'right' }, toggle: (toggleRef) => (_jsx(MenuToggle, { ref: toggleRef, isExpanded: isDropdownOpen, onClick: () => setIsDropdownOpen((prev) => !prev), icon: _jsx(Avatar, { src: imgAvatar, alt: "", size: "sm" }), children: "Username" })), children: _jsxs(DropdownList, { children: [_jsx(DropdownItem, { children: "My profile" }, "group 2 profile"), _jsx(DropdownItem, { children: "User management" }, "group 2 user"), _jsx(DropdownItem, { children: "Logout" }, "group 2 logout")] }) }) }) })] }) }) }));
};
//# sourceMappingURL=AnimationsHeaderToolbar.js.map