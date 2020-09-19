const axios = require('axios');
const { baseUrl, endpoints } = require('./config.js');
const { LIGHTS, GROUPS, STATE } = endpoints;
console.log(baseUrl);

const pong = (req, res) => res.send("OK"); 

const fetchHueData = async () => {
    const {response} = await Promise.all([fetchAllGroups(), fetchAllLights()]);
    return { groups: response[0].data, lights: response[1].data };
}

const fetchAllLights = async (req, res) => {
    const { data } = await axios({ url: `${baseUrl}/${LIGHTS}` });
    return res.json(data);
}

const fetchAllGroups = async (req, res) => {
    const { data } = await axios({ url: `${baseUrl}/${GROUPS}` });
    return res.json(data);
}

const setLight = async (req, res) => {
    const { data } = await axios({
        url: `${baseUrl}/${LIGHTS}/${req.params.id}/${STATE}`,
        method: 'PUT',
        data: req.body
    });
    return res.json(data);
};

 module.exports = {
     fetchHueData,
     fetchAllGroups,
     fetchAllLights,
     setLight,
     pong
 };