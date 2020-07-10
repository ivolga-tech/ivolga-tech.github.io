/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const pages = await graphql(`
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

  const component = path.resolve("src/components/product-page/product-page.tsx");

  pages.data.products.edges.forEach(edge => {
    createPage({
      path: `/portfolio/${edge.node.uid}`,
      component: component,
      context: {
        uid: edge.node.uid,
      },
    });
  });
};
