export const releaseNotes = [
    {
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
        repo: "react",
        fixedWithCodeMod: true
    },
    {
        component: "DrawerPanelContent",
        description: (<>The <code className='ws-code'>onResize</code> prop now takes the <code className='ws-code'>event</code> as its first parameter. Handlers may require an update.</>),
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
        repo: "react",
        fixedWithCodeMod: true
    },
    {
        component: "Dropdown",
        description: (<>Deprecated the current implementation of Dropdown. In order to continue using this deprecated implementation, the import path must be updated to our deprecated package and specifiers must be aliased. However, we suggest updating to our newer implementation of Dropdown.
    
    The following imports will be affected by this deprecation:
    
    <ul>
    <li>BadgeToggle</li>
    <li>Dropdown</li>
    <li>DropdownPosition</li>
    <li>DropdownDirection</li>
    <li>DropdownContext</li>
    <li>DropdownArrowContext</li>
    <li>DropdownGroup</li>
    <li>DropdownItem</li>
    <li>DropdownMenu</li>
    <li>DropdownSeparator</li>
    <li>DropdownToggle</li>
    <li>DropdownToggleAction</li>
    <li>DropdownToggleCheckbox</li>
    <li>DropdownWithContext</li>
    <li>KebabToggle </li>
    </ul></>),
        pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8835",
        details: (
            <TextContent>
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
        repo: "react",
        fixedWithCodeMod: true
    },
    {
        component: "DropdownItem",
        description: (<>removed the <code className='ws-code'>isHovered</code> prop.</>),
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
        repo: "react",
        fixedWithCodeMod: true
    },
    {
        component: "DropdownMenu",
        description: (<>Removed the <code className='ws-code'>openedOnEnter</code> prop.</>),
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
        repo: "react",
        fixedWithCodeMod: true
    },

    {
        component: "DropdownToggle",
        description: (<>Replaced the deprecated <code className='ws-code'>isPrimary</code> prop "primary" value on the <code className='ws-code'>toggleVariant</code> prop.</>),
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
        repo: "react",
        fixedWithCodeMod: true
    },
    {
        component: "DropdownToggleCheckbox",
        description: (<>Updated <code className='ws-code'>onChange</code> prop so that the <code className='ws-code'>event</code> parameter is included as the first parameter. Handlers may need to be updated.</>),
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
        repo: "react",
        fixedWithCodeMod: true
    },
    {
        component: "DualListSelector",
        description: (<>The <code class='ws-code'>onAvailableOptionsSearchInputChanged</code>, <code class='ws-code'>onChosenOptionsSearchInputChanged</code> and <code class='ws-code'>onListChange</code> props now take <code class='ws-code'>event</code> as the first parameter. Handlers may need to be updated.</>),
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
        repo: "react",
        fixedWithCodeMod: true
    },
    {
        component: "EditableSelectInputCell",
        description: (<>The <code class='ws-code'>onSelect</code> and <code class='ws-code'>clearSelection</code> props now take <code class='ws-code'>event</code> as the first parameter. Handlers may need to be updated.</>),
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
        repo: "react",
        fixedWithCodeMod: true
    },
    {
        component: "EmptyState",
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
        repo: "react",
        fixedWithCodeMod: true
    },
    {
        component: "EmptyState",
        description: (<>Added the <code className='ws-code'>EmptyStateHeader</code> component, which should now be passed an <code className='ws-code'>EmptyStateIcon</code> to the <code className='ws-code'>icon</code> prop
        and the main title should be passed to <code className='ws-code'>titleText</code> prop. You can also explicitly specify title's heading level 
        with <code className='ws-code'>headingLevel</code> prop.<br/><br/>
        Added the <code className='ws-code'>EmptyStateFooter</code> component. It should wrap the content which follows after EmptyStateBody inside EmptyState.</>),
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
        repo: "react",
        fixedWithCodeMod: true
    },
    {
        component: "EmptyStateIcon",
        description: (<>The <code className='ws-code'>icon</code> prop is now required.</>),
        pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8737",
        repo: "react",
        fixedWithCodeMod: false
    },
    {
        component: "EmptyStateIcon",
        description: (<>Removed the <code className='ws-code'>variant</code> prop from EmptyStateIcon. Replaced the <code className='ws-code'>component</code> prop with the <code className='ws-code'>icon</code> prop.</>),
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
        repo: "react",
        fixedWithCodeMod: true
    },    
    {
        component: "EmptyState",
        description: (<>Renamed the EmptyStateVariant enum and prop values 'small' to 'sm' and 'large' to 'lg'</>),
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
        repo: "react",
        fixedWithCodeMod: true
    },
    {
        component: "ExpandableSection",
        description: (<>Renamed the <code className='ws-code'>large</code> prop value of <code className='ws-code'>displaySize</code> to <code className='ws-code'>lg</code></>),
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
        repo: "react",
        fixedWithCodeMod: true
    },
    {
        component: "ExpandableSection",
        description: (<>Updated the <code className='ws-code'>onToggle</code> prop so that the <code className='ws-code'>event</code> parameter is the first parameter. Handlers may require an update</>),
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
        repo: "react",
        fixedWithCodeMod: true
    },
    {
        component: "FileUpload",
        description: (<>updated the <code className='ws-code'>onTextChange</code> prop for FileUploadField and FileUpload so that the <code className='ws-code'>event</code> parameter is the first parameter. Handlers may require an update.</>),
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
        repo: "react",
        fixedWithCodeMod: true
    },
    {
        component: "FileUpload",
        description: (<>Updated the <code className='ws-code'>onDataChange</code>, <code className='ws-code'>onReadFailed</code>, <code className='ws-code'>onReadFinished</code>, and <code className='ws-code'>onReadStarted</code> props so that the <code className='ws-code'>event</code> parameter is the first parameter. Handlers may require an update.</>),
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
        repo: "react",
        fixedWithCodeMod: true
    },
    {
        component: "FileUpload",
        description: (<>Removed the deprecated <code className='ws-code'>onChange</code> prop. This rule will remove the prop and suggest replacing it with the <code className='ws-code'>onFileInputChange</code>, <code className='ws-code'>onTextChange</code>, <code className='ws-code'>onDataChange</code>, and <code className='ws-code'>onClearClick</code> props as needed.</>),
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
        repo: "react",
        fixedWithCodeMod: true
    },
    {
        component: "FormControls",
        description: (<>The following props have been removed from their respective components:<br/>
        <ul>
            <li>FormSelect - isIconSprite</li>
            <li>TextArea - isIconSprite, isReadOnly</li>
            <li>TextInput - isIconSprite, isReadOnly, iconVariant, customIconUrl, customIconDimensions</li>
        </ul></>),
        pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/9132",
        details: (
            <TextContent>
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
        repo: "react",
        fixedWithCodeMod: true
    },    
    {
        component: "FormControls",
        description: (<>The markup for the following components has been changed. Selectors may need to be updated.<br/>
    <ul>
        <li>FormSelect</li>
        <li>TextArea</li>
        <li>TextInput</li>
        <li>TimePicker</li>
        <li>ClipboardCopy</li>
        <li>DatePicker</li>
        <li>FileUpload</li>
        <li>LoginPage</li>
        <li>NumberInput</li>
        <li>SearchInput</li>
        <li>Slider - only when the <code className='ws-code'>isInputVisible</code> prop is passed in</li>
        <li>TreeViewSearch</li>
        <li>Select - only the deprecated implementation with the <code className='ws-code'>hasInlineFilter</code> prop passed in</li>
    </ul></>),
        pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/9132",
        repo: "react",
        fixedWithCodeMod: false
    },
    {
        component: "FormGroup",
        description: (<>Removed the helper text related props from <code className='ws-code'>FormGroup</code>: <code className='ws-code'>helperText</code>, <code className='ws-code'>helperTextInvalid</code>, <code className='ws-code'>validated</code>, <code className='ws-code'>helperTextIcon</code>, <code className='ws-code'>helperTextInvalidIcon</code>, and <code className='ws-code'>isHelperTextBeforeField</code>. The <code className='ws-code'>FormHelperText</code>, <code className='ws-code'>HelperText</code>, and <code className='ws-code'>HelperTextItem</code> components should now be used directly as part of <code className='ws-code'>children</code> instead of these props. This rule will throw an error but not make any changes.</>),
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
        repo: "react",
        fixedWithCodeMod: false
    },
    {
        component: "FormHelperText",
        description: (<>Removed functionality from <code className='ws-code'>FormHelperText</code> as now the logic will be covered by <code className='ws-code'>HelperText</code> and <code className='ws-code'>HelperTextItem</code>. This rule will remove the <code className='ws-code'>isError</code>, <code className='ws-code'>isHidden</code>, <code className='ws-code'>icon</code>, and <code className='ws-code'>component</code> props if present. The <code className='ws-code'>HelperText</code> and <code className='ws-code'>HelperTextItem</code> components should now be used directly as part of <code className='ws-code'>children</code> instead of these props.</>),
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
        repo: "react",
        fixedWithCodeMod: true
    },
    {
        component: "FormSelect",
        description: (<>Updated the <code className='ws-code'>onChange</code> prop so that the <code className='ws-code'>event</code> parameter is the first parameter. Handlers may require an update.</>),
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
        repo: "react",
        fixedWithCodeMod: true
    },
    {
        component: "SelectOption",
        description: (<>Renamed the <code className='ws-code'>hasCheck</code> prop for the Next implementation of SelectOption to <code className='ws-code'>hasCheckbox</code>.</>),
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
        repo: "react",
        fixedWithCodeMod: true
    },
    {
        component: "MenuItem",
        description: (<>Renamed the <code className='ws-code'>hasCheck</code> prop to <code className='ws-code'>hasCheckbox</code>.</>),
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
        repo: "react",
        fixedWithCodeMod: true
    },
    {
        component: "TreeView",
        description: (<>Renamed the <code className='ws-code'>hasCheck</code> prop to <code className='ws-code'>hasCheckbox</code>.</>),
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
        repo: "react",
        fixedWithCodeMod: true
    },
    {
        component: "Nav",
        description: (<>Updated the default value of the <code className='ws-code'>aria-label</code> attribute with a <code className='ws-code'>horizontal-subnav</code> variant to "local" (previously the default value was "Global").</>),
        pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8213",
        repo: "react",
        fixedWithCodeMod: false
    },
    {
        component: "InputGroup",
        description: (<>PR #9176 affects this as well as #9074. Added the InputGroupItem component, which must wrap all non-InputGroupText children passed to an InputGroup. The InputGroupItem component may need to have the <code className='ws-code'>isFill</code>, <code className='ws-code'>isBox</code>, and/or <code className='ws-code'>isPlain</code> props adjusted to retain styling.</>),
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
        repo: "react",
        fixedWithCodeMod: true
    },
    {
        component: "InputGroupText",
        description: (<>Removed the <code className='ws-code'>variant</code> prop</>),
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
        repo: "react",
        fixedWithCodeMod: true
    }
]