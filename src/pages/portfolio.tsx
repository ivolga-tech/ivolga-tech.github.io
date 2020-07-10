import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import PortfolioContainer from "../components/portfolio/portfolio-container"

const Portfolio = () => {
  return (
    <Layout>
      <SEO title="portfolio" />
      <PortfolioContainer />
    </Layout>
  );
};

export default Portfolio;
