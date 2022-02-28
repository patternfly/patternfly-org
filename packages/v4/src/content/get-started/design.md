---
id: Design
title: Design with PatternFly
section: get-started
---
import './get-started.css';

Whether you are converting from a PatternFly 3 application or starting fresh with the latest and greatest PatternFly design system, this document is intended to help provide designers with information regarding resources and support available.

## Getting the design kit

The PatternFly design kit was originally developed for [Sketch users](#sketch-users), but is now available for use through [any design tool](#using-other-design-tools).

### Sketch users

#### Before you begin
The design kit is a collection of Sketch assets that make it easy for designers to create hi-fi mockups that accurately represent PatternFly components and layouts. It works with Sketch libraries. To use it, you need to install [Sketch version 68](https://www.sketch.com/) or above. 

#### Download the font
1. PatternFly currently uses Red Hat Text and Red Hat Display. To download these fonts, go to https://github.com/RedHatOfficial/RedHatFont and download the whole repository. Then select all files in the "TTF" folder and double-click. This will install them onto your computer locally.

#### Download the template file
2. Access the [PatternFly template file](https://www.sketch.com/s/729c2eee-e8b6-4fcd-8a79-f6faa8c30f89) on Sketch cloud.
3. Click **Download Document** to open the file. Then, click File → Save as template.

#### Add the symbol library
4. Access the [PatternFly design library](https://www.sketch.com/s/2cf1063b-5283-4e0b-b8a6-cbb1ac07e29e) on Sketch cloud.
5. Click **Add library to Sketch** on the bottom right to add the library. You'll be prompted with a modal. Click **Add library to Sketch** again. Sketch will show you the library in your preferences window.

### Using other design tools

#### Before you begin
For non-Sketch users, we have created a compatible version of the symbol library to fit with any design tool of choice. We recommend importing the SVG versions into your design tool. Download the SVG set in the patternfly-design-kit repo [here](https://github.com/patternfly/patternfly-design-kit/tree/master/Symbols-SVGs).

#### Download the font
PatternFly currently uses Red Hat Text and Red Hat Display. To download these fonts, go to https://github.com/RedHatOfficial/RedHatFont and download the whole repository. Then select all files in the "TTF" folder and double-click. This will install them onto your computer locally.

### Looking for the Overpass design kit?

We still host the Patternfly 4 Overpass library and template files on Sketch Cloud, although support for updating these files ceased in October. This means that any updates that come along with PatternFly releases will not be mirrored in this kit.

You are able to access them here:

1. [Add the symbol library](https://www.sketch.com/s/65cbc171-3b00-4bc7-b7ff-18e9a5b35ba8)
    - Make sure you download the Overpass font at https://overpassfont.org/ and select **Desktop OTF files**.
2. [Download the template file](https://www.sketch.com/s/2987fea0-aaee-4e44-9974-5612c949aef0)

If you’d like to avoid out-of-date designs, we recommend moving to our Red Hat font and using the design kit supplied there!

## What's in the design kit?

### The template file

The template file contains complex components and demos like charts and forms that make it faster and easier for you to add common design patterns to your wireframes. To view template examples click [here](/components/about-modal/html-demos).

The contents of the template file are organized alphabetically by component or demo name. If you want to use any of the artboards in the template file to create custom designs, you should follow these rules:
1. Unhide “padding” group (this group contains all of the spacers we use to create the design)
2. Edit the design as desired using the spacers as your guide

### The symbol library
The PatternFly symbol library contains individual components like buttons, alerts, and badges, that can be combined in any number of ways to solve common design problems. If you’re unfamiliar with Sketch symbols, it might be helpful to skim [this guide](https://www.sketch.com/docs/libraries/library-symbols) before you get started.

You can use any symbol offered in the Sketch symbol library to create your design. If you have any questions or need any clarification, you can post to the [PatternFly forum](https://forum.patternfly.org/). If you have any feedback about certain features or encounter a bug, you can file an issue against [patternfly-design-kit](https://github.com/patternfly/patternfly-design-kit/issues) on GitHub.

#### Navigating the symbol library
There are two kinds of symbols - library symbols and document symbols. Library symbols are available in any Sketch document, while document symbols are specific to the document in which they are found.

From the top toolbar in Sketch, select Insert → Symbols → Patternfly 4 to add symbols onto your page.

PatternFly symbols are designed to be as flexible and adaptable as possible. As such, designers should avoid detaching symbols from the library. However, there are rare instances where this may be necessary. Just know that once a symbol is detached, that symbol will no longer automatically update with new releases.

![Symbol-library](./img/symbol-library.png)

## Using the design kit
It’s important to understand some specific aspects about the design kit and the assets contained inside to make the most of the design system.

* [Spacers](#spacers)
* [Layers styles](#layer-styles)
* [Text styles](#text-styles)

### Sketch design training
There’s a lot to learn when it comes to making smart use of the Sketch template and library. Whether you are new to PatternFly, new to Sketch, or even an experienced Sketch user, just looking to see how other designers use the application, the Sketch design training is a great place to start when using the design kit.

[**Start Sketch design training**](https://patternflyt-training.thinkific.com/courses/pf-sketch-e-training) <i class="ws-content-blueArrow fas fa-arrow-right pf-u-mx-sm"></i>

### Spacers
The layout for all visual elements in Patternfly is determined by spacers. The spacers are used as padding between elements to ensure consistent layout and placement of components into a design that adhere to PatternFly guidelines. All symbols in the symbol library and templates have been made using spacers which are built-in to ensure correct use of elements.

The [template library](https://www.sketch.com/s/729c2eee-e8b6-4fcd-8a79-f6faa8c30f89) also contains examples of spacer use to clarify where elements should be placed within a given page or design.  These templates have been created in a way that reduces a user’s need to think about spacers. An example of a Login form template can be seen here with different sized spacers - demonstrated by their different colors - used to separate each symbol/component within the layout.

To see more information about spacers and their use please click [here](/guidelines/spacers).

### Layer styles
Symbols in the symbol are organized by component; after selecting a component, you’ll see the variations and states of that component.

For some components, you will have the option to customize them to your need by overriding certain layer styles and text labels from the sidebar on the right.

Layer styles are color selections for symbols in Sketch.

![layer-styles](./img/layer-styles.png)

Colors in PatternFly are carefully considered, and custom layer styles are discouraged. There are specific color options to choose from for backgrounds, borders, icons and states, as well as an expansive color library for other elements that do not necessarily fit into a certain category.

Note that there is a difference between regular color options and chart color fill options. When changing a color in a chart, you should only use the colors in the chart fill “dropdown”, which includes fills for donut charts, line charts and regular bar charts. When changing the color of other elements, you should use the general color palette if the component does not fit into the other offered category options.

### Text styles
Currently, all PatternFly text styles use Red Hat Text and Red Hat Display fonts. If you have not done so already, make sure to download according to the instructions [above](#download-the-font) before starting your designs.

When inserting text into your design, always assign it a text style by selecting the text item, followed by selecting a text style from the appearance menu on the right toolbar.

## Designing with PatternFly
PatternFly offers a variety of resources to help you make the most of the design system, including design guidelines for style, content, and component usage and behavior. You can use these assets in combination with the design kit to create consistent and usable product experiences.

### Style guidelines
What typography should you be using? What about colors? Spacing? Check out styles to learn everything you need to know about our foundational design elements.

[**View styles**](/guidelines/colors) <i class="ws-content-blueArrow fas fa-arrow-right pf-u-mx-sm"></i>

### Get familiar with usage and behavior guidelines.
Should you use a wizard or a form to solve this problem? How do you write a good button label? Which navigation makes the most sense? Check out our design guidelines to choose and use the right components for your use case.

[**Usage and behavior guidelines**](/components/about-modal/design-guidelines) <i class="ws-content-blueArrow fas fa-arrow-right pf-u-mx-sm"></i>

### Content guidelines
How do you write great microcopy and text for your user interface? Read our content guidelines for general principles, guidance on voice, and a style guide to help you with everything from capitalization to date and time formats.
View content guidelines

[**View content guidelines**](/ux-writing/about) <i class="ws-content-blueArrow fas fa-arrow-right pf-u-mx-sm"></i>



### Start building with components.
What does a toolbar look like? What about a filter chip? Components are the building blocks of the design system. Check out individual component pages to view examples, understand states and behaviors, and check out the code samples (if you’re into that kind of thing).

[**View components**](/components/about-modal) <i class="ws-content-blueArrow fas fa-arrow-right pf-u-mx-sm"></i>

### Still feeling unsure?
See all the pieces working together with demos.

[**View demos**](/demos/primary-detail) <i class="ws-content-blueArrow fas fa-arrow-right pf-u-mx-sm"></i>


## Staying up to date
Adjustments and bug fixes are made to the kit on a regular basis. When we make a change to any of the libraries, you will be notified via a purple pop-up in the top right corner of the Sketch window that says “Shared Library Update Available”. To update, simply click on the pop-up and followed by “download” to update your library.

We recommend that you keep your kit as up to date as possible. Once a change is accepted, you will not be able to revert to the previous version.

Please note that the Patternfly template will NOT be automatically updated as the symbol library is. Every time this template file is updated, you will need to re-download and re-save this as a template. We have added [release notes](https://github.com/patternfly/patternfly-design-kit/blob/master/PatternFly%20release%20notes.md) to the [design-kit-repo](https://github.com/patternfly/patternfly-design-kit/) that document additions and edits to the design kit. This is a good place to start to review what has been added to the template file.

Did you use the old versions of the symbols that were updated in files already? No problem -  you will receive another notification in the top right of that specific Sketch file that will allow you to update them.
