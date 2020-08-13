import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport241 from '../../../../content/design-guidelines/usage-and-behavior/selection-controls/./img/switch.png';
import srcImport242 from '../../../../content/design-guidelines/usage-and-behavior/selection-controls/./img/checkbox-horizontal.png';
import srcImport243 from '../../../../content/design-guidelines/usage-and-behavior/selection-controls/./img/one-checkbox.png';
import srcImport244 from '../../../../content/design-guidelines/usage-and-behavior/selection-controls/./img/group-checkbox.png';
import srcImport245 from '../../../../content/design-guidelines/usage-and-behavior/selection-controls/./img/nested-controls-checkbox.png';
import srcImport246 from '../../../../content/design-guidelines/usage-and-behavior/selection-controls/./img/switch-check-1.png';
import srcImport247 from '../../../../content/design-guidelines/usage-and-behavior/selection-controls/./img/switch-check-2.png';
import srcImport248 from '../../../../content/design-guidelines/usage-and-behavior/selection-controls/./img/switch-check-3.png';
import srcImport249 from '../../../../content/design-guidelines/usage-and-behavior/selection-controls/./img/radio.png';
import srcImport250 from '../../../../content/design-guidelines/usage-and-behavior/selection-controls/./img/nested-controls-radio.png';
import srcImport251 from '../../../../content/design-guidelines/usage-and-behavior/selection-controls/./img/single-select.png';
import srcImport252 from '../../../../content/design-guidelines/usage-and-behavior/selection-controls/./img/checkbox-select.png';
import srcImport253 from '../../../../content/design-guidelines/usage-and-behavior/selection-controls/./img/selectlist-multi.png';
import srcImport254 from '../../../../content/design-guidelines/usage-and-behavior/selection-controls/./img/suggested-checkbox.png';
import srcImport255 from '../../../../content/design-guidelines/usage-and-behavior/selection-controls/./img/suggested-multiselect.png';
import srcImport256 from '../../../../content/design-guidelines/usage-and-behavior/selection-controls/./img/typeahead.png';

export const DocumentationComponentsSelectDesignGuidelinesDocs = {
  "slug": "/documentation/components/select/design-guidelines",
  "source": "design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/master/src/content/design-guidelines/usage-and-behavior/selection-controls/selection-controls.md",
  "section": "components",
  "id": "Select",
  "title": "Select",
  "toc": [
    "Usage",
    "Related components and demos"
  ]
};
DocumentationComponentsSelectDesignGuidelinesDocs.liveContext = {
  
};
DocumentationComponentsSelectDesignGuidelinesDocs.Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`Selection controls allow the user to provide information by selecting from a known set of options or a constrained format/value range.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Selection controls:`}
      </strong>
      {`
`}
      <a {...{"href":"#switch"}}>
        {`Switch`}
      </a>
      {`, `}
      <a {...{"href":"#checkboxes"}}>
        {`Checkboxes`}
      </a>
      {`, `}
      <a {...{"href":"#radio-buttons"}}>
        {`Radio buttons`}
      </a>
      {`, `}
      <a {...{"href":"#select-lists"}}>
        {`Select lists`}
      </a>
      {`.`}
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Selection controls enable users to select from a predetermined set of options. Choose controls based on the following considerations:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`How many options do you have to present to the user?`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`How many items does the user need to be able to select?`}
      </li>
    </ul>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Switch`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A switch allows users to instantly toggle between an enabled or disabled state. It is assumed that when a user toggles a switch, the change will save automatically without the need for additional action (like clicking a “Save” button).`}
    </p>
    <img src={srcImport241} {...{"alt":"Examples of switch buttons","width":"244","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`General guidelines`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Add a label in front of your switch to specify what is being switched on or off (example, wi-fi, bluetooth).`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Don’t use a switch if the options you’re presenting to the user are anything other than “on” or “off.” Instead, use radio buttons.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Depending on your use case, you may want to add labels to your switches for added clarity, like “on” and “off” to indicate to the user what setting they’ve switched to.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Checkboxes`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Checkboxes allow users to choose `}
      <strong>
        {`one or more items`}
      </strong>
      {` from a list of options.`}
    </p>
    <img src={srcImport242} {...{"alt":"Example of form question with checkboxes aligned horizontally","width":"312","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`You can also use a single checkbox to allow a user to enable or disable a feature or setting, along with a save button.`}
    </p>
    <img src={srcImport243} {...{"alt":"Example of single checkbox","width":"173","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`General guidelines`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Use checkboxes if you’re presenting 5 or fewer options to the user. If you’re presenting more than 5 options, use a `}
        <PatternflyThemeLink {...{"to":"/design-guidelines/usage-and-behavior/data-input#select-lists"}}>
          {`select list`}
        </PatternflyThemeLink>
        {` instead.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Use checkboxes if the user can select multiple options. If the user can only select one option, then use radio buttons.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Labeling and alignment`}
      </strong>
    </p>
    <p {...{"className":"ws-p"}}>
      {`Checkbox labels fall to the right of the checkbox control. If placed vertically, all checkbox controls should be aligned with the left edge of other controls or input fields in the form or on the page.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`You can use headings to label a group of checkboxes. The placement of headings will depend on the layout of other content in the form or on the page you’re designing. For more information on how to arrange checkboxes, see the `}
      <PatternflyThemeLink {...{"to":"/design-guidelines/usage-and-behavior/forms#data-input-arrangement"}}>
        {`forms documentation`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <img src={srcImport244} {...{"alt":"Example of a group of checkboxes","width":"443","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`You also have the option to use progressive disclosure by nesting other controls underneath a checkbox. The nested options would be enabled or disabled when the user selects or deselects a checkbox.`}
    </p>
    <img src={srcImport245} {...{"alt":"Example of nested control checkboxes","width":"459","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`When to use switches versus checkboxes`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The main difference between a switch and a checkbox is that a switch changes an option and saves it simultaneously, while checkboxes require a separate action such as pressing a “Submit” or “Save” button to save the selection.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Here are some guidelines for when to use a switch versus a checkbox:`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Use checkboxes when the options do not save automatically and require the user to perform an additional action to save changes (in this case, pressing the “Save changes” button).`}
        </p>
        <img src={srcImport246} {...{"alt":"Example 1 of do and don'ts for checkbox vs switch usee ","width":"661","className":"ws-img"}}>
        </img>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Use a switch for situations where you are turning a series of one or more independent options on or off.`}
        </p>
        <img src={srcImport247} {...{"alt":"Example 2 of do and don'ts for checkbox vs switch usee ","width":"661","className":"ws-img"}}>
        </img>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Use checkboxes when you may have an intermediate state where you can select all, none, or some actions.`}
        </p>
        <img src={srcImport248} {...{"alt":"Example 3 of do and don'ts for checkbox vs switch usee ","width":"661","className":"ws-img"}}>
        </img>
      </li>
    </ul>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Radio buttons`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Radio buttons allow users to select `}
      <strong>
        {`one item`}
      </strong>
      {` from a list of options.`}
    </p>
    <img src={srcImport249} {...{"alt":"Example of radio button options","width":"187","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`General guidelines`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Use radio buttons when a user needs to make one mutually exclusive choice, and only one option can be selected at a time.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`A default option should always be selected for the user. If the user selects a different option, the default option should be automatically deselected.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`To enable the user to select a null option, provide a radio button with the label “None.”`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Use radio buttons if you’re presenting 5 or fewer options to the user. If you’re presenting more than 5 options, use a `}
          <a {...{"href":"#single-select"}}>
            {`single select list`}
          </a>
          {`.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`If space is limited, you can also use progressive disclosure by nesting other controls underneath a radio button.`}
        </p>
        <img src={srcImport250} {...{"alt":"Example of nested control with radio buttons","width":"465","className":"ws-img"}}>
        </img>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Labeling and alignment`}
      </strong>
    </p>
    <p {...{"className":"ws-p"}}>
      {`Radio button labels fall to the right of the radio button control. You can use headings to label a group of radio buttons. The placement of headings will depend on the layout of other content in the form or on the page you’re designing. For more information on how to arrange radio buttons, see the `}
      <PatternflyThemeLink {...{"to":"/design-guidelines/usage-and-behavior/forms#data-input-arrangement"}}>
        {`forms documentation`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Select lists`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Select lists enable users to select one or more items from a list. Select lists should also be used when options are dynamic or variable.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`PatternFly offers several variations of select lists:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"#single-select"}}>
          {`Single select`}
        </a>
      </li>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"#checkbox-select"}}>
          {`Checkbox select`}
        </a>
      </li>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"#multiple-select"}}>
          {`Multiple select`}
        </a>
      </li>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"#typeahead"}}>
          {`Typeahead`}
        </a>
      </li>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"#form-select"}}>
          {`Form select`}
        </a>
      </li>
    </ul>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Single select`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Single select lists allow users to select a single, mutually exclusive option. When the user selects an option from the list, the selection appears in the toggle.`}
    </p>
    <img src={srcImport251} {...{"alt":"Example single select interaction","width":"496","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Checkbox select`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Checkbox select lists allow users to select one or more options from a known list of options, using checkboxes as a selection method. You may choose to have a badge display in the toggle to show how many items have been selected. A common use case for checkbox select lists is in a toolbar filter for a table or page, for example.`}
    </p>
    <img src={srcImport252} {...{"alt":"Example of checkbox select in a toolbar","width":"585","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Multiple select`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Multiple select lists allow users to select one or more options from a list, with the selected options marked with a blue check. It differs from the checkbox select in that each option selected by the user appears in the top display area as chips. Once the number of selections reaches a certain number (the default is 3, but you may choose to change this based on your use case), the regular chips will be replaced by a gray chip indicating how many more items were selected (for example, 1 more).`}
    </p>
    <img src={srcImport253} {...{"alt":"Example of multiple select list","width":"585","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`When to use checkbox select versus multiple select`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Both the checkbox select and multiple select lists allow users to select multiple options from a list. However, there are some points to take into consideration when deciding which one to use.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Use checkbox select when:`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Horizontal space is limited.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`It is not crucial for the user to see their selections in the toggle itself.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Using a select list inside a toolbar. Toolbars have limited space, and the user will already be able to see their selection as chips below the filter itself.`}
      </li>
    </ul>
    <img src={srcImport254} {...{"alt":"Example for using a checkbox select","width":"990","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Use multiple select when:`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Horizontal space is not limited`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`It is useful for the user to see their selections from the toggle itself.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`In a form, where a user may benefit from being able to quickly scan their inputs before submitting`}
      </li>
    </ul>
    <img src={srcImport255} {...{"alt":"Example for using a multiple select inside a form","width":"518","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Typeahead`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Typeahead allows users to narrow a displayed list of options by typing into the input field. Type ahead is  recommended for lists with more than ten options and is available for single and multiple select lists. Although the typeahead within toggle functionality does not exist for the checkbox select, there is an option to add a typeahead capability within the menu of items if needed, as seen in this `}
      <PatternflyThemeLink {...{"to":"/documentation/react/components/select#grouped-checkbox-input-with-filtering"}}>
        {`grouped checkbox input with filtering`}
      </PatternflyThemeLink>
      {` example.`}
    </p>
    <img src={srcImport256} {...{"alt":"Visual of a typeahead being used","width":"361","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`When providing fewer than 5 options, you can use `}
      <a {...{"href":"#radio-buttons"}}>
        {`radio buttons`}
      </a>
      {` or `}
      <a {...{"href":"#checkboxes"}}>
        {`checkboxes`}
      </a>
      {` to display all options to the user simultaneously if you don’t have any space constraints.`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Form select`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A form select is a native select created by the browser, and it’s typically used within forms. If your use case only calls for simple selects, you may opt to use a `}
      <PatternflyThemeLink {...{"to":"/documentation/react/components/formselect"}}>
        {`form select`}
      </PatternflyThemeLink>
      {`. But if your use case requires more customization and capability, use a PatternFly `}
      <PatternflyThemeLink {...{"to":"/documentation/react/components/select"}}>
        {`custom select list`}
      </PatternflyThemeLink>
      {`. Just keep in mind that you should not use custom selects and form selects together in the same context, in order to maintain visual consistency in the UI.`}
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
        <PatternflyThemeLink {...{"to":"/documentation/core/components/switch"}}>
          {`Switch`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/core/components/check"}}>
          {`Check`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/core/components/radio"}}>
          {`Radio`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/core/components/select"}}>
          {`Select`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/core/components/formcontrol"}}>
          {`Form control`}
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
        <PatternflyThemeLink {...{"to":"/documentation/react/components/switch"}}>
          {`Switch`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/react/components/checkbox"}}>
          {`Checkbox`}
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
        <PatternflyThemeLink {...{"to":"/documentation/react/components/formselect"}}>
          {`Form select`}
        </PatternflyThemeLink>
      </li>
    </ul>
  </React.Fragment>
);
DocumentationComponentsSelectDesignGuidelinesDocs.Component.displayName = 'DocumentationComponentsSelectDesignGuidelinesDocs';
