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
      prevIsStuck.current = false;
      setIsStuck(false);
      return;
    }

    const syncFromScroll = () => {
      // Compare rendered positions: offsetTop may be relative to a different
      // ancestor than the scrolling page container.
      const scrollportTop = scrollElement.getBoundingClientRect().top + scrollElement.clientTop;
      const stickyTop = stickyElement.getBoundingClientRect().top;
      const newIsStuck = stickyTop <= scrollportTop + 1;
      if (prevIsStuck.current !== newIsStuck) {
        prevIsStuck.current = newIsStuck;
        setIsStuck(newIsStuck);
      }
    };

    syncFromScroll();
    scrollElement.addEventListener('scroll', syncFromScroll, { passive: true });
    window.addEventListener('resize', syncFromScroll);
    return () => {
      scrollElement.removeEventListener('scroll', syncFromScroll);
      window.removeEventListener('resize', syncFromScroll);
    };
  }, [stickyElementId]);

  return isStuck;
};
