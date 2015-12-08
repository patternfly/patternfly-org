---
title: PatternFly
author: rhamilton
layout: home
url-css-extra: 'bower_components/animate.css/animate.min.css'
url-js-extra: ['bower_components/wowjs/dist/wow.min.js', 'bower_components/jquery.scrollTo/jquery.scrollTo.min.js']
---
<div class="jumbotron">
  <div class="container-fluid">
    <div class="splash">
      <div class="content">
        <img src="{{ site.baseurl}}assets/img/patternfly-orb.svg" alt="PatternFly logo" class="wow fadeInDown" />
        <h1 class="wow fadeIn" data-wow-delay="750ms">
          PatternFly
        </h1>
        <p class="description wow fadeIn" data-wow-delay="1250ms">
          A community of designers and developers collaborating to build a UI framework for enterprise web applications.
        </p>
        <p class="version wow fadeIn" data-wow-delay="1500ms">
          Version 2.7.0
        </p>
      </div>
    </div>
  </div>
  <div class="arrow wow fadeIn" data-wow-delay="2000ms">
    <i class="fa fa-angle-down"></i>
  </div>
</div>
<div class="about">
  <div class="container-fluid">
    <h2>
      About PatternFly
    </h2>
    <p>PatternFly is a community project that promotes design commonality and improved user experience. Its offerings include open source code, patterns, style guides and supporting community (all this is tbd).</p>
    <div class="row">
      <div class="col-xs-6 col-sm-3 col-md-3">
        <a href="{{ site.baseurl}}download/">
          <img src="{{ site.baseurl}}assets/img/icon-code.svg" alt="Code icon" />
        </a>
        <h3>Code</h3>
        <p>
          <a href="{{ site.baseurl}}download/">Download</a>
        </p>
      </div>
      <div class="col-xs-6 col-sm-3 col-md-3">
        <a href="{{ site.baseurl}}pattern-library/">
          <img src="{{ site.baseurl}}assets/img/icon-library.svg" alt="Pattern Library icon" />
        </a>
        <h3>Pattern Library</h3>
        <p>
          <a href="{{ site.baseurl}}pattern-library/">View Patterns</a>
        </p>
      </div>
      <div class="col-xs-6 col-sm-3 col-md-3">
        <a href="{{ site.baseurl}}community/">
          <img src="{{ site.baseurl}}assets/img/icon-community.svg" alt="Community icon" />
        </a>
        <h3>Community</h3>
        <p>
          <a href="{{ site.baseurl}}community/">Get Involved</a>
        </p>
      </div>
      <div class="col-xs-6 col-sm-3 col-md-3">
        <a href="{{ site.baseurl}}styles/">
          <img src="{{ site.baseurl}}assets/img/icon-styles.svg" alt="Styles icon" />
        </a>
        <h3>Styles</h3>
        <p>
          <a href="{{ site.baseurl}}styles/">View Styles</a>
        </p>
      </div>
    </div>
  </div>
</div>
<div class="whats-new">
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6">
        <h2>
          What's New
        </h2>
        <ul class="updates">
        {% assign whats-news = site.whats-news | sort: 'date' | reverse %}
        {% for whatsnew in whats-news limit:2 %}
          <li>
            <h3>{{ whatsnew.date | date: '%B %-d, %Y' }}</h3>
            {{ whatsnew.content }}
          </li>
        {% endfor %}
        </ul>
        <p><a href="{{ site.baseurl}}whats-new/">View all</a></p>
      </div>
      <div class="col-md-6">
        <h3>Featured Content</h3>
        <div id="carousel-layouts" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carousel-layouts" data-slide-to="0" class="active"></li>
            <li data-target="#carousel-layouts" data-slide-to="1"></li>
            <li data-target="#carousel-layouts" data-slide-to="2"></li>
            <li data-target="#carousel-layouts" data-slide-to="3"></li>
            <li data-target="#carousel-layouts" data-slide-to="4"></li>
          </ol>
          <div class="carousel-inner" role="listbox">
            <div class="item active">
              <img alt="Dashboard layout" src="{{ site.baseurl}}wp-content/uploads/2014/11/layouts-dashboard.png" />
            </div>
            <div class="item">
              <img alt="Form layout" src="{{ site.baseurl}}wp-content/uploads/2014/11/layouts-form.png" />
            </div>
            <div class="item">
              <img alt="Treeview layout" src="{{ site.baseurl}}wp-content/uploads/2014/11/layouts-treeview.png" />
            </div>
            <div class="item">
              <img alt="Tabs layout" src="{{ site.baseurl}}wp-content/uploads/2014/11/layouts-tab.png" />
            </div>
            <div class="item">
              <img alt="Basic layout" src="{{ site.baseurl}}wp-content/uploads/2014/11/layouts-basic.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
