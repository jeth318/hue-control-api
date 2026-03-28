import axios from "axios";
import { baseUrl, endpoints } from "./config.js";

let automatorState = true;

const { LIGHTS, GROUPS, STATE } = endpoints;

export const pong = (req, res) => res.send("OK");

export const fetchHueData = async () => {
  const { response } = await Promise.all([fetchAllGroups(), fetchAllLights()]);
  return { groups: response[0].data, lights: response[1].data };
};

export const fetchAllLights = async (req, res) => {
  const response = await axios({ url: `${baseUrl}/${LIGHTS}` });
  return res.json(response.data);
};

export const fetchAllGroups = async (req, res) => {
  const { data } = await axios({ url: `${baseUrl}/${GROUPS}` });
  return res.json(data);
};

export const setLight = async (req, res) => {
  const { data } = await axios({
    url: `${baseUrl}/${LIGHTS}/${req.params.id}/${STATE}`,
    method: "PUT",
    data: req.body,
  });
  return res.json(data);
};

export const getAutomatorState = async (req, res) => {
  return res.json({ active: automatorState });
};

export const setAutomatorState = async (req, res) => {
  automatorState = req.body.active;
  return res.json({ active: automatorState });
};

