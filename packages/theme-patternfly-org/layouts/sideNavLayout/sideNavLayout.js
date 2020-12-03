import React, { useEffect, useState } from 'react';
import {
  Button,
  Page,
  PageHeader,
  PageSidebar,
  PageHeaderTools,
  PageHeaderToolsItem,
  TextInput,
  Brand,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownGroup,
  Divider,
  Text,
  TextVariants,
  SkipToContent
} from '@patternfly/react-core';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/esm/icons/external-link-alt-icon';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';
import GithubIcon from '@patternfly/react-icons/dist/esm/icons/github-icon';
import { SideNav, TopNav, GdprBanner } from '../../components';
import staticVersions from '../../versions.json';
import logo from '../logo.svg';
import './sideNavLayout.css';

const HeaderTools = ({
  versions,
  hasVersionSwitcher,
  hasSearch,
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
      if (
        (event.code === 'Slash' || event.code === 'KeyS') &&
        tagName !== 'input' &&
        tagName !== 'textarea'
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
    <PageHeaderTools>
      {hasSearch && (
        <PageHeaderToolsItem id="ws-global-search-wrapper" className={isSearchExpanded ? '' : 'ws-hide-search-input'}>
          <TextInput id="ws-global-search" ref={searchRef} placeholder="Search" />
          {isSearchExpanded && <SearchIcon className="global-search-icon" />}
        </PageHeaderToolsItem>
      )}
      {hasSearch && (
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
      )}
      <PageHeaderToolsItem>
        <Button
          component="a"
          variant="link"
          href="//github.com/patternfly"
          target="top"
          aria-label="Link to PatternFly GitHub page"
          className="ws-github-pageheader pf-u-mr-sm"
        >
          <GithubIcon />
        </Button>
      </PageHeaderToolsItem>
      {hasVersionSwitcher && (
        <PageHeaderToolsItem>
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
                href="https://www.patternfly.org/v3"
              >
                PatternFly 3
                <ExternalLinkAltIcon />
              </DropdownItem>
            ]}
          />
        </PageHeaderToolsItem>
      )}
    </PageHeaderTools>
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
  const sideNavItems = process.env.sideNavItems;
  const topNavItems = process.env.topNavItems;
  const prnum = process.env.prnum;
  const prurl = process.env.prurl;

  const [versions, setVersions] = useState({ ...staticVersions });
  const [isNavOpen, setNavOpen] = useState(navOpenProp);

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

  useEffect(() => setNavOpen(navOpenProp), [navOpenProp])

  const SideBar = (
    <PageSidebar
      className="ws-page-sidebar"
      theme="light"
      nav={<SideNav navItems={sideNavItems} groupedRoutes={groupedRoutes} />}
      isNavOpen={isNavOpen}
    />
  );

  const Header = (
    <PageHeader
      className="ws-page-header"
      headerTools={(algolia || hasVersionSwitcher) && <HeaderTools
        versions={versions}
        hasSearch={algolia}
        hasVersionSwitcher={hasVersionSwitcher}
        pathPrefix={pathPrefix} />}
      logo={prnum ? `PR #${prnum}` : <Brand src={logo} alt="Patternfly Logo" />}
      logoProps={{ href: prurl || pathPrefix || '/' }}
      showNavToggle
      isNavOpen={isNavOpen}
      onNavToggle={() => setNavOpen(!isNavOpen)}
      topNav={topNavItems.length > 0 && <TopNav navItems={topNavItems} />}
    />
  );

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
      >
        {children}
      </Page>
    </React.Fragment>
  );
}
