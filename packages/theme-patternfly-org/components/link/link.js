import React from 'react';
import { Link as ReachLink, navigate } from '@reach/router';
import ConfigContext from '../../helpers/configContext';

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
    const { pathPrefix, routes } = React.useContext(ConfigContext);
    const route = routes[url];
    if (route && route.sources) {
      // Preload on hover
      props.onMouseOver = () => {
        preloadPromise = Object.values(route.sources)
          .map(({ Component }) => Component.preload())
          [0];
        onMouseOver();
      };
      props.onClick = ev => {
        ev.preventDefault();
        Promiseany([
          preloadPromise,
          new Promise(res => setTimeout(res, 500))
        ]).then(() => navigate(url));
      };
    }
    url = `${pathPrefix}/${url.substr(1)}`;
  }
  return <ReachLink to={url} {...props} />;
}
