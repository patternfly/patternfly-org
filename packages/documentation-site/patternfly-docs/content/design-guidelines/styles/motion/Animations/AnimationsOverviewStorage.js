import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Card, CardTitle, CardBody, CardFooter, Flex, Button, Dropdown, DropdownItem, MenuToggle, CardHeader, DropdownList, FlexItem } from '@patternfly/react-core';
import { ChartDonutThreshold, ChartDonutUtilization } from '@patternfly/react-charts/dist/esm/victory/components';
import StorageDomainIcon from '@patternfly/react-icons/dist/esm/icons/storage-domain-icon';
import ArrowRightIcon from '@patternfly/react-icons/dist/esm/icons/arrow-right-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
export const StorageCard = () => {
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
                }, children: _jsx(CardTitle, { children: _jsxs(Flex, { alignItems: { default: 'alignItemsCenter' }, children: [_jsx(StorageDomainIcon, {}), _jsx("span", { children: "Storage" })] }) }) }), _jsx(CardBody, { children: _jsx(Flex, { direction: { default: 'row' }, justifyContent: { default: 'justifyContentCenter' }, alignItems: { default: 'alignItemsCenter' }, children: _jsx(FlexItem, { children: _jsx(ChartDonutThreshold, { ariaDesc: "Mock storage capacity", ariaTitle: "Mock donut utilization chart", constrainToVisibleArea: true, data: [
                                { x: 'Warning at 60%', y: 60 },
                                { x: 'Danger at 90%', y: 90 }
                            ], height: 200, labels: ({ datum }) => (datum.x ? datum.x : null), padding: {
                                bottom: 0,
                                left: 10,
                                right: 10,
                                top: 0
                            }, width: 200, children: _jsx(ChartDonutUtilization, { data: { x: 'Storage capacity', y: 80 }, labels: ({ datum }) => (datum.x ? `${datum.x}: ${datum.y}%` : null), title: "80%", subTitle: "Available", thresholds: [{ value: 60 }, { value: 90 }] }) }) }) }) }), _jsx(CardFooter, { children: _jsx(Button, { variant: "link", isInline: true, icon: _jsx(ArrowRightIcon, {}), iconPosition: "end", component: "a", href: "#", children: "Cluster details page" }) })] }));
};
StorageCard.displayName = 'StorageCard';
export default StorageCard;
//# sourceMappingURL=AnimationsOverviewStorage.js.map