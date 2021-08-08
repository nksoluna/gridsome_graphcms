// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const productApi = require("./src/services/productApi.js");

module.exports = function(api) {
  api.loadSource(async (actions) => {
    const collection = actions.addCollection("Product");
    const data = await productApi.getProducts();
    
    data.forEach((element) => {
      collection.addNode({
        id: element.id,
        name: element.name,
        images: {
          big: element.images.big,
          small: element.images.small,
        },
        descriptions: {
          short: element.descriptions.short,
          long: element.descriptions.long,
        },
        price: element.price,
        url: element.url
      });
    });
  });
  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`
      {
        FoodPandee {
          foods {
            id
            name
            price
            image {
              url
            }
            categories
          }
        }
      }
    `);

    data.FoodPandee.foods.forEach(node => {
      createPage({
        path: `/foods/${node.name}`,
        component: './src/templates/Food.vue',
        context: {
          id: node.id,
          name: node.name,
          price: node.price,
          image: node.image.url,
          categories: node.categories,
        },
      });
    });
  });
};
