import React from 'react';
import { Link } from '@breakaway/documentation-framework/components';
import { Nav, NavList, NavItem } from '@patternfly/react-core';
import { Location } from '@reach/router';

export const TopNav = ({ navItems }) => (
  <Location>
    {({ location }) => 
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
    }
  </Location>
);
  