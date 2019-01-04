
        import React from 'react';
        import docs from '/Users/jschuler/Documents/GitHub/org-patternfly-base/packages/patternfly-4/_repos/react-core/src/layouts/Grid/Grid.docs.js';
        import ComponentDocs from '/Users/jschuler/Documents/GitHub/org-patternfly-base/packages/patternfly-4/src/components/componentDocs';

        const rawExamples = [{name: 'GridOverrides', path: '../_repos/react-core/src/layouts/Grid/examples/GridOverrides.js', file: require('!!raw-loader!../_repos/react-core/src/layouts/Grid/examples/GridOverrides.js')},{name: 'GridPlayground', path: '../_repos/react-core/src/layouts/Grid/examples/GridPlayground.js', file: require('!!raw-loader!../_repos/react-core/src/layouts/Grid/examples/GridPlayground.js')},{name: 'GridWithGutters', path: '../_repos/react-core/src/layouts/Grid/examples/GridWithGutters.js', file: require('!!raw-loader!../_repos/react-core/src/layouts/Grid/examples/GridWithGutters.js')},{name: 'SimpleGrid', path: '../_repos/react-core/src/layouts/Grid/examples/SimpleGrid.js', file: require('!!raw-loader!../_repos/react-core/src/layouts/Grid/examples/SimpleGrid.js')}];
        const images = [{name: 'img_avatar.svg', file: require('../_repos/react-core/src/demos/PageLayout/examples/img_avatar.svg')},{name: 'l_pf-reverse-164x11.png', file: require('../_repos/react-core/src/demos/PageLayout/examples/l_pf-reverse-164x11.png')},{name: 'img_avatar.svg', file: require('../_repos/react-core/src/components/Avatar/examples/img_avatar.svg')},{name: 'pf_logo.svg', file: require('../_repos/react-core/src/components/Brand/examples/pf_logo.svg')},{name: 'pf_logo.svg', file: require('../_repos/react-core/src/components/AboutModal/examples/pf_logo.svg')},{name: 'pf_mini_logo_white.svg', file: require('../_repos/react-core/src/components/AboutModal/examples/pf_mini_logo_white.svg')},{name: 'pf_logo_color.svg', file: require('../_repos/react-core/src/components/LoginPage/examples/pf_logo_color.svg')},{name: 'pfbg_992.jpg', file: require('../_repos/react-core/src/components/AboutModal/examples/pfbg_992.jpg')}];

        export const grid_docs = docs;
        export const grid_package = 'react-core';

        export default () => <ComponentDocs rawExamples={rawExamples} images={images} {...docs} />;
        