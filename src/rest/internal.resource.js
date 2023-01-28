import axios from "axios";
import { baseUrl, endpoints, networkDeviceUrl, tapoPrivacyUrl } from "./config.js";

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
  const url = networkDeviceUrl;
  try {
    const { data } = await axios(url);
    return { connected: data?.isOnline > 0 };

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

