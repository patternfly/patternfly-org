---
title: PatternFly 2.0 Migration Guide
author: lhinson
layout: page
---
This guide details how to upgrade from PatternFly 1.x to our latest version, [PatternFly 2.0][1].

## PatternFly 2.0 is (almost) backwards compatible with v1.x.

There are three major changes that you should know about:

  * We don&#8217;t support Internet Explorer 8 anymore.
  * We&#8217;ve split the CSS into two files (`patternfly.*css` and `patternfly-additions.*css`) to avoid a limitation of Internet Explorer 9, where [only 4095 selectors are recognized in a single stylesheet][2].
  * We&#8217;ve moved `components/boostrap-select/bootstrap-select.min.js` to `components/boostrap-select/dist/js/bootstrap-select.min.js`.

## Get PatternFly 2.0

The first step is to upgrade the PatternFly codebase. This process will be different depending on how your project manages its dependencies.

### Upgrade using Bower:

<pre class="prettyprint">$ bower install patternfly —save-dev</pre>

### Upgrade using Npm:

<pre class="prettyprint">$ npm install patternfly —save-dev</pre>

### Upgrade using Git:

Add PatternFly as a remote repo, fetch it and rebase.

<pre class="prettyprint">$ git remote add upstream git@github.com:patternfly/patternfly.git
$ git fetch upstream</pre>

### Get the ZIP

Or just [download the zip file][3] from github.

## Changes on the HTML

### IE8 Support

Since we no longer support IE8, you can remove IE8 utilities (html5shiv and respond) from all your pages.

### Link two CSS instead of one

We&#8217;ve split PatternFly styles into two style sheets. The links to the styles will look something like this:

<pre class="prettyprint">&lt;link href="PATH_TO_PATTERNFLY/dist/css/patternfly.*.css" rel="stylesheet" media="screen, print"&gt;
&lt;link href="PATH_TO_PATTERNFLY/dist/css/patternfly-additions.*.css" rel="stylesheet" media="screen, print"&gt;</pre>

### Boostrap Select

If you are using [Boostrap Select][4] you should change the path to javascript. It&#8217;ll look something like this:

<pre class="prettyprint">&lt;script src="PATH_TO_PATTERNFLY/components/bootstrap-select/dist/js/bootstrap-select.min.js"&gt;&lt;/script&gt;</pre>

## Dependency Upgrades

We&#8217;ve upgraded most of our dependencies. Check out the [Release Notes][5] to see a complete list. If you need a version other than what is checked into patternfly/components, you&#8217;ll have to pull it yourself.

## Changes on LESS

If you are [extending PatternFly styles using less][6], import `patternfly-additions.less` as a base to your styles, and compile again. Remember to load both `patternfly*.css` and your styles on the HTML.

<pre class="prettyprint">@import "PATH_TO_PATTERNFLY/patternfly/less/patternfly-additions.less";</pre>

## For more information on upgrading to v2.0

Send an email to the [mailing list][7] or join the IRC channel #patternfly on Freenode.

 [1]: https://github.com/patternfly/patternfly/releases
 [2]: https://support.microsoft.com/en-us/kb/262161
 [3]: https://github.com/patternfly/patternfly/archive/master.zip
 [4]: {{site.baseurl}}/widgets/#bootstrap-select
 [5]: https://github.com/patternfly/patternfly/releases/tag/v2.0.0
 [6]: http://blog.andresgalante.com/howto/2015/02/06/patternfly.html
 [7]: mailto:patternfly@redhat.com
