const envFilePlugin = require("esbuild-envfile-plugin");
const { nodeExternalsPlugin } = require("esbuild-node-externals");

require("esbuild").build({
  outfile: "dist/app.cjs",
  entryPoints: ["src/server.js"],
  bundle: true,
  target: ["node10.4"],
  plugins: [envFilePlugin, nodeExternalsPlugin()],
});
