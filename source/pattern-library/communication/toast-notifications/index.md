---
title: Toast Notifications
author: dlabrecq
layout: page-tabs
---
<div class="tab-content">
  <div role="tabpanel" class="tab-pane active" id="overview">
    <p>Toast notifications pop onto the screen to notify the user of a system occurrence. The notifications should have
    a consistent location in each application. We recommend the top-right of the application. It should include a
    message list that enables the user to view messages later.</p>
    <p>Toast notifications should be transient and stay on the screen for 8 seconds, so that they do not block the
    information behind them for too long, but allows the user to read the message. Ideally, the user can decide what
    kinds of notifications appear and how long they remain on the screen. Toast notifications should remain on the
    screen when the user is hovering on them.</p>
    <p>Jump to <a href="#example-overview-1">Examples</a>, <a href="#example-overview-2">With Max-Width</a> or <a href="#example-overview-3">In Context</a></p>
    <h2 id="example-overview-1">Examples</h2>
    <div class="example-pf">
      {% include widgets/communication/toast-info.html %}<br>
      {% include widgets/communication/toast-success.html %}<br>
      {% include widgets/communication/toast-warning.html %}<br>
      {% include widgets/communication/toast-danger.html %}
    </div>
    <h2 id="example-overview-2">With Max-Width</h2>
    <div class="example-pf">
      {% include widgets/communication/toast-max-width.html %}
    </div>
    <h2 id="example-overview-3">In Context</h2>
    <div>
      <img src="{{site.baseurl}}assets/img/example_toast2.png" alt="in-context-example"/>
    </div>
  </div>
  <div role="tabpanel" class="tab-pane" id="design">
    <h2>Description</h2>
    <div class="row">
      <div class="col-md-7 col-lg-5">
        <img src="{{site.baseurl}}assets/img/toast_callout.png" alt="toast-callout"/>
      </div>
      <div class="col-md-5 col-lg-7">
        <ol>
          <li><b>Icon:</b> Indicates the type of notification displayed (e.g. info, success, warning or error).</li>
          <li><b>Message:</b> The message should explain what just happened and what the user needs to perform next. Do not include any unnecessary text. Ideally, the message is no longer than one line. Bold the important information (e.g. the names of relevant objects).</li>
          <li><b>Action</b> (optional): Show actions on the right for easy access. It is recommended that only one action is shown in each notification. However, the ellipsis icon can be used when more than one actions are available. Clicking on an action should either help the user achieve the goal automatically, or open up a modal window or a different page. After the user clicks on the action, the notification will be dismissed right away.</li>
          <li><b>Close</b> (optional): The user can dismiss the toast notification by clicking on the close icon.</li>
        </ol>
      </div>
    </div>
  </div>
  <div role="tabpanel" class="tab-pane" id="code">
    {% include nav-tabs-code.html %}
    <div class="tab-content">
      <div role="tabpanel" class="tab-pane nested active" id="html-css">
        <p>Jump to <a href="#example-code-1">Examples</a>, <a href="#example-code-2">With Max-Width</a> or <a href="#example-code-3">In Context</a></p>
        <h2 id="example-code-1">Examples</h2>
        <div class="example-pf">
          {% include widgets/communication/toast-info.html %}<br>
          {% include widgets/communication/toast-success.html %}<br>
          {% include widgets/communication/toast-warning.html %}<br>
          {% include widgets/communication/toast-danger.html %}
        </div>
        <p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-1" href="#markup-1">Reference Markup</a></p>
        <div class="collapse in" id="markup-1">
          <pre class="prettyprint">{% capture markup_include %}
{% include widgets/communication/toast-info.html %}
{% include widgets/communication/toast-success.html %}
{% include widgets/communication/toast-warning.html %}
{% include widgets/communication/toast-danger.html %}
          {% endcapture %}{{ markup_include | xml_escape }}</pre>
        </div>
        <h2 id="example-code-2">With Max-Width</h2>
        <div class="example-pf">
          {% include widgets/communication/toast-max-width.html %}
        </div>
        <p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-2" href="#markup-2">Reference Markup</a></p>
        <div class="collapse in" id="markup-2">
          <pre class="prettyprint">{% capture markup_include %}{% include widgets/communication/toast-max-width.html %}{% endcapture %}{{ markup_include | xml_escape }}</pre>
        </div>
        <h2 id="example-code-3">In Context</h2>
        <p>
          <img src="{{site.baseurl}}assets/img/example_toast2.png" alt="in-context-example"/>
        </p>
        <p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-3" href="#markup-3">Reference Markup</a></p>
        <div class="collapse in" id="markup-3">
          <pre class="prettyprint">{% capture markup_include %}{% include widgets/communication/toast-in-context.html %}{% endcapture %}{{ markup_include | xml_escape }}</pre>
        </div>
      </div>
      <div role="tabpanel" class="tab-pane nested" id="angular">
        <div ng-app="docsApp" ng-controller="DocsController" class="content">
          <div ng-include src="'/components/angular-patternfly/dist/docs/partials/api/patternfly.notification.directive.pfInlineNotification.html'"></div>
        </div>
      </div>
    </div>
  </div>
</div>
