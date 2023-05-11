import React from 'react';
import { Link } from '@patternfly/documentation-framework/components';
import {
  Flex,
  FlexItem,
  Grid,
  GridItem,
  PageSection,
  PageSectionVariants,
  Title,
  TextContent,
  Text,
  TextVariants
} from '@patternfly/react-core';
import ArrowRightIcon from '@patternfly/react-icons/dist/esm/icons/arrow-right-icon';
import GithubIcon from '@patternfly/react-icons/dist/esm/icons/github-icon';
import orb from '../images/pf4-logo.svg';
import accessible from '../images/accessible.svg';
import modular from '../images/modular.svg';
import scale from '../images/scale.svg';
import consistent from '../images/consistent.svg';
import open from '../images/open.svg';
import { AutoLinkHeader } from '@patternfly/documentation-framework/components/autoLinkHeader/autoLinkHeader';
import './home.css';

const aboutPatternFly = `Hello, we're PatternFly.`;
const patternFlyPrinciples = 'Flyer fundamentals';

const HomePage = () => (
  <React.Fragment>
    <PageSection variant={PageSectionVariants.light} className="pf4-c-background-image ws-homepage-main-section">
      <Grid>
        <GridItem sm={12} md={8} mdOffset={2} lg={6} lgOffset={3} className="pf-v5-u-py-2xl pf-v5-u-text-align-center">
          <TextContent>
            <img src={orb} alt="PatternFly logo" className="fadeInDown animated fadeInOne" />
            <Title headingLevel="h1" size="4xl" className="pf-m-white pf4-site-c-hero fadeIn animated fadeInTwo">
              Build scalable experiences in the open.
            </Title>
            <Text className="pf-v5-c-title pf-m-xl pf-m-white pf-v5-u-mb-md pf-v5-u-mt-lg pf-v5-u-mb-3xl-on-md fadeInUp animated fadeInThree">
              PatternFly is an open source design system built to drive consistency and unify teams.
            </Text>
            <div className="pf-v5-u-display-flex pf-v5-u-justify-content-center pf-v5-u-flex-direction-column pf-v5-u-flex-direction-row-on-md">
              <Link
                to="/get-started/about"
                className="pf-v5-c-button pf4-c-button__cta-primary pf-v5-u-mr-0 pf-v5-u-mb-md pf-v5-u-mb-0-on-md pf-v5-u-mr-xl-on-md fadeIn animated fadeInFour"
                aria-label="Get started with PatternFly"
              >
                Get started
              </Link>
              <a className="pf-v5-c-button pf4-c-button__cta-outline fadeIn animated fadeInFour" href="//github.com/patternfly" target="_blank">
                <GithubIcon className="pf-v5-u-mr-sm" />GitHub
              </a>
            </div>
          </TextContent>
        </GridItem>
      </Grid>
    </PageSection>
    <PageSection className="ws-homepage-main-section pf-m-light-100">
      <Grid>
        <GridItem sm={12} md={6} mdOffset={3} className="pf-v5-u-py-2xl pf-v5-u-text-align-center" id="about-patternfly-section">
          <TextContent>
            <AutoLinkHeader size="h1" headingLevel="h2" className="ws-title">
              {aboutPatternFly}
            </AutoLinkHeader>
            <Text component={TextVariants.p} className="ws-mdx-p">
              We think quality product experiences should be easy to build and easy to scale, so we provide the tools to make that happen.
            </Text>
            <Text component={TextVariants.p} className="ws-mdx-p">
              From documentation and components to code examples and tutorials, PatternFly has it all—and our community of Flyers help make it better every day.
            </Text>
          </TextContent>
        </GridItem>
      </Grid>
    </PageSection>
    <PageSection className="pf4-c-background-lines ws-homepage-main-section pf-m-light-100">
      <Grid gutter="md" className="pf-v5-u-pb-3xl-on-sm">
        <GridItem sm={12}>
          <Grid>
            <GridItem
              sm={12}
              md={4}
              mdOffset={1}
              lgOffset={2}
              className="pf-v5-u-display-flex pf-v5-u-display-block-on-sm pf-v5-u-flex-direction-column pf-v5-u-pt-2xl pf-v5-u-pt-0-on-sm"
            >
              <TextContent>
                <div className="pf-v5-u-pb-2xl">
                  <Text component={TextVariants.h2}>We guide, you decide</Text>
                  <Text component={TextVariants.p} className="ws-mdx-p">
                    PatternFly’s foundation is made of design guidelines, so help is always there when you need it. Check out our approach to icons, color, content, and more.
                  </Text>
                  <Text
                    className="pf-v5-u-pl-0 pf4-c-link__text ws-mdx-a"
                  >
                    <Link to="/guidelines/colors" aria-label="view design guidelines">
                      View design guidelines <ArrowRightIcon />
                    </Link>
                  </Text>
                </div>
                <div className="pf-v5-u-pb-2xl">
                  <Text component={TextVariants.h2}>Lay it out</Text>
                  <Text component={TextVariants.p} className="ws-mdx-p">
                    A layout provides a fully responsive page structure that keeps your components organized and aligned regardless of screen size.
                  </Text>
                  <Text
                    className="pf-v5-u-pl-0 pf4-c-link__text ws-mdx-a"
                  >
                    <Link to="/layouts/bullseye" aria-label="view layouts">
                      View layouts <ArrowRightIcon />
                    </Link>
                  </Text>
                </div>
                <div className="pf-v5-u-pb-2xl">
                  <Text component={TextVariants.h2}>Build things your way</Text>
                  <Text component={TextVariants.p} className="ws-mdx-p">
                    Components are like building blocks. Designed to be flexible and modular, you can mix and match components to create a solution for almost any UI problem.
                  </Text>
                  <Text
                    className="pf-v5-u-pl-0 pf4-c-link__text ws-mdx-a"
                  >
                    <Link to="/components/about-modal" aria-label="view components">
                      View components <ArrowRightIcon />
                    </Link>
                  </Text>
                </div>
                <div className="pf-v5-u-pb-2xl">
                  <Text component={TextVariants.h2}>See it in action</Text>
                  <Text component={TextVariants.p} className="ws-mdx-p">
                    Components are better together. Demos show how multiple components can be used in a single design. They also provide  some useful starter code, so the days of creating complex layouts from scratch are over.
                  </Text>
                  <Text
                    className="pf-v5-u-pl-0 pf4-c-link__text ws-mdx-a"
                  >
                    <Link to="/demos/primary-detail" aria-label="view demos">
                      View demos <ArrowRightIcon />
                    </Link>
                  </Text>
                </div>
              </TextContent>
            </GridItem>
            <GridItem sm={12} md={6}>
              <div className="pf4-c-image__laptop" aria-hidden />
              <div className="pf4-c-image__phone" aria-hidden />
              <div className="pf4-c-image__screen" aria-hidden />
              <div className="pf4-c-image__desktop" aria-hidden />
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </PageSection>
    <PageSection variant={PageSectionVariants.darker} className="pf4-c-background-image-principles ws-homepage-main-section">
    <div id="retainable-rss-embed" 
      data-rss="https://medium.com/feed/retainable,
      https://medium.com/feed/patternfly"
      data-maxcols="4" 
      data-layout="grid" 
      data-poststyle="inline" 
      data-readmore="Read more" 
      data-buttonclass="btn btn-primary" 
      data-offset="-100"></div>
  </PageSection>
  </React.Fragment>
);

export default HomePage;
<script src="https://www.twilik.com/assets/retainable/rss-embed/retainable-rss-embed.js"></script>