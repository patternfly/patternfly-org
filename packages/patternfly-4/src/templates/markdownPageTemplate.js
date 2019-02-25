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
import { PatternFlyThemeProvider } from '@patternfly/react-styled-system';
import { Location } from '@reach/router';
import './markdownPageTemplate.scss';

/*
  {
    text: 'Accessibility (WIP)',
    path: '/get-started/accessibility'
  }, {
    text: 'Upgrade from PF3 (WIP)',
    path: '/get-started/upgrade'
  }, {
    text: 'FAQs (WIP)',
    path: '/get-started/faqs'
  }
*/
const getStartedNav = [{
  text: 'About',
  path: '/get-started/about'
}, {
  text: 'Developers',
  path: '/get-started/developers'
}, {
  text: 'Designers',
  path: '/get-started/designers'
}];
/*
  {
    text: 'Overview (WIP)',
    path: '/design-guidelines/styles/overview'
  }, {
    text: 'Colors (WIP)',
    path: '/design-guidelines/styles/color'
  }, 
*/
const designGuidelinesNav = [{
  text: 'Styles',
  path: '/design-guidelines/styles/',
  subNav: [{
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
    text: 'Alerts and Notifications',
    path: '/design-guidelines/usage-and-behavior/alerts-and-notifications'
  }, {
    text: 'Buttons and Links',
    path: '/design-guidelines/usage-and-behavior/buttons-and-links'
  }, {
    text: 'Forms',
    path: '/design-guidelines/usage-and-behavior/forms'
  }, {
    text: 'Lists and Tables',
    path: '/design-guidelines/usage-and-behavior/lists-and-tables'
  }, {
    text: 'Modal',
    path: '/design-guidelines/usage-and-behavior/modal'
  }, {
    text: 'Navigation System',
    path: '/design-guidelines/usage-and-behavior/navigation-system'
  }, {
    text: 'Progress Bar',
    path: '/design-guidelines/usage-and-behavior/progress-bar'
  }, {
    text: 'Toolbar',
    path: '/design-guidelines/usage-and-behavior/toolbar'
  }]
}, {
  text: 'Content',
  path: '/design-guidelines/content',
  subNav: [{
    text: 'Writing',
    path: '/design-guidelines/content/writing'
  }, {
    text: 'Voice and Tone',
    path: '/design-guidelines/content/voice-and-tone'
  }, {
    text: 'Grammar and Terminology',
    path: '/design-guidelines/content/grammar-and-terminology'
  }]
}];
const communityNav = [{
  text: 'Contribute (WIP)',
  path: '/community/contribute'
}, {
  text: 'Forum (WIP)',
  path: '/community/forum'
}];

const navBuilder = navData => {
  return (
    <Location>
      {({ location }) => {
        // console.log(location);
        const currentPath = location.pathname;
        if (!navData) {
          if (currentPath.indexOf('/get-started') > -1 ) {
            navData = getStartedNav;
          } else if (currentPath.indexOf('/design-guidelines') > -1 ) {
            navData = designGuidelinesNav;
          } else if (currentPath.indexOf('/community') > -1 ) {
            navData = communityNav;
          }
        }
        return (
          <Nav aria-label="Nav">
            <NavList>
              {navData.map(item => item.subNav ? (
                <NavExpandable key={item.text} title={item.text} isExpanded={currentPath.indexOf(item.path) > -1} isActive={currentPath.indexOf(item.path) > -1}>
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
  children
}) {
  let SideNav;
  let content;
  if (data) {
    debugger;
    const { markdownRemark } = data;// data.markdownRemark holds our post data
    const { frontmatter, html } = markdownRemark;

    if (frontmatter.path.indexOf('/get-started') > -1 ) {
      SideNav = navBuilder(getStartedNav);
    } else if (frontmatter.path.indexOf('/design-guidelines') > -1 ) {
      SideNav = navBuilder(designGuidelinesNav);
    } else if (frontmatter.path.indexOf('/community') > -1 ) {
      SideNav = navBuilder(communityNav);
    }

    content = <div
      className="markdown-body"
      dangerouslySetInnerHTML={{ __html: html }}
    />;
  } else {
    SideNav = navBuilder();
    content = <div
      className="markdown-body"
    >{children}</div>;
  }
  return (
    <Layout sideNav={SideNav}>
      <SEO title="Docs" keywords={['gatsby', 'application', 'react']} />
      <PageSection variant={PageSectionVariants.light}>
        <PatternFlyThemeProvider>{content}</PatternFlyThemeProvider>
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