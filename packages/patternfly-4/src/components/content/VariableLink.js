import React from 'react';
import { Link } from 'gatsby'; 

/**
 * Use: 
 * import { VariableLink } from '@content/VariableLink';
 * <VariableLink filter="--pf-global--BorderColor--light" exact>Test Link</VariableLink>
 */
const VariableLink = ({ children, filter, exact, framework }) => (
  <Link to={`/documentation/${framework}/css-variables/`} state={{ filter, exact }}>{children}</Link>
);

VariableLink.defaultProps = {
  exact: false,
  framework: 'react'
};

export { VariableLink };