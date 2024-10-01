import React from 'react';
import { Grid, GridItem, Flex, FlexItem, Content } from '@patternfly/react-core';
import '@patternfly/patternfly/patternfly-charts.css';

const colorFamilies = [
  'Blue',
  'Green',
  'Cyan',
  'Purple',
  'Gold',
  'Orange',
  'Red',
  'Black'
];

const ColorEntry = ({color, idx, computedStyles}) => {
  const varName = `--pf-v6-chart-color-${color.toLowerCase()}-${idx}00`;
  const varValue = computedStyles?.getPropertyValue
    ? computedStyles.getPropertyValue(varName).toUpperCase()
    : ''; 
  return (
    <Flex gap={{ default: 'gapSm' }} alignItems={{ default: 'alignItemsCenter'}}>
      <FlexItem>
        <div className="ws-content-chart-colors" style={{ backgroundColor: `var(${varName})`}}></div>
      </FlexItem>
      <FlexItem>
        <Flex className="ws-content-chart-colors-gallery--information" direction={{ default: 'column' }} gap={{ default: 'gapXs' }}>
          <FlexItem>{varValue}</FlexItem>
          <FlexItem><code className="ws-code">{varName}</code></FlexItem>
        </Flex>
      </FlexItem>
    </Flex>
  );
};

const ColorFamily = ({color, computedStyles}) => {
  const entries = [];
  for (let i = 1; i < 6; i++) {
    entries.push(<ColorEntry color={color} idx={i} computedStyles={computedStyles} key={`${color}-${i}`} />);
  }

  return (
    <GridItem>
      <Content className="ws-heading ws-title" component="h3" isEditorial>{color} family</Content>
      <Flex direction={{ default: 'column' }}  gap={{ default: 'gapMd' }}>
        {entries}
      </Flex>
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
    <Grid className="ws-colors-grid" hasGutter sm={12} md={6} lg={4}>
      {colorFamilies.map(color => (
        <ColorFamily color={color} computedStyles={computedStyles} key={color} />
      ))}
    </Grid>
  )
};

export default ColorsGrid;
