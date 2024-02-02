---
id: Migrate to tokens
section: tokens
---

The PatternFly token system is part of PatternFly 6 release. If you've previously used PatternFly through our Sketch design kits and our global CSS variables, you will need to complete a few steps to migrate to our token system. 

If you're completely new to PatternFly, you should first read our high-level [Design](/get-started/design) and/or [Develop](/get-started/develop) onboarding guides.

## For designers 

**Our tokens are only available within Figma.** 

To take advantage of the PatternFly token system, you must design within Figma and should begin to create all new designs there. If you've previously used Sketch to create UI designs with PatternFly, and you want to migrate an existing design into Figma, you will need to manually recreate each UI mockup using the PatternFly 6 component library.

For there, you can begin to [design with tokens.](/tokens/designing-with-tokens)

## For developers

Previously, PatternFly UI solutions were implemented through our [global CSS variable system.](/developer-resources/css-variables) Tokens replace these CSS variables, so you will need to migrate style variables throughout your codebase to align with our tokens instead. 

To migrate to tokens, follow these steps: 

1. Download the PatternFly token packages 
1. Update your color and style variables to use [PatternFly tokens](/tokens/patternfly-tokens). For example: 

        | CSS variable | Token |
        | --- | --- |
        | | |
        | | |

1. Once you've completed your migration, you can begin to [develop with tokens.](/tokens/develop-with-tokens)