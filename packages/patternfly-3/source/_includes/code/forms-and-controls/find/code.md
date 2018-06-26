<h2 id="example-code-1">Example</h2>
<div class="example-pf">
  {% include widgets/layouts/toolbar.html %}
</div>
<p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-1" href="#markup-1">Reference Markup</a></p>
<div class="collapse in" id="markup-1">
  <pre class="prettyprint">{% capture markup_include %}{% include widgets/layouts/toolbar.html %}{% endcapture %}{{ markup_include | xml_escape }}
&lt;script&gt;
(function($) {
  $(document).ready(function() {
    // Upon clicking the find button, show the find dropdown content
    $(".btn-find").click(function () {
      $(this).parent().find(".find-pf-dropdown-container").toggle();
    });
    // Upon clicking the find close button, hide the find dropdown content
    $(".btn-find-close").click(function () {
      $(".find-pf-dropdown-container").hide();
    });
  });
})(jQuery);
&lt;/script&gt;</pre>
</div>

<script>
(function($) {
  $(document).ready(function() {
    // Upon clicking the find button, show the find dropdown content
    $(".btn-find").click(function () {
      $(this).parent().find(".find-pf-dropdown-container").toggle();
    });
    // Upon clicking the find close button, hide the find dropdown content
    $(".btn-find-close").click(function () {
      $(".find-pf-dropdown-container").hide();
    });

  });
})(jQuery);
</script>
