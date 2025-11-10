import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardBody, CardFooter, Dropdown, DropdownList, DropdownItem, MenuToggle, Flex, FlexItem, Button, Icon } from '@patternfly/react-core';
import ListIcon from '@patternfly/react-icons/dist/esm/icons/list-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import CubesIcon from '@patternfly/react-icons/dist/esm/icons/cubes-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import ArrowRightIcon from '@patternfly/react-icons/dist/esm/icons/arrow-right-icon';
export const ClusterInventoryCard = () => {
    const [isKebabOpen, setIsKebabOpen] = useState(false);
    // Data for the list items in the card body
    const inventoryItems = [
        { icon: _jsx(CubesIcon, {}), text: '15 Deployments' },
        { icon: _jsx(CubesIcon, {}), text: '15 Deployments' },
        { icon: _jsx(CubesIcon, {}), text: '15 Deployments' },
        { icon: _jsx(CubesIcon, {}), text: '15 Deployments' },
        { icon: _jsx(CubeIcon, {}), text: '126 pods' }
    ];
    // Items for the kebab dropdown menu
    const dropdownItems = [
        _jsx(DropdownItem, { children: "Action 1" }, "action1"),
        _jsx(DropdownItem, { children: "Action 2" }, "action2"),
        _jsx(DropdownItem, { children: "Action 3" }, "action3")
    ];
    // The kebab menu toggle button
    const kebabToggle = (toggleRef) => (_jsx(MenuToggle, { ref: toggleRef, variant: "plain", onClick: () => setIsKebabOpen(!isKebabOpen), isExpanded: isKebabOpen, "aria-label": "Cluster inventory card kebab menu", children: _jsx(EllipsisVIcon, {}) }));
    return (
    // To match the dark theme in your screenshot, we wrap the card in a div with a dark background.
    // The `isPlain` and `isFlat` props on the Card remove its default background and shadow so it blends in.
    _jsxs(Card, { component: "div", isFullHeight: true, children: [_jsx(CardHeader
            // We use a Flex layout in the header to position the title and actions
            , { 
                // We use a Flex layout in the header to position the title and actions
                actions: {
                    actions: (_jsx(Dropdown, { isOpen: isKebabOpen, onSelect: () => setIsKebabOpen(false), onOpenChange: (isOpen) => setIsKebabOpen(isOpen), toggle: kebabToggle, popperProps: { position: 'right' }, children: _jsx(DropdownList, { children: dropdownItems }) })),
                    hasNoOffset: false,
                    className: ''
                }, children: _jsx(CardTitle, { children: _jsxs(Flex, { alignItems: { default: 'alignItemsCenter' }, children: [_jsx(ListIcon, {}), _jsx("span", { children: " Cluster inventory" })] }) }) }), _jsx(CardBody, { children: _jsx(Flex, { direction: { default: 'column' }, spaceItems: { default: 'spaceItemsMd' }, children: inventoryItems.map((item, index) => (_jsx(FlexItem, { children: _jsxs(Flex, { alignItems: { default: 'alignItemsCenter' }, spaceItems: { default: 'spaceItemsSm' }, children: [_jsx(FlexItem, { children: _jsx(Icon, { children: item.icon }) }), _jsx(FlexItem, { children: item.text })] }) }, index))) }) }), _jsx(CardFooter, { children: _jsx(Button, { variant: "link", isInline: true, icon: _jsx(ArrowRightIcon, {}), iconPosition: "end", component: "a", href: "#", children: "Cluster details page" }) })] }));
};
ClusterInventoryCard.displayName = 'ClusterInventoryCard';
export default ClusterInventoryCard;
//# sourceMappingURL=AnimationsOverviewClusterInventory.js.map