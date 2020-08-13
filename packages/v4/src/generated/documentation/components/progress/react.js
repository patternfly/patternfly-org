import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsProgressReactDocs = {
  "slug": "/documentation/components/progress/react",
  "source": "react",
  "propComponents": [
    "Progress"
  ],
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/master/packages/react-core/src/components/Progress/examples/Progress.md",
  "section": "components",
  "id": "Progress",
  "title": "Progress",
  "toc": [
    "Examples"
  ],
  "cssPrefix": "pf-c-progress"
};
DocumentationComponentsProgressReactDocs.liveContext = {
  
};
DocumentationComponentsProgressReactDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsProgressReactDocs} {...{"code":"import React from 'react';\nimport { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';\n\n<Progress value={33} title=\"Title\" />","title":"Simple","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsProgressReactDocs} {...{"code":"import React from 'react';\nimport { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';\n\n<Progress value={33} title=\"Title\" size={ProgressSize.sm} />","title":"Small","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsProgressReactDocs} {...{"code":"import React from 'react';\nimport { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';\n\n<Progress value={33} title=\"Title\" size={ProgressSize.lg} />","title":"Large","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsProgressReactDocs} {...{"code":"import React from 'react';\nimport { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';\n\n<Progress value={33} title=\"Title\" measureLocation={ProgressMeasureLocation.outside} />","title":"Outside","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsProgressReactDocs} {...{"code":"import React from 'react';\nimport { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';\n\n<Progress value={33} title=\"Title\" measureLocation={ProgressMeasureLocation.inside} />","title":"Inside","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsProgressReactDocs} {...{"code":"import React from 'react';\nimport { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';\n\n<Progress value={100} title=\"Title\" variant={ProgressVariant.success} />","title":"Success","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsProgressReactDocs} {...{"code":"import React from 'react';\nimport { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';\n\n<Progress value={33} title=\"Title\" variant={ProgressVariant.danger} />","title":"Failure","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsProgressReactDocs} {...{"code":"import React from 'react';\nimport { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';\n\n<Progress\n  value={100}\n  title=\"Title\"\n  measureLocation={ProgressMeasureLocation.inside}\n  variant={ProgressVariant.success}\n/>","title":"Inside success","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsProgressReactDocs} {...{"code":"import React from 'react';\nimport { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';\n\n<Progress\n  value={33}\n  title=\"Title\"\n  measureLocation={ProgressMeasureLocation.outside}\n  variant={ProgressVariant.danger}\n/>","title":"Outside failure","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsProgressReactDocs} {...{"code":"import React from 'react';\nimport { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';\n\n<Progress value={33} measureLocation={ProgressMeasureLocation.outside} />","title":"Single line","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsProgressReactDocs} {...{"code":"import React from 'react';\nimport { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';\n\n<Progress value={33} title=\"Title\" measureLocation={ProgressMeasureLocation.none} />","title":"Without measure","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsProgressReactDocs} {...{"code":"import React from 'react';\nimport { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';\n\n<Progress\n  value={33}\n  title=\"Title\"\n  measureLocation={ProgressMeasureLocation.none}\n  variant={ProgressVariant.danger}\n/>","title":"Failure without measure)","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsProgressReactDocs} {...{"code":"import React from 'react';\nimport { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';\n\n<Progress value={2} min={0} max={5} title=\"Title\" measureLocation={ProgressMeasureLocation.top} label=\"2 of 5\" valueText=\"2 of 5\"/>","title":"Finite step","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsProgressReactDocs} {...{"code":"import React from 'react';\nimport { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';\n\n<Progress value={2} title=\"Title\" min={0} max={5} label=\"Step 2: Copying files\" valueText=\"Step 2: Copying files\" />","title":"Progress (step instruction)","lang":"js"}}>
    </Example>
  </React.Fragment>
);
DocumentationComponentsProgressReactDocs.Component.displayName = 'DocumentationComponentsProgressReactDocs';
