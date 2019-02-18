import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
// import Prism from 'prismjs'; // eslint-disable-line no-unused-vars
// import 'prismjs/themes/prism-coy.css';
import {
  Nav,
  NavGroup,
  NavItem
} from '@patternfly/react-core';
import Switcher from '../../switcher';
import { Location } from '@reach/router';

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query IndexOtherPageQuery {
        allSitePage(filter: { path: { glob: "/documentation/core/**" }, fields: { label: { ne: null } } }, sort: {fields: fields___label}) {
          edges {
            node {
              path
              fields {
                label
                type
              }
            }
          }
        }
      }
    `}
    render={data => {
      if (!data.allSitePage) {
        return;
      }
      const allPages = data.allSitePage.edges.reduce((accum, edge) => {
        const { type, label } = edge.node.fields;

        if (!accum[type]) {
          accum[type] = [];
        }

        accum[type].push({
          path: edge.node.path,
          text: label,
          className: `is-${type}`
        });
        return accum;
      }, {});

      const { components, demos, layouts, utilities, 'upgrade-examples': upgradeExamples} = allPages;

      const SideNav = (
        <Location>
          {({ location }) => {
            // console.log(location);
            const currentPath = location.pathname;
            return (
              <Nav aria-label="Nav">
                <Switcher />
                <NavGroup title="Styles">
                  <NavItem isActive={currentPath.indexOf('/documentation/core/css-variables/') > -1}>
                    <Link to="/documentation/core/css-variables/">CSS Variables</Link>
                  </NavItem>
                </NavGroup>
                {Boolean(components.length) && (
                  <NavGroup title="Components">
                    {components.map(navItem => {
                      const { path, text } = navItem;
                      const isFullPage = path.endsWith('-full');
                      if (isFullPage) {
                        return null;
                      }
                      return (
                      <NavItem
                        key={path}
                        isActive={currentPath.indexOf(path) > -1}
                      >
                        <Link to={path}>
                          {text}
                        </Link>
                      </NavItem>
                    )})}
                  </NavGroup>
                )}
                {Boolean(layouts.length) && (
                  <NavGroup title="Layouts">
                    {layouts.map(navItem => {
                      const { path, text } = navItem;
                      const isFullPage = path.endsWith('-full');
                      if (isFullPage) {
                        return null;
                      }
                      return (
                      <NavItem
                        key={path}
                        isActive={currentPath.indexOf(path) > -1}
                      >
                        <Link to={path}>
                          {text}
                        </Link>
                      </NavItem>
                    )})}
                  </NavGroup>
                )}
                {Boolean(utilities.length) && (
                  <NavGroup title="Utilities">
                    {utilities.map(navItem => {
                      const { path, text } = navItem;
                      const isFullPage = path.endsWith('-full');
                      if (isFullPage) {
                        return null;
                      }
                      return (
                      <NavItem
                        key={path}
                        isActive={currentPath.indexOf(path) > -1}
                      >
                        <Link to={path}>
                          {text}
                        </Link>
                      </NavItem>
                    )})}
                  </NavGroup>
                )}
                {Boolean(demos.length) && (
                  <NavGroup title="Demos">
                    {demos.map(navItem => {
                      const { path, text } = navItem;
                      const isFullPage = path.endsWith('-full');
                      if (isFullPage) {
                        return null;
                      }
                      return (
                        <NavItem
                          key={path}
                          isActive={currentPath.indexOf(path) > -1}
                        >
                          <Link to={path}>
                            {text}
                          </Link>
                        </NavItem>
                    )})}
                  </NavGroup>
                )}
                {Boolean(upgradeExamples.length) && (
                  <NavGroup title="Upgrades">
                    {upgradeExamples.map(navItem => {
                      const { path, text } = navItem;
                      const isFullPage = path.endsWith('-full');
                      if (isFullPage) {
                        return null;
                      }
                      return (
                      <NavItem
                        key={path}
                        isActive={currentPath.indexOf(path) > -1}
                      >
                        <Link to={path}>
                          {text}
                        </Link>
                      </NavItem>
                    )})}
                  </NavGroup>
                )}
              </Nav>
            );
          }}
        </Location>
      );
      return SideNav;
    }}
  />
);
