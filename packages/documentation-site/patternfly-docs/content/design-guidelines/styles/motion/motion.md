---
id: Motion
section: design-foundations
source: About 
---

import { Alert, AlertActionLink, Card, CardHeader, CardTitle, CardBody, CardFooter, Grid, GridItem} from '@patternfly/react-core';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/esm/icons/external-link-alt-icon';

<Alert 
variant="info" 
title="Under development" 
actionLinks={
    <AlertActionLink component="a" href="https://github.com/orgs/patternfly/projects/7/views/66">
     View the project roadmap <ExternalLinkAltIcon /> 
    </AlertActionLink>
}
>
<p> 
We are actively adding motion to PatternFly components and will release updates in batches each quarter.
</p>
</Alert>

Like color or typography, **motion** can create a strong foundation that helps connect the complex elements within your designs. By carefully incorporating motion into the design of a UI, you can create products that are more clear, engaging, and expressive.  Effective motion design should be intentional, and should be used to help guide users through their experiences more efficiently.

This resource outlines our motion design principles and the different types of motion in PatternFly.

For detailed guidance on implementing and customizing animations, refer to our [motion design and development guidelines](/design-foundations/motion/design-and-develop).

## Principles 
These principles guide the use of motion in PatternFly and align with our [brand voice and tone](https://www.patternfly.org/ux-writing/brand-voice-and-tone).

<Grid hasGutter>
<GridItem span={6}>
    <Card isFullHeight>
    <CardHeader>
    <CardTitle>Intentional</CardTitle>
    </CardHeader>
    <CardBody> Motion should guide our users without being a distraction. It should be purposeful and simple, helping users complete their tasks and focus only on what is most important.
    </CardBody>
    </Card>
</GridItem>
<GridItem span={6}>
    <Card isFullHeight>
    <CardHeader>
    <CardTitle>Consistent</CardTitle>
    </CardHeader>
    <CardBody> Motion should create a familiar and predictable experience. It should be applied consistently to unify interactions and connect the user's journey across different products.
    </CardBody>
    </Card>
</GridItem>
<GridItem span={6}>
    <Card isFullHeight>
    <CardHeader>
    <CardTitle>Engaging</CardTitle>
    </CardHeader>
    <CardBody> Motion should captivate users and add character to the interface. It should celebrate user accomplishments and make common interactions more expressive and interesting.
    </CardBody>
    </Card>
</GridItem>
<GridItem span={6}>
    <Card isFullHeight>
    <CardHeader>
    <CardTitle>Inclusive</CardTitle>
    </CardHeader>
    <CardBody> Motion should empower users by respecting their preferences. It must always be optional and accommodating to ensure a comfortable and accessible experience for all.
    </CardBody>
    </Card>
</GridItem>
</Grid>

## Component micro animations

PatternFly components support motion in the form of **micro animations**, which are small, unobtrusive, and often understated. These animations serve specific purposes within a UI, and are designed to be subtle and complementary. To ensure an accessible experience, every animation adapts to and respects a user's system-level settings for reduced motion.

While our goal is to inherently support animations across our components, there may be instances where you need to use [our motion tokens](/design-foundations/motion/design-and-develop#motion-tokens) to enable an animation for your specific scenario. 

If you want to implement additional motion, or if you'd like to customize the default PatternFly behavior, [follow these practices.](#custom-motion)

### Anatomy of an animation 
An animation is composed of 4 elements: triggers, duration, easing, and properties.

#### Triggers

A trigger is the event that causes the animation to happen. 
- **User-initiated:** Animations that are triggered by user actions, like hovering or clicking.
- **System-initiated:** Animations that are triggered by system events or after a certain amount of time, like notifications and alerts.

#### Duration

The duration of an animation refers to the amount of time that it takes to complete. Optimal timing can change based on viewport size. 
- **Short:** Quick animations for simpler effects and subtle motion, like fading or color changing.
- **Long:** Longer animations for more complex effects and large-scale motion, like page transitions or objects that slide into the screen. 

#### Easing

The easing of an animation refers to how the animated element transitions over time.

#### Properties

An animation's properties are the characteristics of the element being transitioned. Animations may have multiple properties, including: 
    - Fade in/out
    - Scale
    - Rotate
    - Color transitions
    - Slide in/out
    - Expand/collapse

