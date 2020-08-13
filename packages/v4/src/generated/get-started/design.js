import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport3 from '../../content/get-started/./img/symbol-library.png';
import srcImport4 from '../../content/get-started/./img/layer-styles.png';
import '../../content/get-started/./get-started.css';

export const GetStartedDesignDocs = {
  "slug": "/get-started/design",
  "source": "pages-get-started",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/master/src/content/get-started/design.md",
  "section": "get-started",
  "id": "Design",
  "title": "Design with PatternFly",
  "toc": [
    "Getting the design kit",
    "What's in the design kit?",
    "Using the design kit",
    "Designing with PatternFly",
    "Staying up to date"
  ]
};
GetStartedDesignDocs.liveContext = {
  
};
GetStartedDesignDocs.Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`Whether you are converting from a PatternFly 3 application or starting fresh with the latest and greatest PatternFly design system, this document is intended to help provide designers with information regarding resources and support available.`}
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Getting the design kit`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Before you begin`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The design kit is a collection of Sketch assets that make it easy for designers to create hi-fi mockups that accurately represent PatternFly components and layouts. It works with Sketch libraries.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`To use it, you need to install `}
      <a {...{"href":"https://www.sketch.com/"}}>
        {`Sketch`}
      </a>
      {` version 47 or above. For users who do not have access to Sketch (non-Mac users), a subset of functionality from our Sketch files, like symbols and fonts, can be imported and used in the free design tool, `}
      <a {...{"href":"https://www.figma.com/"}}>
        {`Figma`}
      </a>
      {`. Learn more about importing Sketch files in `}
      <a {...{"href":"https://help.figma.com/article/81-import"}}>
        {`the Figma documentation`}
      </a>
      {`.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Download the template file`}
    </AutoLinkHeader>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        {`Access the `}
        <a {...{"href":"https://sketch.cloud/s/nwY34"}}>
          {`PatternFly template file`}
        </a>
        {` on Sketch cloud.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Click `}
        <strong>
          {`Download Document`}
        </strong>
        {` to open the file. Then, click `}
        <strong>
          {`File`}
        </strong>
        {` →  `}
        <strong>
          {`Save as template`}
        </strong>
        {`.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Add the symbol library`}
    </AutoLinkHeader>
    <ol {...{"start":3,"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        {`Access the `}
        <a {...{"href":"https://sketch.cloud/s/7do0P"}}>
          {`PatternFly design library`}
        </a>
        {` on Sketch cloud.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Click Add library to Sketch on the bottom right to add the library. You'll be prompted with a modal. Click Add library to Sketch again. Sketch will show you the library in your preferences window.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Download the font`}
    </AutoLinkHeader>
    <ol {...{"start":5,"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        {`PatternFly currently uses Red Hat Text and Red Hat Display. To download these fonts, go to `}
        <a {...{"href":"https://github.com/RedHatOfficial/RedHatFont"}}>
          {`https://github.com/RedHatOfficial/RedHatFont`}
        </a>
        {` and download the whole repository. Then select `}
        <strong>
          {`all files in the "TTF" folder`}
        </strong>
        {` and double-click. This will install them onto your computer locally.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Looking for the Overpass design kit?`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`We still host the Patternfly 4 Overpass library and template files on Sketch Cloud, although support for updating these files ceased in October. This means that any updates that come along with PatternFly releases will not be mirrored in this kit.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`You are able to access them here:`}
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"https://sketch.cloud/s/gb1ka"}}>
          {`Add the symbol library`}
        </a>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Make sure you download the Overpass font at `}
            <a {...{"href":"https://overpassfont.org/"}}>
              {`https://overpassfont.org/`}
            </a>
            {` and select `}
            <strong>
              {`Desktop OTF files`}
            </strong>
            {`.`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"https://sketch.cloud/s/R9k28"}}>
          {`Download the template file`}
        </a>
      </li>
    </ol>
    <p {...{"className":"ws-p"}}>
      {`If you’d like to avoid out-of-date designs, we recommend moving to our Red Hat font and using the design kit supplied there!`}
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`What's in the design kit?`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`The template file`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The template file contains complex components and demos like charts and forms that make it faster and easier for you to add common design patterns to your wireframes. To view template examples click `}
      <a {...{"href":"documentation/core/demos/aboutmodal"}}>
        {`here`}
      </a>
      {`.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`The contents of the template file are organized alphabetically by component or demo name. If you want to use any of the artboards in the template file to create custom designs, you should follow these rules:`}
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        {`Unhide “padding” group (this group contains all of the spacers we use to create the design)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Edit the design as desired using the spacers as your guide`}
      </li>
    </ol>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`The symbol library`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The PatternFly symbol library contains individual components like buttons, alerts, and badges, that can be combined in any number of ways to solve common design problems. If you’re unfamiliar with Sketch symbols, it might be helpful to skim `}
      <a {...{"href":"https://www.sketch.com/docs/libraries/library-symbols"}}>
        {`this guide`}
      </a>
      {` before you get started.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`You can use any symbol offered in the Sketch symbol library to create your design. If you have any questions or need any clarification, you can post to the `}
      <a {...{"href":"https://forum.patternfly.org/"}}>
        {`PatternFly forum`}
      </a>
      {`. If you have any feedback about certain features or encounter a bug, you can file an issue against `}
      <a {...{"href":"https://github.com/patternfly/patternfly-design-kit/issues"}}>
        {`patternfly-design-kit`}
      </a>
      {` on GitHub.`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Navigating the symbol library`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`There are two kinds of symbols - library symbols and document symbols. Library symbols are available in any Sketch document, while document symbols are specific to the document in which they are found.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`From the top toolbar in Sketch, select Insert → Symbols → Patternfly 4 to add symbols onto your page.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`PatternFly symbols are designed to be as flexible and adaptable as possible. As such, designers should avoid detaching symbols from the library. However, there are rare instances where this may be necessary. Just know that once a symbol is detached, that symbol will no longer automatically update with new releases.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport3} {...{"alt":"Symbol-library","className":"ws-img"}}>
      </img>
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Using the design kit`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`It’s important to understand some specific aspects about the design kit and the assets contained inside to make the most of the design system.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"#spacers"}}>
          {`Spacers`}
        </a>
      </li>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"#layer-styles"}}>
          {`Layers styles`}
        </a>
      </li>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"#text-styles"}}>
          {`Text styles`}
        </a>
      </li>
    </ul>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Sketch design training`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`There’s a lot to learn when it comes to making smart use of the Sketch template and library. Whether you are new to PatternFly, new to Sketch, or even an experienced Sketch user, just looking to see how other designers use the application, the Sketch design training is a great place to start when using the design kit.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <a {...{"href":"https://patternflyt-training.thinkific.com/courses/pf-sketch-e-training"}}>
        <strong>
          {`Start Sketch design training`}
        </strong>
      </a>
      {` `}
            <i className="ws-content-blueArrow fas fa-arrow-right pf-u-mx-sm"/>
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Spacers`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The layout for all visual elements in Patternfly is determined by spacers. The spacers are used as padding between elements to ensure consistent layout and placement of components into a design that adhere to PatternFly guidelines. All symbols in the symbol library and templates have been made using spacers which are built-in to ensure correct use of elements.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`The `}
      <a {...{"href":"https://sketch.cloud/s/nwY34"}}>
        {`template library`}
      </a>
      {` also contains examples of spacer use to clarify where elements should be placed within a given page or design.  These templates have been created in a way that reduces a user’s need to think about spacers. An example of a Login form template can be seen here with different sized spacers - demonstrated by their different colors - used to separate each symbol/component within the layout.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`To see more information about spacers and their use please click `}
      <PatternflyThemeLink {...{"to":"/design-guidelines/styles/spacers"}}>
        {`here`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Layer styles`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Symbols in the symbol are organized by component; after selecting a component, you’ll see the variations and states of that component.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`For some components, you will have the option to customize them to your need by overriding certain layer styles and text labels from the sidebar on the right.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Layer styles are color selections for symbols in Sketch.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport4} {...{"alt":"layer-styles","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      {`Colors in PatternFly are carefully considered, and custom layer styles are discouraged. There are specific color options to choose from for backgrounds, borders, icons and states, as well as an expansive color library for other elements that do not necessarily fit into a certain category.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Note that there is a difference between regular color options and chart color fill options. When changing a color in a chart, you should only use the colors in the chart fill “dropdown”, which includes fills for donut charts, line charts and regular bar charts. When changing the color of other elements, you should use the general color palette if the component does not fit into the other offered category options.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Text styles`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Currently, all PatternFly text styles use Red Hat Text and Red Hat Display fonts. If you have not done so already, make sure to download according to the instructions `}
      <a {...{"href":"#download-the-font"}}>
        {`above`}
      </a>
      {` before starting your designs.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`When inserting text into your design, always assign it a text style by selecting the text item, followed by selecting a text style from the appearance menu on the right toolbar.`}
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Designing with PatternFly`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`PatternFly offers a variety of resources to help you make the most of the design system, including design guidelines for style, content, and component usage and behavior. You can use these assets in combination with the design kit to create consistent and usable product experiences.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Style guidelines`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`What typography should you be using? What about colors? Spacing? Check out styles to learn everything you need to know about our foundational design elements.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <PatternflyThemeLink {...{"to":"/design-guidelines/styles/colors"}}>
        <strong>
          {`View styles`}
        </strong>
      </PatternflyThemeLink>
      {` `}
            <i className="ws-content-blueArrow fas fa-arrow-right pf-u-mx-sm"/>
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Get familiar with usage and behavior guidelines.`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Should you use a wizard or a form to solve this problem? How do you write a good button label? Which navigation makes the most sense? Check out our design guidelines to choose and use the right components for your use case.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <PatternflyThemeLink {...{"to":"/design-guidelines/usage-and-behavior/about-modal"}}>
        <strong>
          {`Usage and behavior guidelines`}
        </strong>
      </PatternflyThemeLink>
      {` `}
            <i className="ws-content-blueArrow fas fa-arrow-right pf-u-mx-sm"/>
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Content guidelines`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`How do you write great microcopy and text for your user interface? Read our content guidelines for general principles, guidance on voice, and a style guide to help you with everything from capitalization to date and time formats.
View content guidelines`}
    </p>
    <p {...{"className":"ws-p"}}>
      <a {...{"href":"https://www.patternfly.org/v4/design-guidelines/content/about"}}>
        <strong>
          {`View content guidelines`}
        </strong>
      </a>
      {` `}
            <i className="ws-content-blueArrow fas fa-arrow-right pf-u-mx-sm"/>
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Start building with components.`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`What does a toolbar look like? What about a filter chip? Components are the building blocks of the design system. Check out individual component pages to view examples, understand states and behaviors, and check out the code samples (if you’re into that kind of thing).`}
    </p>
    <p {...{"className":"ws-p"}}>
      <PatternflyThemeLink {...{"to":"/documentation/core/components/aboutmodalbox"}}>
        <strong>
          {`View HTML/CSS components`}
        </strong>
      </PatternflyThemeLink>
      {` `}
            <i className="ws-content-blueArrow fas fa-arrow-right pf-u-mx-sm"/>
    </p>
    <p {...{"className":"ws-p"}}>
      <PatternflyThemeLink {...{"to":"/documentation/react/components/aboutmodal"}}>
        <strong>
          {`View React components`}
        </strong>
      </PatternflyThemeLink>
      {` `}
            <i className="ws-content-blueArrow fas fa-arrow-right pf-u-mx-sm"/>
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Still feeling unsure?`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`See all the pieces working together with demos.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <PatternflyThemeLink {...{"to":"/documentation/core/demos/aboutmodal"}}>
        <strong>
          {`View HTML/CSS demos`}
        </strong>
      </PatternflyThemeLink>
      {` `}
            <i className="ws-content-blueArrow fas fa-arrow-right pf-u-mx-sm"/>
    </p>
    <p {...{"className":"ws-p"}}>
      <PatternflyThemeLink {...{"to":"/documentation/react/demos/bulkselecttable"}}>
        <strong>
          {`View React demos`}
        </strong>
      </PatternflyThemeLink>
      {` `}
            <i className="ws-content-blueArrow fas fa-arrow-right pf-u-mx-sm"/>
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Staying up to date`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Adjustments and bug fixes are made to the kit on a regular basis. When we make a change to any of the libraries, you will be notified via a purple pop-up in the top right corner of the Sketch window that says “Shared Library Update Available”. To update, simply click on the pop-up and followed by “download” to update your library.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`We recommend that you keep your kit as up to date as possible. Once a change is accepted, you will not be able to revert to the previous version.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Please note that the Patternfly template will NOT be automatically updated as the symbol library is. Every time this template file is updated, you will need to re-download and re-save this as a template. We have added `}
      <a {...{"href":"https://github.com/patternfly/patternfly-design-kit/blob/master/RELEASE%20NOTES.md"}}>
        {`release notes`}
      </a>
      {` to the `}
      <a {...{"href":"https://github.com/patternfly/patternfly-design-kit/"}}>
        {`design-kit-repo`}
      </a>
      {` that document additions and edits to the design kit. This is a good place to start to review what has been added to the template file.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Did you use the old versions of the symbols that were updated in files already? No problem -  you will receive another notification in the top right of that specific Sketch file that will allow you to update them.`}
    </p>
  </React.Fragment>
);
GetStartedDesignDocs.Component.displayName = 'GetStartedDesignDocs';
