import React, { useEffect, useState, createContext } from 'react';
import {
  Button,
  Page,
  PageSidebar,
  PageSidebarBody,
  Brand,
  Dropdown,
  DropdownItem,
  DropdownGroup,
  DropdownList,
  Divider,
  Icon,
  Masthead,
  MastheadToggle,
  MastheadMain,
  MastheadContent,
  MastheadBrand,
  MenuToggle,
  PageToggleButton,
  Toolbar,
  ToolbarGroup,
  ToolbarContent,
  ToolbarItem,
  SkipToContent,
  Switch,
  SearchInput,
  ToggleGroup,
  ToggleGroupItem
} from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import GithubIcon from '@patternfly/react-icons/dist/esm/icons/github-icon';
import MoonIcon from '@patternfly/react-icons/dist/esm/icons/moon-icon';
import SunIcon from '@patternfly/react-icons/dist/esm/icons/sun-icon';
import { SideNav, TopNav, GdprBanner } from '../../components';
import staticVersions from '../../versions.json';
import v5Logo from '../PF-HorizontalLogo-Reverse.svg';

export const RtlContext = createContext(false);

const HeaderTools = ({
  versions,
  hasVersionSwitcher,
  algolia,
  hasDarkThemeSwitcher,
  hasRTLSwitcher,
  topNavItems,
  isRTL,
  setIsRTL
}) => {
  const initialVersion = staticVersions.Releases.find(release => release.latest);
  const latestVersion = versions.Releases.find(version => version.latest);
  const previousReleases = Object.values(versions.Releases).filter(version => !version.hidden && !version.latest);
  const hasSearch = algolia;
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  const [isSearchExpanded, setIsSearchExpanded] = React.useState(false);
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const getDropdownItem = (version, isLatest = false) => (
    <DropdownItem itemId={version.name} key={version.name} to={isLatest ? '/' : `/${version.name}`}>
      {`Release ${version.name}`}
    </DropdownItem>
  );

  const onChange = (_evt, value) => {
    setSearchValue(value);
  };

  const onToggleExpand = (_evt, isSearchExpanded) => {
    setIsSearchExpanded(!isSearchExpanded);
  };

  const toggleDarkTheme = (_evt, selected) => {
    const darkThemeToggleClicked = !selected === isDarkTheme
    document.querySelector('html').classList.toggle('pf-v5-theme-dark', darkThemeToggleClicked);
    setIsDarkTheme(darkThemeToggleClicked);
  };

  useEffect(() => {
    // reattach algolia to input each time search is expanded
    if (hasSearch && isSearchExpanded) {
      attachDocSearch(algolia, '.ws-global-search .pf-v5-c-text-input-group__text-input', 1000);
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
          align={{ default: 'alignRight' }}
          spaceItems={{ default: 'spacerNone', md: 'spacerMd' }}
        >
          {hasDarkThemeSwitcher && (
            <ToolbarItem>
                <ToggleGroup aria-label="Dark theme toggle group">
                  <ToggleGroupItem aria-label="light theme toggle" icon={<Icon size="md"><SunIcon /></Icon>} isSelected={!isDarkTheme} onChange={toggleDarkTheme} />
                  <ToggleGroupItem aria-label="dark theme toggle" icon={<Icon size="md"><MoonIcon /></Icon>} isSelected={isDarkTheme} onChange={toggleDarkTheme} />
                </ToggleGroup>
            </ToolbarItem>
          )}
          {hasRTLSwitcher && (
            <ToolbarItem>
              <Switch id="ws-rtl-switch" label={'RTL'} defaultChecked={isRTL} onChange={() => setIsRTL(isRTL => !isRTL)} />
            </ToolbarItem>
          )}
          {hasSearch && (
            <ToolbarItem>
              <SearchInput
                className="ws-global-search"
                placeholder="Search"
                value={searchValue}
                onChange={onChange}
                onClear={(_evt) => onChange(_evt, '')}
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
                onSelect={() => setDropdownOpen(!isDropdownOpen)}
                onOpenChange={(isOpen) => setDropdownOpen(isOpen)}
                isOpen={isDropdownOpen}
                toggle={(toggleRef) => (
                  <MenuToggle
                    isFullHeight
                    ref={toggleRef}
                    onClick={() => setDropdownOpen(!isDropdownOpen)}
                    isExpanded={isDropdownOpen}
                  >
                    Release {initialVersion.name}
                  </MenuToggle>
                )}
              >
                <DropdownGroup key="Latest" label="Latest">
                  <DropdownList>
                    {getDropdownItem(latestVersion, true)}
                  </DropdownList>
                </DropdownGroup>
                {previousReleases.length > 0 && (
                  <DropdownGroup key="Previous releases" label="Previous releases">
                    <DropdownList>
                      {previousReleases
                        .slice(0,3)
                        .map(version => getDropdownItem(version))}
                    </DropdownList>
                  </DropdownGroup>
                )}
                <Divider key="divider" className="ws-switcher-divider"/>
                <DropdownGroup key="Previous versions" label="Previous versions">
                  <DropdownList>
                    <DropdownItem
                      key="PatternFly 4"
                      className="ws-patternfly-3"
                      isExternalLink
                      to="http://v4-archive.patternfly.org/v4/"
                      itemId="patternfly-4"
                    >
                      PatternFly 4
                    </DropdownItem>
                    <DropdownItem
                      key="PatternFly 3"
                      className="ws-patternfly-3"
                      isExternalLink
                      to="https://pf3.patternfly.org/"
                      itemId="patternfly-3"
                    >
                      PatternFly 3
                    </DropdownItem>
                  </DropdownList>
                </DropdownGroup>
              </Dropdown>
            </ToolbarItem>
          )}
        </ToolbarGroup></ToolbarContent>
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
        appendTo: `.ws-global-search .pf-v5-c-text-input-group`,
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
  const algolia = process.env.algolia;
  const hasGdprBanner = process.env.hasGdprBanner;
  const hasVersionSwitcher = process.env.hasVersionSwitcher;
  const hasDarkThemeSwitcher = process.env.hasDarkThemeSwitcher;
  const hasRTLSwitcher = process.env.hasRTLSwitcher;
  const sideNavItems = process.env.sideNavItems;
  const topNavItems = process.env.topNavItems;
  const prnum = process.env.prnum;
  const prurl = process.env.prurl;

  const [versions, setVersions] = useState({ ...staticVersions });
  const [isRTL, setIsRTL] = useState(false);

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
    >
      <PageSidebarBody>
        <SideNav navItems={sideNavItems} groupedRoutes={groupedRoutes} />
      </PageSidebarBody>
    </PageSidebar>
  );

  const Header = (
    <Masthead className="ws-masthead">
      <MastheadToggle>
        <PageToggleButton variant="plain" aria-label="Global navigation">
          <BarsIcon />
        </PageToggleButton>
      </MastheadToggle>
      <MastheadMain>
        <MastheadBrand href={prurl || '/'}>
          {prnum ? `PR #${prnum}` : (
            <Brand src={v5Logo} alt="PatternFly" heights={{ default: '36px' }} />
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
            hasRTLSwitcher={hasRTLSwitcher}
            topNavItems={topNavItems}
            isRTL={isRTL}
            setIsRTL={setIsRTL}
          />
        )}
      </MastheadContent>
    </Masthead>
  )

  return (
    <React.Fragment>
      <RtlContext.Provider value={ isRTL }>
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
        <div id="ws-page-banners">
          {hasGdprBanner && <GdprBanner />}
        </div>
      </RtlContext.Provider>
    </React.Fragment>
  );
}
