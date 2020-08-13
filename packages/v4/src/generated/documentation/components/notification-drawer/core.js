import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsNotificationDrawerCoreDocs = {
  "slug": "/documentation/components/notification-drawer/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/NotificationDrawer/examples/NotificationDrawer.md",
  "section": "components",
  "id": "Notification drawer",
  "title": "Notification drawer",
  "toc": [
    "Examples"
  ],
  "cssPrefix": "pf-c-notification-drawer"
};
DocumentationComponentsNotificationDrawerCoreDocs.liveContext = {
  
};
DocumentationComponentsNotificationDrawerCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsNotificationDrawerCoreDocs} {...{"code":"<div class=\"pf-c-notification-drawer\">\n  <div class=\"pf-c-notification-drawer__header\">\n    <h1 class=\"pf-c-notification-drawer__header-title\">Notifications</h1>\n    <span class=\"pf-c-notification-drawer__header-status\">3 unread</span>\n    <div class=\"pf-c-notification-drawer__header-action\">\n      <div class=\"pf-c-dropdown\">\n        <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"notification-drawer-basic-header-action-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n          <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n        </button>\n        <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"notification-drawer-basic-header-action-button\" hidden>\n          <li>\n            <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n          </li>\n          <li>\n            <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n          </li>\n          <li>\n            <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n          </li>\n          <li>\n            <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n          </li>\n          <li class=\"pf-c-divider\" role=\"separator\"></li>\n          <li>\n            <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"pf-c-notification-drawer__body\">\n    <ul class=\"pf-c-notification-drawer__list\">\n      <li class=\"pf-c-notification-drawer__list-item pf-m-hoverable pf-m-info \" tabindex=\"0\">\n        <div class=\"pf-c-notification-drawer__list-item-header\">\n          <span class=\"pf-c-notification-drawer__list-item-header-icon\">\n            <i class=\"fas fa-info-circle\" aria-hidden=\"true\"></i>\n          </span>\n          <h2 class=\"pf-c-notification-drawer__list-item-header-title\">\n            <span class=\"pf-screen-reader\">Info notification:</span>Unread info notification title</h2>\n        </div>\n        <div class=\"pf-c-notification-drawer__list-item-action\">\n          <div class=\"pf-c-dropdown\">\n            <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"notification-drawer-basic-action1-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n              <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n            </button>\n            <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"notification-drawer-basic-action1-button\" hidden>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n              </li>\n              <li>\n                <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n              </li>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n              </li>\n              <li>\n                <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n              </li>\n              <li class=\"pf-c-divider\" role=\"separator\"></li>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"pf-c-notification-drawer__list-item-description\">This is an info notification description.</div>\n        <div class=\"pf-c-notification-drawer__list-item-timestamp\">5 minutes ago</div>\n      </li>\n      <li class=\"pf-c-notification-drawer__list-item pf-m-hoverable pf-m-danger \" tabindex=\"0\">\n        <div class=\"pf-c-notification-drawer__list-item-header\">\n          <span class=\"pf-c-notification-drawer__list-item-header-icon\">\n            <i class=\"fas fa-exclamation-circle\" aria-hidden=\"true\"></i>\n          </span>\n          <h2 class=\"pf-c-notification-drawer__list-item-header-title\">\n            <span class=\"pf-screen-reader\">Danger notification:</span>Unread danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines.</h2>\n        </div>\n        <div class=\"pf-c-notification-drawer__list-item-action\">\n          <div class=\"pf-c-dropdown\">\n            <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"notification-drawer-basic-action2-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n              <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n            </button>\n            <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"notification-drawer-basic-action2-button\" hidden>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n              </li>\n              <li>\n                <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n              </li>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n              </li>\n              <li>\n                <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n              </li>\n              <li class=\"pf-c-divider\" role=\"separator\"></li>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"pf-c-notification-drawer__list-item-description\">This is a danger notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines.</div>\n        <div class=\"pf-c-notification-drawer__list-item-timestamp\">10 minutes ago</div>\n      </li>\n      <li class=\"pf-c-notification-drawer__list-item pf-m-read pf-m-warning pf-m-hoverable\">\n        <div class=\"pf-c-notification-drawer__list-item-header\">\n          <span class=\"pf-c-notification-drawer__list-item-header-icon\">\n            <i class=\"fas fa-exclamation-triangle\" aria-hidden=\"true\"></i>\n          </span>\n          <h2 class=\"pf-c-notification-drawer__list-item-header-title\">\n            <span class=\"pf-screen-reader\">Warning notification:</span>Read warning notification title</h2>\n        </div>\n        <div class=\"pf-c-notification-drawer__list-item-action\">\n          <div class=\"pf-c-dropdown pf-m-top\">\n            <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"notification-drawer-basic-action3-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n              <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n            </button>\n            <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"notification-drawer-basic-action3-button\" hidden>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n              </li>\n              <li>\n                <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n              </li>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n              </li>\n              <li>\n                <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n              </li>\n              <li class=\"pf-c-divider\" role=\"separator\"></li>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"pf-c-notification-drawer__list-item-description\">This is a warning notification description.</div>\n        <div class=\"pf-c-notification-drawer__list-item-timestamp\">20 minutes ago</div>\n      </li>\n      <li class=\"pf-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable\">\n        <div class=\"pf-c-notification-drawer__list-item-header\">\n          <span class=\"pf-c-notification-drawer__list-item-header-icon\">\n            <i class=\"fas fa-check-circle\" aria-hidden=\"true\"></i>\n          </span>\n          <h2 class=\"pf-c-notification-drawer__list-item-header-title\">\n            <span class=\"pf-screen-reader\">Success notification:</span>Read success notification title</h2>\n        </div>\n        <div class=\"pf-c-notification-drawer__list-item-action\">\n          <div class=\"pf-c-dropdown pf-m-top\">\n            <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"notification-drawer-basic-action4-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n              <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n            </button>\n            <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"notification-drawer-basic-action4-button\" hidden>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n              </li>\n              <li>\n                <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n              </li>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n              </li>\n              <li>\n                <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n              </li>\n              <li class=\"pf-c-divider\" role=\"separator\"></li>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"pf-c-notification-drawer__list-item-description\">This is a success notification description.</div>\n        <div class=\"pf-c-notification-drawer__list-item-timestamp\">30 minutes ago</div>\n      </li>\n      <li class=\"pf-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable\">\n        <div class=\"pf-c-notification-drawer__list-item-header\">\n          <span class=\"pf-c-notification-drawer__list-item-header-icon\">\n            <i class=\"fas fa-check-circle\" aria-hidden=\"true\"></i>\n          </span>\n          <h2 class=\"pf-c-notification-drawer__list-item-header-title pf-m-truncate\">\n            <span class=\"pf-screen-reader\">Success notification:</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis odio risus. Ut dictum vitae sapien at posuere. Nullam suscipit massa quis lacus pellentesque scelerisque. Donec non maximus neque, quis ornare nunc. Vivamus in nibh sed libero feugiat feugiat. Nulla lacinia rutrum est, a commodo odio vestibulum suscipit. Nullam id quam et quam porttitor interdum quis nec tellus. Vestibulum arcu dui, pulvinar eu tellus in, semper mattis diam. Sed commodo tincidunt lacus non pulvinar. Curabitur tempor molestie vestibulum. Vivamus vel mi dignissim, efficitur neque eget, efficitur massa. Mauris vitae nunc augue. Donec augue lorem, malesuada et quam vitae, volutpat mattis nisi. Nullam nec venenatis ex, quis lobortis purus. Sed nisl dolor, mattis sit amet tincidunt quis, mollis sed massa.</h2>\n        </div>\n        <div class=\"pf-c-notification-drawer__list-item-action\">\n          <div class=\"pf-c-dropdown pf-m-top\">\n            <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"notification-drawer-basic-action5-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n              <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n            </button>\n            <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"notification-drawer-basic-action5-button\" hidden>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n              </li>\n              <li>\n                <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n              </li>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n              </li>\n              <li>\n                <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n              </li>\n              <li class=\"pf-c-divider\" role=\"separator\"></li>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"pf-c-notification-drawer__list-item-description\">This example uses \".pf-m-truncate\" to limit the title to a single line and truncate any overflow text with ellipses.</div>\n        <div class=\"pf-c-notification-drawer__list-item-timestamp\">40 minutes ago</div>\n      </li>\n      <li class=\"pf-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable\">\n        <div class=\"pf-c-notification-drawer__list-item-header\">\n          <span class=\"pf-c-notification-drawer__list-item-header-icon\">\n            <i class=\"fas fa-check-circle\" aria-hidden=\"true\"></i>\n          </span>\n          <h2 class=\"pf-c-notification-drawer__list-item-header-title pf-m-truncate\" style=\"--pf-c-notification-drawer__list-item-header-title--max-lines: 2\">\n            <span class=\"pf-screen-reader\">Success notification:</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis odio risus. Ut dictum vitae sapien at posuere. Nullam suscipit massa quis lacus pellentesque scelerisque. Donec non maximus neque, quis ornare nunc. Vivamus in nibh sed libero feugiat feugiat. Nulla lacinia rutrum est, a commodo odio vestibulum suscipit. Nullam id quam et quam porttitor interdum quis nec tellus. Vestibulum arcu dui, pulvinar eu tellus in, semper mattis diam. Sed commodo tincidunt lacus non pulvinar. Curabitur tempor molestie vestibulum. Vivamus vel mi dignissim, efficitur neque eget, efficitur massa. Mauris vitae nunc augue. Donec augue lorem, malesuada et quam vitae, volutpat mattis nisi. Nullam nec venenatis ex, quis lobortis purus. Sed nisl dolor, mattis sit amet tincidunt quis, mollis sed massa.</h2>\n        </div>\n        <div class=\"pf-c-notification-drawer__list-item-action\">\n          <div class=\"pf-c-dropdown pf-m-top\">\n            <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"notification-drawer-basic-action6-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n              <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n            </button>\n            <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"notification-drawer-basic-action6-button\" hidden>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n              </li>\n              <li>\n                <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n              </li>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n              </li>\n              <li>\n                <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n              </li>\n              <li class=\"pf-c-divider\" role=\"separator\"></li>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"pf-c-notification-drawer__list-item-description\">This example uses \".pf-m-truncate\" and sets \"--pf-c-notification-drawer__list-item-header-title--max-lines: 2\" to limit title to two lines and truncate any overflow text with ellipses.</div>\n        <div class=\"pf-c-notification-drawer__list-item-timestamp\">50 minutes ago</div>\n      </li>\n    </ul>\n  </div>\n</div>","title":"Basic","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsNotificationDrawerCoreDocs} {...{"code":"<div class=\"pf-c-notification-drawer\">\n  <div class=\"pf-c-notification-drawer__header\">\n    <h1 class=\"pf-c-notification-drawer__header-title\">Notifications</h1>\n    <span class=\"pf-c-notification-drawer__header-status\">3 unread</span>\n    <div class=\"pf-c-notification-drawer__header-action\">\n      <div class=\"pf-c-dropdown\">\n        <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"notification-drawer-groups-header-action-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n          <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n        </button>\n        <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"notification-drawer-groups-header-action-button\" hidden>\n          <li>\n            <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n          </li>\n          <li>\n            <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n          </li>\n          <li>\n            <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n          </li>\n          <li>\n            <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n          </li>\n          <li class=\"pf-c-divider\" role=\"separator\"></li>\n          <li>\n            <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"pf-c-notification-drawer__body\">\n    <div class=\"pf-c-notification-drawer__group-list\">\n      <section class=\"pf-c-notification-drawer__group\">\n        <h1>\n          <button class=\"pf-c-notification-drawer__group-toggle\" aria-expanded=\"false\">\n            <div class=\"pf-c-notification-drawer__group-toggle-title\">First notification group</div>\n            <div class=\"pf-c-notification-drawer__group-toggle-count\">\n              <span class=\"pf-c-badge pf-m-unread\">2</span>\n            </div>\n            <span class=\"pf-c-notification-drawer__group-toggle-icon\">\n              <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n            </span>\n          </button>\n        </h1>\n        <ul class=\"pf-c-notification-drawer__list\" hidden>\n          <li class=\"pf-c-notification-drawer__list-item pf-m-hoverable pf-m-info \" tabindex=\"0\">\n            <div class=\"pf-c-notification-drawer__list-item-header\">\n              <span class=\"pf-c-notification-drawer__list-item-header-icon\">\n                <i class=\"fas fa-info-circle\" aria-hidden=\"true\"></i>\n              </span>\n              <h2 class=\"pf-c-notification-drawer__list-item-header-title\">\n                <span class=\"pf-screen-reader\">Info notification:</span>Unread info notification title</h2>\n            </div>\n            <div class=\"pf-c-notification-drawer__list-item-action\">\n              <div class=\"pf-c-dropdown\">\n                <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"notification-drawer-groups-group1-action1-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                  <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                </button>\n                <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"notification-drawer-groups-group1-action1-button\" hidden>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                  </li>\n                  <li>\n                    <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                  </li>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                  </li>\n                  <li>\n                    <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                  </li>\n                  <li class=\"pf-c-divider\" role=\"separator\"></li>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"pf-c-notification-drawer__list-item-description\">This is an info notification description.</div>\n            <div class=\"pf-c-notification-drawer__list-item-timestamp\">5 minutes ago</div>\n          </li>\n          <li class=\"pf-c-notification-drawer__list-item pf-m-hoverable pf-m-danger \" tabindex=\"0\">\n            <div class=\"pf-c-notification-drawer__list-item-header\">\n              <span class=\"pf-c-notification-drawer__list-item-header-icon\">\n                <i class=\"fas fa-exclamation-circle\" aria-hidden=\"true\"></i>\n              </span>\n              <h2 class=\"pf-c-notification-drawer__list-item-header-title\">\n                <span class=\"pf-screen-reader\">Danger notification:</span>Unread danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines.</h2>\n            </div>\n            <div class=\"pf-c-notification-drawer__list-item-action\">\n              <div class=\"pf-c-dropdown\">\n                <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"notification-drawer-groups-group1-action2-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                  <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                </button>\n                <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"notification-drawer-groups-group1-action2-button\" hidden>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                  </li>\n                  <li>\n                    <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                  </li>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                  </li>\n                  <li>\n                    <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                  </li>\n                  <li class=\"pf-c-divider\" role=\"separator\"></li>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"pf-c-notification-drawer__list-item-description\">This is a danger notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines.</div>\n            <div class=\"pf-c-notification-drawer__list-item-timestamp\">10 minutes ago</div>\n          </li>\n          <li class=\"pf-c-notification-drawer__list-item pf-m-read pf-m-warning pf-m-hoverable\">\n            <div class=\"pf-c-notification-drawer__list-item-header\">\n              <span class=\"pf-c-notification-drawer__list-item-header-icon\">\n                <i class=\"fas fa-exclamation-triangle\" aria-hidden=\"true\"></i>\n              </span>\n              <h2 class=\"pf-c-notification-drawer__list-item-header-title\">\n                <span class=\"pf-screen-reader\">Warning notification:</span>Read warning notification title</h2>\n            </div>\n            <div class=\"pf-c-notification-drawer__list-item-action\">\n              <div class=\"pf-c-dropdown pf-m-top\">\n                <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"notification-drawer-groups-group1-action3-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                  <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                </button>\n                <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"notification-drawer-groups-group1-action3-button\" hidden>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                  </li>\n                  <li>\n                    <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                  </li>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                  </li>\n                  <li>\n                    <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                  </li>\n                  <li class=\"pf-c-divider\" role=\"separator\"></li>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"pf-c-notification-drawer__list-item-description\">This is a warning notification description.</div>\n            <div class=\"pf-c-notification-drawer__list-item-timestamp\">20 minutes ago</div>\n          </li>\n          <li class=\"pf-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable\">\n            <div class=\"pf-c-notification-drawer__list-item-header\">\n              <span class=\"pf-c-notification-drawer__list-item-header-icon\">\n                <i class=\"fas fa-check-circle\" aria-hidden=\"true\"></i>\n              </span>\n              <h2 class=\"pf-c-notification-drawer__list-item-header-title\">\n                <span class=\"pf-screen-reader\">Success notification:</span>Read success notification title</h2>\n            </div>\n            <div class=\"pf-c-notification-drawer__list-item-action\">\n              <div class=\"pf-c-dropdown pf-m-top\">\n                <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"notification-drawer-groups-group1-action4-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                  <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                </button>\n                <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"notification-drawer-groups-group1-action4-button\" hidden>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                  </li>\n                  <li>\n                    <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                  </li>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                  </li>\n                  <li>\n                    <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                  </li>\n                  <li class=\"pf-c-divider\" role=\"separator\"></li>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"pf-c-notification-drawer__list-item-description\">This is a success notification description.</div>\n            <div class=\"pf-c-notification-drawer__list-item-timestamp\">30 minutes ago</div>\n          </li>\n          <li class=\"pf-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable\">\n            <div class=\"pf-c-notification-drawer__list-item-header\">\n              <span class=\"pf-c-notification-drawer__list-item-header-icon\">\n                <i class=\"fas fa-check-circle\" aria-hidden=\"true\"></i>\n              </span>\n              <h2 class=\"pf-c-notification-drawer__list-item-header-title pf-m-truncate\">\n                <span class=\"pf-screen-reader\">Success notification:</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis odio risus. Ut dictum vitae sapien at posuere. Nullam suscipit massa quis lacus pellentesque scelerisque. Donec non maximus neque, quis ornare nunc. Vivamus in nibh sed libero feugiat feugiat. Nulla lacinia rutrum est, a commodo odio vestibulum suscipit. Nullam id quam et quam porttitor interdum quis nec tellus. Vestibulum arcu dui, pulvinar eu tellus in, semper mattis diam. Sed commodo tincidunt lacus non pulvinar. Curabitur tempor molestie vestibulum. Vivamus vel mi dignissim, efficitur neque eget, efficitur massa. Mauris vitae nunc augue. Donec augue lorem, malesuada et quam vitae, volutpat mattis nisi. Nullam nec venenatis ex, quis lobortis purus. Sed nisl dolor, mattis sit amet tincidunt quis, mollis sed massa.</h2>\n            </div>\n            <div class=\"pf-c-notification-drawer__list-item-action\">\n              <div class=\"pf-c-dropdown pf-m-top\">\n                <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"notification-drawer-groups-group1-action5-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                  <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                </button>\n                <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"notification-drawer-groups-group1-action5-button\" hidden>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                  </li>\n                  <li>\n                    <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                  </li>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                  </li>\n                  <li>\n                    <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                  </li>\n                  <li class=\"pf-c-divider\" role=\"separator\"></li>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"pf-c-notification-drawer__list-item-description\">This example uses \".pf-m-truncate\" to limit the title to a single line and truncate any overflow text with ellipses.</div>\n            <div class=\"pf-c-notification-drawer__list-item-timestamp\">40 minutes ago</div>\n          </li>\n          <li class=\"pf-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable\">\n            <div class=\"pf-c-notification-drawer__list-item-header\">\n              <span class=\"pf-c-notification-drawer__list-item-header-icon\">\n                <i class=\"fas fa-check-circle\" aria-hidden=\"true\"></i>\n              </span>\n              <h2 class=\"pf-c-notification-drawer__list-item-header-title pf-m-truncate\" style=\"--pf-c-notification-drawer__list-item-header-title--max-lines: 2\">\n                <span class=\"pf-screen-reader\">Success notification:</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis odio risus. Ut dictum vitae sapien at posuere. Nullam suscipit massa quis lacus pellentesque scelerisque. Donec non maximus neque, quis ornare nunc. Vivamus in nibh sed libero feugiat feugiat. Nulla lacinia rutrum est, a commodo odio vestibulum suscipit. Nullam id quam et quam porttitor interdum quis nec tellus. Vestibulum arcu dui, pulvinar eu tellus in, semper mattis diam. Sed commodo tincidunt lacus non pulvinar. Curabitur tempor molestie vestibulum. Vivamus vel mi dignissim, efficitur neque eget, efficitur massa. Mauris vitae nunc augue. Donec augue lorem, malesuada et quam vitae, volutpat mattis nisi. Nullam nec venenatis ex, quis lobortis purus. Sed nisl dolor, mattis sit amet tincidunt quis, mollis sed massa.</h2>\n            </div>\n            <div class=\"pf-c-notification-drawer__list-item-action\">\n              <div class=\"pf-c-dropdown pf-m-top\">\n                <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"notification-drawer-groups-group1-action6-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                  <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                </button>\n                <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"notification-drawer-groups-group1-action6-button\" hidden>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                  </li>\n                  <li>\n                    <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                  </li>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                  </li>\n                  <li>\n                    <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                  </li>\n                  <li class=\"pf-c-divider\" role=\"separator\"></li>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"pf-c-notification-drawer__list-item-description\">This example uses \".pf-m-truncate\" and sets \"--pf-c-notification-drawer__list-item-header-title--max-lines: 2\" to limit title to two lines and truncate any overflow text with ellipses.</div>\n            <div class=\"pf-c-notification-drawer__list-item-timestamp\">50 minutes ago</div>\n          </li>\n        </ul>\n      </section>\n      <section class=\"pf-c-notification-drawer__group pf-m-expanded\">\n        <h1>\n          <button class=\"pf-c-notification-drawer__group-toggle\" aria-expanded=\"true\">\n            <div class=\"pf-c-notification-drawer__group-toggle-title\">Second notification group</div>\n            <div class=\"pf-c-notification-drawer__group-toggle-count\">\n              <span class=\"pf-c-badge pf-m-unread\">2</span>\n            </div>\n            <span class=\"pf-c-notification-drawer__group-toggle-icon\">\n              <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n            </span>\n          </button>\n        </h1>\n        <ul class=\"pf-c-notification-drawer__list\">\n          <li class=\"pf-c-notification-drawer__list-item pf-m-hoverable pf-m-info \" tabindex=\"0\">\n            <div class=\"pf-c-notification-drawer__list-item-header\">\n              <span class=\"pf-c-notification-drawer__list-item-header-icon\">\n                <i class=\"fas fa-info-circle\" aria-hidden=\"true\"></i>\n              </span>\n              <h2 class=\"pf-c-notification-drawer__list-item-header-title\">\n                <span class=\"pf-screen-reader\">Info notification:</span>Unread info notification title</h2>\n            </div>\n            <div class=\"pf-c-notification-drawer__list-item-action\">\n              <div class=\"pf-c-dropdown\">\n                <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"notification-drawer-groups-group2-action1-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                  <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                </button>\n                <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"notification-drawer-groups-group2-action1-button\" hidden>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                  </li>\n                  <li>\n                    <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                  </li>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                  </li>\n                  <li>\n                    <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                  </li>\n                  <li class=\"pf-c-divider\" role=\"separator\"></li>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"pf-c-notification-drawer__list-item-description\">This is an info notification description.</div>\n            <div class=\"pf-c-notification-drawer__list-item-timestamp\">5 minutes ago</div>\n          </li>\n          <li class=\"pf-c-notification-drawer__list-item pf-m-hoverable pf-m-danger \" tabindex=\"0\">\n            <div class=\"pf-c-notification-drawer__list-item-header\">\n              <span class=\"pf-c-notification-drawer__list-item-header-icon\">\n                <i class=\"fas fa-exclamation-circle\" aria-hidden=\"true\"></i>\n              </span>\n              <h2 class=\"pf-c-notification-drawer__list-item-header-title\">\n                <span class=\"pf-screen-reader\">Danger notification:</span>Unread danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines.</h2>\n            </div>\n            <div class=\"pf-c-notification-drawer__list-item-action\">\n              <div class=\"pf-c-dropdown\">\n                <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"notification-drawer-groups-group2-action2-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                  <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                </button>\n                <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"notification-drawer-groups-group2-action2-button\" hidden>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                  </li>\n                  <li>\n                    <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                  </li>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                  </li>\n                  <li>\n                    <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                  </li>\n                  <li class=\"pf-c-divider\" role=\"separator\"></li>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"pf-c-notification-drawer__list-item-description\">This is a danger notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines.</div>\n            <div class=\"pf-c-notification-drawer__list-item-timestamp\">10 minutes ago</div>\n          </li>\n          <li class=\"pf-c-notification-drawer__list-item pf-m-read pf-m-warning pf-m-hoverable\">\n            <div class=\"pf-c-notification-drawer__list-item-header\">\n              <span class=\"pf-c-notification-drawer__list-item-header-icon\">\n                <i class=\"fas fa-exclamation-triangle\" aria-hidden=\"true\"></i>\n              </span>\n              <h2 class=\"pf-c-notification-drawer__list-item-header-title\">\n                <span class=\"pf-screen-reader\">Warning notification:</span>Read warning notification title</h2>\n            </div>\n            <div class=\"pf-c-notification-drawer__list-item-action\">\n              <div class=\"pf-c-dropdown pf-m-top\">\n                <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"notification-drawer-groups-group2-action3-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                  <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                </button>\n                <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"notification-drawer-groups-group2-action3-button\" hidden>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                  </li>\n                  <li>\n                    <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                  </li>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                  </li>\n                  <li>\n                    <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                  </li>\n                  <li class=\"pf-c-divider\" role=\"separator\"></li>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"pf-c-notification-drawer__list-item-description\">This is a warning notification description.</div>\n            <div class=\"pf-c-notification-drawer__list-item-timestamp\">20 minutes ago</div>\n          </li>\n          <li class=\"pf-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable\">\n            <div class=\"pf-c-notification-drawer__list-item-header\">\n              <span class=\"pf-c-notification-drawer__list-item-header-icon\">\n                <i class=\"fas fa-check-circle\" aria-hidden=\"true\"></i>\n              </span>\n              <h2 class=\"pf-c-notification-drawer__list-item-header-title\">\n                <span class=\"pf-screen-reader\">Success notification:</span>Read success notification title</h2>\n            </div>\n            <div class=\"pf-c-notification-drawer__list-item-action\">\n              <div class=\"pf-c-dropdown pf-m-top\">\n                <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"notification-drawer-groups-group2-action4-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                  <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                </button>\n                <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"notification-drawer-groups-group2-action4-button\" hidden>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                  </li>\n                  <li>\n                    <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                  </li>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                  </li>\n                  <li>\n                    <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                  </li>\n                  <li class=\"pf-c-divider\" role=\"separator\"></li>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"pf-c-notification-drawer__list-item-description\">This is a success notification description.</div>\n            <div class=\"pf-c-notification-drawer__list-item-timestamp\">30 minutes ago</div>\n          </li>\n          <li class=\"pf-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable\">\n            <div class=\"pf-c-notification-drawer__list-item-header\">\n              <span class=\"pf-c-notification-drawer__list-item-header-icon\">\n                <i class=\"fas fa-check-circle\" aria-hidden=\"true\"></i>\n              </span>\n              <h2 class=\"pf-c-notification-drawer__list-item-header-title pf-m-truncate\">\n                <span class=\"pf-screen-reader\">Success notification:</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis odio risus. Ut dictum vitae sapien at posuere. Nullam suscipit massa quis lacus pellentesque scelerisque. Donec non maximus neque, quis ornare nunc. Vivamus in nibh sed libero feugiat feugiat. Nulla lacinia rutrum est, a commodo odio vestibulum suscipit. Nullam id quam et quam porttitor interdum quis nec tellus. Vestibulum arcu dui, pulvinar eu tellus in, semper mattis diam. Sed commodo tincidunt lacus non pulvinar. Curabitur tempor molestie vestibulum. Vivamus vel mi dignissim, efficitur neque eget, efficitur massa. Mauris vitae nunc augue. Donec augue lorem, malesuada et quam vitae, volutpat mattis nisi. Nullam nec venenatis ex, quis lobortis purus. Sed nisl dolor, mattis sit amet tincidunt quis, mollis sed massa.</h2>\n            </div>\n            <div class=\"pf-c-notification-drawer__list-item-action\">\n              <div class=\"pf-c-dropdown pf-m-top\">\n                <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"notification-drawer-groups-group2-action5-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                  <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                </button>\n                <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"notification-drawer-groups-group2-action5-button\" hidden>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                  </li>\n                  <li>\n                    <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                  </li>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                  </li>\n                  <li>\n                    <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                  </li>\n                  <li class=\"pf-c-divider\" role=\"separator\"></li>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"pf-c-notification-drawer__list-item-description\">This example uses \".pf-m-truncate\" to limit the title to a single line and truncate any overflow text with ellipses.</div>\n            <div class=\"pf-c-notification-drawer__list-item-timestamp\">40 minutes ago</div>\n          </li>\n          <li class=\"pf-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable\">\n            <div class=\"pf-c-notification-drawer__list-item-header\">\n              <span class=\"pf-c-notification-drawer__list-item-header-icon\">\n                <i class=\"fas fa-check-circle\" aria-hidden=\"true\"></i>\n              </span>\n              <h2 class=\"pf-c-notification-drawer__list-item-header-title pf-m-truncate\" style=\"--pf-c-notification-drawer__list-item-header-title--max-lines: 2\">\n                <span class=\"pf-screen-reader\">Success notification:</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis odio risus. Ut dictum vitae sapien at posuere. Nullam suscipit massa quis lacus pellentesque scelerisque. Donec non maximus neque, quis ornare nunc. Vivamus in nibh sed libero feugiat feugiat. Nulla lacinia rutrum est, a commodo odio vestibulum suscipit. Nullam id quam et quam porttitor interdum quis nec tellus. Vestibulum arcu dui, pulvinar eu tellus in, semper mattis diam. Sed commodo tincidunt lacus non pulvinar. Curabitur tempor molestie vestibulum. Vivamus vel mi dignissim, efficitur neque eget, efficitur massa. Mauris vitae nunc augue. Donec augue lorem, malesuada et quam vitae, volutpat mattis nisi. Nullam nec venenatis ex, quis lobortis purus. Sed nisl dolor, mattis sit amet tincidunt quis, mollis sed massa.</h2>\n            </div>\n            <div class=\"pf-c-notification-drawer__list-item-action\">\n              <div class=\"pf-c-dropdown pf-m-top\">\n                <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"notification-drawer-groups-group2-action6-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                  <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                </button>\n                <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"notification-drawer-groups-group2-action6-button\" hidden>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                  </li>\n                  <li>\n                    <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                  </li>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                  </li>\n                  <li>\n                    <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                  </li>\n                  <li class=\"pf-c-divider\" role=\"separator\"></li>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"pf-c-notification-drawer__list-item-description\">This example uses \".pf-m-truncate\" and sets \"--pf-c-notification-drawer__list-item-header-title--max-lines: 2\" to limit title to two lines and truncate any overflow text with ellipses.</div>\n            <div class=\"pf-c-notification-drawer__list-item-timestamp\">50 minutes ago</div>\n          </li>\n        </ul>\n      </section>\n      <section class=\"pf-c-notification-drawer__group\">\n        <h1>\n          <button class=\"pf-c-notification-drawer__group-toggle\" aria-expanded=\"false\">\n            <div class=\"pf-c-notification-drawer__group-toggle-title\">Third notification group</div>\n            <div class=\"pf-c-notification-drawer__group-toggle-count\">\n              <span class=\"pf-c-badge pf-m-unread\">2</span>\n            </div>\n            <span class=\"pf-c-notification-drawer__group-toggle-icon\">\n              <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n            </span>\n          </button>\n        </h1>\n        <ul class=\"pf-c-notification-drawer__list\" hidden>\n          <li class=\"pf-c-notification-drawer__list-item pf-m-hoverable pf-m-info \" tabindex=\"0\">\n            <div class=\"pf-c-notification-drawer__list-item-header\">\n              <span class=\"pf-c-notification-drawer__list-item-header-icon\">\n                <i class=\"fas fa-info-circle\" aria-hidden=\"true\"></i>\n              </span>\n              <h2 class=\"pf-c-notification-drawer__list-item-header-title\">\n                <span class=\"pf-screen-reader\">Info notification:</span>Unread info notification title</h2>\n            </div>\n            <div class=\"pf-c-notification-drawer__list-item-action\">\n              <div class=\"pf-c-dropdown\">\n                <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"notification-drawer-groups-group3-action1-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                  <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                </button>\n                <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"notification-drawer-groups-group3-action1-button\" hidden>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                  </li>\n                  <li>\n                    <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                  </li>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                  </li>\n                  <li>\n                    <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                  </li>\n                  <li class=\"pf-c-divider\" role=\"separator\"></li>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"pf-c-notification-drawer__list-item-description\">This is an info notification description.</div>\n            <div class=\"pf-c-notification-drawer__list-item-timestamp\">5 minutes ago</div>\n          </li>\n          <li class=\"pf-c-notification-drawer__list-item pf-m-hoverable pf-m-danger \" tabindex=\"0\">\n            <div class=\"pf-c-notification-drawer__list-item-header\">\n              <span class=\"pf-c-notification-drawer__list-item-header-icon\">\n                <i class=\"fas fa-exclamation-circle\" aria-hidden=\"true\"></i>\n              </span>\n              <h2 class=\"pf-c-notification-drawer__list-item-header-title\">\n                <span class=\"pf-screen-reader\">Danger notification:</span>Unread danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines.</h2>\n            </div>\n            <div class=\"pf-c-notification-drawer__list-item-action\">\n              <div class=\"pf-c-dropdown\">\n                <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"notification-drawer-groups-group3-action2-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                  <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                </button>\n                <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"notification-drawer-groups-group3-action2-button\" hidden>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                  </li>\n                  <li>\n                    <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                  </li>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                  </li>\n                  <li>\n                    <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                  </li>\n                  <li class=\"pf-c-divider\" role=\"separator\"></li>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"pf-c-notification-drawer__list-item-description\">This is a danger notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines.</div>\n            <div class=\"pf-c-notification-drawer__list-item-timestamp\">10 minutes ago</div>\n          </li>\n          <li class=\"pf-c-notification-drawer__list-item pf-m-read pf-m-warning pf-m-hoverable\">\n            <div class=\"pf-c-notification-drawer__list-item-header\">\n              <span class=\"pf-c-notification-drawer__list-item-header-icon\">\n                <i class=\"fas fa-exclamation-triangle\" aria-hidden=\"true\"></i>\n              </span>\n              <h2 class=\"pf-c-notification-drawer__list-item-header-title\">\n                <span class=\"pf-screen-reader\">Warning notification:</span>Read warning notification title</h2>\n            </div>\n            <div class=\"pf-c-notification-drawer__list-item-action\">\n              <div class=\"pf-c-dropdown pf-m-top\">\n                <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"notification-drawer-groups-group3-action3-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                  <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                </button>\n                <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"notification-drawer-groups-group3-action3-button\" hidden>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                  </li>\n                  <li>\n                    <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                  </li>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                  </li>\n                  <li>\n                    <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                  </li>\n                  <li class=\"pf-c-divider\" role=\"separator\"></li>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"pf-c-notification-drawer__list-item-description\">This is a warning notification description.</div>\n            <div class=\"pf-c-notification-drawer__list-item-timestamp\">20 minutes ago</div>\n          </li>\n          <li class=\"pf-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable\">\n            <div class=\"pf-c-notification-drawer__list-item-header\">\n              <span class=\"pf-c-notification-drawer__list-item-header-icon\">\n                <i class=\"fas fa-check-circle\" aria-hidden=\"true\"></i>\n              </span>\n              <h2 class=\"pf-c-notification-drawer__list-item-header-title\">\n                <span class=\"pf-screen-reader\">Success notification:</span>Read success notification title</h2>\n            </div>\n            <div class=\"pf-c-notification-drawer__list-item-action\">\n              <div class=\"pf-c-dropdown pf-m-top\">\n                <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"notification-drawer-groups-group3-action4-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                  <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                </button>\n                <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"notification-drawer-groups-group3-action4-button\" hidden>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                  </li>\n                  <li>\n                    <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                  </li>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                  </li>\n                  <li>\n                    <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                  </li>\n                  <li class=\"pf-c-divider\" role=\"separator\"></li>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"pf-c-notification-drawer__list-item-description\">This is a success notification description.</div>\n            <div class=\"pf-c-notification-drawer__list-item-timestamp\">30 minutes ago</div>\n          </li>\n          <li class=\"pf-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable\">\n            <div class=\"pf-c-notification-drawer__list-item-header\">\n              <span class=\"pf-c-notification-drawer__list-item-header-icon\">\n                <i class=\"fas fa-check-circle\" aria-hidden=\"true\"></i>\n              </span>\n              <h2 class=\"pf-c-notification-drawer__list-item-header-title pf-m-truncate\">\n                <span class=\"pf-screen-reader\">Success notification:</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis odio risus. Ut dictum vitae sapien at posuere. Nullam suscipit massa quis lacus pellentesque scelerisque. Donec non maximus neque, quis ornare nunc. Vivamus in nibh sed libero feugiat feugiat. Nulla lacinia rutrum est, a commodo odio vestibulum suscipit. Nullam id quam et quam porttitor interdum quis nec tellus. Vestibulum arcu dui, pulvinar eu tellus in, semper mattis diam. Sed commodo tincidunt lacus non pulvinar. Curabitur tempor molestie vestibulum. Vivamus vel mi dignissim, efficitur neque eget, efficitur massa. Mauris vitae nunc augue. Donec augue lorem, malesuada et quam vitae, volutpat mattis nisi. Nullam nec venenatis ex, quis lobortis purus. Sed nisl dolor, mattis sit amet tincidunt quis, mollis sed massa.</h2>\n            </div>\n            <div class=\"pf-c-notification-drawer__list-item-action\">\n              <div class=\"pf-c-dropdown pf-m-top\">\n                <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"notification-drawer-groups-group3-action5-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                  <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                </button>\n                <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"notification-drawer-groups-group3-action5-button\" hidden>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                  </li>\n                  <li>\n                    <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                  </li>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                  </li>\n                  <li>\n                    <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                  </li>\n                  <li class=\"pf-c-divider\" role=\"separator\"></li>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"pf-c-notification-drawer__list-item-description\">This example uses \".pf-m-truncate\" to limit the title to a single line and truncate any overflow text with ellipses.</div>\n            <div class=\"pf-c-notification-drawer__list-item-timestamp\">40 minutes ago</div>\n          </li>\n          <li class=\"pf-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable\">\n            <div class=\"pf-c-notification-drawer__list-item-header\">\n              <span class=\"pf-c-notification-drawer__list-item-header-icon\">\n                <i class=\"fas fa-check-circle\" aria-hidden=\"true\"></i>\n              </span>\n              <h2 class=\"pf-c-notification-drawer__list-item-header-title pf-m-truncate\" style=\"--pf-c-notification-drawer__list-item-header-title--max-lines: 2\">\n                <span class=\"pf-screen-reader\">Success notification:</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis odio risus. Ut dictum vitae sapien at posuere. Nullam suscipit massa quis lacus pellentesque scelerisque. Donec non maximus neque, quis ornare nunc. Vivamus in nibh sed libero feugiat feugiat. Nulla lacinia rutrum est, a commodo odio vestibulum suscipit. Nullam id quam et quam porttitor interdum quis nec tellus. Vestibulum arcu dui, pulvinar eu tellus in, semper mattis diam. Sed commodo tincidunt lacus non pulvinar. Curabitur tempor molestie vestibulum. Vivamus vel mi dignissim, efficitur neque eget, efficitur massa. Mauris vitae nunc augue. Donec augue lorem, malesuada et quam vitae, volutpat mattis nisi. Nullam nec venenatis ex, quis lobortis purus. Sed nisl dolor, mattis sit amet tincidunt quis, mollis sed massa.</h2>\n            </div>\n            <div class=\"pf-c-notification-drawer__list-item-action\">\n              <div class=\"pf-c-dropdown pf-m-top\">\n                <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"notification-drawer-groups-group3-action6-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                  <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                </button>\n                <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"notification-drawer-groups-group3-action6-button\" hidden>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                  </li>\n                  <li>\n                    <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                  </li>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                  </li>\n                  <li>\n                    <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                  </li>\n                  <li class=\"pf-c-divider\" role=\"separator\"></li>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"pf-c-notification-drawer__list-item-description\">This example uses \".pf-m-truncate\" and sets \"--pf-c-notification-drawer__list-item-header-title--max-lines: 2\" to limit title to two lines and truncate any overflow text with ellipses.</div>\n            <div class=\"pf-c-notification-drawer__list-item-timestamp\">50 minutes ago</div>\n          </li>\n        </ul>\n      </section>\n      <section class=\"pf-c-notification-drawer__group\">\n        <h1>\n          <button class=\"pf-c-notification-drawer__group-toggle\" aria-expanded=\"false\">\n            <div class=\"pf-c-notification-drawer__group-toggle-title\">Fourth notification group</div>\n            <div class=\"pf-c-notification-drawer__group-toggle-count\">\n              <span class=\"pf-c-badge pf-m-unread\">2</span>\n            </div>\n            <span class=\"pf-c-notification-drawer__group-toggle-icon\">\n              <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n            </span>\n          </button>\n        </h1>\n        <ul class=\"pf-c-notification-drawer__list\" hidden>\n          <li class=\"pf-c-notification-drawer__list-item pf-m-hoverable pf-m-info \" tabindex=\"0\">\n            <div class=\"pf-c-notification-drawer__list-item-header\">\n              <span class=\"pf-c-notification-drawer__list-item-header-icon\">\n                <i class=\"fas fa-info-circle\" aria-hidden=\"true\"></i>\n              </span>\n              <h2 class=\"pf-c-notification-drawer__list-item-header-title\">\n                <span class=\"pf-screen-reader\">Info notification:</span>Unread info notification title</h2>\n            </div>\n            <div class=\"pf-c-notification-drawer__list-item-action\">\n              <div class=\"pf-c-dropdown\">\n                <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"notification-drawer-groups-group4-action1-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                  <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                </button>\n                <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"notification-drawer-groups-group4-action1-button\" hidden>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                  </li>\n                  <li>\n                    <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                  </li>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                  </li>\n                  <li>\n                    <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                  </li>\n                  <li class=\"pf-c-divider\" role=\"separator\"></li>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"pf-c-notification-drawer__list-item-description\">This is an info notification description.</div>\n            <div class=\"pf-c-notification-drawer__list-item-timestamp\">5 minutes ago</div>\n          </li>\n          <li class=\"pf-c-notification-drawer__list-item pf-m-hoverable pf-m-danger \" tabindex=\"0\">\n            <div class=\"pf-c-notification-drawer__list-item-header\">\n              <span class=\"pf-c-notification-drawer__list-item-header-icon\">\n                <i class=\"fas fa-exclamation-circle\" aria-hidden=\"true\"></i>\n              </span>\n              <h2 class=\"pf-c-notification-drawer__list-item-header-title\">\n                <span class=\"pf-screen-reader\">Danger notification:</span>Unread danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines.</h2>\n            </div>\n            <div class=\"pf-c-notification-drawer__list-item-action\">\n              <div class=\"pf-c-dropdown\">\n                <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"notification-drawer-groups-group4-action2-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                  <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                </button>\n                <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"notification-drawer-groups-group4-action2-button\" hidden>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                  </li>\n                  <li>\n                    <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                  </li>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                  </li>\n                  <li>\n                    <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                  </li>\n                  <li class=\"pf-c-divider\" role=\"separator\"></li>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"pf-c-notification-drawer__list-item-description\">This is a danger notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines.</div>\n            <div class=\"pf-c-notification-drawer__list-item-timestamp\">10 minutes ago</div>\n          </li>\n          <li class=\"pf-c-notification-drawer__list-item pf-m-read pf-m-warning pf-m-hoverable\">\n            <div class=\"pf-c-notification-drawer__list-item-header\">\n              <span class=\"pf-c-notification-drawer__list-item-header-icon\">\n                <i class=\"fas fa-exclamation-triangle\" aria-hidden=\"true\"></i>\n              </span>\n              <h2 class=\"pf-c-notification-drawer__list-item-header-title\">\n                <span class=\"pf-screen-reader\">Warning notification:</span>Read warning notification title</h2>\n            </div>\n            <div class=\"pf-c-notification-drawer__list-item-action\">\n              <div class=\"pf-c-dropdown pf-m-top\">\n                <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"notification-drawer-groups-group4-action3-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                  <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                </button>\n                <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"notification-drawer-groups-group4-action3-button\" hidden>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                  </li>\n                  <li>\n                    <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                  </li>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                  </li>\n                  <li>\n                    <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                  </li>\n                  <li class=\"pf-c-divider\" role=\"separator\"></li>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"pf-c-notification-drawer__list-item-description\">This is a warning notification description.</div>\n            <div class=\"pf-c-notification-drawer__list-item-timestamp\">20 minutes ago</div>\n          </li>\n          <li class=\"pf-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable\">\n            <div class=\"pf-c-notification-drawer__list-item-header\">\n              <span class=\"pf-c-notification-drawer__list-item-header-icon\">\n                <i class=\"fas fa-check-circle\" aria-hidden=\"true\"></i>\n              </span>\n              <h2 class=\"pf-c-notification-drawer__list-item-header-title\">\n                <span class=\"pf-screen-reader\">Success notification:</span>Read success notification title</h2>\n            </div>\n            <div class=\"pf-c-notification-drawer__list-item-action\">\n              <div class=\"pf-c-dropdown pf-m-top\">\n                <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"notification-drawer-groups-group4-action4-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                  <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                </button>\n                <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"notification-drawer-groups-group4-action4-button\" hidden>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                  </li>\n                  <li>\n                    <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                  </li>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                  </li>\n                  <li>\n                    <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                  </li>\n                  <li class=\"pf-c-divider\" role=\"separator\"></li>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"pf-c-notification-drawer__list-item-description\">This is a success notification description.</div>\n            <div class=\"pf-c-notification-drawer__list-item-timestamp\">30 minutes ago</div>\n          </li>\n          <li class=\"pf-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable\">\n            <div class=\"pf-c-notification-drawer__list-item-header\">\n              <span class=\"pf-c-notification-drawer__list-item-header-icon\">\n                <i class=\"fas fa-check-circle\" aria-hidden=\"true\"></i>\n              </span>\n              <h2 class=\"pf-c-notification-drawer__list-item-header-title pf-m-truncate\">\n                <span class=\"pf-screen-reader\">Success notification:</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis odio risus. Ut dictum vitae sapien at posuere. Nullam suscipit massa quis lacus pellentesque scelerisque. Donec non maximus neque, quis ornare nunc. Vivamus in nibh sed libero feugiat feugiat. Nulla lacinia rutrum est, a commodo odio vestibulum suscipit. Nullam id quam et quam porttitor interdum quis nec tellus. Vestibulum arcu dui, pulvinar eu tellus in, semper mattis diam. Sed commodo tincidunt lacus non pulvinar. Curabitur tempor molestie vestibulum. Vivamus vel mi dignissim, efficitur neque eget, efficitur massa. Mauris vitae nunc augue. Donec augue lorem, malesuada et quam vitae, volutpat mattis nisi. Nullam nec venenatis ex, quis lobortis purus. Sed nisl dolor, mattis sit amet tincidunt quis, mollis sed massa.</h2>\n            </div>\n            <div class=\"pf-c-notification-drawer__list-item-action\">\n              <div class=\"pf-c-dropdown pf-m-top\">\n                <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"notification-drawer-groups-group4-action5-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                  <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                </button>\n                <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"notification-drawer-groups-group4-action5-button\" hidden>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                  </li>\n                  <li>\n                    <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                  </li>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                  </li>\n                  <li>\n                    <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                  </li>\n                  <li class=\"pf-c-divider\" role=\"separator\"></li>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"pf-c-notification-drawer__list-item-description\">This example uses \".pf-m-truncate\" to limit the title to a single line and truncate any overflow text with ellipses.</div>\n            <div class=\"pf-c-notification-drawer__list-item-timestamp\">40 minutes ago</div>\n          </li>\n          <li class=\"pf-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable\">\n            <div class=\"pf-c-notification-drawer__list-item-header\">\n              <span class=\"pf-c-notification-drawer__list-item-header-icon\">\n                <i class=\"fas fa-check-circle\" aria-hidden=\"true\"></i>\n              </span>\n              <h2 class=\"pf-c-notification-drawer__list-item-header-title pf-m-truncate\" style=\"--pf-c-notification-drawer__list-item-header-title--max-lines: 2\">\n                <span class=\"pf-screen-reader\">Success notification:</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis odio risus. Ut dictum vitae sapien at posuere. Nullam suscipit massa quis lacus pellentesque scelerisque. Donec non maximus neque, quis ornare nunc. Vivamus in nibh sed libero feugiat feugiat. Nulla lacinia rutrum est, a commodo odio vestibulum suscipit. Nullam id quam et quam porttitor interdum quis nec tellus. Vestibulum arcu dui, pulvinar eu tellus in, semper mattis diam. Sed commodo tincidunt lacus non pulvinar. Curabitur tempor molestie vestibulum. Vivamus vel mi dignissim, efficitur neque eget, efficitur massa. Mauris vitae nunc augue. Donec augue lorem, malesuada et quam vitae, volutpat mattis nisi. Nullam nec venenatis ex, quis lobortis purus. Sed nisl dolor, mattis sit amet tincidunt quis, mollis sed massa.</h2>\n            </div>\n            <div class=\"pf-c-notification-drawer__list-item-action\">\n              <div class=\"pf-c-dropdown pf-m-top\">\n                <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"notification-drawer-groups-group4-action6-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                  <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                </button>\n                <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"notification-drawer-groups-group4-action6-button\" hidden>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                  </li>\n                  <li>\n                    <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                  </li>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                  </li>\n                  <li>\n                    <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                  </li>\n                  <li class=\"pf-c-divider\" role=\"separator\"></li>\n                  <li>\n                    <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"pf-c-notification-drawer__list-item-description\">This example uses \".pf-m-truncate\" and sets \"--pf-c-notification-drawer__list-item-header-title--max-lines: 2\" to limit title to two lines and truncate any overflow text with ellipses.</div>\n            <div class=\"pf-c-notification-drawer__list-item-timestamp\">50 minutes ago</div>\n          </li>\n        </ul>\n      </section>\n    </div>\n  </div>\n</div>","title":"Groups","lang":"html"}}>
    </Example>
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
              {`aria-expanded="false"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-notification-drawer__group-toggle`}
            </code>
          </td>
          <td>
            {`Indicates that the group notification list is hidden.`}
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
              {`.pf-c-notification-drawer__group-toggle`}
            </code>
          </td>
          <td>
            {`Indicates that the group notification list is visible.`}
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
              {`.pf-c-notification-drawer__list`}
            </code>
          </td>
          <td>
            {`Indicates that the group notification list is hidden so that it isn't visible in the UI and isn't accessed by assistive technologies.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`tabindex="0"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-notification-drawer__list-item.pf-m-hoverable`}
            </code>
          </td>
          <td>
            {`Inserts the hoverable list item into the tab order of the page so that it is focusable.`}
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
              {`.pf-c-notification-drawer__group-toggle-icon > *`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-notification-drawer__list-item-header-icon > *`}
            </code>
          </td>
          <td>
            {`Hides icon for assistive technologies.`}
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
              {`.pf-c-notification-drawer`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates the notification drawer. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-notification-drawer__header`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates the notification drawer header. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-notification-drawer__header-title`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<h1>`}
            </code>
          </td>
          <td>
            {`Initiates the notification drawer header title. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-notification-drawer__header-status`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Initiates the notification drawer header status.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-notification-drawer__header-action`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates the notification drawer header action.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-notification-drawer__body`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates the notification drawer body. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-notification-drawer__list`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<ul>`}
            </code>
          </td>
          <td>
            {`Initiates a notification list. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-notification-drawer__list-item`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<li>`}
            </code>
          </td>
          <td>
            {`Initiates a notification list item. `}
            <strong>
              {`Always use with a state modifier - one of `}
              <code {...{"className":"ws-code"}}>
                {`.pf-m-info`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-m-warning`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-m-danger`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-m-success`}
              </code>
              {`.`}
            </strong>
            {` `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-notification-drawer__list-item-header`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates a notification list item header. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-notification-drawer__list-item-header-icon`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Initiates a notification list item header icon. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-notification-drawer__list-item-header-title`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<h2>`}
            </code>
          </td>
          <td>
            {`Initiates a notification list item header title. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-notification-drawer__list-item-action`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates a notification list item action.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-notification-drawer__list-item-description`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates a notification list item description. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-notification-drawer__list-item-timestamp`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates a notification list item timestamp. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-notification-drawer__group-list`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates a notification group list. `}
            <strong>
              {`Required when notifications are grouped`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-notification-drawer__group`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<section>`}
            </code>
          </td>
          <td>
            {`Initiates a notification group. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-notification-drawer__group-toggle`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<button>`}
            </code>
          </td>
          <td>
            {`Initiates a notification group toggle. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-notification-drawer__group-title`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates a notification group toggle title. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-notification-drawer__group-count`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates a notification group toggle count.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-notification-drawer__group-icon`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Initiates a notification group toggle icon. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-info`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-notification-drawer__list-item`}
            </code>
          </td>
          <td>
            {`Modifies a notification list item for the info state.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-warning`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-notification-drawer__list-item`}
            </code>
          </td>
          <td>
            {`Modifies a notification list item for the warning state.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-danger`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-notification-drawer__list-item`}
            </code>
          </td>
          <td>
            {`Modifies a notification list item for the danger state.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-success`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-notification-drawer__list-item`}
            </code>
          </td>
          <td>
            {`Modifies a notification list item for the success state.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-read`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-notification-drawer__list-item`}
            </code>
          </td>
          <td>
            {`Modifies a notification list item for the read state.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-hoverable`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-notification-drawer__list-item`}
            </code>
          </td>
          <td>
            {`Modifies a notification list item hover states to inidicate it is clickable.`}
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
              {`.pf-c-notification-drawer__group`}
            </code>
          </td>
          <td>
            {`Modifies a notification group for the expanded state.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-truncate`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-notification-drawer__list-item-header-title`}
            </code>
          </td>
          <td>
            {`Modifies the title to display a single line and truncate any overflow text with ellipses. `}
            <strong>
              {`Note:`}
            </strong>
            {` you can specify the max number of lines to show by setting the `}
            <code {...{"className":"ws-code"}}>
              {`--pf-c-notification-drawer__list-item-header-title--max-lines`}
            </code>
            {` (the default value is `}
            <code {...{"className":"ws-code"}}>
              {`1`}
            </code>
            {`).`}
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationComponentsNotificationDrawerCoreDocs.Component.displayName = 'DocumentationComponentsNotificationDrawerCoreDocs';
