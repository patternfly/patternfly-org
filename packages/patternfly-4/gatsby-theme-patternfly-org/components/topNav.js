import React from 'react';
import { Link } from 'gatsby';
import { Nav, NavList, NavItem } from '@patternfly/react-core';
import './topNav.css';

const TopNav = ({ location, context, navItems }) => {
  return (
    <Nav aria-label="Nav">
      <NavList variant="horizontal" className="ws-top-nav">
        {navItems.map(({ path, text, contexts }) => (
          <NavItem
            key={path}
            isActive={location.pathname.includes(path) || (contexts || []).includes(context)}
          >
            {path.includes('//')
              ? <a href={path} target="_blank">{text}</a>
              : <Link to={path}>{text}</Link>
            }
          </NavItem>
        ))}
      </NavList>
    </Nav>
  );
}
  

export default TopNav;
