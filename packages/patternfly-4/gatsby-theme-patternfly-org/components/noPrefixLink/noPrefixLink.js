import React from 'react';
import { Link } from 'gatsby';

export const NoPrefixLink = ({
  href,
  to,
  ...props
}) => {
  const url = href || to || '';
  // https://www.gatsbyjs.org/docs/gatsby-link/#reminder-use-link-only-for-internal-links
   if (url.includes('//') || url.startsWith("#")) {
     return <a href={url} {...props} />;
   }
   // Basically "withoutPrefix" since links are already prefixed coming into here
   return <Link to={url.replace(/(v4\/)+/, '')} {...props} />;
}