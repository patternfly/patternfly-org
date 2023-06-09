---
id: Release highlights
title: Release highlights
section: get-started
---

import './get-started.css';

# 2023.06
[View full details for this release on GitHub](https://github.com/patternfly/patternfly-react/releases).

## Highlights 

To upgrade your codebase to align with this release, [refer to our upgrade guide](/get-started/upgrade).

### Dark theme support
We are excited to officially support a dark theme on PatternFly. Not only  can you enable dark theme in your products; the PatternFly site can also be now be toggled from light to dark. 

We've updated all of our color variables to ensure that your product is beautiful

There are a couple of ways to enable dark theme in your products. You can: 

1. Add `patternfly-theme-dark.css` to a page and add the `.pf-theme-dark` class to the page's `<html>` element, or 
2. Apply the `.pf-theme-dark` class to the browser's `prefers-color-scheme` media query. 

### React 18
We now support the latest version of React, which was released last year. 

### Versioned CSS variables and class names
We've updated our CSS variables and class names so that they are explicitly associated with the version of PatternFly that they align to. 

For more details, refer to [our upgrade guide](/get-started/upgrade#review-and-update-variable-and-class-names) and our [updated CSS classes and variables](developer-resources/global-css-variables) documentation.

## Most impactful changes
This section highlights the most impactful changes that were made to our React and HTML libraries. For a full, detailed list of changes, refer to [our upgrade guide.](/get-started/upgrade)

### Event handler 

Per customer request, and to meet industry standards, we’ve updated all callback signatures for component event handling properties so that the event is the first parameter. This change will make it easier to incorporate third party libraries, especially in the case of form building tools such as Formik.

Our [Codemods](/get-started/upgrade#run-our-codemods) should take care of most of these changes, but if your callback function is defined at the class level you will neeed to manually update your code.

### Icons

We are no longer using inline styles, color, or size for icons. Now, React icons come with a built in class `pf-v5-svg`, which gives an icon a default height, width, and color.

If you want a custom color or size, wrap your icon in the `Icon` React component, which comes with colors, size, etc.

**Link to updated readme with instructions on how to override CSS if not using React Icon component.
**

### Deprecated components 
We've deprecated some of our React components, which required heavy and rigid implementation processes. Our recommendations and replacements offer more versatile methods for implementing and utilizing each component. 

The following table outlines the components that we deprecated, as well as the component(s) that we recommend using as a replacement.  

| Component  | Recommended replacement  |
| --- | --- |
| Application launcher  | Dropdown, select (new) |
| Context selector  | Menu   |
|  Dropdown |  Dropdown (new)  |
| Options menu  |  Dropdown (new), select (new) |
| `PageHeader`, `PageHeaderTools`, `PageHeaderToolsGroup`, `PageHeaderToolsItem`,  | Masthead   |
| Select  | Select (new)   |
|  Table | Table (new) |
| Wizard | Wizard (new) |

### **Helper text**

Previously, a few components utilized `helperText` properties to provide users with context regarding field inputs. Now, you will need to use the helper text component to provide this context for the following components:

- [Form](/get-started/upgrade#form)
- [Date picker](/get-started/upgrade#date-picker)
- [Time picker](/get-started/upgrade#time-picker)

### **Components**

#### **Card**

We've made a couple of adjustments to improve the implementation of our card component. [View more details in our upgrade guide](/get-started/upgrade#card).

- Card header

    **Core** 
    - `.pf-c-card__header-main` is now required when there is a `.pf-c-card__header`. 

    **React**
    - `CardHeaderMain` and `CardActions` components should now be rendered directly within `CardHeader`.
    

- Clickable/selectable cards

    **React** 

    - We now offer a new implementation of clickable and selectable cards. 
    - The following properties were deprecated as a result of this change: 
        - `isSelectableRaised`
        - `isDisabledRaised`
        - `hasSelectableInput`
        - `selectableInputAriaLabel`
        - `onSelectableInputChange`


#### **Input group**

**React** 
    
Input group items no longer automatically fill the available space of their container. The new `InputGroupItem` component may need to have the `isFill`, `isBox`, and/or `isPlain` properties adjusted to retain previous styling. This is likely necessary for `FormSelect`, `TextInput`, `Select`, and `TextArea`, which may particularly require the `isFill` property to be passed to `InputGroupItem`.


#### **Empty state**