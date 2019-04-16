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
  state = {
    searchValue: ''
  };

  handleSearchChange = (checked, event) => {
    const searchValue = event.target.value;
    this.setState(() => ({
      searchValue
    }));
  };

  render() {
    const { data } = this.props;
    const { searchValue } = this.state;

    const componentRoutes = data.componentPages
      ? data.componentPages.edges.map(e => ({
        to: e.node.path,
        label: e.node.context.title,
        pkg: 'core',
        components: []
      }))
      : [];

    const layoutRoutes = data.layoutPages
      ? data.layoutPages.edges.map(e => ({
        to: e.node.path,
        label: e.node.context.title,
        pkg: 'core',
        components: []
      }))
      : [];

    const demoRoutes = data.demoPages
      ? data.demoPages.edges.map(e => ({
        to: e.node.path,
        label: e.node.context.title
      }))
      : [];

    const searchRE = new RegExp(searchValue, 'i');

    const filteredComponentRoutes = componentRoutes.filter(c => {
      c.filteredComponents = c.components.filter(component => searchRE.test(component.label));
      return searchRE.test(c.label) || c.filteredComponents.length > 0;
    });

    const filteredLayoutRoutes = layoutRoutes.filter(c => {
      c.filteredComponents = c.components.filter(component => searchRE.test(component.label));
      return searchRE.test(c.label) || c.filteredComponents.length > 0;
    });

    const filteredDemoRoutes = demoRoutes.filter(c => searchRE.test(c.label));

    const isActiveTest = (currentPath, path) => {
      const pathWithSlash = path.endsWith('/') ? path : `${path}/`;
      const currentPathWithSlash = currentPath.endsWith('/') ? currentPath : `${currentPath}/`;

      return currentPathWithSlash.endsWith(pathWithSlash);
    }

    const SideNav = (
      <Location>
      {({ location }) => {
        // console.log(location);
        const currentPath = location.pathname;
        return (
          <Nav className="pf-site-vertical-navigation" aria-label="Nav">
            <Switcher />
            {/* <Form className={css(styles.search)} onSubmit={event => { event.preventDefault(); return false; }}>
              <TextInput
                type="text"
                id="primaryComponentSearch"
                name="primaryComponentSearch"
                placeholder="Search"
                value={searchValue}
                onChange={this.handleSearchChange}
              />
            </Form> */}
            <NavList>
              <NavExpandable
                title="Components"
                isExpanded={currentPath.indexOf('/components/') > -1 || Boolean(searchValue && filteredComponentRoutes.length > 0)}
                isActive={currentPath.indexOf(/components/) > -1}
              >
                {filteredComponentRoutes.map(item => (
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
                isExpanded={currentPath.indexOf('/layouts/') > -1 || Boolean(searchValue && filteredLayoutRoutes.length > 0)}
                isActive={currentPath.indexOf(/layouts/) > -1}
              >
                {filteredLayoutRoutes.map(item => (
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
                isExpanded={currentPath.indexOf('/demos/') > -1 || Boolean(searchValue && filteredDemoRoutes.length > 0)}
                isActive={currentPath.indexOf(/demos/) > -1}
              >
                {filteredDemoRoutes.map(item => (
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
                <Link to="/documentation/react/css-variables/">Global CSS Variables</Link>
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
              }
            }
          }
        }
      }
    `}
    render={data => <SideNav data={data} {...props} />}
  />
);
