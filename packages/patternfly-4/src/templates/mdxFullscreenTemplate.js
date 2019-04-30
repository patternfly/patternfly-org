import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from '../components/mdx-renderer';
import './template.scss';

const MdxFullscreenTemplate = ({ data }) => {
  return (
    <MDXRenderer>
      {data.mdx.code.body}
    </MDXRenderer>
  );
};

export const pageQuery = graphql`
query GetFullscreenComponent($fileAbsolutePath: String!) {
  mdx(fileAbsolutePath: { eq: $fileAbsolutePath }) {
    rawBody
    code {
      body
    }
  }
}
`

export default MdxFullscreenTemplate;
