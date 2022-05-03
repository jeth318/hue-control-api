const axios = require("axios");
const { baseUrl, endpoints, networkDeviceUrl, tapoPrivacyUrl } = require("./config.js");
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

const __setTapoPrivacyMode = async (state) => {
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

module.exports = {
  __fetchAllLights,
  __setLight,
  __getDeviceConnectivity,
  __setTapoPrivacyMode
};
