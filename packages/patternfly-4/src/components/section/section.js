import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import { Title } from '@patternfly/react-core';
import AutoLinkHeader from '@content/AutoLinkHeader';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  description: PropTypes.string,
  headingLevel: PropTypes.string,
  name: PropTypes.string,
  preface: PropTypes.string,
  title: PropTypes.string,
  size: PropTypes.string
};

const defaultProps = {
  children: null,
  className: '',
  description: '',
  name: '',
  preface: '',
  title: '',
  size: '2xl'
};

const Section = ({ children, className, description, headingLevel, name, preface, title, size, ...props }) => (
  <section className={css('ws-section', className)}>
    {Boolean(title || description) && (
      <header className={css('ws-header')}>
        {Boolean(title) && (
          <AutoLinkHeader size={size} is={headingLevel}>{title}</AutoLinkHeader>
        )}
        {Boolean(preface) && <p className={css('ws-preface')}>{preface}</p>}
        {Boolean(description) && <p>{description}</p>}
      </header>
    )}
    {children}
  </section>
);

Section.propTypes = propTypes;
Section.defaultProps = defaultProps;

export default Section;
