import React from "react";
import { CodeBlock, CodeBlockCode, TextContent, Text, TextList, TextListItem, TextVariants } from '@patternfly/react-core';
import {
  Table,
  Tbody,
  Caption,
  Th,
  Thead,
  Td,
  Tr
} from "@patternfly/react-table";

const pagePropsTableColumns = {
  subComponent: "Sub-component",
  oldPropName: "Old prop name",
  newPropName: "New prop name",
};

const pagePropsTableRows = [
  {
    subComponent: "PageSidebar",
    oldPropName: "isNavOpen",
    newPropName: "isSidebarOpen",
  },
  {
    subComponent: "PageToggleButton",
    oldPropName: "isNavOpen",
    newPropName: "isSidebarOpen",
  },
  {
    subComponent: "PageToggleButton",
    oldPropName: "onNavToggle",
    newPropName: "onSidebarToggle",
  },
];

export const releaseNotes = [
  {
    component: "Card",
    description: "Deprecated various properties.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/9092",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>Deprecated the following properties:</Text>
        <TextList>
          <TextListItem>isSelectableRaised</TextListItem>
          <TextListItem>isDisabledRaised</TextListItem>
          <TextListItem>hasSelectableInput</TextListItem>
          <TextListItem>selectableInputAriaLabel</TextListItem>
          <TextListItem>selectableInputAriaLabel</TextListItem>
        </TextList>
        <Text component={TextVariants.p}>
          We recommend using our new implementation of clickable and selectable cards instead. Codemods will raise a warning, but can provide fixes when using the `isSelectableRaised` or `isDisabledRaised` properties.
        </Text>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Card isSelectableRaised isDisabledRaised />
<Card isSelectableRaised hasSelectableInput />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Card isSelectable isDisabled />
<Card isSelectable hasSelectableInput tabIndex={0} />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Card",
    description: "Removed the deprecated `isHoverable` property.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8196",
    repo: "React",
    fixedWithCodeMod: true,
    details:(
      <TextContent>
        <Text component={TextVariants.p}>Codemods will make the following updates:</Text>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Card isHoverable />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Card  />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    )
  }, {
    component: "Card",
    description: "Reordered `onSelectableInputChange` event parameters.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8752",
    repo: "React",
    fixedWithCodeMod: true,
    details:(
      <TextContent>
        <Text component={TextVariants.p}>Codemods will make the following updates:</Text>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Card onSelectableInputChange={(id) => handler(id)} />
const handler1 = (id) => {};
<Card onSelectableInputChange={handler1}>
function handler2(id) {};
<Card onSelectableInputChange={handler2}>`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Card onSelectableInputChange={(_event, id) => handler(id)} />
const handler1 = (_event, id) => {};
<Card onSelectableInputChange={handler1}>
function handler2(_event, id) {};
<Card onSelectableInputChange={handler2}>`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    )
  }, {
    component: "Card",
    description: "Updated the internal default value of the `component` property from 'article' to 'div'.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8601",
    repo: "React",
    fixedWithCodeMod: false
  }, {
    component: "Card",
    description: "`CardHeaderMain` and `CardActions` are no longer exported from PatternFly, and are instead rendered internally within the `CardHeader` sub-component. Any `CardHeaderMain` content and `CardActions` content or properties should be passed directly to `CardHeader` instead.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8759",
    repo: "React",
    fixedWithCodeMod: true,
    details: (
      <TextContent>
        <Text component={TextVariants.p}>Codemods will make the following updates:</Text>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<CardHeader>
  <CardHeaderMain>Header content</CardHeaderMain>
  <CardActions className="test" hasNoOffset><Button>Card action</Button></CardActions>
</CardHeader>`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<CardHeader actions={{ actions: <><Button>Card action</Button></>, hasNoOffset: true, className: "test"}} >
  Header content
  
</CardHeader>`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    )
  }, {
    component: "Sidebar",
    description: "Added the ability for a border to separate the sidebar panel and sidebar content.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5221",
    details: "Allowed the sidebar component to support more flexible layouts by adding support for padding to be added to the sidebar panel and sidebar content elements.",
    repo: "HTML/CSS",
    fixedWithCodeMod: false
  }, {
    component: "Skip to content",
    description: "Previously, the skip to content component classes were applied directly to the button classes to create the skip to content component. This pull request added a structural HTML element that wraps the component and serves as the parent element for the skip to content component.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5153",
    repo: "HTML/CSS",
    fixedWithCodeMod: false
  }, {
    component: "Spinner",
    description: "Removed the legacy spinner variation in favor of the SVG spinner variation.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5468",
    repo: "HTML/CSS",
    fixedWithCodeMod: false
  }, {
    component: "Table",
    description: "Renamed the table component's “sticky-column” element to “sticky-cell” to be more flexible in sticky positioning. Added support for a table column to be sticky to the right edge of the table instead of just the left.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5393",
    repo: "HTML/CSS",
    fixedWithCodeMod: false
  }, {
    component: "Table",
    description: "Improved the alignment of the table action column by right-aligning the contents of the table action cell.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5400",
    repo: "HTML/CSS",
    fixedWithCodeMod: false
  }, {
    component: "Table",
    description: "Added unique table component CSS class selectors to all elements of the table that previously did not have a class.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5558",
    details: "For example, '<tr>' is now '<tr  className=\".pf-v5-c-table__tr\">', 'thead' is now '<thead  className=\".pf-v5-c-table__thead\">'",
    repo: "HTML/CSS",
    fixedWithCodeMod: false
  }, {
    component: "Table",
    description: "Improved and updated the visual appearance of clickable rows.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5397",
    details: "Renamed “hoverable” table rows to “clickable” to be more consistent with similar features in other components.",
    repo: "HTML/CSS",
    fixedWithCodeMod: false
  }, {
    component: "Tabs",
    description: "Updated secondary tabs to have a border by default. This is more consistent with the presentation of primary tabs.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5171",
    repo: "HTML/CSS",
    fixedWithCodeMod: false
  }, {
    component: "Toolbar",
    description: "Updated the default alignment of toolbar children to use baseline vertical alignment instead of center alignment, which improved the visual appearance of toolbar children of differing heights.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5201",
    details: "Added modifiers to toolbar children to use center and baseline alignment. This is a non-breaking change - it just allows going back to the old default alignment of center, and specifying baseline on specific children.",
    repo: "HTML/CSS",
    fixedWithCodeMod: false
  }, {
    component: "Toolbar",
    description: "Updated the default alignment to use top alignment.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5565",
    details: "Added a modifier for children to use top alignment. This is a non-breaking change that just allows for the previously defined center and baseline alignments to be used, and for top alignment to be used on specific children.",
    repo: "HTML/CSS",
    fixedWithCodeMod: false
  }, {
    component: "Toolbar",
    description: "Added a CSS row gap to wrapping toolbar items. Previously, items would wrap directly underneath items on the previous row, and this update added a visual spacer between wrapping rows.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5398",
    repo: "HTML/CSS",
    fixedWithCodeMod: false
  }, {
    component: "Toolbar",
    description: "Improved the visual appearance of the expanded content element. This isn’t an enhancement, but was to fix a bug introduced in a previous pull request. This change makes breaking changes to CSS variables.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5611",
    repo: "HTML/CSS",
    fixedWithCodeMod: false
  }, {
    component: "Wizard",
    description: "Updated the stacking context of structural elements within the wizard component so that elements from the wizard main content area are able to overflow and display on top of the wizard footer.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5533",
    repo: "HTML/CSS",
    fixedWithCodeMod: false
  }, {
    component: "Wizard",
    description: "Refactored the popover component HTML to be more flexible and consistent with similarly structured components.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5389",
    details: "Added a structural HTML element to the that is used to wrap the close button. Updated the wizard title to be more flexible.",
    repo: "HTML/CSS",
    fixedWithCodeMod: false
  },
  {
    component: "@All",
    description: (
      <>
        Removed unnecessary <code className="ws-code">visibility</code>{" "}
        declaration that was paired with the use of the{" "}
        <code className="ws-code">display</code> property to hide and show
        elements.
      </>
    ),
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5209",
    repo: "HTML/CSS",
    fixedWithCodeMod: false,
  },
  {
    component: "@All",
    description:
      "Prefixed all of our public HTML classes (except for modifiers), CSS variables/custom properties, and SCSS variables/mixins/functions/placeholders with the PatternFly version number to avoid namespace conflicts.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5434",
    repo: "HTML/CSS",
    fixedWithCodeMod: false,
  },
  {
    component: "@All",
    description: "Added transparent background to various buttons, other cleanup.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5379",
    repo: "HTML/CSS",
    fixedWithCodeMod: false,
  },
  {
    component: "@All",
    description: (
      <>
        Removed references to any fallback{" "}
        <code className="ws-code">.woff</code> font files for text and icons.
      </>
    ),
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5435",
    repo: "HTML/CSS",
    fixedWithCodeMod: false,
  },
  {
    component: "@All",
    description: (
      <>
        Split the global reset styles into “normalize” and “reset”, which
        can be uniquely disabled/enabled by setting{" "}
        <code className="ws-code">$pf-global--enable-reset</code> and{" "}
        <code className="ws-code">$pf-global--enable-normalize</code>.
      </>
    ),
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5435",
    repo: "HTML/CSS",
    fixedWithCodeMod: false,
  },
  {
    component: "@All",
    description: (
      <>
        Wrapped all global normalize and reset styles in{" "}
        <code className="ws-code">:where()</code> to remove CSS specificity.
      </>
    ),
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5435",
    repo: "HTML/CSS",
    fixedWithCodeMod: false,
  },
  {
    component: "@All",
    description: "Removed an old bootstrap variable mapping stylesheet.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5435",
    repo: "HTML/CSS",
    fixedWithCodeMod: false,
  },
  {
    component: "@All",
    description:
      "Removed card and button specific styles for use in dark and light blocks within components.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5435",
    repo: "HTML/CSS",
    fixedWithCodeMod: false,
  },
  {
    component: "@All",
    description: (
      <>
        Removed the SCSS variables{" "}
        <code className="ws-code">$pf-global--enable-shield</code> and{" "}
        <code className="ws-code">$pf-global--load-pf-3</code>.
      </>
    ),
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5435",
    repo: "HTML/CSS",
    fixedWithCodeMod: false,
  },
  {
    component: "@All",
    description: "Renamed the global “default” status color to “custom”.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5418",
    repo: "HTML/CSS",
    fixedWithCodeMod: false,
  },
  {
    component: "@All",
    description:
      "Updated any use of a non-PatternFly component checkbox/radio input to use the standalone variation of the PatternFly check/radio component.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5355",
    repo: "HTML/CSS",
    fixedWithCodeMod: false,
  },
  {
    component: "@All",
    description: "Fixed dark theme bugs.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5535",
    repo: "HTML/CSS",
    fixedWithCodeMod: false,
  },
  {
    component: "@All",
    description: "Removed global “shield” CSS.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5339",
    repo: "HTML/CSS",
    fixedWithCodeMod: false,
  },
  {
    component: "@All",
    description: (
      <>
        Removed declaration setting font-size on HTML element and associated
        SCSS var{" "}
        <code className="ws-code">$pf-global--unset-root-font-size</code>.
      </>
    ),
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5339",
    repo: "HTML/CSS",
    fixedWithCodeMod: false,
  },
  {
    component: "@All",
    description: "Updated all of our RedHatFont files to the latest versions.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5503",
    repo: "HTML/CSS",
    fixedWithCodeMod: false,
  },
  {
    component: "@All",
    description:
      "Renamed the global variables for font family variations, and global class to opt-in to the variable font.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5503",
    repo: "HTML/CSS",
    fixedWithCodeMod: false,
  },
  {
    component: "@All",
    description: "Removed support for the legacy overpass font.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5169",
    repo: "HTML/CSS",
    fixedWithCodeMod: false,
  },
  {
    component: "About modal",
    description: "Removed the default background image.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5530",
    repo: "HTML/CSS",
    fixedWithCodeMod: false,
  },
  {
    component: "About modal",
    description:
      "Refactored the about modal box to be placed inside of the modal component.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5216",
    repo: "HTML/CSS",
    fixedWithCodeMod: false,
  },
  {
    component: "About modal",
    description: "Updated to support new design of background image.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5328",
    repo: "HTML/CSS",
    fixedWithCodeMod: false,
  },
  {
    component: "Background image",
    description: "Removed the default background image.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5530",
    repo: "HTML/CSS",
    fixedWithCodeMod: false,
  },
  {
    component: "Background image",
    description: "Updated to support new design of background image.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5328",
    repo: "HTML/CSS",
    fixedWithCodeMod: false,
  },
  {
    component: "Accordion",
    description:
      "Renamed the accordion expandable content component from “expanded-content” to “expandable-content”.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5180",
    repo: "HTML/CSS",
    fixedWithCodeMod: false,
  },
  {
    component: "Banner",
    description:
      "Renamed status variations (such as “success”, “warning”, and “danger”) to be more generic color variations (such as “green”, “gold”, and “red”).",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5408",
    repo: "HTML/CSS",
    fixedWithCodeMod: false,
  },
  {
    component: "Card",
    description: "Updated design for selectable and clickable cards.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5409",
    repo: "HTML/CSS",
    fixedWithCodeMod: false,
  },
  {
    component: "Card",
    description:
      "Refactored the card header code to be more flexible and improved the visual appearance of card header items.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5280",
    repo: "HTML/CSS",
    fixedWithCodeMod: false,
  },
  {
    component: "Card",
    description:
      "Refactored the card title to be more flexible, and changed the default card title font weight to “normal”.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5363",
    repo: "HTML/CSS",
    fixedWithCodeMod: false,
  },
  {
    component: "Check",
    description:
      "Updated description and body elements to occupy the available width.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5233",
    repo: "HTML/CSS",
    fixedWithCodeMod: false,
  }, {
    component: "Divider",
    description: (<>Replaced the <code className='ws-code'>isVertical</code> flag with the <code className='ws-code'>orientation</code> property that can define verticality on different breakpoints.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8199",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Divider isVertical />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Divider orientation={{ default: "vertical" }} />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  },
  {
    component: "Drawer",
    description: (<>The <code className='ws-code'>onResize</code> property in <code className='ws-code'>DrawerPanelContent</code> to take the <code className='ws-code'>event</code> as its first parameter. Handlers may require an update.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8736",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<DrawerPanelContent onResize={(width, id) => onChange(checked)} />
    
    const onResize1 = (width, id) => {};
    <DrawerPanelContent onResize={onResize1}>
    
    function onResize2(width, id) {};
    <DrawerPanelContent onResize={onResize2}>`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<DrawerPanelContent onResize={(_event, width, id) => onChange(checked)} />
    
    const onResize1 = (_event, width, id) => {};
    <DrawerPanelContent onResize={onResize1}>
    
    function onResize2(_event, width, id) {};
    <DrawerPanelContent onResize={onResize2}>`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  },
  {
    component: "Dropdown",
    description: (<>Deprecated the current implementation of dropdown.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8835",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>In order to continue using this deprecated implementation, the import path must be updated to our deprecated package and specifiers must be aliased. However, we suggest updating to our newer implementation of dropdown.

          The following imports will be affected by this deprecation:
        </Text>
        <TextList>
          <TextListItem>BadgeToggle</TextListItem>
          <TextListItem>Dropdown</TextListItem>
          <TextListItem>DropdownPosition</TextListItem>
          <TextListItem>DropdownDirection</TextListItem>
          <TextListItem>DropdownContext</TextListItem>
          <TextListItem>DropdownArrowContext</TextListItem>
          <TextListItem>DropdownGroup</TextListItem>
          <TextListItem>DropdownItem</TextListItem>
          <TextListItem>DropdownMenu</TextListItem>
          <TextListItem>DropdownSeparator</TextListItem>
          <TextListItem>DropdownToggle</TextListItem>
          <TextListItem>DropdownToggleAction</TextListItem>
          <TextListItem>DropdownToggleCheckbox</TextListItem>
          <TextListItem>DropdownWithContext</TextListItem>
          <TextListItem>KebabToggle</TextListItem>
        </TextList>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Dropdown, DropdownPosition, Button } from '@patternfly/react-core';`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Button } from '@patternfly/react-core';
    import { Dropdown, DropdownPosition } from '@patternfly/react-core/deprecated';`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  },
  {
    component: "Dropdown",
    description: (<>Removed the <code className='ws-code'>isHovered</code> property from <code className='ws-code'>DropdownItem</code>.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8179",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<DropdownItem isHovered={isHovered} />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<DropdownItem  />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  },
  {
    component: "Dropdown",
    description: (<>Removed the <code className='ws-code'>openedOnEnter</code> property from <code className='ws-code'>DropdownMenu</code>.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8179",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<DropdownMenu openedOnEnter={false} />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<DropdownMenu  />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  },

  {
    component: "Dropdown",
    description: (<>Replaced the deprecated <code className='ws-code'>isPrimary</code> property "primary" value on the <code className='ws-code'>toggleVariant</code> property from <code className='ws-code'>DropdownToggle</code></>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8179",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<DropdownToggle isPrimary />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<DropdownToggle toggleVariant="primary" />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  },
  {
    component: "Dropdown",
    description: (<>Updated <code className='ws-code'>onChange</code> property from <code className='ws-code'>DropdownToggleCheckbox</code> so that the <code className='ws-code'>event</code> parameter is included as the first parameter. Handlers may need to be updated.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8787",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<DropdownToggleCheckbox onChange={(id) => handler(id)} />
    <DropdownToggleCheckbox onChange={(id, event) => handler(id, event)} />
    const handler1 = (id, event) => {};
    <DropdownToggleCheckbox onChange={handler1}>`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<DropdownToggleCheckbox onChange={(_event, id) => handler(id)} />
    <DropdownToggleCheckboxDeprecated onChange={(event, id) => handler(id, event)} />
    const handler1 = (event, id) => {};
    <DropdownToggleCheckbox onChange={handler1}>`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  },
  {
    component: "Dual list selector",
    description: (<>The <code className='ws-code'>onAvailableOptionsSearchInputChanged</code>, <code className='ws-code'>onChosenOptionsSearchInputChanged</code> and <code className='ws-code'>onListChange</code> properties now take <code className='ws-code'>event</code> as the first parameter. Handlers may need to be updated.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8793",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<DualListSelector onAvailableOptionsSearchInputChanged={(id) => handler(id)} />
    <DualListSelector onAvailableOptionsSearchInputChanged={(id, event) => handler(id, event)} />
    const handler1 = (id, event) => {};
    <DualListSelector onAvailableOptionsSearchInputChanged={handler1}>
    function handler2(id, event) {};
    <DualListSelector onAvailableOptionsSearchInputChanged={handler2}>
    
    <DualListSelector onChosenOptionsSearchInputChanged={(id) => handler(id)} />
    <DualListSelector onChosenOptionsSearchInputChanged={(id, event) => handler(id, event)} />
    const handler1 = (id, event) => {};
    <DualListSelector onChosenOptionsSearchInputChanged={handler1}>
    function handler2(id, event) {};
    <DualListSelector onChosenOptionsSearchInputChanged={handler2}>
    
    <DualListSelector onListChange={(id) => handler(id)} />
    const handler1 = (id) => {};
    <DualListSelector onListChange={handler1}>
    function handler2(id) {};
    <DualListSelector onListChange={handler2}>`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<DualListSelector onAvailableOptionsSearchInputChanged={(_event, id) => handler(id)} />
    <DualListSelector onAvailableOptionsSearchInputChanged={(event, id) => handler(id, event)} />
    const handler1 = (_event, id) => {};
    <DualListSelector onAvailableOptionsSearchInputChanged={handler1}>
    function handler2(_event, id) {};
    <DualListSelector onAvailableOptionsSearchInputChanged={handler2}>
    
    <DualListSelector onChosenOptionsSearchInputChanged={(_event, id) => handler(id)} />
    <DualListSelector onChosenOptionsSearchInputChanged={(event, id) => handler(id, event)} />
    const handler1 = (_event, id) => {};
    <DualListSelector onChosenOptionsSearchInputChanged={handler1}>
    function handler2(_event, id) {};
    <DualListSelector onChosenOptionsSearchInputChanged={handler2}>
    
    <DualListSelector onListChange={(_event, id) => handler(id)} />
    const handler1 = (_event, id) => {};
    <DualListSelector onListChange={handler1}>
    function handler2(_event, id) {};
    <DualListSelector onListChange={handler2}>`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  },
  {
    component: "Table",
    description: (<>Updated the <code className='ws-code'>onSelect</code> and <code className='ws-code'>clearSelection</code> properties on <code className='ws-code'>EditableSelectInputCell</code> to take <code className='ws-code'>event</code> as the first parameter. Handlers may need to be updated.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/9057",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<EditableSelectInputCell onSelect={(value) => onSelectHandler(value)} clearSelection={(row, cell) => clearSelectionHandler(row, cell)} />
    <EditableSelectInputCell onSelect={(value, event) => onSelectHandler(value, event)} />
    const onSelectHandler1 = (value, event) => {};
    const clearSelectionHandler1 = (row, cell) => {};
    <EditableSelectInputCell onSelect={onSelectHandler1} clearSelection={clearSelectionHandler1} />
    function onSelectHandler2(value) {};
    function clearSelectionHandler2(row, cell) {};
    <EditableSelectInputCell onSelect={onSelectHandler2} clearSelection={clearSelectionHandler2} />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<EditableSelectInputCell onSelect={(_event, value) => onSelectHandler(value)} clearSelection={(_event, row, cell) => clearSelectionHandler(row, cell)} />
    <EditableSelectInputCell onSelect={(event, value) => onSelectHandler(value, event)} />
    const onSelectHandler1 = (event, value) => {};
    const clearSelectionHandler1 = (event, row, cell) => {};
    <EditableSelectInputCell onSelect={onSelectHandler1} clearSelection={clearSelectionHandler1} />
    function onSelectHandler2(_event, value) {};
    function clearSelectionHandler2(_event, row, cell) {};
    <EditableSelectInputCell onSelect={onSelectHandler2} clearSelection={clearSelectionHandler2} />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  },
  {
    component: "Empty state",
    description: (<>Replaced the <code className='ws-code'>EmptyStatePrimary</code> and <code className='ws-code'>EmptyStateSecondaryActions</code> components with <code className='ws-code'>EmptyStateActions</code>.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8737",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`import { EmptyStatePrimary as Primary, EmptyStateSecondaryActions } from '@patternfly/react-core';
    <>
      <Primary>Primary action</Primary>
      <EmptyStateSecondaryActions>Other actions</EmptyStateSecondaryActions>
    </>`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`import { EmptyStateActions } from '@patternfly/react-core';
    <>
      <EmptyStateActions>Primary action</EmptyStateActions>
      <EmptyStateActions>Other actions</EmptyStateActions>
    </>`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  },
  {
    component: "Empty state",
    description: (<>Added the <code className='ws-code'>EmptyStateHeader</code> component, which should now be passed an <code className='ws-code'>EmptyStateIcon</code> to the <code className='ws-code'>icon</code> property
      and the main title should be passed to <code className='ws-code'>titleText</code> property. You can also explicitly specify title's heading level
      with <code className='ws-code'>headingLevel</code>  property.<br/><br/>
      Added the <code className='ws-code'>EmptyStateFooter</code> component. It should wrap the content which follows after <code className='ws-code'>EmptyStateBody</code> inside <code className='ws-code'>EmptyState</code>.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8737",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`    import { EmptyState, EmptyStateActions, EmptyStateBody, EmptyStateIcon, Title } from '@patternfly/react-core';

    <EmptyState>
      <EmptyStateIcon icon={CubesIcon} />
      <Title headingLevel="h5" size="4xl">
        Empty state
      </Title>
      <EmptyStateBody>
        Some content
      </EmptyStateBody>
      <EmptyStateActions>
        Primary action
      </EmptyStateActions>
      <EmptyStateActions>
        Other actions
      </EmptyStateActions>
    </EmptyState>`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`import { EmptyState, EmptyStateActions, EmptyStateBody, EmptyStateIcon, EmptyStateHeader, EmptyStateFooter,  } from '@patternfly/react-core';
    
    <EmptyState>
      <EmptyStateHeader titleText="Empty state" icon={<EmptyStateIcon icon={CubesIcon} />} headingLevel="h5" />
      <EmptyStateBody>
        Some content
      </EmptyStateBody><EmptyStateFooter>
      <EmptyStateActions>
        Primary action
      </EmptyStateActions>
      <EmptyStateActions>
        Other actions
      </EmptyStateActions>
    </EmptyStateFooter></EmptyState>`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  },
  {
    component: "Empty state",
    description: (<>Updated the <code className='ws-code'>icon</code> property on <code className='ws-code'>EmptyStateIcon</code> to be required.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8737",
    repo: "React",
    fixedWithCodeMod: false
  },
  {
    component: "Empty state",
    description: (<>Removed the <code className='ws-code'>variant</code> property from <code className='ws-code'>EmtpyStateIcon</code>. Replaced the <code className='ws-code'>component</code> property with the <code className='ws-code'>icon</code> property.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8737",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<EmptyStateIcon icon={CubesIcon} variant="icon"/>
    <EmptyStateIcon component={Spinner} variant="container"/>`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<EmptyStateIcon icon={CubesIcon} />
    <EmptyStateIcon icon={Spinner} />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  },
  {
    component: "Empty state",
    description: (<>Renamed the <code className='ws-code'>EmptyStateVariant</code> enum and property values "small" to "sm" and "large" to "lg".</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8737",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`const myVariant = EmptyStateVariant.small;
    <EmptyState variant={EmptyStateVariant.large} />
    <EmptyState variant="small" />
    <EmptyState variant="large" />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`const myVariant = EmptyStateVariant.sm;
    <EmptyState variant={EmptyStateVariant.lg} />
    <EmptyState variant="sm" />
    <EmptyState variant="lg" />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  },
  {
    component: "Expandable section",
    description: (<>Renamed the <code className='ws-code'>large</code> property value of <code className='ws-code'>displaySize</code> to <code className='ws-code'>lg.</code></>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8212",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<ExpandableSection displaySize="large" />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<ExpandableSection displaySize="lg" />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  },
  {
    component: "Expandable section",
    description: (<>Updated the <code className='ws-code'>onToggle</code> property so that the <code className='ws-code'>event</code> parameter is the first parameter. Handlers may require an update.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8880",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<ExpandableSection onToggle={(id) => handler(id)} />
    const handler1 = (id) => {};
    <ExpandableSection onToggle={handler1} />
    function handler2(id) {};
    <ExpandableSection onToggle={handler2} />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<ExpandableSection onToggle={(_event, id) => handler(id)} />
    const handler1 = (_event, id) => {};
    <ExpandableSection onToggle={handler1} />
    function handler2(_event, id) {};
    <ExpandableSection onToggle={handler2} />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  },
  {
    component: "File upload",
    description: (<>Updated the <code className='ws-code'>onTextChange</code> property for <code className='ws-code'>FileUploadField</code> and <code className='ws-code'>FileUpload</code> so that the <code className='ws-code'>event</code> parameter is the first parameter. Handlers may require an update.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8955",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<FileUpload onTextChange={text => textHandler(text)} />
    <FileUploadField onTextChange={text => textHandler1(text)} />
    const textHandler2 = (text) => {};
    const textHandler3 = (text) => {};
    <FileUpload onTextChange={textHandler2} />
    <FileUploadField onTextChange={textHandler3} />
    function textHandler4(text) {};
    function textHandler5(text) {};
    <FileUpload onTextChange={textHandler4} />
    <FileUploadField onTextChange={textHandler5} />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<FileUpload onTextChange={(_event, text) => textHandler(text)} />
    <FileUploadField onTextChange={(_event, text) => textHandler1(text)} />
    const textHandler2 = (_event, text) => {};
    const textHandler3 = (_event, text) => {};
    <FileUpload onTextChange={textHandler2} />
    <FileUploadField onTextChange={textHandler3} />
    function textHandler4(_event, text) {};
    function textHandler5(_event, text) {};
    <FileUpload onTextChange={textHandler4} />
    <FileUploadField onTextChange={textHandler5} />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  },
  {
    component: "File upload",
    description: (<>Updated the <code className='ws-code'>onDataChange</code>, <code className='ws-code'>onReadFailed</code>, <code className='ws-code'>onReadFinished</code>, and <code className='ws-code'>onReadStarted</code> properties so that the <code className='ws-code'>event</code> parameter is the first parameter. Handlers may require an update.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8960",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<FileUpload
      onDataChange={(data) => changeHandler(data)}
      onReadFailed={(error, fileHandle) => readFailedHandler(error, fileHandle)}
      onReadFinished={(fileHandle) => readFinishedHandler(fileHandle)}
      onReadStarted={(fileHandle) => readStartedHandler(fileHandle)}
    />;
    
    const changeHandler1 = (data) => {};
    const readFailedHandler1 = (error, fileHandle) => {};
    const readFinishedHandler1 = (fileHandle) => {};
    const readStartedHandler1 = (fileHandle) => {};
    <FileUpload
      onDataChange={changeHandler1}
      onReadFailed={readFailedHandler1}
      onReadFinished={readFinishedHandler1}
      onReadStarted={readStartedHandler1}
    />
    
    function changeHandler2(data) {};
    function readFailedHandler2(error, fileHandle) {};
    function readFinishedHandler2(fileHandle) {};
    function readStartedHandler2(fileHandle) {};
    <FileUpload
      onDataChange={changeHandler2}
      onReadFailed={readFailedHandler2}
      onReadFinished={readFinishedHandler2}
      onReadStarted={readStartedHandler2}
    />;`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<FileUpload
      onDataChange={(_event, data) => changeHandler(data)}
      onReadFailed={(_event, error, fileHandle) => readFailedHandler(error, fileHandle)}
      onReadFinished={(_event, fileHandle) => readFinishedHandler(fileHandle)}
      onReadStarted={(_event, fileHandle) => readStartedHandler(fileHandle)}
    />;
    
    const changeHandler1 = (_event, data) => {};
    const readFailedHandler1 = (_event, error, fileHandle) => {};
    const readFinishedHandler1 = (_event, fileHandle) => {};
    const readStartedHandler1 = (_event, fileHandle) => {};
    <FileUpload
      onDataChange={changeHandler1}
      onReadFailed={readFailedHandler1}
      onReadFinished={readFinishedHandler1}
      onReadStarted={readStartedHandler1}
    />;
    
    function changeHandler2(_event, data) {};
    function readFailedHandler2(_event, error, fileHandle) {};
    function readFinishedHandler2(_event, fileHandled) {};
    function readStartedHandler2(_event, fileHandle) {};
    <FileUpload
      onDataChange={changeHandler2}
      onReadFailed={readFailedHandler2}
      onReadFinished={readFinishedHandler2}
      onReadStarted={readStartedHandler2}
    />;`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  },
  {
    component: "File upload",
    description: (<>Removed the deprecated <code className='ws-code'>onChange</code> property. This rule will remove the property and suggest replacing it with the <code className='ws-code'>onFileInputChange</code>, <code className='ws-code'>onTextChange</code>, <code className='ws-code'>onDataChange</code>, and <code className='ws-code'>onClearClick</code> properties as needed.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8155",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<FileUpload onChange={onChange} />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<FileUpload  /> `}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  },
  {
    component: "Form control",
    description: (<>Some properties have been removed from a few form control components.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/9132",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>Affected components - properties:</Text>
        <TextList>
          <TextListItem>FormSelect - isIconSprite</TextListItem>
          <TextListItem>TextArea - isIconSprite, isReadOnly</TextListItem>
          <TextListItem>TextInput - isIconSprite, isReadOnly, iconVariant, customIconUrl, customIconDimensions</TextListItem>
        </TextList>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<FormSelect isIconSprite />
    <TextArea isIconSprite isReadOnly />
    <TextInput isIconSprite iconVariant customIconUrl customIconDimensions isReadOnly />
    
    // With an existing readOnlyVariant prop
    <TextArea isReadOnly readOnlyVariant="plain" >`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<FormSelect  />
    <TextArea  readOnlyVariant="default" />
    <TextInput     readOnlyVariant="default" />
    
    // With an existing readOnlyVariant prop
    <TextArea  readOnlyVariant="plain" >`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  },
  {
    component: "Form control",
    description: (<>Changed the markup for several form control components. Selectors may need to be updated.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/9132",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>Affected components:</Text>
        <TextList>
          <TextListItem>FormSelect</TextListItem>
          <TextListItem>TextArea</TextListItem>
          <TextListItem>TextInput</TextListItem>
          <TextListItem>TimePicker</TextListItem>
          <TextListItem>ClipboardCopy</TextListItem>
          <TextListItem>DatePicker</TextListItem>
          <TextListItem>FileUpload</TextListItem>
          <TextListItem>LoginPage</TextListItem>
          <TextListItem>NumberInput</TextListItem>
          <TextListItem>SearchInput</TextListItem>
          <TextListItem>Slider - only when the <code className='ws-code'>isInputVisible</code> property is passed in</TextListItem>
          <TextListItem>TreeViewSearch</TextListItem>
          <TextListItem>Select - only the deprecated implementation with the <code className='ws-code'>hasInlineFilter</code> property passed in</TextListItem>
        </TextList>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: false
  },
  {
    component: "Form group",
    description: (<>Removed the helper text related properties from <code className='ws-code'>FormGroup</code>: <code className='ws-code'>helperText</code>, <code className='ws-code'>helperTextInvalid</code>, <code className='ws-code'>validated</code>, <code className='ws-code'>helperTextIcon</code>, <code className='ws-code'>helperTextInvalidIcon</code>, and <code className='ws-code'>isHelperTextBeforeField</code>. The <code className='ws-code'>FormHelperText</code>, <code className='ws-code'>HelperText</code>, and <code className='ws-code'>HelperTextItem</code> components should now be used directly as part of <code className='ws-code'>children</code> instead of these properties. This rule will throw an error but not make any changes.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8810",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<FormGroup
      helperTextInvalid={helpText !== null && typeof helpText === 'object' ? intl.formatMessage(helpText) : helpText}
      validated={validated}
    >
      <TextInput
        validated={validated}
        value={value}
        onChange={onChange}
        isRequired={isRequired}
        placeholder={placeholder}
      />
    </FormGroup>`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<FormGroup>
      <TextInput
        validated={validated}
        value={value}
        onChange={onChange}
        isRequired={isRequired}
        placeholder={placeholder}
      />
      {validated === 'error' && helpText && (
        <FormHelperText>
          <HelperText>
            <HelperTextItem variant="error">
              {helpText}
            </HelperTextItem>
          </HelperText>
        </FormHelperText>
      )}
    </FormGroup>`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: false
  },
  {
    component: "Form helper text",
    description: (<>Removed functionality from <code className='ws-code'>FormHelperText</code>, which will instead be covered by <code className='ws-code'>HelperText</code> and <code className='ws-code'>HelperTextItem</code>. This rule will remove the <code className='ws-code'>isError</code>, <code className='ws-code'>isHidden</code>, <code className='ws-code'>icon</code>, and <code className='ws-code'>component</code> properties if present. The <code className='ws-code'>HelperText</code> and <code className='ws-code'>HelperTextItem</code> components should now be used directly as part of <code className='ws-code'>children</code> instead of these properties.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8810",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<FormHelperText isError={true} isHidden={false} icon={<Icon />} component="div" />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<FormHelperText     />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  },
  {
    component: "Form select",
    description: (<>Updated the <code className='ws-code'>onChange</code> property so that the <code className='ws-code'>event</code> parameter is the first parameter. Handlers may require an update.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8998",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<FormSelect onChange={(id) => handler(id)} />
    <FormSelect onChange={(id, event) => handler(id, event)} />
    const handler1 = (id, event) => {};
    <FormSelect onChange={handler1} />
    function handler2(id, event) {};
    <FormSelect onChange={handler2} />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<FormSelect onChange={(_event, id) => handler(id)} />
    <FormSelect onChange={(event, id) => handler(id, event)} />
    const handler1 = (_event, id) => {};
    <FormSelect onChange={handler1} />
    function handler2(_event, id) {};
    <FormSelect onChange={handler2} />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  },
  {
    component: "Select",
    description: (<>Renamed the <code className='ws-code'>hasCheck</code> property for the next implementation of SelectOption to <code className='ws-code'>hasCheckbox</code>.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8403",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<SelectOption hasCheck />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<SelectOption hasCheckbox />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  },
  {
    component: "Menu",
    description: (<>Renamed the <code className='ws-code'>hasCheck</code> property on <code className='ws-code'>MenuItem</code> to <code className='ws-code'>hasCheckbox</code>.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8403",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<MenuItem hasCheck />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<MenuItem hasCheckbox />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  },
  {
    component: "Tree view",
    description: (<>Renamed the <code className='ws-code'>hasCheck</code> property to <code className='ws-code'>hasCheckbox</code>.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8403",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<TreeView hasCheck />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<TreeView hasCheckbox />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  },
  {
    component: "Navigation",
    description: (<>Updated the default value of the <code className='ws-code'>aria-label</code> attribute with a <code className='ws-code'>horizontal-subnav</code> variant to "local" (previously the default value was "Global").</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8213",
    repo: "React",
    fixedWithCodeMod: false
  },
  {
    component: "Input group",
    description: (<>pull request #9176 affects this as well as #9074. Added the <code className='ws-code'>InputGroupItem</code> component, which must wrap all non-<code className='ws-code'>InputGroupText</code> children passed to an <code className='ws-code'>InputGroup</code>. The <code className='ws-code'>InputGroupItem</code> component may need to have the <code className='ws-code'>isFill</code>, <code className='ws-code'>isBox</code>, and/or <code className='ws-code'>isPlain</code> properties adjusted to retain styling.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/9074",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`    <InputGroup>
      <input />
      <textarea />
      <TextArea />
      <TextInput />
      <InputGroupText>Some text</InputGroupText>
      <button />
    </InputGroup>`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<InputGroup>
      <InputGroupItem isFill><input /></InputGroupItem>
      <InputGroupItem isFill><textarea /></InputGroupItem>
      <InputGroupItem isFill><TextArea /></InputGroupItem>
      <InputGroupItem isFill><TextInput /></InputGroupItem>
      <InputGroupText>Some text</InputGroupText>
      <InputGroupItem><button /></InputGroupItem>
    </InputGroup>`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  },
  {
    component: "Input group",
    description: (<>Removed the <code className='ws-code'>variant</code> property on <code className='ws-code'>InputGroupText.</code></>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/9147",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<InputGroupText variant={InputGroupTextVariant.plain} />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<InputGroupText  />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "About modal",
    description: (<>Removed the <code className='ws-code'>AboutModalBoxHero</code> sub-component.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8931",
    repo: "React",
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
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Accordion",
    description: (<>Renamed the <code className='ws-code'>large</code> property value of the <code className='ws-code'>displaySize</code> property to <code className='ws-code'>lg</code>.</>),
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
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Alert",
    description: (<>Removed the <code className='ws-code'>aria-label</code> property.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8649",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>The <code className='ws-code'>aria-label</code> property should not be used on an <code className='ws-code'>Alert</code> as it is not well supported by assistive technologies.</Text>
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
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Alert",
    description: (<>Replaced the <code className='ws-code'>titleHeadingLevel</code> property with <code className='ws-code'>component</code>.</>),
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
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Application launcher",
    description: (<>Deprecated the <code  className='ws-code'>ApplicationLauncher</code> components.</>),
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
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Application launcher",
    description: (<>Updated callback properties to include the <code  className='ws-code'>event</code> parameter as the first parameter.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8756",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>The <code  className='ws-code'>onFavorite</code> and <code  className='ws-code'>onSearch</code> propertiesnow take <code  className='ws-code'>event</code> as the first parameter. Handlers may need to be updated.</Text>
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
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Application launcher",
    description: (<>Replaced the internal input element with the <code  className='ws-code'>SearchInput</code> component.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8293",
    repo: "React",
    fixedWithCodeMod: false
  }, {
    component: "Background image",
    description: (<>Removed the <code  className='ws-code'>filter</code> property and updated the <code  className='ws-code'>src</code>  property.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8931",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>The <code  className='ws-code'>filter</code> was removed. The <code  className='ws-code'>src</code> property's type was updated to just a string and will no longer accept a <code  className='ws-code'>BackgroundImageSrcMap</code> object. Codemods will not update the <code  className='ws-code'>src</code> properety, but will raise an error if its value is not a string.</Text>
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
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Background image",
    description: (<>Removed the <code  className='ws-code'>BackgroundImageSrcMap</code> interface.</>),
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
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Banner",
    description: (<>Updated the <code  className='ws-code'>variant</code> property's type.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8808",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>The <code className='ws-code'>default</code> value is still valid, but the following values have been replaced with color values:</Text>
        <TextList>
          <TextListItem><code className='ws-code'>info</code> to <code className='ws-code'>blue</code></TextListItem>
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
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Button",
    description: (<>Replaced the <code  className='ws-code'>isSmall</code> and <code  className='ws-code'>isLarge</code> properties with the <code  className='ws-code'>size</code>  property.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8144",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>The <code className='ws-code'>size</code> property accepts either <code  className='ws-code'>sm</code> or <code  className='ws-code'>lg</code> as a value.</Text>
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
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Button",
    description: (<>Replaced the <code  className='ws-code'>isSmall</code> and <code  className='ws-code'>isLarge</code> properties with the <code  className='ws-code'>size</code>  property.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8144",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>The <code className='ws-code'>size</code> property accepts either <code  className='ws-code'>sm</code> or <code  className='ws-code'>lg</code> as a value.</Text>
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
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Calendar month",
    description: (<>Updated callback properties to include the <code  className='ws-code'>event</code> parameter as the first parameter.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8753",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>Updated the <code  className='ws-code'>onChange</code> and <code  className='ws-code'>onMonthChange</code> properties to take <code  className='ws-code'>event</code> as the first parameter. Handlers may need to be updated.</Text>
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
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Charts",
    description: (<>Removed the <code  className='ws-code'>getResizeObserver</code> function from <code className='ws-code'>@patternfly/react-charts</code>.</>),
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
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Charts",
    description: (<>Renamed light theme objects to remove "light" from their name, and marked these objects as <code  className='ws-code'>@private</code>. These objects should not be used directly, and should be replaced with the <code className='ws-code'>getTheme</code> function.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8590",
    repo: "React",
    fixedWithCodeMod: false
  }, {
    component: "Charts",
    description: (<>Removed <code  className='ws-code'>ChartThemeVariant</code> from <code  className='ws-code'>@patternfly/react-charts</code>.</>),
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
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Charts",
    description: (<>Removed dark theme objects from <code  className='ws-code'>@patternfly/react-charts</code>.</>),
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
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Charts",
    description: (<>Removed <code  className='ws-code'>themeVariant</code> properties from all components and the <code  className='ws-code'>getCustomTheme</code> function in <code  className='ws-code'>@patternfly/react-charts</code>.</>),
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
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Charts",
    description: (<>Removed various exports from <code  className='ws-code'>@patternfly/react-charts</code>.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8869",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>The following are no longer exported:</Text>
        <TextList>
          <TextListItem><code className='ws-code'>ChartAreaSortOrder</code></TextListItem>
          <TextListItem><code className='ws-code'>ChartDonutLabelPosition</code></TextListItem>
          <TextListItem><code className='ws-code'>ChartDonutSortOrder</code></TextListItem>
          <TextListItem><code className='ws-code'>ChartDonutThresholdSortOrder</code></TextListItem>
          <TextListItem><code className='ws-code'>ChartDonutUtilizationLabelPosition</code></TextListItem>
          <TextListItem><code className='ws-code'>ChartDonutUtilizationSortOrder</code></TextListItem>
          <TextListItem><code className='ws-code'>ChartGroupSortOrder</code></TextListItem>
          <TextListItem><code className='ws-code'>ChartLabelPlacement</code></TextListItem>
          <TextListItem><code className='ws-code'>ChartLegendOrientation</code></TextListItem>
          <TextListItem><code className='ws-code'>ChartLegendRowGutter</code></TextListItem>
          <TextListItem><code className='ws-code'>ChartLineSortOrder</code></TextListItem>
          <TextListItem><code className='ws-code'>ChartPieLabelPosition</code></TextListItem>
          <TextListItem><code className='ws-code'>ChartPieSortOrder</code></TextListItem>
          <TextListItem><code className='ws-code'>ChartScatterSortOrder</code></TextListItem>
          <TextListItem><code className='ws-code'>ChartDonutThresholdDonutOrientation</code></TextListItem>
          <TextListItem><code className='ws-code'>ChartDonutThresholdLabelOrientation</code></TextListItem>
          <TextListItem><code className='ws-code'>ChartDonutThresholdLabelPosition</code></TextListItem>
          <TextListItem><code className='ws-code'>ChartLegendPosition</code></TextListItem>
          <TextListItem><code className='ws-code'>ChartDonutSubTitlePosition</code></TextListItem>
          <TextListItem><code className='ws-code'>ChartDonutThresholdSubTitlePosition</code></TextListItem>
          <TextListItem><code className='ws-code'>ChartDonutUtilizationLegendOrientation</code></TextListItem>
          <TextListItem><code className='ws-code'>ChartDonutUtilizationLegendPosition</code></TextListItem>
          <TextListItem><code className='ws-code'>ChartDonutUtilizationSubTitlePosition</code></TextListItem>
          <TextListItem><code className='ws-code'>ChartLabelDirection</code></TextListItem>
          <TextListItem><code className='ws-code'>ChartPieLegendPosition</code></TextListItem>
          <TextListItem><code className='ws-code'>ChartVoronoiDimension</code></TextListItem>
        </TextList>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: false
  }, {
    component: "Charts",
    description: (<>A <code  className='ws-code'>Tooltip</code> from <code  className='ws-code'>@patternfly/react-core</code> used inside a <code  className='ws-code'>@patternfly/react-charts</code> component should be wrapped inside a <code  className='ws-code'>foreignObject</code>.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8592",
    repo: "React",
    fixedWithCodeMod: false
  }, {
    component: "Checkbox",
    description: (<>Updated <code  className='ws-code'>onChange</code> property so that the <code  className='ws-code'>event</code> parameter is the first parameter.</>),
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
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Clipboard copy",
    description: (<>Updated <code  className='ws-code'>onChange</code> property so that the <code  className='ws-code'>event</code> parameter is the first parameter.</>),
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
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Clipboard copy",
    description: (<>Removed the <code  className='ws-code'>PopoverPosition</code> type for the <code  className='ws-code'>position</code>  property.</>),
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
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Clipboard copy",
    description: (<>Removed the <code  className='ws-code'>switchDelay</code>  property.</>),
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
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Code editor",
    description: (<>Removed various deprecated properties from <code className='ws-code'>CodeEditorControl</code>. Codemods will suggest using the <code className='ws-code'>tooltipProps</code> property instead.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8624",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>The following deprecated properties were removed:</Text>
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
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Wizard",
    description: (<>Updated the <code className='ws-code'>mainAriaLabel</code> and <code className='ws-code'>mainAriaLabelledBy</code> properties for the deprecated implementation, and <code className='ws-code'>aria-label</code> and <code className='ws-code'>aria-labelledby</code> properties for the new implementation, to conditionally apply only when the Wizard's body content overflows and causes a scrollbar. A <code className='ws-code'>tabindex="0"</code> will also be applied.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8649",
    repo: "React",
    fixedWithCodeMod: false
  }, {
    component: "Menu",
    description: (<>Updated the <code className='ws-code'>aria-label</code> property for <code className='ws-code'>MenuItem</code> so that it is applied to the internal <code className='ws-code'>li</code> element when the <code className='ws-code'>hasCheckbox</code> property is also passed. Otherwise it is applied to the element specified by the <code className='ws-code'>component</code>  property.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8649",
    repo: "React",
    fixedWithCodeMod: false
  }, {
    component: "Page",
    description: (<>Updated the <code className='ws-code'>aria-label</code> property for <code className='ws-code'>PageGroup</code> and <code className='ws-code'>PageNavigation</code> to conditionally apply only when the <code className='ws-code'>hasOverflowScroll</code> property is true.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8649",
    repo: "React",
    fixedWithCodeMod: false
  }, {
    component: "Progress stepper",
    description: (<>Updated the internal <code className='ws-code'>aria-labelledby</code> for <code className='ws-code'>ProgressStep</code> to be conditionally applied only when the <code className='ws-code'>popoverRender</code> property is also passed.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8649",
    repo: "React",
    fixedWithCodeMod: false
  }, {
    component: "Context selector",
    description: (<>Deprecated the <code  className='ws-code'>ContextSelector</code> components.</>),
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
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Data list",
    description: (<>Replaced the <code  className='ws-code'>selectableRow</code> property with <code className='ws-code'>onSelectableRowChange</code>, which also takes the <code className='ws-code'>event</code> parameter as its first parameter.</>),
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
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Data list",
    description: (<>Removed various deprecated properties.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8388",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>The following deprecated properties were removed:</Text>
        <TextList>
          <TextListItem><code className='ws-code'>onDragFinish</code></TextListItem>
          <TextListItem><code className='ws-code'>onDragStart</code></TextListItem>
          <TextListItem><code className='ws-code'>onDragMove</code></TextListItem>
          <TextListItem><code className='ws-code'>onDragCancel</code></TextListItem>
          <TextListItem><code className='ws-code'>itemOrder</code></TextListItem>
        </TextList>
        <Text component={TextVariants.p}>In addition to removing these properties,  Codemods will suggest instead using the <code className='ws-code'>DragDrop</code> component.</Text>
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
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Data list",
    description: (<>Updated the <code className='ws-code'>onSelectDataListItem</code> property to include the <code  className='ws-code'>event</code> parameter as the first parameter.</>),
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
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Data list",
    description: (<>Updated the <code className='ws-code'>onChange</code> property for the <code className='ws-code'>DataListCheck</code> component to include the <code  className='ws-code'>event</code> parameter as the first parameter.</>),
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
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Date picker",
    description: (<>Updated the default value of the <code className='ws-code'>appendTo</code>  property, which may cause markup changes that require updating selectors.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8636",
    repo: "React",
    fixedWithCodeMod: false
  }, {
    component: "Date picker",
    description: (<>Updated the <code className='ws-code'>helperText</code> property to now expect the <code className='ws-code'>HelperText</code> component to be passed in. Error helper text also now renders internally within a <code className='ws-code'>HelperText</code> component.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8833",
    repo: "React",
    fixedWithCodeMod: false
  },  {
    component: "Various",
    description: (
      <>
        Removed the <code className="ws-code">KEY_CODES</code> constant.
      </>
    ),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8174",
    repo: "React",
    fixedWithCodeMod: false,
  },
  {
    component: "Label",
    description: (
      <>
        Removed the <code className="ws-code">isTruncated</code> property from
        Label. This is now the default behavior. In addition, you can limit the
        text width using the new <code className="ws-code">textMaxWidth</code>{" "}
        property.
      </>
    ),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8771",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>{`<Label isTruncated />`}</CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>{`<Label  />`}</CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true,
  },
  {
    component: "Login page",
    description: (
      <>
        Updated callback properties on <code className="ws-code">LoginForm</code> to include the <code className="ws-code">event</code>{" "}
        parameter as the first parameter. Handlers may require an update.
      </>
    ),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8996",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>
          The <code className="ws-code">onChangeUsername</code>,{" "}
          <code className="ws-code">onChangePassword</code>, and{" "}
          <code className="ws-code">onChangeRememberMe</code> properties now take{" "}
          <code className="ws-code">event</code> as the first parameter. Handlers
          may require an update.
        </Text>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<LoginForm onChangeUsername={(id) => handler(id)} />
<LoginForm onChangeUsername={(id, event) => handler(id, event)} />
const usernameHandler1 = (id, event) => {};
<LoginForm onChangeUsername={usernameHandler1} />
function usernameHandler2(id, event) {};
<LoginForm onChangeUsername={usernameHandler2} />

<LoginForm onChangePassword={(id) => handler(id)} />
<LoginForm onChangePassword={(id, event) => handler(id, event)} />
const passwordHandler1 = (id, event) => {};
<LoginForm onChangePassword={passwordHandler1} />
function passwordHandler2(id, event) {};
<LoginForm onChangePassword={passwordHandler2} />

<LoginForm onChangeRememberMe={(id) => handler(id)} />
<LoginForm onChangeRememberMe={(id, event) => handler(id, event)} />
const rememberMeHandler1 = (id, event) => {};
<LoginForm onChangeRememberMe={rememberMeHandler1} />
function rememberMeHandler2(id, event) {};
<LoginForm onChangeRememberMe={rememberMeHandler2} />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>{`<LoginForm onChangeUsername={(_event, id) => handler(id)} />
<LoginForm onChangeUsername={(event, id) => handler(id, event)} />
const usernameHandler1 = (_event, id) => {};
<LoginForm onChangeUsername={usernameHandler1} />
function usernameHandler2(_event, id) {};
<LoginForm onChangeUsername={usernameHandler2} />

<LoginForm onChangePassword={(_event, id) => handler(id)} />
<LoginForm onChangePassword={(event, id) => handler(id, event)} />
const passwordHandler1 = (_event, id) => {};
<LoginForm onChangePassword={passwordHandler1} />
function passwordHandler2(_event, id) {};
<LoginForm onChangePassword={passwordHandler2} />

<LoginForm onChangeRememberMe={(_event, id) => handler(id)} />
<LoginForm onChangeRememberMe={(event, id) => handler(id, event)} />
const rememberMeHandler1 = (_event, id) => {};
<LoginForm onChangeRememberMe={rememberMeHandler1} />
function rememberMeHandler2(_event, id) {};
<LoginForm onChangeRememberMe={rememberMeHandler2} />`}</CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true,
  },
  {
    component: "Login page",
    description: (
      <>
        Removed the <code className="ws-code">backgroundImgAlt</code>  property.
        Updated the type of the{" "}
        <code className="ws-code">backgroundImgSrc</code> property to just a string,
        and the property will no longer accept a{" "}
        <code className="ws-code">BackgroundImageSrcMap</code> object.
      </>
    ),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8931",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<LoginPage backgroundImgAlt="Alt text" backgroundImgSrc={{xs: 'file/path'}} />

const srcPath = {xs: 'file/path'};
<LoginPage backgroundImgSrc={srcPath} />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>{`// An error is raised for the backgroundImgSrc prop
<LoginPage  backgroundImgSrc={{xs: 'file/path'}} />

const srcPath = {xs: 'file/path'};
// An error is raised for the backgroundImgSrc prop
<LoginPage backgroundImgSrc={srcPath} />`}</CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: false,
  },
  {
    component: "Masthead",
    description: (
      <>
        Updated <code className="ws-code">MastheadBrand</code> to only be
        an anchor if an
        <code className="ws-code">href</code> is specified, otherwise it will be
        a <code className="ws-code">span</code>.
      </>
    ),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8655",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>
          Explicitly declared component properties will remain unchanged, but if
          it is not specified a default will be added.
        </Text>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>{`<MastheadBrand />
<MastheadBrand component="div" />`}</CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>{`<MastheadBrand component="a" />
<MastheadBrand component="div" />`}</CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true,
  },
  {
    component: "Menu",
    description: (
      <>
        Removed the <code className="ws-code">aria-label</code> property on
        <code className="ws-code">Menu</code> as it should be passed to <code className="ws-code">MenuList</code> instead.
      </>
    ),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8649",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>
          If you are also using MenuGroup with a{" "}
          <code className="ws-code">label</code> property passed to it, an{" "}
          <code className="ws-code">aria-label</code> on MenuList is not
          necessary.
        </Text>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Menu aria-label="tester">
  <MenuList>
    ...menu items placed here
  </MenuList>
</Menu>

<Menu aria-label="tester">
  <MenuList>
    ...menu items placed here
  </MenuList>
  <MenuList>
    ...menu items placed here
  </MenuList>
</Menu>

<Menu aria-label="tester">
  <MenuGroup>
    <MenuList>
      ...menu items placed here
    </MenuList>
  </MenuGroup>
</Menu>`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Menu >
  <MenuList aria-label="tester">
    ...menu items placed here
  </MenuList>
</Menu>

<Menu >
  <MenuList>
    ...menu items placed here
  </MenuList>
  <MenuList>
    ...menu items placed here
  </MenuList>
</Menu>

<Menu >
  <MenuGroup>
    <MenuList>
      ...menu items placed here
    </MenuList>
  </MenuGroup>
</Menu>`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true,
  },
  {
    component: "Menu",
    description: (
      <>
        <code className="ws-code">MenuInput</code> has been renamed to{" "}
        <code className="ws-code">MenuSearchInput</code> and{" "}
        <code className="ws-code">MenuSearch</code> has been added as a wrapper.
      </>
    ),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8820",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`  <MenuInput><SearchInput /></MenuInput>
`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`    <MenuSearch><MenuSearchInput><SearchInput /></MenuSearchInput></MenuSearch>`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true,
  },
  {
    component: "Menu",
    description: (
      <>
        Updated the <code className="ws-code">aria-label</code> property on
        MenuItemAction, making it required instead of optional.
      </>
    ),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8617",
    repo: "React",
    fixedWithCodeMod: false,
  },
  {
    component: "File upload (multiple)",
    description: (
      <>
        Updated the <code className="ws-code">onFileDrop</code> property for
        MultipleFileUpload so that the <code className="ws-code">event</code>{" "}
        parameter is the first parameter. Handlers may require an update.
      </>
    ),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8931",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<MultipleFileUpload onFileDrop={(id) => handler(id)} />
const handler1 = (id) => {};
<MultipleFileUpload onFileDrop={handler1} />
function handler2(id) {};
<MultipleFileUpload onFileDrop={handler2} />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<MultipleFileUpload onFileDrop={(_event, id) => handler(id)} />
const handler1 = (_event, id) => {};
<MultipleFileUpload onFileDrop={handler1} />
function handler2(_event, id) {};
<MultipleFileUpload onFileDrop={handler2} />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true,
  },
  {
    component: "Navigation",
    description: (
      <>
        Updated the <code className="ws-code">onSelect</code> and{" "}
        <code className="ws-code">onToggle</code> properties for nav so that the{" "}
        <code className="ws-code">event</code> parameter is the first parameter, and
        have removed the event property from the{" "}
        <code className="ws-code">selectedItem</code> and{" "}
        <code className="ws-code">toggledItem</code> object parameters respectively.
        Handlers may require an update.
      </>
    ),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8997",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Navigation onSelect={(id) => handler(id)} />
const handler1 = (id) => {};
<Navigation onSelect={handler1} />
function handler2(id) {};
<Navigation onSelect={handler2} />

<Navigation onToggle={(id) => handler(id)} />
const toggleHandler1 = (id) => {};
<Navigation onToggle={toggleHandler1} />
function toggleHandler2(id) {};
<Navigation onToggle={toggleHandler2} />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>{`<Navigation onSelect={(_event, id) => handler(id)} />
const handler1 = (_event, id) => {};
<Navigation onSelect={handler1} />
function handler2(_event, id) {};
<Navigation onSelect={handler2} />

<Navigation onToggle={(_event, id) => handler(id)} />
const toggleHandler1 = (_event, id) => {};
<Navigation onToggle={toggleHandler1} />
function toggleHandler2(_event, id) {};
<Navigation onToggle={toggleHandler2} />`}</CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true,
  },
  {
    component: "Navigation",
    description: <>hanged the placement of nav flyouts in the DOM.</>,
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8628",
    repo: "React",
    fixedWithCodeMod: false,
  },
  {
    component: "Dropdown", // TODO: make sure this is in the correct place once everything is merged
    description: (
      <>
        Promoted the new implementation of dropdown, which is now the
        default implementation.
      </>
    ),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8835",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>
          This rule will update import and/or export paths.
        </Text>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Dropdown } from '@patternfly/react-core/next';`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Dropdown /* data- Codemods */ } from '@patternfly/react-core';`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true,
  },
  {
    component: "Select", // TODO: make sure this is in the correct place once everything is merged
    description: (
      <>
        Promoted the new implementation of select, which is now the
        default implementation.
      </>
    ),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8825",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>
          This rule will update import and/or export paths.
        </Text>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Select } from '@patternfly/react-core/next';`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Select /* data- Codemods */ } from '@patternfly/react-core';`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true,
  },
  {
    component: "Wizard", // TODO: make sure this is in the correct place once everything is merged
    description: (
      <>
        Promoted the new implementation of wizard, which is now
        default implementation.
      </>
    ),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8821",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>
          This rule will update import and/or export paths.
        </Text>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Wizard } from '@patternfly/react-core/next';`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Wizard /* data- Codemods */ } from '@patternfly/react-core';`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true,
  },
  {
    component: "Notification badge",
    description: (
      <>
        Removed the <code className="ws-code">isRead</code> property from
        NotificationBadge, use "read" or "unread" on the{" "}
        <code className="ws-code">variant</code> property instead.
      </>
    ),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8626",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`  <NotificationBadge isRead />
  <NotificationBadge isRead={false} />
  <NotificationBadge isRead={isRead} />
  <NotificationBadge isRead={isRead || markedRead} />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`  <NotificationBadge variant="read" />
  <NotificationBadge variant="unread" />
  <NotificationBadge variant={isRead ? "read" : "unread"} />
  <NotificationBadge variant={(isRead || markedRead) ? "read" : "unread"} />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true,
  },
  {
    component: "Number input",
    description: (
      <>
        Removed the <code className="ws-code">allowEmptyInput</code> property from
        NumberInput.
      </>
    ),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8715",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>{`<NumberInput allowEmptyInput />`}</CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>{`<NumberInput  />`}</CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true,
  },
  {
    component: "Various",
    description: (
      <>
        {" "}
        Updated the <code className="ws-code">onToggle</code> function to
        include the <code className="ws-code">event</code> as its first parameter
        for the following components:{" "}
        <code className="ws-code">ApplicationLauncher</code>,{" "}
        <code className="ws-code">BadgeToggle</code>,{" "}
        <code className="ws-code">DropdownToggle</code>,{" "}
        <code className="ws-code">KebabToggle</code>,{" "}
        <code className="ws-code">Toggle</code>, <code className="ws-code">Select</code>
        , and <code className="ws-code">SelectToggle</code>. Handlers for these
        components may require an update.
      </>
    ),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8667",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Toggle onToggle={(isOpen) => onToggle(isOpen)} />

const toggleBadge = (isOpen) => {};
<BadgeToggle onToggle={toggleBadge}>

function toggleDropdown(isOpen) {};
<DropdownToggle onToggle={toggleDropdown}>`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Toggle onToggle={(_event, isOpen) => onToggle(isOpen)} />

const toggleBadge = (_event, isOpen) => {};
<BadgeToggle onToggle={toggleBadge}>

function toggleDropdown(_event, isOpen) {};
<DropdownToggle onToggle={toggleDropdown}>>`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true,
  },
  {
    component: "Options menu",
    description: (
      <>
        Deprecated <code className="ws-code">OptionsMenu</code> components.
      </>
    ),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8798",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`import { OptionsMenu, OptionsMenuToggle } from '@patternfly/react-core';`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`import { OptionsMenu, OptionsMenuToggle } from '@patternfly/react-core/deprecated';`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true,
  },
  {
    component: "Overflow menu",
    description: (
      <>
        OverflowMenuDropdownItem now uses the Next implementation of
        DropdownItem and DropdownItemProps internally.
      </>
    ),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8359",
    repo: "React",
    fixedWithCodeMod: false,
  },
  {
    component: "Overflow menu",
    description: (
      <>
        Renamed the <code className="ws-code">index</code> property for
        OverflowMenuDropdownItem to <code className="ws-code">itemId</code>, and
        updated its type to <code className="ws-code">string | number</code>.
      </>
    ),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8359",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<OverflowMenuDropdownItem index={0}>`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<OverflowMenuDropdownItem itemId={0}>`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true,
  },
  {
    component: "Page",
    description: (
      <>
        <Table aria-label="Page renamed properties table" variant="compact" borders>
          <Caption>
            The following properties have been updated for the specified Page
            sub-components:
          </Caption>
          <Thead>
            <Tr>
              <Th>{pagePropsTableColumns.subComponent}</Th>
              <Th>{pagePropsTableColumns.oldPropName}</Th>
              <Th>{pagePropsTableColumns.newPropName}</Th>
            </Tr>
          </Thead>
          <Tbody>
            {pagePropsTableRows.map((row) => (
              <Tr key={`${row.subComponent}-${row.oldPropName}`}>
                <Td dataLabel={pagePropsTableColumns.subComponent}>
                  {row.subComponent}
                </Td>
                <Td dataLabel={pagePropsTableColumns.oldPropName}>
                  {row.oldPropName}
                </Td>
                <Td dataLabel={pagePropsTableColumns.newPropName}>
                  {row.newPropName}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </>
    ),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8942",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<PageSidebar isNavOpen={true} />
<PageToggleButton isNavOpen={true} onNavToggle={() => {}} />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<PageSidebar isSidebarOpen={true} />
            <PageToggleButton isSidebarOpen={true} onSidebarToggle={() => {}} />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true,
  },
  {
    component: "Page",
    description: (
      <>
        Updated <code className="ws-code">onPageResize</code> property so that the{" "}
        <code className="ws-code">event</code> parameter is the first parameter.
        Handlers may require an update.
      </>
    ),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/9011",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Page onPageResize={({obj}) => onChange({obj})} />

                const resize1 = ({obj}) => {};
                <Page onPageResize={resize1}>

                function resize2({obj}) {};
                <Page onPageResize={resize2}>`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Page onPageResize={(_event, {obj}) => onChange({obj})} />

                const resize1 = (_event, {obj}) => {};
                <Page onPageResize={resize1}>

                function resize2(_event, {obj}) {};
                <Page onPageResize={resize2}>`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true,
  },
  {
    component: "Page",
    description: (
      <>
        Deprecated the <code className="ws-code">PageHeader</code> components.
      </>
    ),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8854",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>
          Codemods will update import and export paths to our deprecated
          directory, but we recommend replacing it with{" "}
          <code className="ws-code">Masthead</code> and its related imports.
        </Text>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Button,
                PageHeader,
                PageHeaderTools,
                PageHeaderToolsGroup,
                PageHeaderToolsItem,
            } from "@patternfly/react-core";`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`import {
	Button
} from '@patternfly/react-core';
import {
	PageHeader,
	PageHeaderTools,
	PageHeaderToolsGroup,
	PageHeaderToolsItem
} from '@patternfly/react-core/deprecated';`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true,
  },
  {
    component: "Page",
    description: (
      <>
        Updated <code className="ws-code">PageHeader</code>'s logo to only be an
        anchor if an <code className="ws-code">href</code> is specified.
      </>
    ),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8655",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<PageHeader />
<PageHeader logoComponent="div" />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<PageHeader logoComponent="a" />
<PageHeader logoComponent="div" />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true,
  },
  {
    component: "Page",
    description: (
      <>
        <code className="ws-code">PageSidebar</code> API has been updated. The <code className="ws-code">nav</code> property has been
        renamed to <code className="ws-code">children</code>. Any content passed to
        the property should be wrapped in PageSidebarBody.
      </>
    ),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8942",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<PageSidebar theme="light" nav="Content">`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<PageSidebar theme="light">
                <PageSidebarBody>
                Content
                </PageSidebarBody>
                </PageSidebar>`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true,
  },
  {
    component: "Pagination",
    description: (
      <>
        Removed the <code className="ws-code">OptionsToggle</code> used by{" "}
        <code className="ws-code">Pagination</code> and replaced it with{" "}
        <code className="ws-code">Menu</code> and{" "}
        <code className="ws-code">MenuToggle</code>.
      </>
    ),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8319",
    repo: "React",
    fixedWithCodeMod: false,
  },
  {
    component: "Pagination",
    description: (
      <>
        Removed various deprecated properties from{" "}
        <code className="ws-code">Pagination</code>.
      </>
    ),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8624",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>
          The following deprecated properties were renamed and/or removed:
        </Text>
        <TextList>
          <TextListItem>
            <code className="ws-code">defaultToFullPage</code>:{" "}
            <code className="ws-code">isLastFullPageShown</code>
          </TextListItem>
          <TextListItem>
            <code className="ws-code">perPageComponenet</code>: removed
          </TextListItem>
          <Text component={TextVariants.p}>
            The following sub-properties of Pagination's "title" property were renamed:
          </Text>
          <TextListItem>
            <code className="ws-code">currPage</code>:{" "}
            <code className="ws-code">currPageAriaLabel</code>
          </TextListItem>
          <TextListItem>
            <code className="ws-code">paginationTitle</code>:{" "}
            <code className="ws-code">paginationAriaLabel</code>
          </TextListItem>
          <TextListItem>
            <code className="ws-code">toFirstPage</code>:{" "}
            <code className="ws-code">toFirstPageAriaLabel</code>
          </TextListItem>
          <TextListItem>
            <code className="ws-code">toLastPage</code>:{" "}
            <code className="ws-code">toLastPageAriaLabel</code>
          </TextListItem>
          <TextListItem>
            <code className="ws-code">toNextPage</code>:{" "}
            <code className="ws-code">toNextPageAriaLabel</code>
          </TextListItem>
          <TextListItem>
            <code className="ws-code">toPreviousPage</code>:{" "}
            <code className="ws-code">toPreviousPageAriaLabel</code>
          </TextListItem>
          <TextListItem>
            <code className="ws-code">optionsToggle</code>:{" "}
            <code className="ws-code">optionsToggleAriaLabel</code>
          </TextListItem>
        </TextList>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Pagination
  perPageComponenet="div"
  defaultToFullPage
  titles={{
    currPage: "text"
    paginationTitle: "text"
    toFirstPage: "text"
    toLastPage: "text"
    toNextPage: "text"
    toPreviousPage: "text"
    optionsToggle: "text"
  }}
/>`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>{`<Pagination
  isLastFullPageShown
  titles={{
    currPageAriaLabel: "text"
    paginationAriaLabel: "text"
    toFirstPageAriaLabel: "text"
    toLastPageAriaLabel: "text"
    toNextPageAriaLabel: "text"
    toPreviousPageAriaLabel: "text"
    optionsToggleAriaLabel: "text"
  }}
/>`}</CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true,
  },
  {
    component: "Pagination",
    description: (
      <>
        Renamed the <code className="ws-code">ToggleTemplateProps</code> to{" "}
        <code className="ws-code">PaginationToggleTemplateProps</code>.
      </>
    ),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8134",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Pagination, ToggleTemplateProps } from '@patternfly/react-core';
<Pagination toggleTemplate={({firstIndex, lastIndex} : ToggleTemplateProps) => <div />} />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Pagination, PaginationToggleTemplateProps } from '@patternfly/react-core';
<Pagination toggleTemplate={({firstIndex, lastIndex} : PaginationToggleTemplateProps) => <div />} />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true,
  },{
    component: "Chip group",
    description: (
      <>
        Updated the component to require the use of the{" "}
        <code className="ws-code">.pf-c-chip-group__main</code> element.
      </>
    ),
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5356",
    repo: "HTML/CSS",
    fixedWithCodeMod: false,
  },
  {
    component: "Chip group",
    description:
      "Added wrapping elements for both the chip content and actions to make the layout more flexible and to style embedded components.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5360",
    repo: "HTML/CSS",
    fixedWithCodeMod: false,
  },
  {
    component: "Chip group",
    description:
      'Updated the chip component to use CSS "gap" to space its children instead of using "margin".',
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5293",
    repo: "HTML/CSS",
    fixedWithCodeMod: false,
  },
  {
    component: "Data list",
    description:
      'Renamed "selectable" data list rows to "clickable" for consistency across components, and improved and updated the visual appearance of clickable rows.',
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5397",
    repo: "HTML/CSS",
    fixedWithCodeMod: false,
  },
  {
    component: "Drawer",
    description:
      'Removed a "min-height" declaration on the drawer body that caused layout issues.',
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5322",
    repo: "HTML/CSS",
    fixedWithCodeMod: false,
  },
  {
    component: "Dropdown",
    description:
      "Fixed the alignment of items in the toggle when the toggle is wider than the width of its content.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5425",
    repo: "HTML/CSS",
    fixedWithCodeMod: false,
  },
  {
    component: "Empty state",
    description:
      "Refactored the component structure to be more flexible and more inline with existing structural conventions.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5307",
    repo: "HTML/CSS",
    fixedWithCodeMod: false,
  },
  {
    component: "Flex",
    description: "Added gap support.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5516",
    details:
      'This is more of an enhancement that is not breaking. However, there is a new "row" spacer (a gap between rows) that is set by default that didn\'t exist previously, and the default column spacer has been updated from medium to large to be consistent with other layouts.',
    repo: "HTML/CSS",
    fixedWithCodeMod: false,
  },
  {
    component: "Form control",
    description:
      "Wrapped form control elements in HTML divs to be more flexible, and updated status and custom icon form control elements to use regular icons instead of icons as background images.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5531",
    repo: "HTML/CSS",
    fixedWithCodeMod: false,
  },
  {
    component: "Form control",
    description:
      "Refactored the form control borders to be placed on the wrapping HTML div instead of the form elements themselves.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5641",
    repo: "HTML/CSS",
    fixedWithCodeMod: false,
  },
  {
    component: "Helper text",
    description:
      "Updated components that include helper text to use the helper text component.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5417",
    repo: "HTML/CSS",
    fixedWithCodeMod: false,
  },
  {
    component: "Icons",
    description: (
      <>
        Updated the <code className="ws-code">pf-icon</code> class prefix for
        custom icons to <code className="ws-code">pficon</code>
      </>
    ),
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5538",
    repo: "HTML/CSS",
    fixedWithCodeMod: false,
  },
  {
    component: "Icons",
    description: (
      <>
        Removed the <code className="ws-code">.pf-svg-size-[size]</code> classes
        used to modify SVG sizes with <code className="ws-code">.pf-svg</code>.
        The <code className="ws-code">Icon</code> component should now be used
        to resize an icon.
      </>
    ),
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5388",
    repo: "HTML/CSS",
    fixedWithCodeMod: false,
  },
  {
    component: "Icons",
    description:
      "Updated the global variables for small and medium icon font sizes.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5525",
    repo: "HTML/CSS",
    fixedWithCodeMod: false,
  },
  {
    component: "Icons",
    description:
      "Updated components that have static icons to use the appropriate icon color.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5526",
    repo: "HTML/CSS",
    fixedWithCodeMod: false,
  },
  {
    component: "Input group",
    description:
      "Refactored the component to be more flexible and require the use of input group items to wrap all children of the input group.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5382",
    repo: "HTML/CSS",
    fixedWithCodeMod: false,
  }, {
    component: "Popover",
    description: (<>Updated the default value of the <code className='ws-code'>appendTo</code>  property, which may cause markup changes that require updating selectors.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8621",
    repo: "React",
    fixedWithCodeMod: false
  }, {
    component: "Popover",
    description: (<>Removed the <code className='ws-code'>boundary</code> and <code className='ws-code'>tippyProps</code> properties and updated removed parameters from various callback properties.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8201",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>The <code className='ws-code'>shouldClose</code> property's first parameter was removed, and all parameters were removed from the <code className='ws-code'>onHidden</code>, <code className='ws-code'>onHide</code>, <code className='ws-code'>onMount</code>, <code className='ws-code'>onShow</code>, and <code className='ws-code'>onShown</code> properties.</Text>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Popover boundary={} tippyProps={} shouldClose={(tip, hideFunction) => {/* ... */}} onHidden={(tip) => {/* ... */}} onHide={(tip) => {/* ... */}} onMount={(tip) => {/* ... */}} onShow={(tip) => {/* ... */}} onShown={(tip) => {/* ... */}} />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Popover
  shouldClose={(hideFunction) => {
    /* ... */
  }}
  onHidden={() => {
    /* ... */
  }}
  onHide={() => {
    /* ... */
  }}
  onMount={() => {
    /* ... */
  }}
  onShow={() => {
    /* ... */
  }}
  onShown={() => {
    /* ... */
  }}
/>`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Popover",
    description: (<>Updated the <code className='ws-code'>shouldClose</code> and <code className='ws-code'>shouldOpen</code> callback properties so that the <code className='ws-code'>event</code> parameter is the first parameter.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/9054",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Popover shouldOpen={(fn) => openHandler(fn)} shouldClose={(fn2) => closeHandler(fn2)} />
<Popover shouldOpen={(fn, event) => openHandler(fn, event)} shouldClose={(fn, event) => closeHandler(fn, event)}/>
const openHandler1 = (fn, event) => {};
const closeHandler1 = (fn, event) => {};
<Popover shouldOpen={openHandler1} shouldClose={closeHandler1} />
function openHandler2(fn, event) {};
function closeHandler2(fn, event) {};
<Popover shouldOpen={openHandler2} shouldClose={closeHandler2} />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Popover shouldOpen={(_event, fn) => openHandler(fn)} shouldClose={(_event, fn2) => closeHandler(fn2)} />
<Popover shouldOpen={(event, fn) => openHandler(fn, event)} shouldClose={(event, fn) => closeHandler(fn, event)}/>
const openHandler1 = (event, id) => {};
const closeHandler1 = (event, id) => {};
<Popover shouldOpen={openHandler1} shouldClose={closeHandler1} />
function openHandler2(event, id) {};
function closeHandler2(event, id) {};
<Popover shouldOpen={openHandler2} shouldClose={closeHandler2} />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Popper",
    description: (<>Removed the <code className='ws-code'>popperMatchesTriggerWidth</code>  property. The <code className='ws-code'>width</code>, <code className='ws-code'>minWidth</code>, and <code className='ws-code'>maxWidth</code> properties should be used instead to modify the Popper width.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8724",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Popper popperMatchesTriggerWidth />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Popper  />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Radio",
    description: (<>Updated the <code className='ws-code'>onChange</code> callback property so that the <code className='ws-code'>event</code> parameter is the first parameter.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8965",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Radio onChange={(checked) => handler(checked)} />
<Radio onChange={(checked, event) => handler(checked, event)} />
const handler1 = (checked, event) => {};
<Radio onChange={handler1} />
function handler2(checked, event) {};
<Radio onChange={handler2} />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Radio onChange={(_event, checked) => handler(checked)} />
<Radio onChange={(event, checked) => handler(checked, event)} />
const handler1 = (_event, checked) => {};
<Radio onChange={handler1} />
function handler2(_event, checked) {};
<Radio onChange={handler2} />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "File upload (simple)",
    description: (<>Updated the type for <code className='ws-code'>onFileInputChange</code> and <code className='ws-code'>dropzoneProps</code> properties as part of an upgrade of <code className='ws-code'>react-dropzone</code> from version 9 to version 14.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/7926",
    repo: "React",
    fixedWithCodeMod: false
  }, {
    component: "File upload (multiple)",
    description: (<>Updated the type for the <code className='ws-code'>dropzoneProps</code> property as part of an upgrade of <code className='ws-code'>react-dropzone</code> from version 9 to version 14.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/7926",
    repo: "React",
    fixedWithCodeMod: false
  }, {
    component: "Code editor",
    description: (<>Upgraded the <code className='ws-code'>react-dropzone</code> dependency used internally to the component from version 9 to version 14.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/7926",
    repo: "React",
    fixedWithCodeMod: false
  }, {
    component: "@patternfly/react-icons",
    description: (<>Removed the <code className='ws-code'>size</code>, <code className='ws-code'>color</code>, and <code className='ws-code'>noVerticalAlign</code> properties from icons imported from <code className='ws-code'>@patternfly/react-icons</code>.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/5275",
    repo: "React",
    fixedWithCodeMod: false
  }, {
    component: "Application launcher",
    description: (<>Removed the <code className='ws-code'>removeFindDomNode</code> property as it is now the default behavior.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8316",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<ApplicationLauncher removeFindDomNode />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<ApplicationLauncher  />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Clipboard copy",
    description: (<>Removed the <code className='ws-code'>removeFindDomNode</code> property as it is now the default behavior.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8371",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<ClipboardCopy removeFindDomNode />`}
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
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Truncate",
    description: (<>Removed the <code className='ws-code'>removeFindDomNode</code> property as it is now the default behavior.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8371",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Truncate removeFindDomNode />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Truncate  />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Context selector",
    description: (<>Removed the <code className='ws-code'>removeFindDomNode</code> property as it is now the default behavior.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8316",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<ContextSelector removeFindDomNode />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<ContextSelector  />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Dropdown",
    description: (<>Removed the <code className='ws-code'>removeFindDomNode</code> property from the deprecated implementation as it is now the default behavior.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8316",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Dropdown removeFindDomNode />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Dropdown  />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Navigation",
    description: (<>Removed the <code className='ws-code'>removeFindDomNode</code> property from the <code className='ws-code'>NavItem</code> component as it is now the default behavior.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8316",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<NavItem removeFindDomNode />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<NavItem  />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Options menu",
    description: (<>Removed the <code className='ws-code'>removeFindDomNode</code> property as it is now the default behavior.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8316",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<OptionsMenu removeFindDomNode />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<OptionsMenu  />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Popover",
    description: (<>Removed the <code className='ws-code'>removeFindDomNode</code> property as it is now the default behavior.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8316",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Popover removeFindDomNode />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Popover  />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Search input",
    description: (<>Removed the <code className='ws-code'>removeFindDomNode</code> property as it is now the default behavior.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8316",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<SearchInput removeFindDomNode />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<SearchInput  />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Select",
    description: (<>Removed the <code className='ws-code'>removeFindDomNode</code> property from the deprecated implementation as it is now the default behavior.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8316",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Select removeFindDomNode />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Select  />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Tabs",
    description: (<>Removed the <code className='ws-code'>removeFindDomNode</code> property from the <code className='ws-code'>OverflowTab</code> component as it is now the default behavior.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8316",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<OverflowTab removeFindDomNode />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<OverflowTab  />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Time picker",
    description: (<>Removed the <code className='ws-code'>removeFindDomNode</code> property as it is now the default behavior.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8316",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Timepicker removeFindDomNode />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Timepicker  />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Tooltip",
    description: (<>Removed the <code className='ws-code'>removeFindDomNode</code> property as it is now the default behavior.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8316",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Tooltip removeFindDomNode />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Tooltip  />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Application launcher",
    description: (<>Removed the <code className='ws-code'>ToggleMenuBaseProps</code> interface.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8235",
    repo: "React",
    fixedWithCodeMod: false
  }, {
    component: "Context selector",
    description: (<>Removed the <code className='ws-code'>ToggleMenuBaseProps</code> interface.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8235",
    repo: "React",
    fixedWithCodeMod: false
  }, {
    component: "Dropdown",
    description: (<>Removed the <code className='ws-code'>ToggleMenuBaseProps</code> interface from the deprecated implementation.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8235",
    repo: "React",
    fixedWithCodeMod: false
  }, {
    component: "Options menu",
    description: (<>Removed the <code className='ws-code'>ToggleMenuBaseProps</code> interface.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8235",
    repo: "React",
    fixedWithCodeMod: false
  }, {
    component: "Select",
    description: (<>Removed the <code className='ws-code'>ToggleMenuBaseProps</code> interface from the deprecated implementation.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8235",
    repo: "React",
    fixedWithCodeMod: false
  }, {
    component: "Popper",
    description: (<>Removed the <code className='ws-code'>ToggleMenuBaseProps</code> interface.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8235",
    repo: "React",
    fixedWithCodeMod: false
  }, {
    component: "@patternfly/react-core",
    description: (<>Removed the default value of the <code className='ws-code'>getResizeObserver</code> function's third parameter, <code className='ws-code'>useRequestAnimationFrame</code>.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8324",
    repo: "React",
    fixedWithCodeMod: false
  }, {
    component: "Select",
    description: (<>Updated the internal markup of the deprecated typeahead and multi-typeahead implementations. Selectors may need to be updated.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/9172",
    repo: "React",
    fixedWithCodeMod: false
  }, {
    component: "Select",
    description: (<>Deprecated the <code  className='ws-code'>Select</code> components and replaced them with a newer implementation.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8825",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>Codemods will update import and export paths to our deprecated directory, but we recommend replacing it with our new <code className='ws-code'>Select</code> implementation.</Text>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Button, Select, SelectOption, SelectVariant, SelectDirection, SelectGroup } from "@patternfly/react-core";`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`import {
	Button
} from '@patternfly/react-core';
import {
	Select,
	SelectOption,
	SelectVariant,
	SelectDirection,
	SelectGroup
} from '@patternfly/react-core/deprecated';`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Select",
    description: (<>Renamed the <code  className='ws-code'>itemId</code> property for the new implementation of <code  className='ws-code'>SelectOption</code> to <code  className='ws-code'>value</code>.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8825",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<SelectOption itemId="Option 1" />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<SelectOption value="Option 1" />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Dropdown",
    description: (<>Renamed the <code  className='ws-code'>itemId</code> property for the new implementation of <code  className='ws-code'>DropdownItem</code> to <code  className='ws-code'>value</code>.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8825",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<DropdownItem itemId="Item 1" />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<DropdownItem value="Item 1" />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Time picker",
    description: (<>Updated the internal markup to render the <code className='ws-code'>invalidFormatErrorMessage</code> and <code className='ws-code'>invalidMinMaxErrorMessage</code> properties within <code className='ws-code'>HelperText</code> components.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8833",
    repo: "React",
    fixedWithCodeMod: false
  }, {
    component: "Simple list",
    description: (<>Removed the <code  className='ws-code'>isCurrent</code>  property, which should be replaced with the <code  className='ws-code'>isActive</code>  property.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8132",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<SimpleList isCurrent />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<SimpleList isActive />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Slider",
    description: (<>Updated the <code className='ws-code'>onChange</code> callback property so that the <code className='ws-code'>event</code> parameter is the first parameter.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8970",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Slider onChange={(value) => handler(value)} />
const handler1 = (value) => {};
<Slider onChange={handler1} />
function handler2(value) {};
<Slider onChange={handler2} />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Slider onChange={(_event, value) => handler(value)} />
const handler1 = (_event, value) => {};
<Slider onChange={handler1} />
function handler2(_event, value) {};
<Slider onChange={handler2} />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Spinner",
    description: (<>Removed the <code className='ws-code'>isSVG</code> property as the component now uses an SVG exclusively.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8616",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Spinner isSVG />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Spinner  />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Switch",
    description: (<>Updated the <code className='ws-code'>onChange</code> callback property so that the <code className='ws-code'>event</code> parameter is the first parameter.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/9037",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Switch onChange={(id) => handler(id)} />
<Switch onChange={(id, event) => handler(id, event)} />
const handler1 = (id, event) => {};
<Switch onChange={handler1} />
function handler2(id, event) {};
<Switch onChange={handler2} />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Switch onChange={(_event, id) => handler(id)} />
<Switch onChange={(event, id) => handler(id, event)} />
const handler1 = (_event, id) => {};
<Switch onChange={handler1} />
function handler2(_event, id) {};
<Switch onChange={handler2} />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Table",
    description: (<>Renamed the <code className='ws-code'>isHoverable</code> property to <code className='ws-code'>isClickable</code>. Codemods will provide a fix when the property is passed to the <code className='ws-code'>Tr</code> component of our composable implementation, but will otherwise only raise an error for our deprecated implementation.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/9083",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Tr isHoverable />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Tr isClickable />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Table",
    description: (<>Renamed the <code className='ws-code'>TableComposable</code> component to just <code className='ws-code'>Table</code>.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8892",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>The fix provided by  Codemods will insert a <code className='ws-code'>/* data- Codemods */</code> comment after the import specifier. This should only be removed once  Codemods is no longer being ran as it prevents other fixes from overwriting this update.</Text>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`import { TableComposable } from '@patternfly/react-table';

<TableComposable />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Table /* data- Codemods */ } from '@patternfly/react-table';

<Table />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Table",
    description: (<>Deprecated the <code  className='ws-code'>Table</code> components, which should be replaced with the composable implementation.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8892",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>Codemods will update import and export paths to our deprecated directory, but we recommend replacing it with our composable implementation.</Text>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Table, TableBody, TableHeader, TableProps } from "@patternfly/react-table";`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`import {
 Table,
 TableBody,
 TableHeader,
 TableProps
} from '@patternfly/react-table/deprecated';`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Table",
    description: (<>Updated the <code  className='ws-code'>ActionsColumn</code> to use the new implementation of <code  className='ws-code'>Dropdown</code>. This applies to both the deprecated and composable implementations.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8629",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>The following changes were also made:</Text>
        <TextList>
          <TextListItem>The toggle passed to the <code  className='ws-code'>ActionsColumn</code> must be a <code  className='ws-code'>MenuToggle</code> component</TextListItem>
          <TextListItem>Removed the <code  className='ws-code'>dropdownPosition</code>, <code  className='ws-code'>dropdownDirection</code>, and <code  className='ws-code'>menuAppendTo</code> properties, which should be replaced with the <code  className='ws-code'>popperProps</code> property</TextListItem>
        </TextList>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: false
  }, {
    component: "Table",
    description: (<>Updated the type of the <code  className='ws-code'>collapseAllAriaLabel</code> property on <code  className='ws-code'>ThExpandType</code> to a string instead of an empty string <code  className='ws-code'>''</code>. Workarounds casting this property to an empty string are no longer needed.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8634",
    repo: "React",
    fixedWithCodeMod: false
  }, {
    component: "Table",
    description: (<>Removed the deprecated <code  className='ws-code'>hasSelectableRowCaption</code> property from our composable implementation.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8352",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<TableComposable hasSelectableRowCaption />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<TableComposable  />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Tabs",
    description: (<>Updated the <code className='ws-code'>onToggle</code> callback property so that the <code className='ws-code'>event</code> parameter is the first parameter.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/9059",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Tabs onToggle={(id) => handler(id)} />
const handler1 = (id) => {};
<Tabs onToggle={handler1} />
function handler2(id) {};
<Tabs onToggle={handler2} />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Tabs onToggle={(_event, id) => handler(id)} />
const handler1 = (_event, id) => {};
<Tabs onToggle={handler1} />
function handler2(_event, id) {};
<Tabs onToggle={handler2} />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Tabs",
    description: (<>Renamed the <code className='ws-code'>hasBorderBottom</code> property to <code className='ws-code'>hasNoBorderBottom</code>.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8517",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Tabs hasBorderBottom />
<Tabs hasBorderBottom={true} />
<Tabs hasBorderBottom={false} />
<Tabs hasBorderBottom={someVar} />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Tabs  />
<Tabs  />
<Tabs hasNoBorderBottom />
<Tabs hasNoBorderBottom={!someVar} />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Tabs",
    description: (<>Removed the <code className='ws-code'>hasSecondaryBorderBottom</code>  property.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8517",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Tabs hasSecondaryBorderBottom />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Tabs  />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Tabs",
    description: (<>Updated the type of <code className='ws-code'>children</code> that can be passed. Codemods will raise a warning when this component is imported, even if valid children are passed, but will not make any code changes.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8217",
    repo: "React",
    fixedWithCodeMod: false
  }, {
    component: "Table",
    description: (<>Renamed the <code className='ws-code'>disable</code> property to <code className='ws-code'>isDisabled</code> for the <code className='ws-code'>Td</code> component.</>),
    // TODO: Update to include both pull requests for this codemod
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8861",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>This change affects the <code className='ws-code'>TdSelectType</code> interface used within the <code className='ws-code'>select</code>  property, and the <code className='ws-code'>TdActionsType</code> interface used within the <code className='ws-code'>actions</code>  property.</Text>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`let myObj = { disable: true };
myObj["disable"] = false;
myObj.disable = true;
myObj = { disable: false };

<Td select={myObj} actions={{ disable: false }}></Td>;

const disable = true;
const obj = { disable };
<>
  <Td select={obj} actions={{ "disable": true }}></Td>
  <Td select={{disable}}></Td>
</>;`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`let myObj = { isDisabled: true };
myObj["isDisabled"] = false;
myObj.isDisabled = true;
myObj = { isDisabled: false };

<Td select={myObj} actions={{ isDisabled: false }}></Td>;

const isDisabled = true;
const obj = { isDisabled };
<>
  <Td select={obj} actions={{ "isDisabled": true }}></Td>
  <Td select={{isDisabled}}></Td>
</>;`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Text area",
    description: (<>Updated the <code className='ws-code'>onChange</code> callback property so that the <code className='ws-code'>event</code> parameter is the first parameter.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/9061",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<TextArea onChange={(id) => handler(id)} />
<TextArea onChange={(id, event) => handler(id, event)} />
const handler1 = (id, event) => {};
<TextArea onChange={handler1} />
function handler2(id, event) {};
<TextArea onChange={handler2} />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<TextArea onChange={(_event, id) => handler(id)} />
<TextArea onChange={(event, id) => handler(id, event)} />
const handler1 = (_event, id) => {};
<TextArea onChange={handler1} />
function handler2(_event, id) {};
<TextArea onChange={handler2} />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Text input",
    description: (<>Updated the <code className='ws-code'>onChange</code> callback property so that the <code className='ws-code'>event</code> parameter is the first parameter.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/9061",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<TextInput onChange={(id) => handler(id)} />
<TextInput onChange={(id, event) => handler(id, event)} />
const handler1 = (id, event) => {};
<TextInput onChange={handler1} />
function handler2(id, event) {};
<TextInput onChange={handler2} />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<TextInput onChange={(_event, id) => handler(id)} />
<TextInput onChange={(event, id) => handler(id, event)} />
const handler1 = (_event, id) => {};
<TextInput onChange={handler1} />
function handler2(_event, id) {};
<TextInput onChange={handler2} />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Dropdown",
    description: (<>Removed the deprecated <code className='ws-code'>isPrimary</code> property from the deprecated <code className='ws-code'>Toggle</code> component. Codemods will replace the property with a "primary" value on the <code className='ws-code'>toggleVariant</code>  property.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8179",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Toggle isPrimary />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Toggle toggleVariant="primary" />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Toggle group",
    description: (<>Updated the <code className='ws-code'>onChange</code> callback property on the <code className='ws-code'>ToggleGroupItem</code> component so that the <code className='ws-code'>event</code> parameter is the first parameter.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/9067",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<ToggleGroupItem onChange={(id) => handler(id)} />
<ToggleGroupItem onChange={(id, event) => handler(id, event)} />
const handler1 = (id, event) => {};
<ToggleGroupItem onChange={handler1} />
function handler2(id, event) {};
<ToggleGroupItem onChange={handler2} />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<ToggleGroupItem onChange={(_event, id) => handler(id)} />
<ToggleGroupItem onChange={(event, id) => handler(id, event)} />
const handler1 = (_event, id) => {};
<ToggleGroupItem onChange={handler1} />
function handler2(_event, id) {};
<ToggleGroupItem onChange={handler2} />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Toolbar",
    description: (<>Removed the deprecated <code className='ws-code'>visiblity</code>  property, which should be replaced with the correctly spelled <code className='ws-code'>visibility</code>  property.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8212",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>This change affects the <code className='ws-code'>ToolbarContent</code>, <code className='ws-code'>ToolbarGroup</code>, <code className='ws-code'>ToolbarItem</code>, and <code className='ws-code'>ToolbarToggleGroup</code> components.</Text>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<ToolbarContent visiblity={{ default: "hidden" }} />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<ToolbarContent visibility={{ default: "hidden" }} />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Toolbar",
    description: (<>Removed the <code className='ws-code'>alignment</code> property from the <code className='ws-code'>ToolbarContent</code>, <code className='ws-code'>ToolbarGroup</code>, and <code className='ws-code'>ToolbarItem</code> components.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8563",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>Codemods will replace the property with <code className='ws-code'>align</code> for the <code className='ws-code'>ToolbarItem</code> and <code className='ws-code'>ToolbarGroup</code> components.</Text>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<ToolbarContent alignment={{ default: 'alignLeft' }} />
<ToolbarGroup alignment={{ default: 'alignLeft' }} />
<ToolbarItem alignment={{ default: 'alignLeft' }} />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<ToolbarContent  />
<ToolbarGroup align={{ default: 'alignLeft' }} />
<ToolbarItem align={{ default: 'alignLeft' }} />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Tooltip",
    description: (<>Updated the internal markup so that a wrapping div is applied when the <code className='ws-code'>triggerRef</code> property is not passed, which may cause issues and/or require snapshots to be updated.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8733",
    repo: "React",
    fixedWithCodeMod: false
  }, {
    component: "Tooltip",
    description: (<>Removed the <code className='ws-code'>boundary</code>, <code className='ws-code'>tippyProps</code>, and <code className='ws-code'>isAppLauncher</code> properties.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8231",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Tooltip boundary={} tippyProps={} isAppLauncher />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Tooltip     />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Alert",
    description: (<>Renamed the <code className='ws-code'>default</code> value for the <code className='ws-code'>variant</code> property to <code className='ws-code'>custom</code>. This change also affects the <code className='ws-code'>AlertVariant</code> enum and <code className='ws-code'>AlertIcon</code> component.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8924",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`const alertVariantOption = AlertVariant.default;
<Alert variant={AlertVariant["default"]}></Alert>
<Alert variant="default"></Alert>
<AlertIcon variant={"default"}></AlertIcon>`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`const alertVariantOption = AlertVariant.custom;
<Alert variant={AlertVariant["custom"]}></Alert>
<Alert variant="custom"></Alert>
<AlertIcon variant={"custom"}></AlertIcon>`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Notification drawer",
    description: (<>Renamed the <code className='ws-code'>default</code> value for the <code className='ws-code'>variant</code> property to <code className='ws-code'>custom</code> for the <code className='ws-code'>NotificationDrawerListItemHeader</code> component.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8924",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<NotificationDrawerListItemHeader variant="default"></NotificationDrawerListItemHeader>`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<NotificationDrawerListItemHeader variant="custom"></NotificationDrawerListItemHeader>`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Modal",
    description: (<>Renamed the <code className='ws-code'>default</code> value for the <code className='ws-code'>titleIconVariant</code> property to <code className='ws-code'>custom</code>. This change also affects the <code className='ws-code'>ModalContent</code> component.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8924",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`const variantOption = "default";
<Modal titleIconVariant={variantOption}></Modal>
<ModalContent titleIconVariant="default"></ModalContent>`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`const variantOption = "custom";
<Modal titleIconVariant={variantOption}></Modal>
<ModalContent titleIconVariant="custom"></ModalContent>`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Popover",
    description: (<>Renamed the <code className='ws-code'>default</code> value for the <code className='ws-code'>alertSeverityVariant</code> property to <code className='ws-code'>custom</code>.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8924",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Popover alertSeverityVariant="default"></Popover>`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Popover alertSeverityVariant="custom"></Popover>`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Popover",
    description: (<>Renamed the <code className='ws-code'>reference</code> property to <code className='ws-code'>triggerRef</code>.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8733",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Popover reference={componentRef} />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Popover triggerRef={componentRef} />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Tooltip",
    description: (<>Renamed the <code className='ws-code'>reference</code> property to <code className='ws-code'>triggerRef</code>.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8733",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Tooltip reference={componentRef} />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Tooltip triggerRef={componentRef} />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Wizard",
    description: (<>Deprecated the <code  className='ws-code'>Wizard</code> components and replaced them with a newer implementation.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8821",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>Codemods will update import and export paths to our deprecated directory, but we recommend replacing it with our new <code className='ws-code'>Wizard</code> implementation.</Text>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Wizard, Button } from '@patternfly/react-core';`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Button } from '@patternfly/react-core';
import { Wizard } from '@patternfly/react-core/deprecated';`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "React",
    fixedWithCodeMod: true
  }, {
    component: "Wizard",
    description: (<>Updated the order of the "next" and "back" buttons so that the "next" button is rendered after the "back" button. This change affects the deprecated implementation and the <code  className='ws-code'>WizardFooter</code> component in the new implementation.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8409",
    repo: "React",
    fixedWithCodeMod: false
  }, {
    component: "Label",
    description: "Used gap instead of item margins.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5221",
    details: "Updated the label component to use CSS `gap` to space its children instead of using `margin` (same as chip).",
    repo: "HTML/CSS",
    fixedWithCodeMod: false
  },
  {
    component: "Label",
    description: " Add wrappers for content and actions to manage styling embedded components",
    pullRequestURL: " https://github.com/patternfly/patternfly/pull/5360",
    details: "Added wrapping elements for both the label content and actions to make the layout more flexible. (same as chip).",
    repo: "HTML/CSS",
    fixedWithCodeMod: false
  },
  {
    component: "Label",
    description: " Allow text to truncate.",
    pullRequestURL: " https://github.com/patternfly/patternfly/pull/5364",
    details: "Updated the HTML structure so that text truncation is supported by default.",
    repo: "HTML/CSS",
    fixedWithCodeMod: false
  },
  {
    component: "Layouts",
    description: "Updated level, split, and stack to use gap.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5585",
    details: "Updated the “gutter” variation of these layouts to use CSS `gap` to create gutters between children instead of `margin`.",
    repo: "HTML/CSS",
    fixedWithCodeMod: false
  },
  {
    component: "Modal",
    description: "Added wrapper to close button",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5371 ",
    details:"Added a structural HTML element to the modal component that is used to wrap the close button. This improved the flexibility of the close button and is more structurally consistent with similar components.",
    repo: "HTML/CSS",
    fixedWithCodeMod: false
  },
  {
    component: "Navigation",
    description: "Added top and bottom padding to navigation list",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5507",
    details: "Added top and bottom padding to navigation lists to replace the role of padding vertical navigation in the page sidebar that was removed in https://github.com/patternfly/patternfly/pull/5093.",
    repo: "HTML/CSS",
    fixedWithCodeMod: false
  },
  {
    component: "Navigation",
    description: "Updated spacing for grouped navigation",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5607",
    details: "Removed the `.pf-m-no-title` class that only existed in core and is no longer necessary.",
    repo: "HTML/CSS",
    fixedWithCodeMod: false
  },
  {
    component: "Notification drawer",
    description: "Set body to fill available vertical space",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5214",
    details: "Set the drawer body to fill the vertical space to fix a visual bug.",
    repo: "HTML/CSS",
    fixedWithCodeMod: false
  },
  {
    component: "Options menu",
    description: "Removed line height CSS variable",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5422 ",
    details: "Removed unnecessary line-height styles from the options menu toggle.",
    repo: "HTML/CSS",
    fixedWithCodeMod: false
  },
  {
    component: "Page",
    description: "Set page height to 100vh",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5093",
    details: "Updated the page component sidebar to support multiple body elements, instead of a single body element used to position vertical navigation.",
    repo: "HTML/CSS",
    fixedWithCodeMod: false
  },
  {
    component: "Page",
    description: "Default page to full viewport height",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5517",
    details: "Updated the page component height to be 100% of the viewport height using `100vh` and `100dvh` units. Previously the page height was set to 100%, requiring the need for all ancestors of the page component element to also have an implicit or explicit CSS height set. This update removed the need for any ancestors of the page component to have a height set.",
    repo: "HTML/CSS",
    fixedWithCodeMod: false
  },
  {
    component: "Page",
    description: "Moved variables to root",
    pullRequestURL: " https://github.com/patternfly/patternfly/pull/5637",
    details: "This update scopes all of the page component CSS variables to the `:root` scope instead of the page component class selector. This allows any top-level CSS variable for the page component to be accessible from anywhere in the document, instead of only being accessible within the page component class selector.",
    repo: "HTML/CSS",
    fixedWithCodeMod: false
  },
  {
    component: "Pagination",
    description: "Updated styles to target menu toggle",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5619 ",
    details: "Updated all styles within the pagination component that were targeting the deprecated options menu toggle to target the menu toggle component instead.",
    repo: "HTML/CSS",
    fixedWithCodeMod: false
  },
  {
    component: "Popover",
    description: "Added header, title, and close elements",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5370 ",
    details: "Refactored the popover component HTML to be more flexible and consistent with similarly structured components. Added a structural HTML element to the container that is used to wrap the close button. Made the header element required. Updated the popover title to be more flexible",
    repo: "HTML/CSS",
    fixedWithCodeMod: false
  },
  {
    component: "Progress",
    description: "Use gap instead of margin for status box",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5387",
    details: "Updates the progress status element to use CSS `gap` to space its children instead of `margin`, which impacts the space between the status icon text specifically.",
    repo: "HTML/CSS",
    fixedWithCodeMod: false
  },
  {
    component: "Radio",
    description: "Set description/body to fill available width",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5233",
    details: "Previously the description and body elements would only be as wide as their content, and now they occupy the available width.",
    repo: "HTML/CSS",
    fixedWithCodeMod: false
  },
  {
    component: "Search input",
    description: "Removed component",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5506",
    details: "The search input component was removed in favor of the text input group component.",
    repo: "HTML/CSS",
    fixedWithCodeMod: false
  },
  {
    component: "Quick starts",
    description: "Made compatible with V5",
    pullRequestURL: ["https://github.com/patternfly/patternfly-quickstarts/pull/250", "https://github.com/patternfly/patternfly-quickstarts/pull/252"],
    repo: "Quickstarts",
    fixedWithCodeMod: false
  },
  {
    component: "Quick starts",
    description: "React 18, webpack 5, node 18 support, updated eslint & some other dependencies",
    pullRequestURL: "https://github.com/patternfly/patternfly-quickstarts/pull/247",
    repo: "Quickstarts",
    fixedWithCodeMod: false
  },
  {
    component: "Topology",
    description: "Made compatible with V5",
    pullRequestURL: ["https://github.com/patternfly/react-topology/pull/72","https://github.com/patternfly/react-topology/pull/68"],
    repo: "react-topology",
    fixedWithCodeMod: false
  },
  {
    component: "Topology",
    description: "Set strictFunctionTypes",
    pullRequestURL: "https://github.com/patternfly/react-topology/pull/53",
    details: "Topology code and demo code now enforce strict typing to allow for use in projects that have this requirement. You may need to update your custom components (nodes, edges) to take the GraphElement rather than the specific Node or Edge types.",
    repo: "react-topology",
    fixedWithCodeMod: false
  },
  {
    component: "Topology",
    description: "Added lead icon to task nodes",
    pullRequestURL: "https://github.com/patternfly/react-topology/pull/67",
    repo: "react-topology",
    fixedWithCodeMod: false
  },
  {
    component: "Topology",
    description: "Fixed integralShapePath for almost parallel nodes",
    pullRequestURL: "https://github.com/patternfly/react-topology/pull/47",
    repo: "react-topology",
    fixedWithCodeMod: false
  },
  {
    component: "Topology",
    description: "Updated version of D3 to version 7",
    pullRequestURL: "https://github.com/patternfly/react-topology/pull/59",
    details: "This only requires a change on your part if your application uses D3 directly. If you have your own layout implementation that handles D3 events, you will need to update based on D3 updated API params.",
    repo: "react-topology",
    fixedWithCodeMod: false
  },
  {
    component: "Topology",
    description: "Upgraded to latest mobx",
    pullRequestURL: "https://github.com/patternfly/react-topology/pull/61",
    repo: "react-topology",
    fixedWithCodeMod: false
  },
  {
    component: "Topology",
    description: "Added WithContextMenu support for Promise",
    pullRequestURL: "https://github.com/patternfly/react-topology/pull/58",
    repo: "react-topology",
    fixedWithCodeMod: false
  },
  {
    component: "Catalog view",
    description: "Made compatible with V5",
    pullRequestURL: ["https://github.com/patternfly/react-catalog-view/pull/44", "https://github.com/patternfly/react-catalog-view/pull/45"],
    details: <>If you are using TypeScript and the <code className='ws-code'>CatalogTile</code> component, you may need to update the type of the event arg in their <code className='ws-code'>onClick</code> handler to <code className='ws-code'>{"React.FormEvent<HTMLInputElement> | React.MouseEvent<Element, MouseEvent>"}</code>.</>,
    repo: "react-catalog-view",
    fixedWithCodeMod: false
  },
  {
    component: "Log viewer",
    description: "Promoted log viewer out of beta",
    pullRequestURL: "https://github.com/patternfly/react-log-viewer/pull/27",
    repo: "react-log-viewer",
    fixedWithCodeMod: false
  },
  {
    component: "Log viewer",
    description: "Made compatible with V5",
    pullRequestURL: "https://github.com/patternfly/react-log-viewer/pull/31",
    repo: "react-log-viewer",
    fixedWithCodeMod: false
  },
  {
    component: "Console",
    description: "Made compatible with V5",
    pullRequestURL: "https://github.com/patternfly/react-console/pull/38",
    repo: "react-console",
    fixedWithCodeMod: false
  },
  {
    component: "User feedback",
    description: "Made compatible with V5",
    pullRequestURL: "https://github.com/patternfly/react-user-feedback/pull/60",
    repo: "react-console",
    fixedWithCodeMod: false
  },
  {
    component: "User feedback",
    description: "Added support for promises",
    pullRequestURL: "https://github.com/patternfly/react-user-feedback/pull/51",
    repo: "react-user-feedback",
    fixedWithCodeMod: false
  },
  {
    component: "Form control",
    description: "Changed all the divs in a form control to be spans to allow a form control to be inside phrasing content.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5703",
    repo: "HTML/CSS",
    fixedWithCodeMod: false
  },
  {
    component: "Select",
    description: "Fixed typeahead form control border styles.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5698",
    repo: "HTML/CSS",
    fixedWithCodeMod: false
  },
  {
    component: "Charts",
    description: (<>Fixed dark theme chart var prefix from <code className='ws-code'>pf-v5-c-chart</code> to <code className='ws-code'>pf-v5-chart</code>.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5673",
    repo: "HTML/CSS",
    fixedWithCodeMod: false
  },
  {
    component: "Fonts",
    description: "Fixed incorrect font mapping from bold to italic for RHD font.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5678",
    repo: "HTML/CSS",
    fixedWithCodeMod: false
  },
  {
    component: "Text input group",
    description: "Addressed the cause of the search input icon and placeholder text being the wrong color when in a masthead or dark block.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5666",
    repo: "HTML/CSS",
    fixedWithCodeMod: false
  },
  {
    component: "Card",
    description: "Fixed how the newly introduced selectable cards are fixed in light theme.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5668",
    repo: "HTML/CSS",
    fixedWithCodeMod: false
  },
  {
    component: "Button",
    description: <>Re-introduced a CSS var override in the button's <code className='ws-code'>pf-t-dark</code> placeholder that sets the primary button background.</>,
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5652",
    repo: "HTML/CSS",
    fixedWithCodeMod: false
  },
  {
    component: "@All",
    description: "Prefixed and relocated variable font opt-in.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5617",
    repo: "HTML/CSS",
    fixedWithCodeMod: false
  },
  {
    component: "Menu toggle",
    description: "Removed the background from full height menu toggles in dark theme.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5643",
    repo: "HTML/CSS",
    fixedWithCodeMod: false
  },
  {
    component: "Calendar month",
    description: "Updated background color of calendar month date ranges.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5624",
    repo: "HTML/CSS",
    fixedWithCodeMod: false
  },
  {
    component: "OUIA",
    description: (<>Updated the OUIA <code className='ws-code'>data-ouia-component-type</code> prefix from <code className='ws-code'>PF4</code> to <code className='ws-code'>PF5</code>.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/9250",
    repo: "React",
    fixedWithCodeMod: false
  },
  {
    component: "Popover",
    description: (<>Reverted default value of popover <code className='ws-code'>appendTo</code> prop so it is now <code className='ws-code'>() => document.body</code>.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/9252",
    repo: "React",
    fixedWithCodeMod: false
  },
  {
    component: "Toolbar",
    description: (<>Updated <code className='ws-code'>alignItems</code> and <code className='ws-code'>alignSelf</code> on <code className='ws-code'>ToolbarContent</code>, <code className='ws-code'>ToolbarGroup</code> and <code className='ws-code'>ToolbarItem</code> to have values <code className='ws-code'>start</code>, <code className='ws-code'>center</code>, and <code className='ws-code'>baseline</code>.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/9325",
    repo: "React",
    fixedWithCodeMod: false
  },
  {
    component: "Text input",
    description: (<>Changed divs in form control elements to spans.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/9334",
    repo: "React",
    fixedWithCodeMod: false
  },
  {
    component: "Text area",
    description: (<>Changed divs in form control elements to spans.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/9334",
    repo: "React",
    fixedWithCodeMod: false
  },
  {
    component: "Form select",
    description: (<>Changed divs in form control elements to spans.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/9334",
    repo: "React",
    fixedWithCodeMod: false
  },
  {
    component: "Charts",
    description: (<>Exported <code className='ws-code'>getThemeColors</code>.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/9338",
    repo: "React",
    fixedWithCodeMod: false
  },
  {
    component: "Select",
    description: (<>Used text input component in the typeahead toggle for the deprecated select.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/9317",
    repo: "React",
    fixedWithCodeMod: false
  },
  {
    component: "Select",
    description: (<>Used text input component in the typeahead toggle for the deprecated select.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/9317",
    repo: "React",
    fixedWithCodeMod: false
  },
  {
    component: "@All",
    description: (<>Created component level package.json files to enable federated modules.</>),
    pullRequestURL: ["https://github.com/patternfly/patternfly-react/pull/9287","https://github.com/patternfly/patternfly-react/pull/9260", "https://github.com/patternfly/patternfly-react/pull/9272"],
    repo: "React",
    fixedWithCodeMod: false
  },
  {
    component: "Charts",
    description: (<>Updated Victory packages to the latest version (36.6.11).</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/9276",
    repo: "React",
    fixedWithCodeMod: false
  },
  {
    component: "Icons",
    description: (<>Added fallback width and height attributes to icons from @patternfly/react-icons.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/9257",
    repo: "React",
    fixedWithCodeMod: false
  },
  {
    component: "Brand",
    description: (<>Allowed heights/widths to be set together and be used when no children are passed</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/9342",
    repo: "React",
    fixedWithCodeMod: false
  }
];
