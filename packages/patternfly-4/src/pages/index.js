import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
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
import { withPrefix } from 'gatsby';
import { ArrowRightIcon } from '@patternfly/react-icons';
import orb from '../images/PF4_logo.svg';
import principles from '../images/PF4_WIREFRAME.png';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <PageSection variant={PageSectionVariants.light} className="pf4-c-background-image pf-u-display-flex pf-u-justify-content-center pf-u-align-items-center">
      <Grid>
        <GridItem sm={12} md={8} mdOffset={2} lg={6} lgOffset={3} className="pf-u-py-2xl pf-u-text-align-center">
          <TextContent>
            <img src={orb} alt="PatternFly logo" className="fadeInDown animated fadeInOne" />
            <Title size="4xl" className="pf-m-white pf4-site-c-hero fadeIn animated fadeInTwo">Build better experiences with repeatable, scalable design.</Title>
            <Title size="xl" className="pf-m-white pf-u-mb-md pf-u-mb-3xl-on-md fadeInUp animated fadeInThree">PatternFly 4 is an open source design system built to drive consistency and unify teams.</Title>
            <div class="pf-u-display-flex pf-u-justify-content-center pf-u-flex-direction-column pf-u-flex-direction-row-on-md">
              <a href={withPrefix('/get-started/about')} type="button" className="pf-c-button pf4-c-button__cta-primary pf-u-mr-0 pf-u-mb-md pf-u-mb-0-on-md pf-u-mr-xl-on-md fadeIn animated fadeInFour" aria-label="Get started with PatternFly">Get started</a>
              <a href="#AboutPatternFly4" type="button" className="pf-c-button pf4-c-button__cta-outline fadeIn animated fadeInFour" aria-label="Why PatternFly 4">Why PatternFly 4</a>
            </div>
          </TextContent>
        </GridItem>
      </Grid>
    </PageSection>
    <PageSection variant={PageSectionVariants.light}>
      <Grid>
        <GridItem sm={12} md={6} mdOffset={3} className="pf-u-py-2xl pf-u-text-align-center">
          <Title size="4xl" id="AboutPatternFly4" className="pf-u-mb-md">About PatternFly 4</Title>
          <Title size="lg">We provide tools like design documentation, components, and code examples to make it possible for anyone to design and build responsive, accessible user experiences.</Title>
        </GridItem>
      </Grid>
    </PageSection>
    <PageSection variant={PageSectionVariants.light} className="pf4-c-background-lines">
      <Grid gutter="md" className="pf-u-pb-3xl-on-sm">
        <GridItem sm={12}>
          <Grid>
            <GridItem sm={12} md={4} mdOffset={1} lgOffset={2} className="pf-u-display-flex pf-u-display-block-on-sm pf-u-flex-direction-column pf-u-pt-2xl pf-u-pt-0-on-sm">
              <TextContent>
                <div className="pf-u-pb-2xl">
                  <Text component={TextVariants.h2}>Make better decisions with clear guidance</Text>
                  <Text component={TextVariants.p}>Design guidelines supply the foundation of the system. Get acquainted with our approach to icons, color, content, and more.</Text>
                  <Text component={TextVariants.a} href={withPrefix('/design-guidelines')} aria-label="view design guidelines" className="pf-u-pl-0 pf4-c-link__text">View design guidelines <ArrowRightIcon />
                  </Text>
                </div>
                <div className="pf-u-pb-2xl">
                  <Text component={TextVariants.h2}>Stay aligned with layouts</Text>
                  <Text component={TextVariants.p}>A layout provides a fully responsive page structure that keeps your components organized and aligned regardless of screen size.</Text>
                  <Text component={TextVariants.a} href={withPrefix('/documentation/react/layouts')} aria-label="view layouts" className="pf-u-pl-0 pf4-c-link__text">View layouts <ArrowRightIcon />
                  </Text>
                </div>
                <div className="pf-u-pb-2xl">
                  <Text component={TextVariants.h2}>Start building with components</Text>
                  <Text component={TextVariants.p}>Components are like building blocks. Designed to be flexible and modular, you can mix and match to create a solution for almost any UI problem.</Text>
                  <Text component={TextVariants.a} href={withPrefix('/documentation/react/components')} aria-label="view components" className="pf-u-pl-0 pf4-c-link__text">View components <ArrowRightIcon />
                  </Text>
                </div>
                <div className="pf-u-pb-2xl">
                  <Text component={TextVariants.h2}>Get inspired with demos</Text>
                  <Text component={TextVariants.p}>Explore working examples of common UI elements like forms to see how components and layouts can be combined to solve common design problems.</Text>
                  <Text component={TextVariants.a} href={withPrefix('/documentation/react/demos')} aria-label="view demos" className="pf-u-pl-0 pf4-c-link__text">View demos <ArrowRightIcon />
                  </Text>
                </div>
              </TextContent>
            </GridItem>
            <GridItem sm={12} md={6}>
              <object type="image/svg+xml" className="pf4-c-image__laptop" aria-label="laptop image">Laptop image</object>
              <object type="image/svg+xml" className="pf4-c-image__phone" aria-label="phone image"></object>
              <object type="image/svg+xml" className="pf4-c-image__screen" aria-label="screen image"></object>
              <object type="image/svg+xml" className="pf4-c-image__desktop" aria-label="desktop image"></object>
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
                <Text component={TextVariants.h2}>Modular &amp; flexible</Text>
                <Text component={TextVariants.p} className="pf-u-mb-3xl">Arrange self-contained components in any number of ways to build a variety of applications and interfaces. You can also use the CSS variable system to customize styles across a website or interface.</Text>
                <Text component={TextVariants.h2}>Accessible</Text>
                <Text component={TextVariants.p} className="pf-u-mb-3xl">Take advantage of accessible markup and guidance. Because building applications that work for everyone, regardless of ability, is just the right thing to do.</Text>
                <Text component={TextVariants.h2}>Built for teams, built to scale</Text>
                <Text component={TextVariants.p} className="pf-u-mb-3xl">Unify design and development with a set of clear guidelines and tools to help streamline communication and build more consistent user experiences.</Text>
                <div className="pf-u-pb-md">
                  <Text component={TextVariants.a} href="/get-started/developers" className="pf-m-white pf4-c-link__text" aria-label="Get started for developer">Get started for developers <ArrowRightIcon />
                  </Text>
                </div>
                <div className="pf-u-pb-md">
                  <Text component={TextVariants.a} href="/get-started/designers" className="pf-m-white pf4-c-link__text" aria-label="Get started for designers">Get started for designers <ArrowRightIcon />
                  </Text>
                </div>
              </TextContent>
            </GridItem>
            <GridItem sm={12} md={5} className="pf-u-mt-lg pf-u-mt-0-on-sm pf-u-text-align-center pf-u-text-align-right-on-md pf-u-text-align-right-on-md">
              <img src={principles} alt="PatternFly 4 principles image" className="pf4-c-image__principles pf-u-ml-lg-on-md" />
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </PageSection>
  </Layout>
)

export default IndexPage
