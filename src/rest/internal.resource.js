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
  const { data } = await axios(url);

  return { connected: !!data.isOnline };
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
    console.log('Error', error);
  }
};

