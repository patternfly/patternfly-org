---
id: About
title: About PatternFly
section: get-started
---

import './get-started.css';

PatternFly is an open source design system created to enable consistency and usability across a wide range of applications and use cases. PatternFly provides clear standards, guidance, and tools that help designers and developers work together more efficiently and build better user experiences.

## Basic structure

### Components

Components are like building blocks. Designed to be flexible and modular, you can mix and match components to create a solution for almost any UI problem.

### Layouts

A layout provides a fully responsive page structure that keeps your components organized and aligned regardless of screen size.

### Demos

Components are better together. Demos show how multiple components can be used in a single design. They also provide some useful starter code, so the days of creating complex layouts from scratch are over.

## Design guidelines

### Styles

Style guidelines define foundational elements of the design system, like color, typography, and spacing.

### Usage and behavior

Usage and behavior guidelines communicate standards and best practices for common design patterns like navigation, dashboards, or forms.

### UX writing

Content guidelines provide principles and best practices around writing for user experience along with general voice and style guidance.

[**View design guidelines**](/guidelines/colors) <i className="ws-content-blueArrow fas fa-arrow-right pf-u-mx-sm"></i>

## Additional tools

### CSS variables

You can customize PatternFly for your project using the CSS variable system, which enables you to change style elements like color across your project. The CSS variable system is a two-layer theming system where global variables inform component variables.

**Global variables**
Global variables define and enforce style elements (like global values for color, spacing, and font size) across the entire system.

**Component variables**
Component variables are used to define custom properties at the component level. Component variables are always defined by global variables.

[**Learn more and view CSS variables**](/developer-resources/global-css-variables) <i className="ws-content-blueArrow fas fa-arrow-right pf-u-mx-sm"></i>

### Utilities

Utilities are a set of classes that enable you to further customize and modify elements in your project without having to write any custom CSS.

For example, you might use a utility class to add additional spacing between elements, align content in a layout, or even add a box shadow to an element.

## Supported browsers

| Browser | Version |
| ------- | ------- |
| Chrome  | latest  |
| Firefox | latest  |
| Safari  | latest  |
| Edge    | latest  |

If you encounter an issue with an earlier browser version and have a question about whether or not that behavior should be supported, please feel free to contact us.

<!-- This section is WIP ** we need to wait to see how this content gets included **

Flexibility
PatternFly was built to be flexible and is scoped to work in tandem with other design systems. This means you’re able to use PatternFly components alongside components from systems like Bootstrap, Material.io, or older versions of PatternFly.

For example, our code is written like pf-c-alert
alert
So if you had …
Include an example -->

## Beta components

Newly introduced components to the PatternFly component library are
initially released in `beta`. Such components are labelled with a blue informational alert at the top of their documentation pages.

Beta components are open to evolution and possible breaking changes
pending testing and feedback. Each beta component is evaluated on a quarterly basis to evaluate its stability
and the degree to which it meets product requirements. Every quarter, stable
components are proposed as promotion candidates. To view a list of current promotion candidates, visit
[this page](https://github.com/patternfly/patternfly-org/tree/main/beta-component-promotion).

There are two recommended steps to take when considering using a beta component in product:
1. Play with the component examples in the docs and determine whether or not the current implementation meets your needs. Open issues for any missing features, enhancement requests, or bugs.
2. Check the [PatternFly Issues GitHub Project board](https://github.com/orgs/patternfly/projects/7/views/5) where we have created a view to categorize most issues by component. Browse any open issues for the beta component to determine how much more the beta component could evolve in the near future.

Once promoted, breaking changes are not made to components outside of a well-advertised
breaking change release. Breaking changes introduce visual changes, changes to applied CSS
class names, or changes to existing React props (new React props might be added).

Occasionally, a component is promoted out of beta and subsequent enhancement requests require new CSS class names
and React props to be introduced. Whenever these enhancements are substantial enough to open the possibility
for further updates pending testing and feedback, then the newly introduced CSS class names or React props
as well as relevant examples in the documentation are all labeled as beta.

For more information about beta components, visit [this page](https://github.com/patternfly/patternfly-org/tree/main/beta-component-promotion).
