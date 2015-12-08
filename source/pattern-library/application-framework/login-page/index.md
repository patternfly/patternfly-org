---
title: Login Page
author: serena
layout: page
---
<p class="tn-prototype tn-prototype-inverse"><a title="Login Page Sample" href="https://rawgit.com/patternfly/patternfly/master/tests/login.html" target="_blank"><img class="alignnone wp-image-3625" src="{{site.baseurl}}wp-content/uploads/2015/05/login.png" alt="login" width="1200" height="687" /></a></p>
<p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="login-layout-markup" href="#login-layout-markup">Reference Markup</a></p>
<div class="collapse" id="login-layout-markup">
  <pre class="prettyprint">
&lt;!DOCTYPE html&gt;
&lt;!--[if IE 9]&gt;&lt;html class="ie9 login-pf"&gt;&lt;![endif]--&gt;
&lt;!--[if gt IE 9]&gt;&lt;!--&gt;
&lt;html class="login-pf"&gt;
&lt;!--&lt;![endif]--&gt;
  &lt;head&gt;
    &lt;title&gt;Login - PatternFly&lt;/title&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;link rel="shortcut icon" href="../dist/img/favicon.ico"&gt;
    &lt;!-- iPad retina icon --&gt;
    &lt;link rel="apple-touch-icon-precomposed" sizes="152x152" href="../dist/img/apple-touch-icon-precomposed-152.png"&gt;
    &lt;!-- iPad retina icon (iOS &lt; 7) --&gt;
    &lt;link rel="apple-touch-icon-precomposed" sizes="144x144" href="../dist/img/apple-touch-icon-precomposed-144.png"&gt;
    &lt;!-- iPad non-retina icon --&gt;
    &lt;link rel="apple-touch-icon-precomposed" sizes="76x76" href="../dist/img/apple-touch-icon-precomposed-76.png"&gt;
    &lt;!-- iPad non-retina icon (iOS &lt; 7) --&gt;
    &lt;link rel="apple-touch-icon-precomposed" sizes="72x72" href="../dist/img/apple-touch-icon-precomposed-72.png"&gt;
    &lt;!-- iPhone 6 Plus icon --&gt;
    &lt;link rel="apple-touch-icon-precomposed" sizes="120x120" href="../dist/img/apple-touch-icon-precomposed-180.png"&gt;
    &lt;!-- iPhone retina icon (iOS &lt; 7) --&gt;
    &lt;link rel="apple-touch-icon-precomposed" sizes="114x114" href="../dist/img/apple-touch-icon-precomposed-114.png"&gt;
    &lt;!-- iPhone non-retina icon (iOS &lt; 7) --&gt;
    &lt;link rel="apple-touch-icon-precomposed" sizes="57x57" href="../dist/img/apple-touch-icon-precomposed-57.png"&gt;
    &lt;link href="../dist/css/patternfly.min.css" rel="stylesheet" media="screen, print"&gt;
    &lt;link href="../dist/css/patternfly-additions.min.css" rel="stylesheet" media="screen, print"&gt;
    &lt;script src="../components/jquery/dist/jquery.min.js"&gt;&lt;/script&gt;
    &lt;script src="../components/bootstrap/dist/js/bootstrap.min.js"&gt;&lt;/script&gt;
    &lt;script src="../dist/js/patternfly.min.js"&gt;&lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;span id="badge"&gt;
      &lt;img src="../dist/img/logo.svg" alt="PatternFly logo" /&gt;
    &lt;/span&gt;
    &lt;div class="container"&gt;
      &lt;div class="row"&gt;
        &lt;div class="col-sm-12"&gt;
          &lt;div id="brand"&gt;
            &lt;img src="../dist/img/brand.svg" alt="PatternFly Enterprise Application"&gt;
          &lt;/div&gt;&lt;!--/#brand--&gt;
        &lt;/div&gt;&lt;!--/.col-*--&gt;
        &lt;div class="col-sm-7 col-md-6 col-lg-5 login"&gt;
          &lt;form class="form-horizontal" role="form"&gt;
            &lt;div class="form-group"&gt;
              &lt;label for="inputUsername" class="col-sm-2 col-md-2 control-label"&gt;Username&lt;/label&gt;
              &lt;div class="col-sm-10 col-md-10"&gt;
                &lt;input type="text" class="form-control" id="inputUsername" placeholder="" tabindex="1"&gt;
              &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class="form-group"&gt;
              &lt;label for="inputPassword" class="col-sm-2 col-md-2 control-label"&gt;Password&lt;/label&gt;
              &lt;div class="col-sm-10 col-md-10"&gt;
                &lt;input type="password" class="form-control" id="inputPassword" placeholder="" tabindex="2"&gt;
              &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class="form-group"&gt;
              &lt;div class="col-xs-8 col-sm-offset-2 col-sm-6 col-md-offset-2 col-md-6"&gt;
                &lt;div class="checkbox"&gt;
                  &lt;label&gt;
                    &lt;input type="checkbox" tabindex="3"&gt; Remember username
                  &lt;/label&gt;
                &lt;/div&gt;
                &lt;span class="help-block"&gt; Forgot &lt;a href="#" tabindex="5"&gt;username&lt;/a&gt; or &lt;a href="#" tabindex="6"&gt;password&lt;/a&gt;?&lt;/span&gt;
              &lt;/div&gt;
              &lt;div class="col-xs-4 col-sm-4 col-md-4 submit"&gt;
                &lt;button type="submit" class="btn btn-primary btn-lg" tabindex="4"&gt;Log In&lt;/button&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/form&gt;
        &lt;/div&gt;&lt;!--/.col-*--&gt;
        &lt;div class="col-sm-5 col-md-6 col-lg-7 details"&gt;
          &lt;p&gt;&lt;strong&gt;Welcome to PatternFly!&lt;/strong&gt;
          This is placeholder text, only. Use this area to place any information or introductory message about your application that may be relevant for users. For example, you might include news or information about the latest release of your product here&mdash;such as a version number.&lt;/p&gt;
        &lt;/div&gt;&lt;!--/.col-*--&gt;
      &lt;/div&gt;&lt;!--/.row--&gt;
    &lt;/div&gt;&lt;!--/.container--&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre>
</div>
<h2>Overview</h2>
The login page allows the user to gain access to an application by entering their username and password. Usage scenarios related to the login page include:
<ul>
  <li>A user navigates to an application and is presented with a login page as a way to gain access to the application. There are two possible results:
<ul>
  <li>Authentication is successful and the user is directed to the application landing page.</li>
  <li>Authentication fails and the user remains on the login page. If authentication fails, the screen should show an informational or error messages about the failure.</li>
</ul>
</li>
  <li>A user is automatically logged out due to inactivity. In this event, they will be returned to the login page, which will display an informational message explaining what happened. Once the user logs in again, they should be taken back to the page they were previously on before being timed out. Thirty minutes is the suggested duration before a session timeout, but this is subject to change based on your product’s security requirements.</li>
  <li>A user has forgotten their username and/or password. A link is available to begin the process to reset this information. Once the user clicks on one of these links, the contents of the login page is replaced with fields specific to recovering their username and/or password. There are a number of different ways the user could recover their password. This pattern does not dictate which methods an application should follow. Some options include:
<ul>
  <li>The user could provide their e-mail and be sent a temporary password or a link to reset their password.</li>
  <li>The user could answer a security question.</li>
  <li>The user could get a message explaining that they have to contact a specific person.</li>
</ul>
</li>
</ul>
<h2>Description</h2>
<a href="{{site.baseurl}}wp-content/uploads/2015/05/login_sample.png"><img class="alignnone wp-image-3608" src="{{site.baseurl}}wp-content/uploads/2015/05/login_sample-1024x586.png" alt="login_sample" width="1200" height="687" /></a>
<h2></h2>
<ol>
  <li><b>The application or project name</b> uses a combination of Open Sans Extra Bold and Open Sans Regular.</li>
  <li><b> The logo</b> is located in the top right.</li>
  <li><b>Required fields</b> include username (see the <a title="Terminology and Wording" href="{{site.baseurl}}visual-styles/terminology-and-wording//#terms-and-words">Terminology and Wording Style Guide</a>) and password. Labels are left-aligned. Additional fields are optional. Some applications may require additional information beyond username and password (such as a specific server or geo-location).  In these cases, the additional fields can appear underneath the password field. The dialog will expand to accommodate the additional fields. The order of the additional fields will have to be addressed on a case by case basis, but they should sit between the Password field and the Login button. Try and limit the number of fields to less than five. Also, you may use progressive disclosure if a field’s value is dependent on a field prior to it.</li>
  <li>A <b>“Remember username” checkbox </b>(optional) is located under the fields. Due to security reasons, we do not recommend allowing the user to remember their password. Check box labels should use sentence style capitalization (see the Terminology and Wording Style Guide for more information regarding capitalization).</li>
  <li>“Forgot username or password?” is a link for users to recover their username or password.</li>
  <li>The<b> login button</b> appears underneath the password field. Please note, the label on the button should say “Log In”, a verb, vs Login, a noun or adjective (See the <a title="Terminology and Wording" href="{{site.baseurl}}visual-styles/terminology-and-wording/#terms-and-words">Terminology and Wording Style Guide</a> for more information).</li>
  <li>The<b> text only area </b>(optional), located to the right of the fields, is available for additional information such as an introductory message about your application or you may want to include information about the latest release of your product here - such as a version number. Apply text sparingly, do not overload this area with too much text.</li>
  <li><b>Informational, warning and errors</b> <b>messages </b>are displayed below the application name and above the fields when necessary. If there are multiple strings, each message would appear on its own line and the area adjusts as needed in order to fit these messages. A couple examples of these messages include:
<ol style="list-style-type: lower-alpha;">
  <li>An error is triggered if the user incorrectly types their username or password. In this event, after the information has been submitted, the value entered for the username and other optional fields remains populated however, the value for the password is discarded.
<h3></h3>
<a href="{{site.baseurl}}wp-content/uploads/2015/05/login_error.png"><img class="alignnone wp-image-3610 size-full" src="{{site.baseurl}}wp-content/uploads/2015/05/login_error.png" alt="login_error" width="699" height="364" /></a>
<h3></h3>
</li>
  <li>A warning message is triggered if the user has the caps lock turned on. Once the caps lock is turned off, the warning should disappear.
<h3></h3>
<a href="{{site.baseurl}}wp-content/uploads/2015/05/login_warningNew.png"><img class="alignnone wp-image-3615 size-full" src="{{site.baseurl}}wp-content/uploads/2015/05/login_warningNew.png" alt="login_warningNew" width="699" height="364" /></a>
<h3></h3>
</li>
  <li>An informational message is triggered if the user is timed out of the application. They will be returned to the login page, which will display an informational message explaining that the session timed out due to inactivity.
<h3></h3>
<a href="{{site.baseurl}}wp-content/uploads/2015/05/login_info2.png"><img class="alignnone wp-image-3616 size-full" src="{{site.baseurl}}wp-content/uploads/2015/05/login_info2.png" alt="login_info2" width="699" height="364" /></a>
<h3></h3>
</li>
</ol>
</li>
</ol>
