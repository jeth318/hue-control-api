var nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "production",
  target: "node",
  entry: "./src/index.js",
  output: {
    clean: true,
    filename: "tc-api.js",
  },
  externalsPresets: {
    node: true,
  },
};
