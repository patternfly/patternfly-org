---
title: About Modal
author: dlabrecq
layout: page-tabs
---
<div class="tab-content">
  <div role="tabpanel" class="tab-pane active" id="overview">
    <p>The About Modal stores the version number(s) of the application as well as any appropriate legal text.</p>
    <p>Jump to <a href="#example-overview-1">Multi-Line</a> or <a href="#example-overview-2">One-Line</a></p>
    <h2 id="example-overview-1">Multi-Line</h2>
    <div class="example-pf">
      <img src="{{site.baseurl}}assets/img/PatternFly_About_Modal.jpg" alt="multi line example"/>
    </div>
    {% include widgets/communication/about-modal.html aboutModalId="about-modal-1" %}
    <h2 id="example-overview-2">One-Line</h2>
    <div class="example-pf">
      <img src="{{site.baseurl}}assets/img/About_PFv2OneLine.jpg" alt="one line example"/>
    </div>
    <h2>What’s not covered in the current design but will be covered in future sprints:</h2>
    <ul>
      <li>How the About Version Modal is accessed.</li>
      <li>Content other than the title, version number(s) and legal text.</li>
      <li>Minimum and maximum modal sizes.</li>
    </ul>
  </div>
  <div role="tabpanel" class="tab-pane" id="design">
    <h2>Description</h2>
    <div class="row">
      <div class="col-md-8 col-lg-7">
        <img src="{{site.baseurl}}assets/img/PatternFly_About_Modal_callout.png" alt="about_modal_spec" />
      </div>
      <div class="col-md-4 col-lg-5">
        <ol>
          <li><b>Modal:</b> The About Modal leverages the existing <a href="{{site.baseurl}}pattern-library/widgets/#modal">modal</a> in PatternFly. Upon opening the modal, the background behind it should “dim” in order to provide a focused view, reducing confusion. The <a href="{{site.baseurl}}pattern-library/widgets/#modal">modal</a> should use the default position, top and centered on the screen.</li>
          <li><b>Close Button:</b> Clicking the close button (pficon-close) will dismiss the modal and return the background to it’s original state.</li>
          <li><b>Content:</b> Title of product, label and version, and legal text are present. Adequate spacing and font weight consideration should be provided for legibility. Two columns are available for versions that contain both a release name and version number or in the event more space is needed.</li>
          <li><b>Corner Graphic:</b> Corner graphic allows the opportunity for branding.</li>
        </ol>
      </div>
    </div>
  </div>
  <div role="tabpanel" class="tab-pane" id="code">
    {% include nav-tabs-code.html angular=false %}
    <div class="tab-content">
      <div role="tabpanel" class="tab-pane nested active" id="html-css">
        <h2 id="example-code-1">Multi-Line</h2>
        {% include widgets/communication/about-modal.html aboutModalId="about-modal-2" %}
        <p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-1" href="#markup-1">Reference Markup</a></p>
        <div class="collapse in" id="markup-1">
          <pre class="prettyprint">
{% capture markup_include %}{% include widgets/communication/about-modal.html aboutModalId="about-modal" %}{% endcapture %}{{ markup_include | xml_escape }}
          </pre>
        </div>
      </div>
    </div>
  </div>
</div>