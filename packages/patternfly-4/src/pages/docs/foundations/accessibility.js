import React from 'react';
import Content from '../../../components/content';

export default (data) => {
  const { html } = data.data.markdownRemark;
  return (
    <Content>
      <div 
        className="pf-c-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Content>
  )
};

export const foundationsAccessibilityPageQuery = graphql`
  query foundationsAccessibilityPageQuery {
    markdownRemark(fileAbsolutePath:{regex: "/\/markdown\/foundations\/accessibility.md/"}) {
      html
    }
  }
`;
  