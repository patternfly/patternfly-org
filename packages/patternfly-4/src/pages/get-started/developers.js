import React from 'react';
import Content from '../../components/content';
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

export const getStartedDevelopersPageQuery = graphql`
  query getStartedDevelopersPageQuery {
    markdownRemark(fileAbsolutePath:{regex: "/\/markdown\/get-started\/developers.md/"}) {
      html
    }
  }
`;
