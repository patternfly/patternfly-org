import React from "react";
import { CodeBlock, CodeBlockCode, TextContent, Text, TextList, TextListItem, TextVariants } from '@patternfly/react-core';

export const releaseNotes = [
  {
    component: "Popover",
    description: (<>Updated the default value of the <code className='ws-code'>appendTo</code> prop, which may cause markup changes that require updating selectors.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8621",
    repo: "react",
    fixedWithCodeMod: false
  }, {
    component: "Popover",
    description: (<>Removed the <code className='ws-code'>boundary</code> and <code className='ws-code'>tippyProps</code> props and updated removed parameters from various callback props.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8201",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>The <code className='ws-code'>shouldClose</code> prop's first parameter was removed, and all parameters were removed from the <code className='ws-code'>onHidden</code>, <code className='ws-code'>onHide</code>, <code className='ws-code'>onMount</code>, <code className='ws-code'>onShow</code>, and <code className='ws-code'>onShown</code> props.</Text>
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
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Popover",
    description: (<>Updated the <code className='ws-code'>shouldClose</code> and <code className='ws-code'>shouldOpen</code> callback props so that the <code className='ws-code'>event</code> parameter is the first parameter.</>),
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
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Popper",
    description: (<>Removed the <code className='ws-code'>popperMatchesTriggerWidth</code> prop. The <code className='ws-code'>width</code>, <code className='ws-code'>minWidth</code>, and <code className='ws-code'>maxWidth</code> props should be used instead to modify the Popper width.</>),
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
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Radio",
    description: (<>Updated the <code className='ws-code'>onChange</code> callback prop so that the <code className='ws-code'>event</code> parameter is the first parameter.</>),
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
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "File upload (simple)",
    description: (<>Updated the type for <code className='ws-code'>onFileInputChange</code> and <code className='ws-code'>dropzoneProps</code> props as part of an upgrade of <code className='ws-code'>react-dropzone</code> from version 9 to version 14.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/7926",
    repo: "react",
    fixedWithCodeMod: false
  }, {
    component: "File upload (multiple)",
    description: (<>Updated the type for the <code className='ws-code'>dropzoneProps</code> prop as part of an upgrade of <code className='ws-code'>react-dropzone</code> from version 9 to version 14.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/7926",
    repo: "react",
    fixedWithCodeMod: false
  }, {
    component: "Code editor",
    description: (<>Upgraded the <code className='ws-code'>react-dropzone</code> dependency used internally to the component from version 9 to version 14.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/7926",
    repo: "react",
    fixedWithCodeMod: false
  }, {
    component: "@patternfly/react-icons",
    description: (<>Removed the <code className='ws-code'>size</code>, <code className='ws-code'>color</code>, and <code className='ws-code'>noVerticalAlign</code> props from icons imported from <code className='ws-code'>@patternfly/react-icons</code>.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/5275",
    repo: "react",
    fixedWithCodeMod: false
  }, {
    component: "Application launcher",
    description: (<>Removed the <code className='ws-code'>removeFindDomNode</code> prop as it is now the default behavior.</>),
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
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Clipboard copy",
    description: (<>Removed the <code className='ws-code'>removeFindDomNode</code> prop as it is now the default behavior.</>),
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
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Truncate",
    description: (<>Removed the <code className='ws-code'>removeFindDomNode</code> prop as it is now the default behavior.</>),
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
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Context selector",
    description: (<>Removed the <code className='ws-code'>removeFindDomNode</code> prop as it is now the default behavior.</>),
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
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Dropdown",
    description: (<>Removed the <code className='ws-code'>removeFindDomNode</code> prop from the deprecated implementation as it is now the default behavior.</>),
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
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Navigation",
    description: (<>Removed the <code className='ws-code'>removeFindDomNode</code> prop from the <code className='ws-code'>NavItem</code> component as it is now the default behavior.</>),
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
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Options menu",
    description: (<>Removed the <code className='ws-code'>removeFindDomNode</code> prop as it is now the default behavior.</>),
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
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Popover",
    description: (<>Removed the <code className='ws-code'>removeFindDomNode</code> prop as it is now the default behavior.</>),
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
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Search input",
    description: (<>Removed the <code className='ws-code'>removeFindDomNode</code> prop as it is now the default behavior.</>),
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
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Select",
    description: (<>Removed the <code className='ws-code'>removeFindDomNode</code> prop from the deprecated implementation as it is now the default behavior.</>),
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
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Tabs",
    description: (<>Removed the <code className='ws-code'>removeFindDomNode</code> prop from the <code className='ws-code'>OverflowTab</code> component as it is now the default behavior.</>),
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
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Time picker",
    description: (<>Removed the <code className='ws-code'>removeFindDomNode</code> prop as it is now the default behavior.</>),
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
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Tooltip",
    description: (<>Removed the <code className='ws-code'>removeFindDomNode</code> prop as it is now the default behavior.</>),
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
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Application launcher",
    description: (<>Removed the <code className='ws-code'>ToggleMenuBaseProps</code> interface.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8235",
    repo: "react",
    fixedWithCodeMod: false
  }, {
    component: "Context selector",
    description: (<>Removed the <code className='ws-code'>ToggleMenuBaseProps</code> interface.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8235",
    repo: "react",
    fixedWithCodeMod: false
  }, {
    component: "Dropdown",
    description: (<>Removed the <code className='ws-code'>ToggleMenuBaseProps</code> interface from the deprecated implementation.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8235",
    repo: "react",
    fixedWithCodeMod: false
  }, {
    component: "Options menu",
    description: (<>Removed the <code className='ws-code'>ToggleMenuBaseProps</code> interface.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8235",
    repo: "react",
    fixedWithCodeMod: false
  }, {
    component: "Select",
    description: (<>Removed the <code className='ws-code'>ToggleMenuBaseProps</code> interface from the deprecated implementation.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8235",
    repo: "react",
    fixedWithCodeMod: false
  }, {
    component: "Popper",
    description: (<>Removed the <code className='ws-code'>ToggleMenuBaseProps</code> interface.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8235",
    repo: "react",
    fixedWithCodeMod: false
  }, {
    component: "@patternfly/react-core",
    description: (<>Removed the default value of the <code className='ws-code'>getResizeObserver</code> function's third parameter, <code className='ws-code'>useRequestAnimationFrame</code>.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8324",
    repo: "react",
    fixedWithCodeMod: false
  }, {
    component: "Select",
    description: (<>Updated the internal markup of the deprecated typeahead and multi-typeahead implementations. Selectors may need to be updated.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/9172",
    repo: "react",
    fixedWithCodeMod: false
  }, {
    component: "Select",
    description: (<>Deprecated the <code class='ws-code'>Select</code> components and replaced them with a newer implementation.</>),
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
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Select",
    description: (<>Renamed the <code class='ws-code'>itemId</code> prop for the new implementation of <code class='ws-code'>SelectOption</code> to <code class='ws-code'>value</code>.</>),
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
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Dropdown",
    description: (<>Renamed the <code class='ws-code'>itemId</code> prop for the new implementation of <code class='ws-code'>DropdownItem</code> to <code class='ws-code'>value</code>.</>),
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
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Time picker",
    description: (<>Updated the internal markup to render the <code className='ws-code'>invalidFormatErrorMessage</code> and <code className='ws-code'>invalidMinMaxErrorMessage</code> props within <code className='ws-code'>HelperText</code> components.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8833",
    repo: "react",
    fixedWithCodeMod: false
  }, {
    component: "Simple list",
    description: (<>Removed the <code class='ws-code'>isCurrent</code> prop, which should be replaced with the <code class='ws-code'>isActive</code> prop.</>),
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
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Slider",
    description: (<>Updated the <code className='ws-code'>onChange</code> callback prop so that the <code className='ws-code'>event</code> parameter is the first parameter.</>),
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
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Spinner",
    description: (<>Removed the <code className='ws-code'>isSVG</code> prop as the component now uses an SVG exclusively.</>),
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
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Switch",
    description: (<>Updated the <code className='ws-code'>onChange</code> callback prop so that the <code className='ws-code'>event</code> parameter is the first parameter.</>),
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
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Table",
    description: (<>Renamed the <code className='ws-code'>isHoverable</code> prop to <code className='ws-code'>isClickable</code>. Codemods will provide a fix when the prop is passed to the <code className='ws-code'>Tr</code> component of our composable implementation, but will otherwise only raise an error for our deprecated implementation.</>),
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
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Table",
    description: (<>Renamed the <code className='ws-code'>TableComposable</code> component to just <code className='ws-code'>Table</code>.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8892",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>The fix provided by codemods will insert a <code className='ws-code'>/* data-codemods */</code> comment after the import specifier. This should only be removed once codemods is no longer being ran as it prevents other fixes from overwriting this update.</Text>
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
            {`import { Table /* data-codemods */ } from '@patternfly/react-table';

<Table />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Table",
    description: (<>Deprecated the <code class='ws-code'>Table</code> components, which should be replaced with the composable implementation.</>),
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
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Table",
    description: (<>Updated the <code class='ws-code'>ActionsColumn</code> to use the new implementation of <code class='ws-code'>Dropdown</code>. This applies to both the deprecated and composable implementations.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8629",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>The following changes were also made:</Text>
        <TextList>
          <TextListItem>The toggle passed to the <code class='ws-code'>ActionsColumn</code> must be a <code class='ws-code'>MenuToggle</code> component</TextListItem>
          <TextListItem>Removed the <code class='ws-code'>dropdownPosition</code>, <code class='ws-code'>dropdownDirection</code>, and <code class='ws-code'>menuAppendTo</code> props, which should be replaced with the <code class='ws-code'>popperProps</code> prop</TextListItem>
        </TextList>
      </TextContent>
    ),
    repo: "react",
    fixedWithCodeMod: false
  }, {
    component: "Table",
    description: (<>Updated the type of the <code class='ws-code'>collapseAllAriaLabel</code> prop on <code class='ws-code'>ThExpandType</code> to a string instead of an empty string <code class='ws-code'>''</code>. Workarounds casting this property to an empty string are no longer needed.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8634",
    repo: "react",
    fixedWithCodeMod: false
  }, {
    component: "Table",
    description: (<>Removed the deprecated <code class='ws-code'>hasSelectableRowCaption</code> prop from our composable implementation.</>),
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
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Tabs",
    description: (<>Updated the <code className='ws-code'>onToggle</code> callback prop so that the <code className='ws-code'>event</code> parameter is the first parameter.</>),
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
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Tabs",
    description: (<>Renamed the <code className='ws-code'>hasBorderBottom</code> prop to <code className='ws-code'>hasNoBorderBottom</code>.</>),
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
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Tabs",
    description: (<>Removed the <code className='ws-code'>hasSecondaryBorderBottom</code> prop.</>),
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
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Tabs",
    description: (<>Updated the type of <code className='ws-code'>children</code> that can be passed. Codemods will raise a warning when this component is imported, even if valid children are passed, but will not make any code changes.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8217",
    repo: "react",
    fixedWithCodeMod: false
  }, {
    component: "Table",
    description: (<>Renamed the <code className='ws-code'>disable</code> prop to <code className='ws-code'>isDisabled</code> for the <code className='ws-code'>Td</code> component.</>),
    // TODO: Update to include both PRs for this codemod
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8861",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>This change affects the <code className='ws-code'>TdSelectType</code> interface used within the <code className='ws-code'>select</code> prop, and the <code className='ws-code'>TdActionsType</code> interface used within the <code className='ws-code'>actions</code> prop.</Text>
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
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Text area",
    description: (<>Updated the <code className='ws-code'>onChange</code> callback prop so that the <code className='ws-code'>event</code> parameter is the first parameter.</>),
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
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Text input",
    description: (<>Updated the <code className='ws-code'>onChange</code> callback prop so that the <code className='ws-code'>event</code> parameter is the first parameter.</>),
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
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Dropdown",
    description: (<>Removed the deprecated <code className='ws-code'>isPrimary</code> prop from the deprecated <code className='ws-code'>Toggle</code> component. Codemods will replace the prop with a "primary" value on the <code className='ws-code'>toggleVariant</code> prop.</>),
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
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Toggle group",
    description: (<>Updated the <code className='ws-code'>onChange</code> callback prop on the <code className='ws-code'>ToggleGroupItem</code> component so that the <code className='ws-code'>event</code> parameter is the first parameter.</>),
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
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Toolbar",
    description: (<>Removed the deprecated <code className='ws-code'>visiblity</code> prop, which should be replaced with the correctly spelled <code className='ws-code'>visibility</code> prop.</>),
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
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Toolbar",
    description: (<>Removed the <code className='ws-code'>alignment</code> prop from the <code className='ws-code'>ToolbarContent</code>, <code className='ws-code'>ToolbarGroup</code>, and <code className='ws-code'>ToolbarItem</code> components.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8563",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>Codemods will replace the prop with <code className='ws-code'>align</code> for the <code className='ws-code'>ToolbarItem</code> and <code className='ws-code'>ToolbarGroup</code> components.</Text>
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
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Tooltip",
    description: (<>Updated the internal markup so that a wrapping div is applied when the <code className='ws-code'>triggerRef</code> prop is not passed, which may cause issues and/or require snapshots to be updated.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8733",
    repo: "react",
    fixedWithCodeMod: false
  }, {
    component: "Tooltip",
    description: (<>Removed the <code className='ws-code'>boundary</code>, <code className='ws-code'>tippyProps</code>, and <code className='ws-code'>isAppLauncher</code> props.</>),
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
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Alert",
    description: (<>Renamed the <code className='ws-code'>default</code> value for the <code className='ws-code'>variant</code> prop to <code className='ws-code'>custom</code>. This change also affects the <code className='ws-code'>AlertVariant</code> enum and <code className='ws-code'>AlertIcon</code> component.</>),
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
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Notification drawer",
    description: (<>Renamed the <code className='ws-code'>default</code> value for the <code className='ws-code'>variant</code> prop to <code className='ws-code'>custom</code> for the <code className='ws-code'>NotificationDrawerListItemHeader</code> component.</>),
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
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Modal",
    description: (<>Renamed the <code className='ws-code'>default</code> value for the <code className='ws-code'>titleIconVariant</code> prop to <code className='ws-code'>custom</code>. This change also affects the <code className='ws-code'>ModalContent</code> component.</>),
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
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Popover",
    description: (<>Renamed the <code className='ws-code'>default</code> value for the <code className='ws-code'>alertSeverityVariant</code> prop to <code className='ws-code'>custom</code>.</>),
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
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Popover",
    description: (<>Renamed the <code className='ws-code'>reference</code> prop to <code className='ws-code'>triggerRef</code>.</>),
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
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Tooltip",
    description: (<>Renamed the <code className='ws-code'>reference</code> prop to <code className='ws-code'>triggerRef</code>.</>),
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
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Wizard",
    description: (<>Deprecated the <code class='ws-code'>Wizard</code> components and replaced them with a newer implementation.</>),
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
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Wizard",
    description: (<>Updated the order of the "next" and "back" buttons so that the "next" button is rendered after the "back" button. This change affects the deprecated implementation and the <code class='ws-code'>WizardFooter</code> component in the new implementation.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8409",
    repo: "react",
    fixedWithCodeMod: false
  },
];
