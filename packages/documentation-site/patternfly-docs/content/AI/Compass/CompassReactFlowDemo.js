import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { memo, useCallback, useRef } from "react";
import { Background, ReactFlow, useNodesState, useEdgesState, addEdge, useReactFlow, ReactFlowProvider, Handle, Position, } from "@xyflow/react";
import { Card, CardBody, CardFooter, CardTitle, DescriptionList, DescriptionListDescription, DescriptionListGroup, DescriptionListTerm, Divider, Title, Badge, Button, } from "@patternfly/react-core";
import "@xyflow/react/dist/style.css";
import "./reactFlowOverrides.css";
const PFCardNode = memo(({ data, isConnectable, }) => {
    return (_jsxs(_Fragment, { children: [_jsx(Handle, { type: "target", position: Position.Left, isConnectable: isConnectable, style: { background: "#555" } }), _jsx("div", { style: { minWidth: "300px", maxWidth: "400px" }, children: _jsxs(Card, { isFullHeight: true, children: [_jsx(CardTitle, { children: _jsxs("div", { style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }, children: [_jsx(Title, { headingLevel: "h4", size: "lg", children: data.title }), _jsx(Badge, { isRead: true, children: data.status })] }) }), _jsxs(CardBody, { children: [_jsx("p", { children: data.description }), _jsx(DescriptionList, { "aria-label": `${data.title} details`, children: data.details.map((detail, index) => (_jsxs(DescriptionListGroup, { children: [_jsx(DescriptionListTerm, { children: detail.term }), _jsx(DescriptionListDescription, { children: detail.description })] }, index))) })] }), data.actionText && (_jsxs(_Fragment, { children: [_jsx(Divider, {}), _jsx(CardFooter, { children: _jsx(Button, { variant: "link", onClick: () => {
                                            var _a;
                                            // Call the original action if provided
                                            (_a = data.onAction) === null || _a === void 0 ? void 0 : _a.call(data);
                                        }, style: { padding: 0 }, children: data.actionText }) })] }))] }) }), _jsx(Handle, { type: "source", position: Position.Right, isConnectable: isConnectable, style: { background: "#555" } })] }));
});
const initialNodes = [
    {
        id: "0",
        type: "pfCard",
        data: {
            title: "Application Service",
            status: "Running",
            description: "A microservice handling user authentication and authorization.",
            details: [
                { term: "Version", description: "v2.1.4" },
                { term: "CPU Usage", description: "45%" },
                { term: "Memory", description: "2.1 GB" },
                { term: "Last Deployed", description: "2 hours ago" },
            ],
            actionText: "View Details",
            onAction: () => console.log("View details clicked"),
        },
        position: { x: 300, y: 50 },
    },
    {
        id: "1",
        type: "pfCard",
        data: {
            title: "Database Service",
            status: "Healthy",
            description: "PostgreSQL database cluster with high availability.",
            details: [
                { term: "Cluster Size", description: "3 nodes" },
                { term: "Storage", description: "500 GB" },
                { term: "Connections", description: "127 active" },
                { term: "Uptime", description: "99.9%" },
            ],
            actionText: "Monitor",
            onAction: () => console.log("Monitor clicked"),
        },
        position: { x: 700, y: 50 },
    },
    {
        id: "2",
        type: "input",
        data: { label: "Start Node" },
        position: { x: 0, y: 50 },
    },
    {
        id: '3',
        position: { x: 0, y: 150 },
        data: { label: 'plain node' }
    },
];
let id = 1;
const getId = () => `${id++}`;
const nodeOrigin = [0.5, 0];
const nodeTypes = {
    pfCard: PFCardNode,
};
const AddNodeOnEdgeDrop = () => {
    const reactFlowWrapper = useRef(null);
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState([
        { id: "e2-0", source: "2", target: "0" },
        { id: "e0-1", source: "0", target: "1" },
    ]);
    const { screenToFlowPosition } = useReactFlow();
    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);
    const onConnectEnd = useCallback((event, connectionState) => {
        // when a connection is dropped on the pane it's not valid
        if (!connectionState.isValid) {
            // we need to remove the wrapper bounds, in order to get the correct position
            const id = getId();
            const { clientX, clientY } = "changedTouches" in event ? event.changedTouches[0] : event;
            const newNode = {
                id,
                type: "default",
                position: screenToFlowPosition({
                    x: clientX,
                    y: clientY,
                }),
                data: { label: `Node ${id}` },
                origin: [0.5, 0.0],
            };
            setNodes((nds) => [...nds, newNode]);
            setEdges((eds) => {
                var _a;
                return [
                    ...eds,
                    {
                        id,
                        source: ((_a = connectionState.fromNode) === null || _a === void 0 ? void 0 : _a.id) || "",
                        target: id,
                    },
                ];
            });
        }
    }, [screenToFlowPosition]);
    return (_jsx("div", { className: "wrapper", ref: reactFlowWrapper, style: { height: "100%", width: "100%" }, children: _jsx(ReactFlow, { nodes: nodes, edges: edges, onNodesChange: onNodesChange, onEdgesChange: onEdgesChange, onConnect: onConnect, onConnectEnd: onConnectEnd, nodeTypes: nodeTypes, fitView: true, fitViewOptions: { padding: 2 }, nodeOrigin: nodeOrigin, children: _jsx(Background, {}) }) }));
};
export const CompassReactFlowDemo = () => (_jsx("div", { style: { height: "400px" }, children: _jsx(ReactFlowProvider, { children: _jsx(AddNodeOnEdgeDrop, {}) }) }));
//# sourceMappingURL=CompassReactFlowDemo.js.map