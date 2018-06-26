<p>Jump to <a href="#example-code-1">Standard List View</a>, <a href="#example-code-2">Simple Expansion</a>, <a href="#example-code-3">Compound Expansion</a>,
<a href="#example-code-4">Default Row</a>, <a href="#example-code-5">Row Variation #1</a>, <a href="#example-code-6">Row Variation #2</a>,
<a href="#example-code-7">Row Variation #3</a>, <a href="#example-code-8">Row Variation #4</a>, <a href="#example-code-9">Row Variation #5</a> or <a href="#example-code-10">Row Variation #6</a></p>
<h2 id="example-code-1">Standard List View</h2>
<div class="example-pf">
  <iframe src="{{site.baseurl}}/pattern-library/content-views/list-view/list-view.html"
          width="100%" height="650px;" scrolling="no" seamless></iframe>
</div>
<p><a href="{{site.baseurl}}/pattern-library/content-views/list-view/list-view.html" target="_blank">View full page example</a></p>
<p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-1" href="#markup-1">Reference Markup</a></p>
<div class="collapse in" id="markup-1">
  <pre class="prettyprint">{% capture markup_include %}{% include widgets/list-view/list-view-page.html %}{% endcapture %}{{ markup_include | xml_escape }}</pre>
</div>
<h2 id="example-code-2">Simple Expansion</h2>
<div class="example-pf">
  <div class="example-pf-demo example-pf-demo-no-padding">
    <div class="cards-pf">
      <div class="container-fluid container-cards-pf">
        <div class="row row-cards-pf">
          {% include widgets/list-view/list-view-standard-rows-simple-expansion.html %}
        </div>
      </div>
    </div>
  </div>
</div>
<p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-2" href="#markup-2">Reference Markup</a></p>
<div class="collapse in" id="markup-2">
  <pre class="prettyprint">{% capture markup_include %}{% include widgets/list-view/list-view-standard-rows-simple-expansion.html %}{% endcapture %}{{ markup_include | xml_escape }}</pre>
</div>
<h2 id="example-code-3">Compound Expansion</h2>
<div class="example-pf">
  <div class="example-pf-demo example-pf-demo-no-padding">
    <div class="cards-pf">
      <div class="container-fluid container-cards-pf">
        <div class="row row-cards-pf">
          {% include widgets/list-view/list-view-standard-rows-compound-expansion.html %}
        </div>
      </div>
    </div>
  </div>
</div>
<p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-3" href="#markup-3">Reference Markup</a></p>
<div class="collapse in" id="markup-3">
  <pre class="prettyprint">{% capture markup_include %}{% include widgets/list-view/list-view-standard-rows-compound-expansion.html %}{% endcapture %}{{ markup_include | xml_escape }}</pre>
</div>
<h2 id="example-code-4">Default Row</h2>
<div class="example-pf">
  <div class="example-pf-demo example-pf-demo-no-padding">
    <div class="cards-pf">
      <div class="container-fluid container-cards-pf">
        <div class="row row-cards-pf">
          {% include widgets/list-view/list-view-default.html %}
        </div>
      </div>
    </div>
  </div>
</div>
<p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-4" href="#markup-4">Reference Markup</a></p>
<div class="collapse in" id="markup-4">
  <pre class="prettyprint">{% capture markup_include %}{% include widgets/list-view/list-view-default.html %}{% endcapture %}{{ markup_include | xml_escape }}</pre>
</div>
<h2 id="example-code-5">Row Variation #1</h2>
<div class="example-pf">
  <div class="example-pf-demo example-pf-demo-no-padding">
    <div class="cards-pf">
      <div class="container-fluid container-cards-pf">
        <div class="row row-cards-pf">
          <!-- Need to be fixed. It is not displaying the c3 charts. -->
          {% include widgets/list-view/list-view-variation-1.html id1="donut-chart-5" id2="donut-chart-6" id3="donut-chart-7" id4="donut-chart-8" %}
        </div>
      </div>
    </div>
  </div>
</div>
<p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-5" href="#markup-5">Reference Markup</a></p>
<div class="collapse in" id="markup-5">
  <pre class="prettyprint">{% capture markup_include %}{% include widgets/list-view/list-view-variation-1.html id1="donut-chart-5" id2="donut-chart-6" id3="donut-chart-7" id4="donut-chart-8" %}{% endcapture %}{{ markup_include | xml_escape }}</pre>
</div>
<h2 id="example-code-6">Row Variation #2</h2>
<div class="example-pf">
  <div class="example-pf-demo example-pf-demo-no-padding">
    <div class="cards-pf">
      <div class="container-fluid container-cards-pf">
        <div class="row row-cards-pf">
          {% include widgets/list-view/list-view-variation-2.html %}
        </div>
      </div>
    </div>
  </div>
</div>
<p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-6" href="#markup-6">Reference Markup</a></p>
<div class="collapse in" id="markup-6">
  <pre class="prettyprint">{% capture markup_include %}{% include widgets/list-view/list-view-variation-2.html %}{% endcapture %}{{ markup_include | xml_escape }}</pre>
</div>
<h2 id="example-code-7">Row Variation #3</h2>
<div class="example-pf">
  <div class="example-pf-demo example-pf-demo-no-padding">
    <div class="cards-pf">
      <div class="container-fluid container-cards-pf">
        <div class="row row-cards-pf">
          {% include widgets/list-view/list-view-variation-3.html %}
        </div>
      </div>
    </div>
  </div>
</div>
<p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-7" href="#markup-7">Reference Markup</a></p>
<div class="collapse in" id="markup-7">
  <pre class="prettyprint">{% capture markup_include %}{% include widgets/list-view/list-view-variation-3.html %}{% endcapture %}{{ markup_include | xml_escape }}</pre>
</div>
<h2 id="example-code-8">Row Variation #4</h2>
<div class="example-pf">
  <div class="example-pf-demo example-pf-demo-no-padding">
    <div class="cards-pf">
      <div class="container-fluid container-cards-pf">
        <div class="row row-cards-pf">
          {% include widgets/list-view/list-view-variation-4.html %}
        </div>
      </div>
    </div>
  </div>
</div>
<p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-8" href="#markup-8">Reference Markup</a></p>
<div class="collapse in" id="markup-8">
  <pre class="prettyprint">{% capture markup_include %}{% include widgets/list-view/list-view-variation-4.html %}{% endcapture %}{{ markup_include | xml_escape }}</pre>
</div>
<h2 id="example-code-9">Row Variation #5</h2>
<div class="example-pf">
  <div class="example-pf-demo example-pf-demo-no-padding">
    <div class="cards-pf">
      <div class="container-fluid container-cards-pf">
        <div class="row row-cards-pf">
          {% include widgets/list-view/list-view-variation-5.html %}
        </div>
      </div>
    </div>
  </div>
</div>
<p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-9" href="#markup-9">Reference Markup</a></p>
<div class="collapse in" id="markup-9">
  <pre class="prettyprint">{% capture markup_include %}{% include widgets/list-view/list-view-variation-5.html %}{% endcapture %}{{ markup_include | xml_escape }}</pre>
</div>
<h2 id="example-code-10">Row Variation #6</h2>
<div class="example-pf">
  <div class="example-pf-demo example-pf-demo-no-padding">
    <div class="cards-pf">
      <div class="container-fluid container-cards-pf">
        <div class="row row-cards-pf">
          {% include widgets/list-view/list-view-variation-6.html %}
        </div>
      </div>
    </div>
  </div>
</div>
<p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-10" href="#markup-10">Reference Markup</a></p>
<div class="collapse in" id="markup-10">
  <pre class="prettyprint">{% capture markup_include %}{% include widgets/list-view/list-view-variation-6.html %}{% endcapture %}{{ markup_include | xml_escape }}</pre>
</div>
