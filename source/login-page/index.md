---
title: Login Page
author: serena
layout: page
---
<p class="tn-prototype tn-prototype-inverse">
  <a title="Login Page Sample" href="https://rawgit.com/patternfly/patternfly/master/tests/login.html" target="_blank"><img class="alignnone wp-image-3625" src="/wp-content/uploads/2015/05/login.png" alt="login" width="1200" height="687" /></a>
</p>

## 

## Overview and Usage Scenarios The login page allows the user to gain access to an application by entering their username and password. Usage scenarios related to the login page include: 

  * A user navigates to an application and is presented with a login page as a way to gain access to the application. There are two possible results: 
      * Authentication is successful and the user is directed to the application landing page.
      * Authentication fails and the user remains on the login page. If authentication fails, the screen should show an informational or error messages about the failure.
  * A user is automatically logged out due to inactivity. In this event, they will be returned to the login page, which will display an informational message explaining what happened. Once the user logs in again, they should be taken back to the page they were previously on before being timed out. Thirty minutes is the suggested duration before a session timeout, but this is subject to change based on your product’s security requirements.
  * A user has forgotten their username and/or password. A link is available to begin the process to reset this information. Once the user clicks on one of these links, the contents of the login page is replaced with fields specific to recovering their username and/or password. There are a number of different ways the user could recover their password. This pattern does not dictate which methods an application should follow. Some options include: 
      * The user could provide their e-mail and be sent a temporary password or a link to reset their password.
      * The user could answer a security question.
      * The user could get a message explaining that they have to contact a specific person.

## Description

[<img class="alignnone wp-image-3608" src="/wp-content/uploads/2015/05/login_sample-1024x586.png" alt="login_sample" width="1200" height="687" />][1] 

## 

  1. **The application or project name** uses a combination of Overpass Bold and Overpass regular.
  2. ** The logo** is located in the top right.
  3. **Required fields** include username (see the [Terminology and Wording Style Guide][2]) and password. Labels are left-aligned. Additional fields are optional. Some applications may require additional information beyond username and password (such as a specific server or geo-location).  In these cases, the additional fields can appear underneath the password field. The dialog will expand to accommodate the additional fields. The order of the additional fields will have to be addressed on a case by case basis, but they should sit between the Password field and the Login button. Try and limit the number of fields to less than five. Also, you may use progressive disclosure if a field’s value is dependent on a field prior to it.
  4. A **“Remember username” checkbox **(optional) is located under the fields. Due to security reasons, we do not recommend allowing the user to remember their password. Check box labels should use sentence style capitalization (see the Terminology and Wording Style Guide for more information regarding capitalization).
  5. “Forgot username or password?” is a link for users to recover their username or password.
  6. The** login button** appears underneath the password field. Please note, the label on the button should say “Log In”, a verb, vs Login, a noun or adjective (See the [Terminology and Wording Style Guide][3] for more information).
  7. The** text only area **(optional), located to the right of the fields, is available for additional information such as an introductory message about your application or you may want to include information about the latest release of your product here &#8211; such as a version number. Apply text sparingly, do not overload this area with too much text.
  8. **Informational, warning and errors** **messages **are displayed below the application name and above the fields when necessary. If there are multiple strings, each message would appear on its own line and the area adjusts as needed in order to fit these messages. A couple examples of these messages include: <ol style="list-style-type: lower-alpha;">
      <li>
        An error is triggered if the user incorrectly types their username or password. In this event, after the information has been submitted, the value entered for the username and other optional fields remains populated however, the value for the password is discarded. <h3>
        </h3>
        
        <a href="/wp-content/uploads/2015/05/login_error.png"><img class="alignnone wp-image-3610 size-full" src="/wp-content/uploads/2015/05/login_error.png" alt="login_error" width="699" height="364" /></a> <h3>
        </h3>
      </li>
      
      <li>
        A warning message is triggered if the user has the caps lock turned on. Once the caps lock is turned off, the warning should disappear. <h3>
        </h3>
        
        <a href="/wp-content/uploads/2015/05/login_warningNew.png"><img class="alignnone wp-image-3615 size-full" src="/wp-content/uploads/2015/05/login_warningNew.png" alt="login_warningNew" width="699" height="364" /></a> <h3>
        </h3>
      </li>
      
      <li>
        An informational message is triggered if the user is timed out of the application. They will be returned to the login page, which will display an informational message explaining that the session timed out due to inactivity. <h3>
        </h3>
        
        <a href="/wp-content/uploads/2015/05/login_info2.png"><img class="alignnone wp-image-3616 size-full" src="/wp-content/uploads/2015/05/login_info2.png" alt="login_info2" width="699" height="364" /></a> <h3>
        </h3>
      </li>
    </ol>

 [1]: /wp-content/uploads/2015/05/login_sample.png
 [2]: https://www.patternfly.org/visual-styles/terminology-and-wording//#terms-and-words "Terminology and Wording"
 [3]: https://www.patternfly.org/visual-styles/terminology-and-wording/#terms-and-words "Terminology and Wording"