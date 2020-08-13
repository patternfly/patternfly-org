import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsBackgroundImageReactDocs = {
  "slug": "/documentation/components/background-image/react",
  "source": "react",
  "propComponents": [
    "BackgroundImage"
  ],
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/master/packages/react-core/src/components/BackgroundImage/examples/BackgroundImage.md",
  "section": "components",
  "id": "Background image",
  "title": "Background image",
  "toc": [
    "Examples"
  ],
  "cssPrefix": "pf-c-background-image"
};
DocumentationComponentsBackgroundImageReactDocs.liveContext = {
  
};
DocumentationComponentsBackgroundImageReactDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsBackgroundImageReactDocs} {...{"code":"import React from 'react';\nimport { BackgroundImage } from '@patternfly/react-core';\n\nclass SimpleBackgroundImage extends React.Component {\n  constructor(props) {\n    super(props);\n    /**\n     * Note: When using background-filter.svg, you must also include #image_overlay as the fragment identifier\n     */\n    this.images = {\n      'xs': '/assets/images/pfbg_576.jpg',\n      'xs2x': '/assets/images/pfbg_576@2x.jpg',\n      'sm': '/assets/images/pfbg_768.jpg',\n      'sm2x': '/assets/images/pfbg_768@2x.jpg',\n      'lg': '/assets/images/pfbg_1200.jpg'\n    };\n  }\n  render() {\n    return <BackgroundImage src={this.images} />;\n  }\n}","title":"Basic","lang":"js","isFullscreen":true}}>
    </Example>
  </React.Fragment>
);
DocumentationComponentsBackgroundImageReactDocs.Component.displayName = 'DocumentationComponentsBackgroundImageReactDocs';
