---
id: Motion
section: design-foundations
---

import { Alert, AlertActionLink, Card, CardHeader, CardTitle, CardBody, CardFooter, Grid, GridItem} from '@patternfly/react-core';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/esm/icons/external-link-alt-icon';

<Alert 
variant="info" 
title="Under development" 
actionLinks={
    <AlertActionLink component="a" href="#">
     View the project roadmap <ExternalLinkAltIcon /> 
    </AlertActionLink>
}
>
<p> 
We are still working on adding motion to all PatternFly components. As we progress, we will release batches of updated components, which will adhere to the principles and guidelines outlined on this page. 
</p>
</Alert>
<br />

Like color or typography, **motion** can create a strong foundation that helps connect the complex elements within your designs. By carefully incorporating motion into the design of a UI, you can create products that are more clear, engaging, and expressive.  Effective motion design should be intentional, and should be used to help guide users through their experiences more efficiently.

This guide outlines the principles that drive motion design in PatternFly and describes the different types of motion that are supported in our design system.

## Principles 
These principles guide the use of motion in PatternFly, to ensure consistency and alignment with our [brand voice and tone](https://www.patternfly.org/ux-writing/brand-voice-and-tone).

<br />

<Grid hasGutter>
<GridItem span={6}>
    <Card isFullHeight>
    <CardHeader>
    <CardTitle>Intentional</CardTitle>
    </CardHeader>
    <CardBody>Motion should be intentionally designed in ways that help your users reach their goals. Animations should be quick and simple to focus your users’ attention only on what’s important, without distracting.
    </CardBody>
    </Card>
</GridItem>
<GridItem span={6}>
    <Card isFullHeight>
    <CardHeader>
    <CardTitle>Consistent</CardTitle>
    </CardHeader>
    <CardBody>Motion should be applied consistently to ensure that you’re sticking to the best design practices. Consistent animations provide a sense of familiarity to users throughout their journey and connect cross-product experiences. 
    </CardBody>
    </Card>
</GridItem>
<GridItem span={6}>
    <Card isFullHeight>
    <CardHeader>
    <CardTitle>Engaging</CardTitle>
    </CardHeader>
    <CardBody>To draw your users in and keep them interested, motion should be expressive and approachable. Animations should celebrate the big moments in our users’ journeys and add character to common interactions. 
    </CardBody>
    </Card>
</GridItem>
<GridItem span={6}>
    <Card isFullHeight>
    <CardHeader>
    <CardTitle>Inclusive</CardTitle>
    </CardHeader>
    <CardBody>
        Motion should contribute to experiences that offer all of your users a sense of belonging. Animations should always be optional and should respect your users’ motion preferences.
    </CardBody>
    </Card>
</GridItem>
</Grid>

## Motion in PatternFly

PatternFly components support motion in the form of **micro animations**, which are small, unobtrusive, and often understated. These animations serve specific purposes within a UI, and are designed to be subtle and complementary. 

This behavior is built into PatternFly, so there is nothing additional you need to do to support motion. To meet accessibility requirements, reduced motion support is determined based on users' browser settings.

If you want to implement additional motion, or if you'd like to customize the default PatternFly behavior, [follow these practices.](#custom-motion)

### Types of animations
There are 5 different types of animations used in PatternFly:
1. **Hover:** Shown when a user hovers over an element to inform them that the item can be clicked.
1. **Click:**  Shown when a user clicks an element, in order to provide immediate feedback that confirms user actions.
1. **Loading:** Loading animations, like spinners or progress bars, which keep users informed about the loading process in order to reduce frustration.
1. **Errors/validation:** Shown when an error occurs during a validation process, in order to draw attention to error messages and guide users as they resolve issues.
1. **Change:** Smooth transitions between different screens or sections of an application or website that enhance user flow and engagement.

### Anatomy of an animation 
An animation is composed of 4 elements: triggers, duration, easing, and properties.

1. **Triggers:** The event that causes the animation to happen. These can be: 
    - User-initiated. For example, a gesture or click. 
    - System-initiated. For example, after a certain amount of time.

1. **Duration:** Describes how long animations should be. 
    - Shorter durations are used for simpler effects and smaller animations. For example, fading or color changing.
    - Longer durations are used for more complex effects and larger-scale animations. For example, page transitions or objects that slide in and out of the screen. Optimal timing can change based on viewport size. 

1. **Easing:** Describes how an element transitions over time.

1. **Properties:** The characteristics of the element being transitioned. Animations may have multiple properties, including: 
    - Fade in/out
    - Scale
    - Rotate
    - Color transitions
    - Slide in/out
    - Expand/collapse

## Developing and designing with motion 

### Tokens

PatternFly component animations are created using design tokens that cover the different elements of an animation, including duration, delay, and timing. Like we do with color tokens, we implement motion by using semantic tokens, which are built off of base tokens.

If you aren't familiar with our token system, [refer to this overview](/tokens/about-tokens).

### Motion patterns

A **motion pattern** is a combination of tokens and properties that work together to solve common animation needs. These patterns help ensure that the behavior of a type of animation is consistent across similar use cases—even if different components are involved.

For example, an "action fade" pattern may dictate how animation is applied when a user selects an action. This pattern specifies the timing and duration of the fade, so that the animation is the same across different action components. In this example, we would want users to see the same hover/click animation whether they're interacting with an action button, an action menu, and so on.

![add alt text](/packages/documentation-site/patternfly-docs/content/images/placeholder-image.png)

### Custom motion 

For some scenarios, like creating a new [PatternFly extension](/extensions/about-extensions), you may need to customize motion that doesn't already exist in PatternFly components. When you're creating a new animation behavior, make sure that:
- There is no existing support for the animation.
- The animation adheres to our motion principles. 
- Your implementation uses appropriate semantic tokens. 