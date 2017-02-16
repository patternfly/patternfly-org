<p>Jump to <a href="#example-code-1">Card with a Single Metric</a> or <a href="#example-code-2">Card with Multiple Metrics</a></p>
<h2 id="example-code-1">Card with a Single Metric</h2>
<div class="example-bg">
  <div class="row">
    <div class="example-pf col-md-5">
      <div class="cards-pf">
        <div class="container-fluid container-cards-pf">
          <div class="row-cards-pf">
            {% include widgets/cards/utilization-trend-single-metric.html id1="chart-pf-donut-5" id2="chart-pf-sparkline-5" %}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-1" href="#markup-1">Reference Markup</a></p>
<div class="collapse in" id="markup-1">
  <pre class="prettyprint">{% capture markup_include %}
    <script src="components/c3/c3.min.js"></script>
    <script src="components/d3/d3.min.js"></script>
    <body class="cards-pf">
      ...
      <div class="container-fluid container-cards-pf">
        <div class="row row-cards-pf">
          <div class="col-xs-6 col-sm-4 col-md-4">
            {% include widgets/cards/utilization-trend-single-metric.html id1="chart-pf-donut-5" chart2="chart-pf-sparkline-5" %}
          </div>
        </div><!-- /row -->
      </div><!-- /container -->
    </body>
    {% endcapture %}{{ markup_include | xml_escape }}
  </pre>
</div>
<h2 id="example-code-2">Card with Multiple Metrics</h2>
<div class="example-bg">
  <div class="row">
    <div class="example-pf">
      <div class="cards-pf">
        <div class="container-fluid container-cards-pf">
          <div class="row-cards-pf">
            <div class="col-xs-12">
              {% include widgets/cards/utilization-trend-multiple-metrics.html id3="chart-pf-donut-6" id4="chart-pf-sparkline-6" id5="chart-pf-donut-7" id6="chart-pf-sparkline-7" id7="chart-pf-donut-8" id8="chart-pf-sparkline-8" %}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-2" href="#markup-2">Reference Markup</a></p>
<div class="collapse in" id="markup-2">
  <pre class="prettyprint">{% capture markup_include %}
    <script src="components/c3/c3.min.js"></script>
    <script src="components/d3/d3.min.js"></script>

    <body class="cards-pf">
      ...
      <div class="container-fluid container-cards-pf">
        <div class="row row-cards-pf">
          <div class="col-xs-12">
            {% include widgets/cards/utilization-trend-multiple-metrics.html id3="chart-pf-donut-6" id4="chart-pf-sparkline-6" id5="chart-pf-donut-7" id6="chart-pf-sparkline-7" id7="chart-pf-donut-8" id8="chart-pf-sparkline-8" %}
          </div>
        </div><!-- /row -->
      </div><!-- /container -->
    </body>
    {% endcapture %}{{ markup_include | xml_escape }}
  </pre>
</div>
