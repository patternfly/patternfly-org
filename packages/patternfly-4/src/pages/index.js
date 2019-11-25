import React from 'react';
import { Link } from 'gatsby';
import SideNavLayout from 'gatsby-theme-patternfly-org/layouts/sideNavLayout';
import {
  Grid,
  GridItem,
  PageSection,
  PageSectionVariants,
  Title,
  TextContent,
  Text,
  TextVariants
} from '@patternfly/react-core';
import { ArrowRightIcon } from '@patternfly/react-icons';
import orb from '../images/pf4-logo.svg';
import principles from '../images/pf4-wireframe.png';
import AutoLinkHeader from 'gatsby-theme-patternfly-org/components/autoLinkHeader';
import './homepage.css';

const aboutPatternFly = 'About PatternFly';
const patternFlyPrinciples = 'PatternFly principles';

const IndexPage = ({ location }) => (
  <SideNavLayout location={location} hideSideNav>
    <PageSection
      variant={PageSectionVariants.light}
      className="pf4-c-background-image pf-u-display-flex pf-u-justify-content-center pf-u-align-items-center ws-homepage-main-section"
    >
      <Grid>
        <GridItem sm={12} md={8} mdOffset={2} lg={6} lgOffset={3} className="pf-u-py-2xl pf-u-text-align-center">
          <TextContent>
            <img src={orb} alt="PatternFly logo" className="fadeInDown animated fadeInOne" />
            <Title size="4xl" className="pf-m-white pf4-site-c-hero fadeIn animated fadeInTwo">
              Build better experiences with repeatable, scalable design.
            </Title>
            <Title size="xl" className="pf-m-white pf-u-mb-md pf-u-mb-3xl-on-md fadeInUp animated fadeInThree">
              PatternFly is an open source design system built to drive consistency and unify teams.
            </Title>
            <div className="pf-u-display-flex pf-u-justify-content-center pf-u-flex-direction-column pf-u-flex-direction-row-on-md">
              <Link
                to="/get-started/about"
                type="button"
                className="pf-c-button pf4-c-button__cta-primary pf-u-mr-0 pf-u-mb-md pf-u-mb-0-on-md pf-u-mr-xl-on-md fadeIn animated fadeInFour"
                aria-label="Get started with PatternFly"
              >
                Get started
              </Link>
              <a
                href="#about-patternfly"
                type="button"
                className="pf-c-button pf4-c-button__cta-outline fadeIn animated fadeInFour"
                aria-label="Why PatternFly"
              >
                Why PatternFly
              </a>
            </div>
          </TextContent>
        </GridItem>
      </Grid>
    </PageSection>
    <PageSection variant={PageSectionVariants.light} className="ws-homepage-main-section">
      <Grid>
        <GridItem sm={12} md={6} mdOffset={3} className="pf-u-py-2xl pf-u-text-align-center" id="about-patternfly-section">
          <AutoLinkHeader size="h1" className="ws-title pf-u-mb-md">
            {aboutPatternFly}
          </AutoLinkHeader>
          <Text component={TextVariants.p} className="ws-mdx-p">
            We provide tools like design documentation, components, and code examples to make it possible for anyone to
            design and build responsive, accessible user experiences.
          </Text>
        </GridItem>
      </Grid>
    </PageSection>
    <PageSection variant={PageSectionVariants.light} className="pf4-c-background-lines ws-homepage-main-section">
      <Grid gutter="md" className="pf-u-pb-3xl-on-sm">
        <GridItem sm={12}>
          <Grid>
            <GridItem
              sm={12}
              md={4}
              mdOffset={1}
              lgOffset={2}
              className="pf-u-display-flex pf-u-display-block-on-sm pf-u-flex-direction-column pf-u-pt-2xl pf-u-pt-0-on-sm"
            >
              <TextContent>
                <div className="pf-u-pb-2xl">
                  <Text component={TextVariants.h2}>Make better decisions with clear guidance</Text>
                  <Text component={TextVariants.p} className="ws-mdx-p">
                    Design guidelines supply the foundation of the system. Get acquainted with our approach to icons,
                    color, content, and more.
                  </Text>
                  <Text
                    component={TextVariants.a}
                    aria-label="view design guidelines"
                    className="pf-u-pl-0 pf4-c-link__text ws-mdx-a"
                  >
                    <Link to="/design-guidelines/styles/colors">
                      View design guidelines <ArrowRightIcon />
                    </Link>
                  </Text>
                </div>
                <div className="pf-u-pb-2xl">
                  <Text component={TextVariants.h2}>Stay aligned with layouts</Text>
                  <Text component={TextVariants.p} className="ws-mdx-p">
                    A layout provides a fully responsive page structure that keeps your components organized and aligned
                    regardless of screen size.
                  </Text>
                  <Text
                    component={TextVariants.a}
                    aria-label="view layouts"
                    className="pf-u-pl-0 pf4-c-link__text ws-mdx-a"
                  >
                    <Link to="/documentation/react/layouts/bullseye">
                      View layouts <ArrowRightIcon />
                    </Link>
                  </Text>
                </div>
                <div className="pf-u-pb-2xl">
                  <Text component={TextVariants.h2}>Start building with components</Text>
                  <Text component={TextVariants.p} className="ws-mdx-p">
                    Components are like building blocks. Designed to be flexible and modular, you can mix and match to
                    create a solution for almost any UI problem.
                  </Text>
                  <Text
                    component={TextVariants.a}
                    aria-label="view components"
                    className="pf-u-pl-0 pf4-c-link__text ws-mdx-a"
                  >
                    <Link to="/documentation/react/components/aboutmodal">
                      View components <ArrowRightIcon />
                    </Link>
                  </Text>
                </div>
                <div className="pf-u-pb-2xl">
                  <Text component={TextVariants.h2}>Get inspired with demos</Text>
                  <Text component={TextVariants.p} className="ws-mdx-p">
                    Explore working examples of common UI elements like forms to see how components and layouts can be
                    combined to solve common design problems.
                  </Text>
                  <Text
                    component={TextVariants.a}
                    aria-label="view demos"
                    className="pf-u-pl-0 pf4-c-link__text ws-mdx-a"
                  >
                    <Link to="/documentation/react/demos/bulkselecttable">
                      View demos <ArrowRightIcon />
                    </Link>
                  </Text>
                </div>
              </TextContent>
            </GridItem>
            <GridItem sm={12} md={6}>
              <div type="image/svg+xml" className="pf4-c-image__laptop" aria-label="laptop image" />
              <div type="image/svg+xml" className="pf4-c-image__phone" aria-label="phone image" />
              <div type="image/svg+xml" className="pf4-c-image__screen" aria-label="screen image" />
              <div type="image/svg+xml" className="pf4-c-image__desktop" aria-label="desktop image" />
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </PageSection>
    <PageSection variant={PageSectionVariants.darker} className="pf4-c-background-image-principles ws-homepage-main-section">
      <Grid gutter="md" className="pf-u-py-3xl">
        <GridItem sm={12}>
          <Grid className="pf-m-white">
            <GridItem sm={12} md={5} mdOffset={1}>
              <TextContent>
                <Text component={TextVariants.h1} className="pf-u-mb-4xl pf-m-white" id="patternfly-principles">
                  {patternFlyPrinciples}
                </Text>
                <Text component={TextVariants.h2}>Modular &amp; flexible</Text>
                <Text component={TextVariants.p} className="pf-u-mb-3xl ws-mdx-p">
                  Arrange self-contained components in any number of ways to build a variety of applications and
                  interfaces. You can also use the CSS variable system to customize styles across a website or
                  interface.
                </Text>
                <Text component={TextVariants.h2}>Accessible</Text>
                <Text component={TextVariants.p} className="pf-u-mb-3xl ws-mdx-p">
                  Take advantage of accessible markup and guidance. Because building applications that work for
                  everyone, regardless of ability, is just the right thing to do.
                </Text>
                <Text component={TextVariants.h2}>Built for teams, built to scale</Text>
                <Text component={TextVariants.p} className="pf-u-mb-3xl ws-mdx-p">
                  Unify design and development with a set of clear guidelines and tools to help streamline communication
                  and build more consistent user experiences.
                </Text>
                <div className="pf-u-pb-md">
                  <Link
                    to="/get-started/developers"
                    className="pf-m-white pf4-c-link__text ws-mdx-a"
                    aria-label="Get started for developer"
                    >
                      Get started for developers <ArrowRightIcon />
                  </Link>
                </div>
                <div className="pf-u-pb-md">
                    <Link
                      to="/get-started/designers"
                      className="pf-m-white pf4-c-link__text ws-mdx-a"
                      aria-label="Get started for designers"
                    >
                      Get started for designers <ArrowRightIcon />
                    </Link>
                </div>
              </TextContent>
            </GridItem>
            <GridItem
              sm={12}
              md={5}
              className="pf-u-mt-lg pf-u-mt-0-on-sm pf-u-text-align-center pf-u-text-align-right-on-md pf-u-text-align-right-on-md"
            >
              <img
                src={principles}
                alt="PatternFly 4 principles image"
                className="pf4-c-image__principles pf-u-ml-lg-on-md"
              />
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </PageSection>
  </SideNavLayout>
);

export default IndexPage;
