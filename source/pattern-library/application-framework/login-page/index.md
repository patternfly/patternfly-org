---
title: Login Page
author: gcardoso
layout: page-tabs
---
<div class="tab-content">
  <div role="tabpanel" class="tab-pane active" id="overview">
    <p>The login page allows the user to gain access to an application by entering their username and password. Usage scenarios related to the login page include:</p>
    <ul>
      <li>A user navigates to an application and is presented with a login page as a way to gain access to the application. There are two possible results:
        <ul>
          <li>Authentication is successful and the user is directed to the application landing page.</li>
          <li>Authentication fails and the user remains on the login page. If authentication fails, the screen should show an informational or error message about the failure.</li>
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
    <div class="example-pf">
      <iframe src="{{ site.baseurl }}pattern-library/application-framework/login-page/login.html"
              width="100%" height="650px;" scrolling="no" seamless></iframe>
    </div>
    <p>
      <a href="https://rawgit.com/patternfly/patternfly/master-dist/dist/tests/login.html" target="_blank">View full page example</a>
    </p>
  </div>
  <div role="tabpanel" class="tab-pane" id="design">
    <p>
      <a href="{{site.baseurl}}assets/img/login_sample.png">
        <img src="{{site.baseurl}}assets/img/login_sample.png" alt="Login Sample" width="841" />
      </a>
    </p>
    <ol>
      <li><b>The application or project name</b> uses a combination of Open Sans Extra Bold and Open Sans Regular.</li>
      <li><b> The logo</b> is located in the top right.</li>
      <li><b>Required fields</b> include username (see the <a title="Terminology and Wording" href="{{site.baseurl}}styles/terminology-and-wording//#terms-and-words">Terminology and Wording Style Guide</a>) and password. Labels are left-aligned. Additional fields are optional. Some applications may require additional information beyond username and password (such as a specific server or geo-location).  In these cases, the additional fields can appear underneath the password field. The dialog will expand to accommodate the additional fields. The order of the additional fields will have to be addressed on a case-by-case basis, but they should sit between the Password field and the Log In button. Try and limit the number of fields to less than five. Also, you may use progressive disclosure if a field’s value is dependent on a field prior to it.</li>
      <li>A <b>“Remember Username” checkbox </b>(optional) is located under the fields. For security reasons, we do not recommend allowing the user to remember their password. Check box labels should use sentence style capitalization (see the Terminology and Wording Style Guide for more information regarding capitalization).</li>
      <li>“Forgot Username or Password?” is a link for users to recover their username or password.</li>
      <li>The<b> Log In button</b> appears underneath the password field. Please note, the label on the button should say “Log In”, a verb, vs Login, a noun or adjective (See the <a title="Terminology and Wording" href="{{site.baseurl}}styles/terminology-and-wording/#terms-and-words">Terminology and Wording Style Guide</a> for more information).</li>
      <li>The<b> text only area </b>(optional), located to the right of the fields, is available for additional information such as an introductory message about your application or you may want to include information about the latest release of your product here - such as a version number. Use text sparingly; do not overload this area with too much text.</li>
      <li><b>Informational, warning and errors</b> <b>messages </b>are displayed below the application name and above the fields when necessary. If there are multiple strings, each message appears on its own line, and the area adjusts as needed to fit these messages. Examples of these messages include:
        <ol style="list-style-type: lower-alpha;">
          <li>An error is triggered if the user incorrectly types their username or password. In this event, after the information has been submitted, the values entered for the username and other optional fields remains populated however, the value for the password is discarded.
            <a class="list-img-block" href="{{site.baseurl}}assets/img/login_error.png">
              <img src="{{site.baseurl}}assets/img/login_error.png" alt="Login error" width="699" height="364" />
            </a>
          </li>
          <li>A warning message is triggered if the user has the caps lock turned on. Once the caps lock is turned off, the warning should disappear.
            <a class="list-img-block" href="{{site.baseurl}}assets/img/login_warningNew.png">
              <img src="{{site.baseurl}}assets/img/login_warningNew.png" alt="Login warning" width="699" height="364" />
            </a>
          </li>
          <li>An informational message is triggered if the user is timed out of the application. They will be returned to the login page, which will display an informational message explaining that the session timed out due to inactivity.
            <a class="list-img-block" href="{{site.baseurl}}assets/img/login_info2.png">
              <img src="{{site.baseurl}}assets/img/login_info2.png" alt="Login info" width="699" height="364" />
            </a>
          </li>
        </ol>
      </li>
    </ol>
  </div>
  <div role="tabpanel" class="tab-pane" id="code">
   {% include nav-tabs-code.html angular=false %}
    {% include code/application-framework/login-page/code.md angular=false %}
  </div>
</div>
