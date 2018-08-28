import React from 'react';
import { CardImg, CardBody, Card, CardTitle } from 'reactstrap';
import Link from 'gatsby-link';

export default ({ data, location, children }) => {

  const demoRoutes = data.allSitePage.edges.map((edge) => (
    edge = {
      label: edge.node.fields.label,
      to: edge.node.path
    }
  ));

  let cards;
  if (demoRoutes) {
    cards = demoRoutes.map((card) => {
      const { to, label } = card;
      return (
        <Link className="nav-link" activeClassName="nav-active" to={`${to}`} key={`navigation-${to}`}>
          <Card>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>
              <CardTitle>{label}</CardTitle>
            </CardBody>
          </Card>
        </Link>
      );
    });
  }

  return (
    <div className="container-fluid h-100">
        <div className="row h-100">
          {cards}
        </div>
    </div>
  )
}

export const demosPageQuery = graphql`
  query GetDemosQuery {
    allSitePage(filter: { path: { regex: "/^\/demos\/([A-Za-z0-9_-]+)/" } }) {
      edges {
        node {
          path
          layout
          componentPath
          fields {
            system
            label
          }
        }
      }
    }
  }
`;