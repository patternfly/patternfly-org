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
      // state={{ context: node.context }} // For keeping context on shared pages
      className="pf-c-nav__link ws-sideNav-link"
      activeClassName="pf-m-current"
      >
      {node.text}
    </Link>
  </li>
);

const combineCoreReactNavs = (arr1, arr2) => (
  [...arr1, ...arr2].reduce((acc, cur) => {
    const hasNavItem = acc.some(navItem => (
        navItem.section === cur.section &&
        navItem.path === cur.path &&
        navItem.text === cur.text
    ));
    if (!hasNavItem) {
        acc.push(cur);
    }
    return acc;
  },[])
);

export const SideNav = ({
  location,
  context,
  allPages,
  sideNavContexts,
  pageSource
}) => {
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

  const sideNavItems = ['react', 'core'].includes(context)
    ? combineCoreReactNavs(sideNavContexts.react, sideNavContexts.core)
    : sideNavContexts[context.replace(/-/g, '_')] || [];

  return (
    <Nav aria-label="Side Nav" theme="light">
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
                  .filter(node => node.source === context || node.source === 'shared' || node.source === 'react' || node.source === 'core')
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
