---
id: Migrate to tokens
section: tokens
---

## How to migrate to tokens 

The PatternFly token system is an addition to PatternFly as part of our V6 release. If you've previously used PatternFly through our Sketch design kits and our global CSS variables, you will need to complete a few steps to migrate to our token system. 

If you're new to PatternFly, you can get set up on the token system by following our [Design]() and/or [Develop]() onboarding guides.

[we could maybe include a visual showing the difference between v5 and Penta designs]

### For designers 

**Our tokens are only available within Figma.** To take advantage of the PatternFly token system, you must migrate all existing designs over from Sketch.

To migrate to Figma, follow these steps:

1. Import files from Sketch 

        1. From the sketch.cloud file browser, select the ellipse button on the relevant file and choose "Download"

        2. In Figma, go to the relevant project and select the "Import" button. Select the .sketch file that you downloaded in step 1.

1. If this is your first time using Figma, be sure to familiarize yourself with its [training tutorials]().

1. Once you've completed your migration, you can begin to [design with tokens.]()

[Add more specific instructions - what is the process for non-UXD designers re Figma?]

### For developers

Previously, user interface design solutions were implemented by using our [global CSS variables](/developer-resources/css-variables). Our token system replaces these CSS variables, so you will need to migrate the style variables throughout your codebase to align with our tokens instead. 

To migrate to token variables, follow these steps: 

1. Download the PatternFly token packages 
1. Update your color and style variables to use [PatternFly tokens](/tokens/patternfly-tokens). For example: 

        | CSS variable | Token |
        | --- | --- |
        | | |
        | | |
    - If there's a table outlining the specific 1:1 changes, we'll link to that here. Or if there's any kind of automated tool to update variable names, we will include that as a step. 

1. Once you've completed your migration, you can begin to [develop with tokens](/tokens/develop-with-tokens).