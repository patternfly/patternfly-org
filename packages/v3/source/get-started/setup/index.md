---
title: Setting Up PatternFly
author: ajolicoeur
layout: page
---
<div class="row">
  <div class="col-md-12">
    <h2>Directly introduce PatternFly with CDN provider</h2>
  </div>
</div>
<div class="row">
  <div class="col-md-12">
    <p>
      If you want to try out the components provided by PatternFly in a fast way. Just use these <a href="https://cdnjs.com/libraries/patternfly" target="top">PatternFly</a> CDN links.
    </p>
  </div>
  <div class="col-xs-12 col-sm-12 col-md-12">
    <pre class="prettyprint">
    <code class="language-html">{% escape_html %}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/patternfly/3.24.0/css/patternfly.min.css">
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/patternfly/3.24.0/css/patternfly-additions.min.css">
</head>
<body>
  <div class="container">

    <!-- Just enjoy various PatternFly components -->
    <div class="alert alert-success">
      <span class="pficon pficon-ok"></span>
      <strong>Great job!</strong> This is really working out <a href="#" class="alert-link">great for us</a>.
    </div>

  </div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/patternfly/3.24.0/js/patternfly.min.js"></script>
</body>
</html>
{% endescape_html %}</code>
    </pre>
  </div>
</div>
<div class="row">
  <div class="col-md-12">
    <h2>Setting Up PatternFly with npm</h2>
  </div>
</div>
<div class="row">
  <div class="col-md-12">
    <h3>Step 1: Prerequisites</h3>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12">
        <p>Before you build up web apps with npm and PatternFly, there are a few things that you have to do first:</p>
        <ul>
          <li>Make sure that you have node.js installed.</li>
          <li><kbd>mkdir myProject && cd myProject</kbd></li>
          <li>Type <kbd>npm init</kbd> to create package.json file.</li>
        </ul>
      </div>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-xs-12 col-sm-12 col-md-12">
    <h3>Step 2: Install PatternFly</h3>
    <p>
      <kbd>
        npm install patternfly --save
      </kbd>
    </p>
    <p>This will download and write to node_modules PatternFly and its dependency libraries.</p>
  </div>
</div>
<div class="row">
  <div class="col-xs-12 col-sm-12 col-md-12">
    <h3>Step 3: Apply PatternFly in your project</h3>
    <p>Now we can include the necessary assets by directly specifying their path inside the node_modules folder.</p>
  </div>
  <div class="col-xs-12 col-sm-12 col-md-12">
    <pre class="prettyprint">
      <code class="language-html">{% escape_html %}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" type="text/css" href="/node_modules/patternfly/dist/css/patternfly.css">
  <link rel="stylesheet" type="text/css" href="/node_modules/patternfly/dist/css/patternfly-additions.css">
</head>
<body>
  <div class="container">

    <!-- Just enjoy various PatternFly components -->
    <div class="alert alert-success">
      <span class="pficon pficon-ok"></span>
      <strong>Great job!</strong> This is really working out <a href="#" class="alert-link">great for us</a>.
    </div>

  </div>

  <script src="/node_modules/jquery/dist/jquery.js"></script>
  <script src="/node_modules/bootstrap/dist/js/bootstrap.js"></script>
</body>
</html>
{% endescape_html %}</code>
    </pre>
  </div>
</div>
<br/>
<div class="well">
  <p>
    For any questions, reach out to us on our <a href="mailto:patternfly@redhat.com">mailing list</a>, <a href="https://gitter.im/patternfly/patternfly?utm_source=share-link&utm_medium=link&utm_campaign=share-link" target="top">Gitter</a> or on <a href="https://webchat.freenode.net/" target="top">Freenode</a> at #patternfly.
  </p>
</div>
