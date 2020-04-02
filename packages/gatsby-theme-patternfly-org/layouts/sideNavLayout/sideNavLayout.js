/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */
import React, { useEffect, useState, useContext } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

import { Page, PageHeader, PageSidebar, Toolbar, ToolbarItem, Form, TextInput, Brand, Dropdown, DropdownToggle, DropdownItem, DropdownGroup } from '@patternfly/react-core';
import { SearchIcon, CaretDownIcon } from '@patternfly/react-icons';
import { SideNav, TopNav,  Banner, Footer, GdprBanner } from '../../components';
import staticVersions from 'gatsby-theme-patternfly-org/versions.json';
import logo from '../logo.svg';
import './sideNavLayout.css';

// ParityComponent: aboutmodal <=> aboutmodalbox
export const SideNavLayout = ({
  children,
  location,
  context,
  parityComponent,
  hideSideNav = false,
  showBanner = false,
  showGdprBanner = false,
  pageTitle = ''
}) => {
  // Put queries for Top and Side navs here for performance
  // We should consider passing down the `sitePlugin` data in pageContext
  // rather than fetching the GraphQL here
  const data = useStaticQuery(graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    prInfo: envVars(name: { eq: "PR_INFO" }) {
      num
      url
    }
    allSitePage(filter: { context: { navSection: { ne: null } } },
                sort: { fields: context___title }) {
      nodes {
        path
        context {
          title
          navSection
          source
        }
      }
    }
    sitePlugin(name: { eq: "gatsby-theme-patternfly-org" }) {
      pluginOptions {
        context
        topNavItems {
          text
          path
          contexts
        }
        sideNav {
          core {
            section
            text
            path
          }
          react {
            section
            text
            path
          }
          get_started {
            section
            text
            path
          }
          design_guidelines {
            section
            text
            path
          }
          contribute {
            section
            text
            path
          }
        }
      }
    }
  }
  `);
  const { title } = data.site.siteMetadata;
  const { num, url } = data.prInfo;
  const { topNavItems, sideNav, context: pageSource } = data.sitePlugin.pluginOptions;
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [versions, setVersions] = useState({...staticVersions});
  const initialVersion = staticVersions.Releases.find(release => release.latest);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    if (window.docsearch) {
      window.docsearch({
        apiKey: '06941733239da4f8617d272cf2ed4d5c',
        indexName: 'patternfly',
        inputSelector: '#global-search-input',
        debug: false // Set debug to true if you want to inspect the dropdown
      });
    }
    if (window.fetch && pageSource === 'org') {
      fetch('/versions.json')
        .then(data => data.json())
        .then(json => setVersions(json))
        .catch(); // No big deal for core/react
    }
  }, []);

  const SideBar = hideSideNav
    ? undefined
    : <PageSidebar
        nav={<SideNav
          location={location}
          context={context}
          pageSource={pageSource}
          allPages={data.allSitePage.nodes}
          sideNavContexts={sideNav}
          parityComponent={parityComponent} />}
        className="ws-page-sidebar" />;

  const latestVersion = versions.Releases.find(version => version.latest);
  const dropdownToggle = (
    <DropdownToggle
      className={`ws-org-version-toggle${isDropdownOpen ? '-expanded': ''}`}
      onToggle={() => setDropdownOpen(!isDropdownOpen)}
      iconComponent={CaretDownIcon}
      >
      Release {initialVersion.name}
    </DropdownToggle>
  );
  const getDropdownItem = version => (
    <DropdownItem
      key={version.name}
      href={location.pathname.replace(
        location.pathname.split('/')[1],
        version.latest
          ? 'v4'
          : version.name
        )}
      component={
        <a className="pf-c-nav__link">
          Release {version.name}
        </a>
      } />
  );
  const dropdownItems = [
    <DropdownGroup key="latest" label="Latest">
      {getDropdownItem(latestVersion)}
    </DropdownGroup>,
    <DropdownGroup key="Previous" label="Previous releases">
      {Object.values(versions.Releases)
        .filter(version => !version.hidden && !version.latest)
        .map(getDropdownItem)}
    </DropdownGroup>
  ];

  const PageToolbar = pageSource === 'org'
    ? (
      <Toolbar>
        <ToolbarItem>
          <Dropdown
            className="ws-org-version-switcher"
            onSelect={() => setDropdownOpen(!isDropdownOpen)}
            toggle={dropdownToggle}
            isOpen={isDropdownOpen}
            dropdownItems={dropdownItems}
          />
        </ToolbarItem>
        <ToolbarItem>
          {/* We can afford to use style tags because this is only on the site ONCE */}
          <Form
            onSubmit={event => {
              event.preventDefault();
              return false;
            }}
            style={{
              position: 'relative',
            }}
            className="pf-site-search"
          >
            <TextInput
              type="text"
              id="global-search-input"
              name="global-search-input"
              placeholder="Search"
              style={{
                color: '#fff',
                backgroundColor: 'var(--pf-global--BackgroundColor--dark-100)',
                border: 0,
                paddingLeft: '26px'
              }}
            />
            <SearchIcon
              style={{
                position: 'absolute',
                top: '10px',
                left: '4px'
              }} />
          </Form>
        </ToolbarItem>
      </Toolbar>
    )
    : undefined;

  let headerTitle = title;
  if (pageSource === 'org') {
    headerTitle = <Brand src={logo} alt="Patternfly Logo" />;
  } else if (num) {
    headerTitle = `PR #${num}`;
  }
  
  const Header = (
    <PageHeader
      className="ws-page-header"
      toolbar={PageToolbar}
      logo={headerTitle}
      logoProps={{
        href: url || '/'
      }}
      showNavToggle
      topNav={<TopNav
        location={location}
        context={context}
        navItems={topNavItems} />}
    />
  );

  // Wrap in a div to force scrolling the same content
  // TODO: SEO
  return (
    <div className="ws-side-nav-layout">
      <Helmet>
        <title>{title}{pageTitle && ` - ${pageTitle}`}</title>
      </Helmet>
      <div id="ws-page-banners">
        {showBanner && <Banner />}
        {showGdprBanner && <GdprBanner />}
      </div>
      <Page isManagedSidebar header={Header} sidebar={SideBar} className="ws-page">
        {children}
      </Page>
      <Footer />
    </div>
  );
}
