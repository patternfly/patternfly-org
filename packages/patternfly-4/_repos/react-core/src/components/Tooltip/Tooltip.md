---
title: 'Tooltip'
cssPrefix: 'pf-c-tooltip'
---

import { Tooltip, TooltipPosition, Checkbox } from '@patternfly/react-core';

## Simple tooltip
```js
import React from 'react';
import { Tooltip, TooltipPosition, Checkbox } from '@patternfly/react-core';

<Tooltip
  position="right"
  content={
    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</div>
  }
>
  <span>Hover to view tooltip</span>
</Tooltip>
```

## Tooltip positions
```js
import React from 'react';
import { Tooltip, TooltipPosition, Checkbox } from '@patternfly/react-core';

class TooltipPositions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: TooltipPosition.top,
      keepInViewChecked: true
    };
    this.handleKeepInViewChange = checked => {
      this.setState({ keepInViewChecked: checked });
    };
  }

  render() {
    return (
      <div>
        <div>
          <span style={{ paddingRight: '10px' }}>Tooltip Position</span>
          <select
            onChange={event => {
              this.setState({ position: event.target.value });
            }}
          >
            {Object.keys(TooltipPosition).map(key => (
              <option key={key} value={TooltipPosition[key]}>
                {TooltipPosition[key]}
              </option>
            ))}
          </select>
          <div style={{ paddingTop: '10px' }}>
            <Checkbox
              label="Flip tooltip if the position falls outside the view"
              isChecked={this.state.keepInViewChecked}
              onChange={this.handleKeepInViewChange}
              aria-label="Keep in view"
              id="check-3"
            />
          </div>
        </div>

        <div style={{ margin: '50px' }}>
          <Tooltip
            position={this.state.position}
            enableFlip={this.state.keepInViewChecked}
            content={
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
              </div>
            }
          >
            <span>Hover to view tooltip</span>
          </Tooltip>
        </div>
      </div>
    );
  }
}
```
