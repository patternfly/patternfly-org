import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import { debounce, getResizeObserver } from '@patternfly/react-core';
const SpotlightBorderWidth = 3;
const SpotlightGap = 4;
const isHTMLElement = (n) => n.nodeType === Node.ELEMENT_NODE;
const getAllParentScrollableElements = (node) => {
    var _a;
    let parentNode = node;
    const scrollables = [];
    while (parentNode) {
        if (isHTMLElement(parentNode)) {
            let overflow = (_a = parentNode.style) === null || _a === void 0 ? void 0 : _a.overflow;
            if (!overflow.includes('scroll') && !overflow.includes('auto')) {
                overflow = window.getComputedStyle(parentNode).overflow;
            }
            if (overflow.includes('scroll') || overflow.includes('auto')) {
                scrollables.push(parentNode);
            }
        }
        parentNode = parentNode.parentNode;
    }
    return scrollables;
};
const Spotlight = ({ selector, resizeSelector }) => {
    var _a;
    const [clientRect, setClientRect] = useState((_a = document.querySelector(selector)) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect());
    const unObserver = useRef(null);
    // if target element is a hidden one return null
    const element = document.querySelector(selector);
    useEffect(() => {
        // If the element is not found, give it another try after a redraw
        if (!element) {
            requestAnimationFrame(() => { var _a; return setClientRect((_a = document.querySelector(selector)) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()); });
        }
    }, [element]);
    useEffect(() => {
        if (!element) {
            return;
        }
        const handleResize = () => {
            if (element) {
                setClientRect(element.getBoundingClientRect());
            }
        };
        const debounceResize = debounce(handleResize, 10);
        // Update graph size on resize events
        const resizeElement = resizeSelector ? document.querySelector(resizeSelector) || element : element;
        unObserver.current = getResizeObserver(resizeElement, debounceResize);
        const parentScrollables = getAllParentScrollableElements(element);
        parentScrollables.forEach((parentScrollable) => parentScrollable.addEventListener('scroll', debounceResize));
        return () => {
            parentScrollables.forEach((parentScrollable) => parentScrollable.removeEventListener('scroll', debounceResize));
            if (unObserver.current) {
                unObserver.current();
                unObserver.current = undefined;
            }
        };
    }, [element, resizeSelector]);
    if (!element) {
        return null;
    }
    const style = clientRect
        ? {
            position: 'fixed',
            top: clientRect.top - (SpotlightBorderWidth + SpotlightGap),
            left: clientRect.left - (SpotlightBorderWidth + SpotlightGap),
            height: clientRect.height + 2 * (SpotlightBorderWidth + SpotlightGap),
            width: clientRect.width + 2 * (SpotlightBorderWidth + SpotlightGap),
            borderWidth: 3,
            borderStyle: 'solid',
            borderColor: 'var(--pf-t--global--background--color--highlight--default)',
            borderRadius: 'var(--pf-t--global--border--radius--small)',
            background: 'transparent',
            pointerEvents: 'none'
        }
        : {};
    return clientRect ? _jsx("div", { style: style }) : null;
};
export default Spotlight;
//# sourceMappingURL=Spotlight.js.map