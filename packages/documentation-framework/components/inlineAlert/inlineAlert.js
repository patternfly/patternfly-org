import React from 'react';
import { Alert } from '@patternfly/react-core';

export const InlineAlert = ({
  title,
  variant = 'info',
  children
}) => (
  <Alert
    variant={variant}
    title={title}
    className="pf-v5-u-my-md"
    style={{ marginBottom: '1rem' }}
    isInline
    component="h2"
  >
    {children}
  </Alert>
);
