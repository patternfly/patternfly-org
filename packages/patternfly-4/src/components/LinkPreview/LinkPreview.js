import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import './LinkPreview.scss';

const LinkPreview = ({ data, name, path }) => {
  const fileNameFromUrl = path.replace('/v4', '')
    .replace(/\//g, '!')
    .replace(/\?/g, '!__')
    .replace(/\s/g, '_')
    .replace(/%20/g, '_');
  const previewScreenshot = data ? data.allFile.edges.filter(({ node }) => node.relativePath === `${fileNameFromUrl}.png`) : null;
  return (
  <>
    {previewScreenshot && previewScreenshot.length ? (
      <div className="Preview__body">
        <a href={path} target="_blank" rel="noopener noreferrer">
          <div className="preview-container">
            <Img
              fluid={previewScreenshot[0].node.childImageSharp.fluid}
              alt={name}
              className="preview-image"
            />
            <div className="preview-overlay">
              <div className="preview-icon">
                <i className="fas fa-external-link-alt"></i> 
              </div>
            </div>
          </div>
        </a>
      </div>
    ) : (
      <div className="Preview__body">
        This Preview can only be accessed in&nbsp;
        <a href={path} target="_blank" rel="noopener noreferrer">
          full page mode
        </a>.
      </div>
    )}
  </>
)};

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: {sourceInstanceName: {eq: "previews"}}) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => <LinkPreview data={data} {...props} />}
  />
);