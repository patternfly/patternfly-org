import React from 'react';
import './footer.scss';
import {
  Grid,
  GridItem,
  Nav,
  NavItem,
  NavList,
  PageSection,
  Text, TextVariants,
  Title
} from '@patternfly/react-core';
import { withPrefix } from 'gatsby';
import patternflyLogo from '../../images/l_pf-reverse-164x11.png';
import redhatLogo from '../../images/RHLogo.svg';

class Footer extends React.Component {
  render() {
    return (
      <div>
        <PageSection className="pf4-l-footer pf-u-py-md pf-u-py-0-on-sm">
          <Grid className="pf-u-py-xl-on-sm pf-u-py-0-on-md">
            <GridItem md={5} mdOffset={1} className="pf-u-mb-lg pf-u-mb-0-on-sm">
              <Grid className="pf-u-py-xl-on-sm pf-u-py-8-on-md">
                <GridItem span={6} sm={4} className="pf-u-ml-md pf-u-ml-0-on-md">
                  <Title size="md" className="pf-m-white">QUICKLINKS</Title>
                  <Nav aria-label="Quick Links" className="pf-m-white">
                    <NavList className="pf-c-nav__list-footer">
                      <NavItem to={withPrefix('/get-started')} aria-label="Get started with PatternFly 4">
                        Get started
                      </NavItem>
                      <NavItem to={withPrefix('/documentation/react/components')} aria-label="PatternFly 4 components">
                        Components
                      </NavItem>
                      <NavItem to={withPrefix('/documentation/react/layouts')} aria-label="PatternFly 4 layouts">
                        Layouts
                      </NavItem>
                      <NavItem to={withPrefix('/design-guidelines/styles')} aria-label="PatternFly 4 styles">
                        Styles
                      </NavItem>
                      <NavItem to="https://www.patternfly.org" target="top" aria-label="View the PatternFly 3 website">
                        PatternFly 3
                      </NavItem>
                    </NavList>
                  </Nav>
                </GridItem>
                <GridItem span={6} sm={4}>
                  <Title size="md" className="pf-m-white">CONTRIBUTE</Title>
                  <Nav aria-label="Contribute">
                    <NavList className="pf-c-nav__list-footer">
                      <NavItem to={withPrefix('/get-started/designers')} aria-label="How to contribute as a Designer">
                        Designers
                      </NavItem>
                      <NavItem to={withPrefix('/get-started/developers')} aria-label="How to contribute as a Developer">
                        Developers
                      </NavItem>
                      <NavItem to="https://github.com/patternfly/patternfly/blob/master/CODE_OF_CONDUCT.md" target="top" aria-label="PatternFly 4 Code of Conduct">
                        Code of Conduct
                      </NavItem>
                    </NavList>
                  </Nav>
                </GridItem>
                <GridItem span={6} sm={4} className="pf-u-ml-md pf-u-ml-0-on-md">
                  <Title size="md" className="pf-m-white pf-u-mt-lg pf-u-mt-0-on-sm">STAY IN TOUCH</Title>
                  <Nav aria-label="Stay in touch" className="pf-m-white">
                    <NavList className="pf-c-nav__list-footer">
                      <NavItem to="https://forum.patternfly.org" target="top" aria-label="Visit the PatternFly 4 forum">
                        Forum
                      </NavItem>
                      <NavItem to="https://www.redhat.com/mailman/listinfo/patternfly" target="top" aria-label="Message the PatternFly 4 mailing list">
                        Mailing list
                      </NavItem>
                    </NavList>
                  </Nav>
                </GridItem>
              </Grid>
            </GridItem>
            <GridItem md={5}>
              <Grid className="pf-u-py-xl-on-sm pf-u-py-0-on-md">
                <GridItem sm={12} md={10} lg={8} xl={6} mdOffset={2} lgOffset={4} xlOffset={6} className="pf4-l-footer-column pf-u-p-lg pf-u-pl-xl">
                  <img src={patternflyLogo} alt="PatternFly logo" className="pf-u-pb-lg" />
                  <p className="pf-m-white pf-u-pb-lg">
                    PatternFly is an open source design system built to drive consistency and unify teams. We provide tools like design documentation, components, and code examples to make it possible for anyone to design and build responsive, accessible web applications.
                  </p>
                  <Text component={TextVariants.a} href="https://github.com/patternfly/patternfly" target="top" aria-label="Link to PatternFly GitHub page">
                    <i className="fab fa-github"></i>
                  </Text>
                  <Text component={TextVariants.a} href="https://twitter.com/patternfly_des" target="top" aria-label="Link to PatternFly Twitter page">
                    <i className="fab fa-twitter"></i>
                  </Text>
                </GridItem>
              </Grid>
            </GridItem>
          </Grid>
        </PageSection>
        <PageSection className="pf4-l-footer-dark">
          <Grid className="pf-u-py-xl-on-sm pf-u-py-0-on-md pf-u-align-items-center">
            <GridItem md={2} mdOffset={1}>
              <Text component={TextVariants.a} href="https://www.redhat.com" target="top" aria-label="Visit Red Hat.com">
                <img src={redhatLogo} alt="Red Hat logo" />
              </Text>
            </GridItem>
            <GridItem md={4} lg={3} xl={2}>
              <span className="pf4-site-copyright">Copyright &copy; 2019 Red Hat, Inc.</span>
            </GridItem>
            <GridItem md={4} lg={5} className="pf-u-ml-xl-on-xl">
              <Text component={TextVariants.a} href="https://www.redhat.com/en/about/privacy-policy" target="top" aria-label="Privacy statement">
                Privacy Statement
              </Text>
              <Text component={TextVariants.a} href="https://www.redhat.com/en/about/terms-use" target="top" aria-label="Terms of use">
                Terms of use
              </Text>
              <Text component={TextVariants.a} href="https://www.redhat.com/en/about/all-policies-guidelines" target="top" aria-label="All policies and guidelines">
                All policies and guidelines
              </Text>
            </GridItem>
          </Grid>
        </PageSection>
      </div>
    );
  }
}

export default Footer;
