require("dotenv").config();

export const host = process.env.HUE_BRIDGE_IP;
export const hostPort = process.env.HUE_BRIDGE_PORT;
export const userId = process.env.HUE_USER_ID;
export const protocol = process.env.PROTOCOL;
export const port = process.env.PORT;
export const mongoUri = process.env.MONGO_URI;
export const routerInfoUrl = process.env.NETWORK_DEVICE_URL;
export const iPhoneMacAddressJesper = process.env.IPHONE_MAC_ADDRESS_JESPER;
export const iPhoneMacAddressEvelina = process.env.IPHONE_MAC_ADDRESS_EVELINA;
export const tapoPrivacyUrl = process.env.TAPO_PRIVACY_URL;
export const baseUrl = `${protocol}://${host}:${hostPort}/api/${userId}`;
export const networkDeviceUrls = [`${routerInfoUrl}/${iPhoneMacAddressJesper}`, `${routerInfoUrl}/${iPhoneMacAddressEvelina}`];
export const endpoints = {
  LIGHTS: "lights",
  GROUPS: "groups",
  STATE: "state",
};

