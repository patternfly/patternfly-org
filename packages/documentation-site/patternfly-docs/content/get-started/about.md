---
id: About PatternFly
title: About PatternFly
section: get-started
---

import './get-started.css';
import { Grid, GridItem } from '@patternfly/react-core';

## What is PatternFly? 

PatternFly is an open source design system that enables designers and developers to create consistent and usable software products. 

A **design system** is a collection of software design standards and  resources that enable its users to design more consistently and productively. When you design and develop with a design system, you can work with less redundency, and unified language between crossfunctional teams. It also means that products will be visually consistent, and will use patterns that support better usability and efficiency. 

You can learn even more about design systems in [this article by Neilsen Norman Group.](https://www.nngroup.com/articles/design-systems-101/)

, like components, design guidelines, code. 

PatternFly is created and maintained by Red Hat, and is used across Red Hat's product catalog, but our design system is open for all to use. 

PatternFly provides code samples, clear standards, guidance, and additional resources that help designers and developers work together more efficiently and build better user experiences.
## What does PatternFly include?

### [Design foundations](/design-foundations/about)

The foundational elements of our design system, like color, typography, icons, and spacing.

### [Components](/components/all-components)

Flexible, modular, building blocks that you can mix and match UIs. Many components are accompanied by demos and design guidelines that show how the component can be used in context. Demos and examples also provide useful starter code that can be copied and reused.

### Tokens

### [Layouts](/layouts/about)

Visual arrangements to cover responsive screen size.

### [Patterns](/patterns/about)

Best practices and solutions for common use cases and design problems. Some patterns are accompanied by demos that provide an interactive example and reusable code to support implementation.

### [Accessibility guidelines](/accessibility/accessibility-fundamentals)

Guidelines to follow to create products that are usable and accessible by all users.

### [UX writing style guide](/ux-writing/about)

Content guidelines that provide principles and best practices around writing for user experience, along with general voice and style guidance.

### [Extensions](/extensions/about)

Holistic solutions that utilize multiple PatternFly components, typically addressing cross-project use cases. They provide reusable code that can drive consistency throughout a user’s journey across products and platforms.

### Additional developer resources

#### [CSS variable system](/developer-resources/global-css-variables)

You can customize PatternFly for your project using the CSS variable system, which enables you to change style elements like color across your project. The CSS variable system is a two-layer theming system where global variables inform component variables.

#### [Utility classes](/utility-classes/about)

Utility classes enable you to further customize and modify elements in your project without having to write any custom CSS.

For example, you might use a utility class to add additional spacing between elements, align content in a layout, or even add a box shadow to an element.

<Grid hasGutter>

<GridItem span={3}>
### Design
To design with PatternFly, get started
</GridItem>

<GridItem span={3}>
### Develop
To develop with PatternFly, get started
</GridItem>

<GridItem span={3}>
### Community
To develop with PatternFly, get started
</GridItem>

<GridItem span={3}>
### Contribute
To develop with PatternFly, get started
</GridItem>

</Grid>


## PatternFly's release cadence

Currently, PatternFly plans to release a new major release annually. Major releases will be the only releases with 
planned breaking changes. Along with each major release, the PatternFly team will provide thorough upgrade guides and Codemods to support the work needed to upgrade to the latest version of PatternFly.

Minor feature releases will be available quarterly to include new features and enhancements (non-breaking), with interim bug fix releases available on demand.

Periodically, previews of updated React implementations of PatternFly components will be made available under a 'React 
next' tab in the component docs. During major releases, these React next implementations may be promoted to the
recommended implementation. In such instances, the previous implementation will be marked as deprecated. Any deprecated 
implementation of components will remain available until at least the subsequent major release, but it will not be further enhanced or maintained.

## Requesting new features and enhancements
PatternFly is built on the needs of our community. To request a new feature or an enhancement to an existing feature, [open a new discussion topic in the PatternFly feature request discussion forum](https://github.com/orgs/patternfly/discussions/categories/feature-requests). The PatternFly team will review and prioritize your issue, taking into account scope and technical constraints. If accepted, your feature request will be placed on the [PatternFly feature roadmap](https://github.com/orgs/patternfly/projects/16), and the PatternFly design team will work with you to design and develop a solution for your request.

<!-- This section is WIP ** we need to wait to see how this content gets included **

Flexibility
PatternFly was built to be flexible and is scoped to work in tandem with other design systems. This means you’re able to use PatternFly components alongside components from systems like Bootstrap, Material.io, or older versions of PatternFly.

For example, our code is written like pf-v5-c-alert
alert
So if you had …
Include an example -->
