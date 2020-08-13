import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationContentUxWritingBestPracticesDesignGuidelinesDocs = {
  "slug": "/documentation/content/ux-writing-best-practices/design-guidelines",
  "source": "design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/master/src/content/design-guidelines/content/ux-writing-best-practices.md",
  "section": "content",
  "id": "UX writing best practices",
  "title": "UX writing best practices",
  "toc": [
    "Know your users",
    "Focus on goals and tasks",
    "Understand the context",
    "Use positive, action-oriented language",
    "Lead with the benefit",
    "Sound like a person",
    "Be clear and concise",
    "Be consistent",
    "Align with your brand"
  ]
};
DocumentationContentUxWritingBestPracticesDesignGuidelinesDocs.liveContext = {
  
};
DocumentationContentUxWritingBestPracticesDesignGuidelinesDocs.Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`Treat words as part of your design, not something added at the end. UX copy needs to be rooted in user information and context so that it can contribute to an effective, intuitive, and human-centric product experience.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`You’ll also be able to uncover design issues at the very beginning. If a design is too difficult to explain with words, then it might still need some work. By the time you create high-fidelity mockups, you’ll already have a few rounds of content feedback under your belt and can focus on refinement. Work across teams to fine-tune your copy and align your words with voice and tone standards.`}
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Know your users`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Before you write, understand who you're writing for. Get to know your users’ needs and what words will resonate.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Create user personas (or use the ones your team already has) and reference them as you work. If your team is in the process of gathering information about users, get involved:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Ask to sit in on any interviews and listen.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Make notes about specific words being used, standards being referenced, or concepts that keep coming up.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Do your own research into your user domain by reading popular blogs or forums.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Focus on goals and tasks`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Consider what your user is trying to accomplish (the goal) and the steps they’ll take to get there (the tasks). By understanding the entire user journey, you can provide the right content to the right user in the right place at the right time.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Frame each task as a conversation. Imagine you are sitting in a room with your user, and write out the conversation you might have to help them accomplish their task. This activity can help you:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Write in a natural and conversational way, which can inform and improve the content you use in the interface.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Anticipate questions the user might have along the way.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Anticipate information you need to collect from your user.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Identify gaps in your knowledge or understanding.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Understand the context`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Users carry around a lot of baggage, so it’s important to know where they’re coming from—literally, personally, and emotionally.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Literally`}
          </strong>
          {`: Take a look at the application or feature you’re building and figure out the potential paths your user could have taken to arrive in this spot. Are they coming from a Google search? Another page in the application? An email?`}
        </p>
        <p {...{"className":"ws-p"}}>
          {`Use that context to plan for the information they need to see in order to get themselves oriented. It might be a strong header with some intro text, a clear call to action, a breadcrumb bar, or all of the above.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Personally`}
          </strong>
          {`: Consider where the user is coming from personally. What terminology are they expecting to see? Will they be familiar with all the information you’re giving them? Is it possible they might need additional information or links to documentation?`}
        </p>
        <p {...{"className":"ws-p"}}>
          {`Use that context to choose the right terminology and prioritize your content.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Emotionally`}
          </strong>
          {`: Consider how your user is likely to be feeling in the situation you’re designing for. Is this situation stressful (paying a bill)? Frustrating (account creation error)? Empathize with them, and be sure to use an appropriate tone.`}
        </p>
      </li>
    </ul>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Use positive, action-oriented language`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Focus on what the user needs to do in order to complete the task or reach their goal.`}
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
            {`Your user settings do not allow you to access this file.`}
          </p>
</td>
                <td>
          <p {...{"className":"ws-p"}}>
            {`To access this file, adjust your user settings.`}
          </p>
</td>
</tr>
</table>
    <br/>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Lead with the benefit`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Users want to know why they should do something. What’s in it for them? They typically focus on the beginning of a sentence, so make your instruction worth it by starting with the outcome—in other words, the benefit.`}
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
            {`Install this extension to learn more about email.`}
          </p>
</td>
                <td>
          <p {...{"className":"ws-p"}}>
            {`To learn more about email, install this extension.`}
          </p>
</td>
</tr>
</table>
    <br/>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Sound like a person`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Jargon, bizpeak, and formal language make you sound more like a brochure than a human. Users need to relate to your brand and like you before they can trust you. Talk with them as people using familiar, conversational words.`}
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
            {`Utilizing the open source phenomenon allows you to leverage collaborative communications.`}
          </p>
</td>
                <td>
          <p {...{"className":"ws-p"}}>
            {`Open source is great for collaboration.`}
          </p>
</td>
</tr>
</table>
    <br/>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Be clear and concise`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Dr. Seuss says it best: “So the writer who breeds more words than he needs, is making a chore for the reader who reads.” Use plain language, and don’t use more words than you need. Chunk content into short, related sections, and avoid long paragraphs or strings of text.`}
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
            {`Make the decision to send a notification to your administrator.`}
          </p>
</td>
                <td>
          <p {...{"className":"ws-p"}}>
            {`Notify your administrator.`}
          </p>
</td>
</tr>
</table>
    <br/>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Be consistent`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Stick with the same terminology to describe actions and objects across the entire user experience. Using two terms interchangeably—even when they mean the same thing—can confuse users.`}
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
            {`Log in to your account only. Never sign in to your friend’s account.`}
          </p>
</td>
                <td>
          <p {...{"className":"ws-p"}}>
            {`Log in to your account only. Never log in to your friend’s account.`}
          </p>
</td>
</tr>
</table>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Align with your brand`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`As mentioned in the brand section, make sure your UX copy reflects your brand voice. UX copy is not just for adding clarity and guiding users through the interface. You’re also creating a user experience with your words, making a product interaction sound, feel, and look like a human conversation.`}
    </p>
  </React.Fragment>
);
DocumentationContentUxWritingBestPracticesDesignGuidelinesDocs.Component.displayName = 'DocumentationContentUxWritingBestPracticesDesignGuidelinesDocs';
