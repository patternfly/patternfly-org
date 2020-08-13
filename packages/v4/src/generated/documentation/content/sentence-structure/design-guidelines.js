import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationContentSentenceStructureDesignGuidelinesDocs = {
  "slug": "/documentation/content/sentence-structure/design-guidelines",
  "source": "design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/master/src/content/design-guidelines/content/sentence-structure.md",
  "section": "content",
  "id": "Sentence structure",
  "title": "Sentence structure",
  "toc": []
};
DocumentationContentSentenceStructureDesignGuidelinesDocs.liveContext = {
  
};
DocumentationContentSentenceStructureDesignGuidelinesDocs.Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`Use the second person "you/your" whenever you can. This way, your focus is on the user, and the product interaction feels more like a conversation.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Use the first person "I" when the user is agreeing to something. For example, a user can check a box reading, “I agree to the terms and conditions.”`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Try to avoid using third person "he/she/they/it." Third person sounds formal and disconnected from the user.`}
    </p>
    <table className="ws-content-table">
      <tr>
        <th>
          <center>
            <strong>
              <p {...{"className":"ws-p"}}>
                {`Before`}
              </p>
</strong>
</center>
</th>
                <th>
          <center>
            <strong>
              <p {...{"className":"ws-p"}}>
                {`After`}
              </p>
</strong>
</center>
</th>
</tr>
            <tr>
        <td>
          <p {...{"className":"ws-p"}}>
            {`Users can simplify their designs with PatternFly.`}
          </p>
</td>
                <td>
          <p {...{"className":"ws-p"}}>
            {`Simplify your designs with PatternFly.`}
          </p>
</td>
</tr>
</table>
    <br/>
    <p {...{"className":"ws-p"}}>
      {`Use the active voice whenever possible. The active voice makes a sentence shorter and gets the point across faster.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`The active voice is when the subject of the sentence performs the action. The passive voice is when the subject of the sentence receives the action.`}
    </p>
    <table className="ws-content-table">
      <tr>
        <th>
          <center>
            <strong>
              <p {...{"className":"ws-p"}}>
                {`Before`}
              </p>
</strong>
</center>
</th>
                <th>
          <center>
            <strong>
              <p {...{"className":"ws-p"}}>
                {`After`}
              </p>
</strong>
</center>
</th>
</tr>
            <tr>
        <td>
          <p {...{"className":"ws-p"}}>
            {`The book is being read by Matt.`}
          </p>
</td>
                <td>
          <p {...{"className":"ws-p"}}>
            {`Matt is reading the book.`}
          </p>
</td>
</tr>
</table>
    <br/>
    <p {...{"className":"ws-p"}}>
      {`There are some occasions when the `}
      <a {...{"href":"https://writing.wisc.edu/handbook/style/ccs_activevoice/"}}>
        {`passive voice is appropriate`}
      </a>
      {`, like when you don’t wish to point out a subject or when you want to emphasize an action. Also, use the passive voice to avoid assigning blame to a user, especially in error messages.`}
    </p>
    <table className="ws-content-table">
      <tr>
        <th>
          <center>
            <strong>
              <p {...{"className":"ws-p"}}>
                {`Before`}
              </p>
</strong>
</center>
</th>
                <th>
          <center>
            <strong>
              <p {...{"className":"ws-p"}}>
                {`After`}
              </p>
</strong>
</center>
</th>
</tr>
            <tr>
        <td>
          <p {...{"className":"ws-p"}}>
            {`You entered the wrong password.`}
          </p>
</td>
                <td>
          <p {...{"className":"ws-p"}}>
            {`The password is incorrect.`}
          </p>
</td>
</tr>
</table>
  </React.Fragment>
);
DocumentationContentSentenceStructureDesignGuidelinesDocs.Component.displayName = 'DocumentationContentSentenceStructureDesignGuidelinesDocs';
