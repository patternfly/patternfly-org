import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import NavigationItem from '../components/navigation/navigationItem';
import * as DocsFiles from '../../.tmp';

import {
  Button,
  Bullseye,
  Nav,
  NavGroup,
  NavItem,
  Form,
  FormGroup,
  TextInput
} from '@patternfly/react-core';
import { css } from '@patternfly/react-styles';
import styles from '../components/navigation/navigation.styles';

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

class DocsPage extends React.Component {
  state = {
    activeItem: '',
    searchValue: ''
  };

  onSideNavSelect = result => {
    this.setState({
      activeItem: result.itemId
    });
  };

  handleSearchChange = (checked, event) => {
    const searchValue = event.target.value;
    this.setState(() => ({
      searchValue
    }));
  };

  render() {
    const { data } = this.props;
    const { activeItem, searchValue } = this.state;

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
      <Nav onSelect={this.onSideNavSelect} aria-label="Nav">
        <Bullseye>
          <Button variant="secondary">React</Button><Button variant="tertiary">Core</Button>
        </Bullseye>
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
                itemId={route.to} 
                isActive={activeItem === route.to}
                key={route.label}
              >
                <NavigationItem
                  to={route.to}
                  pkg={route.pkg}
                  components={route.filteredComponents || route.components}
                >
                  {route.label}
                </NavigationItem>
              </NavItem>
            ))}
          </NavGroup>
        )}
        {Boolean(filteredLayoutRoutes.length) && (
          <NavGroup title="Layouts">
            {filteredLayoutRoutes.map(route => (
              <NavItem
                itemId={route.to} 
                isActive={activeItem === route.to}
                key={route.label}
              >
                <NavigationItem
                  to={route.to}
                  pkg={route.pkg}
                  components={route.filteredComponents || route.components}
                >
                  {route.label}
                </NavigationItem>
              </NavItem>
            ))}
          </NavGroup>
        )}
        {Boolean(filteredDemoRoutes.length) && (
          <NavGroup title="Demos">
            {filteredDemoRoutes.map(route => (
              <NavigationItem key={route.label} to={route.to}>
                {route.label}
              </NavigationItem>
            ))}
          </NavGroup>
        )}
      </Nav>
    );

    return (<Layout sideNav={SideNav}>
    <SEO title="Docs" keywords={['gatsby', 'application', 'react']} />
    {this.props.children}
  </Layout>);
  }

}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        componentPages: allSitePage(
          filter: { path: { glob: "**/components/*" } }
          sort: { fields: [fields___label], order: ASC }
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
          filter: { path: { glob: "**/layouts/*" } }
          sort: { fields: [fields___label], order: ASC }
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
        demoPages: allSitePage(filter: { path: { glob: "**/demos/*" } }, sort: { fields: [fields___label], order: ASC }) {
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
    render={data => <DocsPage data={data} {...props} />}
  />
);
