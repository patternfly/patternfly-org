---
id: Number input
section: components
---

import '../components.css';

## Elements

<div class="ws-docs-content-img">
![Number input elements](./img/number_input_anatomy.svg)
</div>

1. **Label:** Indicates what value the user should input in the numeric field.
2. **Input field:** Area for the user to type in their numeric input.
3. **Buttons:** Increase or decrease the value by set increments.
4. **Helper text (optional):** Explains or provides additional context that helps the user provide the right information.
5. **Unit (optional):** Provides a unit symbol for the value in the input field, when applicable. 

## Usage
### When to use
* Users need a quick and precise way to adjust values within defined parameters.
* Users need to make small incremental changes that require few clicks.
* You need to bypass device limitations, such as keyboardless interactions and form submissions on mobile.

### When not to use
* The numeric value range is infinite.
* The numeric value can be either a fractional or whole number.
* The numeric value required is not part of a range, or is arbitrary. In this use case, use an <a href="https://v4-archive.patternfly.org/v4/components/input-group/">input group</a> instead.
* There is not enough space in the UI to account for the interaction between the input field and the buttons.

### Best practices
* Display a default numeric value in the input field that users can modify by typing directly into the input field or scale using the increase or decrease buttons.
* Keep labels concise and specific to effectively communicate what value the user should enter into the input field.
* Determine an increment size relative to your specific value range. Scale your increment size to accommodate for the types of values users will input in context.
For example: If your range is from 0-10, have increments of 1, but if your range is from 0-100, have increments of 10.
* Include unit symbols to the right of the text input and increase button, depending on your use case. Always use a unit's standard abbreviation or symbol. For a list of recommended symbols, see our [Units and symbols page](/content-design/grammar/units-and-symbols).

<div class="ws-docs-content-img">
![Number input states](./img/number_input_states.svg)
</div>

## Variations
Number inputs can function in one of two ways:

1. **Default:** Buttons increase and decrease the numeric value within a given range.
2. **With thresholds:** Buttons are disabled when the user reaches a certain threshold within a given range.

### Default
A default number input allows users to input and modify a numeric value without thresholds. Use this variation when any value within your number input’s range is valid for your use case (for example, providing the number of storage drives associated with their computer or reporting their storage capacity).

### With thresholds
A number input with thresholds disables each button when a user’s numeric input passes a certain threshold. Use number inputs with thresholds to add maximum or minimum restrictions to user inputted values. 

When adding thresholds to a number input, be sure to inform users with text to minimize their risk for input errors. If a number input for the number of storage drives has a maximum input value of 20, communicate this limit in helper text: <i>Maximum capacity 20</i>.

<div class="ws-docs-content-img">
![Number input with threshold](./img/with_threshold.svg)
</div>

## Accessibility
Consider the following guidance to ensure that your number input is <a href="https://www.section508.gov/">508 compliant</a>:

* Use clear and descriptive labels for each button and fields. Specific language makes it easier for users with assistive technology to understand the required value.
* Include error validation messages to guide users who enter values incorrectly. For more information about writing effective error messages, see our [content design style guide](/content-design/writing-guides/error-messages).

For more in-depth accessibility guidance, see the <a href="https://v4-archive.patternfly.org/v4/components/accordion/design-guidelines/#accessibility">PatternFly accessibility guide</a>.
