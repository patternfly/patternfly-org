---
id: Design with tokens
section: tokens
---

## Penta design kit

PatternFly tokens are only available as part of the PatternFly 6 [Penta design kit.]() In order to make use of our token system, you will need to [upgrade to PatternFly 6](/get-started/upgrade).

## What is in the Penta design kit

### Tokens 

Our tokens are set up at a high level as Figma [variables](https://help.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables-in-Figma) and [styles](https://help.figma.com/hc/en-us/articles/360039238753-Styles-in-Figma). 

In Figma, the variable names look similar to [token names](/tokens/all-patternfly-tokens), but will be separated by a forward slash (/) instead of a double hyphen (--).

<img src="./img/token-example-brand.png"  alt="Table of brand color tokens." width="700px"/>

### Penta component library 

You will have access to all PatternFly tokens when you install the component library. Penta components are built with tokens. From the colors used, to the spacing of elements, to the font size: tokens control it all!

<img src="./img/component-tokens.png"  alt="PatternFly alert components built with Figma tokens."  width="800px"/> 

## Using the Penta design kit 

To install the Penta design kit, [find instructions in our design onboarding guide.](/get-started/design#figma-library)

### Using Penta components

As you insert a component into a design workspace, you can adjust properties and variable modes to customize the appearance to your needs. 

<img src="./img/component-instance.png"  alt="PatternFly alert components built with Figma tokens."  width="350px"/> 

Once you've inserted a component into your workspace, you can continue to customize different parts of its appearance in [Figma's design sidebar](https://help.figma.com/hc/en-us/articles/360039832014-Design-prototype-and-explore-layer-properties-in-the-right-sidebar). Here, you will be able to see all tokens that can be used within a particular design property. 

### Making customizations 

Occasionally, you may find that you need to customize a design beyond what the PatternFly component natively supports. For example, adding text or adding custom spacing.

Our tokens are intentionally scoped so that they can only be used to modify relevant and related visual attributes. For example, a token may have its color scope limited so that it can only be used as a fill color or a stroke color. This means that, while you can use tokens to customize a design, you will only be able to use certain tokens in certain situations. This helps ensure that you're using tokens that are conceptually related to each design element that you're working on.

## Migrate to tokens

Our tokens are only available within Figma. If you've previously designed with PatternFly by using our Sketch design kits, you will need to begin to create all new product designs within Figma.

If you have any existing Sketch-based designs that you want to migrate into Figma, you will need to manually recreate each UI mockup using the Penta component library.