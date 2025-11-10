import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from 'react';
import { Button, Divider, Dropdown, DropdownItem, DropdownList, EmptyState, EmptyStateActions, EmptyStateBody, EmptyStateFooter, EmptyStateVariant, MenuToggle, NotificationDrawer, NotificationDrawerBody, NotificationDrawerHeader, NotificationDrawerList, NotificationDrawerListItem, NotificationDrawerListItemBody, NotificationDrawerListItemHeader } from '@patternfly/react-core';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
const NotificationListItem = ({ notification, onRead }) => {
    const [isActionsMenuOpen, setIsActionsMenuOpen] = useState(false);
    return (_jsxs(NotificationDrawerListItem, { variant: notification.variant, onClick: onRead, isRead: notification.isRead, children: [_jsx(NotificationDrawerListItemHeader, { variant: notification.variant, title: notification.title, srTitle: notification.title, children: _jsx(Dropdown, { onSelect: () => setIsActionsMenuOpen(false), isOpen: isActionsMenuOpen, id: notification.id, onOpenChange: setIsActionsMenuOpen, popperProps: { position: 'right' }, toggle: (toggleRef) => (_jsx(MenuToggle, { ref: toggleRef, id: `toggle-${notification.id}`, "aria-label": "Notification drawer actions", variant: "plain", onClick: () => setIsActionsMenuOpen((prev) => !prev), isExpanded: isActionsMenuOpen, icon: _jsx(EllipsisVIcon, {}) })), children: _jsxs(DropdownList, { children: [_jsx(DropdownItem, { to: "#", 
                                // Prevent default onClick behavior for demo purposes
                                onClick: (ev) => ev.preventDefault(), children: "Link" }, "link"), _jsx(DropdownItem, { children: "Action" }, "action"), _jsx(Divider, { component: "li" }, "separator"), _jsx(DropdownItem, { isDisabled: true, children: "Disabled Link" }, "disabled link")] }) }) }), _jsx(NotificationDrawerListItemBody, { timestamp: "Just now", children: notification.message })] }, notification.id));
};
export const AnimationsNotificationsDrawer = ({ notifications, updateNotifications, onClose }) => {
    const [isActionsMenuOpen, setIsActionsMenuOpen] = useState(false);
    const drawerRef = useRef(null);
    const unreadNotificationCount = notifications.filter((n) => !n.isRead).length;
    const markAllRead = () => {
        updateNotifications(notifications.map((n) => (Object.assign(Object.assign({}, n), { isRead: true }))));
    };
    return (_jsxs(NotificationDrawer, { ref: drawerRef, children: [_jsx(NotificationDrawerHeader, { count: unreadNotificationCount, onClose: onClose, children: _jsx(Dropdown, { onSelect: () => setIsActionsMenuOpen(false), isOpen: isActionsMenuOpen, id: "notification-0", onOpenChange: (isOpen) => !isOpen && setIsActionsMenuOpen(false), popperProps: { position: 'right' }, toggle: (toggleRef) => (_jsx(MenuToggle, { ref: toggleRef, id: "toggle-id-0", "aria-label": "Notification drawer actions", variant: "plain", onClick: () => setIsActionsMenuOpen((prev) => !prev), isExpanded: isActionsMenuOpen, icon: _jsx(EllipsisVIcon, {}) })), children: _jsxs(DropdownList, { children: [_jsx(DropdownItem, { onClick: markAllRead, children: "Mark all read" }, "markAllRead"), _jsx(DropdownItem, { onClick: () => updateNotifications([]), children: "Clear all" }, "clearAll"), _jsx(DropdownItem, { children: "Settings" }, "settings")] }) }) }), _jsxs(NotificationDrawerBody, { children: [notifications.length && (_jsx(NotificationDrawerList, { children: notifications.map((notification) => (_jsx(NotificationListItem, { notification: notification, onRead: () => {
                                updateNotifications(notifications.reduce((acc, next) => {
                                    if (next.id === notification.id) {
                                        acc.push(Object.assign(Object.assign({}, next), { isRead: true }));
                                    }
                                    else {
                                        acc.push(next);
                                    }
                                    return acc;
                                }, []));
                            } }, notification.id))) })), !notifications.length && (_jsxs(EmptyState, { headingLevel: "h2", titleText: "No alerts found", icon: SearchIcon, variant: EmptyStateVariant.full, children: [_jsx(EmptyStateBody, { children: "There are currently no alerts. There may be silenced critical alerts however." }), _jsx(EmptyStateFooter, { children: _jsx(EmptyStateActions, { children: _jsx(Button, { variant: "link", children: "Action" }) }) })] }))] })] }));
};
//# sourceMappingURL=AnimationsNotificationsDrawer.js.map