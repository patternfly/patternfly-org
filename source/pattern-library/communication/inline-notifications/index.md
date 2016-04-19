---
title: Inline Notifications
author: dlabrecq
layout: page-tabs
---
<div class="tab-content">
  <div role="tabpanel" class="tab-pane active" id="overview">
    <p>Inline notifications are used to notify a user of the status of an action during a task flow. It is recommended
    that inline notifications are shown at the top of the main content area.</p>
    <p>Jump to <a href="#example-overview-1">Examples</a>, <a href="#example-overview-2">Variations</a> or <a href="#example-overview-3">In Context</a></p>
    <h2 id="example-overview-1">Examples</h2>
    <div class="example-pf">
      {% include widgets/communication/alert-danger-dismissable.html %}
      {% include widgets/communication/alert-warning-dismissable.html %}
      {% include widgets/communication/alert-success-dismissable.html %}
      {% include widgets/communication/alert-info-dismissable.html %}
    </div>
    <h2 id="example-overview-2">Variations</h2>
    <div class="example-pf">
      {% include widgets/communication/alert-warning.html %}
      {% include widgets/communication/alert-success-button.html %}
    </div>
    <h2 id="example-overview-3">In Context</h2>
    <div>
      <img src="{{site.baseurl}}assets/img/notification_inContext.png" alt="notification_inContext"/>
    </div>
  </div>
  <div role="tabpanel" class="tab-pane" id="design">
    <h2>Description</h2>
    <div class="row">
      <div class="col-md-5 col-lg-4">
        <img src="{{site.baseurl}}assets/img/notification_callout2.png" alt="notification_callout2"/>
      </div>
      <div class="col-md-7 col-lg-8">
        <ol>
          <li><b>Background:</b> The notification should occupy the full width of the main content area. See the "In Context" example above.</li>
          <li><b>Icons:</b> Indicate the type of the notification. There are four types of available notifications: info, success, warning and error.</li>
          <li><b>Message:</b> Show a short message within the notification and make it clear what just happened or what the user needs to perform next.</li>
          <ul>
            <li>Bold the important information (e.g. name of the object).</li>
            <li>Use the regular font weight for the rest of the message.</li>
          </ul>
          <li><b>Link</b> (optional): Show a “View Details” link to allow the user to navigate to details of the message.</li>
          <li><b>Close</b> (optional): Allow the user to dismiss the inline notification by clicking on the Close icon.</li>
        </ol>
      </div>
    </div>
  </div>
  <div role="tabpanel" class="tab-pane" id="code">
    {% include nav-tabs-code.html angular=false %}
    <div class="tab-content">
      <div role="tabpanel" class="tab-pane nested active" id="html-css">
        <p>Jump to <a href="#example-code-1">Examples</a>, <a href="#example-code-2">Variations</a> or <a href="#example-code-3">In Context</a></p>
        <h2 id="example-code-1">Examples</h2>
        <div class="example-pf">
          {% include widgets/communication/alert-danger-dismissable.html %}
          {% include widgets/communication/alert-warning-dismissable.html %}
          {% include widgets/communication/alert-success-dismissable.html %}
          {% include widgets/communication/alert-info-dismissable.html %}
        </div>
        <p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-1" href="#markup-1">Reference Markup</a></p>
        <div class="collapse in" id="markup-1">
          <pre class="prettyprint">{% capture markup_include %}
{% include widgets/communication/alert-danger-dismissable.html %}
{% include widgets/communication/alert-warning-dismissable.html %}
{% include widgets/communication/alert-success-dismissable.html %}
{% include widgets/communication/alert-info-dismissable.html %}
          {% endcapture %}{{ markup_include | xml_escape }}</pre>
        </div>
        <h2 id="example-code-2">Variations</h2>
        <div class="example-pf">
          {% include widgets/communication/alert-warning.html %}
          {% include widgets/communication/alert-success-button.html %}
        </div>
        <p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-2" href="#markup-2">Reference Markup</a></p>
        <div class="collapse in" id="markup-2">
          <pre class="prettyprint">{% capture markup_include %}
{% include widgets/communication/alert-warning.html %}
{% include widgets/communication/alert-success-button.html %}
          {% endcapture %}{{ markup_include | xml_escape }}</pre>
        </div>
        <h2 id="example-code-3">In Context</h2>
        <div style="padding-bottom: 20px;">
          <img src="{{site.baseurl}}assets/img/notification_inContext.png" alt="notification_inContext"/>
        </div>
        <p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-3" href="#markup-3">Reference Markup</a></p>
        <div class="collapse in" id="markup-3">
          <pre class="prettyprint">{% capture markup_include %}{% include widgets/communication/alert-danger.html %}{% endcapture %}{{ markup_include | xml_escape }}</pre>
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
