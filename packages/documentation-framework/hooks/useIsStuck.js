import { useState, useEffect, useLayoutEffect, useRef } from 'react';

// The prerenderer provides a partial document shim but no createElement.
const useIsomorphicLayoutEffect =
  typeof document !== 'undefined' && typeof document.createElement === 'function'
    ? useLayoutEffect
    : useEffect;

export const useIsStuck = (stickyElementId) => {
  const [isStuck, setIsStuck] = useState(false);
  const prevIsStuck = useRef(false);

  useIsomorphicLayoutEffect(() => {
    const scrollElement = document.getElementById('ws-page-main');
    const stickyElement = document.getElementById(stickyElementId);

    if (!scrollElement || !stickyElement) {
      if (prevIsStuck.current !== false) {
        setIsStuck(false);
        prevIsStuck.current = false;
      }
      return;
    }

    const syncFromScroll = () => {
      const newIsStuck = scrollElement.scrollTop >= stickyElement.offsetTop;
      // Only update state if the value actually changed
      if (prevIsStuck.current !== newIsStuck) {
        setIsStuck(newIsStuck);
        prevIsStuck.current = newIsStuck;
      }
    };

    syncFromScroll();
    scrollElement.addEventListener('scroll', syncFromScroll, { passive: true });
    return () => scrollElement.removeEventListener('scroll', syncFromScroll);
  }, [stickyElementId]);

  return isStuck;
};
