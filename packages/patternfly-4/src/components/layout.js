import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql, withPrefix, Link } from 'gatsby';
import Helmet from 'react-helmet';

// import './layout.css'
// import '@patternfly/react-core/dist/styles/base.css'

import {
  BackgroundImage,
  BackgroundImageSrc,
  Brand,
  Nav,
  NavItem,
  NavList,
  NavVariants,
  Page,
  PageHeader,
  PageSection,
  PageSectionVariants,
  PageSidebar
} from '@patternfly/react-core';
import { Location } from '@reach/router';

import brandImg from './l_pf-reverse-164x11.png';

class Layout extends React.Component {
  render() {
    const { tertiaryNav, sideNav } = this.props;
    const PageNav = (
      <Location>
        {({ location }) => {
          console.log(location);
          const currentPath = location.pathname;
          return (
            <Nav aria-label="Nav">
              <NavList variant={NavVariants.horizontal}>
                <NavItem isActive={currentPath.indexOf('/get-started/') > -1}>
                  <Link to="/get-started/about">Get Started</Link>
                </NavItem>
                <NavItem isActive={currentPath.indexOf('/design-guidelines/') > -1}>
                  <Link to="/design-guidelines/styles">Design Guidelines</Link>
                </NavItem>
                <NavItem isActive={currentPath.indexOf('/documentation/') > -1}>
                  <Link to="/documentation/react">Documentation</Link>
                </NavItem>
                <NavItem isActive={currentPath.indexOf('/community/') > -1}>
                  <Link to="/community/contribute">Community</Link>
                </NavItem>
                <NavItem isActive={currentPath.indexOf('/blog/') > -1}>
                  <Link to="/blog/">Blog</Link>
                </NavItem>
              </NavList>
            </Nav>
          );
        }}
      </Location>
    );
    const bgImages = {
      [BackgroundImageSrc.lg]: withPrefix('/img/pfbg_1200.jpg'),
      [BackgroundImageSrc.sm]: withPrefix('/img/pfbg_768.jpg'),
      [BackgroundImageSrc.sm2x]: withPrefix('/img/pfbg_768@2x.jpg'),
      [BackgroundImageSrc.xl]: withPrefix('/img/pfbg_2000.jpg'),
      [BackgroundImageSrc.filter]: withPrefix('/img/background-filter.svg#image_overlay')
    };
    const SiteHeader = (
      <PageHeader
        logo={<Link to="/">
          <Brand src={brandImg} alt="Patternfly Logo"/>
        </Link>}
        topNav={PageNav}
      />
    );
    return (<StaticQuery query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `} render={data => <>
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <Helmet>
          <title>PatternFly</title>
          <html lang="en-US" />
          <script
            defer
            src="https://use.fontawesome.com/releases/v5.0.13/js/solid.js"
            integrity="sha384-tzzSw1/Vo+0N5UhStP3bvwWPq+uvzCMfrN1fEFe+xBmv1C/AtVX5K0uZtmcHitFZ"
            crossOrigin="anonymous"
          />
          <script
            defer
            src="https://use.fontawesome.com/releases/v5.0.13/js/fontawesome.js"
            integrity="sha384-6OIrr52G08NpOFSZdxxz1xdNSndlD4vdcf/q2myIUVO0VsqaGHJsB0RaBE01VTOY"
            crossOrigin="anonymous"
          />
        </Helmet>
        <BackgroundImage src={bgImages} />
        <Page header={SiteHeader} sidebar={sideNav ? <PageSidebar nav={sideNav} isNavOpen /> : null}>
          {tertiaryNav && <PageSection variant={PageSectionVariants.light}>
            {tertiaryNav}
          </PageSection>}
          {this.props.children}
        </Page>}
      </>} />);
  }

}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  tertiaryNav: PropTypes.node,
  sideNav: PropTypes.node,
  activeNavItem: PropTypes.number
}

Layout.defaultProps = {
  tertiaryNav: null,
  sideNav: null,
  activeNavItem: 0
};

export default Layout
