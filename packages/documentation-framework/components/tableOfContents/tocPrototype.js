/**
 * PROTOTYPE: TOC surface comparison (Panel vs pill overlay Drawer)
 * Persists surface choice in localStorage for design/dev review.
 */
import React from 'react';
import {
  Drawer,
  DrawerContent,
  DrawerContentBody,
  DrawerPanelContent,
  DrawerHead,
  DrawerActions,
  DrawerCloseButton,
  DrawerPanelBody,
  ToggleGroup,
  ToggleGroupItem
} from '@patternfly/react-core';
import { css } from '@patternfly/react-styles';

export const TOC_SURFACE = {
  PANEL: 'panel',
  DRAWER: 'drawer'
};

const STORAGE_KEY = 'ws-toc-surface';

const TocPrototypeContext = React.createContext({
  surface: TOC_SURFACE.PANEL,
  setSurface: () => {},
  isDrawerOpen: false,
  setIsDrawerOpen: () => {},
  drawerContent: null,
  setDrawerContent: () => {}
});

const readStoredSurface = () => {
  if (typeof window === 'undefined') {
    return TOC_SURFACE.PANEL;
  }
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === TOC_SURFACE.DRAWER || stored === TOC_SURFACE.PANEL) {
      return stored;
    }
  } catch {
    // ignore
  }
  return TOC_SURFACE.PANEL;
};

export const TocPrototypeProvider = ({ children }) => {
  const [surface, setSurfaceState] = React.useState(readStoredSurface);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [drawerContent, setDrawerContent] = React.useState(null);

  const setSurface = React.useCallback((next) => {
    setSurfaceState(next);
    setIsDrawerOpen(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
  }, []);

  const value = React.useMemo(
    () => ({
      surface,
      setSurface,
      isDrawerOpen,
      setIsDrawerOpen,
      drawerContent,
      setDrawerContent
    }),
    [surface, setSurface, isDrawerOpen, drawerContent]
  );

  return <TocPrototypeContext.Provider value={value}>{children}</TocPrototypeContext.Provider>;
};

export const useTocPrototype = () => React.useContext(TocPrototypeContext);

/** Wraps page content in a pill overlay Drawer for the Drawer surface option. */
export const TocDrawerShell = ({ children }) => {
  const { surface, isDrawerOpen, setIsDrawerOpen, drawerContent } = useTocPrototype();
  const isDrawerSurface = surface === TOC_SURFACE.DRAWER;
  const drawerExpanded = isDrawerSurface && isDrawerOpen;

  const panelContent = (
    <DrawerPanelContent className="ws-toc-drawer-panel" focusTrap={{ enabled: true }}>
      <DrawerHead>
        <span tabIndex={isDrawerOpen ? 0 : -1}>Table of contents</span>
        <DrawerActions>
          <DrawerCloseButton onClick={() => setIsDrawerOpen(false)} />
        </DrawerActions>
      </DrawerHead>
      <DrawerPanelBody className="ws-toc-drawer-panel-body" hasNoPadding>
        {drawerContent}
      </DrawerPanelBody>
    </DrawerPanelContent>
  );

  return (
    <Drawer
      className={css('ws-toc-drawer', drawerExpanded && 'ws-toc-drawer-expanded')}
      isExpanded={drawerExpanded}
      isPill
      position="end"
      onExpand={() => {}}
    >
      <DrawerContent panelContent={panelContent}>
        <DrawerContentBody className="ws-toc-drawer-content-body">{children}</DrawerContentBody>
      </DrawerContent>
    </Drawer>
  );
};

/** Fixed switcher so reviewers can compare Panel vs Drawer without code changes. */
export const TocSurfaceSwitcher = () => {
  const { surface, setSurface } = useTocPrototype();

  return (
    <div className="ws-toc-surface-switcher" role="group" aria-label="TOC prototype surface">
      <span className="ws-toc-surface-switcher-label">TOC surface</span>
      <ToggleGroup aria-label="Choose TOC open surface">
        <ToggleGroupItem
          text="Panel"
          buttonId="ws-toc-surface-panel"
          isSelected={surface === TOC_SURFACE.PANEL}
          onChange={() => setSurface(TOC_SURFACE.PANEL)}
        />
        <ToggleGroupItem
          text="Drawer"
          buttonId="ws-toc-surface-drawer"
          isSelected={surface === TOC_SURFACE.DRAWER}
          onChange={() => setSurface(TOC_SURFACE.DRAWER)}
        />
      </ToggleGroup>
    </div>
  );
};
