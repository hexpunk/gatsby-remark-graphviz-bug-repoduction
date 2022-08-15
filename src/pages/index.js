import { graphql } from "gatsby";
import * as React from "react";

const IndexPage = ({ data }) => {
  return (
    <main
      dangerouslySetInnerHTML={{ __html: data.file.childMarkdownRemark.html }}
    />
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

export const query = graphql`
  query IndexPage {
    file(relativePath: { eq: "example.md" }) {
      childMarkdownRemark {
        html
      }
    }
  }
`;
