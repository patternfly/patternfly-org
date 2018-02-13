<div class="example-navbar">

<h2>Horizontal Nav Bar</h2>

<h3>Grid Menu</h3>

<h4>Icons</h4>
{% include widgets/navigation/horizontal-primary-nav-bar.html launchericons=true launchergrid=true navindex=1 %}
<h4>No Icons</h4>
{% include widgets/navigation/horizontal-primary-nav-bar.html launchericons=false launchergrid=true navindex=2 %}

<h3>List Menu</h3>

<h4>Icons</h4>
{% include widgets/navigation/horizontal-primary-nav-bar.html launchericons=true launchergrid=false navindex=3 %}

<h4>No Icons</h4>
{% include widgets/navigation/horizontal-primary-nav-bar.html launchericons=false launchergrid=false navindex=4 %}

<br>
<br>
<h2>Vertical Nav Bar</h2>

<h3>Grid Menu</h3>

<h4>Icons</h4>
{% include widgets/layouts/navbar-vertical.html launchergrid=true launchericons=true navindex=5 %}

<h4>No Icons</h4>
{% include widgets/layouts/navbar-vertical.html launchergrid=true launchericons=false navndex=6 %}

<h3>List Menu</h3>

<h4>Icons</h4>
{% include widgets/layouts/navbar-vertical.html launchergrid=false launchericons=true navindex=7 %}

<h4>No Icons</h4>
{% include widgets/layouts/navbar-vertical.html launchergrid=false launchericons=false navindex=8 %}

</div>

<script>
  $(document).ready(function() {
    $('.applauncher-pf .dropdown-toggle').eq(0).click();
  });
</script>


<p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-2" href="#markup-2">Reference Markup</a></p>
<div class="collapse in" id="markup-2">
  <pre class="prettyprint">{% capture markup_include %}
  <h2>Horizontal Nav Bar</h2>

  <h3>Grid Menu</h3>

  <h4>Icons</h4>
  {% include widgets/navigation/horizontal-primary-nav-bar.html launchericons=true launchergrid=true navindex=1 %}
  <h4>No Icons</h4>
  {% include widgets/navigation/horizontal-primary-nav-bar.html launchericons=false launchergrid=true navindex=2 %}

  <h3>List Menu</h3>

  <h4>Icons</h4>
  {% include widgets/navigation/horizontal-primary-nav-bar.html launchericons=true launchergrid=false navindex=3 %}

  <h4>No Icons</h4>
  {% include widgets/navigation/horizontal-primary-nav-bar.html launchericons=false launchergrid=false navindex=4 %}

  <br>
  <br>
  <h2>Vertical Nav Bar</h2>

  <h3>Grid Menu</h3>

  <h4>Icons</h4>
  {% include widgets/layouts/navbar-vertical.html launchergrid=true launchericons=true navindex=5 %}

  <h4>No Icons</h4>
  {% include widgets/layouts/navbar-vertical.html launchergrid=true launchericons=false navndex=6 %}

  <h3>List Menu</h3>

  <h4>Icons</h4>
  {% include widgets/layouts/navbar-vertical.html launchergrid=false launchericons=true navindex=7 %}

  <h4>No Icons</h4>
  {% include widgets/layouts/navbar-vertical.html launchergrid=false launchericons=false navindex=8 %}

  <script>
    $(document).ready(function() {
      $('.applauncher-pf .dropdown-toggle').eq(0).click();
    });
  </script>
    {% endcapture %}{{ markup_include | xml_escape }}
  </pre>
</div>
