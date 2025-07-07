---
id: Motion
section: design-foundations
source: design-and-develop
---

## Animated components

Different component animations are triggered by different events, including hover, click, loading, errors, and transitions. There are 5 general types of animations, including alerting, expansion, feedback, progression, and transition. 

### Alerts 



    - Alert

### Expansion 

By guiding a user's focus, expansion animations make newly revealed information easier to process. When a user opens a section, a gentle fade and slide transition draws their eye to the content. The reverse occurs upon closing, creating an engaging and predictable interaction. 

The following components contain expansion animations wherever content can be expanded and collapsed:

- Accordion 
- Dual list selector
- Expandable section 
- Form 
- Navigation 
- Search input
- Tree view
- Table

### Feedback

By immediately responding to user input, feedback animations provide reassurance that the system is responding to their actions. This clarity reduces, confirms the results of an action, and can signal what will happen next.

The following components contain feedback animations:

- Hover and clicks: Animations are triggered by hover, clicks, and focus.
    - Buttons
    - Icons 
        - Favorite
        - Hamburger menu 
        - Settings 
        - Notification badge
    - Tabs
- Validation: Animations are triggered by errors in validated inputs. 
    - Forms 
    - Menu toggle
    - Progress

### Progression

- Progress 
- Progress stepper 
- Skeleton

### Transitions


## Motion patterns

A **motion pattern** is a combination of tokens and properties that work together to solve common animation needs. These patterns help ensure that the behavior of a type of animation is consistent across similar use cases—even if different components are involved.

For example, an "action fade" pattern may dictate how animation is applied when a user selects an action. This pattern specifies the timing and duration of the fade, so that the animation is the same across different action components. In this example, we would want users to see the same hover/click animation whether they're interacting with an action button, an action menu, and so on.

## Developing with animations

### Opt-in animations

We try to support animations by default in our components, but&mdash;to avoid introducing breaking changes&mdash;some animations require you to manually opt in. In order to function properly, opt-in animations require additional updates to your codebase. Depending on how your testing is set up, opt-in animation could cause test failures, so you must manually configure them appropriately.

The following components contain opt-in animations. To understand the opt-in implementation, view the linked example code.

#### Alerts
- Alert: [Animated example](/components/alert/#dynamic-alert-groups) 

#### Expansion 
- Dual list selector: [Animated example](/components/dual-list-selector#with-tree)
- Expandable table: [Animated example](/components/table/#expandable)
- Form field groups: [Animated example](/components/forms/form/#field-groups) 
- Tree view: [Animated example](/components/tree-view/) (all examples) 

#### Feedback
- Tabs (HTML-only implementations): [Animated example](/components/tabs#animate-current-tab-accent)
- Notification badge: [Animated example](/components/notification-badge/#with-animation)

### Custom motion 

For some scenarios, like creating a new [PatternFly extension](/extensions/about-extensions), you may need to implement custom motion behavior that doesn't already exist in PatternFly components. When you're creating a new animation, make sure that:
- There is no existing support for the animation.
- The animation adheres to our motion principles and respects users' [`prefers-reduced-motion` settings.](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
- Your implementation uses appropriate semantic tokens, as detailed in the following section. 

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


