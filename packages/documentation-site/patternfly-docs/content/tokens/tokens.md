---
id: About tokens
section: tokens
--- 

## What are design tokens?

**Design tokens** are variables that store visual design attributes, like color, typography, and spacing. Tokens have a name and value that conveys their associated visual design, making their purpose clear and recognizable. By using a system of tokens, we can enable a shared language for building user interfaces.

## Why use tokens? 

Tokens help maintain consistency across product design processes by ensuring that the same colors and styles are always used for the same use cases. By removing the decision making that would otherwise go into choosing the right color, heading level, spacing, and so on, designs can be create more consistently and efficienctly.

[Add visual here with an example of a couple of tokens being used for an element]

Tokens also enable easier design system maintenance. Whenever a color is changed as part of a redesign or update, all related tokens are automatically updated to reflect this change. This means that developers won't have to make any changes to code to ensure that their product is up to date with the latest recommendations. Likewise, designers will see that their designs automatically update to reflect any changes.

## PatternFly design tokens

PatternFly's tokens aren't available within Sketch, so you'll need to use Figma when designing with tokens. If necessary, you can follow our [Figma migration guide]() to get set up.

[Find a list of all PatternFly tokens here.](tokens/patternfly-tokens.md)

### Token naming

Tokens are read from left to right, with a forward slash ( / ) separating different segments of the token name:

`scope / component / property / concept / variant / state` 

[replace this ^ with more of a visual]

Each segment represents different style information:

| Token segment | Description |
| --- | --- |
| **Scope** | The range of the token. For example, `global` signifies that a token applies across the entire system.
| **Component** | The component that the token relates to, such as `icon`, `background`, or `text`.
| **Property** | The style property of a component, such as `color`, `size`, `width`, or `radius`.
| **Concept** | The higher level concepts, such as `status`, `primary`, or `action`. These tokens will have different variant options.
| **Variant** | The variant type of the token's component, such as `link`, `plain`, `warning`, or `success`.
| **State** | The state that the component is in, such as `default`, `hover`, or `active`.

If a name segment isn't relevant for a particular token then it will be skipped, as shown in the following table. 

| Scope | Component | Property | Concept | Variant | State | 
| --- | --- | --- | --- | --- | --- |
| global | icon | color |  action |  danger  | hover |
bal | background | color | highlight | 100 |
| global | spacer | width |  |  |  |


**Note:** all PatternFly tokens also begin with `pft` and a version number. For example:

`pft-v5` / `global` / `spacer` / `width` [replace with image]

### Token system layers

The PatternFly token system has 3 layers: **palette tokens**, **base tokens**, and **semantic tokens**. 

[insert visual - should make one within Figma]

#### Palette tokens

Palette tokens refer to all of the colors in the [PatternFly color palettes](/design-foundations/colors#patternfly-palettes) and create the foundation of colors that the other token layers reference. 

If you've used PatternFly previously, these values resemble some of the CSS color variables that you may be familiar with. 

[Add visual example]

#### Base tokens

Base tokens expands on the palette layer to apply PatternFly colors to concepts. They also introduce additional concepts, like spacing and borders.

These values are grouped conceptually and named numerically. There are no duplicate values within a concept group.

[Add visual example]

#### Semantic tokens

You should almost always use semantic tokens. These are the top-level tokens that are grouped conceptually and named semantically. 

Most of the time, semantic tokens reference base tokens, but they can also reference other semantic tokens, such as [such as when, if worth stating].

[Add visual example]

### Examples of token use 

#### Color 

[Add visual examples]

#### Spacing 

[Add visual examples]

#### Status

[Add visual examples]

#### Theming

Light and dark themes are built into all PatternFly tokens and they will toggle when users select a theme preference.

[Add visual examples]

#### Variant

[Add visual examples]