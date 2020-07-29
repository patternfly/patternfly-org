import React from 'react';
import { Link } from 'theme-patternfly-org/components';
import { Nav, NavList, NavItem } from '@patternfly/react-core';
import './topNav.css';

export const TopNav = ({ location, navItems }) => {
  if (navItems.length === 0) {
    return null;
  }

  return (
    <Nav aria-label="Nav" variant="horizontal">
      <NavList>
        {navItems.map(({ path, text }) => (
          <NavItem
            key={path}
            isActive={location.pathname.includes(path)}
          >
            <Link className="ws-top-nav-link" to={path}>{text}</Link>
          </NavItem>
        ))}
      </NavList>
    </Nav>
  );
}
  