---
id: Motion
section: foundations-and-styles
source: about 
---

import { Alert, AlertActionLink, Card, CardHeader, CardTitle, CardBody, CardFooter, Grid, GridItem} from '@patternfly/react-core';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/esm/icons/external-link-alt-icon';

Like color or typography, **motion** can create a strong foundation that helps connect the complex elements within your designs. By carefully incorporating motion into the design of a UI, you can create products that are more clear, engaging, and expressive.  Effective motion design should be intentional, and should be used to help guide users through their experiences more efficiently.

This resource outlines our motion design principles and the different types of motion in PatternFly.

For detailed guidance on implementing and customizing animations, refer to our [motion development guidelines](/foundations-and-styles/motion/development-guide).

## Principles 
These principles guide the use of motion in PatternFly and align with our [brand voice and tone](/content-design/brand-voice-and-tone).

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

### Component micro animations

PatternFly components support motion in the form of **micro animations**, which are small, unobtrusive, and often understated. These animations serve specific purposes within a UI, and are designed to be subtle and complementary. To ensure an accessible experience, every animation adapts to and respects a user's system-level settings for reduced motion.

While many components feature animations by default, there are [opt-in animations](/design-foundations/motion/development-guide#opt-in-animations) that require manual configuration. If you're interested in implementing motion outside of what we support by default, you can use [our motion tokens](/design-foundations/motion/development-guide#motion-tokens) to create a custom animation for your specific scenario. Take care to stay aligned with our motion principles. 

### Anatomy of an animation 
An animation is composed of 4 elements: 
- [Triggers](#triggers)
- [Duration](#duration)
- [Easing](#easing)
- [Properties](#properties)

#### Triggers

A trigger is the event that causes the animation to happen. 
- **User-initiated:** Animations that are triggered by user actions, like hovering or clicking.
- **System-initiated:** Animations that are triggered by system events or after a certain amount of time, like notifications and alerts.

#### Duration

The duration of an animation refers to the amount of time that it takes to complete. Optimal timing can change based on the size of the element itself and the viewport. 
- **Short:** Quick animations for simpler effects and subtle motion, like fading or color changing.
- **Long:** Longer animations for more complex effects and large-scale motion, like page transitions or objects that slide into the screen. 

#### Easing

The easing of an animation refers to how the animated element transitions over time. Careful use of easing helps ensure that animations feel smooth and natural, rather than jarring and disjointed. For example, an element might accelerate quickly but decelerate slowly, or vice versa. 

#### Properties

An animation's properties are the specific visual characteristics of the element that change during a transition. An animation may combine multiple properties to create its effect, including:
- **Fade in/out:** The opacity of the element.
- **Scale:** The size of the element.
- **Rotate:** The direction of the element.
- **Color transitions:** Changes in the color of the element.
- **Slide in/out:** Changes in the position of the element, relative to the edges of the screen.
- **Expand/collapse:** Changes in the toggled visibility of an element.

### Types of animations

Animations typically fall into one of the following categories: 
- [Container placement](#container-placement)
- [Expansion](#expansion) 
- [Feedback](#feedback) 
- [Progression](#progression) 

#### Container placement

By managing how container components appear and disappear, container placement animations can better orient users. When triggered, containers move into place with purpose, creating a clear spatial relationship between a user's action and the result. 

This can be observed in the following components:

- [Drawer:](/components/drawer) Slide in from edge of screen
- [Menus:](/components/dropdown) Fade into position beside menu toggle

#### Expansion 

By guiding a user's focus, expansion animations make newly revealed information easier to process. When a user opens a section, a gentle fade and slide transition draws their eye to the content. The reverse occurs upon closing, creating an engaging and predictable interaction. 

This can be observed in the following components:

- [Accordion](/components/accordion) 
- [Dual list selector (with tree)](/components/dual-list-selector#with-tree) 
- [Expandable section](/components/expandable-section)  
- [Form (field groups)](/components/forms/form#field-groups)  
- [Navigation (expandable)](/components/navigation#expandable)  
- [Search input (expandable)](/components/search-input#with-expandable-button) 
- [Tree view](/components/tree-view) 
- Table (in beta): [Expandable table](/components/table#expandable) and [compound expandable table](/components/table#compound-expandable) 

#### Feedback

By responding to user input and system changes, feedback animations provide reassurance that the system is responding to their actions. This clarity reduces confusion, confirms the results of an action, and can signal what will happen next.

This can be observed in the following components:

##### Hover and clicks
 
These components have animations that are triggered by hover, clicks, and focus.
- [Buttons:](/components/button) Fill ripple on click
- Icon buttons:
    - [Favorite:](/components/button#favorite) Pulse and fill on click
    - [Hamburger menu:](/components/button#hamburger) Transform on click 
    - [Settings:](/components/button#settings) Rotate on hover
- [Menu toggles:](/components/menus/dropdown#basic-dropdowns) Border fade in on click
- [Tabs:](/components/tabs) Slide border on click

##### Validation

These components have animations that are triggered by errors in validated inputs. 
- [Forms (validated inputs)](/components/forms/form#validated) 
- [Menu toggle (status toggle)](/components/menus/menu-toggle#status-toggle)
- [Progress (with error)](/components/progress#helper-text)
- [Progress stepper (with error)](/components/progress-stepper#with-an-issue)

##### System changes

These components have animations that are triggered by system-level events. 
- [Alerts (within groups)](/components/alert#alert-group-examples) Slide and fade in/out
- [Notification badge:](/components/notification-badge#with-animation) Rotate icon 

#### Progression

By showing that a process is underway, progression animations manage user expectations during waiting periods and communicate that the system is working on a request. This feedback provides clarity that gives users confidence to wait for processes to complete.

- [Progress stepper (in process)](/components/progress-stepper/html#basic-in-process): Animated spinner 
- [Skeleton:](/components/skeleton) Gradient pulse

## Motion patterns

A **motion pattern** is a combination of tokens and properties that work together to solve common animation needs. These patterns help ensure that the behavior of a type of animation is consistent across similar use cases—even if different components are involved.

### Button ripple

Used within [feedback animations](#feedback), the "button ripple" pattern applies the appropriate clicked color in a ripple outward from the center of the button. This includes [all button variants](/components/button#variant-examples), with the exception of inline links. This pattern provides clear, tangible feedback that the button was successfully pressed, confirming the user's action.

### Error jiggle 

Used within [feedback animations](#feedback), the "error jiggle" pattern "jiggles" the animated component (and typically related helper text) from side to side as danger styles are applied. This pattern helps ensure that critical errors in a UI, which require correction, quickly catch users' attention. 

In reduced motion conditions, the related error helper text instead simply fades into view, rather than jiggling as well.  

### Expansion fade and slide

Used within [expansion animations](#feedback), the "fade and slide" pattern applies a fade-in and slide-in transition as hidden content sections are expanded in a component. A similar, reversed animation applies when expanded sections are collapsed. This pattern orients the user by creating a clear, smooth connection between their action and the newly revealed content.

In reduced motion conditions, the entire hidden section instead simply fades into view when expanded, rather than also sliding in.