// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require("path");

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [
        path.resolve(__dirname, "./src/assets/sass/_globals.sass"),
        // or if you use scss
        path.resolve(__dirname, "./src/assets/sass/_globals.scss"),
        // you can also use a glob if you'd prefer
        path.resolve(__dirname, "./src/assets/sass/*.sass"),
        // or scss
        path.resolve(__dirname, "./src/assets/sass/*.scss"),
      ],
    });
}

module.exports = {
  chainWebpack: (config) => {
    // svg loader configuration
    const svgRule = config.module.rule("svg");
    config.mode("development");

    svgRule.uses.clear();

    svgRule
      .use("babel-loader")
      .loader("babel-loader")
      .end()
      .use("vue-svg-loader")
      .loader("vue-svg-loader");

    // style ressource loader configuration
    const types = ["vue-modules", "vue", "normal-modules", "normal"];

    types.forEach((type) => {
      addStyleResource(config.module.rule("scss").oneOf(type));
    });
  },
  icon: "./src/assets/favicon.png",
  siteName: "FoodPandee",
  plugins: [
    {
      use: '@gridsome/source-graphql',
      options: {
        url:
          'https://api-ap-northeast-1.graphcms.com/v2/ckrlt39fr2m2001xs5fpm13gj/master',
        fieldName: 'FoodPandee',
        typeName: 'object',
      },
    },
  ],
  templates: {
    Product: "/products/:id",
  },
};
