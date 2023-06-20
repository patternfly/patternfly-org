---
id: About
title: About PatternFly
section: get-started
---

import './get-started.css';

PatternFly is an open source design system created to enable consistency and usability across a wide range of applications and use cases. PatternFly provides clear standards, guidance, and tools that help designers and developers work together more efficiently and build better user experiences.

## What's included in PatternFly?

### Design foundations

These are the foundational elements of the design system, like color, typography, icons, and spacing.

### Components

Components are like building blocks. Designed to be flexible and modular, you can mix and match components to create a solution for almost any UI problem. Many components are accompanied by demos that show how the component can be used in context. They also provide useful starter code that can be copied and reused.

### Layouts

Layouts provide a way to arrange componpents on a page. Use of PatternFly layouts will ensure that your application is responsive to changes in screen size.

### Patterns

Patterns document best practices and solutions to common use cases and design problems. Some patterns are accompanied by demos that provide an interactive example and reusable code to support implementation.

### Design and accessibility guidelines

Design and accessibility guidelines help designers and developers apply components to create applications that are usable and accessible.

### UX writing style guide

Content guidelines provide principles and best practices around writing for user experience along with general voice and style guidance.


## Additional developer resources

### CSS variable system

You can customize PatternFly for your project using the CSS variable system, which enables you to change style elements like color across your project. The CSS variable system is a two-layer theming system where global variables inform component variables.

**Global variables**
Global variables define and enforce style elements (like global values for color, spacing, and font size) across the entire system.

**Component variables**
Component variables are used to define custom properties at the component level. Component variables are always defined by global variables.

[**Learn more and view CSS variables**](/developer-resources/global-css-variables) <i className="ws-content-blueArrow fas fa-arrow-right pf-v5-u-mx-sm"></i>

### Utility classes

Utility classes enable you to further customize and modify elements in your project without having to write any custom CSS.

For example, you might use a utility class to add additional spacing between elements, align content in a layout, or even add a box shadow to an element.

## Supported browsers

| Browser | Version |
| ------- | ------- |
| Chrome  | latest  |
| Firefox | latest  |
| Safari  | latest  |
| Edge    | latest  |

If you encounter an issue with an earlier browser version and have a question about whether or not that behavior should be supported, please feel free to [contact us](/get-started/community).

<!-- This section is WIP ** we need to wait to see how this content gets included **

Flexibility
PatternFly was built to be flexible and is scoped to work in tandem with other design systems. This means you’re able to use PatternFly components alongside components from systems like Bootstrap, Material.io, or older versions of PatternFly.

For example, our code is written like pf-v5-c-alert
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

## PatternFly release cadence

Currently, PatternFly plans to release a new major release annually. Major releases will be the only releases with 
planned breaking changes. Along with each major release, the PatternFly team will provide thorough upgrade guides and Codemods to support the work needed to upgrade to the latest version of PatternFly.

Minor feature releases will be available quarterly to include new features and enhancements (non-breaking), with interim bug fix releases available on demand.

Periodically, previews of updated React implementations of PatternFly components will be made available under a 'React 
next' tab in the component docs. During major releases, these React next implementations may be promoted to the
recommended implementation. In such instances, the previous implementation will be marked deprecated. Any deprecated 
implementation of components will remain available (though will not be further enhanced or maintained) until at least 
the subsequent major release.

## Requesting new features and enhancements
PatternFly is built on the needs of our community of stakeholders. To request a new feature or an enhancement to an existing feature, first open a new discussion topic in the [PatternFly Feature Request discussion forum](https://github.com/orgs/patternfly/discussions/categories/feature-requests). 

The PatternFly team will review and prioritize your issue, taking into account scope and technical constraints. If accepted, your feature request will be placed on the PatternFly feature roadmap for further design and development. After this, the PatternFly design team will work with you to create a design proposal and facilitate reviews.