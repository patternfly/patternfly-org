
        import React from 'react';
        import docs from '/Users/jschuler/Documents/GitHub/org-patternfly-base/packages/patternfly-4/_repos/react-core/src/components/Popover/Popover.docs.js';
        import ComponentDocs from '/Users/jschuler/Documents/GitHub/org-patternfly-base/packages/patternfly-4/src/components/componentDocs';

        const rawExamples = [{name: 'AdvancedPopover', path: '../_repos/react-core/src/components/Popover/examples/AdvancedPopover.js', file: require('!!raw-loader!../_repos/react-core/src/components/Popover/examples/AdvancedPopover.js')},{name: 'HeadlessPopover', path: '../_repos/react-core/src/components/Popover/examples/HeadlessPopover.js', file: require('!!raw-loader!../_repos/react-core/src/components/Popover/examples/HeadlessPopover.js')},{name: 'SimplePopover', path: '../_repos/react-core/src/components/Popover/examples/SimplePopover.js', file: require('!!raw-loader!../_repos/react-core/src/components/Popover/examples/SimplePopover.js')}];
        const images = [{name: 'img_avatar.svg', file: require('../_repos/react-core/src/demos/PageLayout/examples/img_avatar.svg')},{name: 'l_pf-reverse-164x11.png', file: require('../_repos/react-core/src/demos/PageLayout/examples/l_pf-reverse-164x11.png')},{name: 'img_avatar.svg', file: require('../_repos/react-core/src/components/Avatar/examples/img_avatar.svg')},{name: 'pf_logo.svg', file: require('../_repos/react-core/src/components/Brand/examples/pf_logo.svg')},{name: 'pf_logo.svg', file: require('../_repos/react-core/src/components/AboutModal/examples/pf_logo.svg')},{name: 'pf_mini_logo_white.svg', file: require('../_repos/react-core/src/components/AboutModal/examples/pf_mini_logo_white.svg')},{name: 'pf_logo_color.svg', file: require('../_repos/react-core/src/components/LoginPage/examples/pf_logo_color.svg')},{name: 'pfbg_992.jpg', file: require('../_repos/react-core/src/components/AboutModal/examples/pfbg_992.jpg')}];

        export const popover_docs = docs;
        export const popover_package = 'react-core';

        export default () => <ComponentDocs rawExamples={rawExamples} images={images} {...docs} />;
        