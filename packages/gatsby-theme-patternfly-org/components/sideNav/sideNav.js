import React from 'react';
import { Link } from 'gatsby';
import { Nav, NavList, NavExpandable, DropdownToggle, DropdownItem, Dropdown } from '@patternfly/react-core';
import { CaretDownIcon } from '@patternfly/react-icons';
import { slugger, capitalize } from '../../helpers';
import "./sideNav.css";

const renderNavItem = node => (
  <li key={node.path} className="pf-c-nav__item ws-sideNav-item">
    <Link
      to={node.path}
      state={{ context: node.context }} // For keeping context on shared pages
      className="pf-c-nav__link ws-sideNav-link"
      activeClassName="pf-m-current"
      >
      {node.text}
    </Link>
  </li>
);

export const SideNav = ({
  location,
  context,
  allPages,
  sideNavContexts,
  pageSource,
  parityComponent
}) => {
  const [isDropdownOpen, setDropdownOpen] = React.useState(false);
  
  // The `context` property worked hard to get here
  if (context === 'shared') {
    context = pageSource;
  }
  // Default context
  if (context === 'org') {
    context = location.state && location.state.context || 'react';
  }
  const allNavItems = allPages.reduce((accum, node) => {
    const navSection = node.context.navSection || 'page';
    accum[navSection] = accum[navSection] || [];
    accum[navSection].push({
      text: node.context.title,
      path: node.path,
      source: node.context.source,
      context
    });

    return accum;
  }, {});

  const sideNavItems = sideNavContexts[context.replace(/-/g, '_')] || [];

  // TODO: Get a better design and get rid of this thing.
  const contextSwitcher = pageSource === 'org'
    ? { core: 'HTML', react: 'React'}
    : {};
  const dropdownToggle = (
    <DropdownToggle onToggle={() => setDropdownOpen(!isDropdownOpen)}>
      {contextSwitcher[context]}
    </DropdownToggle>
  );
  const dropdownItems = Object.entries(contextSwitcher)
    .filter(([key]) => key !== context) // Doesn't make sense to be able to switch from "core" to "core"
    .map(([key, value]) =>
      <DropdownItem
        key={key}
        component={
          <Link
            className="ws-org-context-switcher-link"
            to={`/documentation/${key}/${parityComponent || 'overview/release-notes'}`}
          >
            {value}
          </Link>
        } />
    );

  return (
    <Nav aria-label="Side Nav" theme="light">
      {/* debug */}
      {/* <p>context: {context}</p>
      <p>pageSource: {pageSource}</p>
      <p>parityComponent: {parityComponent}</p> */}
      {Object.keys(contextSwitcher).includes(context) && (
        <div className="ws-org-context-switcher">
          <label>FRAMEWORK</label>
          <Dropdown
            className="ws-org-context-switcher-dropdown"
            onSelect={() => setDropdownOpen(!isDropdownOpen)}
            toggle={dropdownToggle}
            isOpen={isDropdownOpen}
            dropdownItems={dropdownItems}
          />
        </div>
      )}
      <NavList className="ws-side-nav-list">
        {sideNavItems.map(navItem => {
          const { section } = navItem;
          const isActive = location.pathname.includes(`/${slugger(section)}/`);
          if (section && allNavItems[section]) {
            return (
              <NavExpandable
                key={section}
                title={capitalize(section)}
                isActive={isActive}
                isExpanded={isActive}
                className="ws-side-nav-group"
              >
                {allNavItems[section]
                  .filter(node => node.source === context || node.source === 'shared')
                  .map(renderNavItem)}
              </NavExpandable>
            );
          }

          return renderNavItem(navItem);
        })}
      </NavList>
    </Nav>
  )
}
