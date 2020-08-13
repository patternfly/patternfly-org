import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport185 from '../../../../content/design-guidelines/usage-and-behavior/login/./img/default-login.png';
import srcImport186 from '../../../../content/design-guidelines/usage-and-behavior/login/./img/multi-factor-login-process.png';
import srcImport187 from '../../../../content/design-guidelines/usage-and-behavior/login/./img/multi-factor-login-validation-options.png';
import srcImport188 from '../../../../content/design-guidelines/usage-and-behavior/login/./img/sso-single-step.png';
import srcImport189 from '../../../../content/design-guidelines/usage-and-behavior/login/./img/client_side_error.png';
import srcImport190 from '../../../../content/design-guidelines/usage-and-behavior/login/./img/empty-fields.png';
import srcImport191 from '../../../../content/design-guidelines/usage-and-behavior/login/./img/invalid-characters.png';
import srcImport192 from '../../../../content/design-guidelines/usage-and-behavior/login/./img/caps-lock-on.png';
import srcImport193 from '../../../../content/design-guidelines/usage-and-behavior/login/./img/server-side-error.png';
import srcImport194 from '../../../../content/design-guidelines/usage-and-behavior/login/./img/account-doesn\'t-exist_password-is-wrong.png';
import srcImport195 from '../../../../content/design-guidelines/usage-and-behavior/login/./img/other-error-messages.png';

export const DocumentationComponentsLoginPageDesignGuidelinesDocs = {
  "slug": "/documentation/components/login-page/design-guidelines",
  "source": "design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/master/src/content/design-guidelines/usage-and-behavior/login/login.md",
  "section": "components",
  "id": "Login page",
  "title": "Login page",
  "toc": [
    "Elements",
    "Usage"
  ]
};
DocumentationComponentsLoginPageDesignGuidelinesDocs.liveContext = {
  
};
DocumentationComponentsLoginPageDesignGuidelinesDocs.Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`The login page allows a user to gain access to an application by entering their username and password or by authenticating using a social media login.`}
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Elements`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport185} {...{"alt":"Default-login","title":"default-login","className":"ws-img"}}>
      </img>
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Title:`}
          </strong>
          {` Located at the top of the login card. The title can be the product name or any other term that makes sense for your application. If the text is longer than the space allowed, text should wrap to the next line.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Language selector (optional)`}
          </strong>
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Required fields:`}
          </strong>
          {` Username and password are both required fields. Some applications may require additional fields like a specific server or geo-location. When additional fields are required, they should be ordered on a case-by-case basis and placed directly below the password field. The login card will expand to accommodate the additional fields. Try to limit the total number of fields to less than five. Also, you may use progressive disclosure if the field value has dependency on the previous relevant field.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Checkbox (optional):`}
          </strong>
          {` Located under the required (and any additional) fields, and labeled based on the needs of the application.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Login button:`}
          </strong>
          {` Button label should be “Log in”`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Social media buttons:`}
          </strong>
          {` Displays available social login methods in the order of their highest usage with the most frequently used items displayed at the beginning of the list. Logos that take up more than one line can wrap to a second line. Additionally, each logo should have a tooltip label on hover that states the application name.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Sign up (optional):`}
          </strong>
          {` Takes user to the sign up flow`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Forgot password/username link (optional):`}
          </strong>
          {` Takes users to a page where they can recover their password and/or username`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            <a {...{"href":"documentation/react/components/backgroundimage/"}}>
              {`Background image`}
            </a>
            {`:`}
          </strong>
          {` Any background image can be used for your application; it will automatically have a gradient applied to it to aid readability.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Logotype:`}
          </strong>
          {` Provides an area for product logo`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Description (optional):`}
          </strong>
          {` Provides a description of the website or application`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Links (optional):`}
          </strong>
          {` Provides an area for additional links to pages where the user can get more information or help`}
        </p>
      </li>
    </ol>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`There are three main usage scenarios related to the login page:`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`1.`}
      </strong>
      {` A user wants to gain access to an application`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`2.`}
      </strong>
      {` A user is automatically logged out due to inactivity and is redirected to the login page`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`If this happens, signing in should redirect the user back to the page they were on prior to being logged out.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`3.`}
      </strong>
      {` A user has forgotten their username and/or password. A link is available to reset the username and/or password.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`The login page should be replaced by the fields used to recover their username and/or password.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Authentication methods`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Standard login`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The standard login is shown in the example above and provides a commonly used pattern where both the username and password input fields are displayed at the same time. This is commonly used by applications that don’t require additional types of authentication.`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Multi-factor login`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The multi-factor login allows a user to gain access to an application by entering their authentication information progressively. For example, a user enters only their username and then clicks next. The system validates the username and then provides a field for the user to enter their password. Using this progressive process allows the application to validate information at each step and allows for an automatic redirect to an external IdP when the user is linked to an external IdP.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`When you need more security, you can incorporate additional authentication methods into the login process. This example shows both password and verification code:`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport186} {...{"alt":"Multi-factor-login-process","title":"Multi-factor-login-process","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Enabling users to select their verification method (optional):`}
      </strong>
      {`
Once a user has provided a valid password, the system hides the gray bar at the bottom of the modal and displays the link text “More verification options."" Clicking the link allows users to select an alternate verification type if they can’t use the default method.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Examples of additional multi-factor authentication that could be used include authentication codes, SMS codes or backup codes.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport187} {...{"alt":"Multi-factor-login-validation-options","title":"Multi-factor-login-validation-options","className":"ws-img"}}>
      </img>
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Single sign-on (SSO)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Single sign-on (SSO) allows a user to log in once and access multiple applications within the same organization. This type of login supports displaying both single and multi-factor login. Mulit-factor login provides greater security.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport188} {...{"alt":"Multi-factor-login-validation-options","title":"Multi-factor-login-validation-options","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Additional SSO elements`}
      </strong>
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Title`}
          </strong>
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Supported services:`}
          </strong>
          {` Provides a logo for all supported services logos`}
        </p>
      </li>
    </ol>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Social Login`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Some users may prefer to log in with their social networks or IdPs accounts. A social login can utilize  standard, multi-factor, or SSO logins, depending on security requirements. If a user decides to use a social login, when they click a social logo, they will be redirected to the social account’s login page. Once they successfully log in, they will be directed back to your application.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Please refer to branding guidelines when using logos for social login page. Examples of branding guidelines include:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"https://en.facebookbrand.com/guidelines/brand"}}>
          {`Facebook brand guidelines`}
        </a>
      </li>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"https://about.twitter.com/en_us/company/brand-resources.html"}}>
          {`Twitter brand guidelines`}
        </a>
      </li>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"https://github.com/logos"}}>
          {`Github brand guidelines`}
        </a>
      </li>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"https://stackexchange.com/legal/trademark-guidance"}}>
          {`Stack Exchange brand guidelines`}
        </a>
      </li>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"https://developers.google.com/identity/branding-guidelines"}}>
          {`Google brand guidelines`}
        </a>
      </li>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"https://brand.linkedin.com/"}}>
          {`LinkedIn brand guidelines`}
        </a>
      </li>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"http://openid.net/add-openid/logos/"}}>
          {`OpenID brand guidelines`}
        </a>
      </li>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"https://en.instagram-brand.com/"}}>
          {`Instagram brand guidelines`}
        </a>
      </li>
    </ul>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Error states`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Let users know when a login field submission results in an error. Always present error states on the login screen, and use inline errors whenever possible. The error state you use will depend on whether the validation happens on the client or the server.`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Client-side errors`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport189} {...{"alt":"Client-side-errors","title":"Client-side-errors","className":"ws-img"}}>
      </img>
      {`
Client-side validation can be performed as soon as a field loses focus, and allows you to use inline validation to present errors or issues before the login is submitted. In most cases, client-side validations are performed as inline validations for each field. Some common examples are shown below.`}
    </p>
    <AutoLinkHeader {...{"size":"h5","className":"ws-title ws-h5"}}>
      {`Empty field(s)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport190} {...{"alt":"Empty-fields","title":"empty-fields","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      {`An error message should be displayed below any required field that is empty once the field loses focus or an action button (Log in/Next) is clicked. Once the field is filled, the error message should disappear. The following error messages are suggested for use:`}
    </p>
    <table {...{"className":"ws-table"}}>
      <thead>
        <tr>
          <th>
            {`Situation`}
          </th>
          <th>
            {`Error message`}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {`Username field is empty`}
          </td>
          <td>
            {`Enter your email, phone number, or username`}
          </td>
        </tr>
        <tr>
          <td>
            {`Password field is empty`}
          </td>
          <td>
            {`Enter your password`}
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"size":"h5","className":"ws-title ws-h5"}}>
      {`Invalid characters`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport191} {...{"alt":"Invalid-characters","title":"invalid-characters","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      {`An error message should be displayed when there is an invalid character in the username. Once the field has been modified, the error message should disappear. The following error messages are suggested for use:`}
    </p>
    <table {...{"className":"ws-table"}}>
      <thead>
        <tr>
          <th>
            {`Situation`}
          </th>
          <th>
            {`Error message`}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {`Invalid email address or phone number`}
          </td>
          <td>
            {`Enter a valid email address`}
          </td>
        </tr>
        <tr>
          <td>
            {`Invalid custom username`}
          </td>
          <td>
            {`Invalid characters`}
          </td>
        </tr>
        <tr>
          <td>
            {`Invalid character in an email address/phone number`}
          </td>
          <td>
            {`Enter a valid email address or phone number`}
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"size":"h5","className":"ws-title ws-h5"}}>
      {`Caps lock is on`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport192} {...{"alt":"Multi-factor-login-validation-options","title":"Multi-factor-login-validation-options","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      {`A warning message should be displayed when caps lock is on so users avoid making a mistake when typing a case-sensitive password. The warning message should be displayed in a popover when a user clicks into the input field. Once caps lock has been turned off, the warning message should disappear. The following warning message is suggested for use.`}
    </p>
    <table {...{"className":"ws-table"}}>
      <thead>
        <tr>
          <th>
            {`Situation`}
          </th>
          <th>
            {`Error message`}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {`Caps lock is on`}
          </td>
          <td>
            {`Caps lock is on`}
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Server-side errors`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport193} {...{"alt":"Server-side-error","title":"server-side-error","className":"ws-img"}}>
      </img>
      {`
When users submit a form, the entire page is reloaded if there are validation errors. At the same time, the password field should be cleared to provide additional security. Error messages can appear as inline errors for each field or as an inline error displayed below the application name and above the input fields. If there are multiple messages, each message appears on its own line; spacing between fields should be enough so that the form doesn’t jump to fit the messages.`}
    </p>
    <AutoLinkHeader {...{"size":"h5","className":"ws-title ws-h5"}}>
      {`Account doesn’t exist/password is wrong`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport194} {...{"alt":"Invalid-characters","title":"invalid-characters","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      {`An error message should be displayed when the user types an incorrect username that doesn’t exist or the wrong password. The most secure approach is to provide a generic message that the username or password is incorrect but to not point out which one is incorrect. This way the identity of a valid user is protected. If your application doesn’t require this level of security there are a few additional messages that can be used. Once the field has been modified, the error message should disappear. The following error messages are suggested for use.`}
    </p>
    <table {...{"className":"ws-table"}}>
      <thead>
        <tr>
          <th>
            {`Situation`}
          </th>
          <th>
            {`Error message`}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {`Incorrect username or password (most secure error message)`}
          </td>
          <td>
            {`Incorrect login credentials.`}
          </td>
        </tr>
        <tr>
          <td>
            {`Username does not exist`}
          </td>
          <td>
            {`This account does not exist. Try again or `}
            <a {...{"href":""}}>
              {`sign up`}
            </a>
            {`.`}
          </td>
        </tr>
        <tr>
          <td>
            {`Password is wrong`}
          </td>
          <td>
            {`Incorrect password, try again.`}
          </td>
        </tr>
        <tr>
          <td>
            {`User inputs an old password`}
          </td>
          <td>
            {`Incorrect password. Your password was modified in the last 2 days.`}
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"size":"h5","className":"ws-title ws-h5"}}>
      {`General warning messages`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport195} {...{"alt":"Multi-factor-login-validation-options","title":"Multi-factor-login-validation-options","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      {`Another form of error state message is a warning message. These messages are triggered by system level events or if a user is timed out of the application. Notifications should be displayed until the user attempts a new login. These messages should be displayed above the username field. The following are examples of general error messages.`}
    </p>
    <table {...{"className":"ws-table"}}>
      <thead>
        <tr>
          <th>
            {`Situation`}
          </th>
          <th>
            {`Error message`}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {`New account created and needs to verify email address`}
          </td>
          <td>
            {`Confirm your email address. `}
            <a {...{"href":""}}>
              {`Resend confirmation link`}
            </a>
            {`.`}
          </td>
        </tr>
        <tr>
          <td>
            {`Too many unsuccessful attempts to log in`}
          </td>
          <td>
            {`Your account is now locked. Contact your administrator for access.`}
          </td>
        </tr>
        <tr>
          <td>
            {`Session timed out`}
          </td>
          <td>
            {`Your session has expired. Please log back in.`}
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationComponentsLoginPageDesignGuidelinesDocs.Component.displayName = 'DocumentationComponentsLoginPageDesignGuidelinesDocs';
