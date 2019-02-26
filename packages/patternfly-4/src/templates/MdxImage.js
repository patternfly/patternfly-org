import React from 'react';
import { MDXProvider } from '@mdx-js/tag';
import MDX from '@mdx-js/runtime';

const MdxImage = ({children}) => {
  return <MDX>{children}</MDX>;
}

export default MdxImage;
