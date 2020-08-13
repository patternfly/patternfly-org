import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsClipboardCopyReactDocs = {
  "slug": "/documentation/components/clipboard-copy/react",
  "source": "react",
  "propComponents": [
    "ClipboardCopy"
  ],
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/master/packages/react-core/src/components/ClipboardCopy/examples/ClipboardCopy.md",
  "section": "components",
  "id": "Clipboard copy",
  "title": "Clipboard copy",
  "toc": [
    "Examples"
  ],
  "cssPrefix": "pf-c-copyclipboard"
};
DocumentationComponentsClipboardCopyReactDocs.liveContext = {
  
};
DocumentationComponentsClipboardCopyReactDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsClipboardCopyReactDocs} {...{"code":"import React from 'react';\nimport { ClipboardCopy } from '@patternfly/react-core';\n\n<ClipboardCopy>This is editable</ClipboardCopy>;","title":"Basic","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsClipboardCopyReactDocs} {...{"code":"import React from 'react';\nimport { ClipboardCopy } from '@patternfly/react-core';\n\n<ClipboardCopy isReadOnly>This is read-only</ClipboardCopy>;","title":"Read Only","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsClipboardCopyReactDocs} {...{"code":"import React from 'react';\nimport { ClipboardCopy, ClipboardCopyVariant } from '@patternfly/react-core';\n\n<ClipboardCopy variant={ClipboardCopyVariant.expansion}>\n  Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting\n  expansion.\n</ClipboardCopy>","title":"Expanded","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsClipboardCopyReactDocs} {...{"code":"import React from 'react';\nimport { ClipboardCopy, ClipboardCopyVariant } from '@patternfly/react-core';\n\n<ClipboardCopy isReadOnly variant={ClipboardCopyVariant.expansion}>\n  Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting\n  expansion.\n</ClipboardCopy>","title":"Read only expanded","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsClipboardCopyReactDocs} {...{"code":"import React from 'react';\nimport { ClipboardCopy, ClipboardCopyVariant } from '@patternfly/react-core';\n\n<ClipboardCopy isReadOnly isExpanded variant={ClipboardCopyVariant.expansion}>\n  Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting\n  expansion.\n</ClipboardCopy>","title":"Read only expanded by default","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsClipboardCopyReactDocs} {...{"code":"import React from 'react';\nimport { ClipboardCopy, ClipboardCopyVariant } from '@patternfly/react-core';\n\nClipboardCopyArrayOfElements = () => {\n  let text = [\n    \"Got a lot of text here,\" ,\n    \"need to see all of it?\" ,\n    \"Click that arrow on the left side and check out the resulting expansion.\"\n  ]\n  return <ClipboardCopy variant={ClipboardCopyVariant.expansion}>\n    {text.join(\" \")}\n  </ClipboardCopy>\n}","title":"Expanded with array","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsClipboardCopyReactDocs} {...{"code":"import React from 'react';\nimport { ClipboardCopy, ClipboardCopyVariant } from '@patternfly/react-core';\n\n<ClipboardCopy isCode variant={ClipboardCopyVariant.expansion}>\n  \n\n{ `{ \"menu\": {\n  \"id\": \"file\",\n  \"value\": \"File\",\n  \"popup\": {\n    \"menuitem\": [\n      {\"value\": \"New\", \"onclick\": \"CreateNewDoc()\"},\n      {\"value\": \"Open\", \"onclick\": \"OpenDoc()\"},\n      {\"value\": \"Close\", \"onclick\": \"CloseDoc()\"}\n    ]\n  }\n}} `}\n  \n</ClipboardCopy>","title":"JSON object (wrap code with pre)","lang":"js"}}>
    </Example>
  </React.Fragment>
);
DocumentationComponentsClipboardCopyReactDocs.Component.displayName = 'DocumentationComponentsClipboardCopyReactDocs';
