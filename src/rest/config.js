const { config } = require("dotenv");
config();

const host = process.env.HUE_BRIDGE_IP;
const hostPort = process.env.HUE_BRIDGE_PORT;
const userId = process.env.HUE_USER_ID;
const protocol = process.env.PROTOCOL;
const port = process.env.PORT;
const mongoUri = process.env.MONGO_URI;
const iPhoneMacAddress = process.env.IPHONE_MAC_ADDRESS;
const baseUrl = `${protocol}://${host}:${hostPort}/api/${userId}`;
const endpoints = {
  LIGHTS: "lights",
  GROUPS: "groups",
  STATE: "state",
};
module.exports = {
  host,
  userId,
  protocol,
  port,
  baseUrl,
  mongoUri,
  endpoints,
  iPhoneMacAddress,
};
