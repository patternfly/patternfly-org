import React from "react";
import { CodeBlock, CodeBlockCode, TextContent, Text, TextList, TextListItem, TextVariants } from '@patternfly/react-core';

export const releaseNotes = [
  {
    component: "Card",
    description: "Updated design for selectable and clickable cards",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5409",
    repo: "html/css",
    fixedWithCodeMod: false
  }, {
    component: "Card",
    description: "Refactored the card header code to be more flexible and improves the visual appearance of card header items\n",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5280",
    repo: "html/css",
    fixedWithCodeMod: false
  }, {
    component: "Card",
    description: "Refactored the card title to be more flexible, and changes the default card title font weight to normal",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5363",
    repo: "html/css",
    fixedWithCodeMod: false
  }, {
    component: "Card",
    description: "Deprecated various props",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/9092",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>The following props have been deprecated on card:</Text>
        <TextList>
          <TextListItem>isSelectableRaised</TextListItem>
          <TextListItem>isDisabledRaised</TextListItem>
          <TextListItem>hasSelectableInput</TextListItem>
          <TextListItem>selectableInputAriaLabel</TextListItem>
          <TextListItem>selectableInputAriaLabel</TextListItem>
        </TextList>
        <Text component={TextVariants.p}>
          We recommend using our new implementation of clickable and selectable cards instead. Code mods will raise a warning, but can provide fixes when using the isSelectableRaised or isDisabledRaised props.
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
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Card",
    description: "Removed the deprecated isHoverable prop from Card",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8196",
    repo: "react",
    fixedWithCodeMod: true,
    details:(
      <TextContent>
        <Text component={TextVariants.p}>Code mods will make the following updates.</Text>
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
    description: "Reordered onSelectableInputChange event params",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8752",
    repo: "react",
    fixedWithCodeMod: true,
    details:(
      <TextContent>
        <Text component={TextVariants.p}>Code mods will make the following updates.</Text>
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
    description: "Updated the internal default value of the component prop from 'article' to 'div'.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8601",
    repo: "react",
    fixedWithCodeMod: false
  }, {
    component: "Card",
    description: "CardHeaderMain and CardActions are no longer exported from PatternFly, and are instead rendered internally within the CardHeader sub-component. Any CardHeaderMain content and CardActions content or props should be passed directly to CardHeader instead.",
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8759",
    repo: "react",
    fixedWithCodeMod: true,
    details: (
      <TextContent>
        <Text component={TextVariants.p}>Code mods will make the following updates.</Text>
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
  }
];
