import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport5 from '../../../../content/design-guidelines/content/./img/truncation1@2x.jpg';
import srcImport6 from '../../../../content/design-guidelines/content/./img/truncation2@2x.jpg';
import srcImport7 from '../../../../content/design-guidelines/content/./img/truncation3@2x.jpg';

export const DocumentationContentTruncationDesignGuidelinesDocs = {
  "slug": "/documentation/content/truncation/design-guidelines",
  "source": "design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/master/src/content/design-guidelines/content/truncation.md",
  "section": "content",
  "id": "Truncation",
  "title": "Truncation",
  "toc": [
    "Where to truncate",
    "Additional truncation guidelines"
  ]
};
DocumentationContentTruncationDesignGuidelinesDocs.liveContext = {
  
};
DocumentationContentTruncationDesignGuidelinesDocs.Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`Use truncation whenever the string overflows the container and you don't want multiple lines of text.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Examples:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Page titles that show object/host names`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport5} {...{"alt":"#truncation1","className":"ws-img"}}>
      </img>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Table or list view cells that contain long strings or lots of data and that have some method to view the full text`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport6} {...{"alt":"#truncation1","className":"ws-img"}}>
      </img>
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Where to truncate`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Whether to design for truncating strings at the beginning, end, or in the middle requires a bit of research.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Does the product you’re designing for have a default truncation scheme? For example, if your product has a default setting for how to truncate host names but also a user preference if users want to change it to suit their naming scheme, you should follow that along with this style guide’s guidelines.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport7} {...{"alt":"#truncation1","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      {`If the product doesn't have a default truncation scheme, think about how the product's users are apt to name objects. Is it more likely that the unique part of the name will be at the beginning or end of the string? Based on the answer, you should either truncate at the end of the string (abcdef...) or in the middle of the string (abc...ghi). To decide on a method, ask yourself: `}
      <em>
        {`Which part of the string that is not truncated is more likely to differentiate the item?`}
      </em>
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Additional truncation guidelines`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Indicate truncated text with an ellipsis (…). If the text is part of a link, the ellipsis should also be part of the link.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Avoid abbreviations or truncated text in navigation items (all levels of navigation in the masthead and left navigation).`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`In any container holding a string, if there is not sufficient room for the full spelling or hyphenated word, consider abbreviating the text. Do not truncate text in column headings.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Leave no fewer than 4 characters when truncating text, and preferably leave enough characters to give a fair idea of what the string says (for example, don't truncate “demo1.internal-el6.satellite” to “de…”).`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Ensure that there is at least one method for the user to view the entire string. We recommend using a tooltip (useful for fewer than 150 characters or so). You could also include expanding rows or use overlays.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Avoid truncation directly before or after punctuation whenever possible. It’s tricky to differentiate whether the punctuation is part of the ellipsis or part of the name (for example, don't truncate “demo1.internal-el6.satellite” to “demo1…”).`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`If a table column is resizable, the truncated text should adjust accordingly.`}
      </li>
    </ul>
  </React.Fragment>
);
DocumentationContentTruncationDesignGuidelinesDocs.Component.displayName = 'DocumentationContentTruncationDesignGuidelinesDocs';
