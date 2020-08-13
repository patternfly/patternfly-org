import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport150 from '../../../../content/design-guidelines/usage-and-behavior/forms/./img/form-elements.png';
import srcImport151 from '../../../../content/design-guidelines/usage-and-behavior/forms/./img/data-inputs.png';
import srcImport152 from '../../../../content/design-guidelines/usage-and-behavior/forms/./img/horizontal-list.png';
import srcImport153 from '../../../../content/design-guidelines/usage-and-behavior/forms/./img/vertical-list.png';
import srcImport154 from '../../../../content/design-guidelines/usage-and-behavior/forms/./img/multicolumn-list.png';
import srcImport155 from '../../../../content/design-guidelines/usage-and-behavior/forms/./img/top-labels.png';
import srcImport156 from '../../../../content/design-guidelines/usage-and-behavior/forms/./img/left-labels.png';
import srcImport157 from '../../../../content/design-guidelines/usage-and-behavior/forms/./img/radio-check.png';
import srcImport158 from '../../../../content/design-guidelines/usage-and-behavior/forms/./img/required-field.png';
import srcImport159 from '../../../../content/design-guidelines/usage-and-behavior/forms/./img/required-optional-forms.png';
import srcImport160 from '../../../../content/design-guidelines/usage-and-behavior/forms/./img/placeholder-helper.png';
import srcImport161 from '../../../../content/design-guidelines/usage-and-behavior/forms/./img/placeholder-format.png';
import srcImport162 from '../../../../content/design-guidelines/usage-and-behavior/forms/./img/placeholder-example.png';
import srcImport163 from '../../../../content/design-guidelines/usage-and-behavior/forms/./img/helper-text.png';
import srcImport164 from '../../../../content/design-guidelines/usage-and-behavior/forms/./img/popover.png';
import srcImport165 from '../../../../content/design-guidelines/usage-and-behavior/forms/./img/progressive-disclosure.png';
import srcImport166 from '../../../../content/design-guidelines/usage-and-behavior/forms/./img/error-message.png';
import srcImport167 from '../../../../content/design-guidelines/usage-and-behavior/forms/./img/error-validation.png';
import srcImport168 from '../../../../content/design-guidelines/usage-and-behavior/forms/./img/form-spacing.png';
import srcImport169 from '../../../../content/design-guidelines/usage-and-behavior/forms/./img/button-placement.png';
import srcImport170 from '../../../../content/design-guidelines/usage-and-behavior/forms/./img/page-form.png';
import srcImport171 from '../../../../content/design-guidelines/usage-and-behavior/forms/./img/wizard-form.png';
import srcImport172 from '../../../../content/design-guidelines/usage-and-behavior/forms/./img/modal-form.png';
import srcImport173 from '../../../../content/design-guidelines/usage-and-behavior/forms/./img/multi-column-eg.png';
import srcImport174 from '../../../../content/design-guidelines/usage-and-behavior/forms/./img/multi-column-read.png';

export const DocumentationComponentsFormDesignGuidelinesDocs = {
  "slug": "/documentation/components/form/design-guidelines",
  "source": "design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/master/src/content/design-guidelines/usage-and-behavior/forms/forms.md",
  "section": "components",
  "id": "Form",
  "title": "Form",
  "toc": [
    "Form elements",
    "Designing forms",
    "Errors and validation",
    "Form formatting",
    "Related components and demos"
  ]
};
DocumentationComponentsFormDesignGuidelinesDocs.liveContext = {
  
};
DocumentationComponentsFormDesignGuidelinesDocs.Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A form is a group of elements used to collect information from a user. Forms can appear in a variety of contexts, like inside a page, in a modal, or in a wizard, depending on the use case.  Some form examples include a log-in form, a registration form, a settings configuration form, or a survey.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <PatternflyThemeLink {...{"to":"/documentation/core/demos/basicforms"}}>
        {`View form demos`}
      </PatternflyThemeLink>
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Form elements`}
    </AutoLinkHeader>
    <img src={srcImport150} {...{"alt":"Example of a form with four typical form elements listed later","width":"459","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Most forms will contain the following basic elements:`}
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          <a {...{"href":"#labels"}}>
            {`Labels`}
          </a>
          {`:`}
        </strong>
        {` Labels let users know what information they should submit in each form field.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          <PatternflyThemeLink {...{"to":"/design-guidelines/usage-and-behavior/text-input"}}>
            {`Text input/text area`}
          </PatternflyThemeLink>
          {`:`}
        </strong>
        {` These areas provide spaces for users to enter text.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          <a {...{"href":"#data-inputs"}}>
            {`Data inputs`}
          </a>
          {`:`}
        </strong>
        {` Data input provides a way for users to submit any information that is not freeform text, such as checkboxes, radio buttons, and dropdowns.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          <a {...{"href":"#buttons"}}>
            {`Buttons`}
          </a>
          {`:`}
        </strong>
        {` Buttons enable a user to submit or exit a form.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Designing forms`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Form Content`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Think of a form as a conversation between your application and your user. Apply the following principles to organize and craft content for your forms:`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Focus on the task and context`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Be sure you understand what task your user is trying to accomplish with this form, and consider how they’re thinking about that task. Ask yourself:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`What are they trying to achieve?`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`What kinds of questions will they have?`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Where might they get stuck?`}
      </li>
    </ul>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Form writing guidance`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Start by writing out the conversation you might have with someone if you were guiding them through the task. This exercise can help you organize your form, name your fields appropriately, better understand the context of the task, and write in a more natural way.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Use your understanding of context to plan your content hierarchy:`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Include the most critical information in the field label.`}
        </strong>
        {` Answer the most basic question first: What data do I need to provide here? The field label you choose will depend on the context of your form. Field labels should be unique and identify all the information that is being collected.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Include critical secondary information as helper text.`}
        </strong>
        {` Critical secondary information is information a user must have in order to provide the right input. For example, a user creating a name for a new asset may need to specify a unique name for that asset. Letting the user know this up front helps avoid unnecessary errors.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Include background information/context as field-level help in a popover.`}
        </strong>
        {` For example, you could use this type of help to define an unfamiliar term or concept that a novice user might not be familiar with.
`}
        <strong>
          {`Never hide critical information in a popover.`}
        </strong>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Use natural language.`}
        </strong>
        {` Again, think of a form as a conversation with your user. No one wants to have a conversation with a robot.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Data inputs`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`PatternFly provides a variety of input components that enable a user to make a selection. Each component was created to serve a specific use case.`}
    </p>
    <img src={srcImport151} {...{"alt":"Visual of four data input possibilities mentioned in this section","width":"804","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Switch`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use a switch to toggle between two different states.`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Radio buttons`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use radio buttons when users can only choose one option from a list of two or more mutually exclusive options. Selecting a different radio button will automatically deselect the previously selected option. If you have more than 5 options to present to the user, use a select list.`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Checkboxes`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use checkboxes to enable users to select any number of items from a list. The user could select all of the available options, some of them, or none. If you have more than 5 options to present to the user, use a select list.`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Select lists`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use a select list to enable users to select one or more options from a list of options. Select lists can be configured to enable users to select one option (single select) or multiple options (multi-select) depending on the use case. Use a select list when you have more than 5 options to present to a user.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Learn more about data input variations in the `}
      <PatternflyThemeLink {...{"to":"/design-guidelines/usage-and-behavior/data-input/"}}>
        {`data input design guidelines`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Data input arrangement`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Arrange radio buttons and checkboxes vertically or horizontally depending on space considerations.  We suggest the following:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`In cases where saving vertical space is important and there are three or fewer items, consider placing in a horizontal list.`}
        </p>
        <img src={srcImport152} {...{"alt":"Example of Data inputs in horizontal list","width":"466","className":"ws-img"}}>
        </img>
      </li>
    </ul>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`In cases where there are more than three items and you want to make it easier to quickly scan the list of options, stack them vertically.`}
        </p>
        <img src={srcImport153} {...{"alt":"Example of Data inputs in vertical list","width":"225","className":"ws-img"}}>
        </img>
      </li>
    </ul>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`If you have space constraints (and your labels are short) you can also use a multi-column grid.`}
        </p>
        <img src={srcImport154} {...{"alt":"Example of data inputs in multi-column grid","width":"466","className":"ws-img"}}>
        </img>
      </li>
    </ul>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Labels`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Always provide labels for text and data input so that users understand what information is being requested of them. Labels can be aligned at the top or to the left of an input, although top alignment is preferable for the following reasons:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Saves horizontal space`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Allows for more responsive designs`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Assures closer proximity to text fields, aiding with wrapping when necessary`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Results in easier scanning of the form fields`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Whichever approach you use, we recommend that you maintain consistency throughout an application.`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Top-aligned labels`}
    </AutoLinkHeader>
    <img src={srcImport155} {...{"alt":"Example of label aligned to the top of the input box","width":"444","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Use top-aligned labels by default. Top-aligned labels provide a consistent left edge and close proximity between label and input. Top-aligned labels also offer the most horizontal area for long labels.`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Left-aligned labels`}
    </AutoLinkHeader>
    <img src={srcImport156} {...{"alt":"Example of label aligned to the left of the input box","width":"444","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Left-aligned labels are another available form option. They are useful for layouts with more horizontal space than vertical. However, as a general rule, they should be avoided in favor of top-aligned labels.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`To accommodate mobile viewports, left-aligned labels should responsively adjust to a top-aligned layout for smaller viewports.`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Checkbox and radio button labels`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Checkboxes and radio buttons have a different labeling convention, where the option labels should be aligned to the right of the input control.`}
    </p>
    <img src={srcImport157} {...{"alt":"Example of checkboxes and radio buttons aligned to the right of the input control","width":"376","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`General labeling guidelines`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Use sentence-style capitalization for all text elements except: product names, proper nouns and acronyms. Sentence-style capitalizes only the first word of each sentence and proper nouns, like names.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Always provide a label for input components.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Labels should clearly state the required input.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Do not`}
        </strong>
        {` use a colon after the label name.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Required fields`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A required field should be indicated with an asterisk ( * ) to the right of the field label.`}
    </p>
    <img src={srcImport158} {...{"alt":"Example of field with required field indication","width":"444","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`If `}
      <strong>
        {`all fields`}
      </strong>
      {` on a form are required, do not use an asterisk for every field. Instead, provide a message at the top of the form stating, "All fields are required." If all fields are optional, the message should state, "All fields are optional."`}
    </p>
    <img src={srcImport159} {...{"alt":"Example of two forms with indication at the top of whether all fields are required or all fields are optional","width":"983","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`User help`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`There are 3 different ways you can help a user with filling out a form: placeholder text, helper text, and popovers.`}
    </p>
    <img src={srcImport160} {...{"alt":"Example of placeholder text and helper text used in the same input field","width":"323","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Placeholder text`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Placeholder text is text inside a form field that provides an example of the required or recommended format for text input. For example, placeholder text for a date might be “MM-DD-YYYY” to indicate the formatting order the date should be entered in. Note that it should not include crucial information, as it disappears as soon as a user starts typing.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`For accessibility reasons, you should always precede placeholder text that is in example form with "Example," followed by a space like "Example, (555) 555-5555" for a phone number example or "Example, 491" for a security code example. This will ensure that users with screen readers will know the difference between the form label and the placeholder text. Placeholder text that does not use an actual example, like “MM-DD-YYYY,” does not need to be preceded with “Example.”`}
    </p>
    <img src={srcImport161} {...{"alt":"Example of a date placeholder text inside text input field","width":"323","className":"ws-img"}}>
    </img>
    <img src={srcImport162} {...{"alt":"Example of a phone number placeholder text inside text input field","width":"323","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Usage`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Use placeholder text when the requested data type might be unfamiliar or the field requires the user to provide data in a specific format.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Try to limit the usage of placeholder text to unfamiliar input types or specific syntax requirements (like a specific date format or number format).`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Keep placeholder text brief, and only use it when necessary.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Do not`}
        </strong>
        {` use placeholder text as a replacement for field labels, or when the information is critical for users to see while they are filling out the field.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Helper text`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Helper text is permanent text below a form field that helps a user provide the right information, like Enter a unique name.`}
    </p>
    <img src={srcImport163} {...{"alt":"Example of helper text underneath the text input field","width":"323","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Usage`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Helper text should be kept concise`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Helper text should be specific to the input and not the label.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`If there is specific information about the label it should be with the label.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`If needed, helper text can wrap to two lines, but it should never extend past the width of the input field.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Keep helper text concise and avoid exceeding the length of the input.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Popovers`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Popovers are content boxes that are used for fields that might require additional background or explanation. You can also use a popover to link to external help pages or other related information. In forms, popovers are indicated by an unfilled question mark circle that a user can click on to reveal the information. They should be placed to the right of a form label.`}
    </p>
    <img src={srcImport164} {...{"alt":"Example of popover content box used in a form field","width":"411","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Usage`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`You may use popovers for content that requires formatting like numbered or bulleted lists.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Use popovers to guide users as to where they can find the information needed.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Use popovers for content that requires you to include buttons, links, or images.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Do not`}
        </strong>
        {` hide critical information inside a popover that users would need in order to complete their task.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`For more information on user help, see our `}
      <PatternflyThemeLink {...{"to":"/design-guidelines/usage-and-behavior/embedded-assistance"}}>
        {`embedded assistance guidelines`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Use progressive disclosure`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use progressive disclosure to hide and show fields based on the users’ selection. This approach keeps the workflow short and allows the user to focus on only the fields relevant to them. It also avoids using color to indicate whether or not a field is available, making it suitable for visually impaired users.`}
    </p>
    <img src={srcImport165} {...{"alt":"Example of progressive disclosure with one radio button selected to only show those inputs","width":"562","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Errors and validation`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`When a form field submission results in an error, let users know as soon as possible. Always present error states on the form using field level errors whenever possible. The error state you can use will depend on whether validation happens on loss of focus or on submission. When an error occurs, any placeholder text will no longer be visible as it will be replaced by the user’s input. Additionally, field level errors will replace any existing helper text until the error is fixed. Therefore, it is important that your error message explains what the user can do to fix it, beyond stating that there is an error.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`For example, instead of simply telling the user there is an “invalid input”,  error messages should specify the correct format to re-write the input in such as “Date format must be MM-YY-DD”.`}
    </p>
    <img src={srcImport166} {...{"alt":"Visualized example for right vs. wrong way to write an input error","width":"649","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Validation on loss of focus`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Validation on loss of focus can be performed as soon as a field loses focus. It alerts users of errors or issues immediately after they complete their input, through inline validation, allowing users to quickly see and address issues.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Some common use cases include:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`A user entering data in an invalid format.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`A user leaving a required field blank.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`A user leaving a required field incomplete.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Validation on submission`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Validation on submission is performed when the user attempts to submit a form. In this scenario, the user completes the form in its entirety and the page is reloaded with any errors detected.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`For validation on submission, use an `}
      <a {...{"href":"design-guidelines/usage-and-behavior/alerts-and-notifications#inline-alerts"}}>
        {`inline alert`}
      </a>
      {` along with field level errors wherever possible to make it simple for the user to quickly identify areas that need to be fixed.
Notifications should describe the error and help users solve the problem.`}
    </p>
    <img src={srcImport167} {...{"alt":"Example of errors after validation on submission, including an inline alert at the top, and field level errors","width":"459","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Form formatting`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Spacing`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`There should always be 24px spacing underneath every form input. If there is helper text, the 24px spacing should start after the helper text. Additionally, the spacing between data inputs like checkboxes and radio buttons, for example, should also be 24px when on the same line and 24px when the options are presented on top of one another. For more spacing information, read the `}
      <PatternflyThemeLink {...{"to":"/design-guidelines/styles/spacers#considering-line-height-and-padding"}}>
        {`PatternFly spacer guidelines`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <img src={srcImport168} {...{"alt":"Basic form example with spacers to demonstrate how form elements should be spaced","width":"460","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Buttons`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Placement`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Buttons to submit the form should always be placed to the bottom left of the form and be left-aligned with all the form fields. Buttons should be placed 16px apart, no matter where the form is placed. This includes when the form is inside a page, inside a wizard, or on a card. This solves for a number of issues outlined in the `}
      <PatternflyThemeLink {...{"to":"/design-guidelines/usage-and-behavior/buttons-and-links#button-placement"}}>
        {`Buttons documentation page`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Buttons for other actions outside of submitting or cancelling the form may be placed elsewhere depending on your use case.`}
    </p>
    <img src={srcImport169} {...{"alt":"Examples of right button placement and  wrong button placement","width":"983","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Button accessibility`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`There are times where multiple forms may live on the same page, which means that there may be multiple submit buttons. Although fully sighted individuals can easily identify which button submits which form, this is not the case for screen reader users who would not be able to identify between actions that are labeled the same. For that reason, it is critical to incorporate the name of the form, or some type of unique context, into the accessible name that's used for the submit button. For example, if there was a form titled "Create account,” the submit button could read "Submit form.” However, the accessible name could be "Submit create account form" so that the submit button can be distinguished from another in the same document. This will allow the user to have more context, helping fill the gaps for any element that may have multiple instances on the same page.`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Enabling and disabling buttons`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Form submit buttons should be disabled until a user starts filling out the form or edits it in any way.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`For short forms like wizards, disable submit buttons until all conditions required to complete the form are met — this reduces the need to return validation errors due to incomplete submissions.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`For long scrolling forms, do not disable the submit button — the missing field and submit button might not be visible on the screen at the same time.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Once a user has submitted a form, disable the submit button while processing is taking place to avoid duplicate submission.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Use feedback messages and progress indicators like spinners or progress bars if the time to process the form might exceed users’ expectations.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Forms in a page`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Placement`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Forms in a page should be left and top aligned in the content area of a page. There should be a minimum of 24px padding around the contents of the form and the neighboring elements.`}
    </p>
    <img src={srcImport170} {...{"alt":"Example of form in a page","width":"990","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Width`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Generally, it is up to you to decide how wide you want your form to be, but here are some guidelines and recommendations:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`The width of your form should generally reflect the length of the content that's being inputted.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Your form width should be as wide as the widest input field in the form.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`If your input fields are all very long, the maximum suggested width is 880 pixels. However, you should use your best judgement based on the context and content of the form. Having a form that is 880px wide is usually not necessary.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Note that all input fields in your form will be the same length. The only exception being in a `}
      <a {...{"href":"#multi-column-forms"}}>
        {`multi-column form`}
      </a>
      {`, where you may have two or more adjacent fields in a single line. In that case, the form inputs will share the available width on that line.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Forms in wizard`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Similar to an in-page form, forms in wizards should be aligned to the left of the content area and have a minimum of 24px padding around its contents and the neighboring elements. This would look the same whether you are using an in-page wizard or a modal wizard.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Additionally, error validation for a form in a wizard’s page should occur when or by the time the user clicks the “Next” button. You should not wait until the user has completed the whole wizard before telling them where possible errors lie.`}
    </p>
    <img src={srcImport171} {...{"alt":"Example of form in an in-page wizard","width":"990","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Forms in a modal`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Forms in a modal should be horizontally centered with the modal background and fill up the modal width, leaving 24px between the form contents, and the modal background edges.`}
    </p>
    <img src={srcImport172} {...{"alt":"Example of form in a modal","width":"384","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Multi-column forms`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Multi-column forms are forms that can have multiple inputs on a single form line. You can create a multi-column form using any of the `}
      <PatternflyThemeLink {...{"to":"/documentation/core/layouts/bullseye"}}>
        {`layouts`}
      </PatternflyThemeLink>
      {` offered in PatternFly, such as the `}
      <PatternflyThemeLink {...{"to":"/documentation/core/layouts/grid"}}>
        {`Grid`}
      </PatternflyThemeLink>
      {` or `}
      <PatternflyThemeLink {...{"to":"/documentation/core/layouts/flex"}}>
        {`Flex`}
      </PatternflyThemeLink>
      {` layouts.`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Multi-column forms can be useful when you have limited vertical space. However, as a general rule, PatternFly recommends only using multi-column forms if you have extra space and avoiding them otherwise. They can be more confusing to the user and increase the chances of a user missing out on a form field.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`If you do decide to group certain columns together, they should be organized so that field information on the same line is related to one another. Common cases for this include:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`First name, Middle initial, Last name`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`City, State, Zip code`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Credit card number, Expiration date, Security code`}
      </li>
    </ul>
    <img src={srcImport173} {...{"alt":"Example of correct and incorrect multi-column forms","width":"990","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`You should never have multi-column forms that read like a book, where you finish the left side of the form first, then move on to the right side. The form itself should still be filled from top to button and should not have two unrelated fields on the same line.`}
    </p>
    <img src={srcImport174} {...{"alt":"Visual of how multi-column forms should be read and presented","width":"990","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Related components and demos`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The PatternFly components listed can be used in a number of ways to build forms to suit specific needs or use cases.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`HTML/CSS components`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/core/components/form"}}>
          {`Form`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/core/components/button"}}>
          {`Button`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/core/components/check"}}>
          {`Check`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/core/components/content"}}>
          {`Content`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/core/components/dropdown"}}>
          {`Dropdown`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/core/components/formcontrol"}}>
          {`Form control`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/core/components/inputgroup"}}>
          {`Input group`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/core/components/popover"}}>
          {`Popover`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/core/components/progress"}}>
          {`Progress`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/core/components/switch"}}>
          {`Switch`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/core/components/tooltip"}}>
          {`Tooltip`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`React components`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/react/components/form"}}>
          {`Form`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/react/components/button"}}>
          {`Button`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/react/components/checkbox"}}>
          {`Checkbox`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/react/components/dropdown"}}>
          {`Dropdown`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/react/components/progress"}}>
          {`Progress`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/react/components/radio"}}>
          {`Radio`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/react/components/select"}}>
          {`Select`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/react/components/switch"}}>
          {`Switch`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/react/components/textarea"}}>
          {`Text area`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/react/components/text"}}>
          {`Text`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/react/components/popover"}}>
          {`Popover`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/react/components/textinput"}}>
          {`Text input`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/react/components/tooltip"}}>
          {`Tooltip`}
        </PatternflyThemeLink>
      </li>
    </ul>
  </React.Fragment>
);
DocumentationComponentsFormDesignGuidelinesDocs.Component.displayName = 'DocumentationComponentsFormDesignGuidelinesDocs';
