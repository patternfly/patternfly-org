---
# Sidenav top-level section
# should be the same for all markdown files
section: extensions
# Sidenav secondary level section
# should be the same for all markdown files
id: My extension
# Tab (react | react-demos | html | html-demos | design-guidelines | accessibility)
source: react
# Optional custom text to display in tab in place of source
tabName: My custom tab-name
# If you use typescript, the name of the interface to display props for
# These are found through the sourceProps function provdided in patternfly-docs.source.js
# Can also pass object { component: string, source: string } allowing to specify the source
propComponents: ['Button']
---

import { Button } from "@patternfly/react-core";

## Basic usage

### Example
```js file="./Basic.jsx"
```

### Fullscreen example
```js file="./Basic.jsx" isFullscreen
```
