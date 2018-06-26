---
title: PatternFly 3.0 Migration Guide
author: ajolicoeur
layout: page
---
## PatternFly 3.0 Migration Guide

This guide details how to upgrade from PatternFly 2.x to our latest version, [PatternFly 3.0][1]. Looking for the Angular migration guide? Use the [PatternFly Angular 3.0][8] upgrade instead.

## PatternFly 3.0 is (almost) backwards compatible with v2.x.

There are three major changes that you should know about:

  * The dependencies (/components) are no longer committed to the repo. That means that you must use Bower or NPM* to install PatternFly and it’s dependencies.  If you use another method of installing PatternFly, you must install the PatternFly dependencies manually.
  * pficon-kubernetes and pficon-openshift have been removed.
  * RPMs of PatternFly v3.0 are not yet available.

## Get PatternFly 3.0

The first step in upgrading from PatternFly v2.x to PatternFly v3.0 is to upgrade the PatternFly codebase. This process will be different depending on how your project manages dependencies.

### Upgrade using Bower:

<pre class="prettyprint">
  $ bower install patternfly
</pre>

### Upgrade using Npm*:

<pre class="prettyprint">
  $ npm install patternfly
</pre>

* An NPM install of PatternFly v3.0 will not include the '/components' directory. For an NPM-only install of PatternFly v3.0, you must install the PatternFly dependencies manually. Any dependencies that are automatically included via an NPM-only installation will be restored in v3.1.

### Upgrade using Git:

Add PatternFly as a remote repo, fetch it and rebase.

<pre class="prettyprint">
$ git remote add upstream git@github.com:patternfly/patternfly.git
$ git fetch upstream
</pre>

### Get the ZIP

Or just [download the zip file][3] from github.

If you choose to upgrade using PatternFly source code, you will have to install the PatternFly dependencies manually. For a complete listing of the PatternFly dependencies and how to access them, please see [Using PatternFly In Your Application][4].

## Changes in the HTML

As PatternFly v3.0 no longer includes the '/components' directory, you will have to change your &lt;link&gt; and &lt;script&gt; references to reflect the new locations.

If you wish to use Bower, you can retrieve the components by running

<pre class="prettyprint">
$ bower install patternfly
</pre>

This will place PatternFly and it's dependencies into the 'bower_components' directory. Your new links and script references will change from this:
<pre class="prettyprint">
&lt;script src="bower_components/patternfly/components/c3/c3.min.js"&gt;&lt;/script&gt;
</pre>

to this
<pre class="patternfly">
&lt;script src="bower_components/c3/c3.min.js"&gt;&lt;/script&gt;
</pre>

## For more information on upgrading to v3.0

Send an email to the [mailing list][5] or reach out on [Gitter][6] or [Freenode][7] at #patternfly.

 [1]: https://github.com/patternfly/patternfly/releases
 [2]: https://support.microsoft.com/en-us/kb/262161
 [3]: https://github.com/patternfly/patternfly/archive/master.zip
 [4]: https://github.com/patternfly/patternfly/blob/master/QUICKSTART.md#using-patternfly-in-your-application
 [5]: mailto:patternfly@redhat.com
 [6]: https://gitter.im/patternfly/patternfly?utm_source=share-link&utm_medium=link&utm_campaign=share-link
 [7]: https://webchat.freenode.net/
 [8]: {{site.baseurl}}/get-started/patternfly-migration-guides/angular-patternfly-migration-guide-3.0.html
