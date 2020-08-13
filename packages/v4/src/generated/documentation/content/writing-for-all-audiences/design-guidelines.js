import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationContentWritingForAllAudiencesDesignGuidelinesDocs = {
  "slug": "/documentation/content/writing-for-all-audiences/design-guidelines",
  "source": "design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/master/src/content/design-guidelines/content/writing-for-all-audiences.md",
  "section": "content",
  "id": "Writing for all audiences",
  "title": "Writing for all audiences",
  "toc": []
};
DocumentationContentWritingForAllAudiencesDesignGuidelinesDocs.liveContext = {
  
};
DocumentationContentWritingForAllAudiencesDesignGuidelinesDocs.Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`UX copy should be accessible by everyone, so consider all users’ abilities (physical, cognitive, and more) when you write. Refer to the `}
      <a {...{"href":"https://www.w3.org/TR/WCAG21/"}}>
        {`Web Content Accessibility Guidelines (WCAG)`}
      </a>
      {` for accessibility compliance information.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Here are a few best practices for making your UX copy more accessible:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Avoid directional language, like “Use the button to the left." It will not help a user who is working with a screen reader.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Use proper heading levels (H1, H2) to articulate the page content’s organization.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Do not identify items by color, like “Click the blue button.”`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Use plain language and short sentences.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Use common contractions (for example, "it’s” and "you’re") in areas that sound most natural to you. Contractions are great for maintaining a casual voice and tone and for making your `}
        <a {...{"href":"https://help.blackboard.com/Accessibility/Write_Accessible_Content"}}>
          {`UX copy more accessible`}
        </a>
        {`. UX copy should make a product interaction feel, look, and sound more human. Contractions help you get there.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Be clear and concise.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Use the following guidelines when writing text that is only visible to a screen reader, like an aria-label that describes an icon button:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Avoid redundancy. Screen readers will announce the name of the component or element as well as associated property and state when the HTML is defined correctly.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Make sure labels for elements like buttons or links make sense when pulled out of the context. Use descriptive hyperlinks instead of raw links or vague linked text, like “Click here.”`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`When you define an aria-label for an element that also has associated visible text in the UI, ensure the aria-label begins with the same text that appears in the UI to avoid confusion with screen reader users who have vision.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Avoid unnecessary capitalization.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Avoid leet speak that uses numbers or special characters in place of letters (like "a11y" for accessibility).`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Accessibility and localization/translation are closely related. If you create accessible UX copy, you’re most likely making localization and translation easier too.  Keep these additional guidelines in mind when writing for global users:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Avoid idioms like “cross your fingers.” They don’t make sense in all languages.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Avoid vague terms like “stuff” or “kind of.” They can be translated incorrectly.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Use humor sparingly. It generally doesn’t translate well.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Avoid culture-specific or location-specific references and examples. They won’t resonate with all users.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Avoid adding words to an image. They make translation harder.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Translated text can be a drastically different length than the text you originally provide. Ensure the text you use can be 50% shorter or 50% longer with no negative impact on design.`}
      </li>
    </ul>
  </React.Fragment>
);
DocumentationContentWritingForAllAudiencesDesignGuidelinesDocs.Component.displayName = 'DocumentationContentWritingForAllAudiencesDesignGuidelinesDocs';
