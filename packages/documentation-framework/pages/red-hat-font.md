---
id: Red Hat font
section: developer-resources
---

PR - [https://github.com/patternfly/patternfly/pull/4476](https://github.com/patternfly/patternfly/pull/4476)

Available in [v4.161.0](https://github.com/patternfly/patternfly/releases/tag/prerelease-v4.161.0)

## Overview

PatternFly has created opt-ins for `v4.0.2` of the [RedHatFont](https://github.com/RedHatOfficial/RedHatFont/). This is an update from `v2.x`. There are many new features in this update, including:

- Variable fonts
- New weights in Red Hat Display and Red Hat Text
- Tabular figures (monospaced numbers) in Red Hat Display and Red Hat Text
- Red Hat Mono typeface
- Dropping support for IE11 (dropped the `.woff` format)

### Available Opt-ins

#### `.pf-m-redhat-updated-font`

Updates the Red Hat Text and Red Hat Display font stacks to `v4.0.2`. This should be a safe, seamless opt-in, with small improvements to glyph shape, kerning, metadata across the entire family of fonts. Potential concerns may be that this will remove support for IE11 by removing the `.woff` format support, and small layout shifts as result of the small improvements.

#### `.pf-m-redhatmono-font`

Updates the monospaced font stack to use the Red Hat Mono font. This opt-in can be combined with `.pf-m-redhat-updated-font`.

#### `.pf-m-redhatVF-font`

Updates the Red Hat Text, Red Hat Display, and Red Hat Mono font stacks to use the variable font files.

#### `.pf-m-tabular-nums`

This is a global class that can be applied to any element to enable monospaced numbers on that element and its children.

### Using opt-in classes

To opt-in to any of the new fonts (`.pf-m-redhat-updated-font`, `.pf-m-redhatmono-font`, and `.pf-m-redhatVF-font`), add the opt-in class to the `<body>` tag of your application. To opt-in to monospaced numbers globally across your application, apply `.pf-m-tabular-nums` to any element that wraps your entire application (eg, `<body>`, `<div id="root">`, `<div class="pf-c-page">`, etc). To opt-in to monospaced numbers on a particular element and its children, add the class to that element itself.
