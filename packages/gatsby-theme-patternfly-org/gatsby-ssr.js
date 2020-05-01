// https://www.gatsbyjs.org/docs/ssr-apis

exports.onPreRenderHTML = ({ getHeadComponents }) => {
  // https://github.com/gatsbyjs/gatsby/issues/1526#issuecomment-433347822
  // Don't inline styles. They cost 700KB per page
  getHeadComponents().forEach(el => {
    if (el.type === 'style') {
      el.type = 'link';
      el.props['href'] = el.props['data-href'];
      el.props['rel'] = 'stylesheet';
      el.props['type'] = 'text/css';

      delete el.props['data-href'];
      delete el.props['dangerouslySetInnerHTML'];
    }
  });
}

exports.onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({
    // Always en-us
    lang: 'en-us',
  });
}
