<p>Jump to <a href="#example-code-1">Timeframe filter in header</a> or <a href="#example-code-2">Timeframe filter in footer</a></p>
<h2 id="example-code-1">Timeframe filter in header</h2>
<div class="example-bg">
  <div class="row">
    <div class="example-pf col-md-6">
      <div class="cards-pf">
        <div class="container-fluid container-cards-pf">
          <div class="row-cards-pf">
            <div>
              {% include widgets/cards/dashboard-timeframe-header.html %}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-1" href="#markup-1">Reference Markup</a></p>
<div class="collapse in" id="markup-1">
  <pre class="prettyprint">
  {% capture markup_include %}
<body class="cards-pf">
...
<div class="container-fluid container-cards-pf">
<div class="row row-cards-pf">
<div class="col-xs-6 col-sm-4 col-md-4">
{% include widgets/cards/dashboard-timeframe-header.html %}
</div>
</div><!-- /row -->
</div><!-- /container -->
</body>
  {% endcapture %}
  {{ markup_include | xml_escape }}
  </pre>
</div>
<h2 id="example-code-2">Timeframe filter in footer</h2>
<div class="example-bg">
  <div class="row">
    <div class="example-pf col-md-6">
      <div class="cards-pf">
        <div class="container-fluid container-cards-pf">
          <div class="row-cards-pf">
            <div>
              {% include widgets/cards/dashboard-timeframe-footer.html %}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-2" href="#markup-2">Reference Markup</a></p>
<div class="collapse in" id="markup-2">
  <pre class="prettyprint">
  {% capture markup_include %}
<body class="cards-pf">
...
<div class="container-fluid container-cards-pf">
<div class="row row-cards-pf">
<div class="col-xs-6 col-sm-4 col-md-4">
{% include widgets/cards/dashboard-timeframe-footer.html %}
</div>
</div><!-- /row -->
</div><!-- /container -->
</body>
  {% endcapture %}{{ markup_include | xml_escape }}</pre>
</div>
