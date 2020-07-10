import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import PortfolioContainer from "../components/portfolio/portfolio-container";
import { graphql } from "gatsby";

const Portfolio = (props: any) => {
  return (
    <Layout>
      <SEO title="portfolio" />
      <PortfolioContainer viewModel={props.data.portfolio.edges[0].node.data.portfolio_field} />
    </Layout>
  );
};

export default Portfolio;

export const PortfolioPageQuery = graphql`
  query PortfolioPage {
    portfolio: allPrismicHomepage {
      edges {
        node {
          data {
            portfolio_field {
              card_background_color
              portfolio_card_title {
                text
              }
              portfolio_card_meta_tegs {
                text
              }
              portfolio_card_description {
                text
              }
              portfolio_card_image {
                url
                alt
              }
            }
          }
        }
      }
    }
  }
`;
