require("dotenv").config();

export const host = process.env.HUE_BRIDGE_IP;
export const hostPort = process.env.HUE_BRIDGE_PORT;
export const userId = process.env.HUE_USER_ID;
export const protocol = process.env.PROTOCOL;
export const port = process.env.PORT;
export const mongoUri = process.env.MONGO_URI;
export const routerInfoUrl = process.env.NETWORK_DEVICE_URL;
export const iPhoneMacAddress = process.env.IPHONE_MAC_ADDRESS;
export const tapoPrivacyUrl = process.env.TAPO_PRIVACY_URL;
export const baseUrl = `${protocol}://${host}:${hostPort}/api/${userId}`;
export const networkDeviceUrl = `${routerInfoUrl}/${iPhoneMacAddress}`;
export const endpoints = {
  LIGHTS: "lights",
  GROUPS: "groups",
  STATE: "state",
};

