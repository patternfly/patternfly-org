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
  SkipToContent,
  Switch,
  SearchInput
} from '@patternfly/react-core';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/esm/icons/external-link-alt-icon';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import GithubIcon from '@patternfly/react-icons/dist/esm/icons/github-icon';
import { SideNav, TopNav, GdprBanner } from '../../components';
import staticVersions from '../../versions.json';
import logoMd from '../logo__pf--reverse-on-md.svg';
import logo from '../logo__pf--reverse--base.svg';
import logoBase from '../logo__pf--reverse--base.png';

const HeaderTools = ({
  versions,
  hasVersionSwitcher,
  algolia,
  hasDarkThemeSwitcher,
  topNavItems,
  pathPrefix
}) => {
  const initialVersion = staticVersions.Releases.find(release => release.latest);
  const latestVersion = versions.Releases.find(version => version.latest);
  const hasSearch = algolia;
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  const [isSearchExpanded, setIsSearchExpanded] = React.useState(false);

  const getDropdownItem = (version, isLatest = false) => (
    <DropdownItem
      key={version.name}
      component={
        <a href={isLatest ? '/' : `/${version.name}`}>
          {`Release ${version.name}`}
        </a>
      }
    />
  );

  const onChange = (value) => {
    setSearchValue(value);
  };

  const onToggleExpand = (isSearchExpanded) => {
    setIsSearchExpanded(!isSearchExpanded);
  };

  useEffect(() => {
    // reattach algolia to input each time search is expanded
    if (hasSearch && isSearchExpanded) {
      attachDocSearch(algolia, '.ws-global-search .pf-c-text-input-group__text-input', 1000);
    }
  }, [isSearchExpanded])

  return (
    <Toolbar isFullHeight>
      <ToolbarContent>
        {topNavItems.length > 0 && (
          <ToolbarItem className="pf-m-overflow-container">
            <TopNav navItems={topNavItems} />
          </ToolbarItem>
        )}
        <ToolbarGroup
          alignment={{ default: 'alignRight' }}
          spaceItems={{ default: 'spacerNone', md: 'spacerMd' }}
        >
          {hasDarkThemeSwitcher && (
            <ToolbarItem>
              <Switch id="ws-theme-switch" label="Dark theme" defaultChecked={false} onChange={() =>
                document.querySelector('html').classList.toggle('pf-theme-dark')} />
            </ToolbarItem>
          )}
          {hasSearch && (
            <ToolbarItem>
              <SearchInput
                className="ws-global-search"
                placeholder="Search"
                value={searchValue}
                onChange={onChange}
                onClear={() => onChange('')}
                expandableInput={{ isExpanded: isSearchExpanded, onToggleExpand, toggleAriaLabel: 'Expandable search input toggle' }}
              />
            </ToolbarItem>
          )}
          <ToolbarItem>
            <Button
              component="a"
              variant="plain"
              href="//github.com/patternfly"
              target="top"
              aria-label="PatternFly GitHub page"
            >
              <GithubIcon />
            </Button>
          </ToolbarItem>
          {hasVersionSwitcher && (
            <ToolbarItem>
              <Dropdown
                isFullHeight
                onSelect={() => setDropdownOpen(!isDropdownOpen)}
                isOpen={isDropdownOpen}
                toggle={(
                  <DropdownToggle
                    onToggle={() => setDropdownOpen(!isDropdownOpen)}
                  >
                    Release {initialVersion.name}
                  </DropdownToggle>
                )}
                dropdownItems={[
                  <DropdownGroup key="latest" label="Latest">
                    {getDropdownItem(latestVersion, true)}
                  </DropdownGroup>,
                  <DropdownGroup key="Previous" label="Previous releases">
                    {Object.values(versions.Releases)
                      .filter(version => !version.hidden && !version.latest)
                      .slice(0,3)
                      .map(version => getDropdownItem(version))}
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
        appendTo: `.ws-global-search .pf-c-text-input-group`,
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
    <Masthead className="ws-masthead">
      <MastheadToggle>
        <PageToggleButton variant="plain" aria-label="Global navigation">
          <BarsIcon />
        </PageToggleButton>
      </MastheadToggle>
      <MastheadMain>
        <MastheadBrand href={prurl || pathPrefix || '/'}>
          {prnum ? `PR #${prnum}` : (
            <Brand src={logoBase} alt="PatternFly logo" widths={{ default: '180px', '2xl': '220px' }}>
              <source media="(min-width: 768px)" srcSet={logoMd} />
              <source srcSet={logo} />
            </Brand>
          )}
        </MastheadBrand>
      </MastheadMain>
      <MastheadContent>
        {(algolia || hasVersionSwitcher) && (
          <HeaderTools
            versions={versions}
            algolia={algolia}
            hasVersionSwitcher={hasVersionSwitcher}
            hasDarkThemeSwitcher={hasDarkThemeSwitcher}
            pathPrefix={pathPrefix}
            topNavItems={topNavItems}
          />
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
