---
id: About tokens
section: tokens
--- 

**Design tokens** are variables that store visual design attributes like color, typography, and spacing. Tokens have a name and value that conveys their associated design style, making their purpose clear and recognizable. 

PatternFly's tokens are set up as variables and styles within Figma. To learn more about using the PatternFly Figma library, [refer to our onboarding guide.](/get-started/design#figma-library)

You can also [view the complete list of PatternFly's design tokens.](/tokens/patternfly-tokens)

## Why use tokens? 

A token system enables a a shared language for building UIs and helps support better consistency and maintenance across the PatternFly design system.

### Consistency 
Tokens help maintain consistency across product design processes by ensuring that the same colors and styles are always used for the same use cases. By removing the decision making that would otherwise go into choosing the right color, heading level, spacing, and so on, designs can be created more consistently and efficiently.

### Easier maintenance
Tokens also enable easier design system maintenance. Whenever a color is changed as part of a redesign or update, all related tokens are automatically updated to reflect this change. This means that developers won't have to make any code changes to ensure that a product is up to date with the latest PatternFly recommendations. Likewise, designers will see that their Figma designs automatically update to reflect any changes made to tokens.

## Token layers

The PatternFly token system has 3 layers: palette tokens, base tokens, and semantic tokens. 

[VISUAL]

### Palette tokens

**Palette tokens** point to [PatternFly color palettes](/design-foundations/colors#patternfly-palettes) to create a color foundation for other token layers to reference. 

[VISUAL]

### Base tokens

**Base tokens** expand on the palette layer to apply PatternFly colors to concepts. They also introduce additional concepts, like spacing and borders.

These values are named numerically and grouped conceptually, with no duplicate values in a concept group.

[VISUAL]

### Semantic tokens

**Semantic tokens** are the top-level tokens that are grouped conceptually and named semantically. These are the tokens that you will see and use the majority of the time.

[VISUAL]

## Token names

PatternFly token names are composed of a 'pft' prefix, a version number, and a series of token segments.

<div class="ws-image">
<img src="./img/token-name.png"  alt="PatternFly token naming structure."  width="600px"/>
</div>

Each token segment represents a different type of style information. If a segment isn't relevant for a particular token then it will be skipped in the token's name. 

| **Segment** | **Description** |
| --- | --- |
| Scope | The token's range, such as *global* or *chart*.
| Component | The component that the token relates to, such as *icon*, *background*, or *text*.
| Property | The style property of a component, such as *color*, *size*, *width*, or *radius*.
| Concept | The token's higher level concepts, such as *status*, *primary*, or *action*, which have different variant options.
| Variant | The variant of a component or concept, such as *link*, *plain*, *warning*, or *success*.
| State | The state that the component is in, such as *default*, *hover*, or *active*.