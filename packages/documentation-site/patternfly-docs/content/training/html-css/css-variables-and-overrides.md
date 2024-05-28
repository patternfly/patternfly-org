---
id: HTML CSS variables and overrides training
section: training
hideNavItem: true
---
import { Button, ClipboardCopy, Divider, PageSection } from '@patternfly/react-core';

<PageSection variant="light">
# CSS variables and overrides
PatternFly Core is based on the principles of <a href="http://bradfrost.com/blog/post/atomic-web-design/" target="_blank">Atomic Design</a> and <a href="http://getbem.com/introduction/" target="_blank">BEM</a> (Block, Element, Modifier). BEM is a popular CSS methodology for building modular, scalable applications. It provides scope, avoids inheritance, and reduces CSS specificity and conflicts.

BEM works perfectly with a modular design system, as each unique component can be represented as an independent block. Since a block is tied to a component, developers are able to develop, move around, and nest components without conflicts in their application’s CSS.
PatternFly uses a modified version of BEM for its CSS architecture. PatternFly deviates from BEM in relation to modifiers.

This tutorial covers how PatternFly uses BEM as a framework for its component library. You'll learn how to override and create both global and component-level custom properties and component elements.
</PageSection>
<PageSection>
## Part 1: Overriding PatternFly component-level properties
In PatternFly, component-level custom properties follow this general formula:
`--pf-v6-c-block[__element][--modifier][--state][--breakpoint][--pseudo-element]--PropertyCamelCase.`
 - `--pf-v6-c-block` refers to the block, usually the component or layout name (for example, `--pf-v6-c-alert`).
 - `__element` refers to the element inside of the block (for example, `__title`).
 - `--modifier` refers to a modifier class such as `.pf-m-danger`, and is prefixed with `m-` in the component variable (for example`--m-danger`).
 - `--state` is something like hover or active.
 - `--breakpoint` is a media query breakpoint such as `sm` for `$pf-v6-global--breakpoint--sm`.
 - `--pseudo-element` is one of either `before` or `after`.
 - `PropertyCamelCase` refers to the property that is being changed.

To explore this concept, you can practice overriding the title color custom property in the success variation of the alert component using the provided CodeSandbox.

<Button variant="primary" component="a" href="https://codesandbox.io/s/html-fundamentals-start-hy2erg" target="_blank">Codesandbox - Part 1</Button>

### Step 1. Familiarize with `index.html`
Note the alert component in the `<body>` of `index.html`.

### Step 2. Create custom property name and styles
Write the CSS for the custom property name in the `style.css` file. Overriding the success variation’s title color means overriding its custom property.

#### Step 2.1 
In the `style.css` file, in the `.pf-v6-c-alert{}` block, write the custom property name.

In reference to the formula described in Part 1, this should be: `--pf-v6-c-alert`

#### Step 2.2 
Add the modifier to the custom property name. As displayed in the CSS variables of PatternFly's <a href="/components/alert/html#css-variables" target="_blank">alert component documentation</a>, the success variation modifier class `pf-m-success` applies to `pf-v6-c-alert`. Add that modifier to the custom property.

The custom property name should now be: `--pf-v6-c-alert--m-success`

#### Step 2.3 
Add the element to the custom property name. The element that is being changed is the title of the alert.

The custom property name should now be: `--pf-v6-c-alert--m-success__title`

#### Step 2.4 
Add the property that is being modified. In this case, modify the color property of the title in the alert component.

The custom property name should now be: `--pf-v6-c-alert--m-success__title--Color`

#### Step 2.5 
Define the value of the component-level CSS variable. PatternFly's global danger color is: `--pf-v6-global--danger-color--100`. You can reference PatternFly’s <a href="/design-foundations/colors" target="_blank">global colors documentation</a> for more information.

Assign the custom property name `(--pf-v6-c-alert--m-success__title--Color)` that is already inside the `.pf-v6-c-alert{}` block to the global danger color.

It should look like this: `--pf-v6-c-alert--m-success__title--Color: var(--pf-v6-global--danger-color--100);`

The resulting alert should match Figure 1.

**Figure 1**
<img src="../img/alert-red-title.png" alt="Alert component with a red title" width="868" />
</PageSection>
<Divider />
<PageSection>
## Part 2: Overriding PatternFly global properties
In PatternFly, global properties follow this general formula:
`--pf-v6-global--concept--PropertyCamelCase--modifier--state`

Global properties are prefixed with the word global.
 - A `concept` is something like a spacer or main-title.
 - A `PropertyCamelCase` is something like `BackgroundColor` or `FontSize`.
 - A `modifier` is something like `sm`, or `lg`.
 - A `state` is something like `hover` or `expanded`. They are concepts, never tied to an element or component. This is incorrect: `--pf-v6-global--h1--FontSize`. This is correct: `--pf-v6-global--FontSize--3xl`.

To explore this concept, override the global link color by setting it to the custom property for danger using the provided CodeSandbox for part 2. The `index.html` file contains a button and expandable component to demonstrate how changing a global variable has an impact across components.

<Button variant="primary" component="a" href="https://codesandbox.io/s/override-global-css-variables-start-llcub8" target="_blank">Codesandbox - Part 2</Button>

### Step 1. Familiarize with `index.html`
Note the button component and the expandable section component in the `<body>` of the `index.html` file.

### Step 2. Override a global custom property

#### Step 2.1 
Write the prefix for the global custom property in the `:root` block in the `styles.css` file. Since global custom properties are prefixed with the word global, use that for the beginning of the custom property.

It should look like this: `--pf-v6-global`

#### Step 2.2 
Add the concept to the global custom property. The concept for the link color is `link`.

The global custom property should now look like this: `--pf-v6-global--link`

#### Step 2.3 
Add the property to the global custom property. As the color is being modified, add the color property as the next step.

The global custom property should now look like: `--pf-v6-global--link--Color`

#### Step 2.4 
Define the value of the global variable. PatternFly's global danger color is: `--pf-v6-global--danger-color--100`.
Assign the custom property name `(--pf-v6-global--link--Color)` that is already inside of the `:root` block to the global danger color.

It should look like this: `--pf-v6-global--link--Color: var(--pf-v6-global--danger-color--100);`

The resulting UI in the CodeSandbox should match Figure 2. 

**Note:** The links in the button component and expandable component both have inherited the new red link color.

**Figure 2.**

<img src="../img/global-link-color-red.png" alt="An inline button and a 'show more' expandable section toggle both colored red" width="300" />
</PageSection>
<Divider />
<PageSection>
## Part 3: Create and use component level CSS variables to override PatternFly styles
It is important to understand how BEM is used to create and override variables.

To explore this concept, add a BEM element and custom styles with CSS custom properties to support a badge element in the label component using the provided CodeSandbox for part 3. Assume there is a common use case for adding a badge to the left of text in the label component. When adding the custom badge element to the label component, also apply a margin-right of 8px.

<Button variant="primary" component="a" href="https://codesandbox.io/s/creating-new-component-css-vars-start-t98i06" target="_blank">Codesandbox - Part 3</Button>

### Step 1. Familiarize with `index.html`
Note the label component in the `<body>` of the `index.html`. This label contains a badge component and some text. The default PatternFly label component only styles the label itself and the text inside. Since there has been a badge component passed into the label, it is necessary to add space between the badge and the text beside it.

To do this the BEM way, a BEM element class `(pf-v6-c-label__badge)` has been applied to the badge.

### Step 2. Style the badge
**Note:** Never apply a global custom property as the value for a property in a component's CSS.

#### Step 2.1 
Create a new variable to represent the badge's margin. Within style.css, in the `.pf-v6-c-label{}` block, define the beginning of the custom property, which is the name of the component.

It should look like: `--pf-v6-c-label`

#### Step 2.2 
Define the value of the new custom property. Add the element after the name of the component.

The custom property should now be: `--pf-v6-c-label__badge`

#### Step 2.3 
Add the property being applied to the badge after the element.

It should look like this: `--pf-v6-c-label__badge--MarginRight`

#### Step 2.4 
Define the value of the new custom CSS variable. PatternFly's global variable for 8px of space is `--pf-v6-global--spacer--sm`. You can reference <a href="/design-foundations/spacers" target="_blank">PatternFly’s documentation about spacers</a> for more information.

Assign the custom property name `--pf-v6-c-label__badge--MarginRight` that is already inside of the `.pf-v6-c-label{}` block to the global variable for 8px of space.

It should look like this: `--pf-v6-c-label__badge--MarginRight: var(--pf-v6-global--spacer--sm);`

#### Step 2.5
Assign the new custom property name to the property that is being overridden. Add a margin-right declaration inside of `.pf-v6-c-label__badge{}` and assign it to the new margin variable.

It should look like this: `margin-right: var(--pf-v6-c-label__badge--MarginRight);`

**Note:** Once the preview reloads, there should be space to the right of the badge.
</PageSection>
<Divider />
<PageSection>
## Part 4: Create and use global CSS variables to override PatternFly styles
To explore this concept, create a new global custom property for a 5xl font size. Use this new global property to make a new variation of the title component using the provided CodeSandbox for part 4.

Referencing <a href="/design-foundations/typography" target="_blank">PatternFly's typography design guidelines</a>, the largest font size PatternFly offers is a "super hero heading" size. It is 36px represented by the global variable `pf-v6-global--FontSize--4xl`. Assume that there is a need for a larger font size for the title component that is used across the entire application.

<Button variant="primary" component="a" href="https://codesandbox.io/s/creating-new-global-css-vars-start-cqb8nw" target="_blank">Codesandbox - Part 4</Button>

### Step 1. Familiarize with `index.html`
Note the title component in the `<body>` of the `index.html` file. It has a modifier class applied to it which has no PatternFly styles defined for it thus far.

### Step 2. Define a global custom property name
Follow the existing convention for global font size custom properties.

#### Step 2.1
Add the new custom property for font size inside of the `:root{}` block. This applies it to the global scope of the application. It should look like this: `--pf-v6-global--FontSize--5xl`

#### Step 2.2 
Define the value of the new global variable. Assign the property name to the pixel value for the new font size.
Update the line added in step 2.1 to be 42px.

It should look like this: `--pf-v6-global--FontSize--5xl: 42px;`

### Step 3. Create a local component level custom property
Create a local component level custom property in the `.pf-v6-c-title{}` block in the styles.css file. Set its value to the newly defined global property.
The local custom property should represent the 5xl variation's font size.

#### Step 3.1 
Beginning with the component name, write the custom property and add it to the `.pf-v6-c-title{}` block in the `style.css` file.

It should look like this: `--pf-v6-c-title`

#### Step 3.2 
Add the new modifier to the custom property name.

It should look like this: `--pf-v6-c-title--m-5xl`

#### Step 3.3 
Add the property that the custom property represents.

It should look like this: `--pf-v6-c-title--m-5xl--FontSize`

#### Step 3.4 
Define the value of the component level custom property to be equal to the newly defined global variable.

It should look like this: `--pf-v6-c-title--m-5xl--FontSize: var(--pf-v6-global--FontSize--5xl);`

### Step 4. Define the styles for the new 5xl variation.

#### Step 4.1 Chain selectors
Knowing that the modifier `.pf-m-5xl` will apply to the title component, in the CSS, chain the selector to create `.pf-v6-c-title.pf-m-5xl`
Add this block inside of `.pf-v6-c-title`, underneath the declaration from step 3.

```noLive
.pf-v6-c-title.pf-m-5xl {
  /* styles go here */
}
```

#### Step 4.2 
Create a declaration within the modifier block for the font-size CSS rule using the new component level custom property.

It should look like: `font-size: var(--pf-v6-c-title--m-5xl--FontSize);` inside of `.pf-m-5xl{}`.
</PageSection>
<Divider />
<PageSection>
### Compare your results.
A fully constructed card can be viewed and modified in the CodeSandbox solution for part 4. Compare your work with the solution.

<Button variant="primary" component="a" href="https://codesandbox.io/s/creating-new-global-css-vars-final-cugbq0?file=/style.css" target="_blank">Codesandbox - Part 4 Solution</Button>
</PageSection>
