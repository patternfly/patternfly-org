---
title: Layouts
author: mcarrano
layout: page
---
## Overview

When designing a PatternFly web application, choose a layout that can be applied to ensure a consistent experience when moving from page to page. This requires choosing a common template for the layout of pages in your application and a navigation schema that will enable users to easily move between pages.

To make this process easier, PatternFly includes [templates for several common page types][1] and guidance for choosing the right navigation schema for your application. By using these common layouts, users will experience a consistent interaction framework as they move between applications allowing them to predict where certain functionality is located and providing a familiar organization for PatternFly pages.

## Start with an Information Architecture

Working out your information architecture is a vital first step for determining your overall interaction framework. What is the content you need to represent? How should that content be grouped or organized? Does it make sense for your application to be object-centric (i.e. organized around the information that your user will manage) or task-centric (organized around the things that a user will do)?

## Organizing Your Page

Once the information architecture is understood, you should identify a common layout or template for the pages within your application. This grid system helps to ensure consistent design from page to page. The [PatternFly Layout Templates][1] are built on the [Bootstrap grid system][2] and include combinations of a masthead, a local navigator, a workspace, footer, and a sidebar. All pages should include the masthead, however other elements may be used in combination to create one, two, or three column layouts. Each area in the layout can be thought about as a container for holding other content. The patterns that plug in to fill these areas will be variable depending on the use cases that your application must satisfy. The figure below shows how this layout system moves the user&#8217;s eye across the page.

  * **Global Navigation (A)** &#8211; this includes a persistent set of links that will exist in the application&#8217;s [primary navigation bar][3].
  * **Utility Links (B)** &#8211; include actions that need to be accessible, but are not really part of the application&#8217;s primary navigation (e.g. logon/logut, notifications, etc.).
  * **Navigator (C)** &#8211; includes local navigation for the current section of the application. Local navigation can be can be accomplished using a variety of navigation patterns The following are some criteria that may be used for choosing between these menu patterns.
  * **Workspace (D)** &#8211; this is the area reserved for displaying, manipulating, and editing information. For applications that represent a deep hierarchy, you may need to include additional navigation within the workspace (see below).
  * **Sidebar (E)** &#8211; reserved for including lists of links or monitoring information that is ancillary to the primary task.

&nbsp;

<img class="alignnone wp-image-2254 size-full" src="{{site.baseurl}}wp-content/uploads/2014/02/DesigningWebApplications.png" alt="DesigningWebApplications" width="960" height="700" />

&nbsp;

&nbsp;

## Presenting Content

Organizing the workspace requires special consideration. When faced with the need to expose a lot of content within the central workspace area, it may be necessary to chunk content further by organizing information into tabbed panels or progressive disclosure panels. See the figure below.

  * **Breadcrumb (A) **&#8211; provides context and feedback to inform users of their current location. Breadcrumbs are also a means for users to navigate back up the information hierarchy.
  * **Page Title (B)** &#8211; The page title provides further reinforcement to users about where they are.
  * **Tabbed Panels (C)** &#8211; when you want to organize your workspace into several groups of related content and make it easy for users to switch between them.

&nbsp;

<img class="alignnone wp-image-2256 size-full" src="{{site.baseurl}}wp-content/uploads/2014/02/Layout_regions_tabs21.png" alt="Layout_regions_tabs2" width="960" height="700" />

 [1]: {{site.baseurl}}layouts/layout-templates/ "Layout Templates"
 [2]: http://getbootstrap.com/css/#grid
 [3]: {{site.baseurl}}wikis/patterns/navigation/primary-navigation-bar/ "Primary Navigation Bar"
