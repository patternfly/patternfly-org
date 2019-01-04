import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import NavigationItem from '../components/navigation/navigationItem';
import * as DocsFiles from '../../.tmp';

import {
  Nav,
  NavGroup,
  NavItem
} from '@patternfly/react-core';

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

class DocsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: ''
    };
  }

  onSideNavSelect = result => {
    this.setState({
      activeItem: result.itemId
    });
  };

  render() {
    const { data } = this.props;
    const { activeItem } = this.state;

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

    const SideNav = (
      <Nav onSelect={this.onSideNavSelect} aria-label="Nav">
        {Boolean(componentRoutes.length) && (
          <NavGroup title="Components">
            {componentRoutes.map(route => (
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
        {Boolean(layoutRoutes.length) && (
          <NavGroup title="Layouts">
            {layoutRoutes.map(route => (
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
        {Boolean(demoRoutes.length) && (
          <NavGroup title="Demos">
            {demoRoutes.map(route => (
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


// export const query = graphql`
//   query SiteLayoutQuery {
//     componentPages: allSitePage(
//       filter: { path: { glob: "**/components/*" } }
//       sort: { fields: [fields___label], order: ASC }
//     ) {
//       edges {
//         node {
//           path
//           fields {
//             label
//           }
//         }
//       }
//     }
//     layoutPages: allSitePage(
//       filter: { path: { glob: "**/layouts/*" } }
//       sort: { fields: [fields___label], order: ASC }
//     ) {
//       edges {
//         node {
//           path
//           fields {
//             label
//           }
//         }
//       }
//     }
//     demoPages: allSitePage(filter: { path: { glob: "**/demos/*" } }, sort: { fields: [fields___label], order: ASC }) {
//       edges {
//         node {
//           path
//           fields {
//             label
//           }
//         }
//       }
//     }
//   }
// `;
