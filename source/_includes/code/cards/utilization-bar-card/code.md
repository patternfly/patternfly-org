<p>Jump to <a href="#example-code-1">Top Left Description and Top Right Label</a> or <a href="#example-code-2">Left Description and Right Label</a></p>
<h2 id="example-code-1">Top Left Description and Top Right Label</h2>
<div class="example-bg">
  <div class="row">
    <div class="example-pf col-md-7">
      <div class="cards-pf">
        <div class="container-fluid container-cards-pf">
          <div class="row-cards-pf">
            <div>
              {% include widgets/cards/utilization-bar-top-labels.html  %}
            </div>
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
            {% include widgets/cards/utilization-bar-top-labels.html %}
          </div>
        </div><!-- /row -->
      </div><!-- /container -->
    </body>
    {% endcapture %}{{ markup_include | xml_escape }}
  </pre>
</div>
<h2 id="example-code-2">Left Description and Right Label</h2>
<div class="example-bg">
  <div class="row">
    <div class="example-pf col-md-7">
      <div class="cards-pf">
        <div class="container-fluid container-cards-pf">
          <div class="row-cards-pf">
            <div>
              {% include widgets/cards/utilization-bar-side-labels.html  %}
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
          <div class="col-xs-6 col-sm-4 col-md-4">
            {% include widgets/cards/utilization-bar-side-labels.html %}
          </div>
        </div><!-- /row -->
      </div><!-- /container -->
    </body>
    {% endcapture %}{{ markup_include | xml_escape }}
  </pre>
</div>
