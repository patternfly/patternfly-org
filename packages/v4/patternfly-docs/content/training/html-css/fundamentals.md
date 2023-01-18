---
id: HTML fundamentals training
section: training
hideNavItem: true
---

# Fundamentals

PatternFly Core is based on the principles of <a href="http://bradfrost.com/blog/post/atomic-web-design/" target="_blank">Atomic design</a> and <a href="http://getbem.com/introduction/" target="_blank">BEM</a> (Block, Element, Modifier).

Atomic design is a methodology for creating design systems. In Atomic Design user interfaces are broken down into reusable components that can be re-assembled to create reusable interaction patterns.
PatternFly consists of isolated and modular structures that fall into three categories:
- Components are modular and independent structures concerned with presentation
- Layouts allow for organizing and grouping their immediate children on the page
- Demos illustrate how to assemble complex structures with components and layouts only

## Components
In PatternFly, components which cannot be broken down into smaller parts are known as the basic building blocks of user interfaces. Examples include the button, label and badge components. <a href="https://codesandbox.io/s/html-fundamentals-start-hy2erg?file=/index.html" target="_blank">A codesandbox has been provided</a> to experiment with and follow the proceeding steps.

### Step 1. Add a button component.
In the `<body>` of the index.html file, add a button element, and apply the PatternFly styles to it so that it is a PatternFly button by adding the class `pf-c-button`. Apply the ‘primary’ styles to the button to make it a bright blue color by adding the `pf-m-primary` class to the button as well.

```noLive
<button class="pf-c-button pf-m-primary" type="button">
  Primary
</button>
```

**Note:** A simple component can be reused multiple times.

```noLive
<button class="pf-c-button pf-m-primary" type="button">
  Primary
</button>
<button class="pf-c-button pf-m-primary" type="button">
  Primary
</button>
```

### Step 2. Build more complex components
Simple components can be combined to make more complex components that are still reusable.
When simpler components are used within more complex components, the layout of the elements are defined in the stylesheet for the complex component.
In this step, add a badge component to the chip component.

#### Step 2.1 
To build a chip component replace the contents of the `<body>` in the index.html file with the following code snippet.

```noLive
<div class="pf-c-chip">
  <span class="pf-c-chip__text">
    Chip
  </span>
  <button class="pf-c-button pf-m-plain">
  <i class="fas fa-times"></i>
  </button>
</div>
```

This is the default chip component that already has another component in it: the button. This is why the chip can be considered as a more complex component.

#### Step 2.2
Add the badge inside the chip. To do this, add this block of code between pf-c-chip__text and pf-c-button.

```noLive
<span class="pf-c-badge pf-m-read">
  7
</span>
```

**Note:** Remember this is a component and not a demo because the chip component includes styles that handle how the badge looks within the chip. For example, when the badge component is added to the chip, it receives styling that gives it a margin. You can read more in the documentation here

The resulting Chip should match the following image.

<img src="../img/chip.png" alt="Example of a rendered and styled chip component" width="150" />

## Layouts
### Step 3. Add a bullseye layout
In PatternFly, layouts allow for organizing and grouping elements. This tutorial covers just one of the seven layouts.

#### Step 3.1 
Copy code into the `<body>` of the `index.html` file.
```noLive
<div>
  <div class="pf-c-card">
    <div class="pf-c-card__title">
      Title
    </div>
    <div class="pf-c-card__body">
      Body
    </div>
    <div class="pf-c-card__footer">
      Footer
    </div>
  </div>
</div>
```

#### Step 3.2 
Add the `pf-l-bullseye` class to the card. This will center the card horizontally and vertically on the page.
Find the outermost `<div>` wrapper for the card and add the class `pf-l-bullseye`.
It should look like: `<div class="pf-l-bullseye">`

**Note:** It’s important to follow the documentation for layouts because it demonstrates where to add the layout class. The <a href="/layouts/bullseye/html" target="_blank">documentation for bullseye</a> specifies to add the class `pf-l-bullseye` to the parent container of its child.

## Demos
Demos show how PatternFly’s components and layouts are put together to build more complex structures. Demos have no additional styling; they are strictly made from components and layouts. If styling is needed for a certain demo, then instead create new components or layouts, or variants of the components or layouts.

Create a form demo using components and layouts.

### Step 1. Add five form components.
Copy and paste this block of code five times in the index.html file.

```noLive
 <form class="pf-c-form">
    <div class="pf-c-form__group">
      <div class="pf-c-form__group-label">
        <label class="pf-c-form__label">
          <span class="pf-c-form__label-text">
            Form label
          </span>
        </label>
      </div>
      <div class="pf-c-form__group-control">
        <input class="pf-c-form-control"/>
      </div>
    </div>
 </form>
 ```

### Step 2. Apply a grid layout

#### Step 2.1 
Add one `<div>` wrapper around all five form components with the `pf-l-grid` layout class. It should look like this this:

```noLive
<div class="pf-l-grid">
  // Five form components are here
</div>
```

### Step 3. 
Wrap each form component in its own `pf-l-grid__item` layout class. To do this, look for each `pf-c-form` in `index.html` and wrap it in the `pf-l-grid__item` class.
The wrapper should look like this:

```noLive
<div class=”pf-l-grid__item”>
  // code for individual form component
</div>
```

### Step 4. Add the `pf-m-gutter` modifier class to the grid layout 
Adding the `pf-m-gutter` modifier class to the grid layout ensures there is equal spacing around all children.

Add the class `pf-m-gutter` after `pf-l-grid` to the outermost wrapper, inside the quotation marks.
It should look like: `<div class="pf-l-grid pf-m-gutter">`
**Note:** Learn how modifier classes work with layout classes by looking at <a href="/layouts/grid/html#usage" target="_blank">the grid documentation</a> on the PatternFly website.

### Step 5. Add modifier classes to the grid item classes.
This step modifies the number of columns that a grid item spans. The maximum number of columns that a grid item can span is 12 (which is equivalent to 100%).
#### Step 5.1 
Find each `pf-l-grid__item` that was added in step 3 and add the class `pf-m-[number from 1 - 12]`. The numbers across a row should add up to 12.

#### Step 5.2 
Add `pf-m-6-col` to the first two grid items and add `pf-m-4-col` to the last three grid items.

The first two grid items should look like: `<div class="pf-l-grid__item pf-m-6-col">`
The second two grid items should look like: `<div class="pf-l-grid__item pf-m-4-col">`

Compare your results.
A fully constructed demo can be viewed and modified in <a href="https://codesandbox.io/s/html-fundamentals-final-o7g08o?file=/index.html" target="_blank">this codesandbox solution</a>. Compare your work with the solution.

