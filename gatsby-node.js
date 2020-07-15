/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const productPageQuery = await graphql(`
    {
      products: allPrismicProductPage {
        edges {
          node {
            uid
            id
          }
        }
      }
    }
  `);

  const productPage = path.resolve("src/components/product-page/product-page.tsx");

  productPageQuery.data.products.edges.forEach(edge => {
    createPage({
      path: `/portfolio/${edge.node.uid}`,
      component: productPage,
      context: {
        uid: edge.node.uid,
      },
    });
  });

  const vacancyPageQuery = await graphql(`
    query VacancyPage {
      vacancy: allPrismicVacancyPage {
        edges {
          node {
            uid
            id
        }
      }
    }
  }
  `);

  const vacancyPage = path.resolve("src/components/vacancy-page/vacancy-page.tsx");

  vacancyPageQuery.data.vacancy.edges.forEach(edge => {
    createPage({
      path: `/vocations/${edge.node.uid}`,
      component: vacancyPage,
      context: {
        uid: edge.node.uid,
      },
    });
  });

};
