import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsSkipToContentCoreDocs = {
  "slug": "/documentation/components/skip-to-content/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/SkipToContent/examples/SkipToContent.md",
  "section": "components",
  "id": "Skip to content",
  "title": "Skip to content",
  "toc": [
    "Examples",
    "Documentation"
  ],
  "cssPrefix": "pf-c-skip-to-content"
};
DocumentationComponentsSkipToContentCoreDocs.liveContext = {
  
};
DocumentationComponentsSkipToContentCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsSkipToContentCoreDocs} {...{"code":"<a class=\"pf-c-skip-to-content pf-c-button pf-m-primary\" href=\"#main-content\">Skip to content</a>Press tab to skip to content at the bottom of the page.\n<div style=\"height:2000px\"></div>\n<div class=\"pf-c-content\">\n  <h1 id=\"main-content\">Main content</h1>\n  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub works as well!</p>\n  <h2>Second level</h2>\n  <p>Curabitur accumsan turpis pharetra\n    <strong>augue tincidunt</strong>blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>\n  <ul>\n    <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>\n    <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>\n    <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.\n      <ul>\n        <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>\n        <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>\n        <li>Ut venenatis, nisl scelerisque.\n          <ol>\n            <li>Donec blandit a lorem id convallis.</li>\n            <li>Cras gravida arcu at diam gravida gravida.</li>\n            <li>Integer in volutpat libero.</li>\n          </ol>\n        </li>\n      </ul>\n    </li>\n    <li>Ut non enim metus.</li>\n  </ul>\n  <h3>Third level</h3>\n  <p>Quisque ante lacus, malesuada ac auctor vitae, congue\n    <a href=\"#\">non ante</a>. Phasellus lacus ex, semper ac tortor nec, fringilla condimentum orci. Fusce eu rutrum tellus.</p>\n  <ol>\n    <li>Donec blandit a lorem id convallis.</li>\n    <li>Cras gravida arcu at diam gravida gravida.</li>\n    <li>Integer in volutpat libero.</li>\n    <li>Donec a diam tellus.</li>\n    <li>Etiam auctor nisl et.\n      <ul>\n        <li>Donec blandit a lorem id convallis.</li>\n        <li>Cras gravida arcu at diam gravida gravida.</li>\n        <li>Integer in volutpat libero.\n          <ol>\n            <li>Donec blandit a lorem id convallis.</li>\n            <li>Cras gravida arcu at diam gravida gravida.</li>\n          </ol>\n        </li>\n      </ul>\n    </li>\n    <li>Aenean nec tortor orci.</li>\n    <li>Quisque aliquam cursus urna, non bibendum massa viverra eget.</li>\n    <li>Vivamus maximus ultricies pulvinar.</li>\n  </ol>\n  <blockquote>Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit ipsum, ut blandit est tellus sit amet turpis.</blockquote>\n  <p>Quisque at semper enim, eu hendrerit odio. Etiam auctor nisl et\n    <em>justo sodales</em>elementum. Maecenas ultrices lacus quis neque consectetur, et lobortis nisi molestie.</p>\n  <hr />\n  <p>Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi. Donec mattis vulputate risus in luctus. Maecenas vestibulum interdum commodo.</p>\n  <dl>\n    <dt>Web</dt>\n    <dd>The part of the internet that contains websites and web pages</dd>\n    <dt>HTML</dt>\n    <dd>A markup language for creating web pages</dd>\n    <dt>CSS</dt>\n    <dd>A technology to make HTML look better</dd>\n  </dl>\n  <p>Suspendisse egestas sapien non felis placerat elementum. Morbi tortor nisl, suscipit sed mi sit amet, mollis malesuada nulla. Nulla facilisi. Nullam ac erat ante.</p>\n  <h4>Fourth level</h4>\n  <p>Nulla efficitur eleifend nisi, sit amet bibendum sapien fringilla ac. Mauris euismod metus a tellus laoreet, at elementum ex efficitur.</p>\n  <p>Maecenas eleifend sollicitudin dui, faucibus sollicitudin augue cursus non. Ut finibus eleifend arcu ut vehicula. Mauris eu est maximus est porta condimentum in eu justo. Nulla id iaculis sapien.</p>\n  <small>Sometimes you need small text to display things like date created</small>\n  <p>Phasellus porttitor enim id metus volutpat ultricies. Ut nisi nunc, blandit sed dapibus at, vestibulum in felis. Etiam iaculis lorem ac nibh bibendum rhoncus. Nam interdum efficitur ligula sit amet ullamcorper. Etiam tristique, leo vitae porta faucibus, mi lacus laoreet metus, at cursus leo est vel tellus. Sed ac posuere est. Nunc ultricies nunc neque, vitae ultricies ex sodales quis. Aliquam eu nibh in libero accumsan pulvinar. Nullam nec nisl placerat, pretium metus vel, euismod ipsum. Proin tempor cursus nisl vel condimentum. Nam pharetra varius metus non pellentesque.</p>\n  <h5>Fifth level</h5>\n  <p>Aliquam sagittis rhoncus vulputate. Cras non luctus sem, sed tincidunt ligula. Vestibulum at nunc elit. Praesent aliquet ligula mi, in luctus elit volutpat porta. Phasellus molestie diam vel nisi sodales, a eleifend augue laoreet. Sed nec eleifend justo. Nam et sollicitudin odio.</p>\n  <h6>Sixth level</h6>\n  <p>Cras in nibh lacinia, venenatis nisi et, auctor urna. Donec pulvinar lacus sed diam dignissim, ut eleifend eros accumsan. Phasellus non tortor eros. Ut sed rutrum lacus. Etiam purus nunc, scelerisque quis enim vitae, malesuada ultrices turpis. Nunc vitae maximus purus, nec consectetur dui. Suspendisse euismod, elit vel rutrum commodo, ipsum tortor maximus dui, sed varius sapien odio vitae est. Etiam at cursus metus.</p>\n</div>","title":"Basic","lang":"html","isFullscreen":true}}>
    </Example>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Skip to content allows screen reader and keyboard users to bypass navigation rather than tabbing through it.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`When using `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-skip-to-content`}
      </code>
      {` you must provide an `}
      <code {...{"className":"ws-code"}}>
        {`href`}
      </code>
      {` attribute whose value corresponds to the `}
      <code {...{"className":"ws-code"}}>
        {`id`}
      </code>
      {` attribute of the primary content container for your application. In most cases this is the `}
      <code {...{"className":"ws-code"}}>
        {`<main>`}
      </code>
      {` element. For a demo of this see the `}
      <PatternflyThemeLink {...{"to":"/documentation/core/demos/page"}}>
        {`page demo`}
      </PatternflyThemeLink>
      {`, and note the use of `}
      <code {...{"className":"ws-code"}}>
        {`tabindex="-1"`}
      </code>
      {` which allows the element to receive focus programmatically.`}
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
              {`href="[id of main container]"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-skip-to-content`}
            </code>
          </td>
          <td>
            {`Sends focus to the primary content container. `}
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
              {`.pf-c-skip-to-content`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<a>`}
            </code>
          </td>
          <td>
            {`initiates the skip to content link.`}
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationComponentsSkipToContentCoreDocs.Component.displayName = 'DocumentationComponentsSkipToContentCoreDocs';
