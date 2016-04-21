---
title: Dashboard Layout
author: dlabrecq
layout: page-tabs
codetab: false
---
<div class="tab-content">
  <div role="tabpanel" class="tab-pane active" id="overview">
    This section provides guidance on laying out a dashboard page, and does not currently include editable dashboard requirements. When creating a dashboard layout, use the <a href="http://getbootstrap.com/css/#grid">column grid system</a>.
    <h2 id="example-overview-1">Example</h2>
    <p><img src="{{site.baseurl}}assets/img/dashboard_callout.png" alt="dashboard-callout" /></p>
  </div>
  <div role="tabpanel" class="tab-pane" id="design">
    <h2>Description</h2>
    <div class="row">
      <div class="col-md-12 col-lg-8">
        <img src="{{site.baseurl}}assets/img/dashboard_callout.png" alt="dashboard-callout" />
      </div>
      <div class="col-md-12 col-lg-4">
        <p>The following are suggested visualizations and placement of common attributes of a dashboard:</p>
        <ol>
          <li><strong>Dashboard Title Panel</strong> (optional): A panel may be placed at the top of the page, flush to the top/left/right with a white background. This space may be used to contain a dashboard title, refresh action or trend filter. Place the title left-aligned within this panel.</li>
          <li><strong>Background:</strong> Use a grey background color (#f5f5f5) for the dashboard page.</li>
          <li><strong>Refresh Action</strong> (optional): If the dashboard needs a Refresh action so that the user can manually refresh, place it on the right of the Dashboard Title Panel.</li>
        </ol>
      </div>
    </div>
  </div>
</div>
