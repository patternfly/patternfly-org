import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationContentErrorMessagesDesignGuidelinesDocs = {
  "slug": "/documentation/content/error-messages/design-guidelines",
  "source": "design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/master/src/content/design-guidelines/content/error-messages.md",
  "section": "content",
  "id": "Error messages",
  "title": "Error messages",
  "toc": []
};
DocumentationContentErrorMessagesDesignGuidelinesDocs.liveContext = {
  
};
DocumentationContentErrorMessagesDesignGuidelinesDocs.Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`An error message is a message indicating something went wrong. A user typically sees an error message when they attempt to perform an action but cannot continue because something isn’t right.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Don’t blame users`}
      </strong>
      {`. A user should never feel like the error is their fault. Avoid language like “You did something wrong.”`}
    </p>
    <table className="ws-content-table">
      <tr>
        <th>
          <center>
            <strong>
              <p {...{"className":"ws-p"}}>
                {`Before`}
              </p>
</strong>
</center>
</th>
                <th>
          <center>
            <strong>
              <p {...{"className":"ws-p"}}>
                {`After`}
              </p>
</strong>
</center>
</th>
</tr>
            <tr>
        <td>
          <p {...{"className":"ws-p"}}>
            {`You entered the wrong password.`}
          </p>
</td>
                <td>
          <p {...{"className":"ws-p"}}>
            {`The password is incorrect.`}
          </p>
</td>
</tr>
</table>
    <br/>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Give users a next step`}
      </strong>
      {`: A user should never feel stuck. If they’re hit with an error, give them the information they need to continue with their task.`}
    </p>
    <table className="ws-content-table">
      <tr>
        <th>
          <center>
            <strong>
              <p {...{"className":"ws-p"}}>
                {`Before`}
              </p>
</strong>
</center>
</th>
                <th>
          <center>
            <strong>
              <p {...{"className":"ws-p"}}>
                {`After`}
              </p>
</strong>
</center>
</th>
</tr>
            <tr>
        <td>
          <p {...{"className":"ws-p"}}>
            {`Your list already has the maximum number of items. You are not able to continue customizing.`}
          </p>
</td>
                <td>
          <p {...{"className":"ws-p"}}>
            {`Your list has the maximum number of items. To continue customizing, remove one item.`}
          </p>
</td>
</tr>
</table>
    <br/>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Avoid jargon`}
      </strong>
      {`: Error messages are frustrating enough without technical terms that users might not understand. Avoid jargon and use terms that are familiar to your users.`}
    </p>
    <table className="ws-content-table">
      <tr>
        <th>
          <center>
            <strong>
              <p {...{"className":"ws-p"}}>
                {`Before`}
              </p>
</strong>
</center>
</th>
                <th>
          <center>
            <strong>
              <p {...{"className":"ws-p"}}>
                {`After`}
              </p>
</strong>
</center>
</th>
</tr>
            <tr>
        <td>
          <p {...{"className":"ws-p"}}>
            {`Error code 5959: Outdated version information. Task termination pending.`}
          </p>
</td>
                <td>
          <p {...{"className":"ws-p"}}>
            {`Your task is outdated. To keep it active, update its version.`}
          </p>
</td>
</tr>
</table>
    <br/>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Include the right amount of description`}
      </strong>
      {`: Tell your user what is wrong. An error without an explanation can add to their frustration and prevent them from finding a solution.`}
    </p>
    <table className="ws-content-table">
      <tr>
        <th>
          <center>
            <strong>
              <p {...{"className":"ws-p"}}>
                {`Before`}
              </p>
</strong>
</center>
</th>
                <th>
          <center>
            <strong>
              <p {...{"className":"ws-p"}}>
                {`After`}
              </p>
</strong>
</center>
</th>
</tr>
            <tr>
        <td>
          <p {...{"className":"ws-p"}}>
            {`An error occurred. The email cannot be sent.`}
          </p>
</td>
                <td>
          <p {...{"className":"ws-p"}}>
            {`To send this email, turn on your email permissions in user settings.`}
          </p>
</td>
</tr>
</table>
    <br/>
    <p {...{"className":"ws-p"}}>
      {`However, don’t include too much information. The user doesn’t need to know exactly what is going on behind the scenes. Only give them information about what went wrong and what they can do next.`}
    </p>
    <table className="ws-content-table">
      <tr>
        <th>
          <center>
            <strong>
              <p {...{"className":"ws-p"}}>
                {`Before`}
              </p>
</strong>
</center>
</th>
                <th>
          <center>
            <strong>
              <p {...{"className":"ws-p"}}>
                {`After`}
              </p>
</strong>
</center>
</th>
</tr>
            <tr>
        <td>
          <p {...{"className":"ws-p"}}>
            {`Your information cannot be saved. Our system is currently designed to accommodate 1 record per user. The system memory is unable to store more at this time.`}
          </p>
</td>
                <td>
          <p {...{"className":"ws-p"}}>
            {`Only 1 record can be saved. To continue, remove one of your records.`}
          </p>
</td>
</tr>
</table>
    <br/>
  </React.Fragment>
);
DocumentationContentErrorMessagesDesignGuidelinesDocs.Component.displayName = 'DocumentationContentErrorMessagesDesignGuidelinesDocs';
