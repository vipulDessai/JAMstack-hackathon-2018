import React from 'react';
import Img from 'gatsby-image';
import { graphql, StaticQuery } from 'gatsby';

export default function ImageLoader({ imageUrl }) {
  return (
    <StaticQuery
      query={query}
      render={(queryData) => {
        const image = queryData.allFile.edges.find(
          (edge) => edge.node.childImageSharp.fluid.src.indexOf(imageUrl) > -1,
        );

        return <Img fluid={image.node.childImageSharp.fluid} />;
      }}></StaticQuery>
  );
}

const query = graphql`
  query {
    allFile(filter: { extension: { regex: "/(jpeg|jpg|gif|png)/" } }) {
      edges {
        node {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
