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



