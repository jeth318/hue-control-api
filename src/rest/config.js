const { config } = require("dotenv");
config();

const host = process.env.HUE_BRIDGE_IP;
const hostPort = process.env.HUE_BRIDGE_PORT;
const userId = process.env.HUE_USER_ID;
const protocol = process.env.PROTOCOL;
const port = process.env.PORT;
const mongoUri = process.env.MONGO_URI;
const routerInfoUrl = process.env.NETWORK_DEVICE_URL;
const iPhoneMacAddress = process.env.IPHONE_MAC_ADDRESS;
const tapoPrivacyUrl = process.env.TAPO_PRIVACY_URL;
const baseUrl = `${protocol}://${host}:${hostPort}/api/${userId}`;
const networkDeviceUrl = `${routerInfoUrl}/${iPhoneMacAddress}`;
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
  networkDeviceUrl,
  tapoPrivacyUrl,
  iPhoneMacAddress,
};
