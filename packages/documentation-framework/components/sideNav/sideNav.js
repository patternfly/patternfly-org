import React from 'react';
import { Link } from '../link/link';
import { Nav, NavList, NavExpandable, PageContextConsumer, capitalize } from '@patternfly/react-core';
import { css } from '@patternfly/react-styles';
import { Location } from '@reach/router';
import { makeSlug } from '../../helpers';
import globalBreakpointXl from "@patternfly/react-tokens/dist/esm/global_breakpoint_xl";
import { trackEvent } from '../../helpers';

const getIsActive = (location, section, subsection = null) => {
  const slug = makeSlug(null, section, null, null, subsection);
  return location.pathname.startsWith(`${process.env.pathPrefix}${slug}`);
}

const NavItem = ({ text, href }) => {
  const isMobileView = window.innerWidth < Number.parseInt(globalBreakpointXl.value, 10);
  return (
    <PageContextConsumer key={href + text}>
      {({onNavToggle, isNavOpen }) => (
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
              tabIndex={isNavOpen ? undefined : -1}
            >
              {text}
            </Link>
          </li>
      )}
    </PageContextConsumer>
  )
};

const ExpandableNav = ({groupedRoutes, location, section, subsection = null}) => {
  const isActive = getIsActive(location, section, subsection);
  const isSubsection = subsection;
  const routes = isSubsection
    ? groupedRoutes[section][subsection]
    : groupedRoutes[section];
  const currentSection = isSubsection ? subsection : section;
  const analyticsName = isSubsection ? `${section}/${subsection}` : section;

  return (
    <NavExpandable
      title={capitalize(currentSection.replace(/-/g, ' '))}
      key={capitalize(currentSection.replace(/-/g, ' '))}
      isActive={isActive}
      isExpanded={isActive}
      className="ws-side-nav-group"
      onClick={(event) => {
        // Don't bubble click event up, avoids subsection triggering duplicate analtics
        event.stopPropagation();
        // Don't trigger for bubbled events from NavItems
        if (!event.target.href) {
          const isExpanded = event.currentTarget.classList.contains('pf-m-expanded');
          // 1 === expand section, 0 === collapse section
          trackEvent('sidenav_section_click', 'click_event', analyticsName, isExpanded ? 0 : 1);
        }
      }}
    >
      {Object.entries(routes || {})
        .filter(([id, { hideNavItem }]) => !Boolean(hideNavItem) && (id !== 'isSubsection'))
        .map(([id, { slug, isSubsection = false }]) => ({ text: id, href: slug, isSubsection }))
        .sort(({ text: text1 }, { text: text2 }) => {
          // Sort 'View all components' to top of sidenav component section
          if (text1 === 'View all components') {
            return -1;
          } else if (text2 === 'View all components') {
            return 1;
          }
          return text1.localeCompare(text2);
        })
        .map(navObj => navObj.isSubsection
          ? ExpandableNav({groupedRoutes, location, section, subsection: navObj.text})
          : NavItem(navObj)
        )
      }
    </NavExpandable>
  );
}

export const SideNav = ({ groupedRoutes = {}, navItems = [] }) => {
  console.log({groupedRoutes})
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
              {({ location }) => ExpandableNav({groupedRoutes, location, section})}
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
