import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Content, Modal, ModalBody, ModalFooter, ModalHeader, ModalVariant } from '@patternfly/react-core';
import { useGuidedTour } from './GuidedTourContext';
export const AnimationsEndTourModal = () => {
    const { onStart, onFinish } = useGuidedTour();
    return (_jsxs(Modal, { variant: ModalVariant.small, isOpen: true, onClose: onFinish, "aria-labelledby": "guided-tour-title", "aria-describedby": "guided-tour-description", children: [_jsx(ModalHeader, { title: "This concludes the tour", labelId: "guided-tour-title" }), _jsxs(ModalBody, { id: "guided-tour-description", children: [_jsx(Content, { component: "p", children: "You\u2019ve reached the end of this tour. Thanks for exploring our new animations!" }), _jsxs(Content, { component: "p", children: ["To take the tour again, click ", _jsx("strong", { children: "Restart" }), " or refresh this page."] })] }), _jsxs(ModalFooter, { children: [_jsx(Button, { variant: "primary", onClick: onFinish, children: "End tour" }, "end"), _jsx(Button, { variant: "link", onClick: onStart, children: "Restart" }, "restart")] })] }));
};
//# sourceMappingURL=AnimationsEndTourModal.js.map