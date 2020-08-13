import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../../../../node_modules/@patternfly/patternfly/docs/components/Label/examples/./Label.css'

export const DocumentationComponentsLabelCoreDocs = {
  "slug": "/documentation/components/label/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/Label/examples/Label.md",
  "section": "components",
  "id": "Label",
  "title": "Label",
  "toc": [
    "Examples",
    "Documentation"
  ],
  "cssPrefix": "pf-c-label"
};
DocumentationComponentsLabelCoreDocs.liveContext = {
  
};
DocumentationComponentsLabelCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsLabelCoreDocs} {...{"code":"<span class=\"pf-c-label\">\n  <span class=\"pf-c-label__content\">Grey</span>\n</span>\n<span class=\"pf-c-label\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>Grey icon</span>\n</span>\n<span class=\"pf-c-label\">\n  <span class=\"pf-c-label__content\">Grey removable</span>\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" id=\"default-grey-close-button\" aria-label=\"Remove\" aria-labelledby=\"default-grey-close-button default-grey-close-text\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n<span class=\"pf-c-label\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>Grey icon removable</span>\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" id=\"default-grey-icon-close-button\" aria-label=\"Remove\" aria-labelledby=\"default-grey-icon-close-button default-grey-icon-close-text\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n<span class=\"pf-c-label\">\n  <a class=\"pf-c-label__content\" href=\"#\">Grey link</a>\n</span>\n<span class=\"pf-c-label\">\n  <a class=\"pf-c-label__content\" href=\"#\">Grey link removable</a>\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" id=\"default-grey-link-close-button\" aria-label=\"Remove\" aria-labelledby=\"default-grey-link-close-button default-grey-link-close-text\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n<br />\n<br />\n<span class=\"pf-c-label pf-m-blue\">\n  <span class=\"pf-c-label__content\">Blue</span>\n</span>\n<span class=\"pf-c-label pf-m-blue\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>Blue icon</span>\n</span>\n<span class=\"pf-c-label pf-m-blue\">\n  <span class=\"pf-c-label__content\">Blue removable</span>\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" id=\"default-blue-close-button\" aria-label=\"Remove\" aria-labelledby=\"default-blue-close-button default-blue-close-text\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n<span class=\"pf-c-label pf-m-blue\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>Blue icon removable</span>\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" id=\"default-blue-icon-close-button\" aria-label=\"Remove\" aria-labelledby=\"default-blue-icon-close-button default-blue-icon-close-text\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n<span class=\"pf-c-label pf-m-blue\">\n  <a class=\"pf-c-label__content\" href=\"#\">Blue link</a>\n</span>\n<span class=\"pf-c-label pf-m-blue\">\n  <a class=\"pf-c-label__content\" href=\"#\">Blue link removable</a>\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" id=\"default-blue-link-close-button\" aria-label=\"Remove\" aria-labelledby=\"default-blue-link-close-button default-blue-link-close-text\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n<br />\n<br />\n<span class=\"pf-c-label pf-m-green\">\n  <span class=\"pf-c-label__content\">Green</span>\n</span>\n<span class=\"pf-c-label pf-m-green\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>Green icon</span>\n</span>\n<span class=\"pf-c-label pf-m-green\">\n  <span class=\"pf-c-label__content\">Green removable</span>\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" id=\"default-green-close-button\" aria-label=\"Remove\" aria-labelledby=\"default-green-close-button default-green-close-text\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n<span class=\"pf-c-label pf-m-green\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>Green icon removable</span>\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" id=\"default-green-icon-close-button\" aria-label=\"Remove\" aria-labelledby=\"default-green-icon-close-button default-green-icon-close-text\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n<span class=\"pf-c-label pf-m-green\">\n  <a class=\"pf-c-label__content\" href=\"#\">Green link</a>\n</span>\n<span class=\"pf-c-label pf-m-green\">\n  <a class=\"pf-c-label__content\" href=\"#\">Green link removable</a>\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" id=\"default-green-link-close-button\" aria-label=\"Remove\" aria-labelledby=\"default-green-link-close-button default-green-link-close-text\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n<br />\n<br />\n<span class=\"pf-c-label pf-m-orange\">\n  <span class=\"pf-c-label__content\">Orange</span>\n</span>\n<span class=\"pf-c-label pf-m-orange\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>Orange icon</span>\n</span>\n<span class=\"pf-c-label pf-m-orange\">\n  <span class=\"pf-c-label__content\">Orange removable</span>\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" id=\"default-orange-close-button\" aria-label=\"Remove\" aria-labelledby=\"default-orange-close-button default-orange-close-text\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n<span class=\"pf-c-label pf-m-orange\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>Orange icon removable</span>\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" id=\"default-orange-icon-close-button\" aria-label=\"Remove\" aria-labelledby=\"default-orange-icon-close-button default-orange-icon-close-text\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n<span class=\"pf-c-label pf-m-orange\">\n  <a class=\"pf-c-label__content\" href=\"#\">Orange link</a>\n</span>\n<span class=\"pf-c-label pf-m-orange\">\n  <a class=\"pf-c-label__content\" href=\"#\">Orange link removable</a>\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" id=\"default-orange-link-close-button\" aria-label=\"Remove\" aria-labelledby=\"default-orange-link-close-button default-orange-link-close-text\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n<br />\n<br />\n<span class=\"pf-c-label pf-m-red\">\n  <span class=\"pf-c-label__content\">Red</span>\n</span>\n<span class=\"pf-c-label pf-m-red\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>Red icon</span>\n</span>\n<span class=\"pf-c-label pf-m-red\">\n  <span class=\"pf-c-label__content\">Red removable</span>\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" id=\"default-red-close-button\" aria-label=\"Remove\" aria-labelledby=\"default-red-close-button default-red-close-text\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n<span class=\"pf-c-label pf-m-red\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>Red icon removable</span>\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" id=\"default-red-icon-close-button\" aria-label=\"Remove\" aria-labelledby=\"default-red-icon-close-button default-red-icon-close-text\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n<span class=\"pf-c-label pf-m-red\">\n  <a class=\"pf-c-label__content\" href=\"#\">Red link</a>\n</span>\n<span class=\"pf-c-label pf-m-red\">\n  <a class=\"pf-c-label__content\" href=\"#\">Red link removable</a>\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" id=\"default-red-link-close-button\" aria-label=\"Remove\" aria-labelledby=\"default-red-link-close-button default-red-link-close-text\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n<br />\n<br />\n<span class=\"pf-c-label pf-m-purple\">\n  <span class=\"pf-c-label__content\">Purple</span>\n</span>\n<span class=\"pf-c-label pf-m-purple\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>Purple icon</span>\n</span>\n<span class=\"pf-c-label pf-m-purple\">\n  <span class=\"pf-c-label__content\">Purple removable</span>\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" id=\"default-purple-close-button\" aria-label=\"Remove\" aria-labelledby=\"default-purple-close-button default-purple-close-text\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n<span class=\"pf-c-label pf-m-purple\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>Purple icon removable</span>\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" id=\"default-purple-icon-close-button\" aria-label=\"Remove\" aria-labelledby=\"default-purple-icon-close-button default-purple-icon-close-text\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n<span class=\"pf-c-label pf-m-purple\">\n  <a class=\"pf-c-label__content\" href=\"#\">Purple link</a>\n</span>\n<span class=\"pf-c-label pf-m-purple\">\n  <a class=\"pf-c-label__content\" href=\"#\">Purple link removable</a>\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" id=\"default-purple-link-close-button\" aria-label=\"Remove\" aria-labelledby=\"default-purple-link-close-button default-purple-link-close-text\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n<br />\n<br />\n<span class=\"pf-c-label pf-m-cyan\">\n  <span class=\"pf-c-label__content\">Cyan</span>\n</span>\n<span class=\"pf-c-label pf-m-cyan\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>Cyan icon</span>\n</span>\n<span class=\"pf-c-label pf-m-cyan\">\n  <span class=\"pf-c-label__content\">Cyan removable</span>\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" id=\"default-cyan-close-button\" aria-label=\"Remove\" aria-labelledby=\"default-cyan-close-button default-cyan-close-text\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n<span class=\"pf-c-label pf-m-cyan\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>Cyan icon removable</span>\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" id=\"default-cyan-icon-close-button\" aria-label=\"Remove\" aria-labelledby=\"default-cyan-icon-close-button default-cyan-icon-close-text\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n<span class=\"pf-c-label pf-m-cyan\">\n  <a class=\"pf-c-label__content\" href=\"#\">Cyan link</a>\n</span>\n<span class=\"pf-c-label pf-m-cyan\">\n  <a class=\"pf-c-label__content\" href=\"#\">Cyan link removable</a>\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" id=\"default-cyan-link-close-button\" aria-label=\"Remove\" aria-labelledby=\"default-cyan-link-close-button default-cyan-link-close-text\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>","title":"Filled","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsLabelCoreDocs} {...{"code":"<span class=\"pf-c-label pf-m-outline\">\n  <span class=\"pf-c-label__content\">Grey</span>\n</span>\n<span class=\"pf-c-label pf-m-outline\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>Grey icon</span>\n</span>\n<span class=\"pf-c-label pf-m-outline\">\n  <span class=\"pf-c-label__content\">Grey removable</span>\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" id=\"outline-grey-close-button\" aria-label=\"Remove\" aria-labelledby=\"outline-grey-close-button outline-grey-close-text\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n<span class=\"pf-c-label pf-m-outline\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>Grey icon removable</span>\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" id=\"outline-grey-icon-close-button\" aria-label=\"Remove\" aria-labelledby=\"outline-grey-icon-close-button outline-grey-icon-close-text\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n<span class=\"pf-c-label pf-m-outline\">\n  <a class=\"pf-c-label__content\" href=\"#\">Grey link</a>\n</span>\n<span class=\"pf-c-label pf-m-outline\">\n  <a class=\"pf-c-label__content\" href=\"#\">Grey link removable</a>\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" id=\"outline-grey-link-close-button\" aria-label=\"Remove\" aria-labelledby=\"outline-grey-link-close-button outline-grey-link-close-text\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n<br />\n<br />\n<span class=\"pf-c-label pf-m-blue pf-m-outline\">\n  <span class=\"pf-c-label__content\">Blue</span>\n</span>\n<span class=\"pf-c-label pf-m-blue pf-m-outline\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>Blue icon</span>\n</span>\n<span class=\"pf-c-label pf-m-blue pf-m-outline\">\n  <span class=\"pf-c-label__content\">Blue removable</span>\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" id=\"outline-blue-close-button\" aria-label=\"Remove\" aria-labelledby=\"outline-blue-close-button outline-blue-close-text\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n<span class=\"pf-c-label pf-m-blue pf-m-outline\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>Blue icon removable</span>\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" id=\"outline-blue-icon-close-button\" aria-label=\"Remove\" aria-labelledby=\"outline-blue-icon-close-button outline-blue-icon-close-text\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n<span class=\"pf-c-label pf-m-outline pf-m-blue\">\n  <a class=\"pf-c-label__content\" href=\"#\">Blue link</a>\n</span>\n<span class=\"pf-c-label pf-m-outline pf-m-blue\">\n  <a class=\"pf-c-label__content\" href=\"#\">Blue link removable</a>\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" id=\"outline-blue-link-close-button\" aria-label=\"Remove\" aria-labelledby=\"outline-blue-link-close-button outline-blue-link-close-text\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n<br />\n<br />\n<span class=\"pf-c-label pf-m-green pf-m-outline\">\n  <span class=\"pf-c-label__content\">Green</span>\n</span>\n<span class=\"pf-c-label pf-m-green pf-m-outline\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>Green icon</span>\n</span>\n<span class=\"pf-c-label pf-m-green pf-m-outline\">\n  <span class=\"pf-c-label__content\">Green removable</span>\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" id=\"outline-green-close-button\" aria-label=\"Remove\" aria-labelledby=\"outline-green-close-button outline-green-close-text\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n<span class=\"pf-c-label pf-m-green pf-m-outline\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>Green icon removable</span>\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" id=\"outline-green-icon-close-button\" aria-label=\"Remove\" aria-labelledby=\"outline-green-icon-close-button outline-green-icon-close-text\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n<span class=\"pf-c-label pf-m-outline pf-m-green\">\n  <a class=\"pf-c-label__content\" href=\"#\">Green link</a>\n</span>\n<span class=\"pf-c-label pf-m-outline pf-m-green\">\n  <a class=\"pf-c-label__content\" href=\"#\">Green link removable</a>\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" id=\"outline-green-link-close-button\" aria-label=\"Remove\" aria-labelledby=\"outline-green-link-close-button outline-green-link-close-text\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n<br />\n<br />\n<span class=\"pf-c-label pf-m-orange pf-m-outline\">\n  <span class=\"pf-c-label__content\">Orange</span>\n</span>\n<span class=\"pf-c-label pf-m-orange pf-m-outline\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>Orange icon</span>\n</span>\n<span class=\"pf-c-label pf-m-orange pf-m-outline\">\n  <span class=\"pf-c-label__content\">Orange removable</span>\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" id=\"outline-orange-close-button\" aria-label=\"Remove\" aria-labelledby=\"outline-orange-close-button outline-orange-close-text\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n<span class=\"pf-c-label pf-m-orange pf-m-outline\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>Orange icon removable</span>\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" id=\"outline-orange-icon-close-button\" aria-label=\"Remove\" aria-labelledby=\"outline-orange-icon-close-button outline-orange-icon-close-text\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n<span class=\"pf-c-label pf-m-outline pf-m-orange\">\n  <a class=\"pf-c-label__content\" href=\"#\">Orange link</a>\n</span>\n<span class=\"pf-c-label pf-m-outline pf-m-orange\">\n  <a class=\"pf-c-label__content\" href=\"#\">Orange link removable</a>\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" id=\"outline-orange-link-close-button\" aria-label=\"Remove\" aria-labelledby=\"outline-orange-link-close-button outline-orange-link-close-text\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n<br />\n<br />\n<span class=\"pf-c-label pf-m-red pf-m-outline\">\n  <span class=\"pf-c-label__content\">Red</span>\n</span>\n<span class=\"pf-c-label pf-m-red pf-m-outline\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>Red icon</span>\n</span>\n<span class=\"pf-c-label pf-m-red pf-m-outline\">\n  <span class=\"pf-c-label__content\">Red removable</span>\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" id=\"outline-red-close-button\" aria-label=\"Remove\" aria-labelledby=\"outline-red-close-button outline-red-close-text\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n<span class=\"pf-c-label pf-m-red pf-m-outline\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>Red icon removable</span>\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" id=\"outline-red-icon-close-button\" aria-label=\"Remove\" aria-labelledby=\"outline-red-icon-close-button outline-red-icon-close-text\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n<span class=\"pf-c-label pf-m-outline pf-m-red\">\n  <a class=\"pf-c-label__content\" href=\"#\">Red link</a>\n</span>\n<span class=\"pf-c-label pf-m-outline pf-m-red\">\n  <a class=\"pf-c-label__content\" href=\"#\">Red link removable</a>\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" id=\"outline-red-link-close-button\" aria-label=\"Remove\" aria-labelledby=\"outline-red-link-close-button outline-red-link-close-text\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n<br />\n<br />\n<span class=\"pf-c-label pf-m-purple pf-m-outline\">\n  <span class=\"pf-c-label__content\">Purple</span>\n</span>\n<span class=\"pf-c-label pf-m-purple pf-m-outline\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>Purple icon</span>\n</span>\n<span class=\"pf-c-label pf-m-purple pf-m-outline\">\n  <span class=\"pf-c-label__content\">Purple removable</span>\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" id=\"outline-purple-close-button\" aria-label=\"Remove\" aria-labelledby=\"outline-purple-close-button outline-purple-close-text\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n<span class=\"pf-c-label pf-m-purple pf-m-outline\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>Purple icon removable</span>\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" id=\"outline-purple-icon-close-button\" aria-label=\"Remove\" aria-labelledby=\"outline-purple-icon-close-button outline-purple-icon-close-text\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n<span class=\"pf-c-label pf-m-outline pf-m-purple\">\n  <a class=\"pf-c-label__content\" href=\"#\">Purple link</a>\n</span>\n<span class=\"pf-c-label pf-m-outline pf-m-purple\">\n  <a class=\"pf-c-label__content\" href=\"#\">Purple link removable</a>\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" id=\"outline-purple-link-close-button\" aria-label=\"Remove\" aria-labelledby=\"outline-purple-link-close-button outline-purple-link-close-text\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n<br />\n<br />\n<span class=\"pf-c-label pf-m-cyan pf-m-outline\">\n  <span class=\"pf-c-label__content\">Cyan</span>\n</span>\n<span class=\"pf-c-label pf-m-cyan pf-m-outline\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>Cyan icon</span>\n</span>\n<span class=\"pf-c-label pf-m-cyan pf-m-outline\">\n  <span class=\"pf-c-label__content\">Cyan removable</span>\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" id=\"outline-cyan-close-button\" aria-label=\"Remove\" aria-labelledby=\"outline-cyan-close-button outline-cyan-close-text\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n<span class=\"pf-c-label pf-m-cyan pf-m-outline\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>Cyan icon removable</span>\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" id=\"outline-cyan-icon-close-button\" aria-label=\"Remove\" aria-labelledby=\"outline-cyan-icon-close-button outline-cyan-icon-close-text\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n<span class=\"pf-c-label pf-m-outline pf-m-cyan\">\n  <a class=\"pf-c-label__content\" href=\"#\">Cyan link</a>\n</span>\n<span class=\"pf-c-label pf-m-outline pf-m-cyan\">\n  <a class=\"pf-c-label__content\" href=\"#\">Cyan link removable</a>\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" id=\"outline-cyan-link-close-button\" aria-label=\"Remove\" aria-labelledby=\"outline-cyan-link-close-button outline-cyan-link-close-text\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>","title":"Outline","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
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
              {`.pf-c-label`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Iniates a label. Without a color modifier, the label's default style is grey. Use a color modifier to change the label color. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-label__content`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`<a>`}
            </code>
          </td>
          <td>
            {`Iniates a label content. Use as an `}
            <code {...{"className":"ws-code"}}>
              {`<a>`}
            </code>
            {` element if the label serves as a link. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-label__icon`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Iniates a label icon.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-outline`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-label`}
            </code>
          </td>
          <td>
            {`Modifies label for outline styles.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-blue`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-label`}
            </code>
          </td>
          <td>
            {`Modifies the label to have blue colored styling.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-green`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-label`}
            </code>
          </td>
          <td>
            {`Modifies the label to have green colored styling.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-orange`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-label`}
            </code>
          </td>
          <td>
            {`Modifies the label to have orange colored styling.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-red`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-label`}
            </code>
          </td>
          <td>
            {`Modifies the label to have red colored styling.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-purple`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-label`}
            </code>
          </td>
          <td>
            {`Modifies the label to have purple colored styling.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-cyan`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-label`}
            </code>
          </td>
          <td>
            {`Modifies the label to have cyan colored styling.`}
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationComponentsLabelCoreDocs.Component.displayName = 'DocumentationComponentsLabelCoreDocs';
