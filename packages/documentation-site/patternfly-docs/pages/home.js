import React from 'react';
import { Link } from '@patternfly/documentation-framework/components';
import {
  Banner,
  Button,
  Card,
  CardHeader,
  CardTitle,
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
} from '@patternfly/react-core';
import ArrowRightIcon from '@patternfly/react-icons/dist/esm/icons/arrow-right-icon';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/esm/icons/external-link-alt-icon';
import lightshowcase from '../images/light-showcase.png';
import darkshowcase from '../images/dark-showcase.png';
import './home.css';
import { featuredPostsData } from './featured-posts-data';

const cardData = [
  {
    title: 'Upgrade to PatternFly 6',
    body: 'Reference our upgrade guide to learn how you can update to the latest version of PatternFly.',
    link: '/get-started/upgrade',
    layout: 'withSubtitle',
  },
  {
    title: 'Read our latest release highlights',
    body: 'Stay informed about every PatternFly release by reading through our highlights, which lay out important code changes and design updates.',
    link: '/get-started/release-highlights',
    layout: 'withSubtitle',
  },
  {
    title: 'Attend PatternFly community events',
    body: 'Join one of our regular meetings where we set time aside to share information and address questions or issues presented by the community.',
    link: 'https://calendar.google.com/calendar/embed?src=patternflyteam%40gmail.com&ctz=America%2FNew_York',
    layout: 'withSubtitle',
    hasExtLinkIcon: true,
  },
  {
    title: 'Explore our roadmaps',
    body: 'Take a look at our issue boards on GitHub to see what we’re working on now and what we have planned next.',
    link: 'https://github.com/orgs/patternfly/projects/7',
    layout: 'withSubtitle',
    hasExtLinkIcon: true,
  },
  {
    title: 'Follow us on X',
    body: 'Stay up to date on timely PatternFly news and updates through our X.',
    layout: 'withSubtitle',
    link: 'https://x.com/patternfly',
    hasExtLinkIcon: true,
  },
  {
    title: 'Join the discussion',
    body: 'Visit our discussion board on GitHub to help drive future design and development plans.',
    link: 'https://github.com/orgs/patternfly/discussions',
    layout: 'withSubtitle',
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
                  {card.title}
                  {card.hasExtLinkIcon ? (
                    <>
                      {' '}
                      <ExternalLinkAltIcon />
                    </>
                  ) : (
                    ''
                  )}
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
      <CardTitle id={cardTitleId}>{` ${title}`}</CardTitle>
      <CardFooter className="pf-v6-u-color-200">
        {author} • {length}
      </CardFooter>
    </Card>
  );
};

const HomePage = () => (
  <React.Fragment>
    <PageSection isWidthLimited className="ws-homepage-main-section">
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
              className="pf-v6-u-font-weight-bold"
              headingLevel="h1"
              size="4xl"
            >
              {' '}
              Design and build better product experiences in the
              <span className="pf-v6-u-primary-color-100"> open </span>
              with PatternFly
            </Title>
            <Content component={ContentVariants.p} className="pf-v6-u-font-size-lg">
              PatternFly is an open source design system that enables teams to
              create consistent and scalable enterprise products. PatternFly is
              sponsored and maintained by Red Hat, but is open to all.
            </Content>
          </Flex>
          <Flex gap={{ default: 'gapMd' }}>
            <FlexItem>
              <Link
                to="/get-started/design"
                className="pf-v6-c-button pf-m-secondary pf-m-display-lg"
                aria-label="Start designing"
              >
                Start designing
              </Link>
            </FlexItem>
            <FlexItem>
              <Link
                to="/get-started/develop"
                className="pf-v6-c-button pf-m-secondary pf-m-display-lg"
                aria-label="Start developing"
              >
                Start developing
              </Link>
            </FlexItem>
          </Flex>
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
    <PageSection isWidthLimited>
      <Divider inset={{ default: 'insetLg' }} />
    </PageSection>
    <PageSection isWidthLimited className="v6-featured-posts">
      <Flex
        direction={{ default: 'column', md: 'row' }}
        gap={{ default: 'gapMd' }}
      >
        <FlexItem flex={{ default: 'flex_1' }}>
          <Title headingLevel="h2" size="2xl">
            Featured blog posts
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
        >
          Explore our blog <ArrowRightIcon />
        </Button>
      </Flex>
    </PageSection>
    <PageSection isWidthLimited className="v6-featured-posts-cards">
      <Grid hasGutter md={6} xl={3}>
        {Object.values(featuredPostsData).map((post, idx) => (
          <FeaturedBlogCard
            postData={post}
            idx={idx}
            key={`${idx}-${post.title}`}
          />
        ))}
      </Grid>
    </PageSection>
    <PageSection isWidthLimited className="v6-stay-informed">
      <Flex
        direction={{ default: 'column', md: 'row' }}
        gap={{ default: 'gapMd' }}
      >
        <FlexItem flex={{ default: 'flex_1' }}>
          <Title headingLevel="h2" size="2xl">
            Stay informed
          </Title>
        </FlexItem>
        <Button
          isInline
          size="lg"
          component="a"
          href="https://github.com/patternfly"
          variant="link"
          aria-label="Patternfly on Github"
          target="_blank"
        >
          View our Github repositories <ArrowRightIcon />
        </Button>
      </Flex>
    </PageSection>
    <PageSection isWidthLimited className="v6-stay-informed-cards">
      <AggregateCards />
    </PageSection>
  </React.Fragment>
);

export default HomePage;
