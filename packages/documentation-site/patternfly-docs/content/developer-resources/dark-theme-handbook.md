PatternFly dark theme handbook
Enabling dark theme
Dark theme styles ship with PatternFly CSS by default. To enable dark theme, add the class  pf-v5-theme-dark  to the <html> tag of your application. This class can be added dynamically to toggle dark theme on and off in your application.

Dark theme can also be applied based on the browser’s prefers-color-scheme media query. The recommended way to apply dark theme based on this media query is to use Javascript(JS) to detect the media query and apply the pf-theme-dark class via the JS code. This allows a product to simply manipulate a single class to turn dark theme on or off based on user preference. Adam Argyle wrote a great article on using JS to manage dark theme preference, using the prefers-color-scheme media query alongside a manual button to toggle dark theme on or off. https://web.dev/building-a-theme-switch-component/#javascript

What’s changed?
The following are some notable changes and differences between light and dark themes. 

Black color palette updated
--pf-v5-global--palette--black-[100, 200, 300, 400, 500, 600, 700, 800, 850, 900, 1000] all updated to new colors
--pf-v5-global--palette--black-50 added

Red colors added
--pf-v5-global--palette--red-9999
--pf-v5-global--palette--red-8888

Primary blue color updated
--pf-v5-global--palette--blue-300 updated to new color
More vibrant on dark backgrounds
blue-400 when white text or icon is on top; blue-400 for everything else.
colors are #1fa7f8 (300) vs #0066cc (400)

Global variables added
--pf-v5-global--BackgroundColor--300
Background color for elements that appear on top of others. Eg, popovers and dropdown menus
--pf-v5-global--BackgroundColor--400
Background color for hover/interaction state of items on the --pf-v5-global--BackgroundColor--300 background color. Eg, hover/focus background for items in a dropdown menu
Background color for control elements. Eg, text input, textarea, menu toggle

Border color added
--pf-v5-global--BorderColor--400
Bottom border used for control elements

Status colors added
--pf-v5-global--primary-color--300
Primary background color that meets contrast requirements for elements that will have text on top. Eg, primary buttons, unread badge

Here is a link to all global var overrides for dark theme for your reference. 

Best practices
The following are some best practices for designing and implementing applications to make it easier to support light and dark theming. We recommend that you keep these considerations in mind for any new development.

Using PatternFly components without customizations will make it easier to implement dark theme in your application. Most of the problems encountered have been around the use of custom styles, overrides to PatternFly styles, and non-PatternFly components. Whenever possible, to ensure consistent styling and behavior when switching themes, try and use PatternFly components as they are.


When making overrides, utilize the global and component CSS variable system to define the override. For example, to override a primary button’s background color, declare .pf-v5-c-button { --pf-v5-c-button--m-primary--BackgroundColor: [color]; } instead of .pf-v5-c-button.pf-m-primary { background-color: [color]; }.


When creating overrides and custom styles, try to utilize the CSS variable system for the style values. For example, use background-color: var(--pf-v5-global--BackgroundColor--100) for a primary background instead of background-color: #fff or background-color: white. Colors like #fff and white will not change between light and dark theme, but the use of --pf-v5-global--BackgroundColor--100 will.


Pro tip: also try to use the most “meaningful” variable whenever possible. For example, in PF, --pf-v5-global--Link--Color == --pf-v5-global--primary-color--100 == --pf-v5-global--palette--blue-400 == #06c. When creating something custom where the color should match the application’s link text color, any of these values will work in the default light theme. However, in a different theme, --pf-v5-global--Link--Color and --pf-v5-global--primary-color--100 may not always match. Or --pf-v5-global--palette--blue-400 may not be the same color used to represent a link. And #06c will not change between themes and will require a manual override.


Use SVGs or icon fonts for icons as much as possible, and use global variables for the icon colors. SVGs and icon fonts can be changed via CSS using the fill and color properties, which makes it easier to manipulate icon colors between light and dark theme. And if using variables such as --pf-v5-global--info-color--100 or --pf-v5-global--success-color--100 for the colors, these colors will adapt automatically between light and dark theme. If images must be used, attempt to use colors that either work well in both light and dark themes, or hide/show the appropriate images based on the presence of the dark theme body class.

