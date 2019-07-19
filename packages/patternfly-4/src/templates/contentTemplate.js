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
import { MDXRenderer } from '../components/mdx-renderer';
import './template.scss';

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

export default function ContentTemplate ({
  data // this prop will be injected by the GraphQL query below.
}) {
  let SideNav;
  const { mdx, allGetStartedNavigationJson, allDesignGuidelinesNavigationJson, allContributeNavigationJson } = data;
  const { frontmatter } = mdx;
  let title;

  if (frontmatter.path.indexOf('/get-started') > -1 ) {
    SideNav = navBuilder(allGetStartedNavigationJson.edges);
    title = 'Get started';
  } else if (frontmatter.path.indexOf('/design-guidelines') > -1 ) {
    SideNav = navBuilder(allDesignGuidelinesNavigationJson.edges);
    title = 'Design guidelines';
  } else if (frontmatter.path.indexOf('/contribute') > -1 ) {
    SideNav = navBuilder(allContributeNavigationJson.edges);
    title = 'Contribute';
  }

  return (
    <Layout sideNav={SideNav}>
      <SEO title={title} keywords={['gatsby', 'application', 'react']} />
      <PageSection className="pageSectionStyles markdown-body" variant={PageSectionVariants.light}>
        <PatternFlyThemeProvider>
          <TextContent>
            <MDXRenderer>
              {mdx.code.body}
            </MDXRenderer>
          </TextContent>
        </PatternFlyThemeProvider>
      </PageSection>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      code {
        body
      }
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
    allContributeNavigationJson {
      edges {
        node {
          text
          path
        }
      }
    }
  }
`
