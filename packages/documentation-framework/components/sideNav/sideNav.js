import React from 'react';
import { Link } from '../link/link';
import {
  Label,
  Nav,
  NavList,
  NavGroup,
  NavExpandable,
  PageContextConsumer,
  capitalize,
  Flex,
  FlexItem,
  Divider
} from '@patternfly/react-core';
import { css } from '@patternfly/react-styles';
import { Location } from '@reach/router';

const DIVIDER_STYLES = {
  marginTop: 'var(--pf-t--global--spacer--md)',
  marginBottom: 'var(--pf-t--global--spacer--md)'
};
import { makeSlug } from '../../helpers';
import globalBreakpointXl from '@patternfly/react-tokens/dist/esm/t_global_breakpoint_xl';
import { trackEvent } from '../../helpers';

const getIsActive = (location, section, subsection = null) => {
  const slug = makeSlug(null, section, null, null, subsection);
  return location.pathname.startsWith(slug);
};

const defaultValue = 50;

const NavItem = ({ text, href, isDeprecated, isBeta, isDemo }) => {
  const isMobileView = window.innerWidth < Number.parseInt(globalBreakpointXl.value, 10);
  return (
    <PageContextConsumer key={href + text}>
      {({ onSidebarToggle, isSidebarOpen }) => (
        <li
          key={href + text}
          className="pf-v6-c-nav__item"
          onClick={() => isMobileView && onSidebarToggle && onSidebarToggle()}
        >
          <Link
            to={href}
            getProps={({ isCurrent, href, location }) => {
              const { pathname } = location;
              return {
                className: css('pf-v6-c-nav__link', (isCurrent || pathname.startsWith(href + '/')) && 'pf-m-current')
              };
            }}
            tabIndex={isSidebarOpen ? undefined : -1}
          >
            <Flex spaceItems={{ default: 'spaceItemsSm' }}>
              <FlexItem>{text}</FlexItem>
              {(isBeta || isDemo || isDeprecated) && (
                <FlexItem>
                  {isBeta && (
                    <Label color="blue" isCompact>
                      Beta
                    </Label>
                  )}
                  {!isBeta && isDeprecated && (
                    <Label color="grey" isCompact>
                      Deprecated
                    </Label>
                  )}
                  {!isBeta && !isDeprecated && isDemo && (
                    <Label color="purple" isCompact>
                      Demo
                    </Label>
                  )}
                </FlexItem>
              )}
            </Flex>
          </Link>
        </li>
      )}
    </PageContextConsumer>
  );
};

const ExpandableNav = ({ groupedRoutes, location, section, subsection = null }) => {
  const isActive = getIsActive(location, section, subsection);
  const isSubsection = subsection;
  const routes = isSubsection ? groupedRoutes[section][subsection] : groupedRoutes[section];
  const currentSection = isSubsection ? subsection : section;
  const analyticsName = isSubsection ? `${section}/${subsection}` : section;

  return (
    <NavExpandable
      title={capitalize(currentSection.replace(/-/g, ' '))}
      key={capitalize(currentSection.replace(/-/g, ' '))}
      isActive={isActive}
      isExpanded={isActive}
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
        .filter(([id, navObj]) => !Boolean(navObj.hideNavItem) && Object.entries(navObj).length > 0)
        .map(
          ([
            id,
            { slug, isSubsection = false, sortValue = defaultValue, subsectionSortValue = defaultValue, sources }
          ]) => ({
            text: id,
            href: slug,
            isSubsection,
            sortValue: isSubsection ? subsectionSortValue : sortValue,
            sources
          })
        )
        .sort(({ text: text1, sortValue: sortValue1 }, { text: text2, sortValue: sortValue2 }) => {
          if (sortValue1 === sortValue2) {
            return text1.localeCompare(text2);
          }
          return sortValue1 > sortValue2 ? 1 : -1;
        })
        .map((navObj) => {
          return navObj.isSubsection
            ? ExpandableNav({
                groupedRoutes,
                location,
                section,
                subsection: navObj.text
              })
            : NavItem({
                ...navObj,
                isDeprecated:
                  navObj.href?.includes('components') &&
                  navObj.sources.some(
                    (source) =>
                      (source.source === 'react-deprecated' || source.source === 'html-deprecated') &&
                      !navObj.sources.some((source) => source.source === 'react' || source.source === 'html')
                  ),
                isBeta: navObj.sources.some(
                  (source) => source.beta && source.source !== 'react-next' && source.source !== 'react-templates'
                ),
                isDemo: navObj.sources.some(
                  (source) =>
                    (source.source === 'react-demos' || source.source === 'html-demos') &&
                    !navObj.sources.some((source) => source.source === 'react' || source.source === 'html')
                )
              });
        })}
    </NavExpandable>
  );
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

  const processedItems = React.useMemo(() => {
    const result = [];
    let currentGroup = null;
    let groupItems = [];

    for (let i = 0; i < navItems.length; i++) {
      const item = navItems[i];
      
      if (item.header) {
        if (currentGroup) {
          result.push({ type: 'group', title: currentGroup, items: groupItems });
        }
        currentGroup = item.header;
        groupItems = [];
      } else if (item.divider) {
        if (currentGroup) {
          result.push({ type: 'group', title: currentGroup, items: groupItems });
          currentGroup = null;
          groupItems = [];
        }
        result.push({ type: 'divider', key: item.divider });
      } else {
        currentGroup ? groupItems.push(item) : result.push({ type: 'item', ...item });
      }
    }

    if (currentGroup) {
      result.push({ type: 'group', title: currentGroup, items: groupItems });
    }

    return result;
  }, [navItems]);

  return (
    <Nav aria-label="Side Nav" theme="light">
      <NavList className="ws-side-nav-list">
        {processedItems.map(processed => {
          if (processed.type === 'divider') {
            return <Divider key={processed.key} style={DIVIDER_STYLES} />;
          }
          
          if (processed.type === 'group') {
            return (
              <NavGroup key={processed.title} title={processed.title}>
                {processed.items.map(item =>
                  item.section ? (
                    <Location key={item.section}>
                      {({ location }) => ExpandableNav({ groupedRoutes, location, section: item.section })}
                    </Location>
                  ) : NavItem({
                    key: item.href,
                    text: item.text || capitalize(item.href.replace(/\//g, '').replace(/-/g, ' ')),
                    href: item.href
                  })
                )}
              </NavGroup>
            );
          }
          
          return processed.section ? (
            <Location key={processed.section}>
              {({ location }) => ExpandableNav({ groupedRoutes, location, section: processed.section })}
            </Location>
          ) : NavItem({
            key: processed.href,
            text: processed.text || capitalize(processed.href.replace(/\//g, '').replace(/-/g, ' ')),
            href: processed.href
          });
        })}
      </NavList>
    </Nav>
  );
};