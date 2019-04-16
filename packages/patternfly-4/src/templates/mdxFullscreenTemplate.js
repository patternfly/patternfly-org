import React from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from '../components/mdx-renderer';
import LiveEdit from '../components/_react/liveEdit';
import './template.scss';

const components = {
  code: class LiveEditWrapper extends React.Component {
    render() {
      return (
        <LiveEdit justRender={true} scope={this.getScope()}>
          {this.props.children}
        </LiveEdit>
      );
    }
  },
  pre: React.Fragment
};
// Don't render all of these https://mdxjs.com/getting-started#table-of-components
['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'thematicBreak', 'blockquote',
  'ul', 'ol', 'li', 'table', 'tr', 'td', 'th', 'em', 'strong',
  'delete', 'hr', 'a', 'img'].forEach(tag => components[tag] = () => null);


const MdxFullscreenTemplate = ({ data }) => {
  return (
    <MDXProvider components={components}>
      <MDXRenderer>
        {data.mdx.code.body}
      </MDXRenderer>
    </MDXProvider>
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
