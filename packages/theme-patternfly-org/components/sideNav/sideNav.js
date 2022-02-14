import React from 'react';
import { Link } from '../link/link';
import { Nav, NavList, NavExpandable, PageContextConsumer, capitalize } from '@patternfly/react-core';
import { css } from '@patternfly/react-styles';
import { Location } from '@reach/router';
import { slugger } from '../../helpers';
import './sideNav.css';
import globalBreakpointXl from "@patternfly/react-tokens/dist/esm/global_breakpoint_xl";
import { trackEvent } from '../../helpers';

const NavItem = ({ text, href }) => {
  const isMobileView = window.innerWidth < Number.parseInt(globalBreakpointXl.value, 10);
  return (
    <PageContextConsumer key={href + text}>
      {({onNavToggle}) => (
          <li key={href + text} className="pf-c-nav__item" onClick={() => isMobileView && onNavToggle()}>
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
      )}
    </PageContextConsumer>
  )
};

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
                    onClick={(event) => {
                      // Don't trigger for bubbled events from NavItems
                      if (!event.target.href) {
                        const isExpanded = event.currentTarget.classList.contains('pf-m-expanded');
                        // 1 === expand section, 0 === collapse section
                        trackEvent('sidenav_section_click', 'click_event', section, isExpanded ? 0 : 1);
                      }
                    }}
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
