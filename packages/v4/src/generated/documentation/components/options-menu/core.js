import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../../../../node_modules/@patternfly/patternfly/docs/components/OptionsMenu/examples/./OptionsMenu.css'

export const DocumentationComponentsOptionsMenuCoreDocs = {
  "slug": "/documentation/components/options-menu/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/OptionsMenu/examples/OptionsMenu.md",
  "section": "components",
  "id": "Options menu",
  "title": "Options menu",
  "toc": [
    "Examples",
    "Documentation"
  ],
  "cssPrefix": "pf-c-options-menu"
};
DocumentationComponentsOptionsMenuCoreDocs.liveContext = {
  
};
DocumentationComponentsOptionsMenuCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsOptionsMenuCoreDocs} {...{"code":"<div class=\"pf-c-options-menu\">\n  <button class=\"pf-c-options-menu__toggle\" type=\"button\" id=\"options-menu-single-example-toggle\" aria-haspopup=\"listbox\" aria-expanded=\"false\">\n    <span class=\"pf-c-options-menu__toggle-text\">Options menu</span>\n    <div class=\"pf-c-options-menu__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </div>\n  </button>\n  <ul class=\"pf-c-options-menu__menu\" aria-labelledby=\"options-menu-single-example-toggle\" hidden>\n    <li>\n      <button class=\"pf-c-options-menu__menu-item\" type=\"button\">Option 1</button>\n    </li>\n    <li>\n      <button class=\"pf-c-options-menu__menu-item\" type=\"button\">Option 2\n        <div class=\"pf-c-options-menu__menu-item-icon\">\n          <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n        </div>\n      </button>\n    </li>\n    <li>\n      <button class=\"pf-c-options-menu__menu-item\" type=\"button\">Option 3</button>\n    </li>\n  </ul>\n</div>\n<div class=\"pf-c-options-menu pf-m-expanded\">\n  <button class=\"pf-c-options-menu__toggle\" type=\"button\" id=\"options-menu-single-expanded-example-toggle\" aria-haspopup=\"listbox\" aria-expanded=\"true\">\n    <span class=\"pf-c-options-menu__toggle-text\">Options menu</span>\n    <div class=\"pf-c-options-menu__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </div>\n  </button>\n  <ul class=\"pf-c-options-menu__menu\" aria-labelledby=\"options-menu-single-expanded-example-toggle\">\n    <li>\n      <button class=\"pf-c-options-menu__menu-item\" type=\"button\">Option 1</button>\n    </li>\n    <li>\n      <button class=\"pf-c-options-menu__menu-item\" type=\"button\">Option 2\n        <div class=\"pf-c-options-menu__menu-item-icon\">\n          <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n        </div>\n      </button>\n    </li>\n    <li>\n      <button class=\"pf-c-options-menu__menu-item\" type=\"button\">Option 3</button>\n    </li>\n  </ul>\n</div>","title":"Single option","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsOptionsMenuCoreDocs} {...{"code":"<div class=\"pf-c-options-menu\">\n  <button class=\"pf-c-options-menu__toggle\" type=\"button\" id=\"options-menu-single-disabled-example-toggle\" aria-haspopup=\"listbox\" aria-expanded=\"false\" disabled>\n    <span class=\"pf-c-options-menu__toggle-text\">Disabled options menu</span>\n    <div class=\"pf-c-options-menu__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </div>\n  </button>\n</div>","title":"Disabled","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsOptionsMenuCoreDocs} {...{"code":"<div class=\"pf-c-options-menu\">\n  <button class=\"pf-c-options-menu__toggle\" type=\"button\" id=\"options-menu-multiple-example-toggle\" aria-haspopup=\"listbox\" aria-expanded=\"false\">\n    <span class=\"pf-c-options-menu__toggle-text\">Sort by</span>\n    <div class=\"pf-c-options-menu__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </div>\n  </button>\n  <ul class=\"pf-c-options-menu__menu\" aria-labelledby=\"options-menu-multiple-example-toggle\" hidden>\n    <li>\n      <ul aria-label=\"Sort by\">\n        <li>\n          <button class=\"pf-c-options-menu__menu-item\" type=\"button\">Name</button>\n        </li>\n        <li>\n          <button class=\"pf-c-options-menu__menu-item\" type=\"button\">Date\n            <div class=\"pf-c-options-menu__menu-item-icon\">\n              <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n            </div>\n          </button>\n        </li>\n        <li>\n          <button class=\"pf-c-options-menu__menu-item\" type=\"button\" disabled>Disabled</button>\n        </li>\n        <li>\n          <button class=\"pf-c-options-menu__menu-item\" type=\"button\">Size</button>\n        </li>\n      </ul>\n    </li>\n    <li class=\"pf-c-divider\" role=\"separator\"></li>\n    <li>\n      <ul aria-label=\"Sort direction\">\n        <li>\n          <button class=\"pf-c-options-menu__menu-item\" type=\"button\">Ascending\n            <div class=\"pf-c-options-menu__menu-item-icon\">\n              <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n            </div>\n          </button>\n        </li>\n        <li>\n          <button class=\"pf-c-options-menu__menu-item\" type=\"button\">Descending</button>\n        </li>\n      </ul>\n    </li>\n  </ul>\n</div>\n<div class=\"pf-c-options-menu pf-m-expanded\">\n  <button class=\"pf-c-options-menu__toggle\" type=\"button\" id=\"options-menu-multiple-expanded-example-toggle\" aria-haspopup=\"listbox\" aria-expanded=\"true\">\n    <span class=\"pf-c-options-menu__toggle-text\">Sort by</span>\n    <div class=\"pf-c-options-menu__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </div>\n  </button>\n  <ul class=\"pf-c-options-menu__menu\" aria-labelledby=\"options-menu-multiple-expanded-example-toggle\">\n    <li>\n      <ul aria-label=\"Sort by\">\n        <li>\n          <button class=\"pf-c-options-menu__menu-item\" type=\"button\">Name</button>\n        </li>\n        <li>\n          <button class=\"pf-c-options-menu__menu-item\" type=\"button\">Date\n            <div class=\"pf-c-options-menu__menu-item-icon\">\n              <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n            </div>\n          </button>\n        </li>\n        <li>\n          <button class=\"pf-c-options-menu__menu-item\" type=\"button\" disabled>Disabled</button>\n        </li>\n        <li>\n          <button class=\"pf-c-options-menu__menu-item\" type=\"button\">Size</button>\n        </li>\n      </ul>\n    </li>\n    <li class=\"pf-c-divider\" role=\"separator\"></li>\n    <li>\n      <ul aria-label=\"Sort direction\">\n        <li>\n          <button class=\"pf-c-options-menu__menu-item\" type=\"button\">Ascending\n            <div class=\"pf-c-options-menu__menu-item-icon\">\n              <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n            </div>\n          </button>\n        </li>\n        <li>\n          <button class=\"pf-c-options-menu__menu-item\" type=\"button\">Descending</button>\n        </li>\n      </ul>\n    </li>\n  </ul>\n</div>","title":"Multiple options","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsOptionsMenuCoreDocs} {...{"code":"<div class=\"pf-c-options-menu\">\n  <button class=\"pf-c-options-menu__toggle pf-m-plain\" type=\"button\" id=\"options-menu-plain-disabled-example-toggle\" aria-haspopup=\"listbox\" aria-expanded=\"false\" disabled aria-label=\"Sort by\">\n    <i class=\"fas fa-sort-amount-down\" aria-hidden=\"true\"></i>\n  </button>\n  <ul class=\"pf-c-options-menu__menu\" aria-labelledby=\"options-menu-plain-disabled-example-toggle\" hidden>\n    <li>\n      <button class=\"pf-c-options-menu__menu-item\" type=\"button\">Option 1</button>\n    </li>\n    <li>\n      <button class=\"pf-c-options-menu__menu-item\" type=\"button\">Option 2\n        <div class=\"pf-c-options-menu__menu-item-icon\">\n          <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n        </div>\n      </button>\n    </li>\n    <li>\n      <button class=\"pf-c-options-menu__menu-item\" type=\"button\">Option 3</button>\n    </li>\n  </ul>\n</div>\n<div class=\"pf-c-options-menu\">\n  <button class=\"pf-c-options-menu__toggle pf-m-plain\" type=\"button\" id=\"options-menu-plain-example-toggle\" aria-haspopup=\"listbox\" aria-expanded=\"false\" aria-label=\"Sort by\">\n    <i class=\"fas fa-sort-amount-down\" aria-hidden=\"true\"></i>\n  </button>\n  <ul class=\"pf-c-options-menu__menu\" aria-labelledby=\"options-menu-plain-example-toggle\" hidden>\n    <li>\n      <button class=\"pf-c-options-menu__menu-item\" type=\"button\">Option 1</button>\n    </li>\n    <li>\n      <button class=\"pf-c-options-menu__menu-item\" type=\"button\">Option 2\n        <div class=\"pf-c-options-menu__menu-item-icon\">\n          <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n        </div>\n      </button>\n    </li>\n    <li>\n      <button class=\"pf-c-options-menu__menu-item\" type=\"button\">Option 3</button>\n    </li>\n  </ul>\n</div>\n<div class=\"pf-c-options-menu pf-m-expanded\">\n  <button class=\"pf-c-options-menu__toggle pf-m-plain\" type=\"button\" id=\"options-menu-plain-expanded-example-toggle\" aria-haspopup=\"listbox\" aria-expanded=\"true\" aria-label=\"Sort by\">\n    <i class=\"fas fa-sort-amount-down\" aria-hidden=\"true\"></i>\n  </button>\n  <ul class=\"pf-c-options-menu__menu\" aria-labelledby=\"options-menu-plain-expanded-example-toggle\">\n    <li>\n      <button class=\"pf-c-options-menu__menu-item\" type=\"button\">Option 1</button>\n    </li>\n    <li>\n      <button class=\"pf-c-options-menu__menu-item\" type=\"button\">Option 2\n        <div class=\"pf-c-options-menu__menu-item-icon\">\n          <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n        </div>\n      </button>\n    </li>\n    <li>\n      <button class=\"pf-c-options-menu__menu-item\" type=\"button\">Option 3</button>\n    </li>\n  </ul>\n</div>","title":"Plain","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsOptionsMenuCoreDocs} {...{"code":"<div class=\"pf-c-options-menu pf-m-expanded pf-m-top\">\n  <button class=\"pf-c-options-menu__toggle\" type=\"button\" id=\"options-menu-top-example-toggle\" aria-haspopup=\"listbox\" aria-expanded=\"true\">\n    <span class=\"pf-c-options-menu__toggle-text\">Options menu</span>\n    <div class=\"pf-c-options-menu__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </div>\n  </button>\n  <ul class=\"pf-c-options-menu__menu pf-m-top\" aria-labelledby=\"options-menu-top-example-toggle\">\n    <li>\n      <button class=\"pf-c-options-menu__menu-item\" type=\"button\">Option 1</button>\n    </li>\n    <li>\n      <button class=\"pf-c-options-menu__menu-item\" type=\"button\">Option 2\n        <div class=\"pf-c-options-menu__menu-item-icon\">\n          <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n        </div>\n      </button>\n    </li>\n    <li>\n      <button class=\"pf-c-options-menu__menu-item\" type=\"button\">Option 3</button>\n    </li>\n  </ul>\n</div>","title":"Align top","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsOptionsMenuCoreDocs} {...{"code":"<div class=\"pf-c-options-menu pf-m-expanded pf-m-align-right\">\n  <button class=\"pf-c-options-menu__toggle\" type=\"button\" id=\"options-menu-align-right-example-toggle\" aria-haspopup=\"listbox\" aria-expanded=\"true\">\n    <span class=\"pf-c-options-menu__toggle-text\">Options menu</span>\n    <div class=\"pf-c-options-menu__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </div>\n  </button>\n  <ul class=\"pf-c-options-menu__menu pf-m-align-right\" aria-labelledby=\"options-menu-align-right-example-toggle\">\n    <li>\n      <button class=\"pf-c-options-menu__menu-item\" type=\"button\">Option 1</button>\n    </li>\n    <li>\n      <button class=\"pf-c-options-menu__menu-item\" type=\"button\">Option 2\n        <div class=\"pf-c-options-menu__menu-item-icon\">\n          <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n        </div>\n      </button>\n    </li>\n    <li>\n      <button class=\"pf-c-options-menu__menu-item\" type=\"button\">Option 3</button>\n    </li>\n  </ul>\n</div>","title":"Align right","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsOptionsMenuCoreDocs} {...{"code":"<div class=\"pf-c-options-menu\">\n  <div class=\"pf-c-options-menu__toggle pf-m-text pf-m-disabled pf-m-plain\">\n    <span class=\"pf-c-options-menu__toggle-text\">Custom text</span>\n    <button class=\"pf-c-options-menu__toggle-button\" id=\"options-menu-disabled-text-example-toggle\" aria-haspopup=\"listbox\" aria-expanded=\"false\" aria-label=\"Options menu\" disabled>\n      <span class=\"pf-c-options-menu__toggle-button-icon\">\n        <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n  </div>\n  <ul class=\"pf-c-options-menu__menu\" aria-labelledby=\"options-menu-disabled-text-example-toggle\" hidden>\n    <li>\n      <button class=\"pf-c-options-menu__menu-item\" type=\"button\">Option 1</button>\n    </li>\n    <li>\n      <button class=\"pf-c-options-menu__menu-item\" type=\"button\">Option 2\n        <div class=\"pf-c-options-menu__menu-item-icon\">\n          <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n        </div>\n      </button>\n    </li>\n    <li>\n      <button class=\"pf-c-options-menu__menu-item\" type=\"button\">Option 3</button>\n    </li>\n  </ul>\n</div>\n<div class=\"pf-c-options-menu\">\n  <div class=\"pf-c-options-menu__toggle pf-m-text pf-m-plain\">\n    <span class=\"pf-c-options-menu__toggle-text\">Custom text</span>\n    <button class=\"pf-c-options-menu__toggle-button\" id=\"options-menu-plain-text-example-toggle\" aria-haspopup=\"listbox\" aria-expanded=\"false\" aria-label=\"Options menu\">\n      <span class=\"pf-c-options-menu__toggle-button-icon\">\n        <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n  </div>\n  <ul class=\"pf-c-options-menu__menu\" aria-labelledby=\"options-menu-plain-text-example-toggle\" hidden>\n    <li>\n      <button class=\"pf-c-options-menu__menu-item\" type=\"button\">Option 1</button>\n    </li>\n    <li>\n      <button class=\"pf-c-options-menu__menu-item\" type=\"button\">Option 2\n        <div class=\"pf-c-options-menu__menu-item-icon\">\n          <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n        </div>\n      </button>\n    </li>\n    <li>\n      <button class=\"pf-c-options-menu__menu-item\" type=\"button\">Option 3</button>\n    </li>\n  </ul>\n</div>\n<div class=\"pf-c-options-menu pf-m-expanded\">\n  <div class=\"pf-c-options-menu__toggle pf-m-text pf-m-plain\">\n    <span class=\"pf-c-options-menu__toggle-text\">Custom text</span>\n    <button class=\"pf-c-options-menu__toggle-button\" id=\"options-menu-plain-text-expanded-example-toggle\" aria-haspopup=\"listbox\" aria-expanded=\"true\" aria-label=\"Options menu\">\n      <span class=\"pf-c-options-menu__toggle-button-icon\">\n        <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n  </div>\n  <ul class=\"pf-c-options-menu__menu\" aria-labelledby=\"options-menu-plain-text-expanded-example-toggle\">\n    <li>\n      <button class=\"pf-c-options-menu__menu-item\" type=\"button\">Option 1</button>\n    </li>\n    <li>\n      <button class=\"pf-c-options-menu__menu-item\" type=\"button\">Option 2\n        <div class=\"pf-c-options-menu__menu-item-icon\">\n          <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n        </div>\n      </button>\n    </li>\n    <li>\n      <button class=\"pf-c-options-menu__menu-item\" type=\"button\">Option 3</button>\n    </li>\n  </ul>\n</div>","title":"Plain with text","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsOptionsMenuCoreDocs} {...{"code":"<div class=\"pf-c-options-menu pf-m-expanded\">\n  <button class=\"pf-c-options-menu__toggle\" type=\"button\" id=\"options-menu-groups-toggle\" aria-haspopup=\"listbox\" aria-expanded=\"true\">\n    <span class=\"pf-c-options-menu__toggle-text\">Options menu</span>\n    <div class=\"pf-c-options-menu__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </div>\n  </button>\n  <div class=\"pf-c-options-menu__menu\" aria-labelledby=\"options-menu-groups-toggle\">\n    <section class=\"pf-c-options-menu__group\">\n      <ul>\n        <li>\n          <button class=\"pf-c-options-menu__menu-item\" type=\"button\">Option 1</button>\n        </li>\n        <li>\n          <button class=\"pf-c-options-menu__menu-item\" type=\"button\">Option 2\n            <div class=\"pf-c-options-menu__menu-item-icon\">\n              <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n            </div>\n          </button>\n        </li>\n      </ul>\n    </section>\n    <section class=\"pf-c-options-menu__group\">\n      <h1 class=\"pf-c-options-menu__group-title\">Group 1</h1>\n      <ul>\n        <li>\n          <button class=\"pf-c-options-menu__menu-item\" type=\"button\">Option 1</button>\n        </li>\n        <li>\n          <button class=\"pf-c-options-menu__menu-item\" type=\"button\">Option 2</button>\n        </li>\n      </ul>\n    </section>\n    <section class=\"pf-c-options-menu__group\">\n      <h1 class=\"pf-c-options-menu__group-title\">Group 2</h1>\n      <ul>\n        <li>\n          <button class=\"pf-c-options-menu__menu-item\" type=\"button\">Option 1</button>\n        </li>\n        <li>\n          <button class=\"pf-c-options-menu__menu-item\" type=\"button\">Option 2</button>\n        </li>\n      </ul>\n    </section>\n  </div>\n</div>","title":"With groups","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsOptionsMenuCoreDocs} {...{"code":"<div class=\"pf-c-options-menu pf-m-expanded\">\n  <button class=\"pf-c-options-menu__toggle\" type=\"button\" id=\"options-menu-groups-and-dividers-between-groups-toggle\" aria-haspopup=\"listbox\" aria-expanded=\"true\">\n    <span class=\"pf-c-options-menu__toggle-text\">Options menu</span>\n    <div class=\"pf-c-options-menu__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </div>\n  </button>\n  <div class=\"pf-c-options-menu__menu\" aria-labelledby=\"options-menu-groups-and-dividers-between-groups-toggle\">\n    <section class=\"pf-c-options-menu__group\">\n      <ul>\n        <li>\n          <button class=\"pf-c-options-menu__menu-item\" type=\"button\">Option 1</button>\n        </li>\n        <li>\n          <button class=\"pf-c-options-menu__menu-item\" type=\"button\">Option 2\n            <div class=\"pf-c-options-menu__menu-item-icon\">\n              <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n            </div>\n          </button>\n        </li>\n      </ul>\n    </section>\n    <hr class=\"pf-c-divider\" />\n    <section class=\"pf-c-options-menu__group\">\n      <h1 class=\"pf-c-options-menu__group-title\">Group 1</h1>\n      <ul>\n        <li>\n          <button class=\"pf-c-options-menu__menu-item\" type=\"button\">Option 1</button>\n        </li>\n        <li>\n          <button class=\"pf-c-options-menu__menu-item\" type=\"button\">Option 2</button>\n        </li>\n      </ul>\n    </section>\n    <hr class=\"pf-c-divider\" />\n    <section class=\"pf-c-options-menu__group\">\n      <h1 class=\"pf-c-options-menu__group-title\">Group 2</h1>\n      <ul>\n        <li>\n          <button class=\"pf-c-options-menu__menu-item\" type=\"button\">Option 1</button>\n        </li>\n        <li>\n          <button class=\"pf-c-options-menu__menu-item\" type=\"button\">Option 2</button>\n        </li>\n      </ul>\n    </section>\n  </div>\n</div>","title":"With groups and dividers between groups","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsOptionsMenuCoreDocs} {...{"code":"<div class=\"pf-c-options-menu pf-m-expanded\">\n  <button class=\"pf-c-options-menu__toggle\" type=\"button\" id=\"options-menu-groups-and-dividers-between-items-toggle\" aria-haspopup=\"listbox\" aria-expanded=\"true\">\n    <span class=\"pf-c-options-menu__toggle-text\">Options menu</span>\n    <div class=\"pf-c-options-menu__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </div>\n  </button>\n  <div class=\"pf-c-options-menu__menu\" aria-labelledby=\"options-menu-groups-and-dividers-between-items-toggle\">\n    <section class=\"pf-c-options-menu__group\">\n      <ul>\n        <li>\n          <button class=\"pf-c-options-menu__menu-item\" type=\"button\">Option 1</button>\n        </li>\n        <li>\n          <button class=\"pf-c-options-menu__menu-item\" type=\"button\">Option 2\n            <div class=\"pf-c-options-menu__menu-item-icon\">\n              <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n            </div>\n          </button>\n        </li>\n        <li class=\"pf-c-divider\" role=\"separator\"></li>\n      </ul>\n    </section>\n    <section class=\"pf-c-options-menu__group\">\n      <h1 class=\"pf-c-options-menu__group-title\">Group 1</h1>\n      <ul>\n        <li>\n          <button class=\"pf-c-options-menu__menu-item\" type=\"button\">Option 1</button>\n        </li>\n        <li>\n          <button class=\"pf-c-options-menu__menu-item\" type=\"button\">Option 2</button>\n        </li>\n        <li class=\"pf-c-divider\" role=\"separator\"></li>\n      </ul>\n    </section>\n    <section class=\"pf-c-options-menu__group\">\n      <h1 class=\"pf-c-options-menu__group-title\">Group 2</h1>\n      <ul>\n        <li>\n          <button class=\"pf-c-options-menu__menu-item\" type=\"button\">Option 1</button>\n        </li>\n        <li>\n          <button class=\"pf-c-options-menu__menu-item\" type=\"button\">Option 2</button>\n        </li>\n      </ul>\n    </section>\n  </div>\n</div>","title":"With groups and dividers between items","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Accessibility`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <em>
        {`This section to be updated once the React implementation is complete.`}
      </em>
    </p>
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
              {`role`}
            </code>
            {` or `}
            <code {...{"className":"ws-code"}}>
              {`aria`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`pf-c-options-menu`}
            </code>
          </td>
          <td>
            {`accessibility notes.`}
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
              {`.pf-c-options-menu__toggle`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-options-menu__toggle-button`}
            </code>
          </td>
          <td>
            {`Disables the options menu toggle and toggle button and removes it from keyboard focus.`}
          </td>
        </tr>
      </tbody>
    </table>
    <p {...{"className":"ws-p"}}>
      <em>
        {`Note:`}
      </em>
      {` The attribute `}
      <code {...{"className":"ws-code"}}>
        {`aria-selected="true"`}
      </code>
      {` should be set programmatically to the selected item(s).`}
    </p>
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
              {`.pf-c-options-menu`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates a custom options menu.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-options-menu__toggle`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<button>`}
            </code>
          </td>
          <td>
            {`Initiates a custom toggle.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-options-menu__toggle-text`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Initiates a wrapper for toggle text.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-options-menu__toggle-icon`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<i>`}
            </code>
          </td>
          <td>
            {`Initiates the up/down arrow beside toggle text.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-options-menu__toggle-button`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<button>`}
            </code>
          </td>
          <td>
            {`Initiates a custom toggle button for use when `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-options-menu__toggle`}
            </code>
            {` is a `}
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
            {` or non-interactive element.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-options-menu__menu`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<ul>`}
            </code>
          </td>
          <td>
            {`Initiates the custom options-menu menu.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-options-menu__menu-item`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<li>`}
            </code>
          </td>
          <td>
            {`Initiates the items in the custom options-menu menu.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-options-menu__menu-item-icon`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<i>`}
            </code>
          </td>
          <td>
            {`Initiates the icon to indicate selected menu items.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-options-menu__group`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<section>`}
            </code>
          </td>
          <td>
            {`Defines a group of items in an options menu. `}
            <strong>
              {`Required when there is more than one group in an options menu`}
            </strong>
            {`.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-options-menu__group-title`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<h1>`}
            </code>
          </td>
          <td>
            {`Defines the title for a group of items in an options menu.`}
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
              {`.pf-c-options-menu`}
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
              {`.pf-c-options-menu__menu`}
            </code>
          </td>
          <td>
            {`Modifies to display the menu aligned to the right edge of the toggle`}
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
              {`.pf-c-options-menu`}
            </code>
          </td>
          <td>
            {`Modifies for the expanded state.`}
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
              {`.pf-c-options-menu__toggle`}
            </code>
          </td>
          <td>
            {`Modifies to display the toggle with no border.`}
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
              {`.pf-c-options-menu__toggle`}
            </code>
          </td>
          <td>
            {`Modifies to display the options menu toggle as disabled. This applies to `}
            <code {...{"className":"ws-code"}}>
              {`pf-c-options-menu__toggle`}
            </code>
            {` and should not be used in lieu of the `}
            <code {...{"className":"ws-code"}}>
              {`disabled`}
            </code>
            {` attribute on `}
            <code {...{"className":"ws-code"}}>
              {`pf-c-options-menu__toggle`}
            </code>
            {`. When this is used, `}
            <code {...{"className":"ws-code"}}>
              {`disabled`}
            </code>
            {` should also be added to any form elements in `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-options-menu__toggle`}
            </code>
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
              {`.pf-c-options-menu__toggle`}
            </code>
          </td>
          <td>
            {`For use when the `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-options-menu__toggle`}
            </code>
            {` is a `}
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
            {` or some non-interactive elment, and you're using a custom `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-options-menu__toggle-button`}
            </code>
            {` to toggle the options menu.`}
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
              {`.pf-c-options-menu__toggle`}
            </code>
          </td>
          <td>
            {`Forces display of the active state of the toggle.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-selected`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-options-menu__menu-item`}
            </code>
          </td>
          <td>
            {`Modifies the menu item for the selected state.`}
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationComponentsOptionsMenuCoreDocs.Component.displayName = 'DocumentationComponentsOptionsMenuCoreDocs';
