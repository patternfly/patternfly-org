---
title: Field Level Help
author: dlabrecq
layout: page-tabs
---
<div class="tab-content">
  <div role="tabpanel" class="tab-pane active" id="overview">
    <p>Field level help, denoted by the information icon, can be used when you need to provide supplemental information.
    The text is displayed in a popover when the user clicks on the information icon. While not limited to, the most
    common use case for field level help is seen on forms.</p>
    <p>This pattern should NOT be used when:</p>
    <ul>
      <li>Compensating for bad design and relying on it to explain a graphic or word choice.</li>
      <li>The information displayed by the popover is necessary to read.</li>
    </ul>
    <h2 id="example-overview-1">Example</h2>
    <div class="example">
      <div class="row">
        <div class="col-md-5">
          <div class="example-pf">
            {% include widgets/forms/field-level-help.html id="help-1" %}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div role="tabpanel" class="tab-pane" id="design">
    <h2>Description</h2>
    <div class="row">
      <div class="col-md-8 col-lg-7">
        <img src="{{site.baseurl}}assets/img/field-level-help-callout.png" alt="Field Level Help callout3"/>
      </div>
      <div class="col-md-4 col-lg-5">
        <ol>
          <li><b>Icon:</b> The help icon is Font Awesome icon, fa-info-circle, and is positioned to the right of the component. The icon is blue (hex# 0099d3) to indicate that it is interactive.</li>
          <li><b>Text:</b> We recommend that the popover text does not exceed three sentences. If needed, include a link to online resources. The popover supports HTML formatting.</li>
          <li><b>Popover:</b> It is recommended that the popover is dismissed after the user’s the next click.</li>
        </ol>
      </div>
    </div>
  </div>
  <div role="tabpanel" class="tab-pane" id="code">
    {% include nav-tabs-code.html angular=false %}
    <div class="tab-content">
      <div role="tabpanel" class="tab-pane nested active" id="html-css">
        <h2 id="example-code-1">Example</h2>
        <div class="example">
          <div class="row">
            <div class="col-md-5">
              <div class="example-pf">
                {% include widgets/forms/field-level-help.html id="help-2" %}
              </div>
            </div>
          </div>
        </div>
        <p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-1" href="#markup-1">Reference Markup</a></p>
        <div class="collapse in" id="markup-1">
          <pre class="prettyprint">{% capture markup_include %}{% include widgets/forms/field-level-help.html id="help-2" %}{% endcapture %}{{ markup_include | xml_escape }}</pre>
        </div>
      </div>
    </div>
  </div>
</div>
