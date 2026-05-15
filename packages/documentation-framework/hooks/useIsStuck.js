import { useState, useLayoutEffect } from 'react';

export const useIsStuck = (stickyElementId) => {
  const [isStuck, setIsStuck] = useState(false);

  useLayoutEffect(() => {
    const scrollElement = document.getElementById('ws-page-main');
    const stickyElement = document.getElementById(stickyElementId);

    if (!scrollElement || !stickyElement) {
      setIsStuck(false);
      return;
    }

    const syncFromScroll = () => {
      setIsStuck(scrollElement.scrollTop > stickyElement.getBoundingClientRect().top);
    };

    syncFromScroll();
    scrollElement.addEventListener('scroll', syncFromScroll, { passive: true });
    return () => scrollElement.removeEventListener('scroll', syncFromScroll);
  }, []);

  return isStuck;
};
