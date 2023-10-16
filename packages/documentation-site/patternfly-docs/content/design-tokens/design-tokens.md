---
id: About
title: Design tokens
section: design-tokens
---

# Design tokens 

To learn about PatternFly's use of design tokens, refer to this guide. Once you're up to speed, you can: 

Start designing or start developing 

## What are design tokens

Design tokens are variables that store visual design attributes, like color, typography, and spacing. A design token has a name and value that represents the visual design information it contains. 

## Why use tokens 

Using design tokens helps maintain consistency across product design processes by ensuring that designers use the same colors for the same use cases. 

Tokens also enable easier maintenance. Whenever a color is changed as part of a redesign or update,related tokens are automatically updated to reflect this change. This means that developers won't have to make any changes to code to ensure that their product is up to date with the latest recommendations. Likewise, designers will see that their designs automatically update to reflect any changes.

## How to read tokens 

Tokens can be read from left to right, with each part separated by a forward slash (/). Each piece of the token represents a different  level of information. 

scope / component / category / property / concept / variant / state 

The naming structure for design tokens follows:
- Scope: this may be `global` or `local`
- Component: 
- Category: this represents the style that the token is relevant to, for example `text`, `icon`, or `background`, to name a few.
- Property: this refers to the ... `color` or `radius`
- Concept: 
- Variant: this refers to the variant type of the token, which often differs per components. For example `plain` or `primary`.
- State: refers to the state that the token is in -- typically `hover` or `selected`.

Review this table to see how the naming structure levels will be skipped when not used.

For a more detailed breakdown, visit the PatternFly tokens documentation. 

## Examples of token use 

### Color tokens 

### Spacing tokens

