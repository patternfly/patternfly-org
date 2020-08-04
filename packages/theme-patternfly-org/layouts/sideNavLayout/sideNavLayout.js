import React, { useEffect, useState, useContext } from 'react';
import {
  Page,
  PageHeader,
  PageSidebar,
  PageHeaderTools,
  PageHeaderToolsItem,
  Form,
  TextInput,
  Brand,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownGroup,
  Divider
} from '@patternfly/react-core';
import { SearchIcon, ExternalLinkAltIcon } from '@patternfly/react-icons';
import { useLocation } from '@reach/router';
import { SideNav, TopNav, Footer, GdprBanner } from '../../components';
import ConfigContext from '../../helpers/configContext';
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
  const latestVersion = versions.Releases.find(version => version.latest);
  const getDropdownItem = version => (
    <DropdownItem
      key={version.name}
      component={
        <a href={version.latest ? pathPrefix : `/${version.name}`}>
          {`Release ${version.name}`}
        </a>
      }
    />
  );

  return (
    <PageHeaderTools>
      {hasSearch && (
        <PageHeaderToolsItem>
          {/* We can afford to use style tags because this is only on the site ONCE */}
          <Form
            onSubmit={event => {
              event.preventDefault();
              return false;
            }}
            className="pf-site-search"
          >
            <TextInput
              type="text"
              id="global-search-input"
              name="global-search-input"
              placeholder="Search"
            />
            <SearchIcon className="global-search-icon" />
          </Form>
        </PageHeaderToolsItem>
      )}
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

export const SideNavLayout = ({
  children,
}) => {
  const {
    hasGdprBanner,
    hasFooter,
    hasSearch,
    hasVersionSwitcher,
    sideNavItems,
    topNavItems,
    prnum,
    prurl,
    pathPrefix,
    // BONUS prop passed from app.js
    groupedRoutes
  } = useContext(ConfigContext);
  const location = useLocation();
  const [versions, setVersions] = useState({ ...staticVersions });
  if (typeof window !== 'undefined' && window.ga) {
    window.ga('set', 'page', location.pathname);
    window.ga('send', 'pageview');
  }

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    if (hasSearch) {
      // Give docsearch script 3s to load
      setTimeout(() => {
        if (typeof window.docsearch === 'function') {
          window.docsearch({
            apiKey: '06941733239da4f8617d272cf2ed4d5c',
            indexName: 'patternfly',
            inputSelector: '#global-search-input',
            debug: false // Set debug to true if you want to inspect the dropdown
          });
        }
      }, 3000);
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
      nav={<SideNav location={location} navItems={sideNavItems} groupedRoutes={groupedRoutes} />}
    />
  );

  const Header = (
    <PageHeader
      className="ws-page-header"
      headerTools={(hasSearch || hasVersionSwitcher) && <HeaderTools
        versions={versions}
        hasSearch={hasSearch}
        hasVersionSwitcher={hasVersionSwitcher}
        pathPrefix={pathPrefix} />}
      logo={prnum ? `PR #${prnum}` : <Brand src={logo} alt="Patternfly Logo" />}
      logoProps={{ href: prurl || pathPrefix || '/' }}
      showNavToggle
      topNav={<TopNav location={location} navItems={topNavItems} />}
    />
  );

  // Wrap in a div to force scrolling the same content
  // TODO: SEO
  return (
    <div className="ws-page-layout">
      <div id="ws-page-banners">
        {hasGdprBanner && <GdprBanner />}
      </div>
      <Page className="ws-page" header={Header} sidebar={SideBar} isManagedSidebar>
        {children}
      </Page>
      {hasFooter && <Footer />}
    </div>
  );
}
