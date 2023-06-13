import React from "react";
import { CodeBlock, CodeBlockCode, TextContent, Text, TextList, TextListItem, TextVariants } from '@patternfly/react-core';

export const releaseNotes = [
  {
    component: "About modal",
    description: (<>Removed the <code className='ws-code'>AboutModalBoxHero</code> sub-component.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8931",
    repo: "react",
    fixedWithCodeMod: false
  }, {
    component: "Accordion",
    description: (<>Renamed the <code className='ws-code'>AccordionExpandedContentBody</code> component to <code className='ws-code'>AccordionExpandableContentBody</code>.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8525",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<AccordionExpandedContentBody>Body</AccordionExpandedContentBody>`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<AccordionExpandableContentBody>Body</AccordionExpandableContentBody>`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Accordion",
    description: (<>Renamed the <code className='ws-code'>large</code> prop value of the <code className='ws-code'>displaySize</code> prop to <code className='ws-code'>lg</code>.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8206",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Accordion displaySize="large" />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Accordion displaySize="lg" />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Alert",
    description: (<>Removed the <code className='ws-code'>aria-label</code> prop.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8649",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>The <code className='ws-code'>aria-label</code> prop should not be used on an <code className='ws-code'>Alert</code> as it is not well supported by assistive technologies.</Text>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Alert aria-label="Error alert" />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Alert  />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Alert",
    description: (<>Replaced the <code className='ws-code'>titleHeadingLevel</code> prop with <code className='ws-code'>component</code>.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8518",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Alert titleHeadingLevel="h4" />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Alert component="h4" />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Application launcher",
    description: (<>Deprecated the <code class='ws-code'>ApplicationLauncher</code> components.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8836",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>Codemods will update import and export paths to our deprecated directory, but we recommend replacing it with our new <code className='ws-code'>Dropdown</code> or <code className='ws-code'>Select</code> implementation.</Text>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`import { ApplicationLauncher } from '@patternfly/react-core';`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`import { ApplicationLauncher } from '@patternfly/react-core/deprecated';`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Application launcher",
    description: (<>Updated callback props to include the <code class='ws-code'>event</code> parameter as the first parameter.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8756",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>The <code class='ws-code'>onFavorite</code> and <code class='ws-code'>onSearch</code> props now take <code class='ws-code'>event</code> as the first parameter. Handlers may need to be updated.</Text>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<ApplicationLauncher onFavorite={(id) => handler(id)} onSearch={(text) => searchHandler(text)}/>
const handler1 = (id) => {};
const searchHandler1 = (text) => {};
<ApplicationLauncher onFavorite={handler1} onSearch={searchHandler1}>
function handler2(id) {};
function searchHandler2(text) {};
<ApplicationLauncher onFavorite={handler2} onSearch={searchHandler2}>`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<ApplicationLauncher onFavorite={(_event, id) => handler(id)} onSearch={(_event, text) => searchHandler(text)}/>
const handler1 = (_event, id) => {};
const searchHandler1 = (_event, text) => {};
<ApplicationLauncher onFavorite={handler1} onSearch={searchHandler1}>
function handler2(_event, id) {};
function searchHandler2(_event, text) {};
<ApplicationLauncher onFavorite={handler2} onSearch={searchHandler2}>`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Application launcher",
    description: (<>Replaced the internal input element with the <code class='ws-code'>SearchInput</code> component.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8293",
    repo: "react",
    fixedWithCodeMod: false
  }, {
    component: "Background image",
    description: (<>Removed the <code class='ws-code'>filter</code> prop and updated the <code class='ws-code'>src</code> prop.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8931",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>The <code class='ws-code'>filter</code> was removed. The <code class='ws-code'>src</code> prop's type was updated to just a string and will no longer accept a <code class='ws-code'>BackgroundImageSrcMap</code> object. Codemods will not update the <code class='ws-code'>src</code> prop, but will raise an error if its value is not a string.</Text>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<BackgroundImage filter={<SomeFilter />} src={{xs: 'file/path'}} />

const srcPath = {xs: 'file/path'};
<BackgroundImage src={srcPath} />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`// An error is raised for the src prop
<BackgroundImage  src={{xs: 'file/path'}} />

const srcPath = {xs: 'file/path'};
// An error is raised for the src prop
<BackgroundImage src={srcPath} />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Background image",
    description: (<>Removed the <code class='ws-code'>BackgroundImageSrcMap</code> interface.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8931",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`const backgroundImgSrcObj: BackgroundImageSrcMap = {};`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`const backgroundImgSrcObj = {};`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Banner",
    description: (<>Updated the <code class='ws-code'>variant</code> prop's type.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8808",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>The <code className='ws-code'>default</code> value is still valid, but the following values have been replaced with color values:</Text>
        <TextList>
          <TextListItem><code className='ws-code'>info</code> to <code className='ws-code'>blue</code> </TextListItem>
          <TextListItem><code className='ws-code'>danger</code> to <code className='ws-code'>red</code></TextListItem>
          <TextListItem><code className='ws-code'>success</code> to <code className='ws-code'>green</code></TextListItem>
          <TextListItem><code className='ws-code'>warning</code> to <code className='ws-code'>gold</code></TextListItem>
        </TextList>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Banner variant="danger" />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Banner variant="red" />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Button",
    description: (<>Replaced the <code class='ws-code'>isSmall</code> and <code class='ws-code'>isLarge</code> props with the <code class='ws-code'>size</code> prop.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8144",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>The <code className='ws-code'>size</code> prop acceps either <code class='ws-code'>sm</code> or <code class='ws-code'>lg</code> as a value.</Text>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Button isSmall />
<Button isLarge />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Button size="sm" />
<Button size="lg" />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Button",
    description: (<>Replaced the <code class='ws-code'>isSmall</code> and <code class='ws-code'>isLarge</code> props with the <code class='ws-code'>size</code> prop.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8144",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>The <code className='ws-code'>size</code> prop acceps either <code class='ws-code'>sm</code> or <code class='ws-code'>lg</code> as a value.</Text>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Button isSmall />
<Button isLarge />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Button size="sm" />
<Button size="lg" />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Calendar month",
    description: (<>Updated callback props to include the <code class='ws-code'>event</code> parameter as the first parameter.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8753",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>The <code class='ws-code'>onChange</code> and <code class='ws-code'>onMonthChange</code> props now take <code class='ws-code'>event</code> as the first parameter. Handlers may need to be updated.</Text>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<CalendarMonth onChange={(date) => handler(date)} onMonthChange={(newDate) => handler(newDate)} />
<CalendarMonth onMonthChange={(newDate, event) => handler(newDate, event)} />
const changeHandler1 = (date) => {};
const handler1 = (newDate, event) => {};
<CalendarMonth onChange={changeHandler1} onMonthChange={handler1}>
function changeHandler2(date) {};
function handler2(newDate, event) {};
<CalendarMonth onChange={changeHandler2} onMonthChange={handler2}>`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<CalendarMonth onChange={(_event, date) => handler(date)} onMonthChange={(_event, newDate) => handler(newDate)} />
<CalendarMonth onMonthChange={(event, newDate) => handler(newDate, event)} />
const changeHandler1 = (_event, date) => {};
const handler1 = (_event, newDate) => {};
<CalendarMonth onMonthChange={handler1}>
function changeHandler2(_event, date) {};
function handler2(_event, newDate) {};
<CalendarMonth onChange={changeHandler2} onMonthChange={handler2}>`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Charts",
    description: (<>Removed the <code class='ws-code'>getResizeObserver</code> function from <code className='ws-code'>@patternfly/react-charts</code>.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8533",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>The <code className='ws-code'>@patternfly/react-core</code> implementation should be used instead, which accepts a third parameter, <code className='ws-code'>useRequestAnimationFrame</code>.</Text>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`import { getResizeObserver } from "@patternfly/react-charts";`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`import { getResizeObserver } from "@patternfly/react-core";`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Charts",
    description: (<>Renamed light theme objects to remove "Light" from their name, and marked these objects as <code class='ws-code'>@private</code>. These objects should not be used directly, and should be replaced with the <code className='ws-code'>getTheme</code> function.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8590",
    repo: "react",
    fixedWithCodeMod: false
  }, {
    component: "Charts",
    description: (<>Removed <code class='ws-code'>ChartThemeVariant</code> from <code class='ws-code'>@patternfly/react-charts</code>.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8590",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Chart, ChartThemeVariant } from '@patternfly/react-charts';`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Chart } from '@patternfly/react-charts';`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Charts",
    description: (<>Removed dark theme objects from <code class='ws-code'>@patternfly/react-charts</code>.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8590",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`import { DarkBlueColorTheme, DarkCyanColorTheme, DarkGoldColorTheme, DarkGrayColorTheme, DarkGreenColorTheme, DarkMultiColorOrderedTheme, DarkMultiColorUnorderedTheme,
DarkOrangeColorTheme, DarkPurpleColorTheme, ChartLegend } from '@patternfly/react-charts';`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`import { ChartLegend } from '@patternfly/react-charts';`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Charts",
    description: (<>Removed <code class='ws-code'>themeVariant</code> properties from all components and the <code class='ws-code'>getCustomTheme</code> function in <code class='ws-code'>@patternfly/react-charts</code>.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8590",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Chart, ChartThemeColor, getCustomTheme } from '@patternfly/react-charts';

const customTheme = {...};
const newTheme = getCustomTheme(ChartThemeColor.default, 'light', customTheme);

return (
  <Chart themeVariant='light' theme={newTheme}/>
);`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Chart, ChartThemeColor, getCustomTheme } from '@patternfly/react-charts';

const customTheme = {...};
const newTheme = getCustomTheme(ChartThemeColor.default, customTheme);

return (
  <Chart theme={newTheme}/>
);`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Charts",
    description: (<>Removed various exports from <code class='ws-code'>@patternfly/react-charts</code>.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8869",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>The following are no longer exported:</Text>
        <TextList>
          <TextListItem><code classNAme='ws-code'>ChartAreaSortOrder</code></TextListItem>
          <TextListItem><code classNAme='ws-code'>ChartDonutLabelPosition</code></TextListItem>
          <TextListItem><code classNAme='ws-code'>ChartDonutSortOrder</code></TextListItem>
          <TextListItem><code classNAme='ws-code'>ChartDonutThresholdSortOrder</code></TextListItem>
          <TextListItem><code classNAme='ws-code'>ChartDonutUtilizationLabelPosition</code></TextListItem>
          <TextListItem><code classNAme='ws-code'>ChartDonutUtilizationSortOrder</code></TextListItem>
          <TextListItem><code classNAme='ws-code'>ChartGroupSortOrder</code></TextListItem>
          <TextListItem><code classNAme='ws-code'>ChartLabelPlacement</code></TextListItem>
          <TextListItem><code classNAme='ws-code'>ChartLegendOrientation</code></TextListItem>
          <TextListItem><code classNAme='ws-code'>ChartLegendRowGutter</code></TextListItem>
          <TextListItem><code classNAme='ws-code'>ChartLineSortOrder</code></TextListItem>
          <TextListItem><code classNAme='ws-code'>ChartPieLabelPosition</code></TextListItem>
          <TextListItem><code classNAme='ws-code'>ChartPieSortOrder</code></TextListItem>
          <TextListItem><code classNAme='ws-code'>ChartScatterSortOrder</code></TextListItem>
          <TextListItem><code classNAme='ws-code'>ChartDonutThresholdDonutOrientation</code></TextListItem>
          <TextListItem><code classNAme='ws-code'>ChartDonutThresholdLabelOrientation</code></TextListItem>
          <TextListItem><code classNAme='ws-code'>ChartDonutThresholdLabelPosition</code></TextListItem>
          <TextListItem><code classNAme='ws-code'>ChartLegendPosition</code></TextListItem>
          <TextListItem><code classNAme='ws-code'>ChartDonutSubTitlePosition</code></TextListItem>
          <TextListItem><code classNAme='ws-code'>ChartDonutThresholdSubTitlePosition</code></TextListItem>
          <TextListItem><code classNAme='ws-code'>ChartDonutUtilizationLegendOrientation</code></TextListItem>
          <TextListItem><code classNAme='ws-code'>ChartDonutUtilizationLegendPosition</code></TextListItem>
          <TextListItem><code classNAme='ws-code'>ChartDonutUtilizationSubTitlePosition</code></TextListItem>
          <TextListItem><code classNAme='ws-code'>ChartLabelDirection</code></TextListItem>
          <TextListItem><code classNAme='ws-code'>ChartPieLegendPosition</code></TextListItem>
          <TextListItem><code classNAme='ws-code'>ChartVoronoiDimension</code></TextListItem>
        </TextList>
      </TextContent>
    ),
    repo: "react",
    fixedWithCodeMod: false
  }, {
    component: "Charts",
    description: (<>A <code class='ws-code'>Tooltip</code> from <code class='ws-code'>@patternfly/react-core</code> used inside a <code class='ws-code'>@patternfly/react-charts</code> component should be wrapped inside a <code class='ws-code'>foreignObject</code>.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8592",
    repo: "react",
    fixedWithCodeMod: false
  }, {
    component: "Checkbox",
    description: (<>Updated <code class='ws-code'>onChange</code> prop so that the <code class='ws-code'>event</code> parameter is the first parameter.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8750",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Checkbox onChange={(id) => handler(id)} />
<Checkbox onChange={(id, event) => handler(id, event)} />
const handler1 = (id, event) => {};
<Checkbox onChange={handler1}>
function handler2(id, event) {};
<Checkbox onChange={handler2}>`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Checkbox onChange={(_event, id) => handler(id)} />
<Checkbox onChange={(event, id) => handler(id, event)} />
const handler1 = (_event, id) => {};
<Checkbox onChange={handler1}>
function handler2(_event, id) {};
<Checkbox onChange={handler2}>`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Clipboard copy",
    description: (<>Updated <code class='ws-code'>onChange</code> prop so that the <code class='ws-code'>event</code> parameter is the first parameter.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8747",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<ClipboardCopy onChange={(text) => handleChange(text)} />
const handleChange1 = (text) => {};
<ClipboardCopy onChange={toggle1}>
function handleChange2(text) {};
<ClipboardCopy onChange={toggle2}>`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<ClipboardCopy onChange={(_event, text) => handleChange(text)} />
const handleChange1 = (_event, text) => {};
<ClipboardCopy onChange={toggle1}>
function handleChange2(_event, text) {};
<ClipboardCopy onChange={toggle2}>`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Clipboard copy",
    description: (<>Removed the <code class='ws-code'>PopoverPosition</code> type for the <code class='ws-code'>position</code> prop.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8226",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<ClipboardCopy position={PopoverPosition.top} />
<ClipboardCopyButton position={PopoverPosition.bottom} />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<ClipboardCopy position="top" />
<ClipboardCopyButton position="bottom" />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Clipboard copy",
    description: (<>Removed the <code class='ws-code'>switchDelay</code> prop.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8619",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<ClipboardCopy switchDelay="500" />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<ClipboardCopy  />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Code editor",
    description: (<>Removed various deprecated props from <code className='ws-code'>CodeEditorControl</code>. Codemods will suggest using the <code className='ws-code'>tooltipProps</code> prop instead.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8624",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>The following deprecated props were removed:</Text>
        <TextList>
          <TextListItem><code className='ws-code'>entryDelay</code></TextListItem>
          <TextListItem><code className='ws-code'>exitDelay</code></TextListItem>
          <TextListItem><code className='ws-code'>maxWidth</code></TextListItem>
          <TextListItem><code className='ws-code'>position</code></TextListItem>
          <TextListItem><code className='ws-code'>toolTipText</code></TextListItem>
        </TextList>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<CodeEditor entryDelay="500" exitDelay="500" maxWidth="15rem" position="top" toolTipText="hi" />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<CodeEditor      />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Wizard",
    description: (<>Updated the <code className='ws-code'>mainAriaLabel</code> and <code className='ws-code'>mainAriaLabelledBy</code> props for the deprecated implementation, and <code className='ws-code'>aria-label</code> and <code className='ws-code'>aria-labelledby</code> props for the new implementation, to conditionally apply only when the Wizard's body content overflows and causes a scrollbar. A <code className='ws-code'>tabindex="0"</code> will also be applied.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8649",
    repo: "react",
    fixedWithCodeMod: false
  }, {
    component: "Menu",
    description: (<>Updated the <code className='ws-code'>aria-label</code> prop for <code className='ws-code'>MenuItem</code> so that it is applied to the internal <code codeName='ws-code'>li</code> element when the <code className='ws-code'>hasCheckbox</code> prop is also passed. Otherwise it is applied to the element specified by the <code className='ws-code'>component</code> prop.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8649",
    repo: "react",
    fixedWithCodeMod: false
  }, {
    component: "Page",
    description: (<>Updated the <code className='ws-code'>aria-label</code> prop for <code className='ws-code'>PageGroup</code> and <code className='ws-code'>PageNavigation</code> to conditionally apply only when the <code codeName='ws-code'>hasOverflowScroll</code> prop is true.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8649",
    repo: "react",
    fixedWithCodeMod: false
  }, {
    component: "ProgressStepper",
    description: (<>Updated the internal <code className='ws-code'>aria-labelledby</code> for <code className='ws-code'>ProgressStep</code> to be conditionally applied only when the <code className='ws-code'>popoverRender</code> prop is also passed.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8649",
    repo: "react",
    fixedWithCodeMod: false
  }, {
    component: "Context selector",
    description: (<>Deprecated the <code class='ws-code'>ContextSelector</code> components.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8840",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>Codemods will update import and export paths to our deprecated directory, but we recommend replacing it with our new <code className='ws-code'>Dropdown</code> or <code className='ws-code'>Select</code> implementation.:</Text>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`import { ContextSelector, ContextSelectorItem } from '@patternfly/react-core';`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`import { ContextSelector, ContextSelectorItem } from '@patternfly/react-core/deprecated';`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Data list",
    description: (<>Replaced the <code class='ws-code'>selectableRow</code> prop with <code className='ws-code'>onSelectableRowChange</code>, which also takes the <code className='ws-code'>event</code> parameter as its first parameter.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8827",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<DataList onSelectableRowChange={(id) => handler(id)} />
<DataList onSelectableRowChange={(id, event) => handler(id, event)} />
const handler1 = (id, event) => {};
<DataList onSelectableRowChange={handler1} />
function handler2(id, event) {};
<DataList onSelectableRowChange={handler2} />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<DataList onSelectableRowChange={(_event, id) => handler(id)} />
<DataList onSelectableRowChange={(event, id) => handler(id, event)} />
const handler1 = (_event, id) => {};
<DataList onSelectableRowChange={handler1} />
function handler2(_event, id) {};
<DataList onSelectableRowChange={handler2} />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Data list",
    description: (<>Removed various deprecated props.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8388",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>The following deprecated props were removed:</Text>
        <TextList>
          <TextListItem><code className='ws-code'>onDragFinish</code></TextListItem>
          <TextListItem><code className='ws-code'>onDragStart</code></TextListItem>
          <TextListItem><code className='ws-code'>onDragMove</code></TextListItem>
          <TextListItem><code className='ws-code'>onDragCancel</code></TextListItem>
          <TextListItem><code className='ws-code'>itemOrder</code></TextListItem>
        </TextList>
        <Text component={TextVariants.p}>In addition to removing these props, codemods will suggest instead using the <code className='ws-code'>DragDrop</code> component.</Text>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<DataList onDragFinish onDragStart onDragMove onDragCancel itemOrder />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<DataList      />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Data list",
    description: (<>Updated the <code className='ws-code'>onSelectDataListItem</code> prop to include the <code class='ws-code'>event</code> parameter as the first parameter.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8756",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<DataList onSelectDataListItem={(id) => onSelect(id)} />

const toggle1 = (id) => {};
<DataList onSelectDataListItem={toggle1}>

function toggle2(id) {};
<DataList onSelectDataListItem={toggle2}>`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<DataList onSelectDataListItem={(_event, id) => onSelect(id)} />

const toggle1 = (_event, id) => {};
<DataList onSelectDataListItem={toggle1}>

function toggle2(_event, id) {};
<DataList onSelectDataListItem={toggle2}>`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Data list",
    description: (<>Updated the <code className='ws-code'>onChange</code> prop for the <code className='ws-code'>DataListCheck</code> component to include the <code class='ws-code'>event</code> parameter as the first parameter.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8756",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<DataListCheck onChange={(checked) => onChange(checked)} />

const onChange1 = (checked) => {};
<DataListCheck onChange={onChange1}>

function onChange2(checked) {};
<DataListCheck onChange={onChange2}>`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<DataListCheck onChange={(_event, checked) => onChange(checked)} />

const onChange1 = (_event, checked) => {};
<DataListCheck onChange={onChange1}>

function onChange2(_event, checked) {};
<DataListCheck onChange={onChange2}>`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Date picker",
    description: (<>Updated the default value of the <code className='ws-code'>appendTo</code> prop, which may cause markup changes that require updating selectors.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8636",
    repo: "react",
    fixedWithCodeMod: false
  }, {
    component: "Date picker",
    description: (<>Updated the <code className='ws-code'>helperText</code> prop to now expect the <code className='ws-code'>HelperText</code> component to be passed in. Error helper text also now renders internally within a <code className='ws-code'>HelperText</code> component.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8833",
    repo: "react",
    fixedWithCodeMod: false
  },
];
