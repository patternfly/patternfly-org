---
id: Motion
section: design-foundations
source: development-guide
---

## Opt-in animations

We try to support animations by default in our components, but&mdash;to avoid introducing breaking changes&mdash;some animations require you to manually opt in. In order to function properly, opt-in animations require additional updates to your codebase. Depending on how your testing is set up, opt-in animation could cause test failures, so you must manually configure them appropriately.

The following components contain opt-in animations. To understand the opt-in implementation, view the linked example code.

- Alert (within alert groups): [Example](/components/alert/#dynamic-alert-groups) 
- Dual list selector (with tree): [Example](/components/dual-list-selector#with-tree)
- Form field groups: [Example](/components/forms/form/#field-groups) 
- Navigation (expandable): [Example](/components/navigation#expandable)  
- Notification badge: [Example](/components/notification-badge/#with-animation)
- Search input (expandable): [Example](/components/search-input#with-expandable-button)
- Table (expandable): [Example](/components/table/#expandable)
- Table (compound expandable): [Example](/components/table/#compound-expandable)
- Tabs (HTML-only implementations): [Example](/components/tabs#animate-current-tab-accent)
- Tree view: [Example](/components/tree-view/) (all examples) 

### enable-animations codemod

We have also created an [enable-animations codemod](https://github.com/patternfly/pf-codemods/tree/main/packages/eslint-plugin-pf-codemods/src/rules/v6/enableAnimations), which adds the `hasAnimations` prop to components that require opt-in animations. Keep in mind that, depending on your codebase, this codemod could introduce breaking changes that require further attention.

To enable the optional animations run the following command:

`npx @patternfly/pf-codemods --only enable-animations /path-to-src`

## Custom motion 

For some scenarios, like creating a new [PatternFly extension](/extensions/about-extensions), you may need to implement custom motion behavior that doesn't already exist in PatternFly components. When you're creating a new animation, make sure that:
- There is no existing support for the animation.
- The animation adheres to our motion principles and respects users' [`prefers-reduced-motion` settings.](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
- Your implementation uses appropriate semantic motion tokens, as detailed in the following section. 

## Motion tokens

PatternFly component animations are created using design tokens that cover the different elements of an animation, including duration, delay, and timing. Like we do with color tokens, we implement motion by using semantic tokens, which are built off of base tokens. Motion tokens begin with `--pf-t--global--motion--`

You can [search for motion tokens here.](/tokens/all-patternfly-tokens)

If you aren't familiar with our token system, [refer to this overview](/tokens/about-tokens).

### Duration 
Duration tokens specify the length of time that different animation should take to complete. There are predefined duration tokens based on the type of animation, shown in the following table;

| **Animation** | **Description** | **Tokens** |
| --- | --- | --- | 
| Slide-out | Moves an element out of the viewport. | `--pf-t--global--motion--duration--slide-out--short`<br /><br />`--pf-t--global--motion--duration--slide-out--default`<br /><br />`--pf-t--global--motion--duration--slide-out--long` |
| Slide-in | Moves an element into the viewport from offscreen. | `--pf-t--global--motion--duration--slide-in--short`<br /><br />`--pf-t--global--motion--duration--slide-in--default`<br /><br />`--pf-t--global--motion--duration--slide-in--long`  |
| Fade | Applies a gradual transition to an element.  | `--pf-t--global--motion--duration--fade--short` <br /><br/> `--pf-t--global--motion--duration--fade--default`<br /><br/> `--pf-t--global--motion--duration--fade--long` |
| Icon | Applies transitions to icons. | `--pf-t--global--motion--duration--icon--short` <br /><br/> `--pf-t--global--motion--duration--icon--default`<br /><br/> `--pf-t--global--motion--duration--icon--long`  |
<br />

### Delay 
Delay tokens specify the length of time that should pass before an animation begins. Delay options include none, short, default, and long.

| **Token** | **Value** | 
| --- | --- |
| `--pf-t--global--motion--delay--none` | 0ms |
| `--pf-t--global--motion--delay--short` | 50ms |
| `--pf-t--global--motion--delay--default` | 100ms |
| `--pf-t--global--motion--delay--long` | 7000ms |
<br />

### Timing 
Timing-function tokens specify the easing path that an animation takes. These paths are defined by [cubic Bezier curves,](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function#cubic_b%C3%A9zier_easing_function) which define the start and end points of a curve, as well as its initial and final times and states. 

The available options for timing are described in the following table:

| **Timing function** | **Description** | **Token** | **Value** | 
| --- | --- | --- | --- |
| Accelerate | Starts slowly and accelerates gradually until the end. Equivalent to an "ease-in" transition. | `--pf-t--global--motion-timing-function--accelerate` | cubic-bezier(.4, 0, .7, .2)
| Default | Starts slow, speeds up and slows down at the end. Equivalent to an "ease-in-out" transition.| `--pf-t--global--motion-timing-function--default` | cubic-bezier(.4, 0, .2, 1)
| Decelerate | Starts quickly and decelerates gradually until the end. Equivalent to an "ease-out" transition. |  `--pf-t--global--motion-timing-function--decelerate` | cubic-bezier(0, 0, .2, 1)

## Testing reduced motion 

You can manually test for reduced motion in 2 primary ways:

1. In your browser:
    - [Chrome](https://developer.chrome.com/docs/devtools/rendering/emulate-css#emulate_css_media_feature_prefers-reduced-motion)
    - [Firefox](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) 
    - [Safari](https://developer.apple.com/documentation/webkitjs/internalsettings/2871002-forcedprefersreducedmotionaccess/)

1. In your OS:
    - **macOS:** Go to **System Settings** > **Accessibility** > **Display** and enable "Reduce motion".
    - **Windows 10:** Go to **Settings** > **Ease of Access** > **Display** and turn off "Show animations in Windows".
    - **Windows 11:** Go to **Settings** > **Accessibility** > **Visual Effects** and toggle "Animation Effects" off. 