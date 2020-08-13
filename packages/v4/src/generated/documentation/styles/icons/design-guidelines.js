import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport16 from '../../../../content/design-guidelines/styles/icons/./sm-icons-1.png';
import srcImport17 from '../../../../content/design-guidelines/styles/icons/./sm-icons-2.png';
import srcImport18 from '../../../../content/design-guidelines/styles/icons/./md-icons.png';
import srcImport19 from '../../../../content/design-guidelines/styles/icons/./lg-icons.png';
import srcImport20 from '../../../../content/design-guidelines/styles/icons/./xl-icons.png';
import srcImport21 from '../../../../content/design-guidelines/styles/icons/./icon_alignment.png';
import { Card, CardBody, Divider, Flex, FlexItem, Grid, GridItem } from '@patternfly/react-core';
import CaretDownIcon from '@patternfly/react-icons/dist/js/icons/caret-down-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/js/icons/check-circle-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/js/icons/exclamation-circle-icon';
import GithubIcon from '@patternfly/react-icons/dist/js/icons/github-icon';
import OutlinedCalendarAltIcon from '@patternfly/react-icons/dist/js/icons/outlined-calendar-alt-icon';
import StarIcon from '@patternfly/react-icons/dist/js/icons/star-icon';
import TagIcon from '@patternfly/react-icons/dist/js/icons/tag-icon';
import TimesCircleIcon from '@patternfly/react-icons/dist/js/icons/times-circle-icon';
import { IconRecommendations } from '../../../../content/design-guidelines/styles/icons/./IconRecommendations';
import { IconsTable } from '../../../../content/design-guidelines/styles/icons/./IconsTable';
import '../../../../content/design-guidelines/styles/icons/./icons.css';

export const DocumentationStylesIconsDesignGuidelinesDocs = {
  "slug": "/documentation/styles/icons/design-guidelines",
  "source": "design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/master/src/content/design-guidelines/styles/icons/icons.md",
  "section": "styles",
  "id": "Icons",
  "title": "Icons",
  "toc": [
    "Icon sizes",
    "Icon colors",
    "All icons",
    "Updated icon recommendations"
  ]
};
DocumentationStylesIconsDesignGuidelinesDocs.liveContext = {
  Card,
  CardBody,
  Divider,
  Flex,
  FlexItem,
  Grid,
  GridItem,
  CaretDownIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  GithubIcon,
  OutlinedCalendarAltIcon,
  StarIcon,
  TagIcon,
  TimesCircleIcon,
  IconRecommendations,
  IconsTable
};
DocumentationStylesIconsDesignGuidelinesDocs.Component = () => (
  <React.Fragment>
    <Divider className="ws-icons-divider"/>
    <p className="ws-icons-page">
      <p {...{"className":"ws-p"}}>
        {`If you're a developer, check out our `}
                <a href="/get-started/developers#using-styles">{`getting started`}</a>
        {` page to learn more about how to get and use our icon set.`}
      </p>
</p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Icon sizes`}
    </AutoLinkHeader>
    <Grid gutter="md">
      <GridItem
  xl={6}
  lg={12}
  className="ws-icons-gridtext"
>
        <p {...{"className":"ws-p"}}>
          {`Medium icons are used as our base size across our system as a whole and we recommend using this base size within your applications. Small, large and x-large icons are used sparingly across PatternFly components. Here is a full complete list of icon sizes:
`}
                    <Flex className="ws-icon-sizes ws-icon-sizes-sm" alignItems={{ default: 'alignItemsFlexStart' }}>            <FlexItem className="ws-icon-size">              <CheckCircleIcon size="sm"/>
</FlexItem>
                        <FlexItem>              <p>{`Small (10px)`}</p>
                            <code>{`--pf-global--icon--FontSize—sm`}</code>
</FlexItem>
</Flex>
          {`
`}
                    <Flex className="ws-icon-sizes ws-icon-sizes-md" alignItems={{ default: 'alignItemsFlexStart' }}>            <FlexItem className="ws-icon-size">              <CheckCircleIcon size="md"/>
</FlexItem>
                        <FlexItem>              <p>{`Medium (18px)`}</p>
                            <code>{`--pf-global--icon--FontSize—md`}</code>
</FlexItem>
</Flex>
          {`
`}
                    <Flex className="ws-icon-sizes ws-icon-sizes-lg" alignItems={{ default: 'alignItemsFlexStart' }}>            <FlexItem className="ws-icon-size">              <CheckCircleIcon size="lg"/>
</FlexItem>
                        <FlexItem>              <p>{`Large (24px)`}</p>
                            <code>{`--pf-global--icon--FontSize—lg`}</code>
</FlexItem>
</Flex>
          {`
`}
                    <Flex className="ws-icon-sizes ws-icon-sizes-xl" alignItems={{ default: 'alignItemsFlexStart' }}>            <FlexItem className="ws-icon-size">              <CheckCircleIcon size="xl"/>
</FlexItem>
                        <FlexItem>              <p>{`X-large (54px)`}</p>
                            <code>{`--pf-global--icon--FontSize—xl`}</code>
</FlexItem>
</Flex>
        </p>
</GridItem>
            <GridItem
  xl={5}
  xlOffset={7}
  lg={12}
  xlRowSpan={2}
>
        <Card className="ws-icon-size-examples">
          <CardBody>
            <p>
              <b>
                <p {...{"className":"ws-p"}}>
                  {`Small icons`}
                </p>
</b>
</p>
                        <Flex alignItems={{ default: 'alignItemsFlexStart' }}>
              <FlexItem>
                <img src={srcImport16} {...{"alt":"Small icons","className":"ws-sm-icons ws-sm-icons-1 ws-img"}}>
                </img>
</FlexItem>
                            <FlexItem grow={{ default: 'grow' }}>
                <img src={srcImport17} {...{"alt":"Small icons","className":"ws-sm-icons ws-sm-icons-2 ws-img"}}>
                </img>
</FlexItem>
</Flex>
                        <p>
              <b>
                <p {...{"className":"ws-p"}}>
                  {`Medium icons`}
                </p>
</b>
</p>
            <img src={srcImport18} {...{"alt":"Medium icons","className":"ws-md-icons ws-img"}}>
            </img>
                        <p>
              <b>
                <p {...{"className":"ws-p"}}>
                  {`Large icons`}
                </p>
</b>
</p>
            <img src={srcImport19} {...{"alt":"Large icons","className":"ws-lg-icons ws-img"}}>
            </img>
                        <p>
              <b>
                <p {...{"className":"ws-p"}}>
                  {`X-large icons`}
                </p>
</b>
</p>
            <img src={srcImport20} {...{"alt":"Extra large icons","className":"ws-xl-icons ws-img"}}>
            </img>
</CardBody>
</Card>
</GridItem>
            <GridItem
  xl={6}
  lg={12}
  className="ws-icons-gridtext ws-icons-alignment-section"
>
        <p {...{"className":"ws-p"}}>
          {`No matter the size of the icon, when icons are next to text, they should be center-aligned horizontally. An example of this alignment in a component is a `}
                    <a href="/design-guidelines/usage-and-behavior/buttons-and-links#link-button">{`link button`}</a>
          {`. If icons are stacked, they should also be center-aligned vertically.
`}
                    <div>
            <img src={srcImport21} {...{"alt":"Icon alignment","className":"ws-icon-alignment ws-img"}}>
            </img></div>
        </p>
</GridItem>
</Grid>
    <Divider className="ws-icons-divider"/>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Icon colors`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Visit our `}
            <a href="/design-guidelines/styles/colors" className="pf-m-link">{`colors page`}</a>
      {` to learn more about icon colors.`}
    </p>
    <Divider className="ws-icons-divider"/>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`All icons`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`PatternFly uses custom icons and selections from `}
            <a href="https://fontawesome.com/icons?d=gallery&m=free">{`Font Awesome Free`}</a>
      {`. PatternFly icons are mostly two dimensional and flat. Navigate to Font Awesome’s website to download SVGs of any additional ‘fa’ icons within their free set. Proper attribution should be given as outlined on the Font Awesome site.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Click on any single icon in the table to download it as an SVG. Download all icon SVGs `}
            <a href="https://patternfly-org.s3.us-east-2.amazonaws.com/patternfly-icons.zip">{`here`}</a>
      {`.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`If you’re a designer, these icons are the same set as the ones in the `}
            <a href="https://www.patternfly.org/v4/get-started/designers">{`PatternFly Sketch Design Kit`}</a>
      {`. It is possible to use any FontAwesome icon as long it follows the guidelines above.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`If you’re looking to copy HTML for an icon:`}
            <br/>
      {`
Use this for 'pficon' icons: `}
      <code {...{"className":"ws-code"}}>
        {`<i className="pf-icon [insert-icon-name]"></i>`}
      </code>
            <br/>
      {`
Use this for 'fa' solid icons: `}
      <code {...{"className":"ws-code"}}>
        {`<i className="fas [insert-icon-name]"></i>`}
      </code>
            <br/>
      {`
Use this for 'fa' regular icons: `}
      <code {...{"className":"ws-code"}}>
        {`<i className="far [insert-icon-name]"></i>`}
      </code>
            <br/>
      {`
`}
            <small>{`Note: Be sure to read `}
                <a href="/get-started/developers#using-styles" className="pf-m-link">{`how to get started with icons`}</a>
        {` when using 'fa' regular icons`}</small>
    </p>
    <p {...{"className":"ws-p"}}>
      {`If you're looking to copy React for an icon:`}
            <br/>
      {`
Use this for 'pficon' icons: `}
      <code {...{"className":"ws-code"}}>
        {`import { [insert-icon-name] } from '@patternfly/react-icons'`}
      </code>
    </p>
    <IconsTable/>
    <Divider className="ws-icons-divider"/>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Updated icon recommendations`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`We’ve recently updated some of our PatternFly icons as well as icon usage guidelines. If you are using an outdated icon, we suggest you migrate over to the newest recommendations.`}
    </p>
    <IconRecommendations/>
  </React.Fragment>
);
DocumentationStylesIconsDesignGuidelinesDocs.Component.displayName = 'DocumentationStylesIconsDesignGuidelinesDocs';
