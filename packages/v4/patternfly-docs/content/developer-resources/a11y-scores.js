import React from 'react';

export const a11yScores = [
  {
    'Nov 21, 2022': [
      {
        criteria: 'Preliminary accessibility report generated using axe-core based tooling.',
        score: '✅',
        notes: (
          <>
            <a href="https://pf-a11y_5-16-22.surge.sh/">Initial report (May 16th, 2022)</a>
            <p>1066 violations found</p>
          </>
        )
      },
      {
        criteria: 'Manual keyboard and screen reader testing conducted.',
        score: '--',
        notes: ''
      },
      {
        criteria: `Accessibility violations in product itemized and prioritized. Notes should indicate how violations 
        were identified - i.e. via generated report and/or manual testing.`,
        score: '✅',
        notes: (
          <>
            <a href="https://github.com/patternfly/patternfly-org/issues/2920">patternfly/patternfly-org issue #2920</a>
            <p>Will be updated once keyboard/screen reader testing conducted</p>
          </>
        )
      },
      {
        criteria: 'Critical and major accessibility violations identified in item #3 resolved (%).',
        score: '96%',
        notes: (
          <>
            <a href="http://pf-a11y_11-21-22.surge.sh">Latest generated report (Nov 21, 2022)</a>
            <p>44 violations remaining</p>
          </>
        )
      },
      {
        criteria: `Automated accessibility checks added to pull request or equivalent code acceptance criteria.`,
        score: '--',
        notes: ''
      },
      {
        criteria: 'Manual keyboard and screen reader accessibility checks added to pull request or equivalent code acceptance criteria.',
        score: '✅',
        notes: `Accessibility devs identified and tagged on relevant PRs to manually review screen reader and keyboard interactions`
      },
      {
        criteria: <>CI/CD Process established to track accessibility violations/regressions. CI/CD process could be wired up to use <a href="https://www.deque.com/axe/">https://www.deque.com/axe/</a> or the patternfly-a11y tool (also built using axe)</>,
        score: '--',
        notes: <>Report <a href="https://github.com/patternfly/patternfly-org/blob/main/packages/v4/patternfly-a11y.config.js">configuration</a> created, needs to be hooked into CI/CD</>
      },
      {
        criteria: `Website built with PatternFly React components. Could note alternate design systems/component 
        libraries along with reference to their accessibility docs.`,
        score: '✅',
        notes: ''
      },
      {
        criteria: 'PatternFly React is up to date with the latest release',
        score: '✅',
        notes: `Current versions:
        "@patternfly/patternfly": ">=4.185.1",
        "@patternfly/react-core": ">=4.202.16"`
      },
      {
        criteria: 'User testing conducted (Extra credit 🌟)',
        score: '--',
        notes: ''
      }
    ]
  }
];
