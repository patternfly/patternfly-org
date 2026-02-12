import { useRef, useState, FunctionComponent, RefObject, useEffect } from 'react';
import {
  Avatar,
  Button,
  ButtonVariant,
  Dropdown,
  DropdownItem,
  DropdownList,
  MenuToggle,
  NotificationBadge,
  Toolbar,
  ToolbarItem,
  ToolbarGroup,
  ToolbarContent
} from '@patternfly/react-core';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-settings-icon';
import imgAvatar from '@patternfly/react-core/src/components/assets/avatarImg.svg';
import { NotificationType } from './types';

interface Props {
  notifications: NotificationType[];
  isDrawerExpanded: boolean;
  setIsDrawerExpanded: (newVal: boolean) => void;
  setShowWizardModal: (newVal: boolean) => void;
  showWizardModal: boolean;
}

export const AnimationsHeaderToolbar: FunctionComponent<Props> = ({
  notifications,
  isDrawerExpanded,
  setIsDrawerExpanded,
  setShowWizardModal,
  showWizardModal
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [shouldNotifyNewNotification, setShouldNotifyNewNotification] = useState(false);
  const previousUnreadCountRef = useRef<number>(notifications.filter((n) => !n.isRead).length);

  const unreadNotificationCount = notifications.filter((n) => !n.isRead).length;

  useEffect(() => {
    let timerId: NodeJS.Timeout;

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

  return (
    <Toolbar>
      <ToolbarContent>
        <ToolbarGroup align={{ default: 'alignEnd' }} alignItems='center'>
          <ToolbarGroup variant="action-group-plain">
            <ToolbarItem visibility={{ default: 'visible' }} selected={isDrawerExpanded}>
              <NotificationBadge
                id="notification-badge"
                variant={unreadNotificationCount === 0 ? 'read' : 'unread'}
                onClick={() => setIsDrawerExpanded(!isDrawerExpanded)}
                aria-label="Notifications"
                isExpanded={isDrawerExpanded}
                count={unreadNotificationCount}
                shouldNotify={shouldNotifyNewNotification}
              />
            </ToolbarItem>
            <ToolbarItem>
              <Button
                id="settings-button"
                aria-label="Settings actions"
                className="pf-m-settings"
                variant={ButtonVariant.plain}
                icon={<CogIcon />}
              />
            </ToolbarItem>
            <ToolbarItem>
              <Button variant="control" onClick={() => setShowWizardModal(!showWizardModal)}>Show wizard modal</Button>
            </ToolbarItem>
          </ToolbarGroup>
          <ToolbarItem visibility={{ default: 'hidden', md: 'visible' }}>
            <Dropdown
              isOpen={isDropdownOpen}
              onSelect={() => setIsDropdownOpen(false)}
              onOpenChange={setIsDropdownOpen}
              popperProps={{ position: 'right' }}
              toggle={(toggleRef: RefObject<any>) => (
                <MenuToggle
                  ref={toggleRef}
                  isExpanded={isDropdownOpen}
                  onClick={() => setIsDropdownOpen((prev) => !prev)}
                  icon={<Avatar src={imgAvatar} alt="" size="sm" />}
                >
                  Username
                </MenuToggle>
              )}
            >
              <DropdownList>
                <DropdownItem key="group 2 profile">My profile</DropdownItem>
                <DropdownItem key="group 2 user">User management</DropdownItem>
                <DropdownItem key="group 2 logout">Logout</DropdownItem>
              </DropdownList>
            </Dropdown>
          </ToolbarItem>
        </ToolbarGroup>
      </ToolbarContent>
    </Toolbar>
  );
};
