---
title: PatternFly Angular 3.0 Migration Guide
author: dtaylor / ajolicoeur
layout: page
---
## Angular-PatternFly 3.0 Migration Guide

This guide details how to upgrade from PatternFly Angular 2.x to our latest version, [PatternFly Angular 3.0][1]. Using base PatternFly? Use the [PatternFly 3.0][8] upgrade instead.

### Release Notes:

  * Updated devDependency to PatternFly for 3.0.0

### Enhancements:
** These changes are not backwards compatible! **
  * Several directive name changes have been made to be more inline with base PatternFly terminology.
  * The CSS selectors have also been changed from pf- to -pf to be more inline with PatternFly conventions.

## Angular-PatternFly 3.0 is (almost) backwards compatible with v2.x.

There are three major changes that you should know about:

* The PatternFly dependencies (bower_components/patternfly/components) are no longer committed to the PatternFly repo. That means you must update any Angular-PatternFly &lt;script&gt; tags to refer to the new locations. For complete documentation please refer to PatternFly 3.0 Migration Guide
* Several Angular-PatternFly directives have been renamed to be more in-sync with base PatternFly terminology.

## Get Angular-PatternFly 3.0

The first step is to upgrade the Angular-PatternFly codebase. This process will be different depending on how your project manages its dependencies.

### Upgrade using Bower:

<pre class="prettyprint">
  $ bower install angular-patternfly --save
</pre>

### Accessing PatternFly Dependencies:
Prior to v3.0 PatternFly dependencies were checked into the PatternFly repo under ‘/components’ and applications would access them via:

<pre class="prettyprint">
  &lt;script src="bower_components/patternfly/components/c3/c3.min.js">&lt;/script&gt;
</pre>

As of v3.0 the ‘patternfly/components’ directory is no longer committed to the repo. That means you must update any Angular-PatternFly &lt;script&gt; tags to point the the new location.

For example, after executing:
<pre class="prettyprint">
  $ bower install angular-patternfly --save
</pre>

The dependencies for Angular-PatternFly and PatternFly are installed directly into the “bower_components”. This simply means that the PatternFly c3 dependency will no longer be available under ‘bower_components/**patternfly/components**/c3’, but rather it will be directly accessible under **‘bower_components/c3’**.

The updated script tag would be:
<pre class="prettyprint">
&lt;script src="bower_components/c3/c3.min.js">&lt;/script&gt;
</pre>

For complete documentation please refer to [PatternFly 3.0 Migration Guide][8].

### Renamed Angular-PatternFly Directives

The following Angular-PatternFly directives have been renamed to be more in-sync with base PatternFly terminology. You must change these directive names in your HTML files:

| Old Name  | New Name |
| ------------- | ------------- |
| pf-utilization-chart | pf-utilization-trend-chart  |
| pf-simple-filter  | pf-filter  |
| pf-simple-filter-results | pf-filter-results |
| pf-notification | pf-inline-notification |
| pf-simple-sort | pf-sort |
| pf-data-list | pf-list-view |
| pf-data-tiles | pf-card-view |

* CSS selectors have also been changed from ‘pf-’ to ‘-pf’ to be more inline with PatternFly conventions.

## For more information on upgrading to v3.0

Send an email to the [mailing list][5] or reach out on [Gitter][6] or [Freenode][7] at #patternfly.

 [1]: https://github.com/patternfly/angular-patternfly/releases
 [2]: https://support.microsoft.com/en-us/kb/262161
 [5]: mailto:patternfly@redhat.com
 [6]: https://gitter.im/patternfly/patternfly?utm_source=share-link&utm_medium=link&utm_campaign=share-link
 [7]: https://webchat.freenode.net/
 [8]: {{site.baseurl}}/get-started/patternfly-migration-guides/patternfly-migration-guide-3.0.md
