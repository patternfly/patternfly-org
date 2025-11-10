import { FunctionComponent } from 'react';
import { NotificationType } from './types';
interface Props {
    notifications: NotificationType[];
    updateNotifications: (updatedNotifications: NotificationType[]) => void;
    onClose: () => void;
}
export declare const AnimationsNotificationsDrawer: FunctionComponent<Props>;
export {};
//# sourceMappingURL=AnimationsNotificationsDrawer.d.ts.map