---
id: Design
title: Design with PatternFly
section: get-started
source: Design-with-Sketch
---

import { Alert } from '@patternfly/react-core';

<Alert variant="info" title="Unsupported">
    We no longer maintain or update our Sketch design kits and strongly advise you to migrate to Figma, so that you can use the current PatternFly design kit. As a result, this guide is no longer being updated.
</Alert>

## Sketch design kit

The Sketch design kit was our recommendation prior to the release of PatternFly 5. Initial PatternFly 5 components and styles were added to Sketch, but nothing beyond those initial updates will be included going forward. PatternFly 6 and beyond will only be available within Figma.

If you continue to use Sketch, you will not be following our latest recommendations and will not have access to new PatternFly features.

**We strongly recommend you to [migrate to Figma](/get-started/design) so that you can continue to receive updated design resources.**

### Design kit
The design kit is a symbol library implemented in Sketch to help designers, like you, create high-fidelity mockups that reflect PatternFly styling.

### Wireframe kit
A PatternFly wireframe kit is also available for creating low or mid-fidelity mockups that are compatible with PatternFly styles. The wireframe kit is separate from the design kit, but the two can be used together for a comprehensive approach to the design life-cycle. You can [learn more about the wireframe kit on GitHub.](https://github.com/patternfly/patternfly-design-kit/blob/master/PatternFly%204%20-%20Wireframe%20library%20and%20template/Wireframe%20kit%20guideline.md)

### Getting the design kit

#### Download fonts
PatternFly currently uses Red Hat Text and Red Hat Display, [which you can download here](https://github.com/RedHatOfficial/RedHatFont). Once you've downloaded the repository, select all files in the "TTF" folder and double-click to install them onto your computer locally.

### What's in the design kit?

#### The template file

The template file contains complex components and demos like charts and forms that make it faster and easier for you to add common design patterns to your wireframes. Template examples can be viewed in [our demos](/components/about-modal/html-demos).

The contents of the template file are organized alphabetically by component or demo name. If you want to use any of the artboards in the template file to create custom designs, you should follow these rules:
1. Unhide “padding” group (this group contains all of the spacers we use to create the design)
2. Edit the design as desired using the spacers as your guide

#### The symbol library
The PatternFly symbol library contains individual components like buttons, alerts, and badges, that can be combined in any number of ways to solve common design problems. If you’re unfamiliar with Sketch symbols, it might be helpful to skim [this guide](https://www.sketch.com/docs/libraries/library-symbols) before you get started.

You can use any symbol offered in the Sketch symbol library to create your design. If you have any questions or need any clarification, you can post to the [PatternFly forum](https://forum.patternfly.org/). If you have any feedback about certain features or encounter a bug, you can file an issue against [patternfly-design-kit](https://github.com/patternfly/patternfly-design-kit/issues) on GitHub.

##### Navigating the symbol library
There are 2 kinds of symbols - library symbols and document symbols. Library symbols are available in any Sketch document, while document symbols are specific to the document in which they are found.

From the top toolbar in Sketch, select Insert → Symbols → Patternfly 4 to add symbols onto your page.

PatternFly symbols are designed to be as flexible and adaptable as possible. As such, designers should avoid detaching symbols from the library. However, there are rare instances where this may be necessary. Just know that once a symbol is detached, that symbol will no longer automatically update with new releases.

<img src="./img/symbol-library.png" alt=""></img>

### Using Sketch

#### Before you start designing
The design kit is a collection of Sketch assets that make it easy for designers to create hi-fi mockups that accurately represent PatternFly components and layouts. It works with Sketch libraries. To use it, you need to install [Sketch version 68](https://www.sketch.com/) or above.

#### Download the template file
1. Access the [PatternFly template file](https://www.sketch.com/s/729c2eee-e8b6-4fcd-8a79-f6faa8c30f89) on Sketch cloud.
2. From the "..." menu on the top right, click **Download** to download the file onto your computer.

####  Add the symbol library
3. Access the [PatternFly design library](https://www.sketch.com/s/2cf1063b-5283-4e0b-b8a6-cbb1ac07e29e) on Sketch cloud.
5. From the "..." menu on the top right, click **Add library**. You'll be prompted with a modal - click "Open Sketch". Sketch should then open, and the download should happen automatically.

### Using other design tools

#### Before you begin
For non-Sketch users, we have created a compatible version of the symbol library to fit with any design tool of choice. We recommend importing the SVG versions into your design tool. Download the SVG set in the [patternfly-design-kit repo](https://github.com/patternfly/patternfly-design-kit/tree/master/Symbols-SVGs).

### Using the design kit
It’s important to understand some specific aspects about the design kit and the assets contained inside to make the most of the design system.

* [Spacers](#spacers)
* [Layers styles](#layer-styles)
* [Text styles](#text-styles)

### Sketch design training
There’s a lot to learn when it comes to making smart use of the Sketch template and library. Whether you are new to PatternFly, new to Sketch, or even an experienced Sketch user, just looking to see how other designers use the application, the Sketch design training is a great place to start when using the design kit.

[**Start Sketch design training**](/training/design) <i class="ws-content-blueArrow fas fa-arrow-right pf-v5-u-mx-sm"></i>

### Spacers
The layout for all visual elements in Patternfly is determined by spacers. The spacers are used as padding between elements to ensure consistent layout and placement of components into a design that adheres to PatternFly guidelines. All symbols in the symbol library and templates have been made using spacers which are built-in to ensure correct use of elements.

The [template library](https://www.sketch.com/s/729c2eee-e8b6-4fcd-8a79-f6faa8c30f89) also contains examples of spacer use to clarify where elements should be placed within a given page or design.  These templates have been created in a way that reduces a user’s need to think about spacers. An example of a Login form template can be seen here with different sized spacers - demonstrated by their different colors - used to separate each symbol/component within the layout.

To see more information about spacers and their use please see our [spacer guidelines](/design-foundations/spacers).

### Layer styles
Symbols in the symbol are organized by component; after selecting a component, you’ll see the variations and states of that component.

For some components, you will have the option to customize them to your need by overriding certain layer styles and text labels from the sidebar on the right.

Layer styles are color selections for symbols in Sketch.

<img src="./img/layer-styles.png"></img>

Colors in PatternFly are carefully considered, and custom layer styles are discouraged. There are specific color options to choose from for backgrounds, borders, icons and states, as well as an expansive color library for other elements that do not necessarily fit into a certain category.

Note that there is a difference between regular color options and chart color fill options. When changing a color in a chart, you should only use the colors in the chart fill “dropdown”, which includes fills for donut charts, line charts and regular bar charts. When changing the color of other elements, you should use the general color palette if the component does not fit into the other offered category options.

### Text styles
Currently, all PatternFly text styles use Red Hat Text and Red Hat Display fonts. If you have not done so already, make sure to download according to the instructions [above](#download-the-font) before starting your designs.

When inserting text into your design, always assign it a text style by selecting the text item, followed by selecting a text style from the appearance menu on the right toolbar.
