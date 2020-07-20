import React from 'react';
import { Link } from 'theme-patternfly-org/components';
import { Nav, NavList, NavItem } from '@patternfly/react-core';
import './topNav.css';

export const TopNav = ({ location, context, navItems }) => {
  return (
    <Nav aria-label="Nav" variant="horizontal">
      <NavList>
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
  