import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsProgressCoreDocs = {
  "slug": "/documentation/components/progress/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/Progress/examples/Progress.md",
  "section": "components",
  "id": "Progress",
  "title": "Progress",
  "toc": [
    "Examples",
    "Documentation"
  ],
  "cssPrefix": "pf-c-progress"
};
DocumentationComponentsProgressCoreDocs.liveContext = {
  
};
DocumentationComponentsProgressCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsProgressCoreDocs} {...{"code":"<div class=\"pf-c-progress\" id=\"progress-simple-example\">\n  <div class=\"pf-c-progress__description\" id=\"progress-simple-example-description\">Title</div>\n  <div class=\"pf-c-progress__status\" aria-hidden=\"true\">\n    <span class=\"pf-c-progress__measure\">33%</span>\n  </div>\n  <div class=\"pf-c-progress__bar\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" aria-valuenow=\"33\" aria-describedby=\"progress-simple-example-description\">\n    <div class=\"pf-c-progress__indicator\" style=\"width:33%;\"></div>\n  </div>\n</div>","title":"Simple","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsProgressCoreDocs} {...{"code":"<div class=\"pf-c-progress pf-m-sm\" id=\"progress-sm-example\">\n  <div class=\"pf-c-progress__description\" id=\"progress-sm-example-description\">Title</div>\n  <div class=\"pf-c-progress__status\" aria-hidden=\"true\">\n    <span class=\"pf-c-progress__measure\">33%</span>\n  </div>\n  <div class=\"pf-c-progress__bar\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" aria-valuenow=\"33\" aria-describedby=\"progress-sm-example-description\">\n    <div class=\"pf-c-progress__indicator\" style=\"width:33%;\"></div>\n  </div>\n</div>","title":"Small","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsProgressCoreDocs} {...{"code":"<div class=\"pf-c-progress pf-m-lg\" id=\"progress-lg-example\">\n  <div class=\"pf-c-progress__description\" id=\"progress-lg-example-description\">Title</div>\n  <div class=\"pf-c-progress__status\" aria-hidden=\"true\">\n    <span class=\"pf-c-progress__measure\">33%</span>\n  </div>\n  <div class=\"pf-c-progress__bar\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" aria-valuenow=\"33\" aria-describedby=\"progress-lg-example-description\">\n    <div class=\"pf-c-progress__indicator\" style=\"width:33%;\"></div>\n  </div>\n</div>","title":"Large","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsProgressCoreDocs} {...{"code":"<div class=\"pf-c-progress pf-m-outside pf-m-lg\" id=\"progress-outside-example\">\n  <div class=\"pf-c-progress__description\" id=\"progress-outside-example-description\">Title</div>\n  <div class=\"pf-c-progress__status\" aria-hidden=\"true\">\n    <span class=\"pf-c-progress__measure\">33%</span>\n  </div>\n  <div class=\"pf-c-progress__bar\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" aria-valuenow=\"33\" aria-describedby=\"progress-outside-example-description\">\n    <div class=\"pf-c-progress__indicator\" style=\"width:33%;\"></div>\n  </div>\n</div>","title":"Outside","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsProgressCoreDocs} {...{"code":"<div class=\"pf-c-progress pf-m-lg pf-m-inside\" id=\"progress-inside-example\">\n  <div class=\"pf-c-progress__description\" id=\"progress-inside-example-description\">Title</div>\n  <div class=\"pf-c-progress__status\" aria-hidden=\"true\"></div>\n  <div class=\"pf-c-progress__bar\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" aria-valuenow=\"33\" aria-describedby=\"progress-inside-example-description\">\n    <div class=\"pf-c-progress__indicator\" style=\"width:33%;\">\n      <span class=\"pf-c-progress__measure\">33%</span>\n    </div>\n  </div>\n</div>","title":"Inside","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsProgressCoreDocs} {...{"code":"<div class=\"pf-c-progress pf-m-success\" id=\"progress-success-example\">\n  <div class=\"pf-c-progress__description\" id=\"progress-success-example-description\">Title</div>\n  <div class=\"pf-c-progress__status\" aria-hidden=\"true\">\n    <span class=\"pf-c-progress__measure\">100%</span>\n    <span class=\"pf-c-progress__status-icon\">\n      <i class=\"fas fa-check-circle\" aria-hidden=\"true\"></i>\n    </span>\n  </div>\n  <div class=\"pf-c-progress__bar\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" aria-valuenow=\"100\" aria-describedby=\"progress-success-example-description\">\n    <div class=\"pf-c-progress__indicator\" style=\"width:100%;\"></div>\n  </div>\n</div>","title":"Success","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsProgressCoreDocs} {...{"code":"<div class=\"pf-c-progress pf-m-danger\" id=\"progress-failure-example\">\n  <div class=\"pf-c-progress__description\" id=\"progress-failure-example-description\">Title</div>\n  <div class=\"pf-c-progress__status\" aria-hidden=\"true\">\n    <span class=\"pf-c-progress__measure\">33%</span>\n    <span class=\"pf-c-progress__status-icon\">\n      <i class=\"fas fa-times-circle\" aria-hidden=\"true\"></i>\n    </span>\n  </div>\n  <div class=\"pf-c-progress__bar\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" aria-valuenow=\"33\" aria-describedby=\"progress-failure-example-description\">\n    <div class=\"pf-c-progress__indicator\" style=\"width:33%;\"></div>\n  </div>\n</div>","title":"Failure","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsProgressCoreDocs} {...{"code":"<div class=\"pf-c-progress pf-m-lg pf-m-inside pf-m-success\" id=\"progress-inside-success-example\">\n  <div class=\"pf-c-progress__description\" id=\"progress-inside-success-example-description\">Title</div>\n  <div class=\"pf-c-progress__status\" aria-hidden=\"true\">\n    <span class=\"pf-c-progress__status-icon\">\n      <i class=\"fas fa-check-circle\" aria-hidden=\"true\"></i>\n    </span>\n  </div>\n  <div class=\"pf-c-progress__bar\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" aria-valuenow=\"100\" aria-describedby=\"progress-inside-success-example-description\">\n    <div class=\"pf-c-progress__indicator\" style=\"width:100%;\">\n      <span class=\"pf-c-progress__measure\">100%</span>\n    </div>\n  </div>\n</div>","title":"Inside success","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsProgressCoreDocs} {...{"code":"<div class=\"pf-c-progress pf-m-outside pf-m-lg pf-m-danger\" id=\"progress-outside-failure-example\">\n  <div class=\"pf-c-progress__description\" id=\"progress-outside-failure-example-description\">Title</div>\n  <div class=\"pf-c-progress__status\" aria-hidden=\"true\">\n    <span class=\"pf-c-progress__measure\">33%</span>\n    <span class=\"pf-c-progress__status-icon\">\n      <i class=\"fas fa-times-circle\" aria-hidden=\"true\"></i>\n    </span>\n  </div>\n  <div class=\"pf-c-progress__bar\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" aria-valuenow=\"33\" aria-describedby=\"progress-outside-failure-example-description\">\n    <div class=\"pf-c-progress__indicator\" style=\"width:33%;\"></div>\n  </div>\n</div>","title":"Outside failure","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsProgressCoreDocs} {...{"code":"<div class=\"pf-c-progress pf-m-singleline\" id=\"progress-singleline-example\">\n  <div class=\"pf-c-progress__description\" id=\"progress-singleline-example-description\"></div>\n  <div class=\"pf-c-progress__status\" aria-hidden=\"true\">\n    <span class=\"pf-c-progress__measure\">33%</span>\n  </div>\n  <div class=\"pf-c-progress__bar\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" aria-valuenow=\"33\" aria-describedby=\"progress-singleline-example-description\">\n    <div class=\"pf-c-progress__indicator\" style=\"width:33%;\"></div>\n  </div>\n</div>","title":"On single line","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsProgressCoreDocs} {...{"code":"<div class=\"pf-c-progress\" id=\"progress-no-measure-example\">\n  <div class=\"pf-c-progress__description\" id=\"progress-no-measure-example-description\">Title</div>\n  <div class=\"pf-c-progress__status\" aria-hidden=\"true\"></div>\n  <div class=\"pf-c-progress__bar\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" aria-valuenow=\"33\" aria-describedby=\"progress-no-measure-example-description\">\n    <div class=\"pf-c-progress__indicator\" style=\"width:33%;\"></div>\n  </div>\n</div>","title":"Without measure","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsProgressCoreDocs} {...{"code":"<div class=\"pf-c-progress pf-m-danger\" id=\"progress-no-measure-failure-example\">\n  <div class=\"pf-c-progress__description\" id=\"progress-no-measure-failure-example-description\">Title</div>\n  <div class=\"pf-c-progress__status\" aria-hidden=\"true\">\n    <span class=\"pf-c-progress__status-icon\">\n      <i class=\"fas fa-times-circle\" aria-hidden=\"true\"></i>\n    </span>\n  </div>\n  <div class=\"pf-c-progress__bar\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" aria-valuenow=\"33\" aria-describedby=\"progress-no-measure-failure-example-description\">\n    <div class=\"pf-c-progress__indicator\" style=\"width:33%;\"></div>\n  </div>\n</div>","title":"Failure without measure","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsProgressCoreDocs} {...{"code":"<div class=\"pf-c-progress\" id=\"progress-finite-step-example\">\n  <div class=\"pf-c-progress__description\" id=\"progress-finite-step-example-description\">Title</div>\n  <div class=\"pf-c-progress__status\" aria-hidden=\"true\">\n    <span class=\"pf-c-progress__measure\">2 of 5 units</span>\n  </div>\n  <div class=\"pf-c-progress__bar\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"5\" aria-valuenow=\"2\" aria-valuetext=\"2 of 5 units\" aria-describedby=\"progress-finite-step-example-description\">\n    <div class=\"pf-c-progress__indicator\" style=\"width:40%;\"></div>\n  </div>\n</div>","title":"Finite step","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Non-percantage progress`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`If the status that displays with the bar is not a percentage, then the ARIA tag `}
      <code {...{"className":"ws-code"}}>
        {`aria-valuetext`}
      </code>
      {` should be used to provide this status to screen reader users. This is the only case when setting the `}
      <code {...{"className":"ws-code"}}>
        {`aria-valuemax`}
      </code>
      {` to a value other than "100" is recommended, given how different screen readers handle these attributes.`}
    </p>
    <Example {...DocumentationComponentsProgressCoreDocs} {...{"code":"<div class=\"pf-c-progress\" id=\"progress-step-instruction-example\">\n  <div class=\"pf-c-progress__description\" id=\"progress-step-instruction-example-description\">Title</div>\n  <div class=\"pf-c-progress__status\" aria-hidden=\"true\">\n    <span class=\"pf-c-progress__measure\">Step 2: Copying files</span>\n  </div>\n  <div class=\"pf-c-progress__bar\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"5\" aria-valuenow=\"2\" aria-valuetext=\"Step 2: Copying files\" aria-describedby=\"progress-step-instruction-example-description\">\n    <div class=\"pf-c-progress__indicator\" style=\"width:40%;\"></div>\n  </div>\n</div>","title":"Progress step instruction","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Accessibility`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`If this component is describing the loading progress of a particular region of a page, the author should use `}
      <code {...{"className":"ws-code"}}>
        {`aria-describedby`}
      </code>
      {` to point to the status, and set the `}
      <code {...{"className":"ws-code"}}>
        {`aria-busy`}
      </code>
      {` attribute to `}
      <code {...{"className":"ws-code"}}>
        {`true`}
      </code>
      {` on the region until it is finished loading.`}
    </p>
    <table {...{"className":"ws-table"}}>
      <thead>
        <tr>
          <th>
            {`Attribute`}
          </th>
          <th>
            {`Applied to`}
          </th>
          <th>
            {`Outcome`}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`role="progressbar"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-progress__bar`}
            </code>
          </td>
          <td>
            {`This role is used for an element that displays the progress status for a task that takes a long time or consists of several steps.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-valuenow=""`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-progress__bar`}
            </code>
          </td>
          <td>
            {`This value needs to be updated as progress continues.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-valuemin="0"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-progress__bar`}
            </code>
          </td>
          <td>
            {`The minimum value for the progress bar.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-valuemax="100"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-progress__bar`}
            </code>
          </td>
          <td>
            {`The maximum value for the progress bar. If the progress is only defined using `}
            <code {...{"className":"ws-code"}}>
              {`aria-valuenow`}
            </code>
            {` (e.g a percentage), the value should be set to "100". If the progress is defined using `}
            <code {...{"className":"ws-code"}}>
              {`aria-valuetext`}
            </code>
            {`, then this value can be a number other than 100. For example, if `}
            <code {...{"className":"ws-code"}}>
              {`aria-valuetext`}
            </code>
            {` is "2 of 5 units", then `}
            <code {...{"className":"ws-code"}}>
              {`aria-valuemax`}
            </code>
            {` can be "5" and `}
            <code {...{"className":"ws-code"}}>
              {`aria-valuenow`}
            </code>
            {` can be "2".`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-describedby="[id of .pf-c-progress__description]"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-progress__bar`}
            </code>
          </td>
          <td>
            {`The description of what progress is being shown.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-valuetext="[loading state]"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-progress__bar`}
            </code>
          </td>
          <td>
            {`Provide a text string that communicates current status. Only use if the important information about status is included in the text string. Do not use if percentage is the most important value to communicate. Some screen readers will ignore the percentage value determined from `}
            <code {...{"className":"ws-code"}}>
              {`aria-valuenow`}
            </code>
            {` when `}
            <code {...{"className":"ws-code"}}>
              {`aria-valuetext`}
            </code>
            {` is used.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-hidden="true"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-progress__status`}
            </code>
          </td>
          <td>
            {`Hides the visible progress bar status from screen readers. This information is communicated by the aria attributes defined on the `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-progress__bar`}
            </code>
            {` element.`}
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Usage`}
    </AutoLinkHeader>
    <table {...{"className":"ws-table"}}>
      <thead>
        <tr>
          <th>
            {`Class`}
          </th>
          <th>
            {`Applied to`}
          </th>
          <th>
            {`Outcome`}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-progress`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates a progress component.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-progress__description`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`The description for a progress bar.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-progress__status`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Displays the % of progress and status icons.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-progress__measure`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Displays the % complete.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-progress__status-icon`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Displays the status icon. (optional)`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-progress__bar`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Displays across the entire width and represents the completed state.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-progress__indicator`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Displays with the `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-progress__bar`}
            </code>
            {` to indicate the progress so far.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-lg`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-progress`}
            </code>
          </td>
          <td>
            {`Modifies the progress bar to be larger.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-sm`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-progress`}
            </code>
          </td>
          <td>
            {`Modifies the progress bar to be smaller.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-inside`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-progress`}
            </code>
          </td>
          <td>
            {`Shows the measure within the progress indicator. NOTE: This option requires `}
            <code {...{"className":"ws-code"}}>
              {`.pf-m-lg`}
            </code>
            {`.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-outside`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-progress`}
            </code>
          </td>
          <td>
            {`Shows the measure and status icon to the right of the progress bar.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-singleline`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-progress`}
            </code>
          </td>
          <td>
            {`Modifies the progress component to exist on one row. If a measure is needed, use with `}
            <code {...{"className":"ws-code"}}>
              {`.pf-m-inside`}
            </code>
            {` or `}
            <code {...{"className":"ws-code"}}>
              {`.pf-m-outside`}
            </code>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-success`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-progress`}
            </code>
          </td>
          <td>
            {`Changes the appearance of the progess component to indicate a success state.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-danger`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-progress`}
            </code>
          </td>
          <td>
            {`Changes the appearance of the progess component to indicate a danger (failure) state.`}
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationComponentsProgressCoreDocs.Component.displayName = 'DocumentationComponentsProgressCoreDocs';
