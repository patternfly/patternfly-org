import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, withPrefix, Link } from 'gatsby'

// import './layout.css'
import '@patternfly/react-core/dist/styles/base.css'

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
  PageSidebar,
  Toolbar,
  ToolbarGroup,
  ToolbarItem,
  Switch
} from '@patternfly/react-core';

import brandImg from './l_pf-reverse-164x11.png';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: true,
      activeItem: 0
    };
  }

  handleChange = isChecked => {
    this.setState({ isChecked });
  };

  onNavSelect = result => {
    this.setState({
      activeItem: result.itemId
    });
  };

  render() {
    const { activeItem, isChecked } = this.state;
    const { sideNav } = this.props;
    const PageNav = (
      <Nav onSelect={this.onNavSelect} aria-label="Nav">
        <NavList variant={NavVariants.horizontal}>
          <NavItem to="#nav-link1" itemId={0} isActive={activeItem === 0}>
            Page 1
          </NavItem>
          <NavItem itemId={1} isActive={activeItem === 1}>
            <Link to="/page-2/">Go to page 2</Link>
          </NavItem>
          <NavItem itemId={2} isActive={activeItem === 2}>
            <Link to="/docs/">Docs</Link>
          </NavItem>
          <NavItem to="#nav-link4" itemId={3} isActive={activeItem === 3}>
            Network Services
          </NavItem>
          <NavItem to="#nav-link5" itemId={4} isActive={activeItem === 4}>
            Server
          </NavItem>
        </NavList>
      </Nav>
    );
    const bgImages = {
      [BackgroundImageSrc.lg]: withPrefix('/img/pfbg_1200.jpg'),
      [BackgroundImageSrc.sm]: withPrefix('/img/pfbg_768.jpg'),
      [BackgroundImageSrc.sm2x]: withPrefix('/img/pfbg_768@2x.jpg'),
      [BackgroundImageSrc.xl]: withPrefix('/img/pfbg_2000.jpg'),
      [BackgroundImageSrc.filter]: withPrefix('/img/background-filter.svg#image_overlay')
    };
    const PageToolbar = (
      <Toolbar>
        <ToolbarGroup>
          <ToolbarItem>
            <Switch
              id="simple-switch"
              label={isChecked ? 'React' : 'Core'}
              isChecked={isChecked}
              onChange={this.handleChange}
              aria-label="simple Switch example"
            />
          </ToolbarItem>
        </ToolbarGroup>
      </Toolbar>
    );
    const SiteHeader = (
      <PageHeader
        logo={<Brand src={brandImg} alt="Patternfly Logo" />}
        toolbar={PageToolbar}
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
        <BackgroundImage src={bgImages} />
        <Page header={SiteHeader} sidebar={sideNav ? <PageSidebar nav={sideNav} isNavOpen /> : null}>
          <PageSection variant={PageSectionVariants.light}>
            {this.props.children}
          </PageSection>
        </Page>
      </>} />);
  }

}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  sideNav: PropTypes.node
}

export default Layout
