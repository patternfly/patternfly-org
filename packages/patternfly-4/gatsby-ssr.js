const React = require('react');
// https://www.gatsbyjs.org/docs/ssr-apis

exports.onRenderBody = ({ setHtmlAttributes, setPostBodyComponents }) => {
  // Always en-us
  setHtmlAttributes({
    lang: 'en-us'
  });
  // Always use new Red Hat font
  setHtmlAttributes({
    className: 'pf-m-redhat-font'
  });
  setPostBodyComponents([
    <script key="algogia-script" type="text/javascript" src="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js" />,
    <link key="algogia-css" rel="stylesheet" href="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css" />
  ]);
}