import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport97 from '../../../../content/design-guidelines/usage-and-behavior/data-loading/./img/spinner-sizes.png';
import srcImport98 from '../../../../content/design-guidelines/usage-and-behavior/data-loading/./img/spinner-in-select.png';
import srcImport99 from '../../../../content/design-guidelines/usage-and-behavior/data-loading/./img/spinner-in-cards.png';
import srcImport100 from '../../../../content/design-guidelines/usage-and-behavior/data-loading/./img/spinner-in-table.png';
import srcImport101 from '../../../../content/design-guidelines/usage-and-behavior/data-loading/./img/spinner-full-page.png';

export const DocumentationComponentsSpinnerDesignGuidelinesDocs = {
  "slug": "/documentation/components/spinner/design-guidelines",
  "source": "design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/master/src/content/design-guidelines/usage-and-behavior/data-loading/data-loading.md",
  "section": "components",
  "id": "Spinner",
  "title": "Spinner",
  "toc": [
    "Elements",
    "Usage",
    "Spinner in context",
    "Related components and demos"
  ]
};
DocumentationComponentsSpinnerDesignGuidelinesDocs.liveContext = {
  
};
DocumentationComponentsSpinnerDesignGuidelinesDocs.Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`Data loading patterns are used to inform users that objects are loading on the screen even though they have yet to appear. A component that we use to demonstrate data loading is a spinner.`}
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Elements`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Spinner`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport97} {...{"alt":"spinner-sizes","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      {`Spinners are offered in different sizes that follow the sizing of our icons. These sizes include extra small, small, medium and large. Depending on the size of information you are loading and the space you are dealing with, we recommend using the spinner size that generally matches.`}
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use a spinner when the data you are dealing with is unknown in both quantity and shape. Spinners are also good to use when in progress of loading a screen that may not have any data, for example an `}
      <PatternflyThemeLink {...{"to":"/design-guidelines/usage-and-behavior/empty-state"}}>
        {`empty state screen or failed outcome`}
      </PatternflyThemeLink>
      {`. A common use case for spinners is within a table view, where the spinner can take up the area of the table before it loads.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Do not use a spinner to replace a `}
      <PatternflyThemeLink {...{"to":"/design-guidelines/usage-and-behavior/progress-bar"}}>
        {`progress bar`}
      </PatternflyThemeLink>
      {`. Spinners are vague in their promises of results to the user and are best to use when the expected wait time is between 1-5 seconds. Do not use a spinner if the loading process is less than 1 second. For experiences longer than 5 seconds, use a progress bar.`}
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Spinner in context`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Spinners are centered within the container AND the viewport by default in all use cases. Although this is the standard position of it, the spinner may be repositioned if necessary for particular screens and screen sizes.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Spinner in select list (small)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport98} {...{"alt":"spinner-in-select","className":"ws-img"}}>
      </img>
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Spinner in cards within a dashboard (medium)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport99} {...{"alt":"spinner-in-cards","className":"ws-img"}}>
      </img>
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Spinner in a data list or table (large)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport100} {...{"alt":"spinner-in-table","className":"ws-img"}}>
      </img>
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Spinner in a full page (large)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport101} {...{"alt":"spinner-full-page","className":"ws-img"}}>
      </img>
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Related components and demos`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`HTML/CSS`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/core/components/spinner#component-title"}}>
          {`Spinner`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`React`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/react/components/spinner/#component-title"}}>
          {`Spinner`}
        </PatternflyThemeLink>
      </li>
    </ul>
  </React.Fragment>
);
DocumentationComponentsSpinnerDesignGuidelinesDocs.Component.displayName = 'DocumentationComponentsSpinnerDesignGuidelinesDocs';
