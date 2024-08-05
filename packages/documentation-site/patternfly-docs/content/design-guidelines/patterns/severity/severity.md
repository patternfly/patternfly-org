---
id: Severity 
section: patterns
---

import CriticalRiskIcon from '@patternfly/react-icons/dist/esm/icons/critical-risk-icon';
import SeverityImportantIcon from '@patternfly/react-icons/dist/esm/icons/severity-important-icon';
import SeverityMinorIcon from '@patternfly/react-icons/dist/esm/icons/severity-minor-icon';
import SeverityModerateIcon from '@patternfly/react-icons/dist/esm/icons/severity-moderate-icon';
import SeverityNoneIcon from '@patternfly/react-icons/dist/esm/icons/severity-none-icon';
import SeverityUndefinedIcon from '@patternfly/react-icons/dist/esm/icons/severity-undefined-icon';
import { Icon } from '@patternfly/react-core';
import './severity.css';


When there is an issue or incident related to a source of data, it is important to communicate the **severity** of the situation, to help users to measure and understand the impact that it may have on business.

A well-defined severity communication system ensures consistency within a product and within related products, both of which makes it easier for users to understand severity-related terminology and symbols. 

To support severity communication, PatternFly offers a series of color-coded icons that correspond to different severity levels:

| **Severity level** |  **Icon** | **Color token** | **Usage** |
| --- | --- | --- | --- |
| Critical | <Icon iconSize="lg" className="critical"><CriticalRiskIcon /></Icon> | `--pf-t--global--icon--color--severity--critical--default`| |
| Important | <Icon iconSize="lg" className="important"><SeverityImportantIcon /></Icon>  | `--pf-t--global--icon--color--severity--important--default` |
| Moderate | <Icon iconSize="lg" className="moderate"><SeverityModerateIcon /></Icon>  | `--pf-t--global--icon--color--severity--moderate--default`| |
| Minor | <Icon iconSize="lg" className="minor"><SeverityMinorIcon /></Icon>  | `--pf-t--global--icon--color--severity--minor--default`|  |
| None | <Icon iconSize="lg" className="none"><SeverityNoneIcon /></Icon> | `--pf-t--global--icon--color--severity--none--default` | |
| Undefined | <Icon iconSize="lg" className="undefined"><SeverityUndefinedIcon /></Icon>  | `--pf-t--global--icon--color--severity--undefined--default` |

In your UI, you should display a count of incidents beside the related severity level:

![./img/severity-table.png](./img/severity-table.png)

Severity icons are particularly useful in components like tables and cards, which display data.

## Severity icons vs alert status icons

Though they can both be used to communicate severity information, you should not use severity icons in place of [status icons,](/components/alert/design-guidelines#communicating-severity) unless your goal is to provide a count alongside the icon. 

For example, a danger status may indicate that there is a critical issue with a data source, but it is only meant to apply to a single UI element. It is more general than a severity icon: it communicates that there is some kind of critical issue, but a critical severity icon is more specific, and communicates that there is a certain number of critical incidents related to a data source.  