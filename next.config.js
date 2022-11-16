const path = require("path");

module.exports = () => {
  const webpack = (cfg, options) => {
    cfg.module.rules.push({
      test: /\.md$/,
      use: [
        {
          loader: "frontmatter-markdown-loader",
          options: { mode: ["react-component"] },
        }
      ]
    });
    return cfg;
  };

  const sassOptions = {
    includePaths: [path.join(__dirname, "styles")],
  };

  const basePath = process.env.BASE_PATH;
  const trailingSlash = process.env.TRAILING_SLASH;

  return {
    webpack,
    sassOptions,
    basePath,
    trailingSlash
  };
};
