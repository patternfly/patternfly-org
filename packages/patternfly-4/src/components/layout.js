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
import './layout.css';

class Layout extends React.Component {
  render() {
    const { tertiaryNav, sideNav } = this.props;

    return (<StaticQuery query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        allMainNavigationJson {
          edges {
            node {
              text
              path
            }
          }
        }
      }
    `} render={data => {
      const PageNav = (
        <Location>
          {({ location }) => {
            // console.log(location);
            const currentPath = location.pathname;
            return (
              <Nav aria-label="Nav">
                <NavList variant={NavVariants.horizontal}>
                  {data.allMainNavigationJson.edges.map(item => {
                    const { node } = item;
                    const startPath = `/${node.path.split('/')[1]}/`;
                    return (
                      <NavItem key={node.path} isActive={currentPath.indexOf(startPath) > -1}>
                        <Link to={node.path}>{node.text}</Link>
                      </NavItem>
                    )
                  })}
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

      return (
        <>
          <Header siteTitle={data.site.siteMetadata.title} />
          <BackgroundImage src={bgImages} />
          <Page isManagedSidebar={sideNav !== null} header={SiteHeader} sidebar={sideNav ? <PageSidebar nav={sideNav} /> : null}>
            {tertiaryNav && <PageSection variant={PageSectionVariants.light}>
              {tertiaryNav}
            </PageSection>}
            {this.props.children}
          </Page>
        </>
      )
      }} />);
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
