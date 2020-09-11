import React from 'react';
import { Link as ReachLink, navigate } from '@reach/router';
import { getAsyncComponent } from '../../routes';

const Promiseany = (Promise.any || function ($) {
  return new Promise(function (D, E, A, L) {
    A = [];
    L = $.map(function ($, i) {
      return Promise.resolve($).then(D, function (O) {
        return ((A[i] = O), --L) || E({errors: A});
      });
    }).length;
  });
}).bind(Promise);

export const Link = ({
  href,
  to,
  onMouseOver = () => {},
  ...props
}) => {
  let preloadPromise;
  let url = href || to || '';
  if (url.includes('//') || url.startsWith("#")) {
    return <a href={url} {...props} />;
  }
  else if (url.startsWith('/')) {
    url = `${process.env.pathPrefix}/${url.substr(1)}`;

    if (!process.env.PRERENDER) {
      const Component = getAsyncComponent(url);
      if (Component) {
        // Preload on hover
        props.onMouseOver = () => {
          preloadPromise = Component.preload();
          onMouseOver();
        };
        // Wait up to an extra 500ms on click before showing 'Loading...'
        props.onClick = ev => {
          ev.preventDefault();
          if (typeof window !== 'undefined' && url !== location.pathname) {
            Promiseany([
              preloadPromise,
              new Promise(res => setTimeout(res, 500))
            ]).then(() => navigate(url));
          }
        };
      }
    }
  }
  return <ReachLink to={url} {...props} />;
}
