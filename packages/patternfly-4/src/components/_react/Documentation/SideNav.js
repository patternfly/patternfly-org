import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import {
  Nav,
  NavList,
  NavExpandable,
  NavItem,
} from '@patternfly/react-core';
import Switcher from '../../switcher';
import { Location } from '@reach/router';

class SideNav extends React.Component {
  render() {
    const { data } = this.props;

    const componentRoutes = data.componentPages &&
      data.componentPages.edges
        .filter(e => e.node.context.title && !e.node.context.fullscreen)
        .map(e => ({
          to: e.node.path,
          label: e.node.context.title,
          pkg: 'core',
          components: []
        }));

    const layoutRoutes = data.layoutPages &&
      data.layoutPages.edges
        .filter(e => e.node.context.title && !e.node.context.fullscreen)
        .map(e => ({
          to: e.node.path,
          label: e.node.context.title,
          pkg: 'core',
          components: []
        }));

    const chartRoutes = data.chartPages &&
      data.chartPages.edges
        .filter(e => e.node.context.title && !e.node.context.fullscreen)
        .map(e => ({
          to: e.node.path,
          label: e.node.context.title,
          pkg: 'core',
          components: []
        }));

    const demoRoutes = data.demoPages && 
      data.demoPages.edges
        .filter(e => e.node.context.title && !e.node.context.fullscreen)
        .map(e => ({
          to: e.node.path,
          label: e.node.context.title
        }));
    
    const experimentalRoutes = data.experimentalPages && 
      data.experimentalPages.edges
        .filter(e => e.node.context.title && !e.node.context.fullscreen)
        .map(e => ({
          to: e.node.path,
          label: e.node.context.title
        }));

    const isActiveTest = (currentPath, path) => {
      const pathWithSlash = path.endsWith('/') ? path : `${path}/`;
      const currentPathWithSlash = currentPath.endsWith('/') ? currentPath : `${currentPath}/`;

      return currentPathWithSlash.endsWith(pathWithSlash);
    }

    const SideNav = (
      <Location>
      {({ location }) => {
        const currentPath = location.pathname;
        return (
          <Nav className="pf-site-vertical-navigation" aria-label="Nav">
            <Switcher />
            <NavList>
              <NavExpandable
                title="Components"
                isExpanded={currentPath.indexOf('/components/') > -1}
                isActive={currentPath.indexOf(/components/) > -1}
              >
                {componentRoutes.map(item => (
                  <NavItem
                    key={item.to}
                    isActive={isActiveTest(currentPath, item.to)}
                  >
                    <Link to={item.to}>
                      {item.label}
                    </Link>
                  </NavItem>
                ))}
              </NavExpandable>
              <NavExpandable
                title="Layouts"
                isExpanded={currentPath.indexOf('/layouts/') > -1}
                isActive={currentPath.indexOf(/layouts/) > -1}
              >
                {layoutRoutes.map(item => (
                  <NavItem
                    key={item.to}
                    isActive={isActiveTest(currentPath, item.to)}
                  >
                    <Link to={item.to}>
                      {item.label}
                    </Link>
                  </NavItem>
                ))}
              </NavExpandable>
              <NavExpandable
                title="Charts"
                isExpanded={currentPath.indexOf('/charts/') > -1}
                isActive={currentPath.indexOf(/charts/) > -1}
              >
                {chartRoutes.map(item => (
                  <NavItem
                    key={item.to}
                    isActive={isActiveTest(currentPath, item.to)}
                  >
                    <Link to={item.to}>
                      {item.label}
                    </Link>
                  </NavItem>
                ))}
              </NavExpandable>
              <NavExpandable
                title="Demos"
                isExpanded={currentPath.indexOf('/demos/') > -1}
                isActive={currentPath.indexOf(/demos/) > -1}
              >
                {demoRoutes.map(item => (
                  <NavItem
                    key={item.to}
                    isActive={isActiveTest(currentPath, item.to)}
                  >
                    <Link to={item.to}>
                      {item.label}
                    </Link>
                  </NavItem>
                ))}
              </NavExpandable>
              <NavExpandable
                title="Experimental"
                isExpanded={currentPath.indexOf('/experimental/') > -1}
                isActive={currentPath.indexOf(/experimental/) > -1}
              >
                {experimentalRoutes.map(item => (
                  <NavItem
                    key={item.to}
                    isActive={isActiveTest(currentPath, item.to)}
                  >
                    <Link to={item.to}>
                      {item.label}
                    </Link>
                  </NavItem>
                ))}
              </NavExpandable>
              <NavItem isActive={currentPath.indexOf('/documentation/react/css-variables') > -1}>
                <Link to="/documentation/react/css-variables/">Global CSS variables</Link>
              </NavItem>
              <NavItem isActive={currentPath.indexOf('/documentation/react/notes') > -1}>
                <Link to="/documentation/react/notes/">Release notes</Link>
              </NavItem>
            </NavList>
          </Nav>
          );
        }}
      </Location>
    );

    return SideNav;
  }

}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        componentPages: allSitePage(
          filter: { path: { glob: "/documentation/react/components/**" } },
          sort: { fields: path }
        ) {
          edges {
            node {
              path
              context {
                title
                fullscreen
              }
            }
          }
        }
        layoutPages: allSitePage(
          filter: { path: { glob: "/documentation/react/layouts/**" } },
          sort: { fields: path }
        ) {
          edges {
            node {
              path
              context {
                title
                fullscreen
              }
            }
          }
        }
        chartPages: allSitePage(
          filter: { path: { glob: "/documentation/react/charts/**" } },
          sort: { fields: path }
        ) {
          edges {
            node {
              path
              context {
                title
                fullscreen
              }
            }
          }
        }
        demoPages: allSitePage(
          filter: { path: { glob: "/documentation/react/demos/**" } },
          sort: { fields: path }
        ) {
          edges {
            node {
              path
              context {
                title
                fullscreen
              }
            }
          }
        }
        experimentalPages: allSitePage(
          filter: { path: { glob: "/documentation/react/experimental/**" } },
          sort: { fields: path }
        ) {
          edges {
            node {
              path
              context {
                title
                fullscreen
              }
            }
          }
        }
      }
    `}
    render={data => <SideNav data={data} {...props} />}
  />
);
