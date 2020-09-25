import React from 'react';
import ChatIcon from '@patternfly/react-icons/dist/js/icons/chat-icon';
import QuestionIcon from '@patternfly/react-icons/dist/js/icons/question-icon';
import CatalogIcon from '@patternfly/react-icons/dist/js/icons/catalog-icon';
import MailBulkIcon from '@patternfly/react-icons/dist/js/icons/mail-bulk-icon';
import { Grid, GridItem, PageSection, PageSectionVariants, Split, SplitItem, Title } from '@patternfly/react-core';
import './community.css';

const CommunityPage = () => (
  <PageSection variant={PageSectionVariants.light}>
    <div className="ws-community-page">
      <Title size="4xl" className="pf-u-mb-lg ws-page-title" headingLevel="h2">Community</Title>
      <p className="ws-mdx-p">At the core of PatternFly is our community of people—in other words, our Flyers. Together, we celebrate creativity and foster a sense of teamwork and unity.</p>

      <Grid sm={12} md={6} gutter="sm" className="pf-u-my-lg pf-l-grid pf-m-all-12-col-on-sm pf-m-all-6-col-on-md pf-m-gutter">
        <GridItem>
          <p>Image</p>
        </GridItem>
        <GridItem>
          <Title size="3xl" className="ws-title" headingLevel="h3">Who we are</Title>
          <p className="ws-mdx-p">We’re made of designers, developers, and other UX professionals with a passion for open source. We each have different ways of working with others and supporting the community—there’s no one way to be a Flyer. Whether we’re contributing to PatternFly or just staying up to date on new releases, we work together to make PatternFly a vibrant community of passionate people.</p>
        </GridItem>
      </Grid>

      <Title size="3xl" className="pf-u-mb-sm ws-page-title" headingLevel="h3">What we're building</Title>
      <p className="ws-mdx-p">Our work extends beyond products and apps. We’re always exploring new ways we can welcome ideas and build better experiences for the very people who make PatternFly what it is today. </p>

      <Grid sm={12} md={4} className="pf-u-my-lg pf-l-grid pf-m-all-12-col-on-sm pf-m-all-4-col-on-md pf-u-text-align-center ws-building-grid">
        <GridItem>
          <p>Icon</p>
          <Title size="xl" className="ws-title" headingLevel="h4">Building global connections</Title>
          <p className="ws-mdx-p">
            Flyers may be spread all over the globe, but we make sure to come together once a month to share updates and collect feedback. All meetings are recorded and published on <a href="https://www.youtube.com/channel/UCqLT0IEvYmb8z__9IFLSVyQ">PatternFly’s YouTube channel</a>, and you can join PatternFly’s mailing list for the invites.
          </p>
          <Title size="xl" className="ws-title" headingLevel="h4">
            <a href="https://www.patternfly.org/v4/get-in-touch"><strong>Join PatternFly's mailing list</strong></a>
          </Title>
        </GridItem>
        <GridItem>
          <p>Icon</p>
          <Title size="xl" className="ws-title" headingLevel="h4">Building PatternFly roadmaps</Title>
          <p className="ws-mdx-p">
            To stay on top of all changes and keep everyone informed, we regularly update PatternFly roadmaps. This gives us an opportunity to share what Flyers are working on and what updates we’re planning.
          </p>
          <Title size="xl" className="ws-title" headingLevel="h4">
            <a href="https://github.com/orgs/patternfly/projects/4?fullscreen=true"><strong>Explore PatternFly roadmaps</strong></a>
          </Title>
        </GridItem>
        <GridItem>
          <p>Icon</p>
          <Title size="xl" className="ws-title" headingLevel="h4">Building accessible experiences</Title>
          <p className="ws-mdx-p">
            A community isn’t really a community unless everyone is included, so accessible UX is important to us. We regularly test and audit PatternFly’s accessibility and share guidance whenever we can.
          </p>
          <Title size="xl" className="ws-title" headingLevel="h4">
            <a href="https://www.patternfly.org/v4/get-started/accessibility-guide"><strong>Read our accessibility guide</strong></a>
          </Title>
        </GridItem>
      </Grid>

      <Title size="3xl" className="pf-u-mb-sm ws-page-title" headingLevel="h3">Creating new communities</Title>
      <p className="ws-mdx-p">Sometimes Flyers branch out and build groups of their own, which is how new communities are born. While PatternFly communities are separate from PatternFly and not supported as part of the design system, we still love seeing our Flyers forming new groups and developing their visions into actions.</p>
      <br/>
      <p className="ws-mdx-p"><a href="https://patternfly.github.io/patternfly-elements/"><strong>PatternFly Elements:</strong></a> PatternFly Elements is a community created by Red Hat's web-based developers. It focuses on creating web components for use across Red Hat's sites and SaaS products and features theming options available for your own brand library.</p>

      <Title size="4xl" className="pf-u-mb-lg ws-page-title pf-u-text-align-center ws-keep-growing" headingLevel="h2">Let's keep growing</Title>
      <p className="ws-mdx-p pf-u-text-align-center">The PatternFly community is never finished growing, and we want to keep it that way. Feel free to contribute whenever — we’re always open.</p>

      <p className="ws-mdx-p pf-u-text-align-center ws-get-in-touch"><a href="https://www.patternfly.org/v4/get-in-touch"><strong>Get in touch</strong></a></p>

    </div>
  </PageSection>
);

export default CommunityPage;
