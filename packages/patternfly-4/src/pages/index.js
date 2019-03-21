import React from 'react';
import Layout from '../components/layout';
import './styles.scss';
import './footer.scss';
import SEO from '../components/seo';
import { Link } from 'gatsby';
import {
  Grid,
  GridItem,
  Nav,
  NavList,
  NavItem,
  PageSection,
  PageSectionVariants,
  Title,
  TextContent,
  Text,
  TextVariants
} from '@patternfly/react-core';
import { CaretRightIcon } from '@patternfly/react-icons';
import orb from '../images/PF4_logo.svg';
import patternflyLogo from '../images/l_pf-reverse-164x11.png';
import pf4hardware from '../images/PF4hardware.svg';
import principles from '../images/PF4_WIREFRAME.png';
import redhatLogo from '../images/RHLogo.svg';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <PageSection variant={PageSectionVariants.light} className="pf4-c-background-image pf-u-display-flex pf-u-justify-content-center pf-u-align-items-center">
      <Grid>
        <GridItem sm={12} md={8} mdOffset={2} lg={6} lgOffset={3} className="pf-u-py-2xl pf-u-text-align-center">
          <TextContent>
            <img src={orb} alt="PatternFly logo" />
            <Title size="4xl" className="pf-m-white">Build better experiences with repeatable, scalable design.</Title>
            <Title size="xl" className="pf-m-white pf-u-mb-md pf-u-mb-3xl-on-md">PatternFly 4 is an open source design system built to drive consistency and unify teams.</Title>
            <div class="pf-u-display-flex pf-u-justify-content-center pf-u-flex-direction-column pf-u-flex-direction-row-on-md">
              <a href="/get-started/about" type="button" className="pf-c-button pf4-c-button__cta-primary pf-u-mr-0 pf-u-mb-md pf-u-mb-0-on-md pf-u-mr-xl-on-md" aria-label="Get started with PatternFly">Get Started</a>
              <a href="#AboutPatternFly4" type="button" className="pf-c-button pf4-c-button__cta-outline" aria-label="Why PatternFly 4">Why PatternFly 4</a>
            </div>
          </TextContent>
        </GridItem>
      </Grid>
    </PageSection>
    <PageSection variant={PageSectionVariants.light}>
      <Grid>
        <GridItem sm={12} md={4} mdOffset={4} className="pf-u-text-align-center">
          <Title size="4xl" id="AboutPatternFly4" className="pf-u-mb-md">About PatternFly 4</Title>
          <Title size="lg">We provide tools like design documentation, components, and code examples to make it possible for anyone to design and build responsive, accessible user experiences.</Title>
        </GridItem>
      </Grid>
    </PageSection>
    <PageSection variant={PageSectionVariants.light} className="pf4-c-background-lines">
      <Grid gutter="md" className="pf-u-pb-3xl">
        <GridItem sm={12}>
          <Grid>
            <GridItem sm={12} md={4} mdOffset={2}>
              <TextContent>
                <div className="pf-u-pb-2xl">
                  <Text component={TextVariants.h2}>Make better decisions with clear guidance</Text>
                  <Text component={TextVariants.p}>Design guidelines supply the foundation of the system. Get acquainted with our approach to icons, color, content, and more.</Text>
                  <Text component={TextVariants.a} href="/design-guidelines/styles/icons" aria-label="view design guidelines" className="pf-u-pl-0 pf4-c-link__text">View design guidelines <CaretRightIcon />
                  </Text>
                </div>
                <div className="pf-u-pb-2xl">
                  <Text component={TextVariants.h2}>Start building with components</Text>
                  <Text component={TextVariants.p}>Components are like building blocks. Designed to be flexible and modular, you can mix and match to create a solution for almost any UI problem.</Text>
                  <Text component={TextVariants.a} href="/documentation/react/components/alert" aria-label="view components" className="pf-u-pl-0 pf4-c-link__text">View components <CaretRightIcon />
                  </Text>
                </div>
                <div className="pf-u-pb-2xl">
                  <Text component={TextVariants.h2}>Stay aligned with layouts</Text>
                  <Text component={TextVariants.p}>Layouts provide fully responsive page structure that keeps your components organized and aligned regardless of screen size.</Text>
                  <Text component={TextVariants.a} href="/documentation/react/layouts/bullseye" aria-label="view layouts" className="pf-u-pl-0 pf4-c-link__text">View layouts <CaretRightIcon />
                  </Text>
                </div>
                <div className="pf-u-pb-2xl">
                  <Text component={TextVariants.h2}>Get inspired with demos</Text>
                  <Text component={TextVariants.p}>Explore working examples of common UI elements like forms to see how components and layouts can be combined to solve common design problems.</Text>
                  <Text component={TextVariants.a} href="/documentation/react/demos/pagelayout" aria-label="view demos" className="pf-u-pl-0 pf4-c-link__text">View demos <CaretRightIcon />
                  </Text>
                </div>
              </TextContent>
            </GridItem>
            <GridItem sm={12} md={6}>
              <Grid>
                <GridItem smOffset={1} className="pf-u-text-align-center">
                  <img src={pf4hardware} alt="hardware" className="pf-c-image" />
                </GridItem>
              </Grid>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </PageSection>
    <PageSection variant={PageSectionVariants.darker} className="pf4-c-background-image-principles">
      <Grid gutter="md" className="pf-u-py-3xl">
        <GridItem sm={12}>
          <Grid className="pf-m-white">
            <GridItem sm={12} md={5} mdOffset={1}>
              <TextContent>
                <Title size="4xl" className="pf-u-mb-md pf-m-white">PatternFly 4 principles</Title>
                <Text component={TextVariants.h2}>Module &amp; flexible</Text>
                <Text component={TextVariants.p} className="pf-u-mb-3xl">Arrange self-contained components in any number of ways to build a variety of applications and interfaces. You can also use the CSS variable system to customize styles across a website or interface.</Text>
                <Text component={TextVariants.h2}>Accessible</Text>
                <Text component={TextVariants.p} className="pf-u-mb-3xl">Take advantage of accessible markup and guidance. Because building applications that work for everyone, regardless of ability, is just the right thing to do.</Text>
                <Text component={TextVariants.h2}>Built for teams, built to scale</Text>
                <Text component={TextVariants.p} className="pf-u-mb-3xl">Unify design and development with a set of clear guidelines and tools to help streamline communication and build more consistent user experiences.</Text>
                <div className="pf-u-pb-md">
                  <Text component={TextVariants.a} href="/get-started/developers" className="pf-m-white pf4-c-link__text" aria-label="Get started for developer">Get started for developers <CaretRightIcon />
                  </Text>
                </div>
                <div className="pf-u-pb-md">
                  <Text component={TextVariants.a} href="/get-started/designers" className="pf-m-white pf4-c-link__text" aria-label="Get started for designers">Get started for designers <CaretRightIcon />
                  </Text>
                </div>
              </TextContent>
            </GridItem>
            <GridItem sm={12} md={5} className="pf-u-mt-lg pf-u-mt-0-on-sm pf-u-text-align-center pf-u-text-align-right-on-md pf-u-text-align-right-on-md">
              <img src={principles} alt="PatternFly 4 principles image" className="pf-c-image" />
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </PageSection>
    <PageSection className="pf4-l-footer">
      <Grid className="pf-u-py-xl-on-sm pf-u-py-0-on-md">
        <GridItem md={5} mdOffset={1} className="pf-u-mb-lg pf-u-mb-0-on-sm">
          <Grid className="pf-u-py-xl-on-sm pf-u-py-8-on-md">
            <GridItem span={6} sm={4}>
              <Title size="md" className="pf-m-white">QUICKLINKS</Title>
              <Nav aria-label="Quick Links" className="pf-m-white">
                <NavList className="pf-c-nav__list-footer">
                  <NavItem to="/get-started" aria-label="Get started with PatternFly 4">
                    Get started
                  </NavItem>
                  <NavItem to="/documentation/react/components/alert" aria-label="PatternFly 4 components">
                    Components
                  </NavItem>
                  <NavItem to="/documentation/react/layouts/bullseye" aria-label="PatternFly 4 layouts">
                    Layouts
                  </NavItem>
                  <NavItem to="design-guidelines/styles/icons" aria-label="PatternFly 4 styles">
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
              <Nav aria-label="Quick Links">
                <NavList className="pf-c-nav__list-footer">
                  <NavItem to="/get-started/designers" aria-label="How to contribute as a Designer">
                    Designers
                  </NavItem>
                  <NavItem to="/get-started/developers" aria-label="How to contribute as a Developer">
                    Developers
                  </NavItem>
                  <NavItem to="https://github.com/patternfly/patternfly/blob/master/CODE_OF_CONDUCT.md" target="top" aria-label="PatternFly 4 Code of Conduct">
                    Code of Conduct
                  </NavItem>
                </NavList>
              </Nav>
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem md={5}>
          <Grid className="pf-u-py-xl-on-sm pf-u-py-8-on-md">
            <GridItem md={7} mdOffset={5} className="pf4-l-footer-column pf-u-p-lg">
              <img src={patternflyLogo} alt="PatternFly logo" className="pf-u-pb-lg" />
              <p className="pf-m-white pf-u-pb-lg">
                PatternFly is an open source design system built to drive consistency and unify teams. We provide tools like design documentation, components, and code examples to make it possible for anyone to design and build responsive, accessible web applications.
              </p>
              <Text component={TextVariants.a} href="https://www.facebook.com/groups/PatternFlyCommunity/" target="top" aria-label="Link to PatternFly Facebook page">
                <i class="fab fa-facebook"></i>
              </Text>
              <Text component={TextVariants.a} href="https://github.com/patternfly/patternfly" target="top" aria-label="Link to PatternFly GitHub page">
                <i class="fab fa-github"></i>
              </Text>
              <Text component={TextVariants.a} href="https://twitter.com/patternfly_des" target="top" aria-label="Link to PatternFly Twitter page">
                <i class="fab fa-twitter"></i>
              </Text>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </PageSection>
    <PageSection className="pf4-l-footer-dark">
      <Grid className="pf-u-py-xl-on-sm pf-u-py-0-on-md pf-u-align-items-center">
        <GridItem md={3} mdOffset={1}>
          <Text component={TextVariants.a} href="https://www.redhat.com" target="top" aria-label="Visit Red Hat.com">
            <img src={redhatLogo} alt="Red Hat logo" />
          </Text>
        </GridItem>
        <GridItem md={2}>
          Copyright &copy; 2019 Red Hat, Inc.
        </GridItem>
        <GridItem md={4}>
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
  </Layout>
)

export default IndexPage
