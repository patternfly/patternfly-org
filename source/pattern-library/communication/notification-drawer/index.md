---
title: Notification Drawer
author: dlabrecq
layout: page-tabs
codetab: false
---
<div class="tab-content">
  <div role="tabpanel" class="tab-pane active" id="overview">
    <p>The Notification Drawer is a content delivery system such as events, tasks, and alerts. It is a self contained
    system that is viewable without having to navigate to another area of the application. Upon login it offers initial
    notifications for what has changed in the form of dismissible
    <a href="{{site.baseurl}}pattern-library/communication/toast-notifications">Toast Notifications</a> and a permanent
    interactive icon in the header bar. It is hidden or revealed at the user’s request.</p>
    <p>Jump to <a href="#example-overview-1">Vertical Navigation</a> or <a href="#example-overview-2">Horizontal Navigation</a></p>
    <h2 id="example-overview-1">Vertical Navigation</h2>
    <div class="example-pf">
      <img src="{{site.baseurl}}assets/img/Patternfly_ToastNotification_Tray_06_11_2016.jpg" alt="notification-drawer-example"/>
    </div>  
    <h2 id="example-overview-2">Horizontal Navigation</h2>
    <div class="example-pf">
      <img src="{{site.baseurl}}assets/img/Patternfly_ToastNotification_Tray_Horizontal.jpg" alt="notification drawer horizontal nav example"/>
    </div>
  </div>
  <div role="tabpanel" class="tab-pane" id="design">
    <h2>Toast Notification</h2>
    <div class="row">
      <div class="col-md-8 col-lg-7">
        <img src="{{site.baseurl}}assets/img/toast.png" alt="toast-callout"/>
      </div>
      <div class="col-md-4 col-lg-5">
        <ol>
          <li><b>Toast Notification:</b> The drawer should utilize the current <a href="{{site.baseurl}}pattern-library/communication/toast-notifications/">Toast Notification</a>. Shows the notification title and and optional content relevant icon. </li>
        </ol>
      </div>
    </div>
    <h2>Notification Drawer</h2>
    <div class="row">
      <div class="col-md-8 col-lg-7">
        <img src="{{site.baseurl}}assets/img/tray.png" alt="tray-callout"/>
      </div>
      <div class="col-md-4 col-lg-5">
        <ol>
          <li><b>Icon:</b> Displays visual differentiator when new or unread notifications are present. Clicking on the icon will slide out a drawer and dismiss the toast notification. Clicking on the icon again will close the drawer. </li>
          <li><b>Drawer Title:</b> Title of Drawer.</li>
          <li><b>Accordion:</b> Only one notification tab may be opened at a given time -maximizing drawer space. Italicized text will indicate number of new events. Clicking on the title will expand accordion.</li>
          <li><b>Row:</b> Example content shows relevant icon creating a visual differentiator between content severity or object type. New/unread notifications are shown in bold.</li>
          <li><b>Row Hover State:</b> Example of hover state.</li>
          <li><b>Mark All Read:</b> Clicking “Mark All Read” changes all visible unread rows (bold row type) to read (regular row type).</li>
          <li><b>Icon Empty:</b> The empty state shows no new events.</li>
          <li><b>Row Actions:</b> Clicking on the <a href="{{site.baseurl}}pattern-library/widgets/#kebabs">Kabob</a> menu will reveal a drop down containing actions for that item.</li>
          <li><b>Infinite Scroll:</b> Infinite scroll reduces need to identify time range on accordion tab. Allows for free-range historical search of notifications.</li>
        </ol>
      </div>
    </div>
  </div>
</div>
