import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import { Typography } from "../components/typography/typography";

const IndexPage = (props: any) => {
  const vm = props.data.HomePage.edges[0].node.data;

  return (
    <Layout>
      <SEO title="iVolga Technologies" />
      home page
      <Typography component="h1">{vm.home_page_title.text}</Typography>
    </Layout>
  );
};

export default IndexPage;

export const HomepPageQuery = graphql`
  query HomepPage {
    HomePage: allPrismicHomepage {
      edges {
        node {
          data {
            home_page_title {
              text
            }
          }
        }
      }
    }
  }
`;
