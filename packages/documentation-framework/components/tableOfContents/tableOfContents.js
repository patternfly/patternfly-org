/**
 * PROTOTYPE: Responsive TOC redesign
 * Branch: prototype/responsive-toc
 *
 * Breakpoints (aligned with Figma + PF tokens):
 * - XL+ / 2xl (≥1450px): expanded sidebar JumpLinks (unchanged)
 * - Lg (992–1449px): plain icon MenuToggle in sticky tabs → Panel or pill Drawer
 * - Md and below (<992px): floating sticky MenuToggle → Panel or pill Drawer
 *   - With tabs: floats below sticky tabs
 *   - Without tabs (overview pages): fixed to viewport right (aligned with feedback);
 *     top tracks title, then pins below sticky toolbars — no horizontal jump on scroll
 *
 * Surface comparison (localStorage ws-toc-surface): Panel (default) | Drawer (pill overlay)
 *
 * Not production-ready — for design-system feedback only.
 */
import React from 'react';
import { createPortal } from 'react-dom';
import {
  JumpLinks,
  JumpLinksItem,
  JumpLinksList,
  MenuToggle,
  Panel,
  PanelMain,
  Popper,
  Tooltip,
  Icon
} from '@patternfly/react-core';
import ListIcon from '@patternfly/react-icons/dist/esm/icons/list-icon';
import { trackEvent } from '../../helpers';
import { TOC_SURFACE, useTocPrototype } from './tocPrototype';

const TOC_SIDEBAR_MIN = 1450; // PF 2xl — full sidebar jumplinks
const TOC_LG_MIN = 992; // PF lg (62rem) — toggle in sticky tabs

const getMenuSlot = () =>
  typeof document !== 'undefined' ? document.getElementById('ws-toc-menu-slot') : null;

const getStickyToolbarHeight = () => {
  if (typeof document === 'undefined') {
    return 0;
  }
  const toolbars = document.querySelectorAll('.pf-v6-c-toolbar.pf-m-sticky');
  let height = 0;
  toolbars.forEach((toolbar) => {
    height += toolbar.offsetHeight;
  });
  return height;
};

const getTocMode = (width, hasTabsSlot) => {
  if (width >= TOC_SIDEBAR_MIN) {
    return 'sidebar';
  }
  if (width >= TOC_LG_MIN && hasTabsSlot) {
    return 'tabs';
  }
  return 'floating';
};

export const TableOfContents = ({ items }) => {
  const { surface, isDrawerOpen, setIsDrawerOpen, setDrawerContent } = useTocPrototype();
  const isDrawerSurface = surface === TOC_SURFACE.DRAWER;

  const [width, setWidth] = React.useState(() =>
    typeof window !== 'undefined' ? window.innerWidth : TOC_SIDEBAR_MIN
  );
  const [stickyNavHeight, setStickyNavHeight] = React.useState(0);
  const [stickyToolbarHeight, setStickyToolbarHeight] = React.useState(0);
  const [menuSlotEl, setMenuSlotEl] = React.useState(getMenuSlot);
  // Viewport top (px) for no-tabs fixed toggle — only vertical tracking, right stays constant
  const [noTabsFixedTop, setNoTabsFixedTop] = React.useState(null);
  const [isPanelOpen, setIsPanelOpen] = React.useState(false);
  const toggleRef = React.useRef(null);
  const noTabsFloatingRef = React.useRef(null);

  const hasTabsSlot = Boolean(menuSlotEl);
  const mode = getTocMode(width, hasTabsSlot);

  const isOpen = isDrawerSurface ? isDrawerOpen : isPanelOpen;
  const setIsOpen = isDrawerSurface ? setIsDrawerOpen : setIsPanelOpen;

  // Sticky offset: tabs (when present) + sticky toolbars (overview galleries, etc.)
  const stickyOffset = stickyNavHeight + stickyToolbarHeight;

  const syncLayout = React.useCallback(() => {
    const stickyNav = document.getElementById('ws-sticky-nav-tabs');
    setStickyNavHeight(stickyNav ? stickyNav.offsetHeight : 0);
    setStickyToolbarHeight(getStickyToolbarHeight());
    setMenuSlotEl(getMenuSlot());
  }, []);

  /**
   * No-tabs pages: fixed toggle portaled to document.body (avoids transformed
   * ancestors breaking position:fixed). Constant `right`; `top` tracks the title
   * while visible, then pins below stuck sticky toolbars.
   */
  const syncNoTabsFixedTop = React.useCallback(() => {
    if (hasTabsSlot) {
      setNoTabsFixedTop(null);
      return;
    }
    const scrollEl = document.getElementById('ws-page-main');
    const titleEl = document.getElementById('ws-page-title');
    if (!scrollEl) {
      return;
    }

    const mainTop = scrollEl.getBoundingClientRect().top;
    const spacer = 8;
    const toggleH = noTabsFloatingRef.current?.offsetHeight || 37;

    // While the title is visible, top-align with the title
    if (titleEl) {
      const titleRect = titleEl.getBoundingClientRect();
      if (titleRect.bottom > mainTop + spacer) {
        setNoTabsFixedTop(Math.max(mainTop + spacer, titleRect.top + (titleRect.height - toggleH) / 2));
        return;
      }
    }

    let stuckToolbarHeight = 0;
    document.querySelectorAll('.pf-v6-c-toolbar.pf-m-sticky').forEach((toolbar) => {
      const rect = toolbar.getBoundingClientRect();
      if (rect.top <= mainTop + 1) {
        stuckToolbarHeight += toolbar.offsetHeight;
      }
    });
    setStickyToolbarHeight(stuckToolbarHeight);
    setNoTabsFixedTop(mainTop + stuckToolbarHeight + spacer);
  }, [hasTabsSlot]);

  React.useEffect(() => {
    syncLayout();
  }, [syncLayout, mode, width]);

  React.useEffect(() => {
    syncNoTabsFixedTop();
    const scrollEl = document.getElementById('ws-page-main');
    if (!scrollEl) {
      return undefined;
    }
    const onScroll = () => {
      syncNoTabsFixedTop();
    };
    scrollEl.addEventListener('scroll', onScroll, { passive: true });

    const observer =
      typeof MutationObserver !== 'undefined'
        ? new MutationObserver(() => {
            syncLayout();
            syncNoTabsFixedTop();
          })
        : null;
    observer?.observe(scrollEl, { childList: true, subtree: true });

    return () => {
      scrollEl.removeEventListener('scroll', onScroll);
      observer?.disconnect();
    };
  }, [syncLayout, syncNoTabsFixedTop]);

  React.useEffect(() => {
    const onResize = () => {
      const nextWidth = window.innerWidth;
      setWidth((prev) => {
        if (prev !== nextWidth) {
          setIsOpen(false);
        }
        return nextWidth;
      });
      syncLayout();
      syncNoTabsFixedTop();
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [syncLayout, syncNoTabsFixedTop, setIsOpen]);

  React.useLayoutEffect(() => {
    if (!hasTabsSlot && mode === 'floating') {
      syncNoTabsFixedTop();
    }
  }, [hasTabsSlot, mode, syncNoTabsFixedTop]);

  React.useEffect(() => {
    if (mode === 'sidebar') {
      setIsPanelOpen(false);
      setIsDrawerOpen(false);
    }
  }, [mode, setIsDrawerOpen]);

  // Close panel when switching away from panel surface
  React.useEffect(() => {
    if (isDrawerSurface) {
      setIsPanelOpen(false);
    }
  }, [isDrawerSurface]);

  // Escape closes drawer surface (panel handled by Popper)
  React.useEffect(() => {
    if (!isDrawerSurface || !isDrawerOpen) {
      return undefined;
    }
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsDrawerOpen(false);
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isDrawerSurface, isDrawerOpen, setIsDrawerOpen]);

  const getOffset = () => {
    if (width >= TOC_SIDEBAR_MIN) {
      return 88 + stickyNavHeight;
    }
    if (width >= 768) {
      return 142 + stickyOffset;
    }
    return 190 + stickyOffset;
  };

  const closeSurface = () => setIsOpen(false);

  const handleJumpClick = (id) => {
    trackEvent('jump_link_click', 'click_event', id.toUpperCase());
    closeSurface();
  };

  const updateWidth = () => {
    const { innerWidth } = window;
    if (innerWidth !== width) {
      setWidth(innerWidth);
    }
  };

  let jumpLinksItems = [];
  let wasSublistRendered = false;

  const renderSublist = (item, nextItemArr) => {
    wasSublistRendered = true;
    return (
      <>
        {item.text}
        <JumpLinksList>
          {nextItemArr.map((curItem) => (
            <JumpLinksItem
              key={curItem.id}
              href={`#${curItem.id}`}
              className="ws-toc-item"
              onKeyDown={updateWidth}
              onMouseDown={updateWidth}
              onClick={() => handleJumpClick(curItem.id)}
            >
              {curItem.text}
            </JumpLinksItem>
          ))}
        </JumpLinksList>
      </>
    );
  };

  const renderJumpLinksItems = () => {
    jumpLinksItems = [];
    wasSublistRendered = false;
    items.forEach((item, index) => {
      const nextItem = items[index + 1];
      if (wasSublistRendered) {
        wasSublistRendered = false;
        return;
      }
      if (!Array.isArray(nextItem) && Array.isArray(item)) {
        item.forEach((curItem) =>
          jumpLinksItems.push(
            <JumpLinksItem
              key={curItem.id}
              href={`#${curItem.id}`}
              className="ws-toc-item"
              onKeyDown={updateWidth}
              onMouseDown={updateWidth}
              onClick={() => handleJumpClick(curItem.id)}
            >
              {curItem.text}
            </JumpLinksItem>
          )
        );
      } else {
        jumpLinksItems.push(
          <JumpLinksItem
            key={item.id}
            href={`#${item.id}`}
            className="ws-toc-item"
            onKeyDown={updateWidth}
            onMouseDown={updateWidth}
            onClick={() => handleJumpClick(item.id)}
          >
            {Array.isArray(nextItem) ? renderSublist(item, nextItem) : item.text}
          </JumpLinksItem>
        );
      }
    });
    return jumpLinksItems;
  };

  const jumpLinksChildren = renderJumpLinksItems();
  const offset = getOffset();

  const drawerJumpLinks = (
    <JumpLinks
      isVertical
      scrollableSelector="#ws-page-main"
      className="ws-toc-drawer-jumplinks"
      offset={offset}
      aria-label="Table of contents"
    >
      {jumpLinksChildren}
    </JumpLinks>
  );

  // Register jumplinks into the page-level pill Drawer when using drawer surface
  React.useEffect(() => {
    if (mode === 'sidebar' || !isDrawerSurface) {
      setDrawerContent(null);
      return undefined;
    }
    setDrawerContent(drawerJumpLinks);
    return () => setDrawerContent(null);
    // drawerJumpLinks is recreated each render; depend on inputs that change its content
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, isDrawerSurface, items, offset, setDrawerContent]);

  // — XL+ / 2xl: existing sidebar JumpLinks —
  if (mode === 'sidebar') {
    return (
      <JumpLinks
        label="Table of contents"
        isVertical
        scrollableSelector="#ws-page-main"
        className="ws-toc"
        style={{
          top: stickyNavHeight,
          '--jump-links-main-margin-bottom': `${stickyNavHeight}px`
        }}
        offset={offset}
        expandable={{ default: 'expandable', '2xl': 'nonExpandable' }}
      >
        {jumpLinksChildren}
      </JumpLinks>
    );
  }

  // — Lg / Md: MenuToggle opens Panel (Popper) or page-level pill Drawer —
  const toggle = (
    <MenuToggle
      ref={toggleRef}
      variant="plain"
      className={[
        mode === 'floating' ? 'ws-toc-menu-toggle ws-toc-menu-toggle-floating' : 'ws-toc-menu-toggle',
        isDrawerSurface && isDrawerOpen ? 'ws-toc-menu-toggle-under-drawer' : ''
      ]
        .filter(Boolean)
        .join(' ')}
      isExpanded={isOpen}
      onClick={() => setIsOpen((open) => !open)}
      aria-label="Table of contents"
      aria-haspopup="dialog"
      icon={
        <Icon size="lg">
          <ListIcon aria-hidden="true" />
        </Icon>
      }
    />
  );

  const panel = (
    <Panel variant="raised" className="ws-toc-panel" isScrollable>
      <PanelMain>
        <JumpLinks
          isVertical
          scrollableSelector="#ws-page-main"
          className="ws-toc-panel-jumplinks"
          offset={offset}
          aria-label="Table of contents"
        >
          {jumpLinksChildren}
        </JumpLinks>
      </PanelMain>
    </Panel>
  );

  const menu = isDrawerSurface ? (
    <>
      <Tooltip content="Table of contents" position="left" triggerRef={toggleRef} />
      {toggle}
    </>
  ) : (
    <>
      <Tooltip content="Table of contents" position="left" triggerRef={toggleRef} />
      <Popper
        trigger={toggle}
        triggerRef={toggleRef}
        popper={panel}
        isVisible={isPanelOpen}
        position="end"
        direction="down"
        distance={8}
        minWidth="287px"
        enableFlip
        preventOverflow
        appendTo={() => document.getElementById('ws-page-main') || document.body}
        onDocumentClick={(event, triggerElement, popperElement) => {
          if (
            isPanelOpen &&
            !triggerElement?.contains(event.target) &&
            !popperElement?.contains(event.target)
          ) {
            setIsPanelOpen(false);
          }
        }}
        onDocumentKeyDown={(event) => {
          if (event.key === 'Escape') {
            setIsPanelOpen(false);
          }
        }}
      />
    </>
  );

  if (mode === 'tabs') {
    if (!menuSlotEl) {
      return null;
    }
    return createPortal(menu, menuSlotEl);
  }

  // No-tabs: portal to body so position:fixed is viewport-relative (not trapped by page transforms)
  if (!hasTabsSlot) {
    if (typeof document === 'undefined') {
      return null;
    }
    return createPortal(
      <div
        ref={noTabsFloatingRef}
        className={[
          'ws-toc-floating',
          'ws-toc-floating-no-tabs',
          isDrawerSurface && isDrawerOpen ? 'ws-toc-menu-toggle-under-drawer' : ''
        ]
          .filter(Boolean)
          .join(' ')}
        style={{
          top: noTabsFixedTop != null ? `${noTabsFixedTop}px` : undefined
        }}
      >
        {menu}
      </div>,
      document.body
    );
  }

  // Floating below sticky tabs (md)
  return (
    <div
      className="ws-toc-floating"
      style={{
        '--ws-toc-sticky-offset': `${stickyOffset}px`
      }}
    >
      {menu}
    </div>
  );
};
