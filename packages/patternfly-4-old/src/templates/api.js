import React from 'react';
import PropTypes from 'prop-types';
import Content from '../components/content';
import { Title } from '@patternfly/react-core';
import PropsTable from '../components/propsTable';
import Link from 'gatsby-link';

const propTypes = {
  data: PropTypes.any.isRequired
};

const arrayToObject = (array, keyField) =>
  array.reduce((obj, item) => {
    obj[item[keyField]] = item
    return obj
  }, {})

const ApiDocs = ({ data }) => {
  const { displayName, props } = data.componentMetadata;
  const propsObject = arrayToObject(props, 'name');
  let enumValues = {};
  return (
    <Content>
      <Link to="/docs/apis/">View All React Components</Link>
      <Title size="3xl">{displayName}</Title>
      <PropsTable key={displayName} name={displayName} props={propsObject} enumValues={enumValues} />
    </Content>
  )
};

ApiDocs.propTypes = propTypes;

export const query = graphql`
  query ApiDocsQuery($name: String) {
    componentMetadata(displayName: { eq: $name }) {
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
`;

export default ApiDocs;
