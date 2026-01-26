---
id: Compass
section: AI
source: Development-guide
subsection: Generative UIs
---

## Structural patterns
When building generative UI layouts using the Compass components, there are several common patterns to consider during your development process.

## Structural patterns

### Transparent containers
Transparent containers create a modern glass look and feel. To enable transparency on a container, apply `pf-v6-theme-glass` to the `html` element class list, similar to the approach for enabling the dark mode theme. 

Within Compass layouts, elements with a transparent glass background and rounded borders should be wrapped in a `<CompassPanel>` (some Compass components do this automatically). You can adjust various options of the `<CompassPanel>` to adapt its padding and behavior to fit the context of your use case. 

To prevent styling issues, do not nest `<CompassPanel>` components while using the glass effects.

### Header
You can add a header to a Compass layout via the `<CompassHeader>` component. `<CompassHeader>` constructs 3 sections, which can contain any custom content, but will typically include the following: 
- **Logo:** Contains a [`<Brand>`](/components/brand) or other image or SVG to represent a product logo. 
- **Profile:** Contains a [`<Dropdown>`](/components/menus/dropdown) with a user [`<Avatar>`](/components/avatar) displayed in the `<MenuToggle>`.
- **Nav:** Contains a `<CompassNavContent>` component, which usually contains `<CompassNavHome>`, `<CompassNavMain>`, and `<CompassNavSearch>` components as shown in the following code example.
    - `<CompassNavHome>` and `<CompassNavSearch>` are optional, but are opinionated components that will automatically provide a home and search button. 
    - `<CompassNavMain>` will usually contain a [`<Tabs>`](/components/tabs) component that uses the `isNav` flag to enable a top-level navigation styles. 
#### Code example

```
<CompassNavContent>
  <CompassNavHome onClick={() => console.log('Home')} />
  <CompassNavMain>
    <Tabs isNav />
  </CompassNavMain>
  <CompassNavSearch onClick={() => console.log('Search')} />
</CompassNavContent>
```

### Sidebars
There are 2 vertical sidebars in a Compass layout: 1 at the start of the page and another at the end. There are no specific helper components for these sections, so they're usually created by passing the `isVertical` flag to a `<CompassPanel>` that contains an [`<ActionList>`](/components/action-list).

### Footer
There are 2 methods of adding a footer to a compass layout. 

In both methods, the footer content will remain the same, typically containing a [ChatBot `<MessageBar>`](/extensions/chatbot/messages/), wrapped in a `<CompassPanel>` and `<CompassMessageBar>` component:

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

1. Via the `footer` prop.

    To create a footer that will span the entire viewport width, pass content to the `footer` prop of the `<Compass>` component. If your footer content is expected to change in height (like `<MessageBar>` content that expands), the sidebars will adjust their positioning to align. If this behavior is not desired, don't use the `footer` prop and follow the second method.

2. Via the `<CompassMainFooter>` components.

    To allow the sidebars to extend through the bottom of the viewport, preventing them from resizing based on changes to the footer container height, wrap footer content in `<CompassMainFooter>` and pass it to the `<Compass>` component as part of the `main` content.

### Main content
The main content in a Compass layout includes the generated information displays. Main content fills the center of the viewport and typically consists of a `<Hero>` or `<CompassMainHeader>`, a `<CompassContent>`, and an optional `<CompassMainFooter>`. 

Often, the main section will contain a `<CompassMainHeader>` and `<CompassContent>` with a `<CompassPanel>` child containing the primary page content.

When making [a dashboard view](/patterns/dashboard), use a `<Hero>` instead of a `<CompassMainHeader>`. Instead of having a single `<CompassPanel>` within a `<CompassContent>`, each individual dashboard item should be wrapped in a `<CompassPanel>`. For example, in a dashboard with many content cards, each `<Card>` (with `isPlain` flag) should be wrapped by a `<CompassPanel>` inside of a [`<Grid>`](/foundations-and-styles/layouts/grid).

## CSS customization

Our [design token system](/foundations-and-styles/design-tokens/overview) allows you to further customize the look and feel of a Compass layout.

For example, the following CSS mixin utilizes several global token overrides to better match the Red Hat Design System look and feel.

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