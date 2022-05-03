const axios = require("axios");
const { baseUrl, endpoints, networkDeviceUrl } = require("./config.js");
const { LIGHTS, STATE } = endpoints;

const __fetchAllLights = async () => axios({ url: `${baseUrl}/${LIGHTS}` });

const __setLight = async (id, payload) => {
  return axios({
    url: `${baseUrl}/${LIGHTS}/${id}/${STATE}`,
    method: "PUT",
    data: payload,
  });
};

const __getDeviceConnectivity = async () => {
  const url = networkDeviceUrl;
  const { data } = await axios(url);

  return { connected: !!data.isOnline };
};

module.exports = {
  __fetchAllLights,
  __setLight,
  __getDeviceConnectivity,
};
