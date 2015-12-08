---
title: Field Level Help
author: lhinson
layout: page
---
<h2>Overview</h2>
<p>Field level help, denoted by the information icon, can be used when you need to provide supplemental information. The text is displayed in a popover when the user clicks on the information icon. While not limited to, the most common use case for field level help is seen on forms.</p>

<p>This pattern should NOT be used when:</p>
<ul>
<li>Compensating for bad design and relying on it to explain a graphic or word choice.</li>
<li>The information displayed by the popover is necessary to read.</li>
</ul>

<h2>Example</h2>
<form class="form-horizontal">
  <div class="form-group">
    <label class="col-sm-2 control-label" for="textInput">
      Default <a tabindex="0" role="button" data-toggle="popover" data-trigger="focus" data-html="true" title="" data-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et &lt;a href='#'&gt;dolore magna aliqua&lt;/a&gt;." data-placement="right"><span class="fa fa-info-circle"></span></a>
    </label>
    <div class="col-sm-10">
      <input type="text" id="textInput" class="form-control">
    </div>
  </div>
</form>

<p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="sparkline-markup" href="#sparkline-markup">Reference Markup</a></p>
<div class="collapse" id="sparkline-markup">
  <pre class="prettyprint">&lt;form class="form-horizontal"&gt;
  &lt;div class="form-group"&gt;
    &lt;label class="col-sm-2 control-label" for="textInput"&gt;Default
      &lt;a tabindex="0" role="button" data-toggle="popover" data-trigger="focus" data-html="true" title="" data-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et &lt;a href='#'&gt;dolor consequat blandat&lt;/a&gt;" data-placement="top" data-original-title=""&gt;&lt;span class="fa fa-info-circle"&gt;&lt;/span&gt;&lt;/a&gt;
    &lt;/label&gt;
    &lt;div class="col-sm-10"&gt;
      &lt;input type="text" id="textInput" class="form-control"&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/form&gt;</pre>
</div>

<h2>Description</h2>

<a href="{{site.baseurl}}assets/img/field-level-help-callout.png"><img src="{{site.baseurl}}assets/img/field-level-help-callout.png" alt="field-level-help-callout" class="alignnone size-full wp-image-4230" /></a>

<ol>
<li><b>Icon:</b> The help icon is Font Awesome icon, fa-info-circle, and is positioned to the right of the component. The icon is blue (hex# 0099d3) to indicate that it is interactive.</li>
<li><b>Text:</b> We recommend that the popover text does not exceed three sentences. If needed, include a link to online resources. The popover supports HTML formatting.</li>
<li><b>Popover:</b> It is recommended that the popover is dismissed after the user’s the next click.</li>
</ol>
