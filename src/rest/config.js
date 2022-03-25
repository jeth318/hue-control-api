const path = require("path");
const { config } = require("dotenv");
config({ path: path.join(__dirname, ".env") });
console.log("destination: ", path.join(__dirname, ".env"));
const host = process.env.HUE_BRIDGE_IP;
const hostPort = process.env.HUE_BRIDGE_PORT;
const userId = process.env.HUE_USER_ID;
const protocol = process.env.PROTOCOL;
const port = process.env.PORT;
const baseUrl = `${protocol}://${host}:${hostPort}/api/${userId}`;
const endpoints = {
  LIGHTS: "lights",
  GROUPS: "groups",
  STATE: "state",
};

module.exports = { host, userId, protocol, port, baseUrl, endpoints };
