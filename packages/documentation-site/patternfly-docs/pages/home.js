import React from "react";
import {Link} from "@patternfly/documentation-framework/components";
import {
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
  Title,
  Text,
  TextVariants,
} from "@patternfly/react-core";
import ArrowRightIcon from "@patternfly/react-icons/dist/esm/icons/arrow-right-icon";
import ExternalLinkAltIcon from "@patternfly/react-icons/dist/esm/icons/external-link-alt-icon";
import lightshowcase from "../images/light-showcase.png";
import darkshowcase from "../images/dark-showcase.png";
import "./home.css";
import { featuredPostsData } from "./featured-posts-data";

const cardData = [
  {
    title: "Upgrade to PatternFly v5",
    body: "Reference our upgrade guide to learn how you can update to the latest version of PatternFly.",
    link: "/get-started/upgrade",
    layout: "withSubtitle",
  },
  {
    title: "Read our latest release highlights",
    body: "Stay informed about every PatternFly release by reading through our highlights, which lay out important code changes and design updates.",
    link: "/get-started/release-highlights",
    layout: "withSubtitle",
  },
  {
    title: "Attend PatternFly community events",
    body: "Join one of our regular meetings where we set time aside to share information and address questions or issues presented by the community.",
    link: "https://calendar.google.com/calendar/embed?src=patternflyteam%40gmail.com&ctz=America%2FNew_York",
    layout: "withSubtitle",
    hasExtLinkIcon: true,
  },
  {
    title: "Explore our roadmaps",
    body: "Take a look at our issue boards on GitHub to see what we’re working on now and what we have planned next.",
    link: "https://github.com/orgs/patternfly/projects/7",
    layout: "withSubtitle",
    hasExtLinkIcon: true,
  },
  {
    title: "Follow us on Twitter",
    body: "Stay up to date on timely PatternFly news and updates through our Twitter.",
    layout: "withSubtitle",
    link: "https://twitter.com/patternfly",
    hasExtLinkIcon: true,
  },
  {
    title: "Join the discussion",
    body: "Visit our discussion board on GitHub to help drive future design and development plans.",
    link: "https://github.com/orgs/patternfly/discussions",
    layout: "withSubtitle",
    hasExtLinkIcon: true,
  },
];

const AggregateCards = () => {
  return (
    <Gallery hasGutter minWidths={{xl: "30%"}}>
      {cardData.map((card, cardIndex) => {
        let cardAlign;
        const cardId = `clickable-stay-informed-card-${cardIndex}`;
        return (
          <GalleryItem key={card.title}>
            <Card
              id={cardId}
              style={{textAlign: cardAlign}}
              key={`${cardIndex}`}
              component="div"
              isFullHeight
              isClickable
            >
              <CardHeader
                selectableActions={{
                  to: card.link,
                  selectableActionId: `stay-informed-card-input-${cardIndex}`,
                  selectableActionAriaLabelledby: cardId,
                  name: 'homepage-card',
                  isExternalLink: card.hasExtLinkIcon
                }}
              >
                <CardTitle>
                  <a href={card.link}>
                    {card.title}
                    {card.hasExtLinkIcon ? (
                      <>
                        {" "}
                        <ExternalLinkAltIcon />
                      </>
                    ) : (
                      ""
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

const FeaturedBlogCard = ({postData, idx}) => {
  const { URL, author, imageURL, length, title } = postData;
  const cardId = `featured-blog-post-${idx + 1}`;

  return (
    <Card id={cardId} component="article" isClickable key={`${title}-${idx}`}>
      <CardHeader
        className="v5-featured-posts-card-header-img"
        selectableActions={{
          to: URL,
          selectableActionId: `card-article-input-${idx + 1}`,
          selectableActionAriaLabelledby: cardId,
          name: 'homepage-card',
          isExternalLink: true
        }}
        style={{
          backgroundImage: `url(${imageURL})`,
        }}
      ></CardHeader>
      <Divider />
      <CardTitle>
        {" "}
        <a href={URL}>
          {title}
        </a>
      </CardTitle>
      <CardFooter className="pf-v5-u-color-200">
        {author} • {length}
      </CardFooter>
    </Card>
  )
};

const HomePage = () => (
  <React.Fragment>
    <PageSection isWidthLimited className="ws-homepage-main-section">
      <Flex
        direction={{default: "column", lg: "row"}}
        gap={{default: "gap2xl"}}
        alignItems={{lg: "alignItemsStretch"}}
      >
        <Flex
          direction={{default: "column"}}
          flex={{md: "flex_3"}}
          gap={{default: "gap2xl"}}
        >
          <Flex
            direction={{default: "column"}}
            spaceItems={{default: "spaceItemsLg"}}
          >
            <Title
              className="pf-v5-u-font-weight-bold"
              headingLevel="h1"
              size="4xl"
            >
              {" "}
              Design and build better product experiences in the
              <Text component="span" className="pf-v5-u-primary-color-100">
                {" "}
                open{" "}
              </Text>
              with PatternFly
            </Title>
            <Text component={TextVariants.p} className="ws-mdx-p">
              PatternFly is an open source design system that enables teams to
              create consistent and scalable enterprise products. PatternFly is
              sponsored and maintained by Red Hat, but is open to all.
            </Text>
          </Flex>
          <Flex gap={{default: "gapMd"}}>
            <FlexItem>
              <Link
                to="/get-started/design"
                className="pf-v5-c-button pf-m-secondary pf-m-display-lg"
                aria-label="Start designing"
              >
                Start designing
              </Link>
            </FlexItem>
            <FlexItem>
              <Link
                to="/get-started/develop"
                className="pf-v5-c-button pf-m-secondary pf-m-display-lg"
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
            --pf-v5-c-image-showcase-url: url(${lightshowcase});
          }
          .pf-v5-c-image-showcase {
            background-image: var(--pf-v5-c-image-showcase-url);
            background-repeat: no-repeat;
            background-size: auto 100%;
          }
          .pf-v5-theme-dark {
            --pf-v5-c-image-showcase-url: url(${darkshowcase});
          }
        `}
        </style>
        <FlexItem
          flex={{md: "flex_3"}}
          alignSelf={{default: "alignSelfStretch"}}
          className="pf-v5-c-image-showcase"
        ></FlexItem>
      </Flex>
    </PageSection>
    <PageSection isWidthLimited>
      <Divider inset={{default: "insetLg"}} />
    </PageSection>
    <PageSection isWidthLimited className="v5-featured-posts">
      <Flex direction={{default: "column", md: "row"}} gap={{default: "gapMd"}}>
        <FlexItem flex={{default: "flex_1"}}>
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
    <PageSection isWidthLimited className="v5-featured-posts-cards">
      <Grid hasGutter md={6} xl={3}>
        {Object.values(featuredPostsData).map((post, idx) => (
          <FeaturedBlogCard postData={post} idx={idx} key={`${idx}-${post.title}`} />
        ))}
      </Grid>
    </PageSection>
    <PageSection isWidthLimited className="v5-stay-informed">
      <Flex direction={{default: "column", md: "row"}} gap={{default: "gapMd"}}>
        <FlexItem flex={{default: "flex_1"}}>
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
    <PageSection isWidthLimited className="v5-stay-informed-cards">
      <AggregateCards />
    </PageSection>
  </React.Fragment>
);

export default HomePage;
