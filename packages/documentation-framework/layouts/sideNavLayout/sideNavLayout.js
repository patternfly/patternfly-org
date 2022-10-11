import React, { useEffect, useState } from 'react';
import {
  Button,
  Page,
  PageSidebar,
  Brand,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownGroup,
  Divider,
  Masthead,
  MastheadToggle,
  MastheadMain,
  MastheadContent,
  MastheadBrand,
  PageToggleButton,
  Toolbar,
  ToolbarGroup,
  ToolbarContent,
  ToolbarItem,
  TextInputGroup,
  TextInputGroupUtilities,
  SkipToContent,
  Switch
} from '@patternfly/react-core';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/esm/icons/external-link-alt-icon';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import GithubIcon from '@patternfly/react-icons/dist/esm/icons/github-icon';
import { SideNav, TopNav, GdprBanner } from '../../components';
import staticVersions from '../../versions.json';
import logo from '../logo.svg';

const HeaderTools = ({
  versions,
  hasVersionSwitcher,
  hasSearch,
  hasDarkThemeSwitcher,
  pathPrefix
}) => {
  const initialVersion = staticVersions.Releases.find(release => release.latest);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSearchExpanded, setSearchExpanded] = useState(false);
  const latestVersion = versions.Releases.find(version => version.latest);
  const getDropdownItem = version => (
    <DropdownItem
      key={version.name}
      component={
        <a href={version.latest ? '/v4' : `/${version.name}`}>
          {`Release ${version.name}`}
        </a>
      }
    />
  );
  const searchRef = React.useRef();

  useEffect(() => {
    const handleSearchHotkeys = (event) => {
      const tagName = event.target.tagName.toLowerCase();
      const isContentEditable = event.target.contentEditable === 'true';
      if (
        (event.code === 'Slash' || event.code === 'KeyS') &&
        tagName !== 'input' &&
        tagName !== 'textarea' &&
        !isContentEditable
      ) {
        setSearchExpanded(true);
        setTimeout(() => searchRef.current && searchRef.current.focus(), 0);
      } else if (event.code === 'Escape' && event.target === searchRef.current) {
        setSearchExpanded(false);
      }
    };
    window.addEventListener('keyup', handleSearchHotkeys);
    return () => window.removeEventListener('keyup', handleSearchHotkeys);
  }, []);

  return (
    <Toolbar>
      <ToolbarContent>
        <ToolbarGroup
          alignment={{ default: 'alignRight' }}
          spacer={{ default: 'spacerNone', md: 'spacerMd' }}
          variant="button-group"
        >
          {hasDarkThemeSwitcher && (
            <ToolbarItem>
              <Switch id="ws-theme-switch" label="Dark theme" defaultChecked={false} onChange={() =>
                document.querySelector('html').classList.toggle('pf-theme-dark')} />
            </ToolbarItem>
          )}
          {hasSearch && (
            <ToolbarItem>
              <TextInputGroup>
                <span id="ws-global-search-wrapper" className={isSearchExpanded ? '' : 'ws-hide-search-input'}>
                  <div className="pf-c-text-input-group__main pf-m-icon">
                    <span className="pf-c-text-input-group__text">
                      <span className="pf-c-text-input-group__icon">
                        <SearchIcon />
                      </span>
                      <input type="text" className="pf-c-text-input-group__text-input ds-input" aria-label="Type to filter" placeholder="Search" id="ws-global-search" />
                    </span>
                  </div>
                </span>
                <TextInputGroupUtilities>
                  <Button
                    aria-label={`${isSearchExpanded ? 'Collapse' : 'Expand'} search input`}
                    variant="plain"
                    className="ws-toggle-search"
                    onClick={() => {
                      setSearchExpanded(!isSearchExpanded);
                      if (!isSearchExpanded) {
                        setTimeout(() => searchRef.current && searchRef.current.focus(), 0);
                      }
                    }}
                  >
                    {isSearchExpanded
                      ? <TimesIcon />
                      : <SearchIcon className="global-search-icon" />
                    }
                  </Button>
                </TextInputGroupUtilities>
              </TextInputGroup>
            </ToolbarItem>
          )}
          <ToolbarItem>
            <Button
              component="a"
              variant="link"
              href="//github.com/patternfly"
              target="top"
              aria-label="Link to PatternFly GitHub page"
              className="ws-github-pageheader"
            >
              <GithubIcon />
            </Button>
          </ToolbarItem>
          {hasVersionSwitcher && (
            <ToolbarItem>
              <Dropdown
                className="ws-org-version-switcher"
                onSelect={() => setDropdownOpen(!isDropdownOpen)}
                toggle={(
                  <DropdownToggle
                    className={`ws-org-version-toggle${isDropdownOpen ? '-expanded': ''}`}
                    onToggle={() => setDropdownOpen(!isDropdownOpen)}
                  >
                    Release {initialVersion.name}
                  </DropdownToggle>
                )}
                isOpen={isDropdownOpen}
                dropdownItems={[
                  <DropdownGroup key="latest" label="Latest">
                    {getDropdownItem(latestVersion)}
                  </DropdownGroup>,
                  <DropdownGroup key="Previous" label="Previous releases">
                    {Object.values(versions.Releases)
                      .filter(version => !version.hidden && !version.latest)
                      .slice(0,3)
                      .map(getDropdownItem)}
                  </DropdownGroup>,
                  <Divider key="divider" className="ws-switcher-divider"/>,
                  <DropdownItem
                    key="PatternFly 3"
                    className="ws-patternfly-3"
                    target="_blank"
                    href="https://pf3.patternfly.org/"
                  >
                    PatternFly 3
                    <ExternalLinkAltIcon />
                  </DropdownItem>
                ]}
              />
            </ToolbarItem>
          )}
        </ToolbarGroup>
      </ToolbarContent>
    </Toolbar>
  );
}

// https://github.com/algolia/autocomplete.js#global-options
export function attachDocSearch(algolia, inputSelector, timeout) {
  if (window.docsearch) {
    return window.docsearch({
      inputSelector,
      autocompleteOptions: {
        hint: false,
        appendTo: `${inputSelector}-wrapper`,
      },
      debug: process.env.NODE_ENV !== 'production',
      ...algolia
    });
  }
  else {
    setTimeout(() => attachDocSearch(algolia, inputSelector, timeout), timeout);
  }
}

export const SideNavLayout = ({ children, groupedRoutes, navOpen: navOpenProp }) => {
  const pathPrefix = process.env.pathPrefix;
  const algolia = process.env.algolia;
  const hasGdprBanner = process.env.hasGdprBanner;
  const hasVersionSwitcher = process.env.hasVersionSwitcher;
  const hasDarkThemeSwitcher = process.env.hasDarkThemeSwitcher;
  const sideNavItems = process.env.sideNavItems;
  const topNavItems = process.env.topNavItems;
  const prnum = process.env.prnum;
  const prurl = process.env.prurl;

  const [versions, setVersions] = useState({ ...staticVersions });

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    if (algolia) {
      attachDocSearch(algolia, '#ws-global-search', 1000);
    }
    if (hasVersionSwitcher && window.fetch) {
      fetch('/versions.json').then(res => {
        if (res.ok) {
          res.json().then(json => setVersions(json));
        }
      });
    }
  }, []);

  const SideBar = (
    <PageSidebar
      className="ws-page-sidebar"
      theme="light"
      nav={<SideNav navItems={sideNavItems} groupedRoutes={groupedRoutes} />}
    />
  );

  const Header = (
    <Masthead className="ws-page-header">
      <MastheadToggle>
        <PageToggleButton variant="plain" aria-label="Global navigation">
          <BarsIcon />
        </PageToggleButton>
      </MastheadToggle>
      <MastheadMain>
        <MastheadBrand href={prurl || pathPrefix || '/'}>
          {prnum ? `PR #${prnum}` : <Brand src={logo} alt="Patternfly Logo" />}
        </MastheadBrand>
      </MastheadMain>
      <MastheadContent>
        {(algolia || hasVersionSwitcher) && (
          <HeaderTools
            versions={versions}
            hasSearch={algolia}
            hasVersionSwitcher={hasVersionSwitcher}
            hasDarkThemeSwitcher={hasDarkThemeSwitcher}
            pathPrefix={pathPrefix} />
        )}
      </MastheadContent>
    </Masthead>
  )

  return (
    <React.Fragment>
      <div id="ws-page-banners">
        {hasGdprBanner && <GdprBanner />}
      </div>
      <Page
        id="ws-page"
        mainContainerId="ws-page-main"
        header={Header}
        sidebar={SideBar}
        skipToContent={<SkipToContent href="#ws-page-main">Skip to content</SkipToContent>}
        isManagedSidebar
        defaultManagedSidebarIsOpen={navOpenProp}
      >
        {children}
      </Page>
    </React.Fragment>
  );
}
