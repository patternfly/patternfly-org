import { useState, useLayoutEffect, useRef } from 'react';

export const useIsStuck = (stickyElementId) => {
  const [isStuck, setIsStuck] = useState(false);
  const lastValueRef = useRef(false);

  useLayoutEffect(() => {
    const scrollElement = document.getElementById('ws-page-main');
    const stickyElement = document.getElementById(stickyElementId);

    if (!scrollElement || !stickyElement) {
      if (lastValueRef.current !== false) {
        setIsStuck(false);
        lastValueRef.current = false;
      }
      return;
    }

    // Get the initial offset of the sticky element relative to the scroll container
    const initialTop = stickyElement.offsetTop;

    const syncFromScroll = () => {
      const newIsStuck = scrollElement.scrollTop >= initialTop;
      // Only update state if the value actually changed
      if (lastValueRef.current !== newIsStuck) {
        setIsStuck(newIsStuck);
        lastValueRef.current = newIsStuck;
      }
    };

    syncFromScroll();
    scrollElement.addEventListener('scroll', syncFromScroll, { passive: true });
    return () => scrollElement.removeEventListener('scroll', syncFromScroll);
  }, [stickyElementId]);

  return isStuck;
};
