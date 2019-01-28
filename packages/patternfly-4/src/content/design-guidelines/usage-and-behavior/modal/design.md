---
path: "/design-guidelines/usage-and-behavior/modal"
---
# Modal
Modals load and display important information without navigating away from the current page.

## Primary elements
![Modal](img/general-modal.png)
1. **Backdrop**
2. **Modal box**
3. **Title:** Concisely convey the purpose of the modal.
4. **Close**
5. **Content area**
6. **Buttons:** Action buttons should be right aligned. Make your primary action the right-most button.

## Components and demos used
The PatternFly components listed in the following sections can be used in a number of ways to suit specific needs or use-cases. We’ll explore several examples in this documentation.

**HTML/CSS components**
[Modal](/documentation/core/demos/modal), [Modalbox](/documentation/core/components/modalbox), [Button](/documentation/core/components/button)

Related CSS components: [Aboutmodal](/documentation/core/demos/aboutmodal), [Aboutmodalbox](/documentation/core/components/aboutmodalbox)

**React components**
[Modal](/documentation/react/components/modal), [Button](/documentation/react/components/button)

Related React components: [AboutModal](/documentation/react/components/aboutmodal)

## Usage
### When to use
Use a modal when information is critical and requires user input or attention.
Use modals to:
* Validate user decisions
* Report errors
* Provide the result of a task or state of an application
* Get required user input
* Show additional information in-context

### When not to use
Modals interrupt user task flow and should be avoided for any information that is not critical to user success.

### Content
* Clearly restate the action the user is trying to take and explicitly outline the consequences of that action.

* Provide buttons labels that make it simple for users to understand and confirm their choices. Use descriptive verbs that clearly indicate the consequence of a selection, like Delete, Save, or Create. Avoid vague labels like OK or Done.

* Use descriptive title and button labels so the user can scan  content and make a decision quickly. Ambiguous title and button labels make it more difficult for the user to understand their options and make a decision.

See our [content guidelines](/design-guidelines/content/) for additional guidance.
