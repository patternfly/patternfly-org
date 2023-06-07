import React from 'react';
import { Link } from '../link/link';
import { Label, Nav, NavList, NavExpandable, PageContextConsumer, capitalize, Flex, FlexItem } from '@patternfly/react-core';
import { css } from '@patternfly/react-styles';
import { Location } from '@reach/router';
import { makeSlug } from '../../helpers';
import globalBreakpointXl from "@patternfly/react-tokens/dist/esm/global_breakpoint_xl";
import { trackEvent } from '../../helpers';

const getIsActive = (location, section, subsection = null) => {
  const slug = makeSlug(null, section, null, null, subsection);
  return location.pathname.startsWith(`${process.env.pathPrefix}${slug}`);
}

const defaultValue = 50;

const NavItem = ({ text, href, isDeprecated, isBeta, isDemo }) => {
  const isMobileView = window.innerWidth < Number.parseInt(globalBreakpointXl.value, 10);
  return (
    <PageContextConsumer key={href + text}>
      {({onNavToggle, isNavOpen }) => (
          <li key={href + text} className="pf-v5-c-nav__item" onClick={() => isMobileView && onNavToggle && onNavToggle()}>
            <Link
              to={href}
              getProps={({ isCurrent, href, location }) => {
                const { pathname } = location;
                return {
                  className: css(
                    'pf-v5-c-nav__link',
                    (isCurrent || pathname.startsWith(href + '/')) && 'pf-m-current'
                  )
                }}
              }
              tabIndex={isNavOpen ? undefined : -1}
            >
              <Flex spaceItems={{ default: 'spaceItemsSm'}}>
                <FlexItem>{text}</FlexItem>
                {(isBeta || isDemo || isDeprecated) && (
                  <FlexItem>
                    {isBeta && (<Label color="blue" isCompact>Beta</Label>)}
                    {!isBeta && isDeprecated && (<Label color="grey" isCompact>Deprecated</Label>)}
                    {!isBeta && !isDeprecated && isDemo && (<Label color="purple" isCompact>Demo</Label>)}
                  </FlexItem>
                )}
              </Flex>


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
        .filter(([id, navObj]) => !Boolean(navObj.hideNavItem) && (Object.entries(navObj).length > 0))
        .map(([id, { slug, isSubsection = false, sortValue = defaultValue, subsectionSortValue = defaultValue, sources }]) => ({ text: id, href: slug, isSubsection, sortValue: (isSubsection ? subsectionSortValue : sortValue), sources }))
        .sort(({text: text1, sortValue: sortValue1}, {text: text2, sortValue: sortValue2}) => {
          if (sortValue1 === sortValue2) {
            return text1.localeCompare(text2);
          }
          return sortValue1 > sortValue2 ? 1 : -1;
        })
        .map(navObj => navObj.isSubsection
            ? ExpandableNav({groupedRoutes, location, section, subsection: navObj.text})
            : NavItem({
              ...navObj,
              isDeprecated: navObj.href?.includes('components') && navObj.sources.some(source => (
                  source.source === "react-deprecated" || source.source === "html-deprecated")
                && !navObj.sources.some(source => source.source === "react" || source.source === "html")
              ),
              isBeta: navObj.sources.some(source => source.beta),
              isDemo: navObj.sources.some(source => (
                  source.source === "react-demos" || source.source === "html-demos")
                && !navObj.sources.some(source => source.source === "react" || source.source === "html")
              )
            })
        )}
    </NavExpandable>
  );
}

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
