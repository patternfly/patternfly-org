---
title: Forms
author: dlabrecq
layout: page-tabs
---
<div class="tab-content">
  <div role="tabpanel" class="tab-pane active" id="overview">
    <p>Often overlooked, form text fields within modals or on a page are common elements that require definition as they
     are frequently used for a variety of applications. Well thought out, vetted forms should provide the user with an
     expected and efficient experience not only in it’s input function but also in its validation. Based on
     contributions from the Cockpit team, a form fields with input validation pattern has been devised. This pattern
     includes details about the form text fields, validation at both the form and field level as well as operational
     behavior.</p>
    <p>Jump to <a href="#example-overview-1">Within a Modal</a>, <a href="#example-overview-2">Within a Modal with Error</a>, <a href="#example-overview-3">Within a Page</a> or <a href="#example-overview-4">Within a Page with Error</a></p>
    <h2 id="example-overview-1">Within a Modal</h2>
    <div class="example-pf">
      {% include widgets/forms/input-validation-modal.html id-default="modalInput" id-disabled="modalInputDisabled" id-error="modalInputError" has-error=false %}
    </div>
    <h2 id="example-overview-2">Within a Modal with Error</h2>
    <div class="example-pf">
      {% include widgets/forms/input-validation-modal.html id-default="modalInput" id-disabled="modalInputDisabled" id-error="modalInputError" has-error=true %}
    </div>
    <h2 id="example-overview-3">Within a Page</h2>
    <div class="example-pf">
      {% include widgets/forms/input-validation-form.html id-default="exampleInput" id-disabled="exampleInputDisabled" id-error="exampleInputError" has-error=false %}
    </div>
    <h2 id="example-overview-4">Within a Page with Error</h2>
    <div class="example-pf">
      {% include widgets/forms/input-validation-form.html id-default="exampleInput" id-disabled="exampleInputDisabled" id-error="exampleInputError" has-error=true %}
    </div>
  </div>
  <div role="tabpanel" class="tab-pane" id="design">
    <h2>Form Text Fields</h2>
    <div class="row">
      <div class="col-md-8 col-lg-7">
        <p><img class="example-image" src="{{site.baseurl}}assets/img/TBD.png" alt="IMAGE COMING SOON"/></p>
      </div>
      <div class="col-md-4 col-lg-5">
        <ol>
          <li><b>Field labels:</b> Do not include a colon at the end. Visit the Capitalization section of Terminology and Wording for information regarding capitalization. </li>
          <li>Populate fields with default values when possible.</li>
          <li><b>Primary input field:</b> This field gets focused when the modal appears. The initial primary input field is usually the first input field which is required. </li>
        </ol>
        <p><b>Additional notes about behavior for form fields</b></p>
        <ul>
          <li>Support Enter key for button activation in the modal. </li>
          <li>If there is only one input field, pressing Enter key behaves the same as clicking primary button.</li>
          <li>Support Tab key (to progress forward) and Tab+Shift (to move backward) keys to move between input fields. </li>
          <li>Support the Tab key for all interactive elements. The sequence of tab indices should be determined according to the positions of the elements, from top to bottom, from left to right. </li>
          <li>Support Esc key to dismiss the modal without saving changes.</li>
        </ul>
      </div>
    </div>
    <h2>Validation</h2>
    <div class="row">
      <div class="col-md-8 col-lg-7">
        <p><img class="example-image" src="{{site.baseurl}}assets/img/FormValidation_Description1.png" alt="form-validation-callout"/></p>
      </div>
      <div class="col-md-4 col-lg-5">
        <ol>
          <li><b>Form level validation</b> (optional): When the user submits the form, the entire page/modal is reloaded with indications of validation errors for each error via an inline notification.   This notification is located at the top of the page, describes what the error is and preferably, offers guidance about how to fix the error. Additionally, if possible, you may want to inform the user the number of error(s) that have occurred, particularly if some of the errors are beyond the user’s current view.</li>
          <ul>
            <li>Depending on application constraints, dynamic (on the fly) dismissal of errors would be ideal as it provides a visual cue that the user has corrected the error.  </li>
          </ul>
          <li><b>Field level validation:</b> In addition to the optional inline notification, the erroneous fields are indicated with a red outline with a message below the field describing the error and/or how to fix the issue.</li>
          <ul>
            <li>Ensure validation is relevant to the field.</li>
            <li>Messages should be specific and offer solutions.</li>
          </ul>
          <li><b>Field Spacing:</b> Avoid shifting of fields and buttons (reflow) by designing forms with enough space to accommodate errors that may appear on form submission.</li>
        </ol>
      </div>
    </div>
    <h2>Operational Behavior</h2>
    <div class="row">
      <div class="col-md-8 col-lg-7">
        <p><img class="example-image" src="{{site.baseurl}}assets/img/FormValidation_Description1.png" alt="form-validation-description-callout"/></p>
      </div>
      <div class="col-md-4 col-lg-5">
        <p>The modal operation happens with the modal still open. Clicking the affirmative button starts the operation.
        If the operation completes successfully, the modal is closed.</p>
        <ol start="4">
          <li><b>Progress indicator:</b> While the operation is happening, a spinner and processing text is displayed to the left of the buttons. Processing text should be succinct.</li>
          <ul>
            <li>The modal should be designed in a manner to proactively designate space for the spinner to avoid reflow. The small spinner recommended as it is more conservative on space.  </li>
          </ul>
          <li>While operation is happening, everything in the modal is disabled, except the Cancel button.</li>
          <li>Clicking the Cancel button during the operation cancels the operation and keeps the modal open.</li>
        </ol>
      </div>
    </div>
    <h3>What’s not covered in the current design but will be covered in future sprints:</h3>
    <ul>
      <li>Form Layouts</li>
      <ul>
        <li>Basic, inline, and/or horizontal form</li>
        <li>right-aligned vs. left-aligned labels</li>
      </ul>
      <li>Indicating required fields vs. optional</li>
      <li>Syntax hints</li>
      <li>Buttons</li>
      <li>Field-level validation on text entry</li>
      <li>Repeat user error validation</li>
    </ul>
  </div>
  <div role="tabpanel" class="tab-pane" id="code">
    {% include nav-tabs-code.html angular=false %}
    <div class="tab-content">
      <div role="tabpanel" class="tab-pane nested active" id="html-css">
        <p>Jump to <a href="#example-code-1">Within a Modal</a>, <a href="#example-code-2">Within a Modal with Error</a>, <a href="#example-code-3">Within a page</a> or <a href="#example-code-4">Within a Page with Error</a></p>
        <h2 id="example-code-1">Within a Modal</h2>
        <div class="example-pf">
          {% include widgets/forms/input-validation-modal.html id-default="modalInput" id-disabled="modalInputDisabled" id-error="modalInputError" has-error=false %}
        </div>
        <p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-1" href="#markup-1">Reference Markup</a></p>
        <div class="collapse in" id="markup-1">
          <pre class="prettyprint">{% capture markup_include %}
<style>
  .modal{
    position: relative;
    top: auto;
    right: auto;
    bottom: auto;
    left: auto;
    z-index: 1;
    display: block;
  }
</style>
{% include widgets/forms/input-validation-modal.html id-default="modalInput" id-disabled="modalInputDisabled" id-error="modalInputError" has-error=false %}
          {% endcapture %}{{ markup_include | xml_escape }}</pre>
        </div>
        <h2 id="example-code-2">Within a Modal with Error</h2>
        <div class="example-pf">
          {% include widgets/forms/input-validation-modal.html id-default="modalInput" id-disabled="modalInputDisabled" id-error="modalInputError" has-error=true %}
        </div>
        <p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-2" href="#markup-2">Reference Markup</a></p>
        <div class="collapse in" id="markup-2">
          <pre class="prettyprint">{% capture markup_include %}
<style>
  .modal{
    position: relative;
    top: auto;
    right: auto;
    bottom: auto;
    left: auto;
    z-index: 1;
    display: block;
  }
</style>
{% include widgets/forms/input-validation-modal.html id-default="modalInput" id-disabled="modalInputDisabled" id-error="modalInputError" has-error=true %}
          {% endcapture %}{{ markup_include | xml_escape }}</pre>
        </div>
        <h2 id="example-code-3">Within a Page</h2>
        <div class="example-pf">
          {% include widgets/forms/input-validation-form.html id-default="exampleInput" id-disabled="exampleInputDisabled" id-error="exampleInputError" has-error=false %}
        </div>
        <p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-3" href="#markup-3">Reference Markup</a></p>
        <div class="collapse in" id="markup-3">
          <pre class="prettyprint">{% capture markup_include %}{% include widgets/forms/input-validation-form.html id-default="exampleInput" id-disabled="exampleInputDisabled" id-error="exampleInputError" has-error=false %}{% endcapture %}{{ markup_include | xml_escape }}</pre>
        </div>
        <h2 id="example-code-4">Within a Page with Error</h2>
        <div class="example-pf">
          {% include widgets/forms/input-validation-form.html id-default="exampleInput" id-disabled="exampleInputDisabled" id-error="exampleInputError" has-error=true %}
        </div>
        <p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-4" href="#markup-4">Reference Markup</a></p>
        <div class="collapse in" id="markup-4">
          <pre class="prettyprint">{% capture markup_include %}{% include widgets/forms/input-validation-form.html id-default="exampleInput" id-disabled="exampleInputDisabled" id-error="exampleInputError" has-error=true %}{% endcapture %}{{ markup_include | xml_escape }}</pre>
        </div>
      </div>
    </div>
  </div>
</div>
