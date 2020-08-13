import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport2 from '../../content/contribute/./developer-flowchart.png';

export const ContributeDevelopDocs = {
  "slug": "/contribute/develop",
  "source": "pages-contribute",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/master/src/content/contribute/develop.md",
  "section": "contribute",
  "id": "Develop",
  "title": "Develop",
  "toc": [
    "Ways to contribute",
    "Lifecycle"
  ]
};
ContributeDevelopDocs.liveContext = {
  
};
ContributeDevelopDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Ways to contribute`}
    </AutoLinkHeader>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        {`Pick an open issue in the `}
        <a {...{"href":"https://github.com/patternfly/patternfly-next/issues"}}>
          {`pf-next repo`}
        </a>
        {` and make a comment that you would like to contribute`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Pick up open issue in `}
        <a {...{"href":"https://github.com/patternfly/patternfly-react/issues"}}>
          {`pf-react`}
        </a>
        {` backlog`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`File a bug:`}
      </li>
    </ol>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`View the documentation for the component`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Search open issues in CSS & React to see if exists already`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`If the bug is present in only the React implementation, create a bug on that repo`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`If the bug can be seen on both the React and CSS side, it should be created on the CSS repo.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Mention which project the bug was noticed in and if there is a deadline that the fix is needed for`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <a {...{"href":"https://github.com/patternfly/patternfly-next#guidelines-for-css-development"}}>
        {`Core contribution guidelines`}
      </a>
      {` & `}
      <a {...{"href":"https://github.com/patternfly/patternfly-react/blob/master/CONTRIBUTING.md#contribution-process"}}>
        {`React contribution guidelines`}
      </a>
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Lifecycle`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport2} {...{"alt":"Development contribution lifecycle flowchart","className":"ws-img"}}>
      </img>
    </p>
  </React.Fragment>
);
ContributeDevelopDocs.Component.displayName = 'ContributeDevelopDocs';
