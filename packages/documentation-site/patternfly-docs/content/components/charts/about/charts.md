---
id: Overview
title: Charts overview
section: components
subsection: charts
source: overview
sortValue: 1
---

**Note:** Charts are only available in React in their own package [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts).

A **chart** visualizes data in an application, helping users understand large or complex data sets. The type of chart you use will depend on your use case and the data you need to display. Charts are currently **only available in React**.

The majority of PatternFly charts are based on [the Victory chart library](https://formidable.com/open-source/victory/docs/victory-chart/), with a couple of charts based instead on [the Apache Echarts library](https://echarts.apache.org/). We add functionality, customization, and theming to align charts with our design system. 

---

## How do I use charts?

To get started: 

1. Install the `@patternfly/react-charts` package by following [the README instructions](https://github.com/patternfly/patternfly-react/blob/main/packages/react-charts/README.md).
2. To use a particular chart in your project, import your desired option from the respective charts library: 

    - Victory: 
      ```
      import { Chart, ChartAxis, ChartGroup, ChartLine, ChartVoronoiContainer } from '@patternfly/react-charts/victory';
      ```
    
    - Echarts: 
      ```
      import { Charts } from '@patternfly/react-charts/echarts';
      import { LineChart } from 'echarts/charts';
      ```

### Developing with charts 

Default styles in the [@patternfly/react-charts package](https://www.npmjs.com/package/@patternfly/react-charts) are aligned with our light theme. Charts work with PatternFly's light theme by default&mdash;you don't need to import anything else. 

To support dark-themed charts, you must:
1. Import the [@patternfly/patternfly package](https://www.npmjs.com/package/@patternfly/patternfly), so that you can use our global tokens.
1. Import the stylesheet that contains dark theme styles by adding this line before importing your main application component: `import '@patternfly/patternfly/patternfly-charts.css';`
    - Once you import this file, you'll have access to [all chart variables](https://www.npmjs.com/package/@patternfly/patternfly?activeTab=code). Beyond dark theme, you could use these variables to match the style of other UI elements to your chart styles. 

To display the list of all available chart tokens, filter for "charts" in [the design tokens table](/foundations-and-styles/design-tokens/all-design-tokens). 

### Customizing visuals

To adjust the visual presentation of your chart, refer to the following guidelines for how to utilize: 
- **[Chart design guidelines:](/components/charts/overview/design-guidelines)** General overview of chart elements and types, with guidelines for usage.
- **[Colors:](/components/charts/colors)** Examples and guidance for applying themes and combining colors within charts.
- **[Patterns:](/components/charts/patterns)** Examples of using patterns within charts, like stripes and lines. 
- **[Tooltips:](/components/charts/tooltips)** Examples and guidance for adding tooltips to charts.