import React from "react";
import { CodeBlock, CodeBlockCode, Content, ContentVariants, Button } from '@patternfly/react-core';
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
    component: "Accordion content",
    description:
      "The `isHidden` prop has been removed from AccordionContent, as its visibility will now be set automatically based on the `isExpanded` prop on AccordionItem.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/9876",
    repo: "React",
    fixedWithCodeMod: true,
    title: "accordionContent-remove-isHidden-prop",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { AccordionContent } from "@patternfly/react-core";

export const AccordionContentRemoveIsHiddenPropInput = () => (
  <AccordionContent isHidden />
);`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { AccordionContent } from "@patternfly/react-core";

export const AccordionContentRemoveIsHiddenPropInput = () => (
  <AccordionContent  />
);`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Accordion item",
    description:
      "The markup for AccordionItem has been updated, and it now renders a `div` element as a wrapper.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/9876",
    repo: "React",
    fixedWithCodeMod: false,
    title: "accordionItem-warn-update-markup",
  },
  {
    component: "Accordion toggle",
    description:
      "The `isExpanded` prop for AccordionToggle has been moved to AccordionItem.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/9876",
    repo: "React",
    fixedWithCodeMod: true,
    title: "accordionToggle-move-isExpanded-prop",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { AccordionItem, AccordionToggle } from "@patternfly/react-core";

export const AccordionToggleMoveIsExpandedPropInput = () => (
  <AccordionItem>
    <AccordionToggle isExpanded />
  </AccordionItem>
);`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { AccordionItem, AccordionToggle } from "@patternfly/react-core";

export const AccordionToggleMoveIsExpandedPropInput = () => (
  <AccordionItem isExpanded>
    <AccordionToggle  />
  </AccordionItem>
);`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Avatar",
    pullRequestURL:"https://github.com/patternfly/patternfly-react/pull/9881",
    description:
      "The `border` prop has been removed from Avatar since theming is not longer handled React-side. We recommend using the `isBordered` prop instead to add a border to Avatar.",
    repo: "React",
    fixedWithCodeMod: true,
    title: "avatar-replace-border-for-isBordered",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Avatar } from '@patternfly/react-core';

export const AvatarReplaceBorderForIsBorderedInput = () => (
  <Avatar border={'dark'} />
);`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Avatar } from '@patternfly/react-core';

export const AvatarReplaceBorderForIsBorderedInput = () => (
  <Avatar isBordered />
);`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Banner",
    description:
      "The `variant` property has been removed from Banner. We recommend using our new `color` or `status` properties, depending on the original intent of the `variant` property. Codemods will either replace the `variant` property with the `color` property, or remove the `variant` property entirely, but additional updates may need to be made.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/9891",
    repo: "React",
    fixedWithCodeMod: true,
    title: "banner-replace-variantProp",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Banner } from "@patternfly/react-core";

export const BannerReplaceVariantPropInput = () => (
  <>
    <Banner variant='default' />
    <Banner variant='red' />
  </>
);`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Banner } from "@patternfly/react-core";

export const BannerReplaceVariantPropInput = () => (
  <>
    <Banner  />
    <Banner color='red' />
  </>
);`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Button",
    description:
      'Icons must now be passed to the `icon` prop of Button instead of as children. Codemods will only update instances of a Button with `variant="plain"` passed in, but you must ensure you are only passing an icon in such instances before running the fix.',
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10663",
    repo: "React",
    fixedWithCodeMod: true,
    title: "button-moveIcons-icon-prop",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Button, Icon } from "@patternfly/react-core";
import { SomeIcon } from "@patternfly/react-icons";

export const ButtonMoveIconsIconPropInput = () => (
  <>
    <Button variant="plain">
      <span>Icon</span>
    </Button>
    <Button>
      <Icon>
        <SomeIcon />
      </Icon>
    </Button>
    <Button>
      <SomeIcon />
    </Button>
  </>
);`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Button, Icon } from "@patternfly/react-core";
import { SomeIcon } from "@patternfly/react-icons";

export const ButtonMoveIconsIconPropInput = () => (
  <>
    <Button icon={<span>Icon</span>} variant="plain"></Button>
    <Button icon={<Icon>
        <SomeIcon />
      </Icon>}>
      
    </Button>
    <Button icon={<SomeIcon />}>
      
    </Button>
  </>
);`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Button",
    description: "isActive prop for Button has been renamed to isClicked",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/9934",
    repo: "React",
    fixedWithCodeMod: true,
    title: "button-rename-isActive",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Button } from "@patternfly/react-core";

export const ButtonRenameIsActiveInput = () => <Button isActive />;`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Button } from "@patternfly/react-core";

export const ButtonRenameIsActiveInput = () => <Button isClicked />;`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Card",
    description:
      "Props related to raised or clickable cards have been removed.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10056",
    repo: "React",
    fixedWithCodeMod: true,
    title: "card-remove-various-props",
    details: (
      <Content>
        <p>The following props have been removed:</p>
        <ul>
          <li>isSelectableRaised</li>
          <li>isDisabledRaised</li>
          <li>hasSelectableInput</li>
          <li>selectableInputAriaLabel</li>
          <li>onSelectableInputChange</li>
          <li>isFlat</li>
          <li>isRounded</li>
        </ul>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Card } from "@patternfly/react-core";

export const CardRemoveVariousPropsInput = () => (
  <Card
    isSelectableRaised
    isDisabledRaised
    hasSelectableInput
    selectableInputAriaLabel="aria label"
    onSelectableInputChange={() => {}}
  />
);`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Card } from "@patternfly/react-core";

export const CardRemoveVariousPropsInput = () => (
  <Card
  />
);`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Card",
    description:
      "The markup for clickable-only cards has been updated. Additionally, the `selectableActions.selectableActionId` and `selectableActions.name` props are no longer necessary to pass to CardHeader for clickable-only cards. Passing them in will not cause any errors, but running codemods will remove them.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10859",
    repo: "React",
    fixedWithCodeMod: true,
    title: "card-updated-clickable-markup",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Card, CardHeader } from "@patternfly/react-core";

export const CardUpdatedClickableMarkupInput = () => {
  const selectableActionsObj = { name: "Test2", selectableActionId: "Id2" };
  const selectableActionsObjMany = {
    to: "#",
    name: "Test2",
    selectableActionProps: {},
    selectableActionId: "Id2",
  };

  return (
    <>
      <Card isClickable>
        <CardHeader
          selectableActions={{
            to: "#",
            name: "Test",
            selectableActionId: () => {},
          }}
        />
      </Card>
      <Card isClickable>
        <CardHeader selectableActions={selectableActionsObj} />
      </Card>
      <Card isClickable>
        <CardHeader selectableActions={selectableActionsObjMany} />
      </Card>
    </>
  );
};`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Card, CardHeader } from "@patternfly/react-core";

export const CardUpdatedClickableMarkupInput = () => {
  const selectableActionsObj = {};
  const selectableActionsObjMany = {to: "#", selectableActionProps: {}};

  return (
    <>
      <Card isClickable>
        <CardHeader
          selectableActions={{to: "#"}}
        />
      </Card>
      <Card isClickable>
        <CardHeader selectableActions={selectableActionsObj} />
      </Card>
      <Card isClickable>
        <CardHeader selectableActions={selectableActionsObjMany} />
      </Card>
    </>
  );
};`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Checkbox",
    description:
      'The `isLabelBeforeButton` prop in Checkbox and Radio has been replaced with `labelPosition="start"`',
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10016",
    repo: "React",
    fixedWithCodeMod: true,
    title: "checkbox-radio-replace-isLabelBeforeButton",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Checkbox, Radio } from "@patternfly/react-core";

export const CheckboxReplaceIsLabelBeforeButtonInput = () => (
  <Checkbox isLabelBeforeButton />
);
export const RadioReplaceIsLabelBeforeButtonInput = () => (
  <Radio isLabelBeforeButton />
);`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Checkbox, Radio } from "@patternfly/react-core";

export const CheckboxReplaceIsLabelBeforeButtonInput = () => (
  <Checkbox labelPosition="start" />
);
export const RadioReplaceIsLabelBeforeButtonInput = () => (
  <Radio labelPosition="start" />
);`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Chip",
    description:
      "Chip has been deprecated. Running the fix flag will update your imports to our deprecated package, but we suggest using Label instead.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10049",
    repo: "React",
    fixedWithCodeMod: true,
    title: "chip-deprecated",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Chip } from '@patternfly/react-core';`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Chip } from '@patternfly/react-core/deprecated';`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Chip",
    description:
      "Chip has been deprecated. Running the fix flag will replace Chip and ChipGroup components with Label and LabelGroup components respectively.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10049",
    repo: "React",
    fixedWithCodeMod: true,
    title: "chip-replace-with-label",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Chip } from '@patternfly/react-core/deprecated';

export const ChipReplaceWithLabelInput = () => (
  <Chip onClick={handleClick} badge={badge}>
    This is a chip
  </Chip>
);`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Label } from '@patternfly/react-core';

export const ChipReplaceWithLabelInput = () => (
  <Label variant="outline" onClose={handleClick}>
    This is a chip
    {badge}
  </Label>
);`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Color props",
    description:
      'The `color` prop on Banner and Label has been updated to replace "cyan" with "teal" and "gold" with "yellow".',
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10661",
    repo: "React",
    fixedWithCodeMod: true,
    title: "colorProps-replaced-colors",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Banner, Label } from "@patternfly/react-core";

export const ColorPropsReplacedColorsInput = () => (
  <>
    <Banner color='gold' />
    <Banner color='cyan' />
    <Label color='gold' />
    <Label color='cyan' />
  </>
);`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Banner, Label } from "@patternfly/react-core";

export const ColorPropsReplacedColorsInput = () => (
  <>
    <Banner color="yellow" />
    <Banner color="teal" />
    <Label color="yellow" />
    <Label color="teal" />
  </>
);`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Log snippet",
    description:
      "In react-component-groups, we've renamed LogSnippet's prop leftBorderVariant to variant and replaced LogSnippetBorderVariant enum with PatternFly's AlertVariant enum.",
    pullRequestURL:
      "https://github.com/patternfly/react-component-groups/pull/145",
    repo: "React-component-groups",
    fixedWithCodeMod: true,
    title: "componentGroups-logSnippet-rename-leftBorderVariant",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import {
  LogSnippet,
  LogSnippetBorderVariant,
} from "@patternfly/react-component-groups";

export const LogSnippetRenameLeftBorderVariantInput = () => (
  <LogSnippet
    message="Failure - check logs for details"
    logSnippet="code"
    leftBorderVariant={LogSnippetBorderVariant.success}
  />
);`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { LogSnippet } from "@patternfly/react-component-groups";

export const LogSnippetRenameLeftBorderVariantInput = () => (
  <LogSnippet
    message="Failure - check logs for details"
    logSnippet="code"
    variant={"success"}
  />
);`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Content header",
    description: "In react-component-groups, we've renamed ContentHeader component to PageHeader",
    pullRequestURL:
      "https://github.com/patternfly/react-component-groups/pull/313",
    repo: "React-component-groups",
    fixedWithCodeMod: true,
    title: "component-groups-contentHeader-rename-to-pageHeader",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { ContentHeader } from "@patternfly/react-component-groups";
export const ComponentGroupsContentHeaderRenameToPageHeaderInput = () => (
  <ContentHeader />
);`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { PageHeader } from "@patternfly/react-component-groups";
export const ComponentGroupsContentHeaderRenameToPageHeaderInput = () => (
  <PageHeader data-codemods />
);`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Error state",
    description:
      "In react-component-groups, we've renamed some ErrorState props to comply with its base component, EmptyState.",
    pullRequestURL:
      "https://github.com/patternfly/react-component-groups/pull/145",
    repo: "React-component-groups",
    fixedWithCodeMod: true,
    title: "componentGroups-errorState-rename-props",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { ErrorState } from "@patternfly/react-component-groups";

export const ComponentGroupsErrorStateRenamePropsInput = () => (
  <ErrorState
    errorTitle="Sample error title"
    errorDescription="Sample error description"
    defaultErrorDescription="Sample default error description"
  />
);`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { ErrorState } from "@patternfly/react-component-groups";

export const ComponentGroupsErrorStateRenamePropsInput = () => (
  <ErrorState
    titleText="Sample error title"
    bodyText="Sample error description"
    defaultBodyText="Sample default error description"
  />
);`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Invalid object",
    description:
      "In react-component-groups, we've renamed InvalidObject's props `invalidObjectTitleText` to `titleText` and `invalidObjectBodyText` to `bodyText`.",
    pullRequestURL:
      "https://github.com/patternfly/react-component-groups/pull/145",
    repo: "React-component-groups",
    fixedWithCodeMod: true,
    title: "component-groups-invalidObject-rename-props",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { InvalidObject } from "@patternfly/react-component-groups";

export const ComponentGroupsInvalidObjectRenamePropsInput = () => (
  <InvalidObject
    invalidObjectTitleText="Sample title"
    invalidObjectBodyText="Sample description"
  />
);`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { InvalidObject } from "@patternfly/react-component-groups";

export const ComponentGroupsInvalidObjectRenamePropsInput = () => (
  <InvalidObject
    titleText="Sample title"
    bodyText="Sample description"
  />
);`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Missing page",
    description:
      "In react-component-groups, we've renamed InvalidObject component to MissingPage",
    pullRequestURL:
      "https://github.com/patternfly/react-component-groups/pull/313",
    repo: "React",
    fixedWithCodeMod: true,
    title: "component-groups-invalidObject-rename-to-missingPage",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { InvalidObject } from "@patternfly/react-component-groups";
export const ComponentGroupsInvalidObjectRenameToMissingPageInput =
  () => <InvalidObject />;`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { MissingPage } from "@patternfly/react-component-groups";
export const ComponentGroupsInvalidObjectRenameToMissingPageInput =
  () => <MissingPage data-codemods />;`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Multi content card",
    description:
      "The `leftBorderVariant` and `withHeaderBorder` props have been removed from MultiContentCard.",
    pullRequestURL:
      "https://github.com/patternfly/react-component-groups/pull/145",
    repo: "React-component-groups",
    fixedWithCodeMod: true,
    title: "component-groups-multi-content-card-remove-props",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { MultiContentCard } from "@patternfly/react-component-groups";

export const ComponentGroupsMultiContentCardRemovePropsInput = () => <MultiContentCard leftBorderVariant="danger" withHeaderBorder />`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { MultiContentCard } from "@patternfly/react-component-groups";

export const ComponentGroupsMultiContentCardRemovePropsInput = () => <MultiContentCard   />`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Not authorized",
    description:
      "In react-component-groups, we've renamed NotAuthorized's props `description` to `bodyText` and `title` to `titleText`.",
    pullRequestURL:
      "https://github.com/patternfly/react-component-groups/pull/145",
    repo: "React-component-groups",
    fixedWithCodeMod: true,
    title: "component-groups-notAuthorized-rename-props",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { NotAuthorized } from "@patternfly/react-component-groups";

export const ComponentGroupsNotAuthorizedRenamePropsInput = () => (
  <NotAuthorized description="Description text" title="Title text" />
);`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { NotAuthorized } from "@patternfly/react-component-groups";

export const ComponentGroupsNotAuthorizedRenamePropsInput = () => (
  <NotAuthorized bodyText="Description text" titleText="Title text" />
);`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: 'Unauthorized access',
    description:
      "In react-component-groups, we've renamed NotAuthorized component to UnauthorizedAccess",
    pullRequestURL:
      "https://github.com/patternfly/react-component-groups/pull/313",
    repo: "React",
    fixedWithCodeMod: true,
    title: "component-groups-notAuthorized-rename-to-unauthorizedAccess",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { NotAuthorized } from "@patternfly/react-component-groups";
export const ComponentGroupsNotAuthorizedRenameToUnauthorizedAccessInput =
  () => <NotAuthorized />;`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { UnauthorizedAccess } from "@patternfly/react-component-groups";
export const ComponentGroupsNotAuthorizedRenameToUnauthorizedAccessInput =
  () => <UnauthorizedAccess data-codemods />;`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Unavailable content",
    description:
      "In react-component-groups, we have replaced UnavailableContent's props `unavailableBodyPreStatusLinkText` and `unavailableBodyPostStatusLinkText` with one `bodyText` prop.Also status page link button has changed to a primary button. Consider capitalizing the `statusPageLinkText` prop.",
    pullRequestURL:
      "https://github.com/patternfly/react-component-groups/pull/244",
    repo: "React-component-groups",
    fixedWithCodeMod: true,
    title: "component-groups-unavailableContent-bodyText-props-update",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { UnavailableContent } from "@patternfly/react-component-groups";

export const ComponentGroupsUnavailableContentBodyTextPropsUpdateInput = () => (
  <>
    <UnavailableContent
      unavailableBodyPreStatusLinkText="Visit our"
      unavailableBodyPostStatusLinkText="for more info."
      statusPageLinkText="custom status page"
    />
    <UnavailableContent unavailableBodyPreStatusLinkText="Visit our" />
    <UnavailableContent unavailableBodyPostStatusLinkText="for more info." />
  </>
);`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { UnavailableContent } from "@patternfly/react-component-groups";

export const ComponentGroupsUnavailableContentBodyTextPropsUpdateInput = () => (
  <>
    <UnavailableContent
      bodyText="Visit our custom status page for more info."
      statusPageLinkText="Custom status page"
    />
    <UnavailableContent bodyText="Visit our status page for known outages." />
    <UnavailableContent bodyText="Try refreshing the page. If the problem persists, contact your organization administrator or visit our status page for more info." />
  </>
);`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Unavailable content",
    description:
      "The UnavailableContent component of React Component Groups has had the `unavailableTitleText` prop renamed to `titleText`.",
    pullRequestURL:
      "https://github.com/patternfly/react-component-groups/pull/145",
    repo: "React-component-groups",
    fixedWithCodeMod: true,
    title: "component-groups-unavailable-content-rename-props",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { UnavailableContent } from "@patternfly/react-component-groups";

export const ComponentGroupsUnavailableContentRenamePropsInput = () => (
  <UnavailableContent unavailableTitleText="foo" />
);`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { UnavailableContent } from "@patternfly/react-component-groups";

export const ComponentGroupsUnavailableContentRenamePropsInput = () => (
  <UnavailableContent titleText="foo" />
);`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "All",
    description:
      "Codemods will remove `data-codemods` attributes and comments, which were introduced by our codemods in order to work correctly.You should run this codemod only once, after you finish running the codemods.This codemod can only run using the `--only data-codemods-cleanup` option.",
    repo: "React",
    fixedWithCodeMod: true,
    title: "data-codemods-cleanup",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import {
  DualListSelector /* data-codemods */,
  LoginMainFooterLinksItem,
  MastheadLogo,
} from "@patternfly/react-core";

export const DataCodemodsCleanupInput = () => (
  <>
    <DualListSelector />
    <LoginMainFooterLinksItem data-codemods="true" />
    <MastheadLogo data-codemods />
  </>
);`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import {
  DualListSelector ,
  LoginMainFooterLinksItem,
  MastheadLogo,
} from "@patternfly/react-core";

export const DataCodemodsCleanupInput = () => (
  <>
    <DualListSelector />
    <LoginMainFooterLinksItem  />
    <MastheadLogo  />
  </>
);`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Data list action",
    description:
      "The `isPlainButtonAction` prop has been removed from DataListAction as a wrapper is no longer needed.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10939",
    repo: "React",
    fixedWithCodeMod: true,
    title: "dataListAction-remove-isPlainButtonAction-prop",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { DataListAction } from "@patternfly/react-core";
export const DataListActionRemoveIsPlainButtonActionPropInput = () => (
  <DataListAction isPlainButtonAction/>
);`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { DataListAction } from "@patternfly/react-core";
export const DataListActionRemoveIsPlainButtonActionPropInput = () => (
  <DataListAction />
);`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Drag drop",
    description:
      "DragDrop has been deprecated. Running the fix flag will update your imports to our deprecated package, but we suggest using our new drag and drop implementation (DragDropSort component), that lives in '@patternfly/react-drag-drop' package.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10181",
    repo: "React",
    fixedWithCodeMod: true,
    title: "dragDrop-deprecated",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { DragDrop, Droppable, Draggable } from '@patternfly/react-core';

export const DragDropDeprecatedInput = () => (
  <DragDrop onDrop={onDrop}>
    <Droppable>
      <Draggable key={1}>Item 1</Draggable>
      <Draggable key={2}>Item 2</Draggable>
    </Droppable>
  </DragDrop>
);`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import {
  DragDrop,
  Droppable,
  Draggable,
} from '@patternfly/react-core/deprecated';

export const DragDropDeprecatedInput = () => (
  <DragDrop onDrop={onDrop}>
    <Droppable>
      <Draggable key={1}>Item 1</Draggable>
      <Draggable key={2}>Item 2</Draggable>
    </Droppable>
  </DragDrop>
);`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Drawer content",
    description:
      'The "no-background" value of the `colorVariant` prop on DrawerContent has been removed, and a new "primary" value has been added.Additionally, a new DrawerContentColorVariant enum has been added and should be used instead of the DrawerColorVariant enum. The fix when the DrawerColorVariant enum is being used will replace the `colorVariant` prop value with a string.',
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10211",
    repo: "React",
    fixedWithCodeMod: true,
    title: "drawerContent-replace-noBackground-colorVariant",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { DrawerContent, DrawerColorVariant } from "@patternfly/react-core";

export const DrawerContentReplaceNoBackgroundColorVariantInput = () => {
  const stringColor = "no-background";
  const enumColor = DrawerColorVariant.default;

  return (
    <>
      <DrawerContent colorVariant='no-background' />
      <DrawerContent colorVariant={DrawerColorVariant.default} />
      <DrawerContent colorVariant={stringColor} />
      <DrawerContent colorVariant={enumColor} />
    </>
  );
};`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { DrawerContent, DrawerColorVariant } from "@patternfly/react-core";

export const DrawerContentReplaceNoBackgroundColorVariantInput = () => {
  const stringColor = "no-background";
  const enumColor = DrawerColorVariant.default;

  return (
    <>
      <DrawerContent  />
      <DrawerContent colorVariant="default" />
      <DrawerContent  />
      <DrawerContent colorVariant="default" />
    </>
  );
};`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Drawer",
    description: "The `hasNoPadding` prop has been removed from DrawerHead.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10036",
    repo: "React",
    fixedWithCodeMod: true,
    title: "drawer-remove-props",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { DrawerHead } from "@patternfly/react-core";

export const DrawerRemovePropsInput = () => <DrawerHead hasNoPadding />;`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { DrawerHead } from "@patternfly/react-core";

export const DrawerRemovePropsInput = () => <DrawerHead  />;`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Drawer head",
    description:
      "DrawerPanelBody is no longer rendered internally to DrawerHead. We recommend using these components independent of one another and to not pass DrawerPanelBody to DrawerHead.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10036",
    repo: "React",
    fixedWithCodeMod: false,
    title: "drawerHead-warn-updated-markup",
  },
  {
    component: "Drawer",
    description:
      'The "light-200" value for the `colorVariant` prop has been replaced with the "secondary" value for DrawerContent, DrawerPanelContent, and DrawerSection components.Additionally, the `light200` property for the DrawerColorVariant enum has been replaced with the `secondary` property.',
    pullRequestURL:
      "https://github.com/patternfly/patternfly-react/pull/10017 ",
    repo: "React",
    fixedWithCodeMod: true,
    title: "drawer-replace-colorVariant-light200",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { DrawerContent, DrawerColorVariant } from "@patternfly/react-core";

export const DrawerReplaceColorVariantLight200Input = () => (
  <>
    <DrawerContent colorVariant='light-200' />
    <DrawerContent colorVariant={DrawerColorVariant.light200} />
  </>
);`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { DrawerContent, DrawerColorVariant } from "@patternfly/react-core";

export const DrawerReplaceColorVariantLight200Input = () => (
  <>
    <DrawerContent colorVariant="secondary" />
    <DrawerContent colorVariant={DrawerColorVariant.secondary} />
  </>
);`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Dual list selector",
    description:
      "Our previous implementation of DualListSelector has been deprecated. Codemods will update import paths to our deprecated directory, but we recommend using our newly promoted implementation.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10359",
    repo: "React",
    fixedWithCodeMod: true,
    title: "dualListSelector-deprecated",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { DualListSelector } from "@patternfly/react-core";`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import {
	DualListSelector
} from '@patternfly/react-core/deprecated';`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Dual list selector next",
    description:
      "Our Next implementation of DualListSelector has been promoted as our recommended implementation. Codemods will update import paths.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10359",
    repo: "React",
    fixedWithCodeMod: true,
    title: "dualListSelectorNext-promoted",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { DualListSelector } from "@patternfly/react-core/next";`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import {
	DualListSelector /* data-codemods */
} from '@patternfly/react-core';`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Empty state header",
    description:
      "EmptyStateHeader and EmptyStateIcon are now rendered internally within EmptyState and should only be customized using props. Content passed to the `icon` prop on EmptyState will also be wrapped by EmptyStateIcon automatically.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/9947",
    repo: "React",
    fixedWithCodeMod: true,
    title: "emptyStateHeader-move-into-emptyState",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import {
  EmptyState,
  EmptyStateBody,
  EmptyStateHeader,
  EmptyStateIcon,
  CubesIcon,
  Title,
} from "@patternfly/react-core";

export const EmptyStateHeaderMoveIntoEmptyStateInput = () => (
  <EmptyState>
    <EmptyStateHeader
      titleText="Empty state"
      headingLevel="h4"
      icon={<EmptyStateIcon icon={CubesIcon} />}
    />
  </EmptyState>
);

export const EmptyStateWithoutHeaderMoveIntoEmptyStateInput = () => (
  <EmptyState>
    <Title headingLevel="h4" size="lg">
      Foo
    </Title>
    <EmptyStateIcon icon={CubesIcon} />
    <EmptyStateBody>Body</EmptyStateBody>
  </EmptyState>

);

export const EmptyStateHeaderWithoutTitleTextMoveIntoEmptyStateInput = () => (
  <EmptyState>
    <EmptyStateHeader
      className="some-class"
      icon={<EmptyStateIcon icon={CubesIcon} />}
    />
  </EmptyState>
);

export const EmptyStateWithoutHeaderAndTitleTextMoveIntoEmptyStateInput =
  () => (
    <EmptyState>
      <EmptyStateIcon icon={CubesIcon} />
      <EmptyStateBody>Body</EmptyStateBody>
    </EmptyState>
  );
`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import {
  EmptyState,
  EmptyStateBody,
  EmptyStateHeader,
  EmptyStateIcon,
  CubesIcon,
  Title,
} from "@patternfly/react-core";

export const EmptyStateHeaderMoveIntoEmptyStateInput = () => (
  <EmptyState  headingLevel="h4" icon={CubesIcon}  titleText="Empty state">
    </EmptyState>
);

export const EmptyStateWithoutHeaderMoveIntoEmptyStateInput = () => (
  <EmptyState titleText={<Title headingLevel="h4" size="lg">
      Foo
    </Title>} icon={CubesIcon}>
    <EmptyStateBody>Body</EmptyStateBody>
  </EmptyState>
);

export const EmptyStateHeaderWithoutTitleTextMoveIntoEmptyStateInput = () => (
  <EmptyState headerClassName="some-class"  icon={CubesIcon}  >
    </EmptyState>
);

export const EmptyStateWithoutHeaderAndTitleTextMoveIntoEmptyStateInput =
  () => (
    <EmptyState icon={CubesIcon}>
      <EmptyStateBody>Body</EmptyStateBody>
    </EmptyState>
  );
`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Empty state",
    description:
      "EmptyStateHeader and EmptyStateIcon are no longer exported by PatternFly. Codemods will apply fixes for exports of these components.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10364",
    repo: "React",
    fixedWithCodeMod: true,
    title: "emptyState-nonExported-components",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { EmptyStateHeader, EmptyStateIcon } from "@patternfly/react-core";

export { EmptyStateHeader, EmptyStateIcon };
export {
  EmptyStateHeader as CustomESHeader,
  EmptyStateIcon as CustomESIcon,
} from "@patternfly/react-core";`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { EmptyStateHeader, EmptyStateIcon } from "@patternfly/react-core";`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Form filed group header title text object",
    description:
      "There was a typo in FormFiledGroupHeaderTitleTextObject interface. It was renamed to the intended FormFieldGroupHeaderTitleTextObject.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10016",
    repo: "React",
    fixedWithCodeMod: true,
    title: "formFiledGroupHeaderTitleTextObject-renamed",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { FormFiledGroupHeaderTitleTextObject } from "@patternfly/react-core";
export { FormFiledGroupHeaderTitleTextObject as HeaderTitleObject } from "@patternfly/react-core";

interface MyExtension extends FormFiledGroupHeaderTitleTextObject {}

const titleTextObject: FormFiledGroupHeaderTitleTextObject = {
  text: "Some title",
  id: "form-field-group-header-title-text",
};`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { FormFieldGroupHeaderTitleTextObject } from "@patternfly/react-core";
export { FormFieldGroupHeaderTitleTextObject as HeaderTitleObject } from "@patternfly/react-core";

interface MyExtension extends FormFieldGroupHeaderTitleTextObject {}

const titleTextObject: FormFieldGroupHeaderTitleTextObject = {
  text: "Some title",
  id: "form-field-group-header-title-text",
};`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Form group",
    description:
      'The `labelIcon` prop for FormGroup has been renamed to `labelHelp`. We recommend using FormGroupLabelHelp element for the labelHelp prop. The markup has also changed, we now wrap the labelHelp element in `<span className="pf-v6-c-form__group-label-help">`, so there is no need to add `className="pf-v6-c-form__group-label-help"` to the labelHelp element.',
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10016",
    repo: "React",
    fixedWithCodeMod: true,
    title: "formGroup-rename-labelIcon",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { FormGroup } from "@patternfly/react-core";

export const FormGroupRenameLabelIconInput = () => (
  <FormGroup labelIcon={<>Help icon</>} />
);`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { FormGroup } from "@patternfly/react-core";

export const FormGroupRenameLabelIconInput = () => (
  <FormGroup labelHelp={<>Help icon</>} />
);`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Helper text item",
    description:
      'The `hasIcon` and `isDynamic` props have been removed from HelperTextItem. An icon will now render automatically when the `variant` prop has a value other than "default" or when the `icon` prop is passed in.',
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10029",
    repo: "React",
    fixedWithCodeMod: true,
    title: "helperTextItem-remove-props",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { HelperTextItem } from "@patternfly/react-core";

export const HelperTextItemRemovePropsInput = () => (
  <HelperTextItem hasIcon isDynamic />
);`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { HelperTextItem } from "@patternfly/react-core";

export const HelperTextItemRemovePropsInput = () => (
  <HelperTextItem   />
);`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Helper text item",
    description:
      'The `screenReaderText` prop on HelperTextItem has been updated, and will now render only when the `variant` prop has a value other than "default". Previously the prop was rendered only when the `isDynamic` prop was true.',
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10029",
    repo: "React",
    fixedWithCodeMod: false,
    title: "helperTextItem-warn-screenReaderText-update",
  },
  {
    component: "Jump links item",
    description: "The `href` prop on JumpLinksItem is now required.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10027",
    repo: "React",
    fixedWithCodeMod: false,
    title: "jumpLinksItem-href-required",
  },
  {
    component: "Jump links item",
    description:
      "The markup for JumpLinksItem has changed, as it now uses our Button component internally. Additionally, the `onClick` prop type has been updated to just `React.MouseEvent` (previously `React.MouseEvent<HTMLAnchorElement>`).",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10027",
    repo: "React",
    fixedWithCodeMod: false,
    title: "jumpLinksItem-warn-markup-change",
  },
  {
    component: "Kebab toggle",
    description:
      "KebabToggle has been removed from PatternFly. We recommend using our MenuToggle component instead. Codemods will replace most KebabToggle usage with a MenuToggle. Depending on the use-case, however, additional manual updates may be necessary, such as upgrading from our deprecated Dropdown implementation to our current one.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10345",
    repo: "React",
    fixedWithCodeMod: true,
    title: "kebabToggle-removed",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { KebabToggle } from "@patternfly/react-core/deprecated";

export const KebabToggleRemovedInput = () => (
  <>
    <KebabToggle onToggle={() => {}} />
    <Dropdown toggle={<KebabToggle onToggle={() => {}} />} />
  </>
);`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { MenuToggle } from "@patternfly/react-core";
import EllipsisVIcon from "@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon";

export const KebabToggleRemovedInput = () => (
  <>
    <MenuToggle variant="plain" icon={<EllipsisVIcon aria-hidden="true" />} onClick={() => {}} />
    <Dropdown toggle={<MenuToggle variant="plain" icon={<EllipsisVIcon aria-hidden="true" />} onClick={() => {}} />} />
  </>
);`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Label",
    description:
      'The `isOverflowLabel` prop for Label has been replaced with `variant="overflow"`. Codemods will replace an existing `variant` prop (which had no effect if `isOverflowLabel` was used).',
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10037",
    repo: "React",
    fixedWithCodeMod: true,
    title: "label-remove-isOverflowLabel",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Label } from "@patternfly/react-core";

export const LabelRemoveIsOverflowLabelInput = () => <Label isOverflowLabel />;
export const LabelRemoveIsOverflowLabelInput2 = () => (
  <Label isOverflowLabel variant="outline" />
);`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Label } from "@patternfly/react-core";

export const LabelRemoveIsOverflowLabelInput = () => (
  <Label variant="overflow" />
);
export const LabelRemoveIsOverflowLabelInput2 = () => (
  <Label variant="overflow" />
);`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Login main footer links item",
    description:
      "LoginMainFooterLinksItem structure has changed. Instead of passing it many properties, everything is now passed in a children component directly.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10107",
    repo: "React",
    fixedWithCodeMod: true,
    title: "loginMainFooterLinksItem-structure-updated",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { LoginMainFooterLinksItem } from "@patternfly/react-core";

export const LoginMainFooterLinksItemStructureUpdatedInput = () => (
  <LoginMainFooterLinksItem
    href="https://github.com/login"
    linkComponentProps={{ "aria-label": "Login with Github" }}
  >
    <i>GitHub icon</i>
  </LoginMainFooterLinksItem>
);`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { LoginMainFooterLinksItem, Button } from "@patternfly/react-core";

export const LoginMainFooterLinksItemStructureUpdatedInput = () => (
  <LoginMainFooterLinksItem data-codemods="true">
    <Button
      variant="link"
      component="a"
      href="https://github.com/login"
      {...{ "aria-label": "Login with Github" }}
    >
      <i>GitHub icon</i>
    </Button>
  </LoginMainFooterLinksItem>
);`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Login main header",
    description:
      "The markup for LoginMainHeader which is used internally within LoginPage has been updated, now using a `div` wrapper instead of a `header` element wrapper.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10880",
    repo: "React",
    fixedWithCodeMod: false,
    title: "loginMainHeader-warn-updated-markup",
  },
  {
    component: "Log viewer",
    description:
      "The stylesheet for LogViewer has been moved out of the PatternFly package and into LogViewer itself. You may need to update stylesheet imports or import the stylesheet manually.",
    pullRequestURL: "https://github.com/patternfly/react-log-viewer/pull/70",
    repo: "React",
    fixedWithCodeMod: false,
    title: "logViewer-moved-styles",
  },
  {
    component: "Masthead",
    description:
      'Our old implementation of `MastheadBrand` has been renamed to `MastheadLogo`, which must be wrapped by our new implementation of `MastheadBrand`. Codemods will handle the renaming and required restructuring.',
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10809",
    repo: "React",
    fixedWithCodeMod: true,
    title: "masthead-name-changes",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { MastheadBrand } from "@patternfly/react-core";

export const MastheadNameChanges = () => <MastheadBrand>Logo</MastheadBrand>;`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { MastheadLogo } from "@patternfly/react-core";

export const MastheadNameChanges = () => <MastheadLogo data-codemods>Logo</MastheadLogo>;`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Masthead",
    description:
      "We've removed the `backgroundColor` prop from Masthead as theming is no longer handled React-side.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/9774",
    repo: "React",
    fixedWithCodeMod: true,
    title: "masthead-remove-background-color",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Masthead } from "@patternfly/react-core";

export const MastheadRemoveBackgroundColorInput = () => <Masthead backgroundColor />`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Masthead } from "@patternfly/react-core";

export const MastheadRemoveBackgroundColorInput = () => <Masthead  />`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Masthead",
    description:
      "The structure of Masthead has been updated, MastheadToggle and MastheadBrand should now be wrapped in MastheadMain.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10809",
    repo: "React",
    fixedWithCodeMod: true,
    title: "masthead-structure-changes",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import {
  Masthead,
  MastheadBrand,
  MastheadMain,
  MastheadToggle,
  MastheadLogo
} from "@patternfly/react-core";

export const MastheadStructureChangesInputPreNameChange = () => (
  <Masthead>
    <MastheadToggle>Foo</MastheadToggle>
    <MastheadMain>
      <MastheadBrand>Bar</MastheadBrand>
    </MastheadMain>
  </Masthead>
);

export const MastheadStructureChangesInputPostNameChange = () => (
  <Masthead>
    <MastheadToggle>Foo</MastheadToggle>
    <MastheadMain>
      <MastheadLogo>Bar</MastheadLogo>
    </MastheadMain>
  </Masthead>
);`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import {
  Masthead,
  MastheadBrand,
  MastheadMain,
  MastheadToggle,
  MastheadLogo,
} from "@patternfly/react-core";

export const MastheadStructureChangesInputPreNameChange = () => (
  <Masthead>
    <MastheadMain>
      <MastheadToggle>Foo</MastheadToggle>
      <MastheadBrand data-codemods>
        <MastheadBrand>Bar</MastheadBrand>
      </MastheadBrand>
    </MastheadMain>
  </Masthead>
);

export const MastheadStructureChangesInputPostNameChange = () => (
  <Masthead>
    <MastheadMain>
      <MastheadToggle>Foo</MastheadToggle>
      <MastheadBrand data-codemods>
        <MastheadLogo>Bar</MastheadLogo>
      </MastheadBrand>
    </MastheadMain>
  </Masthead>
);`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Menu item action",
    description:
      "The markup for MenuItemAction has been updated. It now uses our Button component internally, has a wrapper around the action button, and no longer renders an icon wrapper inside the action button.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10089",
    repo: "React",
    fixedWithCodeMod: false,
    title: "menuItemAction-warn-update-markup",
  },
  {
    component: "Menu toggle",
    description:
      "We now recommend passing any icon to the `icon` prop instead of passing it as children, such as for plain, icon only toggles. Passing an icon as children will result in incorrect styling.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10097",
    repo: "React",
    fixedWithCodeMod: true,
    title: "menuToggle-warn-iconOnly-toggle",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { MenuToggle } from "@patternfly/react-core";
import EllipsisVIcon from "@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon";

export const MenuToggleWarnIconOnlyToggleInput = () => (
  <MenuToggle aria-label='A descriptive aria-label' variant='plain'>
    <EllipsisVIcon />
  </MenuToggle>
);`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { MenuToggle } from "@patternfly/react-core";
import EllipsisVIcon from "@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon";

export const MenuToggleWarnIconOnlyToggleInput = () => (
  <MenuToggle
    icon={EllipsisVIcon}
    aria-label='A descriptive aria-label'
    variant='plain'
  />
);`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Modal",
    description:
      "Our previous implementation of Modal has been deprecated. Codemods will update import paths to our deprecated directory, but we recommend using our newly promoted implementation.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10358",
    repo: "React",
    fixedWithCodeMod: true,
    title: "modal-deprecated",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Modal } from "@patternfly/react-core";`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import {
	Modal
} from '@patternfly/react-core/deprecated';`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Modal next",
    description:
      "Our Next implementation of Modal has been promoted as our recommended implementation. Codemods will update import paths.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10358",
    repo: "React",
    fixedWithCodeMod: true,
    title: "modalNext-promoted",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Modal } from "@patternfly/react-core/next";`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import {
	Modal /* data-codemods */
} from '@patternfly/react-core';`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Nav item",
    description:
      "The `hasNavLinkWrapper` prop has been removed from NavItem. Additionally, any icons for a NavItem should be passed to its new `icon` prop.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10687",
    repo: "React",
    fixedWithCodeMod: true,
    title: "navItem-remove-hasNavLinkWrapper-prop",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { NavItem } from "@patternfly/react-core";

export const NavItemRemoveHasNavLinkWrapperPropInput = () => <NavItem hasNavLinkWrapper />`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { NavItem } from "@patternfly/react-core";

export const NavItemRemoveHasNavLinkWrapperPropInput = () => <NavItem  />`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Nav",
    description:
      'The "tertiary" Nav variant is no longer supported. Use `variant="horizontal-subnav"` instead.',
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/9948",
    repo: "React",
    fixedWithCodeMod: true,
    title: "nav-remove-tertiary-variant",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Nav } from "@patternfly/react-core";

export const NavRemoveTertiaryVariantInput = () => <Nav variant="tertiary" />;
export const NavRemoveTertiaryVariantInput2 = () => (
  <Nav variant={"tertiary"} />
);`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Nav } from "@patternfly/react-core";

export const NavRemoveTertiaryVariantInput = () => (
  <Nav variant="horizontal-subnav" />
);
export const NavRemoveTertiaryVariantInput2 = () => (
  <Nav variant={"horizontal-subnav"} />
);`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Nav",
    description:
      "The `theme` prop is no longer supported in Nav. Use light/dark mode theming instead.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/9948",
    repo: "React",
    fixedWithCodeMod: true,
    title: "nav-remove-theme-prop",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Nav } from "@patternfly/react-core";

export const NavRemoveThemePropInput = () => <Nav theme="dark" />;
export const NavRemoveThemePropInput2 = () => <Nav theme="light" />;`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Nav } from "@patternfly/react-core";

export const NavRemoveThemePropInput = () => <Nav />;
export const NavRemoveThemePropInput2 = () => <Nav />;`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Duplicate imports",
    description:
      "Duplicate import specifiers should be removed. This is a cleanup codemod which runs after other codemods. ",
    repo: "React",
    fixedWithCodeMod: true,
    title: "no-duplicate-import-specifiers",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Button, Button } from "@patternfly/react-core";

export const NoDuplicateImportSpecifiersInput = () => (
  <Button>Sample button</Button>
);`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Button } from "@patternfly/react-core";

export const NoDuplicateImportSpecifiersInput = () => (
  <Button>Sample button</Button>
);`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Notification badge",
    description:
      "The markup for NotificationBadge has changed, as it now uses stateful button internally.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10020",
    repo: "React",
    fixedWithCodeMod: false,
    title: "notificationBadge-warn-markup-change",
  },
  {
    component: "Notification drawer header",
    description:
      "NotificationDrawerHeader no longer uses our Text component internally, and instead renders a native `h1` element.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10378",
    repo: "React",
    fixedWithCodeMod: false,
    title: "notificationDrawerHeader-warn-update-markup",
  },
  {
    component: "Tile",
    description:
      "Tile has been deprecated. Running the fix flag will update your imports to our deprecated package, but we suggest using Card instead. There is a new Card example on our documentation showcasing how to set up a Card as a Tile.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10821",
    repo: "React",
    fixedWithCodeMod: true,
    title: "tile-deprecated",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Tile } from "@patternfly/react-core";`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Tile } from "@patternfly/react-core/deprecated";`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Unused imports",
    description:
      "PatternFly imports that are unused imports should be removed.",
    repo: "React",
    fixedWithCodeMod: true,
    title: "no-unused-imports-v6",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Foo, Bar } from "@patternfly/react-core";

export const NoUnusedImportsInput = () => <Bar />;`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Bar } from "@patternfly/react-core";

export const NoUnusedImportsInput = () => <Bar />;`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Page breadcrumb and section",
    description:
      "The `isWidthLimited` prop on PageBreadcrumb and PageSection will no longer determine whether the children of either component are wrapped in a PageBody. Instead the new `hasBodyWrapper` prop must be used. By default this new prop is set to true. Codemods will apply `hasBodyWrapper` with the same value as the `isWidthLimited` prop or false if `isWidthLimited` is not passed.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10650",
    repo: "React",
    fixedWithCodeMod: true,
    title: "pageBreadcrumbAndSection-warn-updated-wrapperLogic",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { PageBreadcrumb, PageSection } from "@patternfly/react-core";

export const PageBreadcrumbAndSectionWarnUpdatedWrapperLogicInput = () => (
  <>
    <PageBreadcrumb isWidthLimited />
    <PageBreadcrumb isWidthLimited={someVar} />
    <PageBreadcrumb isWidthLimited={() => someCallback()} />
    <PageSection isWidthLimited />
    <PageSection isWidthLimited={someVar} />
    <PageSection isWidthLimited={() => someCallback()} />
  </>
);`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { PageBreadcrumb, PageSection } from "@patternfly/react-core";

export const PageBreadcrumbAndSectionWarnUpdatedWrapperLogicInput = () => (
  <>
    <PageBreadcrumb hasBodyWrapper isWidthLimited />
    <PageBreadcrumb hasBodyWrapper={someVar} isWidthLimited={someVar} />
    <PageBreadcrumb hasBodyWrapper={() => someCallback()} isWidthLimited={() => someCallback()} />
    <PageSection hasBodyWrapper isWidthLimited />
    <PageSection hasBodyWrapper={someVar} isWidthLimited={someVar} />
    <PageSection hasBodyWrapper={() => someCallback()} isWidthLimited={() => someCallback()} />
  </>
);`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Page header tools item",
    description:
      "The `isSelected` prop has been removed from PageHeaderToolsItem.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/9774",
    repo: "React",
    fixedWithCodeMod: true,
    title: "pageHeaderToolsItem-remove-isSelected-prop",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { PageHeaderToolsItem } from "@patternfly/react-core/deprecated";

export const PageHeaderToolsItemRemoveIsSelectedPropInput = () => (
  <PageHeaderToolsItem isSelected />
);`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { PageHeaderToolsItem } from "@patternfly/react-core/deprecated";

export const PageHeaderToolsItemRemoveIsSelectedPropInput = () => (
  <PageHeaderToolsItem  />
);`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Page navigation",
    description:
      "The PageNavigation component has been removed from PatternFly.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10650",
    repo: "React",
    fixedWithCodeMod: true,
    title: "pageNavigation-remove-component",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { PageNavigation } from "@patternfly/react-core";

export const PageNavigationRemoveComponentInput = () => (
  <div>
    <PageNavigation />
    <div>Some adjacent content</div>
    <PageNavigation>
      <div>Some internal content</div>
    </PageNavigation>
  </div>
);

export { PageNavigation } from "@patternfly/react-core";
export { PageNavigation as CustomNav };
export default PageNavigation;`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { PageNavigation } from "@patternfly/react-core";

export const PageNavigationRemoveComponentInput = () => (
  <div>
    
    <div>Some adjacent content</div>
    
      <div>Some internal content</div>
    
  </div>
);`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Page",
    description: "We've renamed the `header` prop for Page to `masthead`.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10454",
    repo: "React",
    fixedWithCodeMod: true,
    title: "page-rename-header",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Page } from '@patternfly/react-core';

export const PageRenameHeaderInput = () => <Page header={<Masthead />} />;`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Page } from '@patternfly/react-core';

export const PageRenameHeaderInput = () => <Page masthead={<Masthead />} />;`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Page",
    description:
      "We've renamed the \`isTertiaryNavGrouped\` prop to \`isHorizontalSubnavGrouped\`.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/9948",
    repo: "React",
    fixedWithCodeMod: true,
    title: "page-rename-isTertiaryNavGrouped",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Page } from '@patternfly/react-core';

export const PageRenameIsTertiaryNavGroupedInput = () => (
  <Page isTertiaryNavGrouped />
);`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Page } from '@patternfly/react-core';

export const PageRenameIsTertiaryNavGroupedInput = () => (
  <Page isHorizontalSubnavGrouped />
);`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Page",
    description:
      "We've renamed the \`isTertiaryNavWidthLimited\` prop to \`isHorizontalSubnavWidthLimited\`.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/9948",
    repo: "React",
    fixedWithCodeMod: true,
    title: "page-rename-isTertiaryNavWidthLimited",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Page } from '@patternfly/react-core';

export const PageRenameIsTertiaryNavWidthLimitedInput = () => (
  <Page isTertiaryNavWidthLimited />
);`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Page } from '@patternfly/react-core';

export const PageRenameIsTertiaryNavWidthLimitedInput = () => (
  <Page isHorizontalSubnavWidthLimited />
);`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Page",
    description:
      "We've renamed the \`tertiaryNav\` prop to \`horizontalSubnav\`.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/9948",
    repo: "React",
    fixedWithCodeMod: true,
    title: "page-rename-tertiaryNav",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Page } from '@patternfly/react-core';

export const PageRenameTertiaryNavInput = () => <Page tertiaryNav />;`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Page } from '@patternfly/react-core';

export const PageRenameTertiaryNavInput = () => <Page horizontalSubnav />;`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Page section",
    description: 'The "nav" type for PageSection has been removed.',
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10650",
    repo: "React",
    fixedWithCodeMod: true,
    title: "pageSection-remove-nav-type",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { PageSection, PageSectionTypes } from "@patternfly/react-core";

const chosenType = PageSectionTypes.nav;

export const PageSectionRemoveNavTypeInput = () => (
  <>
    <PageSection type='nav' />
    <PageSection type={PageSectionTypes.nav} />
    <PageSection type={chosenType} />
  </>
);`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { PageSection, PageSectionTypes } from "@patternfly/react-core";

const chosenType = PageSectionTypes.nav;

export const PageSectionRemoveNavTypeInput = () => (
  <>
    <PageSection  />
    <PageSection  />
    <PageSection  />
  </>
);`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Page section",
    description:
      'The `variant` prop for PageSection now only accepts a value of "default" or "secondary". Codemods will remove the prop so it uses the default value of "default".',
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/9774 ",
    repo: "React",
    fixedWithCodeMod: true,
    title: "pageSection-update-variant-values",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { PageSection, PageSectionVariants } from "@patternfly/react-core";

export const PageSectionUpdateVariantValuesInput = () => (
  <>
    <PageSection variant='dark' />
    <PageSection variant={PageSectionVariants.dark} />
  </>
);`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { PageSection, PageSectionVariants } from "@patternfly/react-core";

export const PageSectionUpdateVariantValuesInput = () => (
  <>
    <PageSection  />
    <PageSection  />
  </>
);`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Page section",
    description:
      'Classes from the `variant` prop will now only be applied to PageSection when the `type` prop has a value of "default".',
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/9848",
    repo: "React",
    fixedWithCodeMod: false,
    title: "pageSection-warn-variantClasses-applied",
  },
  {
    component: "Page sidebar",
    description:
      "The `theme` prop has been removed from PageSidebar as theming is no longer handled React-side.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/9774",
    repo: "React",
    fixedWithCodeMod: true,
    title: "pageSidebar-remove-theme-prop",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { PageSidebar } from "@patternfly/react-core";

export const PageSidebarRemoveThemePropInput = () => (
  <PageSidebar theme='dark' />
);`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { PageSidebar } from "@patternfly/react-core";

export const PageSidebarRemoveThemePropInput = () => (
  <PageSidebar  />
);`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Page",
    description:
      "The markup for Page has changed. When either the `horizontalSubnav` or `breadcrumb` props are passed, a PageBody component will always wrap the contents.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10650",
    repo: "React",
    fixedWithCodeMod: false,
    title: "page-warn-updated-markup",
  },
  {
    component: "Pagination",
    description:
      "The markup for Pagination has changed. There is now a wrapper element rendered around the PaginationOptionsMenu toggle.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10662",
    repo: "React",
    fixedWithCodeMod: false,
    title: "pagination-warn-markup-changed",
  },
  {
    component: "Popper",
    description:
      "The default value of appendTo on Dropdown, Select, and Popper has been updated to `document.body`.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10675",
    repo: "React",
    fixedWithCodeMod: false,
    title: "popper-update-appendTo-default",

  },
  {
    component: "Deprecated components",
    description:
      "Some deprecated components have been removed from PatternFly",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10345",
    repo: "React",
    fixedWithCodeMod: false,
    title: "remove-deprecated-components",
    details: (
      <Content>
        <p>The following components have been removed and must be deprecated accordingly:</p>
        <ul>
          <li>
            <strong>Application Launcher:</strong> we recommmend using our
            <a href="/components/menus/custom-menus#application-launcher-menu" target="_blank">
              custom menu application launcher example
            </a>
          </li>
          <li>
            <strong>Context Selector:</strong> we recommmend using our
            <a href="/components/menus/custom-menus#context-selector-menu" target="_blank">
              custom menu context selector example
            </a>
          </li>
          <li>
            <strong>Dropdown:</strong> we recommend using either our current composable Dropdown or our Dropdown template implementation
          </li>
          <li>
            <strong>Options Menu:</strong> we recommend using either our current composable Select or our Select template implementation
          </li>
          <li>
            <strong>Page Header:</strong> we recommend using our Masthead and Toolbar components to build a page header
          </li>
          <li>
            <strong>Select:</strong> we recommend using either our current composable Select or our Select template implementation.
          </li>
        </ul>
      </Content>
    ),
  },
  {
    component: "Simple file upload",
    description:
      'The `aria-describedby` attribute was removed from the TextInput within the SimpleFileUpload, and the `id` attribute was removed from the "browse" button. Instead use the new `browseButtonAriaDescribedby` prop to provide a description to the browse button.',
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10026",
    repo: "React",
    fixedWithCodeMod: false,
    title: "simpleFileUpload-warn-changes",
    details: (
      <Content>
        <p>Additionally, we recommend using our FileUploadHelperText component as a child to the FileUpload, instead of using our FormHelperText (the previous recommendation).</p>
      </Content>
    ),
  },
  {
    component: "Slider step",
    description:
      "The `--pf-v6-c-slider__step--Left` CSS variable applied as an inline style has been updated to the `--pf-v6-c-slider__step--InsetInlineStart` CSS variable.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10378",
    repo: "React",
    fixedWithCodeMod: false,
    title: "sliderStep-warn-update-markup",
  },
  {
    component: "Switch",
    description:
      "The `labelOff` prop has been removed from Switch. The label for a Switch should not dynamically update based on the on/off state.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10646",
    repo: "React",
    fixedWithCodeMod: true,
    title: "switch-remove-labelOff",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Switch } from "@patternfly/react-core";

export const SwitchRemoveLabelOffInput = () => <Switch labelOff='Some label' />;`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Switch } from "@patternfly/react-core";

export const SwitchRemoveLabelOffInput = () => <Switch  />`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Tabs",
    description:
      "The `isSecondary` prop for Tabs has been renamed to \`isSubtab\`.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10044",
    repo: "React",
    fixedWithCodeMod: true,
    title: "tabs-renamed-isSecondary-prop",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Tabs } from "@patternfly/react-core";

export const TabsRenamedIsSecondaryPropInput = () => <Tabs isSecondary />;`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Tabs } from "@patternfly/react-core";

export const TabsRenamedIsSecondaryPropInput = () => <Tabs isSubtab />;`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Tabs",
    description:
      'The "light300" value for the `variant` prop on Tabs has been replaced with the "secondary" value.',
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/9930 ",
    repo: "React",
    fixedWithCodeMod: true,
    title: "tabs-replace-variant-light300",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Tabs } from "@patternfly/react-core";

export const TabsReplaceVariantLight300Input = () => (
  <Tabs variant='light300' />
);`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { Tabs } from "@patternfly/react-core";

export const TabsReplaceVariantLight300Input = () => (
  <Tabs variant="secondary" />
);`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Tabs",
    description:
      "The markup for the Tabs scroll buttons have been updated",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10044",
    repo: "React",
    fixedWithCodeMod: false,
    title: "tabs-update-markup",
    details: (
      <Content>
        <p>The markup for the Tabs scroll buttons have been updated in the following ways:</p>
        <ul>
          <li>Replaced the native `button` HTML element internally with our Button components</li>
          <li>Added a wrapper `div` around them- Removed styling when the `isSubtab` (previously `isSecondary`) prop is true</li>
        </ul>
      </Content>
    ),
  },
  {
    component: "Text",
    description:
      'We have replaced Text, TextContent, TextList and TextListItem with one Content component. Running this fix will change all of those components names to Content and add a "component" prop where necessary.',
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10643",
    repo: "React",
    fixedWithCodeMod: true,
    title: "text-replace-with-content",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import {
  Text,
  TextContent,
  TextList,
  TextListVariants,
  TextListItem,
  TextListItemVariants,
  TextProps,
  TextVariants,
} from "@patternfly/react-core";

export const TextReplaceWithContentInput = () => {
  interface Foo extends TextProps {}
  const foo = TextVariants.h1;
  const bar = TextListVariants.ul;
  const baz = TextListItemVariants.li;

  return (
    <>
      <Text component="h3">Abc</Text>
      <Text>Abc</Text>
      <TextContent>Abc</TextContent>
      <TextContent>
        <Text>Some text</Text>
      </TextContent>
      <TextContent isVisited>Abc</TextContent>
      <TextList>Abc</TextList>
      <TextList isPlain>Abc</TextList>
      <TextList component="ol">Abc</TextList>
      <TextListItem>Abc</TextListItem>
      <TextListItem component="dt">Abc</TextListItem>
      <TextListItem component={TextVariants.dt}>Abc</TextListItem>
      <TextList>
        <TextListItem>A</TextListItem>
        <TextListItem>B</TextListItem>
        <TextListItem>C</TextListItem>
      </TextList>
    </>
  );
};`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import {
  Content,
  Content,
  Content,
  ContentVariants,
  Content,
  ContentVariants,
  ContentProps,
  ContentVariants,
} from "@patternfly/react-core";

export const TextReplaceWithContentInput = () => {
  interface Foo extends ContentProps {}
  const foo = ContentVariants.h1;
  const bar = ContentVariants.ul;
  const baz = ContentVariants.li;

  return (
    <>
      <Content component="h3">Abc</Content>
      <Content component="p">Abc</Content>
      <Content>Abc</Content>
      <Content>
        <Content component="p">Some text</Content>
      </Content>
      <Content isVisitedLink>Abc</Content>
      <Content component="ul">Abc</Content>
      <Content component="ul" isPlainList>Abc</Content>
      <Content component="ol">Abc</Content>
      <Content component="li">Abc</Content>
      <Content component="dt">Abc</Content>
      <Content component={ContentVariants.dt}>Abc</Content>
      <Content component="ul">
        <Content component="li">A</Content>
        <Content component="li">B</Content>
        <Content component="li">C</Content>
      </Content>
    </>
  );
};`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Th",
    description:
      "The `--pf-v6-c-table__sticky-cell--Left` and `--pf-v6-c-table__sticky-cell--Right` CSS variables applied as inline styles when `isStickyColumn` is true have been updated to `--pf-v6-c-table__sticky-cell--InsetInlineStart` and `--pf-v6-c-table__sticky-cell--InsetInlineEnd`, respectively.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10378",
    repo: "React",
    fixedWithCodeMod: false,
    title: "Th-Td-warn-update-markup",
  },
  {
    component: "Tokens",
    description:
      "React tokens, whose value is a Patternfly token variable (with prefix --pf-t), are now prefixed with t_",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/11002",    repo: "React",
    fixedWithCodeMod: true,
    title: "tokens-warn",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import color_green_10 from "@patternfly/react-tokens/dist/esm/color_green_10";
color_green_10;`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import t_color_green_10 from "@patternfly/react-tokens/dist/esm/t_color_green_10";
t_color_green_10;`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Tokens",
    description:
      "We have updated our CSS tokens. About half of our tokens have been replaced with newer ones. \n\n- this rule provides an autofix for global non color tokens\n- global color tokens will be replaced with a temporary hot pink color token **that must be manually replaced** (`t_temp_dev_tbd` react token or `--pf-t--temp--dev--tbd` CSS variable)\n- other non-global (component or chart) tokens need to be replaced manually\n\nTo find a suitable replacement token, check our [v6 token documentation](/tokens/all-patternfly-tokens).",
    repo: "React",
    fixedWithCodeMod: true,
    title: "tokens-update",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`// replacements (fixable with --fix)
import global_BorderWidth_lg from "@patternfly/react-tokens/dist/esm/global_BorderWidth_lg";
import { global_FontWeight_normal } from "@patternfly/react-tokens";
global_BorderWidth_lg;
global_FontWeight_normal;
document.documentElement.style.setProperty("--pf-v5-global--ZIndex--lg", "3");
<div
  style={{
    borderWidth: "var(--pf-v5-global--BorderWidth--lg)",
    boxShadow: "var(--pf-v5-global--BoxShadow--sm)",
    marginTop: "var(--pf-v5-global--spacer--3xl)",
  }}
></div>;
  
// warnings (not fixable)
import c_badge_PaddingLeft from "@patternfly/react-tokens/dist/esm/c_badge_PaddingLeft";
import { c_alert__FontSize } from "@patternfly/react-tokens";
c_badge_PaddingLeft;
c_alert__FontSize;
<>
  <div
    style={{
      fontSize: "var(--pf-v5-c-alert__FontSize)",
      width: "var(--pf-v5-global--arrow--width)",
    }}
  ></div>;

// Colors
import global_Color_100 from "@patternfly/react-tokens/dist/esm/global_Color_100";
import { global_Color_200 } from "@patternfly/react-tokens/dist/esm/global_Color_200";
import { global_Color_300 as color300 } from "@patternfly/react-tokens/dist/esm/global_Color_300";
import { global_BorderColor_100 } from "@patternfly/react-tokens";

global_Color_100;
global_Color_200;
color300;
global_BorderColor_100;

<div
  style={{
    color: "var(--pf-v5-global--Color--100)",
    backgroundColor: "var(--pf-v5-global--Color--200)",
  }}
></div>;`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`// replacements (fixable with --fix)
import global_border_width_extra_strong from "@patternfly/react-tokens/dist/esm/global_border_width_extra_strong";
import { global_font_weight_body_default } from "@patternfly/react-tokens";

global_border_width_extra_strong;
global_font_weight_body_default;

document.documentElement.style.setProperty("--pf-t--global--z-index--lg", "3");
<div
  style={{
    borderWidth: "var(--pf-t--global--border--width--extra-strong)",
    boxShadow: "var(--pf-t--global--box-shadow--sm)",
    marginTop: "var(--pf-t--global--spacer--3xl)",
  }}
></div>;
  
// warnings (not fixable)
import c_badge_PaddingLeft from "@patternfly/react-tokens/dist/esm/c_badge_PaddingLeft";
import { c_alert__FontSize } from "@patternfly/react-tokens";

c_badge_PaddingLeft;
c_alert__FontSize;

<div
  style={{
    fontSize: "var(--pf-v5-c-alert__FontSize)",
    width: "var(--pf-v5-global--arrow--width)",
  }}
></div>;
  
// Colors
import global_Color_100/* CODEMODS: you should update this color token */ from "@patternfly/react-tokens/dist/esm/t_temp_dev_tbd";
import { t_temp_dev_tbd as global_Color_200 /* CODEMODS: you should update this color token */ } from "@patternfly/react-tokens/dist/esm/t_temp_dev_tbd";
import { t_temp_dev_tbd as color300 /* CODEMODS: you should update this color token, original v5 token was global_Color_300 */ } from "@patternfly/react-tokens/dist/esm/t_temp_dev_tbd";
import { t_temp_dev_tbd as global_BorderColor_100 /* CODEMODS: you should update this color token */ } from "@patternfly/react-tokens";

global_Color_100;
global_Color_200;
color300;
global_BorderColor_100;

<div
  style={{
    color: "var(--pf-t--temp--dev--tbd)"/* CODEMODS: original v5 color was --pf-v5-global--Color--100 */,
    backgroundColor: "var(--pf-t--temp--dev--tbd)"/* CODEMODS: original v5 color was --pf-v5-global--Color--200 */,
  }}
></div>;`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Toolbar chip group content",
    description:
      "The ToolbarChipGroupContent component has been renamed to ToolbarLabelGroupContent.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10649",
    repo: "React",
    fixedWithCodeMod: true,
    title: "toolbarChipGroupContent-rename-component",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { ToolbarChipGroupContent } from "@patternfly/react-core";

const Component = ToolbarChipGroupContent;
export const ToolbarChipGroupContentRenameComponentInput = () => (
  <>
    <ToolbarChipGroupContent></ToolbarChipGroupContent>
    <ToolbarChipGroupContent />
    <Component />
  </>
);

export { ToolbarChipGroupContent as CustomThing };`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { ToolbarLabelGroupContent } from "@patternfly/react-core";

const Component = ToolbarLabelGroupContent;
export const ToolbarChipGroupContentRenameComponentInput = () => (
  <>
    <ToolbarLabelGroupContent></ToolbarLabelGroupContent>
    <ToolbarLabelGroupContent />
    <Component />
  </>
);

export { ToolbarLabelGroupContent as CustomThing };`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Toolbar group",
    description:
      "The `variant` prop of ToolbarGroup and ToolbarToggleGroup had some options renamed.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10674",
    repo: "React",
    fixedWithCodeMod: true,
    title: "toolbarGroup-updated-variant",
    details: (
      <Content>
        <p>The `variant` prop of ToolbarGroup and ToolbarToggleGroup had these options renamed:</p>
        <ul>
          <li>button-group --> action-group</li>
          <li>icon-button-group --> action-group-plain</li>
        </ul>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import {
  ToolbarGroup,
  ToolbarToggleGroup,
  ToolbarGroupVariant,
} from "@patternfly/react-core";

export const ToolbarGroupUpdatedVariantInput = () => (
  <>
    <ToolbarGroup variant='button-group' />
    <ToolbarGroup variant={ToolbarGroupVariant["icon-button-group"]} />
    <ToolbarToggleGroup variant='icon-button-group' />
    <ToolbarToggleGroup variant={ToolbarGroupVariant["button-group"]} />
  </>
);`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import {
  ToolbarGroup,
  ToolbarToggleGroup,
  ToolbarGroupVariant,
} from "@patternfly/react-core";

export const ToolbarGroupUpdatedVariantInput = () => (
  <>
    <ToolbarGroup variant="action-group" />
    <ToolbarGroup variant={ToolbarGroupVariant["action-group-plain"]} />
    <ToolbarToggleGroup variant="action-group-plain" />
    <ToolbarToggleGroup variant={ToolbarGroupVariant["action-group"]} />
  </>
);`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Toolbar item",
    description:
      'The variant prop for ToolbarItem has been updated: "bulk-select", "overflow-menu" and "search-filter" were removed and "chip-group" was renamed to "label-group".',
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10649",
    repo: "React",
    fixedWithCodeMod: true,
    title: "toolbarItem-variant-prop-updates",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { ToolbarItem } from "@patternfly/react-core";

export const ToolbarItemVariantPropUpdatesInput = () => (
  <>
    <ToolbarItem variant="chip-group" />
    <ToolbarItem variant="bulk-select" />
    <ToolbarItem variant="overflow-menu" />
    <ToolbarItem variant="search-filter" />
  </>
);`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { ToolbarItem } from "@patternfly/react-core";

export const ToolbarItemVariantPropUpdatesInput = () => (
  <>
    <ToolbarItem variant="label-group" />
    <ToolbarItem  />
    <ToolbarItem  />
    <ToolbarItem  />
  </>
);`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Toolbar label group content",
    description:
      "The markup for ToolbarLabelGruopContent (formerly ToolbarChipGroupContent) has changed when the `numberOfFilters` value is greater than 0, when the `showClearFiltersButton` prop is true, or when the `customLabelGroupContent` prop is passed.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10674",
    repo: "React",
    fixedWithCodeMod: false,
    title: "toolbarLabelGroupContent-updated-markup",
  },
  {
    component: "Toolbar",
    description: "A number of props have been removed from Toolbar components",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10674",
    repo: "React",
    fixedWithCodeMod: true,
    title: "toolbar-remove-props",
    details: (
      <Content>
        <p>The following props have been removed from Toolbar components:</p>
        <ul>
          <li><strong>Toolbar:</strong> usePageInsets</li>
          <li><strong>ToolbarContent:</strong> alignSelf</li>
          <li><strong>ToolbarItem:</strong> widths</li>
          <li><strong>ToolbarToggleGroup:</strong> alignment</li>
        </ul>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import {
  Toolbar,
  ToolbarContent,
  ToolbarItem,
  ToolbarToggleGroup,
} from "@patternfly/react-core";

export const ToolbarRemovePropsInput = () => (
  <>
    <Toolbar usePageInsets />
    <ToolbarContent alignSelf={{}} />
    <ToolbarItem widths={{}} />
    <ToolbarToggleGroup alignment={{}} />
  </>
);`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import {
  Toolbar,
  ToolbarContent,
  ToolbarItem,
  ToolbarToggleGroup,
} from "@patternfly/react-core";

export const ToolbarRemovePropsInput = () => (
  <>
    <Toolbar  />
    <ToolbarContent  />
    <ToolbarItem  />
    <ToolbarToggleGroup  />
  </>
);`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Toolbar",
    description:
      "Several Chip-based props have been renamed on our Toolbar components",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10649",
    repo: "React",
    fixedWithCodeMod: true,
    title: "toolbar-replace-chip-instances",
    details: (
      <Content>
        <p>The following Chip-based props have been renamed on our Toolbar components:</p>
        <ul>
          <li>{`<Toolbar>`}: The `customChipGroupContent` prop has been renamed to `customLabelGroupContent`</li>
          <li>{`<ToolbarExpandableContent>`}: The `chipContainerRef` prop has been renamed to `labelContainerRef`</li>
          <li>{`<ToolbarFilter>`}: The `chips` prop has been renamed to `labels`</li>
          <li>{`<ToolbarFilter>`}: The `deleteChipGroup` prop has been renamed to `deleteLabelGroup`</li>
          <li>{`<ToolbarFilter>`}: The `deleteChip` prop has been renamed to `deleteLabel`</li>
          <li>{`<ToolbarFilter>`}: The `chipGroupExpandedText` prop has been renamed to `labelGroupExpandedText`</li>
          <li>{`<ToolbarFilter>`}: The `chipGroupCollapsedText` prop has been renamed to `labelGroupCollapsedText`</li>
          <li>{`<ToolbarFilter>`}: The `expandableChipContainerRef` prop has been renamed to `expandableLabelContainerRef`</li>
          <li>{`<ToolbarChipGroupContent>`}: The `chipGroupContentRef` prop has been renamed to `labelGroupContentRef`</li>
          <li>{`<ToolbarChipGroupContent>`}: The `customChipGroupContent` prop has been renamed to `customLabelGroupContent`</li>
          <li>{`<ToolbarToggleGroup>`}: The `chipContainerRef` prop has been renamed to `labelContainerRef`</li>
        </ul>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import {
  Toolbar,
  ToolbarExpandableContent,
  ToolbarFilter,
  ToolbarChipGroupContent,
  ToolbarToggleGroup,
} from "@patternfly/react-core";

export const ToolbarReplaceChipInstancesInput = () => (
  <>
    <Toolbar customChipGroupContent />
    <ToolbarExpandableContent chipContainerRef />
    <ToolbarFilter
      chips
      deleteChipGroup
      deleteChip
      chipGroupExpandedText
      chipGroupCollapsedText
      expandableChipContainerRef
    />
    <ToolbarChipGroupContent chipGroupContentRef customChipGroupContent />
    <ToolbarToggleGroup chipContainerRef />
  </>
);`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import {
  Toolbar,
  ToolbarExpandableContent,
  ToolbarFilter,
  ToolbarChipGroupContent,
  ToolbarToggleGroup,
} from "@patternfly/react-core";

export const ToolbarReplaceChipInstancesInput = () => (
  <>
    <Toolbar customLabelGroupContent />
    <ToolbarExpandableContent labelContainerRef />
    <ToolbarFilter
      labels
      deleteLabelGroup
      deleteLabel
      labelGroupExpandedText
      labelGroupCollapsedText
      expandableLabelContainerRef
    />
    <ToolbarChipGroupContent labelGroupContentRef customLabelGroupContent />
    <ToolbarToggleGroup labelContainerRef />
  </>
);`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Toolbar",
    description:
      "Some Toolbar interfaces / components have been renamed",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10649",
    repo: "React",
    fixedWithCodeMod: true,
    title: "toolbar-rename-interfaces",
    details: (
      <Content>
        <p>The following Toolbar interfaces have been renamed</p>
        <ul>
          <li>ToolbarChipGroupContentProps --> ToolbarLabelGroupContentProps</li>
          <li>ToolbarChipGroup --> ToolbarLabelGroup</li>
          <li>ToolbarChip --> ToolbarLabel</li>
        </ul>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import {
  ToolbarChipGroup,
  ToolbarChipGroupContentProps as CustomGroupContent,
  ToolbarChip,
} from "@patternfly/react-core";

interface MyInterface extends ToolbarChip {}
let typedThing: ToolbarChipGroup;

export {
  ToolbarChipGroup as CustomGroup,
  CustomGroupContent,
  ToolbarChip as CustomThing,
};`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import {
  ToolbarLabelGroup,
  ToolbarLabelGroupContentProps as CustomGroupContent,
  ToolbarLabel,
} from "@patternfly/react-core";

interface MyInterface extends ToolbarLabel {}
let typedThing: ToolbarLabelGroup;

export {
  ToolbarLabelGroup as CustomGroup,
  CustomGroupContent,
  ToolbarLabel as CustomThing,
};`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Toolbar",
    description:
      "The `spacer` property has been removed from ToolbarGroup, ToolbarItem, and ToolbarToggleGroup. We recommend instead using our new `gap`, `columnGap`, or `rowGap` properties.Additionally, the `spaceItems` property has been removed from ToolbarGroup and ToolbarToggleGroup.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10418",
    repo: "React",
    fixedWithCodeMod: true,
    title: "toolbar-replaced-spacer-spaceItems",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import {
  ToolbarGroup,
  ToolbarItem,
  ToolbarToggleGroup,
} from "@patternfly/react-core";

export const ToolbarReplacedSpacerSpaceItemsInput = () => (
  <>
    <ToolbarGroup
      spacer={{ default: "spacerNone", md: "spacerSm", lg: "spacerMd" }}
      spaceItems={{
        default: "spaceItemsNone",
        md: "spaceItemsSm",
        lg: "spaceItemsMd",
      }}
    />
    <ToolbarItem
      spacer={{ default: "spacerNone", md: "spacerSm", lg: "spacerMd" }}
    />
    <ToolbarToggleGroup
      spacer={{ default: "spacerNone", md: "spacerSm", lg: "spacerMd" }}
      spaceItems={{
        default: "spaceItemsNone",
        md: "spaceItemsSm",
        lg: "spaceItemsMd",
      }}
    />
  </>
);`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import {
  ToolbarGroup,
  ToolbarItem,
  ToolbarToggleGroup,
} from "@patternfly/react-core";

export const ToolbarReplacedSpacerSpaceItemsInput = () => (
  <>
    <ToolbarGroup
      gap={{ default: "gapNone", md: "gapSm", lg: "gapMd" }}

    />
    <ToolbarItem
      gap={{ default: "gapNone", md: "gapSm", lg: "gapMd" }}
    />
    <ToolbarToggleGroup
      gap={{ default: "gapNone", md: "gapSm", lg: "gapMd" }}

    />
  </>
);`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Toolbar",
    description:
      'The values for the `align` property on ToolbarGroup and ToolbarItem, and the `alignment` property on ToolbarToggleGroup, have been updated from "alignLeft" and "alignRight" to "alignStart" and "alignEnd", respectively.',
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10366",
    repo: "React",
    fixedWithCodeMod: true,
    title: "toolbar-update-align-values",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import {
  ToolbarGroup,
  ToolbarItem,
  ToolbarToggleGroup,
} from "@patternfly/react-core";

export const ToolbarUpdateAlignValuesInput = () => (
  <>
    <ToolbarGroup
      align={{
        default: "alignLeft",
        md: "alignRight",
        lg: "alignLeft",
        xl: "alignRight",
        "2xl": "alignLeft",
      }}
    />
    <ToolbarItem
      align={{
        default: "alignLeft",
        md: "alignRight",
        lg: "alignLeft",
        xl: "alignRight",
        "2xl": "alignLeft",
      }}
    />
    <ToolbarToggleGroup
      alignment={{
        default: "alignLeft",
        md: "alignRight",
        lg: "alignLeft",
        xl: "alignRight",
        "2xl": "alignLeft",
      }}
    />
  </>
);`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import {
  ToolbarGroup,
  ToolbarItem,
  ToolbarToggleGroup,
} from "@patternfly/react-core";

export const ToolbarUpdateAlignValuesInput = () => (
  <>
    <ToolbarGroup
      align={{
        default: "alignStart",
        md: "alignEnd",
        lg: "alignStart",
        xl: "alignEnd",
        "2xl": "alignStart",
      }}
    />
    <ToolbarItem
      align={{
        default: "alignStart",
        md: "alignEnd",
        lg: "alignStart",
        xl: "alignEnd",
        "2xl": "alignStart",
      }}
    />
    <ToolbarToggleGroup
      alignment={{
        default: "alignStart",
        md: "alignEnd",
        lg: "alignStart",
        xl: "alignEnd",
        "2xl": "alignStart",
      }}
    />
  </>
);`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
  {
    component: "Tree view",
    description:
      "Selectable styling attribute (`pf-m-selectable`) has been removed on the list items of the TreeView component. You should update selectors, tests and snapshot tests which are relying on the `pf-m-selectable` class.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10101",
    repo: "React",
    fixedWithCodeMod: false,
    title: "treeView-warn-selectable-styling-modifier-removed",
  },
  {
    component: "Wizard footer",
    description:
      "The default WizardFooter now uses an ActionList wrapped around our Button components, rather than just our Button components.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10378",
    repo: "React",
    fixedWithCodeMod: false,
    title: "wizardFooter-warn-update-markup",
  },
  {
    component: "Wizard nav item",
    description:
      'There is now a wrapper element with class `pf-v6-c-wizard__nav-link-main` rendered around the nav item content. Additionally, when the nav item has a status of "error" the icon will be rendered before the item content, and the WizardToggle will also now render an error icon.',
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10378",
    repo: "React",
    fixedWithCodeMod: false,
    title: "wizardNavItem-warn-update-markup",
  },
  {
    component: "Wizard step",
    description:
      'The `body` prop on WizardStep no longer accepts a value of "null".',
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/10637",
    repo: "React",
    fixedWithCodeMod: true,
    title: "wizardStep-updated-body-typing",
    details: (
      <Content>
        <p>Codemods will make the following updates:</p>
        <h2>Example in</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { WizardStep } from "@patternfly/react-core";

export const WizardStepUpdatedBodyTypingInput = () => (
  <WizardStep body={null} />
);`}
          </CodeBlockCode>
        </CodeBlock>
        <h2>Example out</h2>
        <CodeBlock>
          <CodeBlockCode>
            {`import { WizardStep } from "@patternfly/react-core";

export const WizardStepUpdatedBodyTypingInput = () => (
  <WizardStep  />
);`}
          </CodeBlockCode>
        </CodeBlock>
      </Content>
    ),
  },
];
