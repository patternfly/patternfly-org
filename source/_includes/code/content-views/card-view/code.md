<p>Jump to <a href="#example-code-1">Single-Select Card View</a>, <a href="#example-code-2">Multi-Select Card View</a>, <a href="#example-code-3">Large Card</a>, <a href="#example-code-4">Small Card</a>, <a href="#example-code-5">Mini Card with status</a>, <a href="#example-code-6">Mini Card with text</a></p>
<h2 id="example-code-1">Single-Select Card View</h2>
<div class="example-pf">
  <iframe src="{{site.baseurl}}/pattern-library/content-views/card-view/card-view-single-select.html"
        width="100%" height="650px;" scrolling="no" seamless></iframe>
</div>
<p><a href="{{site.baseurl}}/pattern-library/content-views/card-view/card-view-single-select.html" target="_blank">View full page example</a></p>
<p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-1" href="#markup-1">Reference Markup</a></p>
<div class="collapse in" id="markup-1">
  <pre class="prettyprint">{% capture markup_include %}
<body class="cards-pf">
{% include widgets/layouts/card-view-single-select.html %}
</body>{% endcapture %}{{ markup_include | xml_escape }}</pre>
</div>
<h2 id="example-code-2">Multi-Select Card View</h2>
<div class="example-pf">
  <iframe src="{{site.baseurl}}/pattern-library/content-views/card-view/card-view-multi-select.html"
        width="100%" height="650px;" scrolling="no" seamless></iframe>
</div>
<p><a href="{{site.baseurl}}/pattern-library/content-views/card-view/card-view-multi-select.html" target="_blank">View full page example</a></p>
<p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-2" href="#markup-2">Reference Markup</a></p>
<div class="collapse in" id="markup-2">
  <pre class="prettyprint">{% capture markup_include %}
<body class="cards-pf">
{% include widgets/layouts/card-view-multi-select.html %}
</body>{% endcapture %}{{ markup_include | xml_escape }}</pre>
</div>
<h2 id="example-code-3">Large Card</h2>
<div class="example-pf">
  <div class="example-pf-demo example-pf-demo-no-padding">
    <div class="cards-pf">
      <div class="container-fluid container-cards-pf">
        <div class="row row-cards-pf">
          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            {% include widgets/cards/object-status.html %}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-3" href="#markup-3">Reference Markup</a></p>
<div class="collapse in" id="markup-3">
  <pre class="prettyprint">{% capture markup_include %}
<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
{% include widgets/cards/object-status.html %}
</div>{% endcapture %}{{ markup_include | xml_escape }}</pre>
</div>
<h2 id="example-code-4">Small Card</h2>
<div class="example-pf">
  <div class="example-pf-demo example-pf-demo-no-padding">
    <div class="cards-pf">
      <div class="container-fluid container-cards-pf">
        <div class="row row-cards-pf">
          <div class="col-xs-12 col-sm-4 col-md-3 col-lg-2">
            {% include widgets/cards/object-status.html %}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-4" href="#markup-4">Reference Markup</a></p>
<div class="collapse in" id="markup-4">
  <pre class="prettyprint">{% capture markup_include %}
<div class="col-xs-12 col-sm-4 col-md-3 col-lg-2">
{% include widgets/cards/object-status.html %}
</div>{% endcapture %}{{ markup_include | xml_escape }}</pre>
</div>
<h2 id="example-code-5">Mini Card with status</h2>
<div class="example-pf">
  <div class="example-pf-demo example-pf-demo-no-padding">
    <div class="cards-pf">
      <div class="container-fluid container-cards-pf">
        <div class="row row-cards-pf">
          <div class="col-xs-12 col-sm-3 col-md-2">
            {% include widgets/cards/status-inline-actions-xs.html %}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-5" href="#markup-5">Reference Markup</a></p>
<div class="collapse in" id="markup-5">
  <pre class="prettyprint">{% capture markup_include %}
<div class="col-xs-12 col-sm-3 col-md-2">
{% include widgets/cards/status-inline-actions-xs.html %}
</div>{% endcapture %}{{ markup_include | xml_escape }}</pre>
</div>
<h2 id="example-code-6">Mini Card with text</h2>
<div class="example-pf">
  <div class="example-pf-demo example-pf-demo-no-padding">
    <div class="cards-pf">
      <div class="container-fluid container-cards-pf">
        <div class="row row-cards-pf">
          <div class="col-xs-12 col-sm-3 col-md-2">
            {% include widgets/cards/summary-inline-actions-xs.html %}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-6" href="#markup-6">Reference Markup</a></p>
<div class="collapse in" id="markup-6">
  <pre class="prettyprint">{% capture markup_include %}
<div class="col-xs-12 col-sm-3 col-md-2">
{% include widgets/cards/summary-inline-actions-xs.html %}
</div>{% endcapture %}{{ markup_include | xml_escape }}</pre>
</div>
