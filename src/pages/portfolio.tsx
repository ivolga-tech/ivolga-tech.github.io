import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import PortfolioContainer from "../components/portfolio/portfolio-container";
import { graphql } from "gatsby";
import { toPortfolioVM } from "../presenters/portfolioVM.ts";

const Portfolio = (props: any) => {
  const viewModel = toPortfolioVM(props.data.portfolio.edges[0].node.data.portfolio_field);

  return (
    <Layout>
      <SEO title="portfolio" />
      <PortfolioContainer viewModel={viewModel} />
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
              page_link {
                text
              }
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
