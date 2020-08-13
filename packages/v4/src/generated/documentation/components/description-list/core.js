import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsDescriptionListCoreDocs = {
  "slug": "/documentation/components/description-list/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/DescriptionList/examples/DescriptionList.md",
  "section": "components",
  "id": "Description list",
  "title": "Description list",
  "toc": [
    "Examples",
    "Responsive column definitions",
    "Auto-column-width",
    "Inline grid",
    "Documentation"
  ],
  "cssPrefix": "pf-c-description-list"
};
DocumentationComponentsDescriptionListCoreDocs.liveContext = {
  
};
DocumentationComponentsDescriptionListCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsDescriptionListCoreDocs} {...{"code":"<dl class=\"pf-c-description-list\">\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <div class=\"pf-c-description-list__text\">Name</div>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <div class=\"pf-c-description-list__text\">Namespace</div>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <div class=\"pf-c-description-list__text\">Labels</div>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <div class=\"pf-c-description-list__text\">Pod selector</div>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">\n          <span class=\"pf-c-button__icon pf-m-start\">\n            <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n          </span>app=MyApp</button>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <div class=\"pf-c-description-list__text\">Annotation</div>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">2 Annotations</div>\n    </dd>\n  </div>\n</dl>","title":"Default","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsDescriptionListCoreDocs} {...{"code":"<dl class=\"pf-c-description-list pf-m-2-col\">\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <div class=\"pf-c-description-list__text\">Name</div>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <div class=\"pf-c-description-list__text\">Namespace</div>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <div class=\"pf-c-description-list__text\">Labels</div>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <div class=\"pf-c-description-list__text\">Pod selector</div>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">\n          <span class=\"pf-c-button__icon pf-m-start\">\n            <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n          </span>app=MyApp</button>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <div class=\"pf-c-description-list__text\">Annotation</div>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">2 Annotations</div>\n    </dd>\n  </div>\n</dl>","title":"Default 2 col","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsDescriptionListCoreDocs} {...{"code":"<dl class=\"pf-c-description-list pf-m-3-col-on-lg\">\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <div class=\"pf-c-description-list__text\">Name</div>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <div class=\"pf-c-description-list__text\">Namespace</div>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <div class=\"pf-c-description-list__text\">Labels</div>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <div class=\"pf-c-description-list__text\">Pod selector</div>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">\n          <span class=\"pf-c-button__icon pf-m-start\">\n            <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n          </span>app=MyApp</button>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <div class=\"pf-c-description-list__text\">Annotation</div>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">2 Annotations</div>\n    </dd>\n  </div>\n</dl>","title":"Default 3 col on lg","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsDescriptionListCoreDocs} {...{"code":"<dl class=\"pf-c-description-list pf-m-horizontal\">\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <div class=\"pf-c-description-list__text\">Name</div>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <div class=\"pf-c-description-list__text\">Namespace</div>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <div class=\"pf-c-description-list__text\">Labels</div>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <div class=\"pf-c-description-list__text\">Pod selector</div>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">\n          <span class=\"pf-c-button__icon pf-m-start\">\n            <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n          </span>app=MyApp</button>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <div class=\"pf-c-description-list__text\">Annotation</div>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">2 Annotations</div>\n    </dd>\n  </div>\n</dl>","title":"Horizontal","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsDescriptionListCoreDocs} {...{"code":"<dl class=\"pf-c-description-list pf-m-horizontal pf-m-2-col\">\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <div class=\"pf-c-description-list__text\">Name</div>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <div class=\"pf-c-description-list__text\">Namespace</div>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <div class=\"pf-c-description-list__text\">Labels</div>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <div class=\"pf-c-description-list__text\">Pod selector</div>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">\n          <span class=\"pf-c-button__icon pf-m-start\">\n            <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n          </span>app=MyApp</button>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <div class=\"pf-c-description-list__text\">Annotation</div>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">2 Annotations</div>\n    </dd>\n  </div>\n</dl>","title":"Horizontal 2 col","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsDescriptionListCoreDocs} {...{"code":"<dl class=\"pf-c-description-list pf-m-horizontal pf-m-3-col-on-lg\">\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <div class=\"pf-c-description-list__text\">Name</div>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <div class=\"pf-c-description-list__text\">Namespace</div>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <div class=\"pf-c-description-list__text\">Labels</div>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <div class=\"pf-c-description-list__text\">Pod selector</div>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">\n          <span class=\"pf-c-button__icon pf-m-start\">\n            <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n          </span>app=MyApp</button>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <div class=\"pf-c-description-list__text\">Annotation</div>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">2 Annotations</div>\n    </dd>\n  </div>\n</dl>","title":"Horizontal 3 col on lg","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Responsive column definitions`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsDescriptionListCoreDocs} {...{"code":"<dl class=\"pf-c-description-list pf-m-2-col-on-lg pf-m-3-col-on-xl\">\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <div class=\"pf-c-description-list__text\">Name</div>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <div class=\"pf-c-description-list__text\">Namespace</div>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <div class=\"pf-c-description-list__text\">Labels</div>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <div class=\"pf-c-description-list__text\">Pod selector</div>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">\n          <span class=\"pf-c-button__icon pf-m-start\">\n            <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n          </span>app=MyApp</button>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <div class=\"pf-c-description-list__text\">Annotation</div>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">2 Annotations</div>\n    </dd>\n  </div>\n</dl>","title":"Default responsive columns","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsDescriptionListCoreDocs} {...{"code":"<dl class=\"pf-c-description-list pf-m-horizontal pf-m-2-col-on-lg pf-m-3-col-on-xl\">\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <div class=\"pf-c-description-list__text\">Name</div>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <div class=\"pf-c-description-list__text\">Namespace</div>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <div class=\"pf-c-description-list__text\">Labels</div>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <div class=\"pf-c-description-list__text\">Pod selector</div>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">\n          <span class=\"pf-c-button__icon pf-m-start\">\n            <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n          </span>app=MyApp</button>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <div class=\"pf-c-description-list__text\">Annotation</div>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">2 Annotations</div>\n    </dd>\n  </div>\n</dl>","title":"Horizontal responsive columns","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Auto-column-width`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsDescriptionListCoreDocs} {...{"code":"<dl class=\"pf-c-description-list pf-m-auto-column-widths pf-m-3-col\">\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <div class=\"pf-c-description-list__text\">Name</div>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <div class=\"pf-c-description-list__text\">Namespace</div>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <div class=\"pf-c-description-list__text\">Labels</div>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <div class=\"pf-c-description-list__text\">Pod selector</div>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">\n          <span class=\"pf-c-button__icon pf-m-start\">\n            <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n          </span>app=MyApp</button>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <div class=\"pf-c-description-list__text\">Annotation</div>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">2 Annotations</div>\n    </dd>\n  </div>\n</dl>","title":"Default auto columns width","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsDescriptionListCoreDocs} {...{"code":"<dl class=\"pf-c-description-list pf-m-horizontal pf-m-auto-column-widths pf-m-2-col-on-lg\">\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <div class=\"pf-c-description-list__text\">Name</div>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <div class=\"pf-c-description-list__text\">Namespace</div>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <div class=\"pf-c-description-list__text\">Labels</div>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <div class=\"pf-c-description-list__text\">Pod selector</div>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">\n          <span class=\"pf-c-button__icon pf-m-start\">\n            <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n          </span>app=MyApp</button>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <div class=\"pf-c-description-list__text\">Annotation</div>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">2 Annotations</div>\n    </dd>\n  </div>\n</dl>","title":"Horizontal auto column width","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Inline grid`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsDescriptionListCoreDocs} {...{"code":"<dl class=\"pf-c-description-list pf-m-3-col pf-m-inline-grid\">\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <div class=\"pf-c-description-list__text\">Name</div>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <div class=\"pf-c-description-list__text\">Namespace</div>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <div class=\"pf-c-description-list__text\">Labels</div>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <div class=\"pf-c-description-list__text\">Pod selector</div>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">\n          <span class=\"pf-c-button__icon pf-m-start\">\n            <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n          </span>app=MyApp</button>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <div class=\"pf-c-description-list__text\">Annotation</div>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">2 Annotations</div>\n    </dd>\n  </div>\n</dl>","title":"Default inline grid","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Accessibility`}
    </AutoLinkHeader>
    <table {...{"className":"ws-table"}}>
      <thead>
        <tr>
          <th>
            {`Attribute`}
          </th>
          <th>
            {`Applied to`}
          </th>
          <th>
            {`Outcome`}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`title`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-description-list`}
            </code>
          </td>
          <td>
            {`Provides an accessible title for the description list. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Usage`}
    </AutoLinkHeader>
    <table {...{"className":"ws-table"}}>
      <thead>
        <tr>
          <th>
            {`Class`}
          </th>
          <th>
            {`Applied to`}
          </th>
          <th>
            {`Outcome`}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-description-list`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<dl>`}
            </code>
          </td>
          <td>
            {`Initiates the description list component. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-description-list__group`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates a description list component group. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-description-list__term`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<dt>`}
            </code>
          </td>
          <td>
            {`Initiates a description list component term. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-description-list__description`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<dd>`}
            </code>
          </td>
          <td>
            {`Initiates a description list component description. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-description-list__text`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates a description list component text element. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-horizontal`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-description-list`}
            </code>
          </td>
          <td>
            {`Modifies the description list component term and description pair to a horizontal layout.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-auto-column-widths`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-description-list`}
            </code>
          </td>
          <td>
            {`Modifies the description list to format automatically.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-inline-grid`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-description-list`}
            </code>
          </td>
          <td>
            {`Modifies the description list display to inline-grid.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-{1,2,3}-col{-on-[md, lg, xl, 2xl]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-description-list`}
            </code>
          </td>
          <td>
            {`Modifies the description list number of columns.`}
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationComponentsDescriptionListCoreDocs.Component.displayName = 'DocumentationComponentsDescriptionListCoreDocs';
