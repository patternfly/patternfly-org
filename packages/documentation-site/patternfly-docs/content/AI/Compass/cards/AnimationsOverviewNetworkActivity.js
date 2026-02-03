import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardBody, Dropdown, DropdownList, DropdownItem, MenuToggle, Flex, CompassPanel, } from "@patternfly/react-core";
import EllipsisVIcon from "@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon";
import NetworkIcon from "@patternfly/react-icons/dist/esm/icons/network-icon";
import { Chart, ChartArea, ChartAxis, ChartGroup, ChartThemeColor, ChartVoronoiContainer, } from "@patternfly/react-charts/dist/esm/victory/components";
export const NetworkActivityCard = () => {
    const [isKebabOpen, setIsKebabOpen] = useState(false);
    // Data for the chart
    const chartData = [
        { name: "Network Activity", x: "1", y: 10 },
        { name: "Network Activity", x: "2", y: 8 },
        { name: "Network Activity", x: "3", y: 6 },
        { name: "Network Activity", x: "4", y: 5 },
        { name: "Network Activity", x: "5", y: 5.5 },
        { name: "Network Activity", x: "6", y: 5 },
        { name: "Network Activity", x: "7", y: 4 },
        { name: "Network Activity", x: "8", y: 4.5 },
        { name: "Network Activity", x: "9", y: 4.5 },
        { name: "Network Activity", x: "10", y: 0 },
    ];
    // Items for the kebab dropdown menu
    const dropdownItems = [
        _jsx(DropdownItem, { children: "View details" }, "action1"),
        _jsx(DropdownItem, { children: "Refresh data" }, "action2"),
        _jsx(DropdownItem, { children: "Settings" }, "action3"),
    ];
    // The kebab menu toggle button
    const kebabToggle = (toggleRef) => (_jsx(MenuToggle, { ref: toggleRef, variant: "plain", onClick: () => setIsKebabOpen(!isKebabOpen), isExpanded: isKebabOpen, "aria-label": "Network activity card options", children: _jsx(EllipsisVIcon, {}) }));
    return (
    // To match the dark theme, we wrap the card in a div with a dark background.
    // The `isPlain` and `isFlat` props on the Card remove its default styling.
    _jsx(CompassPanel, { hasNoPadding: true, isFullHeight: true, children: _jsxs(Card, { isPlain: true, isFullHeight: true, children: [_jsx(CardHeader, { actions: {
                        actions: (_jsx(Dropdown, { isOpen: isKebabOpen, onSelect: () => setIsKebabOpen(false), onOpenChange: (isOpen) => setIsKebabOpen(isOpen), toggle: kebabToggle, popperProps: { position: "right" }, children: _jsx(DropdownList, { children: dropdownItems }) })),
                        hasNoOffset: false,
                        className: "",
                    }, children: _jsx(CardTitle, { children: _jsxs(Flex, { alignItems: { default: "alignItemsCenter" }, children: [_jsx(NetworkIcon, {}), _jsx("span", { children: "Network activity" })] }) }) }), _jsx(CardBody, { children: _jsxs(Chart, { ariaDesc: "Network activity chart", ariaTitle: "Network activity chart", containerComponent: _jsx(ChartVoronoiContainer, { labels: ({ datum }) => `${datum.name}: ${datum.y}`, constrainToVisibleArea: true }), height: 250, padding: {
                            bottom: 50,
                            left: 50,
                            right: 20,
                            top: 20,
                        }, themeColor: ChartThemeColor.multi, width: 400, children: [_jsx(ChartAxis, {}), _jsx(ChartAxis, { dependentAxis: true, showGrid: true }), _jsx(ChartGroup, { children: _jsx(ChartArea, { data: chartData, interpolation: "catmullRom" // This creates the smooth curve
                                    , style: {
                                        data: {
                                            stroke: "#0066CC", // Line color
                                            fill: "rgba(0, 102, 204, 0.4)", // Area fill color with opacity
                                        },
                                    } }) })] }) })] }) }));
};
NetworkActivityCard.displayName = "NetworkActivityCard";
export default NetworkActivityCard;
//# sourceMappingURL=AnimationsOverviewNetworkActivity.js.map