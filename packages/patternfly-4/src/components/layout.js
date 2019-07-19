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
  TextInput,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownSeparator,
} from '@patternfly/react-core';
import { Location } from '@reach/router';
import brandImg from '../images/PatternFly_logo.svg';
import Banner from './banner';
import axios from 'axios';
import './layout.scss';

class Layout extends React.Component {

  constructor(props) {
    super(props);

    // Retrieve the last state
    this.state = {
      isBannerOpen: false,
      isExpanded: false,
      sections: require('../../static/versions.json')
    };
  }

  componentDidMount() {
    // eslint-disable-next-line no-undef
    if (window.docsearch) {
      window.docsearch({
        apiKey: '06941733239da4f8617d272cf2ed4d5c',
        indexName: 'patternfly',
        inputSelector: '#global-search-input',
        debug: false // Set debug to true if you want to inspect the dropdown
      });
      this.setState({ isBannerOpen: sessionStorage.getItem('pf4-banner-closed') });
      axios.get('/versions.json')
        .then(({ data }) => this.setState({ sections: data }));
    } else {
      console.warn('Search has failed to load');
    }
  }

  onLogoClick = () => {
    navigate('/');
  }

  closeBanner = () => {
    sessionStorage.setItem('pf4-banner-closed', true);
    this.setState({
      isBannerOpen: false
    })
  };

  onToggle = () => {
    this.setState({isExpanded: !this.state.isExpanded});
  }

  render() {
    const { tertiaryNav, sideNav } = this.props;
    const { isBannerOpen, isExpanded, sections } = this.state;

    return (<StaticQuery query={graphql`
      query SiteTitleQuery {
        site {
          pathPrefix
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
      const versions = Object.values(sections).reduce((acc, cur) => acc.concat(cur), []);
      let curVersion = versions.find(v => data.site.pathPrefix.includes(v.date));
      let dropdownItems = versions.map(release =>
        <DropdownItem
          key={release.name}
          component="a"
          href={`/${release.latest ? 'v4' : release.date}`}
        >
          {release.latest ? 'Latest' : release.name} ({release.date})
        </DropdownItem>
      );
      dropdownItems = dropdownItems.concat([
        <DropdownSeparator key="separator" />,
        <DropdownItem key="versions" component={Link} to={`/versions`}>
          All Versions
        </DropdownItem>
      ]);
      const PageToolbar = (
        <Toolbar>
          <ToolbarGroup>
            <ToolbarItem style={{marginRight: '24px'}}>
              <Dropdown
                onSelect={this.onSelect}
                toggle={
                  <DropdownToggle onToggle={this.onToggle}>
                    {curVersion ? `${curVersion.latest ? 'Latest' : curVersion.name} (${curVersion.date})` : 'Development'}
                  </DropdownToggle>}
                isOpen={isExpanded}
                dropdownItems={dropdownItems}
                />
            </ToolbarItem>
            <ToolbarItem>
              <Form className="ws-search pf-site-search" onSubmit={event => { event.preventDefault(); return false; }}>
                <TextInput
                  type="text"
                  id="global-search-input"
                  className="pf-site-search-input"
                  name="global-search-input"
                  placeholder="Search"
                />
                <span className="search-icon"></span>
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
            <React.Fragment>
            {isBannerOpen && <Banner onClose={this.closeBanner} />}
            <Header siteTitle={data.site.siteMetadata.title} />
            <Page isManagedSidebar={sideNav !== null} header={SiteHeader} sidebar={sideNav ? <PageSidebar nav={sideNav} /> : null}>
              {tertiaryNav && <PageSection variant={PageSectionVariants.light}>
                {tertiaryNav}
              </PageSection>}
              {this.props.children}
            </Page>
            <Footer></Footer>
          </React.Fragment>
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
