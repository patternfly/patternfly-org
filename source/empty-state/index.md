---
title: Empty State
author: lhinson
layout: page
---
<div class="pf-example">
  <div class="blank-slate-pf">
    <div class="blank-slate-pf-icon">
      <span class="pficon pficon pficon-add-circle-o"></span>
    </div>
    
    <h1>
      Empty State Title
    </h1>
    
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    
    <p>
      Learn more about this <a href="#">on the documentation</a>.
    </p>
    
    <div class="blank-slate-pf-main-action">
      <button class="btn btn-primary btn-lg"> Main Action </button>
    </div>
    
    <div class="blank-slate-pf-secondary-action">
      <button class="btn btn-default"> Secondary Action </button> <button class="btn btn-default"> Secondary Action </button> <button class="btn btn-default"> Secondary Action </button>
    </div>
  </div>
</div>

<p class="reference-markup">
  <a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="blank-slate-markup" href="#blank-slate-markup">Reference Markup</a>
</p>

<div class="collapse" id="blank-slate-markup">
  <pre class="prettyprint">
&lt;div class="blank-slate-pf"&gt;
  &lt;div class="blank-slate-pf-icon"&gt;
    &lt;i class="fa fa-rocket"&gt;&lt;/i&gt;
  &lt;/div&gt;
  &lt;h1&gt;Empty State Title&lt;/h1&gt;
  &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.&lt;/p&gt;
  &lt;p&gt;Learn more about this &lt;a href="#"&gt;on the documentation&lt;/a&gt;.&lt;/p&gt;
  &lt;div class="blank-slate-pf-main-action"&gt;
    &lt;button class="btn btn-primary btn-lg"&gt;
      Main Action
    &lt;/button&gt;
  &lt;/div&gt;
  &lt;div class="blank-slate-pf-secondary-action"&gt;
    &lt;button class="btn btn-default"&gt;
      Secondary Action
    &lt;/button&gt;
    &lt;button class="btn btn-default"&gt;
      Secondary Action
    &lt;/button&gt;
    &lt;button class="btn btn-default"&gt;
      Secondary Action
    &lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre>
</div>

## Overview and Usage Scenarios

The goal of a empty state pattern is to provide a good first impression that helps users to achieve their goals. It should be used when a view is empty because no objects exists and you want to guide the user to perform specific actions.

This pattern should NOT be used when:

  * Selected filters cause an empty result.
  * There is a connectivity issue and the data set cannot be obtained.

## Description<a "/wp-content/uploads/2015/05/emptyState_spec.png">

<img src="/wp-content/uploads/2015/05/emptyState_spec.png" alt="emptyState_spec" class="alignnone size-full wp-image-4083" /></a> 

## 

  1. **Icon** (optional): If an object icon is associated with this view, it can be displayed here.
  2. **Empty State Title:** Give it a name.
  3. **Text** (optional): This text should be personal and helpful. It should minimize the user’s effort to complete tasks.
  4. **Primary action button:** The primary action is displayed as a prominent blue button. See the [Action Labels][1] section for more information about terminology and wording specific to action labels.
  5. **Secondary action buttons** (optional): Secondary actions are alternative options for the user. They are shown as more subtle gray buttons and located below the main action. There can be more than one secondary action.

 [1]: https://www.patternfly.org/styles/terminology-and-wording/#action-labels