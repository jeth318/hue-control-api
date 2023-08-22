import axios from "axios";
import { baseUrl, endpoints, networkDeviceUrls, tapoPrivacyUrl } from "./config.js";

const { LIGHTS, STATE } = endpoints;

export const __fetchAllLights = async () => axios({ url: `${baseUrl}/${LIGHTS}` });

export const __setLight = async (id, payload) => {
  return axios({
    url: `${baseUrl}/${LIGHTS}/${id}/${STATE}`,
    method: "PUT",
    data: payload,
  });
};

export const __getDeviceConnectivity = async () => {
  const promises = networkDeviceUrls.map((url) => axios.get(url));
  try {
    const data = await Promise.all(promises);
    const devices = data.map(response => response.data);
    return { connected: data ? devices.some(device => device.isOnline > 0) : false };
  } catch (error) {
    console.error(error.message)
    return { connected: false };
  }

};

export const __setTapoPrivacyMode = async (state) => {
  const config = {
    url: tapoPrivacyUrl,
    method: 'POST',
    data: { privacy: state }
  }

  try {
    await axios(config);
  } catch (error) {
    console.log('Failed to set tapo mode:', error.message);
  }
};

