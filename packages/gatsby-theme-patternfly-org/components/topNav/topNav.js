import React from 'react';
import { Link } from 'gatsby';
import { Nav, NavList, NavItem } from '@patternfly/react-core';
import './topNav.css';

export const TopNav = ({ location, context, navItems }) => {
  return (
    <Nav aria-label="Nav" className="pf-m-scrollable pf-m-horizontal">
      <NavList variant="horizontal">
        {navItems.map(({ path, text, contexts }) => (
          <NavItem
            key={path}
            isActive={location.pathname.includes(path) || (contexts || []).includes(context)}
          >
            <Link className="ws-top-nav-link" to={path}>{text}</Link>
          </NavItem>
        ))}
      </NavList>
    </Nav>
  );
}
  