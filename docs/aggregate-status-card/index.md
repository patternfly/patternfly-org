---
title: Aggregate Status Card
author: lhinson
layout: page
---
[<img src="/wp-content/uploads/2015/04/AggregateStatus_sample.png" alt="AggregateStatus_sample" class="alignnone size-full wp-image-3867" />][1] 

## Overview and Usage

The aggregated status card shows a total number of objects and an aggregated status for those objects. The most common use case for this pattern is seen in a dashboard view to illustrate the total count and the status (e.g. error, warning, OK) of objects in an environment.

<div class="row">
  <div class="col-md-8">
    <ul>
      <li>
        If the aggregate status card is located at the top of a dashboard view, you may opt to add the the blue stripe to the top of the card.
      </li>
      <li>
        If the card is located somewhere other than a dashboard, there is no blue stripe located across the top of the card.
      </li>
      <li>
        A card, not located in the dashboard view, may require the number count to be displayed with the OK icon.
      </li>
    </ul>
  </div>
  
  <div class="col-md-4">
    <a href="/wp-content/uploads/2015/04/AggregateStatus_dashTileSpec.png"><img src="/wp-content/uploads/2015/04/AggregateStatus_dashTileSpec.png" alt="AggregateStatus_dashTileSpec" class="alignnone size-full wp-image-3872" /></a>
  </div>
</div>

  
</br> 

## Description

**Header Area:**

<div class="row">
  <div class="col-md-8">
    <ol>
      <li>
        Object icon (optional): There is an option to display an object icon before the count and object name.  Make sure you are consistent and either opt to always use the icon or not. Do not mix and match by applying icons to some cards but not others. Icons should be used thoughtfully and sparingly. Ensure that the icon’s visual metaphor provides valuable meaning rather than pointless clutter.
      </li>
      <li>
        Total number: This is a number that represents a count for the total number of objects in the environment.
      </li>
      <li>
        Object type label: This is text that displays the object type. A tooltip should appear on hover to inform the user about this action.
      </li>
    </ol>
  </div>
  
  <div class="col-md-4">
    <a href="/wp-content/uploads/2015/04/AggregateStatus_headerSpec.png"><img src="/wp-content/uploads/2015/04/AggregateStatus_headerSpec.png" alt="AggregateStatus_headerSpec" class="alignnone size-full wp-image-3869" /></a>
  </div>
</div>

  
</br> 

**Action Area (optional):**

<div class="row">
  <div class="col-md-8">
    <ol>
      <li>
        If there is more than one action associated with this card, an action menu can be displayed in the top right corner.
      </li>
      <li>
        Or, you may only want to include the add or create action icon. See the <a title="Terminology and Wording" href="https://www.patternfly.org/visual-styles/terminology-and-wording//#terms-and-words">Terminology and Wording Style Guide</a> for more information regarding wording recommendations for action labels.
      </li>
    </ol>
  </div>
  
  <div class="col-md-4">
    <a href="/wp-content/uploads/2015/04/AggregateStatus_actionsAreaSpec.png"><img src="/wp-content/uploads/2015/04/AggregateStatus_actionsAreaSpec.png" alt="AggregateStatus_actionsAreaSpec" class="alignnone size-full wp-image-3870" /></a>
  </div>
</div>

  
</br> 

**Content Area:**

<div class="row">
  <div class="col-md-8">
    <ol>
      <li>
        Status icon(s): A status icon either assures the user that everything is ok or informs them about error or warnings. An error and warning can be displayed together however, avoid showing an OK status with a warning or error. Either everything is OK or it’s not.
      </li>
      <li>
        Number count: This shows the count associated with the icon. A number next to the OK icon is redundant since the total count is already shown in the header area. Therefore, an OK status should be visually represented by an icon only.
      </li>
      <li>
        If no objects exists, you may want to display the create or add icon, whichever is the primary action.
      </li>
      <li>
        Include tooltips and hover help as necessary.
      </li>
      <li>
        Ensure to inform the user if any card elements are interactive by blue text and an underline on hover.
      </li>
    </ol>
  </div>
  
  <div class="col-md-4">
    <a href="/wp-content/uploads/2015/04/AggregateStatus_contentAreaSpec.png"><img src="/wp-content/uploads/2015/04/AggregateStatus_contentAreaSpec.png" alt="AggregateStatus_contentAreaSpec" class="alignnone size-full wp-image-3871" /></a>
  </div>
</div>

 [1]: /wp-content/uploads/2015/04/AggregateStatus_sample.png