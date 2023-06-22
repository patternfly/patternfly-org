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
import lightshowcase from "../images/light-showcase.svg";
import darkshowcase from "../images/dark-showcase.svg";
import "./home.css";
import featuredPostsData from "./featured-posts-data.json";

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
        return (
          <GalleryItem>
            <Card
              style={{textAlign: cardAlign}}
              key={`${cardIndex}`}
              component="div"
              isFullHeight
            >
              <CardTitle>
                <a href={card.link} isInline>
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
              <CardFooter>{card.body}</CardFooter>
            </Card>
          </GalleryItem>
        );
      })}
    </Gallery>
  );
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
        <Flex
          flex={{md: "flex_3"}}
          className="pf-v5-c-image__light-showcase"
          style={{
            backgroundImage: `url(${lightshowcase})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "auto 100%",
            alignSelf: "stretch",
          }}
        ></Flex>
        <Flex
          flex={{md: "flex_3"}}
          className="pf-v5-c-image__dark-showcase"
          style={{
            backgroundImage: `url(${darkshowcase})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "auto 100%",
            alignSelf: "stretch",
          }}
        ></Flex>
      </Flex>
    </PageSection>
    <Divider inset={{default: "inset2xl"}} />
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
        >
          Explore our blog <ArrowRightIcon />
        </Button>
      </Flex>
    </PageSection>
    <PageSection isWidthLimited>
      <Grid hasGutter md={6} xl={3}>
        <Card isFullHeight>
          <CardHeader
            style={{
              minHeight: "200px",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundImage: `url(${featuredPostsData.post1.imageURL})`,
              height: "300px",
            }}
          ></CardHeader>
          <Divider />
          <CardTitle>
            {" "}
            <a href={featuredPostsData.post1.URL}>
              {featuredPostsData.post1.title}
            </a>
          </CardTitle>
          <CardFooter className="pf-v5-u-color-200">
            {featuredPostsData.post1.author} • {featuredPostsData.post1.length}
          </CardFooter>
        </Card>
        <Card isFullHeight>
          <CardHeader
            style={{
              minHeight: "200px",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundImage: `url(${featuredPostsData.post2.imageURL})`,
              height: "300px",
            }}
          ></CardHeader>
          <Divider />
          <CardTitle>
            {" "}
            <a href={featuredPostsData.post2.URL}>
              {featuredPostsData.post2.title}
            </a>
          </CardTitle>
          <CardFooter className="pf-v5-u-color-200">
            {featuredPostsData.post2.author} • {featuredPostsData.post2.length}
          </CardFooter>
        </Card>
        <Card isFullHeight>
          <CardHeader
            style={{
              minHeight: "200px",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundImage: `url(${featuredPostsData.post3.imageURL})`,
              height: "300px",
            }}
          ></CardHeader>
          <Divider />
          <CardTitle>
            {" "}
            <a href={featuredPostsData.post3.URL}>
              {featuredPostsData.post3.title}
            </a>
          </CardTitle>
          <CardFooter className="pf-v5-u-color-200">
            {featuredPostsData.post3.author} • {featuredPostsData.post3.length}
          </CardFooter>
        </Card>
        <Card isFullHeight>
          <CardHeader
            style={{
              minHeight: "200px",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundImage: `url(${featuredPostsData.post4.imageURL})`,
              height: "300px",
            }}
          ></CardHeader>
          <Divider />
          <CardTitle>
            {" "}
            <a href={featuredPostsData.post4.URL}>
              {featuredPostsData.post4.title}
            </a>
          </CardTitle>
          <CardFooter className="pf-v5-u-color-200">
            {featuredPostsData.post4.author} • {featuredPostsData.post4.length}
          </CardFooter>
        </Card>
      </Grid>
    </PageSection>
    <PageSection isWidthLimited className="v5-featured-posts">
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
          style={{float: "right"}}
        >
          View our Github repositories <ArrowRightIcon />
        </Button>
      </Flex>
    </PageSection>
    <PageSection isWidthLimited>
      <AggregateCards />
    </PageSection>
  </React.Fragment>
);

export default HomePage;
