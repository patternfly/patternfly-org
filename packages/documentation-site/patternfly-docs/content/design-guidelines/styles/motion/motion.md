---
id: Motion
section: design-foundations
---

Like color or typography, motion can create a strong foundation that helps connect the complex elements within your designs. By carefully incorporating motion into the design of a UI, you can create products that are more clear, engaging, and expressive.  Effective motion design should be intentional, and should be used to help guide users through their experiences more efficiently.

This guide outlines the principles that drive motion design in PatternFly and describes the different types of motion that are supported see our design system.

## Principles 
Our motion principles define the intention behind motion use, to ensure that animations are consistent and are used in ways that  support our [brand voice and tone](https://www.patternfly.org/ux-writing/brand-voice-and-tone). When you use animations, you should ask yourself if your scenario adheres to these principles. 

### Intentional 
Motion should be intentionally designed in ways that help your users reach their goals. Animations should be quick and simple to focus your users’ attention only on what’s important, without distracting.

### Consistent
Motion should be applied consistently to ensure that you’re sticking to the best design practices. Consistent animations provide a sense of familiarity to users throughout their journey and connect cross-product experiences.

### Engaging
To draw your users in and keep them interested, motion should be expressive and approachable. Animations should celebrate the big moments in our users’ journeys and add character to common interactions.

### Inclusive
Motion should contribute to experiences that offer all of your users a sense of belonging. Animations should always be optional and should respect your users’ motion preferences.

## Motion in PatternFly
Motion is integrated across PatternFly components  in the form of micro animations, which are small, unobtrusive, and often understated. These animations serve specific purposes within a user interface and are designed to be subtle and complementary.

### Types of animations
There are 5 different types of animations used in PatternFly:
1. **Hover:** Shown when a user hovers over an element to inform them that the item can be clicked.
1. **Click:**  Shown when a user clicks an element, in order to provide immediate feedback that confirms user actions.
1. **Loading:** Loading animations, like spinners or progress bars, which keep users informed about the loading process in order to reduce frustration.
1. **Errors / Validation:** Shown when an error occurs during a validation process, in order to draw attention to error messages and guide users as they resolve issues.
1. **Change:** Smooth transitions between different screens or sections of an application or website that enhance user flow and engagement.

### Anatomy of an animation 
An animation is composed of 4 elements: triggers, duration, easing, and properties.

1. **Triggers:** The event that causes the animation to happen, which can be user-initiated (such as a gesture or click) or system-initiated (such as a time-based trigger).

1. **Duration:** Describes how long animations should be. 
Shorter durations should be used for simpler effects and relatively small-sized animations (such as fades or color changes)
Longer durations should be used for more complex effects and larger scale animations (such as page transitions or moving objects on and offscreen)
Optimal timing can change based on viewport size. 

1. **Easing:** Describes how an element transitions over time.

1. **Properties:** The characteristics of the element being transitioned (position, opacity, scale, etc.). Animations can be tagged with one or multiple of these properties: 
- Fade in/out
- Scale
- Rotation
- Color transition
- Movement -- Slide in/out
- Movement -- Expand/Collapse

## Developing (and designing?) with motion 
Animations are set up within components via CSS properties. They are enabled by default, but can be disabled based on users' motion preferences via browser settings.

### Tokens

### Accessibility considerations
