import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../../../../node_modules/@patternfly/patternfly/docs/components/Dropdown/examples/./Dropdown.css'

export const DocumentationComponentsDropdownCoreDocs = {
  "slug": "/documentation/components/dropdown/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/Dropdown/examples/Dropdown.md",
  "section": "components",
  "id": "Dropdown",
  "title": "Dropdown",
  "toc": [
    "Examples",
    "Documentation"
  ],
  "cssPrefix": "pf-c-dropdown"
};
DocumentationComponentsDropdownCoreDocs.liveContext = {
  
};
DocumentationComponentsDropdownCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsDropdownCoreDocs} {...{"code":"<div class=\"pf-c-dropdown pf-m-expanded\">\n  <button class=\"pf-c-dropdown__toggle\" type=\"button\" id=\"dropdown-expanded-button\" aria-expanded=\"true\">\n    <span class=\"pf-c-dropdown__toggle-text\">Expanded dropdown</span>\n    <span class=\"pf-c-dropdown__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <ul class=\"pf-c-dropdown__menu\" aria-labelledby=\"dropdown-expanded-button\">\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n    </li>\n    <li>\n      <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n    </li>\n    <li class=\"pf-c-divider\" role=\"separator\"></li>\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n    </li>\n  </ul>\n</div>","title":"Expanded","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsDropdownCoreDocs} {...{"code":"<div class=\"pf-c-dropdown\">\n  <button class=\"pf-c-dropdown__toggle\" type=\"button\" id=\"dropdown-collapsed-button\" aria-expanded=\"false\">\n    <span class=\"pf-c-dropdown__toggle-text\">Collapsed dropdown</span>\n    <span class=\"pf-c-dropdown__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <ul class=\"pf-c-dropdown__menu\" aria-labelledby=\"dropdown-collapsed-button\" hidden>\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n    </li>\n    <li>\n      <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n    </li>\n    <li class=\"pf-c-divider\" role=\"separator\"></li>\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n    </li>\n  </ul>\n</div>","title":"Collapsed","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsDropdownCoreDocs} {...{"code":"<div class=\"pf-c-dropdown\">\n  <button class=\"pf-c-dropdown__toggle\" type=\"button\" id=\"dropdown-disabled-button\" aria-expanded=\"false\" disabled>\n    <span class=\"pf-c-dropdown__toggle-text\">Disabled dropdown</span>\n    <span class=\"pf-c-dropdown__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <ul class=\"pf-c-dropdown__menu\" aria-labelledby=\"dropdown-disabled-button\" hidden>\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n    </li>\n    <li>\n      <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n    </li>\n    <li class=\"pf-c-divider\" role=\"separator\"></li>\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n    </li>\n  </ul>\n</div>","title":"Disabled","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsDropdownCoreDocs} {...{"code":"<div class=\"pf-c-dropdown\">\n  <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"dropdown-kebab-disabled-button\" aria-expanded=\"false\" disabled aria-label=\"Actions\">\n    <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n  </button>\n  <ul class=\"pf-c-dropdown__menu\" aria-labelledby=\"dropdown-kebab-disabled-button\" hidden>\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n    </li>\n    <li>\n      <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n    </li>\n    <li class=\"pf-c-divider\" role=\"separator\"></li>\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n    </li>\n  </ul>\n</div>\n<div class=\"pf-c-dropdown\">\n  <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"dropdown-kebab-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n    <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n  </button>\n  <ul class=\"pf-c-dropdown__menu\" aria-labelledby=\"dropdown-kebab-button\" hidden>\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n    </li>\n    <li>\n      <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n    </li>\n    <li class=\"pf-c-divider\" role=\"separator\"></li>\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n    </li>\n  </ul>\n</div>\n<div class=\"pf-c-dropdown pf-m-expanded\">\n  <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"dropdown-kebab-expanded-button\" aria-expanded=\"true\" aria-label=\"Actions\">\n    <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n  </button>\n  <ul class=\"pf-c-dropdown__menu\" aria-labelledby=\"dropdown-kebab-expanded-button\">\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n    </li>\n    <li>\n      <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n    </li>\n    <li class=\"pf-c-divider\" role=\"separator\"></li>\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n    </li>\n  </ul>\n</div>","title":"Kebab","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsDropdownCoreDocs} {...{"code":"<div class=\"pf-c-dropdown pf-m-expanded\">\n  <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"dropdown-kebab-align-right-button\" aria-expanded=\"true\" aria-label=\"Actions\">\n    <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n  </button>\n  <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"dropdown-kebab-align-right-button\">\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n    </li>\n    <li>\n      <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n    </li>\n    <li class=\"pf-c-divider\" role=\"separator\"></li>\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n    </li>\n  </ul>\n</div>","title":"Kebab align right","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsDropdownCoreDocs} {...{"code":"<div class=\"pf-c-dropdown pf-m-expanded\">\n  <button class=\"pf-c-dropdown__toggle\" type=\"button\" id=\"dropdown-align-right-button\" aria-expanded=\"true\">\n    <span class=\"pf-c-dropdown__toggle-text\">Right</span>\n    <span class=\"pf-c-dropdown__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"dropdown-align-right-button\">\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n    </li>\n    <li>\n      <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n    </li>\n    <li class=\"pf-c-divider\" role=\"separator\"></li>\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n    </li>\n  </ul>\n</div>","title":"Align right","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsDropdownCoreDocs} {...{"code":"<div class=\"pf-c-dropdown pf-m-top\">\n  <button class=\"pf-c-dropdown__toggle\" type=\"button\" id=\"dropdown-align-top-button\" aria-expanded=\"false\">\n    <span class=\"pf-c-dropdown__toggle-text\">Top</span>\n    <span class=\"pf-c-dropdown__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <ul class=\"pf-c-dropdown__menu\" aria-labelledby=\"dropdown-align-top-button\" hidden>\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n    </li>\n    <li>\n      <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n    </li>\n    <li class=\"pf-c-divider\" role=\"separator\"></li>\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n    </li>\n  </ul>\n</div>\n<div class=\"pf-c-dropdown pf-m-expanded pf-m-top\">\n  <button class=\"pf-c-dropdown__toggle\" type=\"button\" id=\"dropdown-align-top-expanded-button\" aria-expanded=\"true\">\n    <span class=\"pf-c-dropdown__toggle-text\">Top</span>\n    <span class=\"pf-c-dropdown__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <ul class=\"pf-c-dropdown__menu\" aria-labelledby=\"dropdown-align-top-expanded-button\">\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n    </li>\n    <li>\n      <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n    </li>\n    <li class=\"pf-c-divider\" role=\"separator\"></li>\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n    </li>\n  </ul>\n</div>","title":"Align top","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsDropdownCoreDocs} {...{"code":"<div class=\"pf-c-dropdown pf-m-expanded\">\n  <button class=\"pf-c-dropdown__toggle\" type=\"button\" id=\"dropdown-menu-item-icons-button\" aria-expanded=\"true\">\n    <span class=\"pf-c-dropdown__toggle-text\">Expanded dropdown</span>\n    <span class=\"pf-c-dropdown__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <ul class=\"pf-c-dropdown__menu\" aria-labelledby=\"dropdown-menu-item-icons-button\">\n    <li>\n      <a class=\"pf-c-dropdown__menu-item pf-m-icon\" href=\"#\">\n        <span class=\"pf-c-dropdown__menu-item-icon\">\n          <img src=\"/assets/images/pf-logo-small.svg\" alt=\"PatternFly logo\" />\n        </span>Link</a>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item pf-m-icon\" type=\"button\">\n        <span class=\"pf-c-dropdown__menu-item-icon\">\n          <i class=\"fas fa-cog\" aria-hidden=\"true\"></i>\n        </span>Action</button>\n    </li>\n    <li>\n      <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n    </li>\n    <li class=\"pf-c-divider\" role=\"separator\"></li>\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n    </li>\n  </ul>\n</div>","title":"Menu item icons","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsDropdownCoreDocs} {...{"code":"<div class=\"pf-c-dropdown\">\n  <div class=\"pf-c-dropdown__toggle pf-m-disabled pf-m-split-button\">\n    <label class=\"pf-c-dropdown__toggle-check\" for=\"dropdown-split-button-disabled-toggle-check\">\n      <input type=\"checkbox\" id=\"dropdown-split-button-disabled-toggle-check\" disabled aria-label=\"Select all\" />\n    </label>\n    <button class=\"pf-c-dropdown__toggle-button\" type=\"button\" aria-expanded=\"false\" id=\"dropdown-split-button-disabled-toggle-button\" aria-label=\"Select\" disabled>\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <ul class=\"pf-c-dropdown__menu\" aria-labelledby=\"dropdown-split-button-disabled-toggle-button\" hidden>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Other action</button>\n    </li>\n  </ul>\n</div>\n<div class=\"pf-c-dropdown\">\n  <div class=\"pf-c-dropdown__toggle pf-m-split-button\">\n    <label class=\"pf-c-dropdown__toggle-check\" for=\"dropdown-split-button-toggle-check\">\n      <input type=\"checkbox\" id=\"dropdown-split-button-toggle-check\" aria-label=\"Select all\" />\n    </label>\n    <button class=\"pf-c-dropdown__toggle-button\" type=\"button\" aria-expanded=\"false\" id=\"dropdown-split-button-toggle-button\" aria-label=\"Select\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <ul class=\"pf-c-dropdown__menu\" aria-labelledby=\"dropdown-split-button-toggle-button\" hidden>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Other action</button>\n    </li>\n  </ul>\n</div>\n<div class=\"pf-c-dropdown pf-m-expanded\">\n  <div class=\"pf-c-dropdown__toggle pf-m-split-button\">\n    <label class=\"pf-c-dropdown__toggle-check\" for=\"dropdown-split-button-expanded-toggle-check\">\n      <input type=\"checkbox\" id=\"dropdown-split-button-expanded-toggle-check\" aria-label=\"Select all\" />\n    </label>\n    <button class=\"pf-c-dropdown__toggle-button\" type=\"button\" aria-expanded=\"true\" id=\"dropdown-split-button-expanded-toggle-button\" aria-label=\"Select\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <ul class=\"pf-c-dropdown__menu\" aria-labelledby=\"dropdown-split-button-expanded-toggle-button\">\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Other action</button>\n    </li>\n  </ul>\n</div>","title":"Split button (checkbox)","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsDropdownCoreDocs} {...{"code":"<div class=\"pf-c-dropdown\">\n  <div class=\"pf-c-dropdown__toggle pf-m-split-button\">\n    <label class=\"pf-c-dropdown__toggle-check\" for=\"dropdown-split-button-text-toggle-check\">\n      <input type=\"checkbox\" id=\"dropdown-split-button-text-toggle-check\" aria-label=\"Unselect all\" checked aria-labelledby=\"dropdown-split-button-text-toggle-check dropdown-split-button-text-toggle-check-text\" />\n      <span class=\"pf-c-dropdown__toggle-text\" aria-hidden=\"true\" id=\"dropdown-split-button-text-toggle-check-text\">10 selected</span>\n    </label>\n    <button class=\"pf-c-dropdown__toggle-button\" type=\"button\" aria-expanded=\"false\" id=\"dropdown-split-button-text-toggle-button\" aria-label=\"Select\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <ul class=\"pf-c-dropdown__menu\" aria-labelledby=\"dropdown-split-button-text-toggle-button\" hidden>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Select all</button>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Select none</button>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Other action</button>\n    </li>\n  </ul>\n</div>","title":"Split button (checkbox with toggle text)","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsDropdownCoreDocs} {...{"code":"<div class=\"pf-c-dropdown\">\n  <div class=\"pf-c-dropdown__toggle pf-m-split-button pf-m-action\">\n    <button class=\"pf-c-dropdown__toggle-button\" type=\"button\">Action</button>\n    <button class=\"pf-c-dropdown__toggle-button\" type=\"button\" aria-expanded=\"false\" id=\"dropdown-split-button-action-toggle-button\" aria-label=\"Select\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <ul class=\"pf-c-dropdown__menu\" aria-labelledby=\"dropdown-split-button-action-toggle-button\" hidden>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Other action</button>\n    </li>\n  </ul>\n</div>\n<div class=\"pf-c-dropdown pf-m-expanded\">\n  <div class=\"pf-c-dropdown__toggle pf-m-split-button pf-m-action\">\n    <button class=\"pf-c-dropdown__toggle-button\" type=\"button\">Action</button>\n    <button class=\"pf-c-dropdown__toggle-button\" type=\"button\" aria-expanded=\"true\" id=\"dropdown-split-button-action-expanded-toggle-button\" aria-label=\"Select\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <ul class=\"pf-c-dropdown__menu\" aria-labelledby=\"dropdown-split-button-action-expanded-toggle-button\">\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Other action</button>\n    </li>\n  </ul>\n</div>\n<div class=\"pf-c-dropdown\">\n  <div class=\"pf-c-dropdown__toggle pf-m-split-button pf-m-action\">\n    <button class=\"pf-c-dropdown__toggle-button\" type=\"button\" aria-label=\"Settings\">\n      <i class=\"fas fa-cog\" aria-hidden=\"true\"></i>\n    </button>\n    <button class=\"pf-c-dropdown__toggle-button\" type=\"button\" aria-expanded=\"false\" id=\"dropdown-split-button-action-icon-toggle-button\" aria-label=\"Select\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <ul class=\"pf-c-dropdown__menu\" aria-labelledby=\"dropdown-split-button-action-icon-toggle-button\" hidden>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Other action</button>\n    </li>\n  </ul>\n</div>\n<div class=\"pf-c-dropdown pf-m-expanded\">\n  <div class=\"pf-c-dropdown__toggle pf-m-split-button pf-m-action\">\n    <button class=\"pf-c-dropdown__toggle-button\" type=\"button\" aria-label=\"Settings\">\n      <i class=\"fas fa-cog\" aria-hidden=\"true\"></i>\n    </button>\n    <button class=\"pf-c-dropdown__toggle-button\" type=\"button\" aria-expanded=\"true\" id=\"dropdown-split-button-action-icon-expanded-toggle-button\" aria-label=\"Select\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <ul class=\"pf-c-dropdown__menu\" aria-labelledby=\"dropdown-split-button-action-icon-expanded-toggle-button\">\n    <li>\n      <button class=\"pf-c-dropdown__menu-item pf-m-icon\" type=\"button\">\n        <span class=\"pf-c-dropdown__menu-item-icon\">\n          <i class=\"fas fa-cog\" aria-hidden=\"true\"></i>\n        </span>Action</button>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item pf-m-icon\" type=\"button\" disabled>\n        <span class=\"pf-c-dropdown__menu-item-icon\">\n          <i class=\"fas fa-bell\" aria-hidden=\"true\"></i>\n        </span>Disabled action</button>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item pf-m-icon\" type=\"button\">\n        <span class=\"pf-c-dropdown__menu-item-icon\">\n          <i class=\"fas fa-cubes\" aria-hidden=\"true\"></i>\n        </span>Other action</button>\n    </li>\n  </ul>\n</div>","title":"Split button (action)","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsDropdownCoreDocs} {...{"code":"<div class=\"pf-c-dropdown pf-m-expanded\">\n  <button class=\"pf-c-dropdown__toggle\" type=\"button\" id=\"dropdown-groups-button\" aria-expanded=\"true\">\n    <span class=\"pf-c-dropdown__toggle-text\">Groups</span>\n    <span class=\"pf-c-dropdown__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <div class=\"pf-c-dropdown__menu\" aria-labelledby=\"dropdown-groups-button\">\n    <section class=\"pf-c-dropdown__group\">\n      <ul>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\" type=\"button\" href=\"#\">Link</button>\n        </li>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n        </li>\n      </ul>\n    </section>\n    <section class=\"pf-c-dropdown__group\">\n      <h1 class=\"pf-c-dropdown__group-title\">Group 2</h1>\n      <ul>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\" type=\"button\" href=\"#\">Group 2 link</button>\n        </li>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Group 2 action</button>\n        </li>\n      </ul>\n    </section>\n    <section class=\"pf-c-dropdown__group\">\n      <h1 class=\"pf-c-dropdown__group-title\">Group 3</h1>\n      <ul>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\" type=\"button\" href=\"#\">Group 3 link</button>\n        </li>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Group 3 action</button>\n        </li>\n      </ul>\n    </section>\n  </div>\n</div>","title":"With groups","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsDropdownCoreDocs} {...{"code":"<div class=\"pf-c-dropdown pf-m-expanded\">\n  <button class=\"pf-c-dropdown__toggle\" type=\"button\" id=\"dropdown-groups-and-dividers-between-groups-button\" aria-expanded=\"true\">\n    <span class=\"pf-c-dropdown__toggle-text\">Groups</span>\n    <span class=\"pf-c-dropdown__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <div class=\"pf-c-dropdown__menu\" aria-labelledby=\"dropdown-groups-and-dividers-between-groups-button\">\n    <section class=\"pf-c-dropdown__group\">\n      <ul>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\" type=\"button\" href=\"#\">Link</button>\n        </li>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n        </li>\n      </ul>\n    </section>\n    <hr class=\"pf-c-divider\" />\n    <section class=\"pf-c-dropdown__group\">\n      <h1 class=\"pf-c-dropdown__group-title\">Group 2</h1>\n      <ul>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\" type=\"button\" href=\"#\">Group 2 link</button>\n        </li>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Group 2 action</button>\n        </li>\n      </ul>\n    </section>\n    <hr class=\"pf-c-divider\" />\n    <section class=\"pf-c-dropdown__group\">\n      <h1 class=\"pf-c-dropdown__group-title\">Group 3</h1>\n      <ul>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\" type=\"button\" href=\"#\">Group 3 link</button>\n        </li>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Group 3 action</button>\n        </li>\n      </ul>\n    </section>\n  </div>\n</div>","title":"With groups and dividers between groups","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsDropdownCoreDocs} {...{"code":"<div class=\"pf-c-dropdown pf-m-expanded\">\n  <button class=\"pf-c-dropdown__toggle\" type=\"button\" id=\"dropdown-groups-and-dividers-between-items-button\" aria-expanded=\"true\">\n    <span class=\"pf-c-dropdown__toggle-text\">Groups</span>\n    <span class=\"pf-c-dropdown__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <div class=\"pf-c-dropdown__menu\" aria-labelledby=\"dropdown-groups-and-dividers-between-items-button\">\n    <section class=\"pf-c-dropdown__group\">\n      <ul>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\" type=\"button\" href=\"#\">Link</button>\n        </li>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n        </li>\n        <li class=\"pf-c-divider\" role=\"separator\"></li>\n      </ul>\n    </section>\n    <section class=\"pf-c-dropdown__group\">\n      <h1 class=\"pf-c-dropdown__group-title\">Group 2</h1>\n      <ul>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\" type=\"button\" href=\"#\">Group 2 link</button>\n        </li>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Group 2 action</button>\n        </li>\n        <li class=\"pf-c-divider\" role=\"separator\"></li>\n      </ul>\n    </section>\n    <section class=\"pf-c-dropdown__group\">\n      <h1 class=\"pf-c-dropdown__group-title\">Group 3</h1>\n      <ul>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\" type=\"button\" href=\"#\">Group 3 link</button>\n        </li>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Group 3 action</button>\n        </li>\n      </ul>\n    </section>\n  </div>\n</div>","title":"With groups and dividers between items","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsDropdownCoreDocs} {...{"code":"<div class=\"pf-c-dropdown pf-m-expanded\">\n  <button class=\"pf-c-dropdown__toggle\" type=\"button\" id=\"dropdown-panel-button\" aria-expanded=\"true\">\n    <span class=\"pf-c-dropdown__toggle-text\">Expanded dropdown</span>\n    <span class=\"pf-c-dropdown__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <div class=\"pf-c-dropdown__menu\">[Panel contents here]</div>\n</div>","title":"Panel","lang":"html"}}>
    </Example>
    <p {...{"className":"ws-p"}}>
      {`The dropdown panel is provided for flexibility in allowing various content within a dropdown.`}
    </p>
    <Example {...DocumentationComponentsDropdownCoreDocs} {...{"code":"<div class=\"pf-c-dropdown\">\n  <button class=\"pf-c-dropdown__toggle pf-m-primary\" type=\"button\" id=\"dropdown-primary-toggle-button\" aria-expanded=\"false\">\n    <span class=\"pf-c-dropdown__toggle-text\">Collapsed dropdown</span>\n    <span class=\"pf-c-dropdown__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <ul class=\"pf-c-dropdown__menu\" aria-labelledby=\"dropdown-primary-toggle-button\" hidden>\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n    </li>\n    <li>\n      <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n    </li>\n    <li class=\"pf-c-divider\" role=\"separator\"></li>\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n    </li>\n  </ul>\n</div>&nbsp;\n<div class=\"pf-c-dropdown pf-m-expanded\">\n  <button class=\"pf-c-dropdown__toggle pf-m-primary\" type=\"button\" id=\"dropdown-primary-toggle-expanded-button\" aria-expanded=\"true\">\n    <span class=\"pf-c-dropdown__toggle-text\">Expanded dropdown</span>\n    <span class=\"pf-c-dropdown__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <ul class=\"pf-c-dropdown__menu\" aria-labelledby=\"dropdown-primary-toggle-expanded-button\">\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n    </li>\n    <li>\n      <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n    </li>\n    <li class=\"pf-c-divider\" role=\"separator\"></li>\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n    </li>\n  </ul>\n</div>","title":"Primary toggle","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsDropdownCoreDocs} {...{"code":"<div class=\"pf-c-dropdown pf-m-expanded\">\n  <button class=\"pf-c-dropdown__toggle\" type=\"button\" id=\"dropdown-with-image-and-text-example-button\" aria-expanded=\"true\">\n    <span class=\"pf-c-dropdown__toggle-image\">\n      <img class=\"pf-c-avatar\" src=\"/assets/images/img_avatar.svg\" alt=\"Avatar image\" />\n    </span>\n    <span class=\"pf-c-dropdown__toggle-text\">Ned Username</span>\n    <span class=\"pf-c-dropdown__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <div class=\"pf-c-dropdown__menu\" aria-labelledby=\"dropdown-with-image-and-text-example-button\">\n    <section class=\"pf-c-dropdown__group\">\n      <div class=\"pf-c-dropdown__menu-item pf-m-text\">Text</div>\n      <div class=\"pf-c-dropdown__menu-item pf-m-text\">More text</div>\n    </section>\n    <hr class=\"pf-c-divider\" />\n    <section class=\"pf-c-dropdown__group\">\n      <ul>\n        <li>\n          <a class=\"pf-c-dropdown__menu-item\" href=\"#\">My profile</a>\n        </li>\n        <li>\n          <a class=\"pf-c-dropdown__menu-item\" href=\"#\">User management</a>\n        </li>\n        <li>\n          <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Logout</a>\n        </li>\n      </ul>\n    </section>\n  </div>\n</div>","title":"Dropdown with image and text","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsDropdownCoreDocs} {...{"code":"<div class=\"pf-c-dropdown pf-m-expanded\">\n  <button class=\"pf-c-dropdown__toggle\" type=\"button\" id=\"dropdown-with-description-button\" aria-expanded=\"true\">\n    <span class=\"pf-c-dropdown__toggle-text\">Expanded dropdown</span>\n    <span class=\"pf-c-dropdown__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <ul class=\"pf-c-dropdown__menu\" aria-labelledby=\"dropdown-with-description-button\">\n    <li>\n      <button class=\"pf-c-dropdown__menu-item pf-m-description\" type=\"button\">\n        <div class=\"pf-c-dropdown__menu-item-main\">Menu item default</div>\n        <div class=\"pf-c-dropdown__menu-item-description\">This is a description</div>\n      </button>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item pf-m-description\" type=\"button\">\n        <div class=\"pf-c-dropdown__menu-item-main\">Menu item with long description</div>\n        <div class=\"pf-c-dropdown__menu-item-description\">This is a really long description that describes the menu item.</div>\n      </button>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item pf-m-description\" type=\"button\" disabled>\n        <div class=\"pf-c-dropdown__menu-item-main\">Menu item disabled</div>\n        <div class=\"pf-c-dropdown__menu-item-description\">This is a description</div>\n      </button>\n    </li>\n    <li>\n      <a class=\"pf-c-dropdown__menu-item pf-m-icon pf-m-description\" href=\"#\">\n        <div class=\"pf-c-dropdown__menu-item-main\">\n          <span class=\"pf-c-dropdown__menu-item-icon\">\n            <img src=\"/assets/images/pf-logo-small.svg\" alt=\"PatternFly logo\" />\n          </span>Link</div>\n        <div class=\"pf-c-dropdown__menu-item-description\">This is a description</div>\n      </a>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item pf-m-icon pf-m-description\" type=\"button\">\n        <div class=\"pf-c-dropdown__menu-item-main\">\n          <span class=\"pf-c-dropdown__menu-item-icon\">\n            <i class=\"fas fa-cog\" aria-hidden=\"true\"></i>\n          </span>Action</div>\n        <div class=\"pf-c-dropdown__menu-item-description\">This is a description</div>\n      </button>\n    </li>\n  </ul>\n</div>","title":"Dropdown with description","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The dropdown menu can contain either links or buttons, depending on the expected behavior when clicking the menu item. If you are using the menu item to navigate to another page, then menu item is a link. Otherwise, use a button for the menu item.`}
    </p>
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
            {`Applied`}
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
              {`aria-expanded="false"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-dropdown__toggle`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-dropdown__toggle-check`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-dropdown__toggle-button`}
            </code>
          </td>
          <td>
            {`Indicates that the menu is hidden.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-expanded="true"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-dropdown__toggle`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-dropdown__toggle-check`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-dropdown__toggle-button`}
            </code>
          </td>
          <td>
            {`Indicates that the menu is visible.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-label="Actions"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-dropdown__toggle`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-dropdown__toggle-check`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-dropdown__toggle-button`}
            </code>
          </td>
          <td>
            {`Provides an accessible name for the dropdown when an icon is used instead of text. `}
            <strong>
              {`Required when icon is used with no supporting text`}
            </strong>
            {`.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-hidden="true"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-dropdown__toggle-icon`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`<i>`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-dropdown__toggle-check .pf-c-dropdown__toggle-text`}
            </code>
          </td>
          <td>
            {`Hides the icon from assistive technologies.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`hidden`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-dropdown__menu`}
            </code>
          </td>
          <td>
            {`Indicates that the menu is hidden so that it isn't visible in the UI and isn't accessed by assistive technologies.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-labelledby="{toggle button id}"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-dropdown__menu`}
            </code>
          </td>
          <td>
            {`Gives the menu an accessible name by referring to the element that toggles the menu.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-labelledby="{checkbox id} {toggle text id}"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-split-button .pf-c-dropdown__toggle-check > input[type="checkbox"]`}
            </code>
          </td>
          <td>
            {`Gives the checkbox an accessible name by referring to the element by which it is described.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`disabled`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-dropdown__toggle`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-dropdown__toggle-button`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-dropdown__toggle-check > input[type="checkbox"]`}
            </code>
          </td>
          <td>
            {`Disables the dropdown toggle and removes it from keyboard focus.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`disabled`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`button.pf-c-dropdown__menu-item`}
            </code>
          </td>
          <td>
            {`When the menu item uses a button element, indicates that it is unavailable and removes it from keyboard focus.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-disabled="true"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`a.pf-c-dropdown__menu-item`}
            </code>
          </td>
          <td>
            {`When the menu item uses a link element, indicates that it is unavailable.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`tabindex="-1"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`a.pf-c-dropdown__menu-item`}
            </code>
          </td>
          <td>
            {`When the menu item uses a link element, removes it from keyboard focus.`}
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
            {`Applied`}
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
              {`.pf-c-dropdown`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Defines the parent wrapper of the dropdown.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-dropdown__toggle`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<button>`}
            </code>
          </td>
          <td>
            {`Defines the dropdown toggle.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-dropdown__toggle-icon`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Defines the dropdown toggle icon.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-dropdown__toggle-text`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Defines the dropdown toggle text. `}
            <strong>
              {`Required when text is present, adds truncation`}
            </strong>
            {`.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-dropdown__toggle-check`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<label>`}
            </code>
          </td>
          <td>
            {`Defines a checkbox in the toggle area of a split button dropdown.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-dropdown__toggle-button`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<button>`}
            </code>
          </td>
          <td>
            {`Defines the toggle button for a split button dropdown.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-dropdown__menu`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<ul>`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Defines the parent wrapper of the menu items.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-dropdown__menu-item`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<a>`}
            </code>
          </td>
          <td>
            {`Defines a menu item that navigates to another page.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-dropdown__menu-item-icon`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Defines the wrapper for the menu item icon.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-dropdown__menu-item-description`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Defines the wrapper for the menu item description.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-dropdown__menu-item-main`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Defines the wrapper for the menu item main element. Use when the description element is present.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-dropdown__toggle-image`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Defines the wrapper for the dropdown toggle button image.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-dropdown__menu-item`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<button>`}
            </code>
          </td>
          <td>
            {`Defines a menu item that performs an action on the current page.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-dropdown__group`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<section>`}
            </code>
          </td>
          <td>
            {`Defines a group of items in a dropdown. `}
            <strong>
              {`Required when there is more than one group in a dropdown`}
            </strong>
            {`.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-dropdown__group-title`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<h1>`}
            </code>
          </td>
          <td>
            {`Defines the title for a group of items in the dropdown menu.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-expanded`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-dropdown`}
            </code>
          </td>
          <td>
            {`Modifies for the expanded state.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-top`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-dropdown`}
            </code>
          </td>
          <td>
            {`Modifies to display the menu above the toggle.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-align-right`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-dropdown__menu`}
            </code>
          </td>
          <td>
            {`Modifies to display the menu aligned to the right edge of the toggle.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-split-button`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-dropdown__toggle`}
            </code>
          </td>
          <td>
            {`Modifies the dropdown toggle area to allow for interactive elements.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-action`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-dropdown__toggle.pf-m-split-button`}
            </code>
          </td>
          <td>
            {`Modifies the dropdown toggle for when an action is placed beside a toggle button in a split button dropdown.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-text`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-dropdown__menu-item`}
            </code>
          </td>
          <td>
            {`Modifies a menu item to be non-interactive text.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-plain`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-dropdown__toggle`}
            </code>
          </td>
          <td>
            {`Modifies to display the toggle with no border.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-primary`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-dropdown__toggle`}
            </code>
          </td>
          <td>
            {`Modifies to display the toggle with primary styles.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-disabled`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`a.pf-c-dropdown__menu-item`}
            </code>
          </td>
          <td>
            {`Modifies to display the menu item as disabled. This applies to `}
            <code {...{"className":"ws-code"}}>
              {`a.pf-c-dropdown__menu-item`}
            </code>
            {` and should not be used in lieu of the `}
            <code {...{"className":"ws-code"}}>
              {`disabled`}
            </code>
            {` attribute on `}
            <code {...{"className":"ws-code"}}>
              {`button.pf-c-dropdown__menu-item`}
            </code>
            {`.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-disabled`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`div.pf-c-dropdown__toggle`}
            </code>
          </td>
          <td>
            {`Modifies to display the dropdown toggle as disabled. This applies to `}
            <code {...{"className":"ws-code"}}>
              {`div.pf-c-dropdown__toggle`}
            </code>
            {` and should not be used in lieu of the `}
            <code {...{"className":"ws-code"}}>
              {`disabled`}
            </code>
            {` attribute on `}
            <code {...{"className":"ws-code"}}>
              {`button.pf-c-dropdown__toggle`}
            </code>
            {`. When this is used, `}
            <code {...{"className":"ws-code"}}>
              {`disabled`}
            </code>
            {` should also be added to any form elements in `}
            <code {...{"className":"ws-code"}}>
              {`div.pf-c-dropdown__toggle`}
            </code>
            {`.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-icon`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-dropdown__menu-item`}
            </code>
          </td>
          <td>
            {`Modifies an item to support adding an icon.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-active`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-dropdown__toggle`}
            </code>
          </td>
          <td>
            {`Modifies the dropdown menu toggle for the active state.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-description`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-dropdown__menu-item`}
            </code>
          </td>
          <td>
            {`Modifies an item to support adding a description.`}
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationComponentsDropdownCoreDocs.Component.displayName = 'DocumentationComponentsDropdownCoreDocs';
