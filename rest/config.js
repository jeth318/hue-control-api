
const { config } = require('dotenv');
config();

const host = process.env.HUE_BRIDGE_IP;
const userId = process.env.HUE_USER_ID;
const protocol = process.env.PROTOCOL;
const port = process.env.PORT;
const baseUrl = `${protocol}://${host}/api/${userId}`;
const endpoints = {
    LIGHTS: 'lights',
    GROUPS: 'groups',
    STATE: 'state',
}

module.exports = { host, userId, protocol, port, baseUrl, endpoints };