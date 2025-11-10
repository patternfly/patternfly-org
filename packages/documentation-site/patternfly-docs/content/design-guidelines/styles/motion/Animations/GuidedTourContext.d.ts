import { GuidedTourStep } from './types';
interface GuidedTourContextType {
    onStart: () => void;
    onNextStep: () => void;
    onPrevStep: () => void;
    onFinish: () => void;
    tourStep: GuidedTourStep | undefined;
    isFinished: boolean;
    setCustomStepContent: (customContent: React.ReactNode) => void;
    renderTourStepElement: (forStepId: string, child: React.ReactElement) => React.ReactElement;
}
export declare const GuidedTourProvider: React.FC<{
    steps: GuidedTourStep[];
    children: React.ReactNode;
}>;
export declare const useGuidedTour: () => GuidedTourContextType;
export {};
//# sourceMappingURL=GuidedTourContext.d.ts.map