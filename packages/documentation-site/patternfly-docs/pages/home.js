import React from 'react';
import { Link } from '@patternfly/documentation-framework/components';
import {
  Banner,
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardFooter,
  Gallery,
  GalleryItem,
  Divider,
  Flex,
  FlexItem,
  Grid,
  PageSection,
  PageSectionVariants,
  Title,
  Content,
  ContentVariants,
  Split, 
  SplitItem
} from '@patternfly/react-core';
import ArrowRightIcon from '@patternfly/react-icons/dist/esm/icons/arrow-right-icon';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/esm/icons/external-link-alt-icon';
import lightshowcase from '../images/light-showcase.png';
import darkshowcase from '../images/dark-showcase.png';
import './home.css';
import { featuredPostsData } from './featured-posts-data';

const cardData = [
  {
    title: 'Releases',
    body: 'To learn more about every PatternFly update, read our release highlights.',
    link: '/get-started/release-highlights',
    layout: 'withSubtitle',
  },
  {
    title: 'Mailing List',
    body: 'To get meeting reminders and newsletters, sign up for our mailing list.',
    link: 'https://www.redhat.com/dynamic-form/instance/934b1674-bc8a-4a13-8c9d-d19abcceb263',
    layout: 'withSubtitle',
  },
  {
    title: 'Meetings',
    body: 'To join our open meetings, keep an eye on our calendar.',
    link: 'https://calendar.google.com/calendar/embed?src=patternflyteam%40gmail.com&ctz=America%2FNew_York',
    layout: 'withSubtitle',
    hasExtLinkIcon: true,
  },
  {
    title: 'Slack',
    body: 'Chat with the PatternFly team on Slack.',
    link: 'https://join.slack.com/t/patternfly/shared_invite/zt-1npmqswgk-bF2R1E2rglV8jz5DNTezMQ',
    layout: 'withSubtitle',
    hasExtLinkIcon: true,
  },
  {
    title: 'Figma',
    body: 'Make sure you keep your Figma resources up to date.',
    link: 'https://www.figma.com/@patternfly',
    layout: 'withSubtitle',
    hasExtLinkIcon: true,
  },
  {
    title: 'GitHub',
    body: 'Explore our repos and project board to learn what we\'re developing.',
    layout: 'withSubtitle',
    link: 'https://github.com/patternfly',
    hasExtLinkIcon: true,
  },
];

const AggregateCards = () => {
  return (
    <Gallery hasGutter minWidths={{ xl: '30%' }}>
      {cardData.map((card, cardIndex) => {
        let cardAlign;
        const curCardCount = cardIndex + 1;
        const cardId = `clickable-stay-informed-card-${curCardCount}`;
        const actionId = `stay-informed-card-input-${curCardCount}`;
        const cardTitleId = `stay-informed-card-${curCardCount}-title`;

        return (
          <GalleryItem key={card.title}>
            <Card
              id={cardId}
              style={{ textAlign: cardAlign }}
              key={`${cardIndex}`}
              component="div"
              isFullHeight
              isClickable
            >
              <CardHeader
                selectableActions={{
                  to: card.link,
                  selectableActionId: actionId,
                  selectableActionAriaLabelledby: cardTitleId,
                  name: 'homepage-card',
                  isExternalLink: card.hasExtLinkIcon,
                }}
              >
                <CardTitle id={cardTitleId}>
                  <a href={card.link}>
                    {card.title}
                    {card.hasExtLinkIcon ? (
                      <>
                        {' '}
                        <ExternalLinkAltIcon />
                      </>
                    ) : (
                      ''
                    )}
                  </a>
                </CardTitle>
              </CardHeader>
              <CardFooter>{card.body}</CardFooter>
            </Card>
          </GalleryItem>
        );
      })}
    </Gallery>
  );
};

const FeaturedBlogCard = ({ postData, idx }) => {
  const { URL, author, imageURL, length, title } = postData;
  const curCardCount = idx + 1;
  const cardId = `featured-blog-post-${curCardCount}`;
  const actionId = `card-article-input-${curCardCount}`;
  const cardTitleId = `featured-blog-post-${curCardCount}-title`;

  return (
    <Card id={cardId} component="div" isClickable key={idx}>
      <CardHeader
        className="v6-featured-posts-card-header-img"
        selectableActions={{
          to: URL,
          selectableActionId: actionId,
          selectableActionAriaLabelledby: cardTitleId,
          name: 'homepage-card',
          isExternalLink: true,
        }}
        style={{
          backgroundImage: `url(${imageURL})`,
        }}
      ></CardHeader>
      <Divider />
      <CardTitle id={cardTitleId}>
        {' '}
        <a href={URL}>{title}</a>
      </CardTitle>
      <CardFooter className="pf-v6-u-color-200">
        {author} • {length}
      </CardFooter>
    </Card>
  );
};

const HomePage = () => (
  <React.Fragment>
    <PageSection isWidthLimited className="v6-homepage-section-top  v6-homepage-section-bottom width-padding">
      <Flex
        direction={{ default: 'column', lg: 'row' }}
        gap={{ default: 'gap2xl' }}
        alignItems={{ lg: 'alignItemsStretch' }}
      >
        <Flex
          direction={{ default: 'column' }}
          flex={{ md: 'flex_3' }}
          gap={{ default: 'gap2xl' }}
        >
          <Flex
            direction={{ default: 'column' }}
            spaceItems={{ default: 'spaceItemsLg' }}
          >
            <Title
              headingLevel="h1"
              size="4xl"
            >
              {' '}
              Design and build better product experiences in the
              <span className="brand-text">
                {' '}
                open{' '}
              </span>
              with PatternFly
            </Title>
            <Content component={ContentVariants.p} className="pf-v6-u-font-size-lg">
              PatternFly is an open source design system that enables teams to
              create consistent and scalable enterprise products. PatternFly is
              sponsored and maintained by Red Hat, but is open to all.
            </Content>
          </Flex>
          <Split hasGutter>
            <SplitItem isFilled>
              <Button component="a" href="/get-started/upgrade"
                variant="primary" size="lg" isBlock
                aria-label="Upgrade to PatternFly 6" icon={<ArrowRightIcon />} iconPosition="end"
                >
                Upgrade
              </Button>
            </SplitItem>
            <SplitItem isFilled>
              <Button component="a" href="/get-started/design"
                variant="secondary" size="lg" isBlock
                aria-label="Start designing" icon={<ArrowRightIcon />} iconPosition="end"
              >
                Design
              </Button>
            </SplitItem>
            <SplitItem isFilled>
            <Button component="a" href="/get-started/develop"
                variant="secondary" size="lg" isBlock
                aria-label="Start developing" icon={<ArrowRightIcon />} iconPosition="end"
              >
                Develop
              </Button>
            </SplitItem>
          </Split>
        </Flex>
        <style>
          {`
          :root {
            --pf-v6-c-image-showcase-url: url(${lightshowcase});
          }
          .pf-v6-c-image-showcase {
            background-image: var(--pf-v6-c-image-showcase-url);
            background-repeat: no-repeat;
            background-size: auto 100%;
          }
          .pf-v6-theme-dark {
            --pf-v6-c-image-showcase-url: url(${darkshowcase});
          }
        `}
        </style>
        <FlexItem
          flex={{ md: 'flex_3' }}
          alignSelf={{ default: 'alignSelfStretch' }}
          className="pf-v6-c-image-showcase"
        ></FlexItem>
      </Flex>
    </PageSection>
    <PageSection isWidthLimited className="width-padding">
      <Divider inset={{ default: 'insetMd' }} />
    </PageSection>
    <PageSection isWidthLimited className="v6-featured-posts-cards v6-homepage-section-bottom width-padding">
      [replace with 3 split cards]
      <Grid hasGutter md={7} xl={4}>
        {Object.values(featuredPostsData).map((post, idx) => (
          <FeaturedBlogCard
            postData={post}
            idx={idx}
            key={`${idx}-${post.title}`}
          />
        ))}
      </Grid>
    </PageSection>
    <PageSection isWidthLimited className="width-padding">
      <Divider inset={{ default: 'insetMd' }} />
    </PageSection>
    <PageSection isWidthLimited className="v6-stay-informed  v6-homepage-section-top width-padding">
      <Flex
        direction={{ default: 'column', md: 'row' }}
        gap={{ default: 'gapMd' }}
      >
        <FlexItem flex={{ default: 'flex_1' }}>
          <Title headingLevel="h2" size="3xl">
            Stay informed
          </Title>
        </FlexItem>
      </Flex>
    </PageSection>
    <PageSection isWidthLimited className="v6-stay-informed-cards  v6-homepage-section-bottom width-padding">
      <AggregateCards />
    </PageSection>
    <PageSection isWidthLimited className="width-padding">
      <Divider inset={{ default: 'insetMd' }} />
    </PageSection>
    <PageSection isWidthLimited className="v6-featured-posts v6-homepage-section-top width-padding">
      <Flex
        direction={{ default: 'column', md: 'row' }}
        gap={{ default: 'gapMd' }}
      >
        <FlexItem flex={{ default: 'flex_1' }}>
          <Title headingLevel="h2" size="3xl">
            What's new?
          </Title>
        </FlexItem>
        <Button
          isInline
          size="lg"
          component="a"
          href="https://medium.com/patternfly"
          variant="link"
          aria-label="explore our blog"
          target="_blank"
          icon={<ArrowRightIcon />} 
          iconPosition="end"
          className="link-size"
        >
          Read more articles 
        </Button>
      </Flex>
    </PageSection>
    <PageSection isWidthLimited className="v6-featured-posts-cards v6-homepage-section-bottom width-padding">
      <Grid hasGutter md={7} xl={4}>
        {Object.values(featuredPostsData).map((post, idx) => (
          <FeaturedBlogCard
            postData={post}
            idx={idx}
            key={`${idx}-${post.title}`}
          />
        ))}
      </Grid>
    </PageSection>
  </React.Fragment>
);

export default HomePage;
