import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useContext, useCallback, useEffect, useState, useRef, useMemo } from 'react';
import { Button, ButtonVariant, debounce, Flex, FlexItem, getResizeObserver, Popover } from '@patternfly/react-core';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';
import Spotlight from './Spotlight';
const GuidedTourContext = createContext({
    onStart: () => { },
    onNextStep: () => { },
    onPrevStep: () => { },
    onFinish: () => { },
    setCustomStepContent: () => { },
    renderTourStepElement: () => null,
    tourStep: undefined,
    isFinished: false
});
export const GuidedTourProvider = ({ steps, children }) => {
    const [currentStep, setCurrentStep] = useState();
    const [customStepContent, setCustomStepContent] = useState();
    const [windowWidth, setWindowWidth] = useState();
    const unObserver = useRef(null);
    const isMobile = windowWidth < 500;
    const tourSteps = useMemo(() => steps.filter((step) => (isMobile ? !step.deskTopOnly : !step.mobileOnly)), [steps, isMobile]);
    useEffect(() => {
        setCurrentStep(undefined);
        setCustomStepContent(undefined);
    }, [steps]);
    const onStart = useCallback(() => {
        setCustomStepContent(undefined);
        setCurrentStep(0);
    }, []);
    const onFinish = useCallback(() => {
        setCustomStepContent(undefined);
        setCurrentStep(undefined);
    }, []);
    const onNextStep = useCallback(() => {
        setCustomStepContent(undefined);
        setCurrentStep((prev) => {
            if (prev === undefined) {
                return prev;
            }
            return prev + 1;
        });
    }, []);
    const onPrevStep = useCallback(() => {
        setCustomStepContent(undefined);
        setCurrentStep((prev) => {
            if (prev === undefined || prev === 0) {
                return prev;
            }
            return prev - 1;
        });
    }, []);
    const tourStep = currentStep !== undefined ? tourSteps[currentStep] : undefined;
    const isFinished = currentStep !== undefined ? currentStep >= tourSteps.length : false;
    const renderTourStepElement = useCallback((forStepId, child) => {
        var _a, _b;
        if (!tourStep || forStepId !== tourStep.stepId) {
            return child;
        }
        return (_jsxs(_Fragment, { children: [tourStep.spotlightSelector ? (_jsx(Spotlight, { selector: tourStep.spotlightSelector, resizeSelector: tourStep.spotlightResizeSelector })) : null, _jsx(Popover, { isVisible: true, showClose: true, maxWidth: isMobile ? ((_b = (_a = tourStep.mobilePopoverWidth) !== null && _a !== void 0 ? _a : tourStep.popoverWidth) !== null && _b !== void 0 ? _b : '275px') : tourStep.popoverWidth, hideOnOutsideClick: false, position: tourStep.position, enableFlip: !tourStep.position, headerContent: _jsxs(_Fragment, { children: [tourStep.header, _jsx("div", { className: "pf-v6-c-popover__close", children: _jsx(Button, { onClick: onFinish, variant: "plain", "aria-label": "close guided tour", style: { pointerEvents: 'auto' }, icon: _jsx(TimesIcon, {}) }) })] }), bodyContent: customStepContent || tourStep.content, footerContent: _jsxs(Flex, { spaceItems: { default: 'spaceItemsMd' }, justifyContent: { default: 'justifyContentSpaceBetween' }, children: [_jsxs(FlexItem, { children: ["Step ", currentStep + 1, "/", tourSteps.length] }), _jsx(FlexItem, { children: _jsxs(Flex, { spaceItems: { default: 'spaceItemsMd' }, children: [_jsx(FlexItem, { children: _jsx(Button, { variant: ButtonVariant.secondary, onClick: onPrevStep, isDisabled: currentStep === 0, children: "Back" }) }), _jsx(FlexItem, { children: _jsx(Button, { variant: ButtonVariant.primary, onClick: onNextStep, children: "Next" }) })] }) })] }), children: child })] }));
    }, [tourStep, currentStep, tourSteps, onNextStep, onPrevStep, onFinish, customStepContent, isMobile]);
    const measureRef = (ref) => {
        // Remove any previous observer
        if (unObserver.current) {
            unObserver.current();
        }
        if (!ref) {
            return;
        }
        const handleResize = () => setWindowWidth(ref.clientWidth);
        // Set size on initialization
        handleResize();
        const debounceResize = debounce(handleResize, 100);
        // Update graph size on resize events
        unObserver.current = getResizeObserver(ref, debounceResize);
    };
    useEffect(() => () => {
        if (unObserver.current) {
            unObserver.current();
        }
    }, []);
    return (_jsxs(GuidedTourContext.Provider, { value: {
            onStart,
            onNextStep,
            onPrevStep,
            onFinish,
            setCustomStepContent,
            renderTourStepElement,
            tourStep,
            isFinished
        }, children: [_jsx("div", { ref: measureRef, style: { width: '100%' } }), children] }));
};
GuidedTourProvider.displayName = 'GuidedTourProvider';
export const useGuidedTour = () => {
    const context = useContext(GuidedTourContext);
    if (!context) {
        throw new Error('useGuidedTour must be used within a GuidedTourProvider');
    }
    return context;
};
//# sourceMappingURL=GuidedTourContext.js.map