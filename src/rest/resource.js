const axios = require("axios");
const { baseUrl, endpoints, iPhoneMacAddress } = require("./config.js");
const { LIGHTS, GROUPS, STATE, RVC_API } = endpoints;
const { getState, setState } = require("../db/db");
const automator = require("../automator/automator-worker");

const pong = (req, res) => res.send("OK");
let automatorActive = true;

const fetchHueData = async () => {
  const { response } = await Promise.all([fetchAllGroups(), fetchAllLights()]);
  return { groups: response[0].data, lights: response[1].data };
};

const fetchAllLights = async (req, res) => {
  const response = await axios({ url: `${baseUrl}/${LIGHTS}` });
  return res.json(response.data);
};

const fetchAllGroups = async (req, res) => {
  const { data } = await axios({ url: `${baseUrl}/${GROUPS}` });
  return res.json(data);
};

const setLight = async (req, res) => {
  const { data } = await axios({
    url: `${baseUrl}/${LIGHTS}/${req.params.id}/${STATE}`,
    method: "PUT",
    data: req.body,
  });
  return res.json(data);
};

const getAutomatorState = async (req, res) => {
  const { active } = await getState();
  return res.json({ active });
};

const setAutomatorState = async (req, res) => {
  await setState(req.body.active);
  automator.setEnabled(req.body.active);
  return res.json({ active: req.body.active });
};

module.exports = {
  fetchHueData,
  fetchAllGroups,
  fetchAllLights,
  setLight,
  setAutomatorState,
  getAutomatorState,
  pong,
};
