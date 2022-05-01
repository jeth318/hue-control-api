const express = require("express");
const {
  fetchAllGroups,
  fetchAllLights,
  setLight,
  setAutomatorState,
  getAutomatorState,
  pong,
} = require("./rest/resource");

const router = express.Router(); // eslint-disable-line new-cap
router.get("/health-check", pong);
router.get("/groups", fetchAllGroups);
router.get("/lights", fetchAllLights);
router.put("/lights/:id", setLight);
router.post("/automator", setAutomatorState);
router.get("/automator", getAutomatorState);

module.exports = router;
