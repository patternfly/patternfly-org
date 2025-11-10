import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Card, CardTitle, CardBody, CardFooter, Flex, Button, Dropdown, DropdownItem, MenuToggle, CardHeader, DropdownList, FlexItem } from '@patternfly/react-core';
import { ChartDonutThreshold, ChartDonutUtilization } from '@patternfly/react-charts/dist/esm/victory/components';
import ArrowRightIcon from '@patternfly/react-icons/dist/esm/icons/arrow-right-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import TachometerAltIcon from '@patternfly/react-icons/dist/esm/icons/tachometer-alt-icon';
export const MemoryUtilizationCard = () => {
    const [isKebabOpen, setIsKebabOpen] = useState(false);
    const dropdownItems = [
        _jsx(DropdownItem, { children: "Action 1" }, "action1"),
        _jsx(DropdownItem, { children: "Action 2" }, "action2"),
        _jsx(DropdownItem, { children: "Action 3" }, "action3")
    ];
    // The kebab menu toggle button
    const kebabToggle = (toggleRef) => (_jsx(MenuToggle, { ref: toggleRef, variant: "plain", onClick: () => setIsKebabOpen(!isKebabOpen), isExpanded: isKebabOpen, "aria-label": "Cluster inventory card kebab menu", children: _jsx(EllipsisVIcon, {}) }));
    return (_jsxs(Card, { component: "div", isFullHeight: true, children: [_jsx(CardHeader, { actions: {
                    actions: (_jsx(Dropdown, { isOpen: isKebabOpen, onSelect: () => setIsKebabOpen(false), onOpenChange: (isOpen) => setIsKebabOpen(isOpen), toggle: kebabToggle, popperProps: { position: 'right' }, children: _jsx(DropdownList, { children: dropdownItems }) })),
                    hasNoOffset: false,
                    className: ''
                }, children: _jsx(CardTitle, { children: _jsxs(Flex, { alignItems: { default: 'alignItemsCenter' }, children: [_jsx(TachometerAltIcon, {}), _jsx("span", { children: "Memory utilization" })] }) }) }), _jsx(CardBody, { children: _jsxs(Flex, { direction: { default: 'column' }, justifyContent: { default: 'justifyContentCenter' }, alignItems: { default: 'alignItemsCenter' }, children: [_jsx(FlexItem, { children: _jsx(ChartDonutThreshold, { ariaDesc: "Mock memory utilization", ariaTitle: "Mock memory utilization chart", constrainToVisibleArea: true, data: [
                                    { x: 'Warning at 60%', y: 60 },
                                    { x: 'Danger at 90%', y: 90 }
                                ], height: 200, labels: ({ datum }) => (datum.x ? datum.x : null), padding: {
                                    bottom: 0,
                                    left: 10,
                                    right: 10,
                                    top: 0
                                }, width: 200, children: _jsx(ChartDonutUtilization, { data: { x: 'Memory capacity', y: 95 }, labels: ({ datum }) => (datum.x ? `${datum.x}: ${datum.y}%` : null), title: "95%", subTitle: "CPU", thresholds: [{ value: 60 }, { value: 90 }] }) }) }), _jsx(FlexItem, { children: _jsx(ChartDonutThreshold, { ariaDesc: "Mock memory utilization", ariaTitle: "Mock memory utilization chart", constrainToVisibleArea: true, data: [
                                    { x: 'Warning at 60%', y: 60 },
                                    { x: 'Danger at 90%', y: 90 }
                                ], height: 200, labels: ({ datum }) => (datum.x ? datum.x : null), padding: {
                                    bottom: 0,
                                    left: 10,
                                    right: 10,
                                    top: 0
                                }, width: 200, children: _jsx(ChartDonutUtilization, { data: { x: 'GPU capacity', y: 55 }, labels: ({ datum }) => (datum.x ? `${datum.x}: ${datum.y}%` : null), title: "55%", subTitle: "GPU", thresholds: [{ value: 60 }, { value: 90 }] }) }) })] }) }), _jsx(CardFooter, { children: _jsx(Button, { variant: "link", isInline: true, icon: _jsx(ArrowRightIcon, {}), iconPosition: "end", component: "a", href: "#", children: "Cluster details page" }) })] }));
};
MemoryUtilizationCard.displayName = 'MemoryUtilizationCard';
export default MemoryUtilizationCard;
//# sourceMappingURL=AnimationsOverviewMemoryUtilization.js.map