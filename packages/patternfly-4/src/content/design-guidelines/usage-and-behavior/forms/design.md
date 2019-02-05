---
path: "/design-guidelines/usage-and-behavior/forms"
---
# Forms
A form is a group of elements used to collect information from a user. Forms can be presented to the user in a variety of contexts depending on the use case and scenario.

## Primary elements
Most forms will contain the following basic elements:

*Primary form elements*
![Primary form elements](img/form-elements.png)

1. [Labels](/design-guidelines/usage-and-behavior/data-input) - Field labels can be aligned to the left or top of the field depending on the layout of your page and the amount of space you have to work with. Learn more about field labels in the [text and data input design guidelines](/design-guidelines/usage-and-behavior/data-input).

  *Aligned to the top*
  ![Aligned to the top](img/top-aligned.png)

  *Aligned to the left*
  ![Aligned to the left](img/left-aligned.png)

2. [Text field](/design-guidelines/usage-and-behavior/data-input) - provides an area for users to input free-form text.

3. [Data input](/design-guidelines/usage-and-behavior/data-input) - provides a way for users to submit any information that is not free-form text. For example, you might use a check box to enable users to select from multiple predetermined values or a radio button to enable users to select one value from a list of several values. Input components are designed for specific use cases. Learn more about data input variations in the [text and data input design guidelines](/design-guidelines/usage-and-behavior/data-input).

4. [Help](#Provide-the-right-kind-of-help) - provides assistance in any area where the user might need additional information or context to provide the right input
    * Field level help - provides content in a popover.
    * Input help - provides help in or directly below a field.
        * Helper text
        * Syntax hints

5. [Validation and errors](#Provide-validation-and-errors) - ensures that the correct information is collected before the form can be submitted to the system.

6. Action buttons - enables a user to submit or exit a form. Button placement depends on the type of form you're presenting to the user.

  When using forms in a modal, align buttons to the right edge of the input field. Place the primary button on the far right and the secondary button to the left.

  *Buttons on a modal*
  ![Buttons on a modal](img/modal-button.png)

  When using full page forms, align buttons to the left, placing the primary button on the left and secondary on the right.

  *Buttons on a full page form*
  ![Buttons on a full page](img/fullpage-button.png)

## Components and demos used
The PatternFly components listed can be used in a number of ways to build forms to suit specific needs or use-cases.

**HTML/CSS components**
[Form](/documentation/core/components/form), [Button](/documentation/core/components/button), [Check](/documentation/core/components/check), [Content](/documentation/core/components/content), [Dropdown](/documentation/core/components/dropdown), [Formcontrol](/documentation/core/components/formcontrol), [Inputgroup](/documentation/core/components/inputgroup), [Popover](/documentation/core/components/popover), [Progress](/documentation/core/components/progress), [Switch](/documentation/core/components/switch), [Tooltip](/documentation/core/components/tooltip)

**React components**
[Form](/documentation/react/components/form), [Button](/documentation/react/components/button), [Checkbox](documentation/react/components/checkbox), [Dropdown](/documentation/react/components/dropdown), [Progress](/documentation/react/components/progress), [Radio](/documentation/react/components/radio), [Select](/documentation/react/components/select), [Switch](/documentation/react/components/switch), [TextArea](/documentation/react/components/textarea), [Text](/documentation/react/components/text), [Popover](/documentation/react/components/popover), [TextInput](/documentation/react/components/textinput), [Tooltip](/documentation/react/components/tooltip)

## Usage
There's a lot to think about when you're building a form, and there's no one-size-fits-all solution. These usage guidelines are here to help you use the right combination of elements and content to gather the information you need from your users.

### Provide the right data input
PatternFly provides a variety of components that enable a user to make a simple selection. Each component was created to serve a specific use case. For example, you might need to allow your user to select one or more items from a list, but should you use a checkbox or a multi-select dropdown? It depends on the number of items your user needs to choose from.    

Learn more about data input in the [text and data input design guidelines](/design-guidelines/usage-and-behavior/data-input).

### Provide the right kind of help
There are a few different ways to provide help on forms. The type of help you choose will depend on the content you need to relay to your user.  

**Field level help**
Use field level help to provide additional context to a text or input field. Field level help is denoted by the information icon and displayed in a popover on a click.

*Field level help example*
![Field level help](img/field-level-help.png)

**DO**
* Use field level help wherever any field needs additional background or explanation.
* Keep descriptions as concise as possible.

**DON'T**
* Don’t use field level help to compensate for bad design or rely on it to explain a graphic or word choice.
* **Never** hide critical information in a popover. Don’t put any information into a popover that a user will always need to complete their task.

**Helper text**
Helper text is text below a form field that helps a user provide the right information, like “Provide a unique name.” Use helper text for information that a user needs to know in order to enter the correct information. For context or background information that is “nice to have,” use field level help in a popover.

*Helper text example*
![Helper text](img/helpertext.png)

**DO**
* Keep helper text concise while providing enough information to enable a user to complete their task.
* Use helper text to provide critical information that is secondary to the field label.
* Limit the use of helper text to avoid overwhelming the user.

**DON'T**
* Try to avoid helper text that exceeds the length of the input area.
* **Never** use helper text as a replacement for form field labels.

**Syntax hints**
A syntax hint provides an example of the required or recommended format for data input.

For example, a syntax hint for a date might be _DD/MM/YYYY_.

Use syntax hints when the requested data type might be unfamiliar or the field requires the user to provide data in a specific format.

*Syntax hint example*
![Syntax hint](img/syntax-hint.png)

**DO**
* Only use syntax hints for text input fields.
* Keep hints concise; never extend the length of the text field.
* Limit the use of syntax hints to avoid overwhelming the user.

**DON'T**
* Don’t use syntax hints for complex and lengthy requirements like password requirements. Instead, use field level help.
* Don’t provide syntax hints when they are not necessary.
* **Never** use syntax hints as a replacement for form field labels.

### Provide validation and errors
When a form field submission results in an error, let users know as soon as possible. Always present error states on the form, and use inline errors whenever possible. The error state you can use will depend on whether validation happens on the client or the server.

**Client-side validation**
Client-side validation can be performed as soon as a field loses focus, and allows you to use inline validation to alert users of errors or issues immediately. This type of validation allows users to quickly see and address issues, but can become frustrating or overwhelming if overused.

Some common use cases include:
* A user entering data in an invalid formats
* A user leaving a required field blank
* A user leaving a required field incomplete

> Note: Inline error messages replace any existing helper text.

**Server-side validation**
Server-side validation is performed when the user attempts to submit a form. In this scenario, the user completes the form in its entirety and the page is reloaded with any errors detected.

For server-side validation, use an inline alert along with inline errors wherever possible to make it simple for the user to quickly identify areas that need to be fixed.

Notification messages should describe the error and help users solve the problem.

*Validation example*
![Validation](img/validation-example.png)

### Use progressive disclosure
Use progressive disclosure to hide and show fields based on the users’ selection. This approach keeps the workflow short and allows the user to focus on only the fields relevant to them. It also avoids using color to indicate whether or not a field is available, making it suitable for colorblind users.

*Progressive disclosure example*
![Progressive disclosure](img/progressive-disclosure.png)

### Using forms in your designs
**In a card**
![Card example](img/card-example.png)

**In a modal**
![Modal example](img/modal-example.png)

**As a wizard**
![Wizard](img/wizard-example.png)

> Note: For buttons on wizards, follow modal standards. Align buttons to the right. Place the primary button on the far right and the secondary button to the left.  

### Content
Think of a form as a conversation between your application and your user. Apply the following principles to organize and craft content for your forms:

**Focus on the task and context**
Make sure you are clear about what the user is trying to accomplish with this form and how your users are thinking about the task they’re trying to complete.

* What are they trying to achieve?  
* What kinds of questions will they have?
* Where might they get stuck?

Start by writing out the conversation you might have with someone if you were guiding them through the task. This exercise can help you organize your form, name your fields appropriately, better understand the context of the task, and write in a more natural way.

**Use your understanding of context to plan your content hierarchy:**

* **Include the most critical information in the field label.** Answer the most basic question first: what data do I need to provide here? The field label you choose will depend on the context of your form. For example, is it enough to request a name, or do you need to specify first name, last name, and middle initial?

* **Include critical secondary information as helper text.** Critical secondary information is information a user must have in order to provide the right input. For example, a user creating a name for a new asset may need to specify a unique name for that asset. Letting the user know this up front helps avoid unnecessary errors.

* **Include background information/context as field-level help in a popover.**
For example, you could use this type of help to define an unfamiliar term or concept that a novice user might not be familiar with. **Never hide critical information in a popover.**

* **Use natural language**
Again, think of a form as a conversation with your user. No one wants to have a conversation with a robot.

See our [content guidelines](/design-guidelines/content/) for additional guidance.
