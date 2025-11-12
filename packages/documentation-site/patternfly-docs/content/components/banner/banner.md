---
id: Banner
section: components
---

## Usage

PatternFly offers 5 different banner types detailed below. We suggest that users adopt one of these 5 colors, as they’ve been tested with their text colors for accessibility. However, if colors outside of these variations are used, we encourage manually checking color contrast to ensure the banner text is accessible. The text can be positioned on the left, middle, and/or right of the banner.
 
<img src="./img/banner-types.png" alt="5 different types of banners" width="744" />

A default banner should only be used when the banner color does not represent status or severity. When a banner is used to convey status, it is advised to add an icon that also conveys status visually.

| Type | Background color | Text color | Status/severity usage |
| - | - | - | - |
| Default | `--pf-v6-global--BackgroundColor--dark-400` | White | Generic messages |
| Blue | `--pf-v6-global--info-color--100` | Black | General information messages |
| Red | `--pf-v6-global--danger-color--100` | White | High severity/danger messages |
| Green | `--pf-v6-global--success-color--100` | White | Positive/success messages |
| Gold | `--pf-v6-global--warning-color--100` | Black | Medium severity/warning messages |

### When to use
 
Banners are flexible and can be used for any content and for several use cases outlined in the following examples.
 
- **To indicate that an application/site is offline.** In this example, a banner is used to indicate to the user that the site is undergoing maintenance and that they will have limited functionality as a result. The banner is shown at the top to ensure that the user does not miss this disclaimer. Since this is a general, non-severe message, a default banner was used.
 
   <img src="./img/example-1.png" alt="Example of default banner in use" width="1500" />
 
- **To indicate that an application upgrade is available.** In this example, the user is notified of an available upgrade through a banner at the top of the page. Since the use case here is to convey information, a blue status banner was used.
 
   <img src="./img/example-2.png" alt="Example of blue informational status banner in use" />
 
- **Government system classification banner.** In this example, a banner is used to display classification level on a webpage. When an information system is deployed into the U.S. Government, it must be approved of what type of data to process, such as data classification. This classification banner communicates what types of data users are working with. Since this information is considered highly important, a red banner was used.
 
   <img src="./img/example-3.png" alt="Example of red classification banner in use" />

### When not to use

Do not use banners: 

- For use cases requiring more than a single line of content. Use an [inline alert](/components/alert/design-guidelines#inline-alerts) instead.

- For use cases requiring important actions for the user to take. Use a [hint](/components/hint/design-guidelines) instead. 

## Variations 

### Banners with icons
Banner with icons can be used for added emphasis. Use icon banners when indicating status to make the banner more accessible.

<img src="./img/banner-variations.png" alt="Banners with icons variation" width="744" />

## Spacing

### Padding
 
The padding required above and below a banner will depend on where it is placed.
 
- **When placed above or below the page,** the padding above and below should be 0px, as the banner should touch the top and/or bottom of the page.
 
  <img src="./img/placement-1.png" alt="Padding when banner is placed above and below the page" />
 
- **When placed above the main content area,** there should be no padding above the banner, and in most cases there should be 24px padding below it. The only exception is when breadcrumbs are directly below the banner &mdash; in that case, the padding should be 16px below the banner.

  <img src="./img/placement-2.png" alt="Padding when banner is placed above the main content area of the page" />

- **When placed below the main content area,** there should be 24px padding above the banner and no padding below it.

  <img src="./img/placement-3.png" alt="Padding when banner is placed below the main content area of the page" />
 
## Placement
 
All banners should be a solid bar spanning the width of either the full page or the main content area of the page and should be sticky to where it is used.

- The banner should span the top and bottom when it is used for a full page.
 
   <img src="./img/placement-1.png" alt="Example of banner placement above and below the page" width="1500" />
 
- The banner should span only the top when it is used for the main content area of the page.
 
   <img src="./img/placement-2.png" alt="Example of banner placement below above the main content area of the page" width="1500" />

## Accessibility 

For information regarding accessibility, visit the [banner accessibility tab](/components/banner/accessibility).
