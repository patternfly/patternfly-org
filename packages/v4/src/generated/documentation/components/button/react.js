import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import { TimesIcon, PlusCircleIcon, ExternalLinkSquareAltIcon, CopyIcon, ArrowRightIcon } from '@patternfly/react-icons';

export const DocumentationComponentsButtonReactDocs = {
  "slug": "/documentation/components/button/react",
  "source": "react",
  "propComponents": [
    "Button"
  ],
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/master/packages/react-core/src/components/Button/examples/Button.md",
  "section": "components",
  "id": "Button",
  "title": "Button",
  "toc": [
    "Examples"
  ],
  "cssPrefix": "pf-c-button"
};
DocumentationComponentsButtonReactDocs.liveContext = {
  TimesIcon,
  PlusCircleIcon,
  ExternalLinkSquareAltIcon,
  CopyIcon,
  ArrowRightIcon
};
DocumentationComponentsButtonReactDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsButtonReactDocs} {...{"code":"import React from 'react';\nimport { Button } from '@patternfly/react-core';\nimport { TimesIcon, PlusCircleIcon, ExternalLinkSquareAltIcon, CopyIcon } from '@patternfly/react-icons';\n\nButtonVariants = () => (\n  <React.Fragment>\n    <Button variant=\"primary\">Primary</Button> <Button variant=\"secondary\">Secondary</Button>{' '}\n    <Button variant=\"tertiary\">Tertiary</Button> <Button variant=\"danger\">Danger</Button><br /><br />\n    <Button variant=\"link\" icon={<PlusCircleIcon />}>\n      Link\n    </Button>{' '}\n    <Button variant=\"link\" icon={<ExternalLinkSquareAltIcon />} iconPosition=\"right\">\n      Link\n    </Button>\n    <Button variant=\"link\" isInline>\n      Inline link\n    </Button><br /><br />\n    <Button variant=\"plain\" aria-label=\"Action\">\n      <TimesIcon />\n    </Button><br /><br />\n    <Button variant=\"control\">Control</Button>{' '}\n    <Button variant=\"control\" aria-label=\"Copy\">\n      <CopyIcon />\n    </Button>\n  </React.Fragment>\n);","title":"Variations","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsButtonReactDocs} {...{"code":"import React from 'react';\nimport { Button } from '@patternfly/react-core';\nimport { TimesIcon, PlusCircleIcon, Tooltip } from '@patternfly/react-icons';\n\nDisabledBtn = () => (\n  <React.Fragment>\n    <Button isDisabled>\n      Primary disabled\n    </Button>{' '}\n    <Button isDisabled>\n      Secondary disabled\n    </Button>{' '}\n    <Button isDisabled variant=\"tertiary\">Tertiary disabled</Button>{' '}\n    <Button isDisabled variant=\"danger\">Danger disabled</Button><br /><br />\n    <Button isDisabled variant=\"link\" icon={<PlusCircleIcon />}>\n      Link disabled\n    </Button>{' '}\n    <Button isDisabled variant=\"link\" isInline>\n      Inline link disabled\n    </Button>{' '}\n    <Button isDisabled variant=\"plain\" aria-label=\"Action\">\n      <TimesIcon />\n    </Button>{' '}\n    <Button isDisabled variant=\"control\">Control disabled</Button>\n  </React.Fragment>\n);","title":"Disabled","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsButtonReactDocs} {...{"code":"import React from 'react';\nimport { Button } from '@patternfly/react-core';\nimport { TimesIcon, PlusCircleIcon, Tooltip } from '@patternfly/react-icons';\n\nAriaDisabledBtn = () => (\n  <React.Fragment>\n    <Button isAriaDisabled>\n      Primary aria disabled\n    </Button>{' '}\n    <Button isAriaDisabled>\n      Secondary aria disabled\n    </Button>{' '}\n    <Button isAriaDisabled variant=\"tertiary\">Tertiary aria disabled</Button>{' '}\n    <Button isAriaDisabled variant=\"danger\">Danger aria disabled</Button><br /><br />\n    <Button isAriaDisabled variant=\"link\" icon={<PlusCircleIcon />}>\n      Link aria disabled\n    </Button>{' '}\n    <Button isAriaDisabled variant=\"link\" isInline>\n      Inline link aria disabled\n    </Button>{' '}\n    <Button isAriaDisabled variant=\"plain\" aria-label=\"Action\">\n      <TimesIcon />\n    </Button>{' '}\n    <Button isAriaDisabled variant=\"control\">Control aria disabled</Button>\n  </React.Fragment>\n);","title":"Aria disabled","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsButtonReactDocs} {...{"code":"import React from 'react';\nimport { Button } from '@patternfly/react-core';\nimport { TimesIcon, PlusCircleIcon, Tooltip } from '@patternfly/react-icons';\n\nAriaDisabledBtnWithTooltip = () => (\n  <Tooltip content=\"Aria-disabled buttons are like disabled buttons, but focusable. Allows for tooltip support.\">\n    <Button isAriaDisabled variant=\"secondary\">\n      Secondary button to core docs\n    </Button>\n  </Tooltip>\n);","title":"Aria disabled button with tooltip","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsButtonReactDocs} {...{"code":"import React from 'react';\nimport { Button } from '@patternfly/react-core';\nimport { TimesIcon, PlusCircleIcon, Tooltip } from '@patternfly/react-icons';\n\nAriaDisabledLinkBtnWithTooltip = () => (\n  <Tooltip content=\"Aria-disabled link as button with tooltip\">\n    <Button component=\"a\" isAriaDisabled href=\"https://pf4.patternfly.org/\" target=\"_blank\" variant=\"tertiary\">\n      Tertiary link as button to core docs\n    </Button>\n  </Tooltip>\n);","title":"Aria disabled link as button with tooltip","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsButtonReactDocs} {...{"code":"import React from 'react';\nimport { Button } from '@patternfly/react-core';\n\nLinkButton = () => (\n  <React.Fragment>\n    <Button component=\"a\" href=\"https://pf4.patternfly.org/\" target=\"_blank\" variant=\"primary\">\n      Link to core docs\n    </Button>{' '}\n    <Button component=\"a\" href=\"https://pf4.patternfly.org/\" target=\"_blank\" variant=\"secondary\">\n      Secondary link to core docs\n    </Button>{' '}\n    <Button isDisabled component=\"a\" href=\"https://pf4.patternfly.org/\" target=\"_blank\" variant=\"tertiary\">\n      Tertiary link to core docs\n    </Button>{' '}\n    <Button component=\"a\" href=\"https://pf4.patternfly.org/contribution/#modifiers\" variant=\"link\">\n      Jump to modifiers in contribution guidelines\n    </Button>\n  </React.Fragment>\n);","title":"Links as button","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsButtonReactDocs} {...{"code":"import React from 'react';\nimport { Button } from '@patternfly/react-core';\nimport { TimesIcon } from '@patternfly/react-icons';\n\nBlockButton = () => <Button isBlock>Block level button</Button>;","title":"Block level","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsButtonReactDocs} {...{"code":"import React from 'react';\nimport { Button } from '@patternfly/react-core';\n\nButtonTypes = () => (\n  <React.Fragment>\n    <Button type=\"submit\">Submit</Button>{' '}\n    <Button type=\"reset\">Reset</Button>{' '}\n    <Button>Default</Button>\n  </React.Fragment>\n);","title":"Types","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsButtonReactDocs} {...{"code":"import React from 'react';\nimport { Button } from '@patternfly/react-core';\n\nButtonSmallVariants = () => (\n  <React.Fragment>\n    <Button variant=\"primary\" isSmall>Primary</Button>{' '}\n    <Button variant=\"secondary\" isSmall>Secondary</Button>{' '}\n    <Button variant=\"tertiary\" isSmall>Tertiary</Button>{' '}\n    <Button variant=\"danger\" isSmall>Danger</Button>\n    <br /><br />\n  </React.Fragment>\n);","title":"Small","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsButtonReactDocs} {...{"code":"import React from 'react';\nimport { Button } from '@patternfly/react-core';\nimport { ArrowRightIcon } from '@patternfly/react-icons';\n\nButtonCTAVariants = () => (\n  <React.Fragment>\n    <Button variant=\"primary\" isLarge>Call to action</Button>{' '}\n    <Button variant=\"secondary\" isLarge>Call to action</Button>{' '}\n    <Button variant=\"tertiary\" isLarge>Call to action</Button>{' '}\n    <Button variant=\"link\" isLarge>Call to action <ArrowRightIcon/></Button>\n    <br /><br />\n  </React.Fragment>\n);","title":"Call to action","lang":"js"}}>
    </Example>
  </React.Fragment>
);
DocumentationComponentsButtonReactDocs.Component.displayName = 'DocumentationComponentsButtonReactDocs';
