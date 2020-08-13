import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport257 from '../../../../content/design-guidelines/usage-and-behavior/text-input/./img/textinput-elements.png';
import srcImport258 from '../../../../content/design-guidelines/usage-and-behavior/text-input/./img/input-group.png';
import srcImport259 from '../../../../content/design-guidelines/usage-and-behavior/text-input/./img/error.png';

export const DocumentationComponentsTextInputDesignGuidelinesDocs = {
  "slug": "/documentation/components/text-input/design-guidelines",
  "source": "design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/master/src/content/design-guidelines/usage-and-behavior/text-input/text-input.md",
  "section": "components",
  "id": "Text input",
  "title": "Text input",
  "toc": [
    "Elements",
    "Usage"
  ]
};
DocumentationComponentsTextInputDesignGuidelinesDocs.liveContext = {
  
};
DocumentationComponentsTextInputDesignGuidelinesDocs.Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`Use text input to gather free-form text from a user.`}
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Elements`}
    </AutoLinkHeader>
    <img src={srcImport257} {...{"alt":"Text input elements","width":"488","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Label:`}
        </strong>
        {` Indicates what you want the user to input in the text field.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Input field:`}
        </strong>
        {` Area for user to type in their text input.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          <a {...{"href":"#help"}}>
            {`Help`}
          </a>
          {`:`}
        </strong>
        {` Provides contextual assistance like popovers, placeholder text, or helper text, in any area where the user might need additional information to provide the right input.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          <a {...{"href":"#errors-and-validation"}}>
            {`Errors and validation`}
          </a>
          {`:`}
        </strong>
        {` Ensures that the correct information is collected before the form can be submitted to the system.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Be sure to size input fields appropriately to anticipate the longest likely value (if a maximum character length is known).`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`When a value is too long to be fully displayed in a text field, use `}
        <PatternflyThemeLink {...{"to":"/design-guidelines/content/grammar-and-terminology#truncation"}}>
          {`truncation`}
        </PatternflyThemeLink>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Provide a `}
        <PatternflyThemeLink {...{"to":"/documentation/react/components/textarea"}}>
          {`text area`}
        </PatternflyThemeLink>
        {` for input anticipated to be longer than a single line.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Pre-populate fields with known values when possible, like a default IP address, for example.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Help`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Placeholder text`}
      </strong>
    </p>
    <p {...{"className":"ws-p"}}>
      <PatternflyThemeLink {...{"to":"/design-guidelines/usage-and-behavior/forms#placeholder-text"}}>
        {`Placeholder text`}
      </PatternflyThemeLink>
      {` is text inside a form field that provides an example of the required or recommended format for text input. For example, placeholder text for a date might be "DD/MM/YYYY".`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Helper text`}
      </strong>
    </p>
    <p {...{"className":"ws-p"}}>
      <PatternflyThemeLink {...{"to":"/design-guidelines/usage-and-behavior/forms#helper-text"}}>
        {`Helper text`}
      </PatternflyThemeLink>
      {` is text below a form field that helps a user provide the right information, like "Enter a unique name".`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Popovers`}
      </strong>
    </p>
    <p {...{"className":"ws-p"}}>
      <PatternflyThemeLink {...{"to":"/design-guidelines/usage-and-behavior/forms#popovers"}}>
        {`Popovers`}
      </PatternflyThemeLink>
      {` provide context around a text or input field. Popovers are represented with an unfilled question mark con (fa-question-circle) and displayed when the user clicks on the icon.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`For more information about how to provide help content, see  the `}
      <PatternflyThemeLink {...{"to":"/design-guidelines/usage-and-behavior/forms#user-help"}}>
        {`forms design guidelines`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Input groups`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Input groups allow users to group multiple input types into one control. An example of this is adding buttons to one or both sides of a text input, including in a search field and an email input field. View more examples in the `}
      <PatternflyThemeLink {...{"to":"/documentation/react/components/inputgroup"}}>
        {`input group documentation`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <img src={srcImport258} {...{"alt":"Example of input groups","width":"496","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Errors and validation`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Wherever possible, use inline errors to notify users where there is an issue with their input. Inline errors help should be short and help users quickly identify and understand what they need to fix and why.`}
    </p>
    <img src={srcImport259} {...{"alt":"error and validation example","width":"320","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`For more information about how to provide errors and validation, see  the `}
      <PatternflyThemeLink {...{"to":"/design-guidelines/usage-and-behavior/forms#errors-and-validation"}}>
        {`forms design guidelines`}
      </PatternflyThemeLink>
      {`.`}
    </p>
  </React.Fragment>
);
DocumentationComponentsTextInputDesignGuidelinesDocs.Component.displayName = 'DocumentationComponentsTextInputDesignGuidelinesDocs';
