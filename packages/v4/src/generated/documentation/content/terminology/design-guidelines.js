import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationContentTerminologyDesignGuidelinesDocs = {
  "slug": "/documentation/content/terminology/design-guidelines",
  "source": "design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/master/src/content/design-guidelines/content/terminology.md",
  "section": "content",
  "id": "Terminology",
  "title": "Terminology",
  "toc": [
    "Abbreviations and acronyms"
  ]
};
DocumentationContentTerminologyDesignGuidelinesDocs.liveContext = {
  
};
DocumentationContentTerminologyDesignGuidelinesDocs.Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`Here's a list of common UI terms and their usage.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Add`}
      </strong>
      {`: (v.) Use to describe adding an existing item to an existing list, group, view, or other container element.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Opposite: Remove`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Notes: If the object being added is not readily apparent from the context, consider adding a noun (like “Add user”). If you’re creating a new object, do not use `}
        <em>
          {`Add`}
        </em>
        {`. See `}
        <em>
          {`Create`}
        </em>
        {`.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Cancel`}
      </strong>
      {`: (v.) Use to describe ending an action in progress or ending an action where changes could be lost (like in a form).`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Change`}
      </strong>
      {`: Do not use. See `}
      <em>
        {`Edit`}
      </em>
      {`.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Close`}
      </strong>
      {`: (v.) Use to describe shutting an open window (like a message dialog).`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Opposite: Open`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Notes: Do not use interchangeably with `}
        <em>
          {`Cancel`}
        </em>
        {` or `}
        <em>
          {`Quit`}
        </em>
        {`.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Collapse`}
      </strong>
      {`: (v.) Use to describe minimizing a container element (like a list or message) so that it’s partially visible.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Opposite: Expand`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Continue`}
      </strong>
      {`: (v.) Use to describe proceeding with an action or process that is in progress.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Create`}
      </strong>
      {`: (v.) Use to describe creating something new.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Opposite: Delete`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Notes: If the object being created is not readily apparent from the context, consider adding a noun (like “Create user”). `}
        <em>
          {`New`}
        </em>
        {` or `}
        <em>
          {`Add`}
        </em>
        {` are not recommended for this use case. See `}
        <em>
          {`Add`}
        </em>
        {` for usage guidelines.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Delete`}
      </strong>
      {`: (v.) Use to describe completely removing an object. Delete is a destructive action.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Opposite: Create`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Notes: `}
        <em>
          {`Erase`}
        </em>
        {` and `}
        <em>
          {`Remove`}
        </em>
        {` are not recommended for this use case. See `}
        <em>
          {`Remove`}
        </em>
        {` for usage guidelines.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Deselect`}
      </strong>
      {`: (v.) Use to prompt the user to deselect an item from a list, group, view, or other container element.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Opposite: Select`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Edit`}
      </strong>
      {`: (v.) Use to describe making changes to an object (like a file, configuration, or policy).`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Notes: `}
        <em>
          {`Modify`}
        </em>
        {` and `}
        <em>
          {`Change`}
        </em>
        {` are not recommended for this use case.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Expand`}
      </strong>
      {`: (v.) Use to describe expanding a container element (like a list or message) to show all its contents.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Opposite: Collapse`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Hide`}
      </strong>
      {`: (v.) Use to describe hiding something that is displayed in the interface.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Opposite: Show`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Log in`}
      </strong>
      {`: (v.) Use to describe logging in.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Opposite: Log out`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Notes: Use “log in to,” not “log into.”`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Login`}
      </strong>
      {`: (adj.) Use to describe something related to the act of logging in to an application, like a login page.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Notes: The noun `}
        <em>
          {`Login`}
        </em>
        {` can also be used as an alternative for `}
        <em>
          {`Username`}
        </em>
        {`, but `}
        <em>
          {`Username`}
        </em>
        {` is recommended.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Log out`}
      </strong>
      {`: (v.) Use to describe logging out.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Opposite: Log in`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Modify`}
      </strong>
      {`: Do not use. See `}
      <em>
        {`Edit`}
      </em>
      {`.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`New`}
      </strong>
      {`: Do not use. See `}
      <em>
        {`Add`}
      </em>
      {` or `}
      <em>
        {`Create`}
      </em>
      {`.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Open`}
      </strong>
      {`: (v.) Use to describe launching something (like system preferences).`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Opposite: Close`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Quit`}
      </strong>
      {`: (v.) Use to describe exiting an application.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Remove`}
      </strong>
      {`: (v.) Use to describe removing an item from a list, group, view, or other container element without completely deleting it. Also see `}
      <em>
        {`Add`}
      </em>
      {` and `}
      <em>
        {`Delete`}
      </em>
      {`.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Opposite: Add`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Notes: If what you’re removing is not readily apparent from the context, consider adding a noun (like “Remove file”).`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Select`}
      </strong>
      {`: (v.) Use to prompt the user to select an item from a list, group, view, or other container element.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Opposite: Deselect`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Notes: Do not use `}
        <em>
          {`Choose`}
        </em>
        {` for this use case.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Set up`}
      </strong>
      {`: (v.) Use to describe setting up an arrangement (like a system, process, or environment).`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Notes: `}
        <em>
          {`Set up`}
        </em>
        {` is two words as a verb and one word as a noun. See `}
        <em>
          {`Setup`}
        </em>
        {`.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Setup`}
      </strong>
      {`: (n.) Use to describe the setup of something (like a system, process, or environment).`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Notes: `}
        <em>
          {`Setup`}
        </em>
        {` is one word as a noun and two words as a verb. See `}
        <em>
          {`Set up`}
        </em>
        {`.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Show`}
      </strong>
      {`: (v.) Use to describe displaying something that is hidden in the interface.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Opposite: Hide`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Notes: Do not use interchangeably with `}
        <em>
          {`View`}
        </em>
        {` or `}
        <em>
          {`Expand`}
        </em>
        {`.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`View`}
      </strong>
      {`: (v.) Use to describe accessing another page to see details. (n.) Use to represent an arrangement of data in the interface (like a list view).`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Notes`}
      </strong>
      {`: Do not use interchangeably with `}
      <em>
        {`Show`}
      </em>
      {` or `}
      <em>
        {`Expand`}
      </em>
      {`.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Username`}
      </strong>
      {`: (n.) Usually a unique ID (like ssmith123).`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Utilize`}
      </strong>
      {`: Do not use. Opt for the less formal version, `}
      <em>
        {`Use`}
      </em>
      {`.`}
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Abbreviations and acronyms`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use abbreviations that users are familiar with, and write out uncommon abbreviations. Abbreviate units of measurement, and use abbreviations consistently.`}
    </p>
    <table align="center; margin: 0px auto; table-layout:fixed;">
      <tr>
        <th>
          <p {...{"className":"ws-p"}}>
            {`Abbreviation`}
          </p>
</th>
                <th>
          <p {...{"className":"ws-p"}}>
            {`Usage`}
          </p>
</th>
</tr>
            <tr>
        <td>
          <p {...{"className":"ws-p"}}>
            {`CSS`}
          </p>
</td>
                <td>
          <p {...{"className":"ws-p"}}>
            {`Stands for `}
                        <i>{`Cascading Style Sheets`}</i>
            {`. Write `}
                        <i>{`CSS`}</i>
            {` in all caps.`}
          </p>
</td>
</tr>
            <tr>
        <td>
          <p {...{"className":"ws-p"}}>
            {`e.g., i.e., and etc.`}
          </p>
</td>
                <td>
          <p {...{"className":"ws-p"}}>
            {`Use sparingly. These terms aren’t easily understood by everyone, especially users whose native language is not rooted in Latin. Write out their meaning instead:`}
                        <ul>              <li>{`e.g. – for example`}</li>
                            <li>{`i.e. – in other words`}</li>
                            <li>{`etc. – and more/so on`}</li></ul>
          </p>
</td>
</tr>
            <tr>
        <td>
          <p {...{"className":"ws-p"}}>
            {`HTML`}
          </p>
</td>
                <td>
          <p {...{"className":"ws-p"}}>
            {`Stands for `}
                        <i>{`Hypertext Markup Language`}</i>
            {`. Write `}
                        <i>{`HTML`}</i>
            {` in all caps.`}
          </p>
</td>
</tr>
            <tr>
        <td>
          <p {...{"className":"ws-p"}}>
            {`JS`}
          </p>
</td>
                <td>
          <p {...{"className":"ws-p"}}>
            {`Stands for `}
                        <i>{`JavaScript`}</i>
            {`. Write `}
                        <i>{`JS`}</i>
            {` in all caps.`}
          </p>
</td>
</tr>
            <tr>
        <td>
          <p {...{"className":"ws-p"}}>
            {`K8`}
          </p>
</td>
                <td>
          <p {...{"className":"ws-p"}}>
            {`Stands for `}
                        <i>{`Kubernetes`}</i>
            {`.`}
          </p>
</td>
</tr>
            <tr>
        <td>
          <p {...{"className":"ws-p"}}>
            {`KVM`}
          </p>
</td>
                <td>
          <p {...{"className":"ws-p"}}>
            {`Refers to a kernel-based virtual machine. Write `}
                        <i>{`KVM`}</i>
            {` in all caps.`}
          </p>
</td>
</tr>
            <tr>
        <td>
          <p {...{"className":"ws-p"}}>
            {`sysadmin`}
          </p>
</td>
                <td>
          <p {...{"className":"ws-p"}}>
            {`Avoid using abbreviations like `}
                        <i>{`sysadmin`}</i>
            {` and `}
                        <i>{`SysAdmin`}</i>
            {` because they’re too informal and not always easily understood. `}
                        <i>{`System`}</i>
            {` should be singular (not `}
                        <i>{`Systems administrator`}</i>
            {`) because it can include both a single system and multiple systems, similar to `}
                        <i>{`brain surgeon`}</i>
            {`, who works on more than one brain. Taken from Red Hat Corporate Style Guide.`}
          </p>
</td>
</tr>
            <tr>
        <td>
          <p {...{"className":"ws-p"}}>
            {`U.S.`}
          </p>
</td>
                <td>
          <p {...{"className":"ws-p"}}>
            {`As a noun, use `}
                        <i>{`United States`}</i>
            {` unless there are space constraints. As an adjective, use `}
                        <i>{`U.S.`}</i>
            {` (for example, `}
                        <i>{`U.S. soldier`}</i>
            {`). As part of an organization, use `}
                        <i>{`U.S.`}</i>
            {` Taken from Red Hat Corporate Style Guide.`}
          </p>
</td>
</tr>
            <tr>
        <td>
          <p {...{"className":"ws-p"}}>
            {`URL`}
          </p>
</td>
                <td>
          <p {...{"className":"ws-p"}}>
            {`Stands for `}
                        <i>{`Uniform Resource Locator`}</i>
            {`. Write `}
                        <i>{`URL`}</i>
            {` in all caps.`}
          </p>
</td>
</tr>
            <tr>
        <td>
          <p {...{"className":"ws-p"}}>
            {`VM`}
          </p>
</td>
                <td>
          <p {...{"className":"ws-p"}}>
            {`Refers to a virtual machine. OK to abbreviate as long as you've spelled it out once in the first occurrence and as long as `}
                        <i>{`VM`}</i>
            {` won't be confused with other terms that share that acronym. Taken from Red Hat Corporate Style Guide.`}
          </p>
</td>
</tr>
            <tr>
        <td>
          <p {...{"className":"ws-p"}}>
            {`N/A`}
          </p>
</td>
                <td>
          <p {...{"className":"ws-p"}}>
            {`Refers to `}
                        <i>{`data not available`}</i>
            {`. Applies to tables, list views, card views, and more.`}
          </p>
</td>
</tr>
            <tr>
        <td>
          <p {...{"className":"ws-p"}}>
            {`--`}
          </p>
</td>
                <td>
          <p {...{"className":"ws-p"}}>
            {`Refers to `}
                        <i>{`data not applicable`}</i>
            {`, meaning data will never be available for the object (unlike `}
                        <i>{`N/A`}</i>
            {`).`}
          </p>
</td>
</tr>
</table>
  </React.Fragment>
);
DocumentationContentTerminologyDesignGuidelinesDocs.Component.displayName = 'DocumentationContentTerminologyDesignGuidelinesDocs';
