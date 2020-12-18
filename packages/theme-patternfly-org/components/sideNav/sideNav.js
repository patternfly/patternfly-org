import React from 'react';
import { Link } from '../link/link';
import { Nav, NavList, NavExpandable, capitalize } from '@patternfly/react-core';
import { css } from '@patternfly/react-styles';
import { Location } from '@reach/router';
import { slugger } from '../../helpers';
import './sideNav.css';

const NavItem = ({ text, href }) => (
  <li key={href + text} className="pf-c-nav__item">
    <Link
      to={href}
      getProps={({ isCurrent, href, location }) => {
        const { pathname } = location;
        return {
          className: css(
            'pf-c-nav__link',
            (isCurrent || pathname.startsWith(href + '/')) && 'pf-m-current'
          )
        }}
      }
    >
      {text}
    </Link>
  </li>
);

export const SideNav = ({ groupedRoutes = {}, navItems = [] }) => {
  React.useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const overflowElement = document.getElementById('page-sidebar');
    if (!overflowElement) {
      return;
    }
    const activeElements = overflowElement.getElementsByClassName('pf-m-current');
    if (activeElements.length > 0) {
      const lastElement = activeElements[activeElements.length - 1];
      lastElement.scrollIntoView({ block: 'center' });
    }
  }, []);
  
  return (
    <Nav aria-label="Side Nav" theme="light">
      <NavList className="ws-side-nav-list">
        {navItems.map(({ section, text, href }) => section
          ? (
            <Location key={section}>
              {({ location }) => {
                const isActive = location.pathname.startsWith(`${process.env.pathPrefix}/${slugger(section)}`);
                return (
                  <NavExpandable
                    title={capitalize(section.replace(/-/g, ' '))}
                    isActive={isActive}
                    isExpanded={isActive}
                    className="ws-side-nav-group"
                  >
                    {Object.entries(groupedRoutes[section] || {})
                      .filter(([, { hideNavItem }]) => !Boolean(hideNavItem))
                      .map(([id, { slug }]) => ({ text: id, href: slug }))
                      .sort(({ text: text1 }, { text: text2 }) => text1.localeCompare(text2))
                      .map(NavItem)
                    }
                  </NavExpandable>
                );
              }}
            </Location>
          )
          : NavItem({
              text: text || capitalize(href.replace(/\//g, '').replace(/-/g, ' ')),
              href: href
            })
        )}
      </NavList>
    </Nav>
  );
}
