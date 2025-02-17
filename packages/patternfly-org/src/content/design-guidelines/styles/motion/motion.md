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
    <AlertActionLink component="a" href="https://github.com/orgs/patternfly/projects/16/views/18">
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

Animations are largely built into PatternFly components, but there may be instances where you need to use our motion tokens to enable an animation in your specific scenarios. Wherever PatternFly provides animation, reduced motion support (based on users' browser settings) is provided.

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

### Figma 
In Figma, you can find annotations and prototype videos for each animation...

### Motion tokens

PatternFly component animations are created using design tokens that cover the different elements of an animation, including duration, delay, and timing. Like we do with color tokens, we implement motion by using semantic tokens, which are built off of base tokens. Motion tokens begin with `-pf-t--global--motion--`

You can [search for motion tokens here.](/tokens/all-patternfly-tokens)

If you aren't familiar with our token system, [refer to this overview](/tokens/about-tokens).

#### Duration 
Duration tokens specify the length of time that different animation should take to complete. There are predefined duration tokens based on the type of animation, shown in the following table;

| **Animation** | **Description** | **Tokens** |
| --- | --- | --- | 
| Slide-out | Moves an element out of the viewport. | `-pf--t--global--motion--duration--slide-out--short`<br /><br />`-pf--t--global--motion--duration--slide-out--default`<br /><br />`-pf--t--global--motion--duration--slide-out--long` |
| Slide-in | Moves an element into the viewport from offscreen. | `-pf--t--global--motion--duration--slide-in--short`<br /><br />`-pf--t--global--motion--duration--slide-in--default`<br /><br />`-pf--t--global--motion--duration--slide-in--long`  |
| Fade | Applies a gradual transition to an element.  | `--pf-t--global--motion--duration--fade--short` <br /><br/> `--pf-t--global--motion--duration--fade--default`<br /><br/> `--pf-t--global--motion--duration--fade--long` |
| Icon | Applies transitions to icons. | `--pf-t--global--motion--duration--icon--short` <br /><br/> `--pf-t--global--motion--duration--icon--default`<br /><br/> `--pf-t--global--motion--duration--icon--long`  |
<br />

#### Delay 
Delay tokens specify the length of time that should pass before an animation begins. Delay options include none, short, default, and long.

| **Token** | **Value** | 
| --- | --- |
| `--pf-t--global--motion--delay--none` | 0ms |
| `--pf-t--global--motion--delay--short` | 50ms |
| `--pf-t--global--motion--delay--default` | 100ms |
| `--pf-t--global--motion--delay--long` | 7000ms |
<br />

#### Timing 
Timing-function tokens specify the easing path that an animation takes. These paths are defined by [cubic Bezier curves,](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function#cubic_b%C3%A9zier_easing_functionyar) which define the start and end points of a curve, as well as its initial and final times and states. 

The available options for timing are described in the following table:

| **Timing function** | **Description** | **Token** | **Value** | 
| --- | --- | --- | --- |
| Accelerate | Specifies that the animation starts slowly and accelerates gradually until the end. Equivalent to an "ease-in" transition. | `--pf-t--global--motion--timing-function--accelerate` | cubic-bezier(.4, 0, .7, .2)
| Default | Use default to specify that the animation starts slow, speeds up and slows down at the end. Equivalent to an "ease-in-out" transition.| `--pf-t--global--motion--timing-function--default` | cubic-bezier(.4, 0, .2, 1)
| Decelerate | Use decelerate to specify that the animation starts quickly and decelerates gradually until the end. Equivalent to an "ease-out" transition. |  `--pf-t--global--motion--timing-function--decelerate` | cubic-bezier(0, 0, .2, 1)

### Motion patterns

A **motion pattern** is a combination of tokens and properties that work together to solve common animation needs. These patterns help ensure that the behavior of a type of animation is consistent across similar use cases—even if different components are involved.

For example, an "action fade" pattern may dictate how animation is applied when a user selects an action. This pattern specifies the timing and duration of the fade, so that the animation is the same across different action components. In this example, we would want users to see the same hover/click animation whether they're interacting with an action button, an action menu, and so on.

### Custom motion 

For some scenarios, like creating a new [PatternFly extension](/extensions/about-extensions), you may need to customize motion that doesn't already exist in PatternFly components. When you're creating a new animation behavior, make sure that:
- There is no existing support for the animation.
- The animation adheres to our motion principles and respects users' [`prefers-reduced-motion` settings.](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
- Your implementation uses appropriate semantic tokens. 