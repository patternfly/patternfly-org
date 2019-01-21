import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import * as DocsFiles from '../../.tmp';

import {
  Button,
  Bullseye,
  Nav,
  NavList,
  NavGroup,
  NavItem,
  Form,
  FormGroup,
  TextInput,
  NavVariants
} from '@patternfly/react-core';
import { css } from '@patternfly/react-styles';
import styles from '../components/navigation/navigation.styles';
import NavigationItem from '../components/navigation/navigationItem';
import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import Switcher from '../components/switcher';
import { Location } from '@reach/router';

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
        <Switcher />
      </Nav>
    );

    const frameworksNav = [{
      text: 'Core',
      path: '/documentation/core'
    }, {
      text: 'React',
      path: '/documentation/react'
    }];

    const tertiaryNav = (
      <Location>
        {({ location }) => {
          console.log(location);
          const currentPath = location.pathname;
          return (
            <Nav aria-label="Tertiary Nav">
              <NavList variant={NavVariants.tertiary}>
                {frameworksNav.map(item => (
                  <NavItem
                    key={item.path}
                    isActive={currentPath.indexOf(item.path) > -1}
                  >
                    <Link to={item.path}>
                      {item.text}
                    </Link>
                  </NavItem>
                ))}
              </NavList>
            </Nav>
          );
        }}
      </Location>
    );

    return (<Layout tertiaryNav={tertiaryNav} sideNav={SideNav}>
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
    render={data => <DocsPage data={data} {...props} />}
  />
);
