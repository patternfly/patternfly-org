---
id: Checkbox
section: components
subsection: forms
---

import '../components.css';

## Usage
Checkboxes allow users to choose **1 or more items** from a list of options.

<div class="ws-docs-content-img">
![Example of a form question with mutliple checkbox options stacked vertically.](./img/CB-usage-multi.svg)
</div>

You can also use a single checkbox to allow a user to enable or disable a feature or setting, along with a save button. 

<div class="ws-docs-content-img">
![Example of a single checkbox.](./img/CB-usage-single.svg)
</div>

### When to use

* Use checkboxes if you’re presenting 5 or fewer options to the user. If you’re presenting more than 5 options, use a [select list](/components/menus/select/design-guidelines) instead.
* Use checkboxes if the user can select multiple options. If the user can only select 1 option, then use radio buttons. 


### Labeling and alignment

Checkbox labels fall to the right of the checkbox control. If placed vertically, all checkbox controls should be aligned with the left edge of other controls or input fields, in the form or on the page. 

You can use headings to label a group of checkboxes. The placement of headings will depend on the layout of other content in the form or on the page you’re designing. For more information on how to arrange checkboxes, see our [forms documentation](/components/forms/form/design-guidelines).

<div class="ws-docs-content-img">
![Example of a group of checkboxes.](./img/CB-alignment.svg)
</div>

You also have the option to use progressive disclosure by nesting other controls underneath a checkbox. The nested options would be enabled or disabled when the user selects or deselects a checkbox.

<div class="ws-docs-content-img">
![Example of nested control checkboxes.](./img/CB-nested.svg)
</div>

### When to use switches vs. checkboxes

The main difference between a switch and a checkbox is that a switch changes an option and saves it simultaneously, while checkboxes require a separate action such as pressing a “Submit” or “Save” button to save the selection. 
* Use checkboxes when the options do not save automatically and require the user to perform an additional action to save changes (in this case, pressing the “Save changes” button).

    <div class="ws-docs-content-img">
    ![Example 1 of do's and don'ts for using a checkbox or a switch.](./img/CB-vs-switch-1.svg)
    </div>


* Use a switch for situations where you are turning a series of one or more independent options on or off.

    <div class="ws-docs-content-img">
    ![Example 2 of do's and don'ts for using a checkbox or a switch.](./img/CB-vs-switch-2.svg)
    </div>

* Use checkboxes when you may have an indeterminate state where you can select all, none, or some actions.

    <div class="ws-docs-content-img">
    ![Example 3 of do's and don'ts for using a checkbox or a switch.](./img/CB-vs-switch-3.svg)
    </div>
