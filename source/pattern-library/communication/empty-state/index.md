---
title: Empty State
author: dlabrecq
layout: page-tabs
---
<div class="tab-content">
  <div role="tabpanel" class="tab-pane active" id="overview">
    <p>The goal of a empty state pattern is to provide a good first impression that helps users to achieve their goals.
    It should be used when a view is empty because no objects exists and you want to guide the user to perform specific actions.</p>
    <p>This pattern should NOT be used when:</p>
    <ul>
      <li>Selected filters cause an empty result.</li>
      <li>There is a connectivity issue and the data set cannot be obtained.</li>
    </ul>
    <h2 id="example-overview-1">Example</h2>
    <div class="example-pf">
      {% include widgets/communication/blank-slate.html %}
    </div>
  </div>
  <div role="tabpanel" class="tab-pane" id="design">
    <h2>Description</h2>
    <div class="row">
      <div class="col-md-12 col-lg-8">
        <div class="example-pf">
          <img src="{{site.baseurl}}assets/img/emptyState_spec.png" alt="emptyState_spec" />
        </div>
      </div>
      <div class="col-md-12 col-lg-4">
        <ol>
          <li><strong>Icon</strong> (optional): If an object icon is associated with this view, it can be displayed here.</li>
          <li><strong>Empty State Title:</strong> Give it a name.</li>
          <li><strong>Text</strong> (optional): This text should be personal and helpful. It should minimize the user’s effort to complete tasks.</li>
          <li><strong>Primary Action Button:</strong> The primary action is displayed as a prominent blue button. See the <a href="{{ site.baseurl}}styles/terminology-and-wording/#action-labels">Action Labels</a> section for more information about terminology and wording specific to action labels.</li>
          <li><strong>Secondary Action Buttons</strong> (optional): Secondary actions are alternative options for the user. They are shown as more subtle gray buttons and located below the main action. There can be more than one secondary action.</li>
        </ol>
      </div>
    </div>
  </div>
  <div role="tabpanel" class="tab-pane" id="code">
    {% include nav-tabs-code.html angular=false %}
    <div class="tab-content">
      <div role="tabpanel" class="tab-pane nested active" id="html-css">
        <h2 id="example-code-1">Example</h2>
        <div class="example-pf">
          {% include widgets/communication/blank-slate.html %}
        </div>
        <p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-1" href="#markup-1">Reference Markup</a></p>
        <div class="collapse in" id="markup-1">
          <pre class="prettyprint">{% capture markup_include %}{% include widgets/communication/blank-slate.html %}{% endcapture %}{{ markup_include | xml_escape }}</pre>
        </div>
      </div>
    </div>
  </div>
</div>
