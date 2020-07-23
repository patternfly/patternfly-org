import React from 'react';
import { Link as ReachLink } from '@reach/router';
import ConfigContext from '../../helpers/configContext';

export const Link = ({
  href,
  to,
  ...props
}) => {
  let url = href || to || '';
  if (url.includes('//') || url.startsWith("#")) {
    return <a href={url} {...props} />;
  }
  else if (url.startsWith('/')) {
    const { pathPrefix } = React.useContext(ConfigContext);
    url = `${pathPrefix}/${url.substr(1)}`;
  }
  return <ReachLink to={url} {...props} />;
}
