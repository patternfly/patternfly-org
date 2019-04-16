import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-mdx';
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
    code {
      body
    }
  }
}
`;

export default MdxFullscreenTemplate;