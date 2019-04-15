import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql, Link, navigate } from 'gatsby';
import Header from './header';
import Footer from './footer/footer';
import {
  Brand,
  Nav,
  NavItem,
  NavList,
  NavVariants,
  Page,
  PageHeader,
  PageSection,
  PageSectionVariants,
  PageSidebar,
  Toolbar,
  ToolbarGroup,
  ToolbarItem,
  Form,
  TextInput
} from '@patternfly/react-core';
import { Location } from '@reach/router';
import brandImg from '../images/PatternFly_logo.svg';
import Banner from './banner';
import './layout.scss';

// Set initial state
let state = { isBannerOpen: true };

class Layout extends React.Component {

  constructor(props) {
    super(props);

    // Retrieve the last state
    this.state = state;
  }

  componentWillUnmount() {
    // Remember state for the next mount
    state = this.state;
  }

  closeBanner = () => {
    this.setState({
      isBannerOpen: false
    })
  };

  componentDidMount() {
    // eslint-disable-next-line no-undef
    if (window.docsearch) {
      window.docsearch({
        apiKey: '06941733239da4f8617d272cf2ed4d5c',
        indexName: 'patternfly',
        inputSelector: '#global-search-input',
        debug: true // Set debug to true if you want to inspect the dropdown
      });
    } else {
      console.warn('Search has failed to load');
    }
  }

  onLogoClick = () => {
    navigate('/');
  }

  render() {
    const { tertiaryNav, sideNav } = this.props;
    const { isBannerOpen } = this.state;

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
      const PageToolbar = (
        <Toolbar>
          <ToolbarGroup>
            <ToolbarItem>
              <Form className="ws-search" onSubmit={event => { event.preventDefault(); return false; }}>
                <TextInput
                  type="text"
                  id="global-search-input"
                  name="global-search-input"
                  placeholder="Search"
                />
              </Form>
            </ToolbarItem>
          </ToolbarGroup>
        </Toolbar>
      );
      const logoProps = {
        onClick: this.onLogoClick
      };
      const SiteHeader = (
        <PageHeader
          className="pf4-site-header"
          showNavToggle={sideNav !== null}
          logoProps={logoProps}
          logo={<Brand src={brandImg} alt="PatternFly Logo"/>}
          topNav={PageNav}
          toolbar={PageToolbar}
        />
      );

      return (
        <Location>
          {({ location }) => (
            <>
            {isBannerOpen && location.pathname === '/v4/' && <Banner onClose={this.closeBanner} />}
            <Header siteTitle={data.site.siteMetadata.title} />
            <Page isManagedSidebar={sideNav !== null} header={SiteHeader} sidebar={sideNav ? <PageSidebar nav={sideNav} /> : null}>
              {tertiaryNav && <PageSection variant={PageSectionVariants.light}>
                {tertiaryNav}
              </PageSection>}
              {this.props.children}
            </Page>
            <Footer></Footer>
          </>
        )}
        </Location>
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
