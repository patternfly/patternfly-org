<p>Jump to <a href="#example-code-1">Regular Card</a> or <a href="#example-code-2">Mini Card Alternate</a></p>
<h2 id="example-code-1">Regular Card</h2>
<div class="example-bg">
  <div class="row">
    <div class="example-pf col-md-9">
      <div class="cards-pf">
        <div class="container-fluid container-cards-pf">
          <div class="row-cards-pf">
            <div class="col-xs-12 col-sm-6 col-md-4" style="padding-left: 0px;">
              {% include widgets/cards/aggregate-status-ipsum.html %}
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
              {% include widgets/cards/aggregate-status-amet.html %}
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4" style="padding-right: 0px;">
              {% include widgets/cards/aggregate-status-adipiscing.html %}
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
    <body class="cards-pf">
      ...
      <div class="container-fluid container-cards-pf">
        <div class="row row-cards-pf">
          <div class="col-xs-6 col-sm-4 col-md-4">
            {% include widgets/cards/aggregate-status-ipsum.html %}
          </div>
          <div class="col-xs-6 col-sm-4 col-md-4">
            {% include widgets/cards/aggregate-status-amet.html %}
          </div>
          <div class="col-xs-6 col-sm-4 col-md-4">
            {% include widgets/cards/aggregate-status-adipiscing.html %}
          </div>
        </div><!-- /row -->
      </div><!-- /container -->
      <script src="/components/jquery-match-height/dist/jquery.matchHeight-min.js"></script>
      <script>
      $(function() {
        // matchHeight the contents of each .card-pf and then the .card-pf itself
        $(".row-cards-pf > [class*='col'] > .card-pf .card-pf-title").matchHeight();
        $(".row-cards-pf > [class*='col'] > .card-pf > .card-pf-body").matchHeight();
        $(".row-cards-pf > [class*='col'] > .card-pf > .card-pf-footer").matchHeight();
        $(".row-cards-pf > [class*='col'] > .card-pf").matchHeight();
        // initialize tooltips
        $('[data-toggle="tooltip"]').tooltip();
      });
      </script>
    </body>
    {% endcapture %}{{ markup_include | xml_escape }}
  </pre>
</div>
<h2 id="example-code-2">Mini Card Alternate</h2>
<div class="example-bg">
  <div class="row">
    <div class="example-pf col-md-9">
      <div class="cards-pf">
        <div class="container-fluid container-cards-pf">
          <div class="row-cards-pf">
            <div class="col-xs-12 col-sm-6 col-md-4" style="padding-left: 0px;">
              {% include widgets/cards/aggregate-status-ipsum-mini.html %}
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
              {% include widgets/cards/aggregate-status-amet-mini.html %}
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4" style="padding-right: 0px;">
              {% include widgets/cards/aggregate-status-adipiscing-mini.html %}
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
    <body class="cards-pf">
      ...
      <div class="container-fluid container-cards-pf">
        <div class="row row-cards-pf">
          <div class="col-xs-6 col-sm-4 col-md-4">
            {% include widgets/cards/aggregate-status-ipsum-mini.html %}
          </div>
          <div class="col-xs-6 col-sm-4 col-md-4">
            {% include widgets/cards/aggregate-status-amet-mini.html %}
          </div>
          <div class="col-xs-6 col-sm-4 col-md-4">
            {% include widgets/cards/aggregate-status-adipiscing-mini.html %}
          </div>
        </div><!-- /row -->
      </div><!-- /container -->
      <script src="/components/jquery-match-height/dist/jquery.matchHeight-min.js"></script>
      <script>
      $(function() {
        // matchHeight the contents of each .card-pf and then the .card-pf itself
        $(".row-cards-pf > [class*='col'] > .card-pf .card-pf-title").matchHeight();
        $(".row-cards-pf > [class*='col'] > .card-pf > .card-pf-body").matchHeight();
        $(".row-cards-pf > [class*='col'] > .card-pf > .card-pf-footer").matchHeight();
        $(".row-cards-pf > [class*='col'] > .card-pf").matchHeight();
        // initialize tooltips
        $('[data-toggle="tooltip"]').tooltip();
      });
      </script>
    </body>
    {% endcapture %}{{ markup_include | xml_escape }}
  </pre>
</div>
