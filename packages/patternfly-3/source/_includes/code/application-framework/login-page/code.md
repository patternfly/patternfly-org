<div class="example-pf">
  <iframe src="{{ site.baseurl }}/pattern-library/application-framework/login-page/login-basic.html"
          width="100%" height="800px;" scrolling="no" seamless></iframe>
</div>
<p>
  <a href="https://rawgit.com/patternfly/patternfly/master-dist/dist/tests/login-basic.html" target="_blank">View full page example</a>
</p>
<p class="reference-markup">
  <a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="login-layout-markup" href="#login-layout-markup">Reference Markup</a>
</p>
<div class="collapse in" id="login-layout-markup">
  <pre class="prettyprint">{% capture markup_include %}
<html class="login-pf">
...
{% include widgets/framework/login-basic.html %}
</html>
  {% endcapture %}{{ markup_include | xml_escape }}</pre>
</div>
