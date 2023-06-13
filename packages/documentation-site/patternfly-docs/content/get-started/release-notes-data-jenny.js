import React from "react";
import {
  CodeBlock,
  CodeBlockCode,
  TextContent,
  Text,
  TextList,
  TextListItem,
  TextVariants,
} from "@patternfly/react-core";
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
    component: "Various",
    description: (
      <>
        Removed the <code className="ws-code">KEY_CODES</code> constant.
      </>
    ),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8174",
    repo: "react",
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
    repo: "react",
    fixedWithCodeMod: true,
  },
  {
    component: "LoginForm",
    description: (
      <>
        Updated callback props to include the <code className="ws-code">event</code>{" "}
        parameter as the first parameter. Handlers may require an update.
      </>
    ),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8996",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>
          The <code className="ws-code">onChangeUsername</code>,{" "}
          <code className="ws-code">onChangePassword</code>, and{" "}
          <code className="ws-code">onChangeRememberMe</code> props now take{" "}
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
    repo: "react",
    fixedWithCodeMod: true,
  },
  {
    component: "LoginPage",
    description: (
      <>
        Removed the <code className="ws-code">backgroundImgAlt</code> prop.
        Updated the type of the{" "}
        <code className="ws-code">backgroundImgSrc</code> prop to just a string,
        and the prop will no longer accept a{" "}
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
    repo: "react",
    fixedWithCodeMod: false,
  },
  {
    component: "MastheadBrand",
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
    repo: "react",
    fixedWithCodeMod: true,
  },
  {
    component: "Menu",
    description: (
      <>
        Removed the <code className="ws-code">aria-label</code> prop on
        Menu as it should be passed to MenuList instead.
      </>
    ),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8649",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>
          If you are also using MenuGroup with a{" "}
          <code className="ws-code">label</code> prop passed to it, an{" "}
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
    repo: "react",
    fixedWithCodeMod: true,
  },
  {
    component: "MenuInput",
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
    repo: "react",
    fixedWithCodeMod: true,
  },
  {
    component: "MenuItemAction",
    description: (
      <>
        Updated the <code className="ws-code">aria-label</code> prop on
        MenuItemAction, making it required instead of optional.
      </>
    ),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8617",
    repo: "react",
    fixedWithCodeMod: false,
  },
  {
    component: "MultipleFileUpload",
    description: (
      <>
        Updated the <code className="ws-code">onFileDrop</code> prop for
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
    repo: "react",
    fixedWithCodeMod: true,
  },
  {
    component: "Nav",
    description: (
      <>
        Updated the <code className="ws-code">onSelect</code> and{" "}
        <code className="ws-code">onToggle</code> props for Nav so that the{" "}
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
    repo: "react",
    fixedWithCodeMod: true,
  },
  {
    component: "Nav",
    description: <>The placement of Nav flyouts in the DOM has been changed.</>,
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8628",
    repo: "react",
    fixedWithCodeMod: false,
  },
  {
    component: "Dropdown", // TODO: make sure this is in the correct place once everything is merged
    description: (
      <>
        Promoted the "Next" implementation of our Dropdown and it is now the
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
            {`import { Dropdown /* data-codemods */ } from '@patternfly/react-core';`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "react",
    fixedWithCodeMod: true,
  },
  {
    component: "Select", // TODO: make sure this is in the correct place once everything is merged
    description: (
      <>
        Promoted the "Next" implementation of our Select and it is now the
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
            {`import { Select /* data-codemods */ } from '@patternfly/react-core';`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "react",
    fixedWithCodeMod: true,
  },
  {
    component: "Wizard", // TODO: make sure this is in the correct place once everything is merged
    description: (
      <>
        Promoted the "Next" implementation of our Wizard and it is now the
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
            {`import { Wizard /* data-codemods */ } from '@patternfly/react-core';`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "react",
    fixedWithCodeMod: true,
  },
  {
    component: "NotificationBadge",
    description: (
      <>
        Removed the <code className="ws-code">isRead</code> prop from
        NotificationBadge, use "read" or "unread" on the{" "}
        <code className="ws-code">variant</code> prop instead.
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
    repo: "react",
    fixedWithCodeMod: true,
  },
  {
    component: "NumberInput",
    description: (
      <>
        Removed the <code className="ws-code">allowEmptyInput</code> prop from
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
    repo: "react",
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
    repo: "react",
    fixedWithCodeMod: true,
  },
  {
    component: "OptionsMenu",
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
    repo: "react",
    fixedWithCodeMod: true,
  },
  {
    component: "OverflowMenu",
    description: (
      <>
        OverflowMenuDropdownItem now uses the Next implementation of
        DropdownItem and DropdownItemProps internally.
      </>
    ),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8359",
    repo: "react",
    fixedWithCodeMod: false,
  },
  {
    component: "OverflowMenu",
    description: (
      <>
        Renamed the <code className="ws-code">index</code> prop for
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
    repo: "react",
    fixedWithCodeMod: true,
  },
  {
    component: "Page",
    description: (
      <>
        <Table aria-label="Page renamed props table" variant="compact" borders>
          <Caption>
            The following props have been updated for the specified Page
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
              <Tr key={row.name}>
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
    repo: "react",
    fixedWithCodeMod: true,
  },
  {
    component: "Page",
    description: (
      <>
        Updated <code className="ws-code">onPageResize</code> prop so that the{" "}
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
    repo: "react",
    fixedWithCodeMod: true,
  },
  {
    component: "PageHeader",
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
    repo: "react",
    fixedWithCodeMod: true,
  },
  {
    component: "PageHeader",
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
    repo: "react",
    fixedWithCodeMod: true,
  },
  {
    component: "PageSidebar",
    description: (
      <>
        API has been updated. The <code className="ws-code">nav</code> prop has been
        renamed to <code className="ws-code">children</code>. Any content passed to
        the prop should be wrapped in PageSidebarBody.
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
    repo: "react",
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
    repo: "react",
    fixedWithCodeMod: false,
  },
  {
    component: "Pagination",
    description: (
      <>
        Removed various deprecated props from{" "}
        <code className="ws-code">Pagination</code>.
      </>
    ),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8624",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>
          The following deprecated props were renamed and/or removed:
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
            The following sub-props of Pagination's "title" prop were renamed:
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
            <TextListItem>
              <code className="ws-code">optionsToggle</code>:{" "}
              <code className="ws-code">optionsToggleAriaLabel</code>
            </TextListItem>
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
    repo: "react",
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
    repo: "react",
    fixedWithCodeMod: true,
  },
];
