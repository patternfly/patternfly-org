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
  PageSectionVariants
} from '@patternfly/react-core';
import { Location } from '@reach/router';
import './markdownPageTemplate.css';

const navBuilder = navData => {
  return (
    <Location>
      {({ location }) => {
        console.log(location);
        const currentPath = location.pathname;
        return (
          <Nav aria-label="Nav">
            <NavList>
              {navData.map(item => item.subNav ? (
                <NavExpandable title={item.text} isExpanded={currentPath.indexOf(item.path) > -1} isActive={currentPath.indexOf(item.path) > -1}>
                  {item.subNav.map(item => (
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
                  itemId={item.path} 
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
};

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data;// data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  const getStartedNav = [{
    text: 'About',
    path: '/get-started/about'
  }, {
    text: 'Developers',
    path: '/get-started/developers'
  }, {
    text: 'Designers',
    path: '/get-started/designers'
  }, {
    text: 'Accessibility (WIP)',
    path: '/get-started/accessibility'
  }, {
    text: 'Upgrade from PF3 (WIP)',
    path: '/get-started/upgrade'
  }, {
    text: 'FAQs (WIP)',
    path: '/get-started/faqs'
  }];
  const designGuidelinesNav = [{
    text: 'Styles (WIP)',
    path: '/design-guidelines/styles/',
    subNav: [{
      text: 'Overview',
      path: '/design-guidelines/styles/overview'
    }, {
      text: 'Color',
      path: '/design-guidelines/styles/color'
    }, {
      text: 'Icons',
      path: '/design-guidelines/styles/icons'
    }, {
      text: 'Typography',
      path: '/design-guidelines/styles/typography'
    }]
  }, {
    text: 'Usage & Behavior',
    path: '/design-guidelines/usage-and-behavior/',
    subNav: [{
      text: 'About Modal',
      path: '/design-guidelines/usage-and-behavior/about-modal'
    }, {
      text: 'Buttons and Links',
      path: '/design-guidelines/usage-and-behavior/buttons-and-links'
    }, {
      text: 'Forms',
      path: '/design-guidelines/usage-and-behavior/forms'
    }, {
      text: 'Modal',
      path: '/design-guidelines/usage-and-behavior/modal'
    }, {
      text: 'Navigation System',
      path: '/design-guidelines/usage-and-behavior/navigation-system'
    }, {
      text: 'Progress Bar',
      path: '/design-guidelines/usage-and-behavior/progress-bar'
    }]
  }, {
    text: 'Content (WIP)',
    path: '/design-guidelines/content'
  }];
  const communityNav = [{
    text: 'Contribute (WIP)',
    path: '/community/contribute'
  }, {
    text: 'Forum (WIP)',
    path: '/community/forum'
  }];
  let SideNav;
  if (frontmatter.path.indexOf('/get-started') > -1 ) {
    SideNav = navBuilder(getStartedNav);
  } else if (frontmatter.path.indexOf('/design-guidelines') > -1 ) {
    SideNav = navBuilder(designGuidelinesNav);
  } else if (frontmatter.path.indexOf('/community') > -1 ) {
    SideNav = navBuilder(communityNav);
  }
  return (
    <Layout sideNav={SideNav}>
      <SEO title="Docs" keywords={['gatsby', 'application', 'react']} />
      <PageSection variant={PageSectionVariants.light}>
        <div
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: html }}
        />
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
  }
`