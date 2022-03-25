module.exports = {
  mode: "production",
  target: "node",
  entry: "./src/server.js",
  output: {
    clean: true,
    filename: "home-control-api.js",
  },
  externalsPresets: {
    node: true,
  },
};
