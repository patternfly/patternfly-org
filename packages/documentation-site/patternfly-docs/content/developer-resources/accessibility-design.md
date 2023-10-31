---
id: Design for accessibility
section: accessibility
---

As described in our [accessibility fundamentals](/accessibility/accessibility-fundamentals), users may interact with your product through a variety of assistive technologies. In addition to [developing for accessibility](/accessibility/accessibility-development), you must also incorporate it into your product's UI design. 

The following table differentiates the accessibility responsibilities that are up to designers, developers, or both to uphold.

| Designer | Designer and developer | Developer |
| --- | --- | --- |
| Color  | Layout and structure  | Semantic HTML  |
| Contrast  | Information architecture and navigation | Tab order  |
| Content  | Interaction patterns | Bypass blocks |

## Color and contrast

Color and contrast go hand-in-hand for visual design accessibility. 

For example, you should consider contrast when using colors commonly affected by color perception deficiency (such as those described in [color perception by W3C](https://www.w3.org/WAI/GL/low-vision-a11y-tf/wiki/Overview_of_Low_Vision#Color_Perception)). Different colors in a UI should be distinguishable for users across the color perception deficiency spectrum, typically by ensuring that each color has a different contrast weight. 

Designing with contrast in mind also benefits users with light sensitivity.

[PatternFly's colors](/design-foundations/colors) pass color contrast tests, so long as you follow our recommendations. 

## Content 

Your text content should also consider the needs of users with low vision. For example, links should be descriptive and concise, so that users can quickly identify their purpose. 

To help simplify and strengthen the way that users process content, it is also important to carefully consider your text size, font, letter spacing, margins, and spacing. PatternFly supports these considerations through our [typography](/design-foundations/typography) and [spacing](/design-foundations/spacers) guidelines.

## Understanding low vision 

In addition to following the previous recommendations, it can be helpful to develop an understanding of low-vision users, so that their needs are top of mind as you design.

**Low vision** is frequently defined as a visual impairment that impedes a person’s ability to perform everyday tasks, which cannot be corrected with glasses, contacts, medicine, or surgery. 

There are 4 types of limitations as a result of low vision.

### 1. Visual acuity 

**Visual acuity** refers to sharpness of vision (20/20 being standard). Users outside of the standard range of visual acuity have different needs for font size and spacing.

### 2. Field of vision 

**Field of vision** is the area of vision people can see clearly when their eyes are in a fixed position. Some users have a restricted field of vision (such as central or peripheral field loss), which means that they rely on accessible content design in order to comprehend information on a page.

### 3. Contrast and light sensitivity

**Contrast and light sensitivity** refers to the way that people perceive luminance (the contrast of foreground and background). Following our color contrast guidelines can help you support users with deficiencies in these areas. 

### 4. Color perception

**Color perception** affects how people see colors. Some of your users may have deficiencies in color perception (more than 300 million people are part of this group), which affects their ability to see certain colors. This condition is commonly called "color blindness", even though most people with color perception deficiencies can still see most colors.  Following our color contrast guidelines can help you support users with deficiencies in these areas. 