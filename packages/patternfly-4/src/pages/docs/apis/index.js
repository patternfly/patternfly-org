import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { Title, Badge } from '@patternfly/react-core';
import Content from '../../../components/content';

const propTypes = {
  data: PropTypes.any.isRequired
};

const ApiDocsIndex = ({ data }) => {
  const groups = data.allComponentMetadata.group;

  return (
    <Content>
      <Title size="4xl">
        React API
      </Title>
      {groups.map(group => (
        <div key={group.edges[0].node.fields.firstChar}>
          <Title size="xl">
            {group.edges[0].node.fields.firstChar}
          </Title>
          <div>
            {group.edges.map(edge => (
              <Link
                to={`/docs/api/${edge.node.displayName}`}
                style={{
                  display: 'block',
                  padding: '0.25rem'
                }}
                key={`/docs/api/${edge.node.displayName}`}
              >
                <Badge>{edge.node.displayName}</Badge>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </Content>
  );
};

ApiDocsIndex.propTypes = propTypes;

export const query = graphql`
  query ApiDocsIndexQuery {
    allComponentMetadata(
      sort: { fields: [displayName], order: ASC }
      filter: {displayName: {ne: "index"}}
    ) {
      group(field: fields___firstChar) {
        edges {
          node {
            docblock
            fields {
              label
              firstChar
            }
            displayName
            description
            props {
              defaultValue {
                value
                computed
              }
              name
              type {
                name
                value
                raw
              }
              required
            }
          }
        }
      }
    }
  }
`;

export default ApiDocsIndex;