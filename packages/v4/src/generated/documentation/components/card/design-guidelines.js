import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport63 from '../../../../content/design-guidelines/usage-and-behavior/card/./img/card.png';
import srcImport64 from '../../../../content/design-guidelines/usage-and-behavior/card/./img/card-types.png';
import srcImport65 from '../../../../content/design-guidelines/usage-and-behavior/card/./img/dashboard.png';
import srcImport66 from '../../../../content/design-guidelines/usage-and-behavior/card/./img/card-view.png';
import srcImport67 from '../../../../content/design-guidelines/usage-and-behavior/card/./img/white-background.png';
import srcImport68 from '../../../../content/design-guidelines/usage-and-behavior/card/./img/gray-background.png';
import srcImport69 from '../../../../content/design-guidelines/usage-and-behavior/card/./img/mobile-cards.png';
import srcImport70 from '../../../../content/design-guidelines/usage-and-behavior/card/./img/few-multiple-actions.png';
import srcImport71 from '../../../../content/design-guidelines/usage-and-behavior/card/./img/inline-actions.png';
import srcImport72 from '../../../../content/design-guidelines/usage-and-behavior/card/./img/multiple-inline.png';
import srcImport73 from '../../../../content/design-guidelines/usage-and-behavior/card/./img/global-actions.png';
import srcImport74 from '../../../../content/design-guidelines/usage-and-behavior/card/./img/card-images.png';
import srcImport75 from '../../../../content/design-guidelines/usage-and-behavior/card/./img/card-view-sticky-toolbar.png';

export const DocumentationComponentsCardDesignGuidelinesDocs = {
  "slug": "/documentation/components/card/design-guidelines",
  "source": "design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/master/src/content/design-guidelines/usage-and-behavior/card/card.md",
  "section": "components",
  "id": "Card",
  "title": "Card",
  "toc": [
    "Card types",
    "Usage",
    "Card views"
  ]
};
DocumentationComponentsCardDesignGuidelinesDocs.liveContext = {
  
};
DocumentationComponentsCardDesignGuidelinesDocs.Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`card`}
      </strong>
      {` is a square or rectangular container of related information. Cards symbolize units of information, and each one acts as an entry point for users to access more details. For example, in dashboards and catalog views, cards function as a preview of a detailed page.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`A card usually consists of  3 parts:`}
    </p>
    <img src={srcImport63} {...{"alt":"3 parts of a card","width":"394","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Header`}
        </strong>
        {`: Title of the information group`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Body`}
        </strong>
        {`: Brief details about the group`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Footer`}
        </strong>
        {`: Links to access more information about the group`}
      </li>
    </ol>
    <p {...{"className":"ws-p"}}>
      {`Cards are flexible, and you can customize them in a variety of ways:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`A card can contain a header with an image, actions, and a body.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`A card can contain only a header and a body.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`A card can contain a header with an image, a body, and footer.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Card types`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`PatternFly supports two types of cards:`}
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Compact (recommended):`}
        </strong>
        {` Compact cards use 16px spacing with an 8px spacer between the header and body and 16px between the body and footer.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Standard:`}
        </strong>
        {` Standard cards use 24px spacing with a 16px spacer between the header and body and 24px between the body and footer.`}
      </li>
    </ol>
    <img src={srcImport64} {...{"alt":"compact and standard card types","width":"779","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use a card:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`To visually group content or distinguish information from the rest of a page’s content. Examples include dashboards and catalog views.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`To organize content in layouts with multiple columns or grids.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`To compare separate groups of information.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`To make media such as images and videos easier to scan.`}
      </li>
    </ul>
    <img src={srcImport65} {...{"alt":"card view with charts","width":"990","className":"ws-img"}}>
    </img>
    <br/>
    <br/>
    <p {...{"className":"ws-p"}}>
      {`Do NOT use a card to show a dense amount of repetitive, related content. Use a list or table view instead.`}
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Card views`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`card view`}
      </strong>
      {` is a grid of cards that displays a small to moderate amount of content.`}
    </p>
    <img src={srcImport66} {...{"alt":"card view","width":"990","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use a card view to:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Display items in a data set that are best identified by a graphic or other visual representation.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Make information easier to visualize and compare.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Summarize a large number of objects at once within the same page.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Do NOT use a card view to make a large amount of text-based content easier to scan. Use a table or list view instead.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Background colors for card views`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use a white or a gray background for your card views.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Use a white background if your content view can change. Examples:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`A card that opens an expandable panel on the right`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`A card view that toggles into a table or list view`}
      </li>
    </ul>
    <img src={srcImport67} {...{"alt":"card view with white background","width":"990","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Note`}
      </strong>
      {`: If you use a white background, apply a gray border to your card instead of a drop shadow.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Use a gray background if the sole purpose of your content view is to display cards.`}
    </p>
    <img src={srcImport68} {...{"alt":"card view with gray background","width":"990","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Card views on mobile`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Cards will size down appropriately based on the built-in CSS responsiveness behaviors. Most of the time, they’ll follow the grid layout, expanding and compressing at certain breakpoints. At the smallest mobile size, they take up almost the entire width of the screen.`}
    </p>
    <img src={srcImport69} {...{"alt":"mobile card view","width":"375","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Card view actions`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`You can customize card actions in a few ways. Here are some recommendations to consider depending on your use case:`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Inline actions`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`If an action can be performed on one card only, place the action in the card’s body or footer. You don’t need to include a checkbox because the actions are card-specific.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`If you have a few cards with single actions, use the secondary button style.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`If you have multiple cards with single actions, use a link button or link text.`}
      </li>
    </ul>
    <img src={srcImport70} {...{"alt":"few cards with multiple actions","width":"990","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Inline action cards are commonly used as navigation or drill-down indicators. In this case, present the user action on the card to differentiate this type of navigational card from a standard card. This way, users can easily distinguish the card types if your application includes both.`}
    </p>
    <img src={srcImport71} {...{"alt":"cards with inline actions","width":"990","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Multiple inline actions`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`If multiple actions can be performed on a single card, place those actions in a kebab. Position the kebab in the top-right corner of the header.`}
    </p>
    <img src={srcImport72} {...{"alt":"cards with multiple inline actions in a kebab","width":"990","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Global actions`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`If an action can be performed globally on multiple cards, or if it leads to multiple pieces of content at the same time, place the action in a toolbar above the card view. In the top-right corner of your card, add a checkbox so that users can select one or more items.`}
    </p>
    <img src={srcImport73} {...{"alt":"card view with global action toolbar","width":"990","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        {`Upon hover, the card’s shadow expands.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Global actions are placed in the toolbar.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`The card’s checkbox allows a user to perform an action on multiple cards. When a user selects a card, the checkbox turns blue to indicate selection.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Images`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Only include meaningful images on your cards (don’t add them for decoration). Images should help users identify specific content types. Place smaller images above the card’s header, and place larger images within the card’s body.`}
    </p>
    <img src={srcImport74} {...{"alt":"card view with logo images in each card","width":"913","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Bottom pagination`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`If your card view has multiple pages, add a footer with pagination.`}
    </p>
    <img src={srcImport75} {...{"alt":"card view with sticky bottom toolbar","width":"1440","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Related components and demos:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"https://www.patternfly.org/v4/documentation/core/demos/cardview"}}>
          {`HTML/CSS card view`}
        </a>
      </li>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"https://www.patternfly.org/v4/documentation/react/components/card"}}>
          {`React card view`}
        </a>
      </li>
    </ul>
  </React.Fragment>
);
DocumentationComponentsCardDesignGuidelinesDocs.Component.displayName = 'DocumentationComponentsCardDesignGuidelinesDocs';
