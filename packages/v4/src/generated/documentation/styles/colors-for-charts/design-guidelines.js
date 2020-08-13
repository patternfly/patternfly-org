import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport8 from '../../../../content/design-guidelines/styles/colors-for-charts/./fewvariables.png';
import srcImport9 from '../../../../content/design-guidelines/styles/colors-for-charts/./nestedvariables.png';
import srcImport10 from '../../../../content/design-guidelines/styles/colors-for-charts/./manyvariables.png';
import theSystem from '../../../../content/design-guidelines/styles/colors-for-charts/./thesystem.gif';
import oneFamily from '../../../../content/design-guidelines/styles/colors-for-charts/./onefamily.gif';
import { Alert, Gallery, GalleryItem, Grid, GridItem } from '@patternfly/react-core';
import '../../../../content/design-guidelines/styles/colors-for-charts/./colors-for-charts.css';

export const DocumentationStylesColorsForChartsDesignGuidelinesDocs = {
  "slug": "/documentation/styles/colors-for-charts/design-guidelines",
  "source": "design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/master/src/content/design-guidelines/styles/colors-for-charts/colors-for-charts.md",
  "section": "styles",
  "id": "Colors for charts",
  "title": "Colors for charts",
  "toc": [
    "Chart colors",
    "The system",
    "Using the system with one color family"
  ]
};
DocumentationStylesColorsForChartsDesignGuidelinesDocs.liveContext = {
  theSystem,
  oneFamily,
  Alert,
  Gallery,
  GalleryItem,
  Grid,
  GridItem
};
DocumentationStylesColorsForChartsDesignGuidelinesDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Chart colors`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Colors for charts includes a recommended set of colors proposed for bar charts, donut charts and pie charts. There are six base colors (blue to orange) that the system is built on. Each base color has its own color family, which includes lighter and darker hues of the base. These families use a monochromatic color order. They are organized in a way that increases contrast while still looking extremely visually appealing. The variation of colors will depend on the type and amount of data at hand.`}
    </p>
    <Grid>
      <GridItem span={2}>
        <Grid>
          <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--blue-1"/>
</GridItem>
                    <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--information">
              <div>
                <p {...{"className":"ws-p"}}>
                  {`#8BC1F7`}
                </p>
</div>
                            <div className="ws-content-css-var-text">
                <p {...{"className":"ws-p"}}>
                  {`Global CSS Variable`}
                </p>
</div>
                            <div>
                <code>
                  <p {...{"className":"ws-p"}}>
                    {`--pf-chart-color-blue-100`}
                  </p>
</code>
</div>
</div>
</GridItem>
</Grid>
</GridItem>
            <GridItem span={2}>
        <Grid>
          <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--blue-2"/>
</GridItem>
                    <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--information">
              <div>
                <p {...{"className":"ws-p"}}>
                  {`#519DE9`}
                </p>
</div>
                            <div className="ws-content-css-var-text">
                <p {...{"className":"ws-p"}}>
                  {`Global CSS Variable`}
                </p>
</div>
                            <div>
                <code>
                  <p {...{"className":"ws-p"}}>
                    {`--pf-chart-color-blue-200`}
                  </p>
</code>
</div>
</div>
</GridItem>
</Grid>
</GridItem>
            <GridItem span={2}>
        <Grid>
          <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--blue-3"/>
</GridItem>
                    <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--information">
              <div>
                <p {...{"className":"ws-p"}}>
                  {`#0066CC`}
                </p>
</div>
                            <div className="ws-content-css-var-text">
                <p {...{"className":"ws-p"}}>
                  {`Global CSS Variable`}
                </p>
</div>
                            <div>
                <code>
                  <p {...{"className":"ws-p"}}>
                    {`--pf-chart-color-blue-300`}
                  </p>
</code>
</div>
</div>
</GridItem>
</Grid>
</GridItem>
            <GridItem span={2}>
        <Grid>
          <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--blue-4"/>
</GridItem>
                    <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--information">
              <div>
                <p {...{"className":"ws-p"}}>
                  {`#004B95`}
                </p>
</div>
                            <div className="ws-content-css-var-text">
                <p {...{"className":"ws-p"}}>
                  {`Global CSS Variable`}
                </p>
</div>
                            <div>
                <code>
                  <p {...{"className":"ws-p"}}>
                    {`--pf-chart-color-blue-400`}
                  </p>
</code>
</div>
</div>
</GridItem>
</Grid>
</GridItem>
            <GridItem span={2}>
        <Grid>
          <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--blue-5"/>
</GridItem>
                    <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--information">
              <div>
                <p {...{"className":"ws-p"}}>
                  {`#002F5D`}
                </p>
</div>
                            <div className="ws-content-css-var-text">
                <p {...{"className":"ws-p"}}>
                  {`Global CSS Variable`}
                </p>
</div>
                            <div>
                <code>
                  <p {...{"className":"ws-p"}}>
                    {`--pf-chart-color-blue-500`}
                  </p>
</code>
</div>
</div>
</GridItem>
</Grid>
</GridItem>
            <GridItem span={2}/>
            <GridItem span={2}>
        <Grid>
          <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--green-1"/>
</GridItem>
                    <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--information">
              <div>
                <p {...{"className":"ws-p"}}>
                  {`#BDE2B9`}
                </p>
</div>
                            <div className="ws-content-css-var-text">
                <p {...{"className":"ws-p"}}>
                  {`Global CSS Variable`}
                </p>
</div>
                            <div>
                <code>
                  <p {...{"className":"ws-p"}}>
                    {`--pf-chart-color-green-100`}
                  </p>
</code>
</div>
</div>
</GridItem>
</Grid>
</GridItem>
            <GridItem span={2}>
        <Grid>
          <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--green-2"/>
</GridItem>
                    <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--information">
              <div>
                <p {...{"className":"ws-p"}}>
                  {`#7CC674`}
                </p>
</div>
                            <div className="ws-content-css-var-text">
                <p {...{"className":"ws-p"}}>
                  {`Global CSS Variable`}
                </p>
</div>
                            <div>
                <code>
                  <p {...{"className":"ws-p"}}>
                    {`--pf-chart-color-green-200`}
                  </p>
</code>
</div>
</div>
</GridItem>
</Grid>
</GridItem>
            <GridItem span={2}>
        <Grid>
          <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--green-3"/>
</GridItem>
                    <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--information">
              <div>
                <p {...{"className":"ws-p"}}>
                  {`#4CB140`}
                </p>
</div>
                            <div className="ws-content-css-var-text">
                <p {...{"className":"ws-p"}}>
                  {`Global CSS Variable`}
                </p>
</div>
                            <div>
                <code>
                  <p {...{"className":"ws-p"}}>
                    {`--pf-chart-color-green-300`}
                  </p>
</code>
</div>
</div>
</GridItem>
</Grid>
</GridItem>
            <GridItem span={2}>
        <Grid>
          <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--green-4"/>
</GridItem>
                    <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--information">
              <div>
                <p {...{"className":"ws-p"}}>
                  {`#38812F`}
                </p>
</div>
                            <div className="ws-content-css-var-text">
                <p {...{"className":"ws-p"}}>
                  {`Global CSS Variable`}
                </p>
</div>
                            <div>
                <code>
                  <p {...{"className":"ws-p"}}>
                    {`--pf-chart-color-green-400`}
                  </p>
</code>
</div>
</div>
</GridItem>
</Grid>
</GridItem>
            <GridItem span={2}>
        <Grid>
          <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--green-5"/>
</GridItem>
                    <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--information">
              <div>
                <p {...{"className":"ws-p"}}>
                  {`#23511E`}
                </p>
</div>
                            <div className="ws-content-css-var-text">
                <p {...{"className":"ws-p"}}>
                  {`Global CSS Variable`}
                </p>
</div>
                            <div>
                <code>
                  <p {...{"className":"ws-p"}}>
                    {`--pf-chart-color-green-500`}
                  </p>
</code>
</div>
</div>
</GridItem>
</Grid>
</GridItem>
            <GridItem span={2}/>
            <GridItem span={2}>
        <Grid>
          <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--cyan-1"/>
</GridItem>
                    <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--information">
              <div>
                <p {...{"className":"ws-p"}}>
                  {`#A2D9D9`}
                </p>
</div>
                            <div className="ws-content-css-var-text">
                <p {...{"className":"ws-p"}}>
                  {`Global CSS Variable`}
                </p>
</div>
                            <div>
                <code>
                  <p {...{"className":"ws-p"}}>
                    {`--pf-chart-color-cyan-100`}
                  </p>
</code>
</div>
</div>
</GridItem>
</Grid>
</GridItem>
            <GridItem span={2}>
        <Grid>
          <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--cyan-2"/>
</GridItem>
                    <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--information">
              <div>
                <p {...{"className":"ws-p"}}>
                  {`#73C5C5`}
                </p>
</div>
                            <div className="ws-content-css-var-text">
                <p {...{"className":"ws-p"}}>
                  {`Global CSS Variable`}
                </p>
</div>
                            <div>
                <code>
                  <p {...{"className":"ws-p"}}>
                    {`--pf-chart-color-cyan-200`}
                  </p>
</code>
</div>
</div>
</GridItem>
</Grid>
</GridItem>
            <GridItem span={2}>
        <Grid>
          <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--cyan-3"/>
</GridItem>
                    <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--information">
              <div>
                <p {...{"className":"ws-p"}}>
                  {`#009596`}
                </p>
</div>
                            <div className="ws-content-css-var-text">
                <p {...{"className":"ws-p"}}>
                  {`Global CSS Variable`}
                </p>
</div>
                            <div>
                <code>
                  <p {...{"className":"ws-p"}}>
                    {`--pf-chart-color-cyan-300`}
                  </p>
</code>
</div>
</div>
</GridItem>
</Grid>
</GridItem>
            <GridItem span={2}>
        <Grid>
          <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--cyan-4"/>
</GridItem>
                    <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--information">
              <div>
                <p {...{"className":"ws-p"}}>
                  {`#005F60`}
                </p>
</div>
                            <div className="ws-content-css-var-text">
                <p {...{"className":"ws-p"}}>
                  {`Global CSS Variable`}
                </p>
</div>
                            <div>
                <code>
                  <p {...{"className":"ws-p"}}>
                    {`--pf-chart-color-cyan-400`}
                  </p>
</code>
</div>
</div>
</GridItem>
</Grid>
</GridItem>
            <GridItem span={2}>
        <Grid>
          <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--cyan-5"/>
</GridItem>
                    <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--information">
              <div>
                <p {...{"className":"ws-p"}}>
                  {`#003737`}
                </p>
</div>
                            <div className="ws-content-css-var-text">
                <p {...{"className":"ws-p"}}>
                  {`Global CSS Variable`}
                </p>
</div>
                            <div>
                <code>
                  <p {...{"className":"ws-p"}}>
                    {`--pf-chart-color-cyan-500`}
                  </p>
</code>
</div>
</div>
</GridItem>
</Grid>
</GridItem>
            <GridItem span={2}/>
            <GridItem span={2}>
        <Grid>
          <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--purple-1"/>
</GridItem>
                    <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--information">
              <div>
                <p {...{"className":"ws-p"}}>
                  {`#B2B0EA`}
                </p>
</div>
                            <div className="ws-content-css-var-text">
                <p {...{"className":"ws-p"}}>
                  {`Global CSS Variable`}
                </p>
</div>
                            <div>
                <code>
                  <p {...{"className":"ws-p"}}>
                    {`--pf-chart-color-purple-100`}
                  </p>
</code>
</div>
</div>
</GridItem>
</Grid>
</GridItem>
            <GridItem span={2}>
        <Grid>
          <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--purple-2"/>
</GridItem>
                    <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--information">
              <div>
                <p {...{"className":"ws-p"}}>
                  {`#8481DD`}
                </p>
</div>
                            <div className="ws-content-css-var-text">
                <p {...{"className":"ws-p"}}>
                  {`Global CSS Variable`}
                </p>
</div>
                            <div>
                <code>
                  <p {...{"className":"ws-p"}}>
                    {`--pf-chart-color-purple-200`}
                  </p>
</code>
</div>
</div>
</GridItem>
</Grid>
</GridItem>
            <GridItem span={2}>
        <Grid>
          <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--purple-3"/>
</GridItem>
                    <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--information">
              <div>
                <p {...{"className":"ws-p"}}>
                  {`#5752D1`}
                </p>
</div>
                            <div className="ws-content-css-var-text">
                <p {...{"className":"ws-p"}}>
                  {`Global CSS Variable`}
                </p>
</div>
                            <div>
                <code>
                  <p {...{"className":"ws-p"}}>
                    {`--pf-chart-color-purple-300`}
                  </p>
</code>
</div>
</div>
</GridItem>
</Grid>
</GridItem>
            <GridItem span={2}>
        <Grid>
          <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--purple-4"/>
</GridItem>
                    <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--information">
              <div>
                <p {...{"className":"ws-p"}}>
                  {`#3C3D99`}
                </p>
</div>
                            <div className="ws-content-css-var-text">
                <p {...{"className":"ws-p"}}>
                  {`Global CSS Variable`}
                </p>
</div>
                            <div>
                <code>
                  <p {...{"className":"ws-p"}}>
                    {`--pf-chart-color-purple-400`}
                  </p>
</code>
</div>
</div>
</GridItem>
</Grid>
</GridItem>
            <GridItem span={2}>
        <Grid>
          <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--purple-5"/>
</GridItem>
                    <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--information">
              <div>
                <p {...{"className":"ws-p"}}>
                  {`#2A265F`}
                </p>
</div>
                            <div className="ws-content-css-var-text">
                <p {...{"className":"ws-p"}}>
                  {`Global CSS Variable`}
                </p>
</div>
                            <div>
                <code>
                  <p {...{"className":"ws-p"}}>
                    {`--pf-chart-color-purple-500`}
                  </p>
</code>
</div>
</div>
</GridItem>
</Grid>
</GridItem>
            <GridItem span={2}/>
            <GridItem span={2}>
        <Grid>
          <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--gold-1"/>
</GridItem>
                    <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--information">
              <div>
                <p {...{"className":"ws-p"}}>
                  {`#F9E0A2`}
                </p>
</div>
                            <div className="ws-content-css-var-text">
                <p {...{"className":"ws-p"}}>
                  {`Global CSS Variable`}
                </p>
</div>
                            <div>
                <code>
                  <p {...{"className":"ws-p"}}>
                    {`--pf-chart-color-gold-100`}
                  </p>
</code>
</div>
</div>
</GridItem>
</Grid>
</GridItem>
            <GridItem span={2}>
        <Grid>
          <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--gold-2"/>
</GridItem>
                    <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--information">
              <div>
                <p {...{"className":"ws-p"}}>
                  {`#F6D173`}
                </p>
</div>
                            <div className="ws-content-css-var-text">
                <p {...{"className":"ws-p"}}>
                  {`Global CSS Variable`}
                </p>
</div>
                            <div>
                <code>
                  <p {...{"className":"ws-p"}}>
                    {`--pf-chart-color-gold-200`}
                  </p>
</code>
</div>
</div>
</GridItem>
</Grid>
</GridItem>
            <GridItem span={2}>
        <Grid>
          <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--gold-3"/>
</GridItem>
                    <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--information">
              <div>
                <p {...{"className":"ws-p"}}>
                  {`#F4C145`}
                </p>
</div>
                            <div className="ws-content-css-var-text">
                <p {...{"className":"ws-p"}}>
                  {`Global CSS Variable`}
                </p>
</div>
                            <div>
                <code>
                  <p {...{"className":"ws-p"}}>
                    {`--pf-chart-color-gold-300`}
                  </p>
</code>
</div>
</div>
</GridItem>
</Grid>
</GridItem>
            <GridItem span={2}>
        <Grid>
          <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--gold-4"/>
</GridItem>
                    <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--information">
              <div>
                <p {...{"className":"ws-p"}}>
                  {`#F0AB00`}
                </p>
</div>
                            <div className="ws-content-css-var-text">
                <p {...{"className":"ws-p"}}>
                  {`Global CSS Variable`}
                </p>
</div>
                            <div>
                <code>
                  <p {...{"className":"ws-p"}}>
                    {`--pf-chart-color-gold-400`}
                  </p>
</code>
</div>
</div>
</GridItem>
</Grid>
</GridItem>
            <GridItem span={2}>
        <Grid>
          <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--gold-5"/>
</GridItem>
                    <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--information">
              <div>
                <p {...{"className":"ws-p"}}>
                  {`#C58C00`}
                </p>
</div>
                            <div className="ws-content-css-var-text">
                <p {...{"className":"ws-p"}}>
                  {`Global CSS Variable`}
                </p>
</div>
                            <div>
                <code>
                  <p {...{"className":"ws-p"}}>
                    {`--pf-chart-color-gold-500`}
                  </p>
</code>
</div>
</div>
</GridItem>
</Grid>
</GridItem>
            <GridItem span={2}/>
            <GridItem span={2}>
        <Grid>
          <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--orange-1"/>
</GridItem>
                    <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--information">
              <div>
                <p {...{"className":"ws-p"}}>
                  {`#F4B678`}
                </p>
</div>
                            <div className="ws-content-css-var-text">
                <p {...{"className":"ws-p"}}>
                  {`Global CSS Variable`}
                </p>
</div>
                            <div>
                <code>
                  <p {...{"className":"ws-p"}}>
                    {`--pf-chart-color-orange-100`}
                  </p>
</code>
</div>
</div>
</GridItem>
</Grid>
</GridItem>
            <GridItem span={2}>
        <Grid>
          <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--orange-2"/>
</GridItem>
                    <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--information">
              <div>
                <p {...{"className":"ws-p"}}>
                  {`#EF9234`}
                </p>
</div>
                            <div className="ws-content-css-var-text">
                <p {...{"className":"ws-p"}}>
                  {`Global CSS Variable`}
                </p>
</div>
                            <div>
                <code>
                  <p {...{"className":"ws-p"}}>
                    {`--pf-chart-color-orange-200`}
                  </p>
</code>
</div>
</div>
</GridItem>
</Grid>
</GridItem>
            <GridItem span={2}>
        <Grid>
          <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--orange-3"/>
</GridItem>
                    <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--information">
              <div>
                <p {...{"className":"ws-p"}}>
                  {`#EC7A08`}
                </p>
</div>
                            <div className="ws-content-css-var-text">
                <p {...{"className":"ws-p"}}>
                  {`Global CSS Variable`}
                </p>
</div>
                            <div>
                <code>
                  <p {...{"className":"ws-p"}}>
                    {`--pf-chart-color-orange-300`}
                  </p>
</code>
</div>
</div>
</GridItem>
</Grid>
</GridItem>
            <GridItem span={2}>
        <Grid>
          <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--orange-4"/>
</GridItem>
                    <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--information">
              <div>
                <p {...{"className":"ws-p"}}>
                  {`#C46100`}
                </p>
</div>
                            <div className="ws-content-css-var-text">
                <p {...{"className":"ws-p"}}>
                  {`Global CSS Variable`}
                </p>
</div>
                            <div>
                <code>
                  <p {...{"className":"ws-p"}}>
                    {`--pf-chart-color-orange-400`}
                  </p>
</code>
</div>
</div>
</GridItem>
</Grid>
</GridItem>
            <GridItem span={2}>
        <Grid>
          <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--orange-5"/>
</GridItem>
                    <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--information">
              <div>
                <p {...{"className":"ws-p"}}>
                  {`#8F4700`}
                </p>
</div>
                            <div className="ws-content-css-var-text">
                <p {...{"className":"ws-p"}}>
                  {`Global CSS Variable`}
                </p>
</div>
                            <div>
                <code>
                  <p {...{"className":"ws-p"}}>
                    {`--pf-chart-color-orange-500`}
                  </p>
</code>
</div>
</div>
</GridItem>
</Grid>
</GridItem>
            <GridItem span={2}/>
            <GridItem span={2}>
        <Grid>
          <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--black-1"/>
</GridItem>
                    <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--information">
              <div>
                <p {...{"className":"ws-p"}}>
                  {`#D2D2D2`}
                </p>
</div>
                            <div className="ws-content-css-var-text">
                <p {...{"className":"ws-p"}}>
                  {`Global CSS Variable`}
                </p>
</div>
                            <div>
                <code>
                  <p {...{"className":"ws-p"}}>
                    {`--pf-chart-color-black-100`}
                  </p>
</code>
</div>
</div>
</GridItem>
</Grid>
</GridItem>
            <GridItem span={2}>
        <Grid>
          <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--black-2"/>
</GridItem>
                    <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--information">
              <div>
                <p {...{"className":"ws-p"}}>
                  {`#BBB`}
                </p>
</div>
                            <div className="ws-content-css-var-text">
                <p {...{"className":"ws-p"}}>
                  {`Global CSS Variable`}
                </p>
</div>
                            <div>
                <code>
                  <p {...{"className":"ws-p"}}>
                    {`--pf-chart-color-black-200`}
                  </p>
</code>
</div>
</div>
</GridItem>
</Grid>
</GridItem>
            <GridItem span={2}>
        <Grid>
          <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--black-3"/>
</GridItem>
                    <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--information">
              <div>
                <p {...{"className":"ws-p"}}>
                  {`#8B8D8F`}
                </p>
</div>
                            <div className="ws-content-css-var-text">
                <p {...{"className":"ws-p"}}>
                  {`Global CSS Variable`}
                </p>
</div>
                            <div>
                <code>
                  <p {...{"className":"ws-p"}}>
                    {`--pf-chart-color-black-300`}
                  </p>
</code>
</div>
</div>
</GridItem>
</Grid>
</GridItem>
            <GridItem span={2}>
        <Grid>
          <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--black-4"/>
</GridItem>
                    <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--information">
              <div>
                <p {...{"className":"ws-p"}}>
                  {`#72767B`}
                </p>
</div>
                            <div className="ws-content-css-var-text">
                <p {...{"className":"ws-p"}}>
                  {`Global CSS Variable`}
                </p>
</div>
                            <div>
                <code>
                  <p {...{"className":"ws-p"}}>
                    {`--pf-chart-color-black-400`}
                  </p>
</code>
</div>
</div>
</GridItem>
</Grid>
</GridItem>
            <GridItem span={2}>
        <Grid>
          <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--black-5"/>
</GridItem>
                    <GridItem span={12}>
            <div className="ws-content-chart-colors-gallery--information">
              <div>
                <p {...{"className":"ws-p"}}>
                  {`#4D5258`}
                </p>
</div>
                            <div className="ws-content-css-var-text">
                <p {...{"className":"ws-p"}}>
                  {`Global CSS Variable`}
                </p>
</div>
                            <div>
                <code>
                  <p {...{"className":"ws-p"}}>
                    {`--pf-chart-color-black-500`}
                  </p>
</code>
</div>
</div>
</GridItem>
</Grid>
</GridItem>
            <GridItem span={2}/>
</Grid>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`The system`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Although the system may seem complex, it is completely customizable. The idea is that you can put together your desired colors and amount of colors and the system will still sort them correctly. Here’s how the system works:`}
    </p>
    <img
  alt="chart color system example"
  src={theSystem}
/>
    <p {...{"className":"ws-p"}}>
      {`In this instance, there are only four base colors, therefore four color families. The order begins by going through each base color. Next, it alternates between the lightest and darkest values of each family. Finally, if you still need more colors, it alternates between the second lightest and second darkest colors of each family. In variable-terms: #1a-d base colors, #2a-d `}
      {`[color]`}
      {`-100/`}
      {`[color]`}
      {`-500 alternating, #3a-d `}
      {`[color]`}
      {`-500/`}
      {`[color]`}
      {`-100 alternating, #4a-d `}
      {`[color]`}
      {`-200/`}
      {`[color]`}
      {`-400 alternating, and #5a-d `}
      {`[color]`}
      {`-400/`}
      {`[color]`}
      {`-200 alternating. No matter the colors inputted, the process will remain the same.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Chart with few variables (1-6)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`If you are dealing with data that includes six or less variables, we recommend using the base colors to represent each. For example, if you collected data on how many sales were made per product at your organization during one period of time, it could look like this if plotted using a bar chart.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport8} {...{"alt":"Chart with few variables","className":"ws-img"}}>
      </img>
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Chart with nested (grouped) variables`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`If you have a set of data that includes grouped variables, we recommend using the color families to represent each. Grouped variables would include a set of parents and children variables. Each group would use a color family that would be represented in the same order as the base colors are listed. So, depending on the amount of nested variables you have, the first color family would be blue, then green, cyan, etc. The colors would start over if there are more than 6 groups, returning back to the blue family. An example of this type of data would be quarterly sales broken down by geographical locations.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport9} {...{"alt":"Chart with nested variables","className":"ws-img"}}>
      </img>
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Chart with many variables (>6)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`If the set of data includes more than six variables, we recommend applying the multichromatic order system, which uses all of the colors in the color system, to the data. This includes a mix of base colors and colors from their family. An example of this type of data would be the cost of living expenses during a period of time.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport10} {...{"alt":"Chart with many variables","className":"ws-img"}}>
      </img>
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Using the system with one color family`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`You can also use the color order system with one color family. This creates a monochromatic effect. It works using the same logic and order. We recommend using this system for charts with nested variables. The order begins by going through each base color, then lightest, darkest, second lightest, and ending with second darkest. In variable-terms: #1 `}
      {`[color]`}
      {`-300 (base color), #2 `}
      {`[color]`}
      {`-100, #3 `}
      {`[color]`}
      {`-500, #4 `}
      {`[color]`}
      {`-200, #5 `}
      {`[color]`}
      {`-400. The hues will always follow this order.`}
    </p>
    <img
  alt="monochromatic chart color system example"
  src={oneFamily}
/>
  </React.Fragment>
);
DocumentationStylesColorsForChartsDesignGuidelinesDocs.Component.displayName = 'DocumentationStylesColorsForChartsDesignGuidelinesDocs';
