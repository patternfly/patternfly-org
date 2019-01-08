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

export const foundationsOverviewPageQuery = graphql`
  query foundationsOverviewPageQuery {
    markdownRemark(fileAbsolutePath:{regex: "/\/markdown\/foundations\/overview.md/"}) {
      html
    }
  }
`;
  