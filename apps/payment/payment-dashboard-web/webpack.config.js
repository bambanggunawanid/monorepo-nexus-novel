const { composePlugins, withNx } = require('@nx/webpack');
const { withReact } = require('@nx/react');

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), withReact(), (config) => {
    // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`

  config.module.rules = config.module.rules.map((rule) => {
    if (/file-loader/.test(rule.loader)) {
      return {
        ...rule,
        test: /\.(eot|cur|jpg|png|webp|gif|otf|ttf|woff|woff2|ani)$/, // Excluding `svg`
        type: "javascript/auto", // Fixing images
      };
    }

    return rule;
  });

  // This will properly handle imported svg's
  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack', 'url-loader']
  });

  return config;
});
