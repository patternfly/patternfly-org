---
title: Empty State
author: lhinson
layout: page
---
{% include nav-tabs-pattern.html codetab=false %}
<div class="tab-content">
  <div role="tabpanel" class="tab-pane active" id="overview">
    <p>
      The goal of a empty state pattern is to provide a good first impression that helps users to achieve their goals. It should be used when a view is empty because no objects exists and you want to guide the user to perform specific actions.
    </p>
    <p>
      This pattern should NOT be used when:
    </p>
    <ul>
      <li>Selected filters cause an empty result.</li>
      <li>There is a connectivity issue and the data set cannot be obtained.</li>
    </ul>
    {% include nav-tabs-code.html %}
    <div class="tab-content">
      <div role="tabpanel" class="tab-pane nested active" id="ref-impl">
        <div class="example-pf">
          <div class="example-pf-demo">
            {% include empty-state.html %}
          </div>
        </div>
        <button class="btn btn-default btn-copy">Copy</button>
        <pre class="prettyprint">{% capture markup_include %}{% include empty-state.html %}{% endcapture %}{{ markup_include | xml_escape }}</pre>
      </div>
      <div role="tabpanel" class="tab-pane nested" id="angular">
        [angular code goes here]
      </div>
    </div>
  </div>
  <div role="tabpanel" class="tab-pane" id="design">
    <p>
      <a href="/wp-content/uploads/2015/05/emptyState_spec.png">
        <img src="/wp-content/uploads/2015/05/emptyState_spec.png" alt="emptyState_spec" class="alignnone size-full wp-image-4083" />
      </a>
    </p>
    <ol>
      <li><strong>Icon</strong> (optional): If an object icon is associated with this view, it can be displayed here.</li>
      <li><strong>Empty State Title:</strong> Give it a name.</li>
      <li><strong>Text</strong> (optional): This text should be personal and helpful. It should minimize the user’s effort to complete tasks.</li>
      <li><strong>Primary Action Button:</strong> The primary action is displayed as a prominent blue button. See the <a href="/styles/terminology-and-wording/#action-labels">Action Labels</a> section for more information about terminology and wording specific to action labels.</li>
      <li><strong>Secondary Action Buttons</strong> (optional): Secondary actions are alternative options for the user. They are shown as more subtle gray buttons and located below the main action. There can be more than one secondary action.</li>
    </ol>
  </div>
  <div role="tabpanel" class="tab-pane" id="usability-test">
    [ usability content goes here ]
  </div>
</div>
