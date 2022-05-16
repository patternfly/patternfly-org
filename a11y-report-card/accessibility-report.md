# PatternFly.org's Accessibility Report Card

This report runs the [patternfly-a11y](https://github.com/patternfly/patternfly-a11y) tool, which is built using [axe-core](https://github.com/dequelabs/axe-core).
It checks PatternFly.org's accessibility by running the automated testing on the following pages:
- The home page at a desktop viewport width with the sidebar nav open
- The home page at a desktop viewport width with the sidebar nav closed
- The home page at a mobile viewport width with the sidebar nav open
- The home page at a mobile viewport width with the sidebar nav closed
- Crawls the pages linked in the side navigation
- Crawls the multiple tabs under each component's documentation pages
- The composable table, legacy table, and html table document pages a second time at a mobile viewport width

## Original report run May 16, 2022
[View full report](pf-a11y_5-16-22.surge.sh)
### Summary
- Tested URLs: 457
- Pass: 116
- Fail: 341
- Pass rate: 25.38%
- Accessibility issues: 966

Note: when running the report again but silencing the jumplinks a11y issue:
[pf-ally_5-16-22_no-jumplinks.surge.sh](pf-ally_5-16-22_no-jumplinks.surge.sh)

- Tested URLs: 457 
- Pass: 338 
- Fail: 119 
- Pass rate: 73.96% 
- Accessibility issues: 675

## Report run on May 17th, 2022
[View full report](pf-a11y_5-17-22.surge.sh)
### Summary
- Tested URLs: 457
- Pass: 117
- Fail: 340
- Pass rate: 25.38%
- Accessibility issues: 923