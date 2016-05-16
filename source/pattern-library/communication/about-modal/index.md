---
title: About Modal
author: dlabrecq
layout: page-tabs
codetab: false
---
<div class="tab-content">
  <div role="tabpanel" class="tab-pane active" id="overview">
    <p>The About Modal stores the version number(s) of the application as well as any appropriate legal text.</p>
    <p>Jump to <a href="#example-overview-1">Multi-Line</a> or <a href="#example-overview-2">One-Line</a></p>
    <h2 id="example-overview-1">Multi-Line</h2>
    <div class="example-pf">
      <img src="{{site.baseurl}}assets/img/PatternFly_About_Modal.jpg" alt="multi line example"/>
    </div>
    <h2 id="example-overview-2">One-Line</h2>
    <div class="example-pf">
      <img src="{{site.baseurl}}assets/img/About_PFv2OneLine.jpg" alt="one line example"/>
    </div>
  </div>
  <div role="tabpanel" class="tab-pane" id="design">
    <h2>Description</h2>
    <div class="row">
      <div class="col-md-12 col-lg-8">
        <img src="{{site.baseurl}}assets/img/Screen-Shot-2016-05-10-at-9.44.20-AM.png" alt="about_modal_spec" />
      </div>
      <div class="col-md-12 col-lg-4">
        <ol>
          <li><b>PatternFly Modal:</b> Utilizes the existing <a href="https://www.patternfly.org/widgets/#modal">PatternFly Modal</a>. Upon opening, the background behind the modal should “dim” in order to provide a focused view of the modal, reducing confusion. The modal should be centered on the screen.</li>
          <li><b>Close Button:</b> Clicking the close button (pficon-close) will dismiss the modal and return the background to it’s original state.</li>
          <li><b>Content:</b> Title of product, label and version, and legal text are present. Adequate spacing and font weight consideration should be provided for legibility. Two columns are available for versions that contain both a release name and version number or in the event more space is needed.</li>
          <li><b>Corner Graphic:</b> Corner graphic allows the opportunity for branding.</li>
        </ol>
      </div>
    </div>
    <h2>What’s not covered in the current design but will be covered in future sprints:</h2>
    <ul>
      <li>How the About Version Modal is accessed.</li>
      <li>Content other than the title, version number(s) and legal text.</li>
      <li>Minimum and maximum modal sizes.</li>
    </ul>
  </div>
</div>
