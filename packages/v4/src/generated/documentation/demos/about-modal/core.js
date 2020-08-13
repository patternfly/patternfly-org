import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationDemosAboutModalCoreDocs = {
  "slug": "/documentation/demos/about-modal/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/demos/AboutModal/examples/AboutModal.md",
  "section": "demos",
  "id": "About modal",
  "title": "About modal",
  "toc": [
    "Demos",
    "Documentation"
  ]
};
DocumentationDemosAboutModalCoreDocs.liveContext = {
  
};
DocumentationDemosAboutModalCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Demos`}
    </AutoLinkHeader>
    <Example {...DocumentationDemosAboutModalCoreDocs} {...{"code":"<div aria-hidden=\"true\">Page content</div>\n<div class=\"pf-c-backdrop\">\n  <div class=\"pf-l-bullseye\">\n    <div class=\"pf-c-about-modal-box\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"about-modal-title\">\n      <div class=\"pf-c-about-modal-box__brand\">\n        <img class=\"pf-c-about-modal-box__brand-image\" src=\"/assets/images/pf_mini_logo_white.svg\" alt=\"PatternFly brand logo\" />\n      </div>\n      <div class=\"pf-c-about-modal-box__close\">\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close dialog\">\n          <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n      <div class=\"pf-c-about-modal-box__header\">\n        <h1 class=\"pf-c-title pf-m-4xl\" id=\"about-modal-title\">Red Hat OpenShift Container Platform</h1>\n      </div>\n      <div class=\"pf-c-about-modal-box__hero\"></div>\n      <div class=\"pf-c-about-modal-box__content\">\n        <div class=\"pf-c-content\">\n          <dl>\n            <dt>CFME version</dt>\n            <dd>5.5.3.4.20102789036450</dd>\n            <dt>Cloudforms version</dt>\n            <dd>4.1</dd>\n            <dt>Server name</dt>\n            <dd>40DemoMaster</dd>\n            <dt>User name</dt>\n            <dd>Administrator</dd>\n            <dt>User role</dt>\n            <dd>EvmRole-super_administrator</dd>\n            <dt>Browser version</dt>\n            <dd>601.2</dd>\n            <dt>Browser OS</dt>\n            <dd>Mac</dd>\n          </dl>\n        </div>\n        <p class=\"pf-c-about-modal-box__strapline\">Trademark and copyright information here</p>\n      </div>\n    </div>\n  </div>\n</div>","title":"Basic","lang":"html","isFullscreen":true}}>
    </Example>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`This demo implements the about modal, including the backdrop.`}
    </p>
  </React.Fragment>
);
DocumentationDemosAboutModalCoreDocs.Component.displayName = 'DocumentationDemosAboutModalCoreDocs';
