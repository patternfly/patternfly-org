---
title: Inline Notifications
author: rhamilto
layout: page
---

<h2>Overview</h2>
<p>Inline notifications are used to notify a user of the status of an action during a task flow. It is recommended that inline notifications are shown at the top of the main content area.</p>

<h2>Examples</h2>
<div class="pf-example">
  <div class="alert alert-danger alert-dismissable">
    <button type="button" class="close" data-dismiss="alert" aria-hidden="true"><span class="pficon pficon-close"></span></button><span class="pficon pficon-error-circle-o"></span> Failed to add <strong>server_abc</strong>. <a href="#" class="alert-link">View Details</a>
  </div>
  <div class="alert alert-success alert-dismissable">
    <button type="button" class="close" data-dismiss="alert" aria-hidden="true"><span class="pficon pficon-close"></span></button><span class="pficon pficon-ok"></span> <strong>server_abc</strong> has been added to the main server group.
  </div>
  <div class="alert alert-warning alert-dismissable">
    <button type="button" class="close" data-dismiss="alert" aria-hidden="true"><span class="pficon pficon-close"></span></button><span class="pficon pficon-warning-triangle-o"></span> The server configuration changed.
  </div>
  <div class="alert alert-info alert-dismissable">
    <button type="button" class="close" data-dismiss="alert" aria-hidden="true"><span class="pficon pficon-close"></span></button><span class="pficon pficon-info"></span> The server is in the North West Datacenter.
  </div>
</div>
<p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="inline-notifications-markup" href="#inline-notifications-markup">Reference Markup</a></p>
<div class="collapse" id="inline-notifications-markup">
  <pre class="prettyprint">&lt;div class="alert alert-danger alert-dismissable"&gt;
  &lt;button type="button" class="close" data-dismiss="alert" aria-hidden="true"&gt;
    &lt;span class="pficon pficon-close"&gt;&lt;/span&gt;
  &lt;/button&gt;
  &lt;span class="pficon pficon-error-circle-o"&gt;&lt;/span&gt;
  Failed to add &lt;strong&gt;server_abc&lt;/strong&gt;. &lt;a href="#" class="alert-link"&gt;View Details&lt;/a&gt;
&lt;/div&gt;
&lt;div class="alert alert-success alert-dismissable"&gt;
  &lt;button type="button" class="close" data-dismiss="alert" aria-hidden="true"&gt;
    &lt;span class="pficon pficon-close"&gt;&lt;/span&gt;
  &lt;/button&gt;
  &lt;span class="pficon pficon-ok"&gt;&lt;/span&gt;
  &lt;strong&gt;server_abc&lt;/strong&gt; has been added to the main server group.
&lt;/div&gt;
&lt;div class="alert alert-warning alert-dismissable"&gt;
  &lt;button type="button" class="close" data-dismiss="alert" aria-hidden="true"&gt;
    &lt;span class="pficon pficon-close"&gt;&lt;/span&gt;
  &lt;/button&gt;
  &lt;span class="pficon pficon-warning-triangle-o"&gt;&lt;/span&gt;
  The server configuration changed.
&lt;/div&gt;
&lt;div class="alert alert-info alert-dismissable"&gt;
  &lt;button type="button" class="close" data-dismiss="alert" aria-hidden="true"&gt;
    &lt;span class="pficon pficon-close"&gt;&lt;/span&gt;
  &lt;/button&gt;
  &lt;span class="pficon pficon-info"&gt;&lt;/span&gt;
  The server is in the North West Datacenter.
&lt;/div&gt;</pre>
</div>

<h3>Variations</h3>
<div class="pf-example">
  <div class="alert alert-danger alert-dismissable">
    <button type="button" class="close" data-dismiss="alert" aria-hidden="true"><span class="pficon pficon-close"></span></button><span class="pficon pficon-error-circle-o"></span> Failed to add <strong>server_abc</strong>.
  </div>
  <div class="alert alert-success">
    <span class="pficon pficon-ok"></span> <strong>server_abc</strong> has been added to the main server group. <a href="#" class="alert-link">View Details</a>
  </div>
</div>
<p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="inline-notifications-variations-markup" href="#inline-notifications-variations-markup">Reference Markup</a></p>
<div class="collapse" id="inline-notifications-variations-markup">
  <pre class="prettyprint">&lt;div class="alert alert-danger alert-dismissable"&gt;
  &lt;button type="button" class="close" data-dismiss="alert" aria-hidden="true"&gt;
    &lt;span class="pficon pficon-close"&gt;&lt;/span&gt;
  &lt;/button&gt;
  &lt;span class="pficon pficon-error-circle-o"&gt;&lt;/span&gt;
  Failed to add &lt;strong&gt;server_abc&lt;/strong&gt;.
&lt;/div&gt;
&lt;div class="alert alert-success"&gt;
  &lt;span class="pficon pficon-ok"&gt;&lt;/span&gt;
  &lt;strong&gt;server_abc&lt;/strong&gt; has been added to the main server group. &lt;a href="#" class="alert-link"&gt;View Details&lt;/a&gt;
&lt;/div&gt;</pre>
</div>
<h3>In Context</h3>
<p><img src="/wp-content/uploads/2015/11/notification_inContext.png" alt="notification_inContext"/></p>

<h2>Description</h2>
<div class="row">
<div class="col-md-5">
<p><img src="/wp-content/uploads/2015/11/notification_callout2.png" alt="notification_callout2"/></p>
</div>

<div class="col-md-7">
<ol>
<li><b>Background:</b> The notification should occupy the full width of the main content area. See the "In Context" example above.</li>
<li><b>Icons:</b> Indicate the type of the notification. There are four types of available notifications: info, success, warning and error.</li>
<li><b>Message:</b> Show a short message within the notification and make it clear what just happened or what the user needs to perform next.</li>
<ul>
<li>Bold the important information (e.g. name of the object).</li>
<li>Use the regular font weight for the rest of the message.</li>
</ul>
<li><b>Link</b> (optional): Show a “View Details” link to allow the user to navigate to details of the message.</li>
<li><b>Close</b> (optional): Allow the user to dismiss the inline notification by clicking on the Close icon.</li>
    </ol>
  </div>
</div>
