import React from 'react';
import PropTypes from 'prop-types';
import { Table, Row, TD, TH, Body, Heading } from '../table';
import Section from '../../section';
import { ExclamationCircleIcon } from '@patternfly/react-icons';

const docGenPropShape = PropTypes.shape({
  type: PropTypes.shape({
    name: PropTypes.string,
  }),
  required: PropTypes.bool,
  description: PropTypes.string,
  defaultValue: PropTypes.shape({ value: PropTypes.string })
});

const propTypes = {
  name: PropTypes.string.isRequired,
  props: PropTypes.arrayOf(docGenPropShape),
  description: PropTypes.string
};

const defaultProps = {
  props: [],
  description: ''
};

const renderType = prop => {
  if (prop.type) {
    // JS prop
    return prop.type.name;
  } else if (prop.tsType) {
    // TS Prop
    if (prop.tsType.raw) {
      // Raw is like 'h1' | 'h2' | 'h3'
      return prop.tsType.raw;
    }
    return prop.tsType.name;
  }

  return '';
};

export const PropsTable = ({ name, description: preface, props }) => {
  return (
    <Section
      title={`${name} props`}
      headingLevel="h3"
      preface={preface}
      description={`The ${name} component accepts the following props.`}
    >
      <Table className="ws-props-table">
        <Heading>
          <TH>Name</TH>
          <TH>Type</TH>
          <TH align="center">Required</TH>
          <TH>Default</TH>
          <TH>Description</TH>
        </Heading>
        <Body>
          {props.map(prop => (
            <Row key={prop.name}>
              <TD>{prop.name}</TD>
              <TD>{renderType(prop)}</TD>
              <TD align="center">{prop.required && <ExclamationCircleIcon />}</TD>
              <TD>{prop.defaultValue ? prop.defaultValue.value : ''}</TD>
              <TD>{prop.description}</TD>
            </Row>
          ))}
        </Body>
      </Table>
    </Section>
  )
}

PropsTable.propTypes = propTypes;
PropsTable.defaultProps = defaultProps;

export default PropsTable;
