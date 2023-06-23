import React from 'react';
import { Grid, GridItem } from '@patternfly/react-core';
import '@patternfly/patternfly/patternfly-charts-theme-dark.css';

const colorFamilies = [
  {headingText: 'Blue', varColor: 'blue'},
  {headingText: 'Green', varColor: 'green'},
  {headingText: 'Cyan', varColor: 'cyan'},
  {headingText: 'Purple', varColor: 'purple'},
  {headingText: 'Gold', varColor: 'gold'},
  {headingText: 'Orange', varColor: 'orange'},
  {headingText: 'Red', varColor: 'red'},
  {headingText: 'Grey', varColor: 'black'}
];

const ColorEntry = ({varColor, idx, computedStyles}) => {
  const varName = `--pf-v5-chart-color-${varColor}-${idx}00`;
  const varValue = computedStyles?.getPropertyValue
    ? computedStyles.getPropertyValue(varName).toUpperCase()
    : ''; 
  return (
    <>
      <GridItem span={2}>
        <div className="ws-content-chart-colors" style={{ backgroundColor: `var(${varName})`}}></div>
      </GridItem>
      <GridItem span={10}>
        <div className="ws-content-chart-colors-gallery--information">
          <div>{varValue}</div>
          <div><code className="ws-code">{varName}</code></div>
        </div>
      </GridItem>
    </>
  );
};

const ColorFamily = ({headingText, varColor, computedStyles}) => {
  const entries = [];
  for (let i = 1; i < 6; i++) {
    entries.push(<ColorEntry varColor={varColor} idx={i} computedStyles={computedStyles} key={`${varColor}-${i}`} />);
  }

  return (
    <GridItem sm={12} md={6} lg={4}>
      <h3 className="pf-v5-c-title pf-m-xl ws-heading ws-title ws-h3">{headingText} family</h3>
      <Grid>
        {entries}
      </Grid>
    </GridItem>
  );
};

const ColorsGrid = () => {
  let [computedStyles, setComputedStyles] = React.useState();

  const updateComputedStyles = mutationList => {
    for (const mutation of mutationList) {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === 'class'
      ) {
        setComputedStyles(getComputedStyle(document.documentElement));
      }
    }
  }
  
  React.useEffect(() => {
    const getInitialRootStyles = () => typeof window !== "undefined" && window.getComputedStyle && getComputedStyle(document.documentElement);
    setComputedStyles(getInitialRootStyles);
    const observer = new MutationObserver(updateComputedStyles);
    observer.observe(document.documentElement, {attributes: true});
    return () => observer.disconnect();
  }, []);

  return (
    <Grid>
      {colorFamilies.map(({headingText, varColor}) => (
        <ColorFamily headingText={headingText} varColor={varColor} computedStyles={computedStyles} key={`${headingText}`} />
      ))}
    </Grid>
  )
};

export default ColorsGrid;
