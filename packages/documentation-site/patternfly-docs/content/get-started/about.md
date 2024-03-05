---
id: About PatternFly
title: About PatternFly
section: get-started
---

import './get-started.css';
import { Button, Card, CardHeader, CardTitle, CardBody, Grid, GridItem } from '@patternfly/react-core';

## What is PatternFly? 

PatternFly is an open source design system that enables designers and developers to create consistent and usable software products. 

A **design system** is a collection of software design standards and resources that enable its users to design more consistently and productively. When you design and develop with a design system, you can reduce redundancy and enable a unified language between cross-functional teams. This means that products will be visually consistent, and will use patterns that support better usability and efficiency.

The PatternFly design system is created and maintained by Red Hat, and is used across Red Hat's product catalog, but it's open for anyone to use. Across our website, we provide code samples, clear standards, guidance, and additional resources that help designers and developers work together more efficiently and build better user experiences.

<br />
<img src="/../../packages/documentation-site/patternfly-docs/images/light-showcase.png" alt="Collage of different PatternFly components."></img>

<br />

At the core of PatternFly is our community of people: our Flyers. Together, we celebrate creativity and foster a sense of teamwork and unity. [Learn more about our community]() and the ways that you can [become a contributor]().

We're excited that you're here!

## What does PatternFly include?

The PatternFly design system is robust and expansive, but the features you will use the most can be grouped into a few general categories. 

### Foundations

PatternFly's foundations include the visual elements that create the basis for the rest of the design system.

<Grid hasGutter>
<GridItem span={6}>
<Card isClickable isCompact isFullHeight>
    <CardHeader
        selectableActions={{
            to: "/design-foundations/about-design-foundations",
            selectableActionId: 'clickable-selectable-card-input-1',
          }}
    >
    <CardTitle component="h4"> **Design foundations** </CardTitle>
    </CardHeader>
    <CardBody> The most foundational elements of our design system, like color, typography, icons, and spacing. </CardBody>
</Card>
</GridItem>

<GridItem span={6}>
<Card isClickable isCompact isFullHeight>
    <CardHeader
        selectableActions={{
            to: "/design-tokens/about-design-tokens",
            selectableActionId: 'clickable-selectable-card-input-2',
          }}
    >    
    <CardTitle component="h4"> **Design tokens** </CardTitle>
    </CardHeader>
    <CardBody> Semantically named variables that represent visual attributes and design styles. </CardBody>
</Card>
</GridItem>
</Grid>

<br />
<br />

### Elements 

There are a few core elements to PatternFly, which you will most often work directly with when building a UI.

<Grid hasGutter>
<GridItem span={6}>
<Card isClickable isCompact isFullHeight>
    <CardHeader
        selectableActions={{
            to: "/design-foundations/all-components",
            selectableActionId: 'clickable-selectable-card-input-3',
          }}
    >    
    <CardTitle component="h4"> **Components** </CardTitle>
    </CardHeader>
    <CardBody> Flexible, modular, building blocks that you can mix and match to create UIs. </CardBody>
</Card>
</GridItem>

<GridItem span={6}>
<Card isClickable isCompact isFullHeight>
    <CardHeader
        selectableActions={{
            to: "/design-tokens/about-layouts",
            selectableActionId: 'clickable-selectable-card-input-4',
          }}
    >
    <CardTitle component="h4"> **Layouts** </CardTitle>
    </CardHeader>
    <CardBody> Visual arrangements for components built for different visual presentations and screen sizes. </CardBody>
</Card>
</GridItem>

<GridItem span={6}>
<Card isClickable isCompact isFullHeight>
    <CardHeader
        selectableActions={{
            to: "/design-tokens/about-charts",
            selectableActionId: 'clickable-selectable-card-input-5',
          }}
    >
    <CardTitle component="h4"> **Charts** </CardTitle>
    </CardHeader>
    <CardBody> Different presentations of data visualization. </CardBody>
</Card>
</GridItem>

<GridItem span={6}>
<Card isClickable isCompact isFullHeight>
    <CardHeader
        selectableActions={{
            to: "/design-tokens/about-extensions",
            selectableActionId: 'clickable-selectable-card-input-6',
          }}
    >
    <CardTitle component="h4"> **Extensions** </CardTitle>
    </CardHeader>
    <CardBody> Holistic solutions that utilize multiple PatternFly components for cross-project use cases. </CardBody>
</Card>
</GridItem>
</Grid>

<br />
<br />

### Guidance

We provide extensive guidelines to help you create UIs following best practices. 

<Grid hasGutter>
<GridItem span={4}>
<Card isClickable isCompact isFullHeight>
    <CardHeader
        selectableActions={{
            to: "/design-foundations/about-patterns",
            selectableActionId: 'clickable-selectable-card-input-7',
          }}
    >
    <CardTitle component="h4"> **Patterns** </CardTitle>
    </CardHeader>
    <CardBody> Recommendations and solutions for common design problems. </CardBody>
</Card>
</GridItem>

<GridItem span={4}>
<Card isClickable isCompact isFullHeight>
    <CardHeader
        selectableActions={{
            to: "/design-tokens/about-accessibility",
            selectableActionId: 'clickable-selectable-card-input-8',
          }}
    >
    <CardTitle component="h4"> **Accessibility** </CardTitle>
    </CardHeader>
    <CardBody> Guidelines to follow to create products that are usable and accessible by all users. </CardBody>
</Card>
</GridItem>

<GridItem span={4}>
<Card isClickable isCompact isFullHeight>
    <CardHeader
        selectableActions={{
            to: "/design-tokens/about-ux-writing",
            selectableActionId: 'clickable-selectable-card-input-9',
          }}
    >
    <CardTitle component="h4"> **UX writing** </CardTitle>
    </CardHeader>
    <CardBody> Content guidelines that provide principles and best practices around writing for user experience, along with general voice and style guidance. </CardBody>
</Card>
</GridItem>

</Grid>

<br />
<br />

### Additional developer resources

We offer more complex resources to assist with the development process.

<Grid hasGutter>
<GridItem span={4}>
<Card isClickable isCompact isFullHeight>
    <CardHeader
        selectableActions={{
            to: "/topology/getting-started",
            selectableActionId: 'clickable-selectable-card-input-10',
          }}
    >
    <CardTitle component="h4"> **Topology** </CardTitle>
    </CardHeader>
    <CardBody> A method for modeling the behind the scenes stuff. </CardBody>
</Card>
</GridItem>

<GridItem span={4}>
<Card isClickable isCompact isFullHeight>
    <CardHeader
        selectableActions={{
            to: "/developer-resources/global-css-variables",
            selectableActionId: 'clickable-selectable-card-input-11',
          }}
    >
    <CardTitle component="h4"> **CSS variable system** </CardTitle>
    </CardHeader>
    <CardBody> CSS variables to use within code, which are tied into our design token system. </CardBody>
</Card>
</GridItem>

<GridItem span={4}>
<Card isClickable isCompact isFullHeight>
    <CardHeader
        selectableActions={{
            to: "/utility-classes/about-utility-classes",
            selectableActionId: 'clickable-selectable-card-input-12',
          }}
    >
    <CardTitle component="h4"> **Utility classes** </CardTitle>
    </CardHeader>
    <CardBody> Methods to further customize and modify UI elements without having to write custom CSS, like alignment, spacing, and shadows. </CardBody>
</Card>
</GridItem>

</Grid>

<br />

## How do I stay up to date?

<Grid hasGutter>
<GridItem span={6} >
We plan to release a new major version of PatternFly every year. These major releases will be the only releases with 
planned "breaking" changes that alter core code functionality. Along with each major release, we will provide thorough upgrade guides and codemods to support the work needed to upgrade your products to the latest version of PatternFly.
</GridItem>

<GridItem span={6} rowSpan={2}>
Add an image here
</GridItem>

<GridItem span={6} >
Minor feature releases will be available quarterly to introduce non-breaking changes, like new features and enhancements, with interim on-demand releases to fix bugs.
</GridItem>

</Grid>

<br />

## How can I request a new feature?

PatternFly is built on the needs of our community. To request a new feature or an enhancement to an existing feature, [open a new discussion topic in the PatternFly feature request discussion forum](https://github.com/orgs/patternfly/discussions/categories/feature-requests). The PatternFly team will review and prioritize your issue, taking into account scope and technical constraints. If accepted, your feature request will be placed on the [PatternFly feature roadmap](https://github.com/orgs/patternfly/projects/16), and the PatternFly design team will work with you to design and develop a solution for your request.


## Where do I start?

Now that you've been introduced to PatternFly, you're ready to start creating!

<Button component="a" href="https://www.patternfly.org/get-started/design" variant="secondary" size="lg"> Start designing </Button>

<Button component="a" href="https://www.patternfly.org/get-started/develop" variant="secondary" size="lg"> Start developing </Button>

<br />

<!-- This section is WIP ** we need to wait to see how this content gets included **

Flexibility
PatternFly was built to be flexible and is scoped to work in tandem with other design systems. This means you’re able to use PatternFly components alongside components from systems like Bootstrap, Material.io, or older versions of PatternFly.

For example, our code is written like pf-v5-c-alert
alert
So if you had …
Include an example -->