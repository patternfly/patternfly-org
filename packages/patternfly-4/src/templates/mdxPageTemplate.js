import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import Layout from '../components/layout';
import SEO from '../components/seo';
import {
  Nav,
  NavItem,
  NavList,
  NavExpandable,
  PageSection,
  PageSectionVariants,
  TextContent
} from '@patternfly/react-core';
import { PatternFlyThemeProvider } from '@patternfly/react-styled-system';
import { Location } from '@reach/router';
import './markdownPageTemplate.scss';

const navBuilder = navData => {
  return (
    <Location>
      {({ location }) => {
        // console.log(location);
        const currentPath = location.pathname;
        const { allGetStartedNavigationJson, allDesignGuidelinesNavigationJson } = navData;
        if (currentPath.indexOf('/get-started') > -1 ) {
          navData = allGetStartedNavigationJson.edges;
        } else if (currentPath.indexOf('/design-guidelines') > -1 ) {
          navData = allDesignGuidelinesNavigationJson.edges;
        }
        return (
          <Nav aria-label="Nav">
            <NavList>
              {navData.map(({ node }) => node.subNav ? (
                <NavExpandable key={node.text} title={node.text} isExpanded={currentPath.indexOf(node.path) > -1} isActive={currentPath.indexOf(node.path) > -1}>
                  {node.subNav.map(item => (
                    <NavItem
                      itemId={item.path}
                      key={item.path}
                      isActive={currentPath.indexOf(item.path) > -1}
                    >
                      <Link to={item.path}>
                        {item.text}
                      </Link>
                    </NavItem>
                  ))}
                </NavExpandable>
              ): (
                <NavItem
                  itemId={node.path}
                  key={node.path}
                  isActive={currentPath.indexOf(node.path) > -1}
                >
                  <Link to={node.path}>
                    {node.text}
                  </Link>
                </NavItem>
              ))}
            </NavList>
          </Nav>
        );
      }}
    </Location>
  );
};

const MdxPageTemplate = ({ data, children, props }) => {
  const SideNav = navBuilder(data);
  const content = <div className="markdown-body">{children}</div>;
  return (
    <Layout sideNav={SideNav}>
      <SEO title="Docs" keywords={['gatsby', 'application', 'react']} />
      <PageSection variant={PageSectionVariants.light}>
        <PatternFlyThemeProvider>
          <TextContent>{content}</TextContent>
        </PatternFlyThemeProvider>
      </PageSection>
    </Layout>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query MdxPageTemplateQuery {
        allGetStartedNavigationJson {
          edges {
            node {
              text
              path
            }
          }
        }
        allDesignGuidelinesNavigationJson {
          edges {
            node {
              text
              path
              subNav {
                text
                path
              }
            }
          }
        }
      }
    `}
    render={data => <MdxPageTemplate data={data} {...props} />}
  />
);
