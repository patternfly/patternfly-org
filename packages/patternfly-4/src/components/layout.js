import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql, withPrefix, Link } from 'gatsby';
import Header from './header';
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
import { canUseDOM } from 'exenv';

class Layout extends React.Component {
  render() {
    const { tertiaryNav, sideNav } = this.props;
    const PageNav = (
      <Location>
        {({ location }) => {
          // console.log(location);
          const currentPath = location.pathname;
          return (
            <Nav aria-label="Nav">
              <NavList variant={NavVariants.horizontal}>
                <NavItem isActive={currentPath.indexOf('/get-started/') > -1}>
                  <Link to="/get-started/about">Get Started</Link>
                </NavItem>
                <NavItem isActive={currentPath.indexOf('/design-guidelines/') > -1}>
                  <Link to="/design-guidelines/styles/icons">Design Guidelines</Link>
                </NavItem>
                <NavItem isActive={currentPath.indexOf('/documentation/') > -1}>
                  <Link to="/documentation/react">Documentation</Link>
                </NavItem>
                <NavItem isActive={currentPath.indexOf('/css-variables/') > -1}>
                  <Link to="/css-variables/">CSS Variables</Link>
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
        showNavToggle={sideNav !== null}
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
    `} render={data => canUseDOM && <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <BackgroundImage src={bgImages} />
        <Page isManagedSidebar={sideNav !== null} style={{height: '100vh'}} header={SiteHeader} sidebar={sideNav ? <PageSidebar nav={sideNav} /> : null}>
          {tertiaryNav && <PageSection variant={PageSectionVariants.light}>
            {tertiaryNav}
          </PageSection>}
          {this.props.children}
        </Page>
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
