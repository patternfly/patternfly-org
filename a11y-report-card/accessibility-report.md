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
[View full report](https://pf-a11y_5-16-22.surge.sh)
### Summary
- Tested URLs: 490
- Pass: 118
- Fail: 372
- Pass rate: 24.08%
- Accessibility issues: 1066

Note: when running the report again but silencing the jumplinks a11y issue:
[pf-ally_5-16-22_no-jumplinks.surge.sh](https://pf-ally_5-16-22_no-jumplinks.surge.sh)

- Tested URLs: 490
- Pass: 348
- Fail: 142 
- Pass rate: 71.02% 
- Accessibility issues: 751

## Report run on May 17th, 2022
[View full report](https://pf-a11y_5-17-22.surge.sh)
### Summary
- Tested URLs: 491
- Pass: 118
- Fail: 373
- Pass rate: 24.03%
- Accessibility issues: 1053

## Report run on June 3rd, 2022
[View full report](https://pf-a11y_6-3-22.surge.sh)
### Summary
- Tested URLs: 491
- Pass: 398
- Fail: 93
- Pass rate: 81.06%
- Accessibility issues: 538