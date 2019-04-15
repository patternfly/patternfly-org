import React from "react";
import { graphql, Link } from "gatsby";
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

const navBuilder = navData => {
  return (
    <Location>
      {({ location }) => {
        // console.log(location);
        const currentPath = location.pathname;
        return (
          <Nav className="pf-site-md-nav" aria-label="Nav">
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

export default function MarkdownPageTemplate({
  data // this prop will be injected by the GraphQL query below.
}) {
  let SideNav;
  let content;
  const { markdownRemark, allGetStartedNavigationJson, allDesignGuidelinesNavigationJson } = data;// data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;

  if (frontmatter.path.indexOf('/get-started') > -1 ) {
    SideNav = navBuilder(allGetStartedNavigationJson.edges);
  } else if (frontmatter.path.indexOf('/design-guidelines') > -1 ) {
    SideNav = navBuilder(allDesignGuidelinesNavigationJson.edges);
  }

  content = <div
    className="markdown-body"
    dangerouslySetInnerHTML={{ __html: html }}
  />;
  return (
    <Layout sideNav={SideNav}>
      <SEO title="Docs" keywords={['gatsby', 'application', 'react']} />
      <PageSection variant={PageSectionVariants.light}>
        <PatternFlyThemeProvider>
          <TextContent>{content}</TextContent>
        </PatternFlyThemeProvider>
      </PageSection>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
      }
    }
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
`
