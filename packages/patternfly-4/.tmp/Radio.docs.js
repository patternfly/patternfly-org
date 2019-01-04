
        import React from 'react';
        import docs from '/Users/jschuler/Documents/GitHub/org-patternfly-base/packages/patternfly-4/_repos/react-core/src/components/Radio/Radio.docs.js';
        import ComponentDocs from '/Users/jschuler/Documents/GitHub/org-patternfly-base/packages/patternfly-4/src/components/componentDocs';

        const rawExamples = [{name: 'ControlledRadio', path: '../_repos/react-core/src/components/Radio/examples/ControlledRadio.js', file: require('!!raw-loader!../_repos/react-core/src/components/Radio/examples/ControlledRadio.js')},{name: 'CustomLabelRadio', path: '../_repos/react-core/src/components/Radio/examples/CustomLabelRadio.js', file: require('!!raw-loader!../_repos/react-core/src/components/Radio/examples/CustomLabelRadio.js')},{name: 'DisabledRadio', path: '../_repos/react-core/src/components/Radio/examples/DisabledRadio.js', file: require('!!raw-loader!../_repos/react-core/src/components/Radio/examples/DisabledRadio.js')},{name: 'UncontrolledRadio', path: '../_repos/react-core/src/components/Radio/examples/UncontrolledRadio.js', file: require('!!raw-loader!../_repos/react-core/src/components/Radio/examples/UncontrolledRadio.js')}];
        const images = [{name: 'img_avatar.svg', file: require('../_repos/react-core/src/demos/PageLayout/examples/img_avatar.svg')},{name: 'l_pf-reverse-164x11.png', file: require('../_repos/react-core/src/demos/PageLayout/examples/l_pf-reverse-164x11.png')},{name: 'img_avatar.svg', file: require('../_repos/react-core/src/components/Avatar/examples/img_avatar.svg')},{name: 'pf_logo.svg', file: require('../_repos/react-core/src/components/Brand/examples/pf_logo.svg')},{name: 'pf_logo.svg', file: require('../_repos/react-core/src/components/AboutModal/examples/pf_logo.svg')},{name: 'pf_mini_logo_white.svg', file: require('../_repos/react-core/src/components/AboutModal/examples/pf_mini_logo_white.svg')},{name: 'pf_logo_color.svg', file: require('../_repos/react-core/src/components/LoginPage/examples/pf_logo_color.svg')},{name: 'pfbg_992.jpg', file: require('../_repos/react-core/src/components/AboutModal/examples/pfbg_992.jpg')}];

        export const radio_docs = docs;
        export const radio_package = 'react-core';

        export default () => <ComponentDocs rawExamples={rawExamples} images={images} {...docs} />;
        