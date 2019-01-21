import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import * as DocsFiles from '../../../../.tmp';
import {
  Nav,
  NavGroup,
  NavItem,
  Form,
  FormGroup,
  TextInput
} from '@patternfly/react-core';
import { css } from '@patternfly/react-styles';
import styles from '../../navigation/navigation.styles';
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

    const componentMapper = (path, label) => {
      const { components } = DocsFiles[`${label.toLowerCase()}_docs`];
      return Object.keys(components).map(k => ({
        label: k,
        to: `${path}#${k}`
      }));
    };
    const getPackage = label => DocsFiles[`${label.toLowerCase()}_package`].substr(6);
    const componentRoutes = data.componentPages
      ? data.componentPages.edges.map(e => ({
        to: e.node.path,
        label: e.node.fields.label,
        pkg: getPackage(e.node.fields.label),
        components: componentMapper(e.node.path, e.node.fields.label)
      }))
      : [];

    const layoutRoutes = data.layoutPages
      ? data.layoutPages.edges.map(e => ({
        to: e.node.path,
        label: e.node.fields.label,
        pkg: getPackage(e.node.fields.label),
        components: componentMapper(e.node.path, e.node.fields.label)
      }))
      : [];

    const demoRoutes = data.demoPages
      ? data.demoPages.edges.map(e => ({
        to: e.node.path,
        label: e.node.fields.label
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

    const SideNav = (
      <Location>
      {({ location }) => {
        console.log(location);
        const currentPath = location.pathname;
        return (
          <Nav aria-label="Nav">
            <Switcher />
            <Form className={css(styles.search)} onSubmit={event => { event.preventDefault(); return false; }}>
              <FormGroup
                label="Search Components"
                fieldId="primaryComponentSearch">
                <TextInput
                  type="text"
                  id="primaryComponentSearch"
                  name="primaryComponentSearch"
                  placeholder="For example, &quot;button&quot;"
                  value={searchValue}
                  onChange={this.handleSearchChange}
                />
              </FormGroup>
            </Form>
            {Boolean(filteredComponentRoutes.length) && (
              <NavGroup title="Components">
                {filteredComponentRoutes.map(route => (
                  <NavItem
                    isActive={currentPath.indexOf(route.to) > -1}
                    key={route.to}
                  >
                    <Link to={route.to}>
                      {route.label}
                    </Link>
                    {/* <NavigationItem
                      to={route.to}
                      pkg={route.pkg}
                      components={route.filteredComponents || route.components}
                    >
                      {route.label}
                    </NavigationItem> */}
                  </NavItem>
                ))}
              </NavGroup>
            )}
            {Boolean(filteredLayoutRoutes.length) && (
              <NavGroup title="Layouts">
                {filteredLayoutRoutes.map(route => (
                  <NavItem
                    isActive={currentPath.indexOf(route.to) > -1}
                    key={route.to}
                  >
                    <Link to={route.to}>
                      {route.label}
                    </Link>
                    {/* <NavigationItem
                      to={route.to}
                      pkg={route.pkg}
                      components={route.filteredComponents || route.components}
                    >
                      {route.label}
                    </NavigationItem> */}
                  </NavItem>
                ))}
              </NavGroup>
            )}
            {Boolean(filteredDemoRoutes.length) && (
              <NavGroup title="Demos">
                {filteredDemoRoutes.map(route => (
                  <NavItem
                    isActive={currentPath.indexOf(route.to) > -1}
                    key={route.to}
                  >
                    <Link to={route.to}>
                      {route.label}
                    </Link>
                  </NavItem>
                  // <NavigationItem key={route.label} to={route.to}>
                  //   {route.label}
                  // </NavigationItem>
                ))}
              </NavGroup>
            )}
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
          filter: { path: { glob: "/documentation/react/components/*" } }
        ) {
          edges {
            node {
              path
              fields {
                label
              }
            }
          }
        }
        layoutPages: allSitePage(
          filter: { path: { glob: "/documentation/react/layouts/*" } }
        ) {
          edges {
            node {
              path
              fields {
                label
              }
            }
          }
        }
        demoPages: allSitePage(filter: { path: { glob: "/documentation/react/demos/*" } }) {
          edges {
            node {
              path
              fields {
                label
              }
            }
          }
        }
      }
    `}
    render={data => <SideNav data={data} {...props} />}
  />
);
