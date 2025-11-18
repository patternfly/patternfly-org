---
id: Motion
section: foundations-and-styles
source: development-guide
---

## Enabling opt-in animations

We try to support animations by default in our components, but&mdash;to avoid introducing breaking changes&mdash;some animations require you to manually opt in. Opt-in animations require additional updates to your codebase and, depending on your testing setup, could cause test failures if not configured appropriately.

The following components contain opt-in animations, with links to examples for proper implementation:

- [Alert (within alert groups)](/components/alert/#dynamic-alert-groups) 
- [Dual list selector (with tree)](/components/dual-list-selector#with-tree)
- [Form field groups](/components/forms/form/#field-groups) 
- [Navigation (expandable)](/components/navigation#expandable)  
- [Notification badge](/components/notification-badge/#with-animation)
- [Search input (expandable)](/components/search-input#with-expandable-button)
- [Table (expandable)](/components/table/#expandable) (in beta)
- [Table (compound expandable)](/components/table/#compound-expandable) (in beta)
- [Tabs (HTML-only implementations)](/components/tabs#animate-current-tab-accent)
- [Tree view (all examples)](/components/tree-view/)

**Note:** In some edge cases, resource-intensive pages can cause browser memory issues where animations fail to run correctly. For example, animated spinners are particularly memory intensive, so a page with multiple spinners might consume too much memory and disable all animations. 

### Bulk-enabling animations

We offer the [enable-animations codemod](https://github.com/patternfly/pf-codemods/tree/main/packages/eslint-plugin-pf-codemods/src/rules/v6/enableAnimations) that automatically adds the `hasAnimations` prop to components that require opt-in. 

Be aware that, depending on your codebase, this codemod could introduce breaking changes that require further attention. When you run the codemod you will be asked whether to opt into animations only for the [@patternfly/react-core](https://www.npmjs.com/package/@patternfly/react-core) package or for [@patternfly/react-table](https://www.npmjs.com/package/@patternfly/react-table) as well.

To enable opt-in animations run the following command:

`npx @patternfly/pf-codemods --only enable-animations /path-to-src`

### Global animation control

The `AnimationsProvider` is a React context provider that gives you global control over animation behavior in your application. Using it allows you to centrally manage animations across all PatternFly components in your codebase, making it easy to disable them for users who prefer reduced motion or to optimize performance. 

#### Recommended setup and usage

Place the `AnimationsProvider` at the root of your application to provide global animation configuration for all PatternFly components, either passing in `hasAnimations: true` or `hasAnimations: false`:

```tsx
// App.tsx or index.tsx
import React from 'react';
import { AnimationsProvider } from '@patternfly/react-core';
import { MyApplication } from './MyApplication';

const App: React.FunctionComponent = () => {
  return (
    <AnimationsProvider config={{ hasAnimations: true }}>
      <MyApplication />
    </AnimationsProvider>
  );
};

export default App;
```

#### Component overrides

When using the `AnimationsProvider`, you can still pass `hasAnimations` directly to a component to override the global setting of `true` or `false`. For example: `<AlertGroup isToast hasAnimations={false}>` will override a global setting of `true`.

You can also wrap components with the `AnimationsProvider` and control animations there:

```tsx
<AnimationsProvider config={{ hasAnimations: false }}>
  <AlertGroup isToast>
    {criticalAlerts.map(alert => (
      <Alert key={alert.id} title={alert.title} variant={alert.variant} />
    ))}
  </AlertGroup>
</AnimationsProvider>
```

#### Conditional animations 

You can enable animations conditionally, based on user preferences or system settings:

```tsx
// App.tsx - Respect user's motion preferences
import React from 'react';
import { AnimationsProvider } from '@patternfly/react-core';
import { MyApplication } from './MyApplication';

const App: React.FunctionComponent = () => {
  // Respect user's reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <AnimationsProvider config={{ hasAnimations: !prefersReducedMotion }}>
      <MyApplication />
    </AnimationsProvider>
  );
};
```

## Custom motion 

For some scenarios, like creating a new [PatternFly extension](/extensions/overview), you might need to implement custom motion behavior. When creating a new animation, ensure the following:
- There is no existing support for the animation.
- The animation adheres to our motion principles and respects [`prefers-reduced-motion` settings.](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
- Your implementation uses appropriate semantic motion tokens, as detailed in the following section. 

## Motion tokens

PatternFly component animations are created using design tokens that specify duration, delay, and timing. We implement motion by using semantic tokens, which are built off of base tokens. Semantic motion tokens begin with `--pf-t--global--motion--`

When implementing custom motion, you should [familiarize yourself with our token system](/foundations-and-styles/design-tokens/overview) and [use the motion tokens outlined in our documentation.](/foundations-and-styles/design-tokens/all-design-tokens)

### Duration 
Duration tokens specify the length of time that different animation should take to complete. We offer predefined duration tokens based on each type of animation.

| **Animation** | **Description** | **Tokens** |
| --- | --- | --- | 
| Slide-out | Moves an element out of the viewport. | `--pf-t--global--motion--duration--slide-out--short`<br /><br />`--pf-t--global--motion--duration--slide-out--default`<br /><br />`--pf-t--global--motion--duration--slide-out--long` |
| Slide-in | Moves an element into the viewport from offscreen. | `--pf-t--global--motion--duration--slide-in--short`<br /><br />`--pf-t--global--motion--duration--slide-in--default`<br /><br />`--pf-t--global--motion--duration--slide-in--long`  |
| Fade | Applies a gradual transition to an element.  | `--pf-t--global--motion--duration--fade--short` <br /><br/> `--pf-t--global--motion--duration--fade--default`<br /><br/> `--pf-t--global--motion--duration--fade--long` |
| Icon | Applies transitions to icons. | `--pf-t--global--motion--duration--icon--short` <br /><br/> `--pf-t--global--motion--duration--icon--default`<br /><br/> `--pf-t--global--motion--duration--icon--long`  |
<br />

### Delay 
Delay tokens specify the length of time that should pass before an animation begins, including "none", "short", "default", and "long".

| **Token** | **Value** | 
| --- | --- |
| `--pf-t--global--motion--delay--none` | 0ms |
| `--pf-t--global--motion--delay--short` | 50ms |
| `--pf-t--global--motion--delay--default` | 100ms |
| `--pf-t--global--motion--delay--long` | 7000ms |
<br />

### Timing 
Timing tokens specify the easing path that an animation takes, defined as [cubic Bezier curves,](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function#cubic_b%C3%A9zier_easing_function) that indicate the start and end points of a curve, as well as the initial and final times and states. 

| **Timing function** | **Description** | **Token** | **Value** | 
| --- | --- | --- | --- |
| Accelerate | Starts slowly and accelerates gradually until the end. Equivalent to an "ease-in" transition. | `--pf-t--global--motion-timing-function--accelerate` | cubic-bezier(.4, 0, .7, .2)
| Default | Starts slow, speeds up and slows down at the end. Equivalent to an "ease-in-out" transition.| `--pf-t--global--motion-timing-function--default` | cubic-bezier(.4, 0, .2, 1)
| Decelerate | Starts quickly and decelerates gradually until the end. Equivalent to an "ease-out" transition. |  `--pf-t--global--motion-timing-function--decelerate` | cubic-bezier(0, 0, .2, 1)

## Testing reduced motion 

You can manually test for reduced motion in 2 ways:

1. In your browser:
    - [Chrome](https://developer.chrome.com/docs/devtools/rendering/emulate-css#emulate_css_media_feature_prefers-reduced-motion)
    - [Firefox](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) 
    - [Safari](https://developer.apple.com/documentation/webkitjs/internalsettings/2871002-forcedprefersreducedmotionaccess/)

1. In your OS:
    - **macOS:** Go to **System Settings** > **Accessibility** > **Display** and enable "Reduce motion".
    - **Windows 10:** Go to **Settings** > **Ease of Access** > **Display** and turn off "Show animations in Windows".
    - **Windows 11:** Go to **Settings** > **Accessibility** > **Visual Effects** and toggle "Animation Effects" off. 