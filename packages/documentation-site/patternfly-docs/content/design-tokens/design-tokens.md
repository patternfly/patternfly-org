---
id: About
title: Design tokens
section: design-tokens
---

# Design tokens 

This guide outlines PatternFly's use of design tokens. You should familiarize yourself with the details across this guide to learn about the purpose and implementation of PatternFly's tokens. 

PatternFly's tokens are only available within Figma, so it's important that you follow our [Figma migration](/design-tokens/migrate) guide if necessary.

## What are design tokens

Design tokens are variables that store visual design attributes, like color, typography, and spacing. A design token has a name and value that represents the visual design information it contains. 

## Why use tokens 

Using design tokens helps maintain consistency across product design processes by ensuring that designers use the same colors for the same use cases. 

Tokens also enable easier maintenance. Whenever a color is changed as part of a redesign or update,related tokens are automatically updated to reflect this change. This means that developers won't have to make any changes to code to ensure that their product is up to date with the latest recommendations. Likewise, designers will see that their designs automatically update to reflect any changes.

## PatternFly design tokens

### How to read tokens 

Tokens can be read from left to right, with each part separated by a forward slash (/):

`scope / component / category / property / concept / variant / state` 

Each piece represents different information:
- **Scope:** The range of the token. For example, `global` signifies that a token applies across the system.
- **Component:** The component that the token relates to. 
- **Category:** NEED INFO
- **Property:** NEED INFO
- **Concept:** NEED INFO
- **Variant:** The variant type of the token's component.For example, a variant may be `plain` or `primary`.
- **State:** The state that the component is in. This is typically `disabled`, `hover`, or `active`.

Note that all PatternFly tokens also begin with `pf`.

### Token layers

PatternFly tokens have 3 layers: a **palette layer**, a **base layer**, and a **semantic layer**. 

![Design layers example](./img/design-layers-example.png)

#### **Palette layer**

Palette layer tokens contain the colors in [PatternFly color palettes](/design-foundations/colors#patternfly-palettes). 

If you've used PatternFly previously, these values resemble some of the CSS variables that you may be familiar with. They 

**Add:** example image and/or `example / token / style / 000`

#### **Base layer**

Base layer tokens contain a wide range of tokens that the semantic layer can choose from. 

These values are grouped conceptually and named numerically. There are no duplicate values within a concept group.

**Add:** example image and/or `example / token / style / 000`

#### **Semantic layer**

Semantic layer tokens will be the value that you see the most frequently. These values are the top-level tokens that are grouped conceptually and named semantically. 

Most of the time, these reference base tokens, but can also reference other semantic tokens

**Add:** example image and/or `example / token / style / 000`

### Examples of token use 

#### **Color tokens**

**Add:** example image and/or `example / token / style / 000`

#### **Spacing tokens**

**Add:** example image and/or `example / token / style / 000`