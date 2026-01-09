import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CompassPanel, Card, CardHeader, CardTitle, CardBody, Flex, Dropdown, MenuToggle, ProgressStep, ProgressStepper, Spinner, Button, } from '@patternfly/react-core';
import PortIcon from '@patternfly/react-icons/dist/esm/icons/port-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import ResourcesFullIcon from '@patternfly/react-icons/dist/esm/icons/resources-full-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';
import { Table, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';
export const RecentActivityCard = () => {
    const activityData = [
        {
            id: 1,
            name: 'frontend-deployment',
            project: 'automation-platform',
            progress: ['success', 'success', 'success'],
        },
        {
            id: 2,
            name: 'backend-deployment',
            project: 'automation-platform',
            progress: ['success', 'pending', 'default'],
        },
        {
            id: 3,
            name: 'database-deployment',
            project: 'automation-platform',
            progress: ['success', 'success', 'danger'],
        },
        {
            id: 4,
            name: 'frontend-deployment',
            project: 'ci-dashboard',
            progress: ['success', 'warning', 'pending'],
        },
    ];
    const iconMap = {
        success: _jsx(CheckCircleIcon, {}),
        info: _jsx(ResourcesFullIcon, {}),
        pending: _jsx(Spinner, { isInline: true }),
        danger: _jsx(ExclamationCircleIcon, {}),
        warning: _jsx(ExclamationTriangleIcon, {}),
    };
    return (_jsx(CompassPanel, { hasNoPadding: true, isFullHeight: true, children: _jsxs(Card, { isPlain: true, isFullHeight: true, children: [_jsx(CardHeader, { actions: {
                        actions: (_jsx(Dropdown, { isOpen: false, onSelect: () => { }, onOpenChange: () => { }, toggle: (toggleRef) => (_jsx(MenuToggle, { ref: toggleRef, variant: "plain", onClick: () => { }, isExpanded: false, "aria-label": "Recent activity card options", children: _jsx(EllipsisVIcon, {}) })), popperProps: { position: 'right' } })),
                        hasNoOffset: false,
                        className: '',
                    }, children: _jsx(CardTitle, { children: _jsxs(Flex, { alignItems: { default: 'alignItemsCenter' }, children: [_jsx(PortIcon, {}), _jsx("span", { children: "Recent activity" })] }) }) }), _jsx(CardBody, { children: _jsxs(Table, { "aria-label": "Recent activity table", variant: "compact", className: "pf-m-plain", children: [_jsx(Thead, { children: _jsxs(Tr, { children: [_jsx(Th, { width: 30, children: "Name" }), _jsx(Th, { width: 30, children: "Project" }), _jsx(Th, { width: 30, children: "Progress" }), _jsx(Th, { width: 10 })] }) }), _jsx(Tbody, { children: activityData.map((activity, rowIndex) => (_jsxs(Tr, { children: [_jsx(Td, { children: _jsx(Button, { variant: "link", isInline: true, component: "a", href: "#", children: activity.name }) }), _jsx(Td, { children: _jsx(Button, { variant: "link", isInline: true, component: "a", href: "#", children: activity.project }) }), _jsx(Td, { children: _jsx(ProgressStepper, { isCompact: true, "aria-label": `Progress for activity ${activity.name} in project ${activity.project}`, children: activity.progress.map((stepVariant, stepIndex) => (_jsx(ProgressStep, { id: `progress-step-${rowIndex}-${stepVariant}-${stepIndex}`, variant: stepVariant, icon: iconMap[stepVariant], "aria-label": `Step ${stepIndex + 1} is ${stepVariant}` }, stepIndex))) }) }), _jsx(Td, { isActionCell: true, children: _jsx(Dropdown, { isOpen: false, onSelect: () => { }, onOpenChange: () => { }, toggle: (toggleRef) => (_jsx(MenuToggle, { ref: toggleRef, variant: "plain", onClick: () => { }, isExpanded: false, "aria-label": `Options for activity ${activity.name} in project ${activity.project}`, children: _jsx(EllipsisVIcon, {}) })), popperProps: { position: 'right' } }) })] }, activity.id))) })] }) })] }) }));
};
RecentActivityCard.displayName = 'RecentActivityCard';
export default RecentActivityCard;
//# sourceMappingURL=RecentActivityCard.js.map