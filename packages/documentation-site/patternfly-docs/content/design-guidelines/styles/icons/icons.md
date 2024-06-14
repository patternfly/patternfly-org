---
id: Icons
section: design-foundations
---
import { Alert, Card, CardBody, Divider, Flex, FlexItem, Grid, GridItem, Icon } from '@patternfly/react-core';
import CaretDownIcon from '@patternfly/react-icons/dist/esm/icons/caret-down-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';
import InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
import GithubIcon from '@patternfly/react-icons/dist/esm/icons/github-icon';
import OutlinedCalendarAltIcon from '@patternfly/react-icons/dist/esm/icons/outlined-calendar-alt-icon';
import StarIcon from '@patternfly/react-icons/dist/esm/icons/star-icon';
import TagIcon from '@patternfly/react-icons/dist/esm/icons/tag-icon';
import TimesCircleIcon from '@patternfly/react-icons/dist/esm/icons/times-circle-icon';
import { IconRecommendations } from './IconRecommendations';
import { IconsTable } from './IconsTable';
import './icons.css';

If you're a developer, check out our [development onboarding guide](/get-started//develop#using-icons) to learn how to install and use our icon set.

## Icon sizes

PatternFly supports a range of icon sizes so that all icons can be adapted to different use cases. This range includes small, medium, large, x-large, 2xl, and 3xl icons, which correspond to the following font sizes and tokens:

| **Size** | **Token** | **Example** |
| --- | --- | :---: |
| Small (12px) |  `--pf-t--global--icon--size--sm` |<Icon size ="sm"><CheckCircleIcon /></Icon> |
| Medium (14px) |  `--pf-t--global--icon--size--md` |<Icon size ="md"><CheckCircleIcon /></Icon> |
| Large (16px) |  `--pf-t--global--icon--size--lg` |<Icon size ="lg"><CheckCircleIcon /></Icon> |
| X-large (22px) | `--pf-t--global--icon--size--xl` | <Icon size ="xl"> <CheckCircleIcon /></Icon> |
| 2xl (56px) | `--pf-t--global--icon--size--2xl` |  <Icon size ="2xl"><CheckCircleIcon /></Icon> |
| 3xl (96px) | `--pf-t--global--icon--size--3xl` | <Icon size ="3xl"><CheckCircleIcon /></Icon> |

Medium icons are typically the most versatile size to use in a UI. Most icons in PatternFly components are medium&mdash;other sizes are used sparingly.

Regardless of size, icons should be center-aligned horizontally when placed next to text and center-aligned vertically when stacked:

<div><img src="./icon_alignment.png" alt="Icon alignment" className="ws-icon-alignment" /></div>

## Icon colors
All icon colors that you use should align with the proper [semantic design token.](/tokens/all-patternfly-tokens) For example, a warning icon should use our approved warning color, a danger icon should use our approved danger color, and so on. 

| **Icon state** | **Color token** | **Example** |
| --- | --- | :---: |
| Danger | `--pf-t--global--icon--color--status--danger--default` | <Icon status="danger" size="xl"> <ExclamationCircleIcon /> </Icon> |
| Warning  | `--pf-t--global--icon--color--status--warning--default` | <Icon status="warning" size="xl"><ExclamationTriangleIcon /></Icon> |
| Success | `--pf-t--global--icon--color--status--success--default` | <Icon status="success" size="xl"><CheckCircleIcon /></Icon> |
| Info | `--pf-t--global--icon--color--status--info--default` | <Icon status="info" size="xl"><InfoCircleIcon /></Icon> |
| Custom | `--pf-t--global--icon--color--status--custom--default` | <Icon status="custom" size="xl"><BellIcon /></Icon> |

To learn more about icon colors and color tokens, visit our [colors page.](/design-foundations/colors) 

## PatternFly icons
PatternFly uses custom icons and selections from <a href="https://fontawesome.com/icons?d=gallery&m=free">Font Awesome Free</a>, as shown in [this table](#all-icons). If PatternFly doesn't offer an icon for your use case, you can download SVGs of additional 'fa' icons from Font Awesome's free set. Be sure to properly attribute these additional icons as outlined on the Font Awesome site.

### HTML icons 
When using HTML, use the following syntax:

- For 'pficon' icons: `<i class="pf-icon [insert-icon-name]"></i>`<br />
- For 'fa' solid icons: `<i class="fas [insert-icon-name]"></i>`<br />
- For 'fa' regular icons: `<i class="far [insert-icon-name]"></i>`<br />

**Note:** Be sure to reference our [development onboarding guide](/develop#using-icons) when using 'fa' regular icons.

### React icons
When using React, you can import 'pficon' icons from our [react-icons package](https://www.npmjs.com/package/@patternfly/react-icons) by including the following line: `import { [insert-icon-name] } from '@patternfly/react-icons/dist/esm/icons/[insert-hyphenated-icon-name]';`

For example: 
`import StarIcon from '@patternfly/react-icons/dist/esm/icons/star-icon';`

### Font Awesome solid (FAS) vs Font Awesome regular (FAR)
The Font Awesome icons included with PatternFly are Font Awesome solid (FAS) webfont icons. If you're using icons via `<i class="[fa, far, fas] [insert-icon-name]"></i>`, you can use any FAS icon. If you need to use a Font Awesome regular (FAR) icon, you must include the FAR icons yourself by doing one of the following:

1. [Host it yourself](https://fontawesome.com/how-to-use/on-the-web/setup/hosting-font-awesome-yourself)
2. [Include the icons via a package manager](https://fontawesome.com/how-to-use/on-the-web/setup/using-package-managers)
3. [Link to a CDN](https://cdnjs.com/libraries/font-awesome)
4. Use the SVG code directly from [fontawesome.com](https://fontawesome.com) (proper attribution is required)


## All icons 

The following table provides details and usage information for all icons that PatternFly supports.

For guidance related to icon tooltips, [refer to our tooltips writing guide.](/ux-writing/tooltips#icon-tooltips)

Select any single icon in the table to download it as an SVG. You can also download all icon SVGs <a href="https://github.com/patternfly/patternfly-design/raw/master/resources/patternfly-icon-svgs" target="_blank">on GitHub (via patternfly-icons.zip.)</a>

<IconsTable />
