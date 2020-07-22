import React from 'react';
import { Link } from '../link/link';
import { Nav, NavList, NavExpandable } from '@patternfly/react-core';
import { css } from '@patternfly/react-styles';
import { slugger, capitalize } from '../../helpers';
import './sideNav.css';

const renderNavItem = ({ text, href }) => {
  return (
    <li key={href} className="pf-c-nav__item">
      <Link
        to={href}
        getProps={({ isCurrent }) => ({
          className: css(
            'pf-c-nav__link',
            isCurrent && 'pf-m-current'
          )
        })}
      >
        {text}
      </Link>
    </li>
  );
}

export const SideNav = ({
  location,
  sideNavItems, // From patternfly-docs.config.js
  idPages
}) => (
  <Nav aria-label="Side Nav" theme="light">
    <NavList className="ws-side-nav-list">
      {sideNavItems.map(({ section, text, href }) => {
        if (!section) {
          // Single nav item
          return renderNavItem({
            text: text || capitalize(href.replace(/\//g, '').replace(/-/g, ' ')),
            href
          });
        }
        else {
          const isActive = location.pathname.includes(`/${slugger(section)}/`);
          return (
            <NavExpandable
              key={section}
              title={capitalize(section.replace(/-/g, ' '))}
              isActive={isActive}
              isExpanded={isActive}
              className="ws-side-nav-group"
            >
              {idPages && idPages[section] && Object.entries(idPages[section])
                .map(([title, { slug }]) => ({ text: title, href: slug }))
                .map(renderNavItem)}
            </NavExpandable>
          );
        }
      })}
    </NavList>
  </Nav>
);
