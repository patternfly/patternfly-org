---
id: Compass
section: AI
source: guide
subsection: Generative UIs
---

When building a layout for generative UIs using the Compass components, there are several common patterns that may be implemented using Patternfly components and component variants.

### Compass structure

#### Containers & glass theme
The glass look and feel is an opt-in global styling applied when `pf-v6-theme-glass` is present on the `html` element class list, similar to dark theme. For compass layouts, content that has the glass background and rounded borders should be wrapped in a `CompassPanel` (and some compass components will do this automatically). This component has various options to customize its own padding and behavior to fit the context of its usage, and so is present in nearly every area of a compass page. `CompassPanels` should not be directly nested if the glass theme is applied to prevent styling issues.

#### Header
A compass layout header will typically be constructed using a `CompassHeader` component, which constructs three sections: logo, nav, and profile. These sections may be passed any content, but here are some recommendations when building a compass layout:
- The logo should contain a `Brand` or other logo image or svg. 
- The profile should contain a `Dropdown` with a user `Avatar` within the `MenuToggle`.
- The nav should contain a `CompassNavContent` component, which usually contains `CompassNavHome`, `CompassNavMain`, and `CompassNavSearch` components as shown below in a snippet. `CompassNavHome` and `CompassNavSearch` are opinionated components that will automatically provide a home and search button, and are optional. `CompassNavMain` will usually contain a `Tabs` component with the `isNav` flag to enable a top-level navigation type of styling. 

```
<CompassNavContent>
  <CompassNavHome onClick={() => console.log('Home')} />
  <CompassNavMain>
    <Tabs isNav />
  </CompassNavMain>
  <CompassNavSearch onClick={() => console.log('Search')} />
</CompassNavContent>
```

#### Sidebars
There are two sidebars in a compass layout at the start and end of the page. There is no specific `Compass` helper component for these sections, and so usually a `CompassPanel` containing an `ActionList` with the `isVertical` flag will be passed to represent the side navigations.

#### Footer
There are two methods of adding a footer to a compass layout. In either case, a footer's content will remain the same and will usually consist of a `@patternfly/chatbot` `MessageBar`, wrapped by a `CompassPanel` and `CompassMessageBar` component, as shown below:

```
 <CompassMessageBar>
  <CompassPanel isPill hasNoPadding hasNoBorder>
    <MessageBar />
    <div aria-live="polite" className="pf-v6-screen-reader">
      // aria anouncments for message bar's state updates
    </div>
  </CompassPanel>
</CompassMessageBar>
```

In the first method of adding a footer, pass this content to the `footer` prop of the `Compass` component. This type of footer will extend the entire width of the viewport. However, if the footer content is expected to change in height (such as when MessageBar content expands), the sidebars will adjust their positioning. If this behavior is not desired, please use the second method and forego passing the `footer` prop.

For the second method of adding a footer, wrap the content in `CompassMainFooter` and pass it as part of the `main` content of the `Compass`. This will allow the sidebars to extend through to the bottom of the viewport and prevents them from resizing based on changing footer content height.

#### Main content
The main content, taking up the center of viewport, will typically consist of a `Hero` or `CompassMainHeader`, a `CompassContent`, and an optional `CompassMainFooter`. 

A typical compass page will consist of a `CompassMainHeader` and `CompassContent` with a `CompassPanel` child, and content of the page should go inside of this `CompassPanel`.

When making a dashboard view, use a `Hero` instead of a `CompassMainHeader`. And instead of having a single `CompassPanel` within a `CompassContent`, each individual dashbaord item should be wrapped in a `CompassPanel`. For example, in a dashboard that has many content cards, each `Card` (with `isPlain` flag) is wrapped by a `CompassPanel` inside of a `Grid`.

### CSS

PatternFly's token system allows additional customization of the look and feel of a compass layout.
For example, the following css mixin utilizes several global token overrides to better match the Red Hat Design System look and feel.

```
@mixin pf-v6-tokens {
    // brand tokens
    --pf-t--global--color--brand--100: var(--pf-t--color--red--40);
    --pf-t--global--color--brand--200: var(--pf-t--color--red--50);
    --pf-t--global--color--brand--300: var(--pf-t--color--red--60);
    --pf-t--global--color--brand--400: var(--pf-t--color--red--70);
    --pf-t--global--color--brand--500: var(--pf-t--color--red--80);

    // dark brand tokens
    --pf-t--global--dark--color--brand--100: var(--pf-t--color--red--30);
    --pf-t--global--dark--color--brand--200: var(--pf-t--color--red--20);
    --pf-t--global--dark--color--brand--300: var(--pf-t--color--red--10);
  
    // font size
    --pf-t--global--font--size--900: 2.5rem;
    --pf-t--global--font--size--1000: 3rem;

    // bumped by one
    --pf-t--global--font--size--2xl: var(--pf-t--global--font--size--700);
    --pf-t--global--font--size--3xl: var(--pf-t--global--font--size--800);
    --pf-t--global--font--size--4xl: var(--pf-t--global--font--size--900);
    --pf-t--global--font--size--lg: var(--pf-t--global--font--size--500);
    --pf-t--global--font--size--md: var(--pf-t--global--font--size--400);
    --pf-t--global--font--size--sm: var(--pf-t--global--font--size--300);
    --pf-t--global--font--size--xl: var(--pf-t--global--font--size--600);
    --pf-t--global--font--size--xs: var(--pf-t--global--font--size--200);
  
    // icon sizes
    --pf-t--global--icon--size--100: 1rem;
    --pf-t--global--icon--size--200: 1.5rem;
    --pf-t--global--icon--size--250: 2rem;
    --pf-t--global--icon--size--300: 2.5rem;
    --pf-t--global--icon--size--400: 6rem;
    --pf-t--global--icon--size--500: 8rem;

    // spacing
    --pf-t--global--spacer--action--horizontal--compact: var(--pf-t--global--spacer--lg);
    --pf-t--global--spacer--action--horizontal--default: var(--pf-t--global--spacer--xl);
    --pf-t--global--spacer--action--horizontal--plain--compact: var(--pf-t--global--spacer--sm);
    --pf-t--global--spacer--action--horizontal--plain--default: var(--pf-t--global--spacer--md);
    --pf-t--global--spacer--action--horizontal--spacious: var(--pf-t--global--spacer--2xl);
    --pf-t--global--spacer--control--horizontal--compact: var(--pf-t--global--spacer--md);
    --pf-t--global--spacer--control--horizontal--default: var(--pf-t--global--spacer--xl);
    --pf-t--global--spacer--control--horizontal--plain: var(--pf-t--global--spacer--md);
    --pf-t--global--spacer--control--horizontal--spacious: var(--pf-t--global--spacer--xl);
    --pf-t--global--spacer--control--vertical--compact: var(--pf-t--global--spacer--sm);
    --pf-t--global--spacer--control--vertical--default: var(--pf-t--global--spacer--md);
    --pf-t--global--spacer--control--vertical--plain: var(--pf-t--global--spacer--md);
    --pf-t--global--spacer--control--vertical--spacious: var(--pf-t--global--spacer--lg);
    --pf-t--global--spacer--gap--action-to-action--default: var(--pf-t--global--spacer--lg);
    --pf-t--global--spacer--gap--action-to-action--plain: var(--pf-t--global--spacer--sm);
    --pf-t--global--spacer--gap--control-to-control--default: var(--pf-t--global--spacer--sm);
    --pf-t--global--spacer--gap--group--horizontal: var(--pf-t--global--spacer--lg);
    --pf-t--global--spacer--gap--group--vertical: var(--pf-t--global--spacer--md);
    --pf-t--global--spacer--gap--group-to-group--horizontal--compact: var(--pf-t--global--spacer--md);
    --pf-t--global--spacer--gap--group-to-group--horizontal--default: var(--pf-t--global--spacer--3xl);
    --pf-t--global--spacer--gap--group-to-group--vertical--compact: var(--pf-t--global--spacer--lg);
    --pf-t--global--spacer--gap--group-to-group--vertical--default: var(--pf-t--global--spacer--xl);
    --pf-t--global--spacer--gap--text-to-element--compact: var(--pf-t--global--spacer--sm);
    --pf-t--global--spacer--gap--text-to-element--default: var(--pf-t--global--spacer--md);
    --pf-t--global--spacer--gutter--default: var(--pf-t--global--spacer--lg);
    --pf-t--global--spacer--inset--page-chrome: var(--pf-t--global--spacer--xl);

    // Glass theme  tokens
    --pf-t--global--light--glass--background--color--glass--color: var(--pf-t--global--color--brand--500);
    --pf-t--global--light--glass--background--color--glass--filter: blur(12.5px);
    --pf-t--global--light--glass--background--color--glass--opacity: 10%;
    --pf-t--global--light--glass--background--color--glass--default: color-mix(in srgb, var(--pf-t--global--light--glass--background--color--glass--color) var(--pf-t--global--light--glass--background--color--glass--opacity), transparent );
    --pf-t--global--dark--glass--background--color--glass--color: var(--pf-t--global--color--brand--500);
    --pf-t--global--dark--glass--background--color--glass--filter: blur(12.5px);
    --pf-t--global--dark--glass--background--color--glass--opacity: 65%;
    --pf-t--global--dark--glass--background--color--glass--default: color-mix(in srgb, var(--pf-t--global--dark--glass--background--color--glass--color) var(--pf-t--global--dark--glass--background--color--glass--opacity), transparent );

    // Message bar tokens
    --pf-v6-c-compass__message-bar--Width: 600px;
    --pf-v6-c-compass__message-bar--MinWidth: 450px;
    --pf-v6-c-compass__message-bar--MaxWidth: 900px;

    // Thinking tokens
    --pf-v6-global--thinking--BoxShadow--Spread: 5px;
    --pf-v6-global--thinking--BoxShadow--Color--Start-Start: var(--pf-t--global--color--brand--100);
    --pf-v6-global--thinking--BoxShadow--Color--Start-End: var(--pf-t--color--white);
    --pf-v6-global--thinking--BoxShadow--Color--End-Start: var(--pf-t--global--color--brand--500); 
    --pf-v6-global--thinking--BoxShadow--Color--End-End: var(--pf-t--global--color--brand--300); 
    --pf-v6-global--thinking-active--BoxShadow--Spread: 10px;

    .pf-v6-m-ai-indicator {
        &::before {
        background: linear-gradient(to right, #f56e6e 0%, var(--pf-t--global--color--brand--300) 65%, var(--pf-t--global--color--brand--500) 100%)
            border-box;
        }
    }
}
```