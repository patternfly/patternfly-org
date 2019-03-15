---
path: "/design-guidelines/usage-and-behavior/about-modal"
---
# About modal
The About Modal stores the version number(s) of the application as well as any appropriate legal text.

## Primary elements
![Modal](img/about-modal.png)
1. Backdrop - blurs any interface elements in the background to bring the modal content into focus
2. Modal
3. Branding - provides logo and branding for the product. Substitute your own logotype by providing an SVG that can be scaled proportionately to fit the space.
4. Product title
5. Close button
6. Content: Label and version.
  * When version and build information are both shown: Version 6.3 (Build 5)
  * When version only: Version 6.3
  * When build only: Build 5
7. Modal image: The modal image should be the same as the [background image](/documentation/react/components/backgroundimage) you use for your application.
8. Trademark and copyright information: Optionally include legal text. Suggested format for copyright -  Copyright (c) 2018 Company

## Usage
Use the About Modal to provide information about the product including the product name, logo, version numbers, and any appropriate legal text.

**How to access the about modal**
Provide access to the about modal using a help icon in the application masthead. Clicking the help icon will launch a dropdown menu. The help menu should always include an option labeled "About" that launches the about modal.

![About Modal menu](img/about-dropdown.png)

Learn more about how to create and organize a masthead in the [masthead design guidelines](/design-guidelines/usage-and-behavior/).

## Related components and demos
**HTML/CSS components**
[Aboutmodal](/documentation/core/demos/aboutmodal), [Aboutmodalbox](/documentation/core/components/aboutmodalbox), [Backdrop](/documentation/core/components/backdrop), [Backgroundimage](/documentation/core/components/backgroundimage)

Related HTML components: [Modal](/documentation/core/demos/modal), [Modalbox](/documentation/core/components/modalbox), [Button](/documentation/core/components/button)

**React components**
[AboutModal](/documentation/react/components/aboutmodal), [Backgroundimage](/documentation/react/components/backgroundimage), [Brand](/documentation/react/components/brand),

Related React components: [Modal](/documentation/react/components/modal), [Button](/documentation/react/components/button)
