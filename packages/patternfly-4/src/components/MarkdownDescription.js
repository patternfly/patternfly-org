import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
const MarkdownDescription = ({ path }) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(filter: {fileAbsolutePath: {glob: "**/content/documentation/**"}}) {
          edges {
            node {
              html
              frontmatter {
                path
              }
            }
          }
        }
      }
    `}
    render={
      data => {
        const getMarkdownDescription = location => data.allMarkdownRemark.edges.find(edge => {
          const { path } = edge.node.frontmatter;
          if (!path) {
            return;
          }
          const pathArray = path.split(',');
          let found = false;
          pathArray.find(innerPath => {
            const slashPath = innerPath.trim().endsWith('/') ? innerPath.trim() : `${innerPath.trim()}/`;
            const slashLocation = location.endsWith('/') ? location : `${location}/`;
            if (slashPath === slashLocation) {
              found = true;
              return;
            }
          });
          if (found) {
            return edge;
          }
        });
        const markdownDescription = getMarkdownDescription(path);
        const html = (markdownDescription && markdownDescription.node) ? markdownDescription.node.html : '';
        return <div
          className="markdown-body"
          style={{paddingTop: '15px'}}
          dangerouslySetInnerHTML={{ __html: html }}
        />;
      }
    }
  />
)
export default MarkdownDescription;
