import { FunctionComponent } from 'react';
import { NotificationType } from './types';
interface Props {
    notifications: NotificationType[];
    isDrawerExpanded: boolean;
    setIsDrawerExpanded: (newVal: boolean) => void;
    onStartGuidedTour: () => void;
    onEndGuidedTour: () => void;
}
export declare const AnimationsHeaderToolbar: FunctionComponent<Props>;
export {};
//# sourceMappingURL=AnimationsHeaderToolbar.d.ts.map