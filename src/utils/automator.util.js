const dateFns = require("date-fns");

const isBetween = (x, min, max) => {
  return x >= min && x <= max;
};

const getTimeBasedBrightness = () => {
  const hours = dateFns.getHours(new Date());

  if (isBetween(hours, 0, 7)) {
    return 25;
  }

  if (isBetween(hours, 8, 18)) {
    return 254;
  }

  if (isBetween(hours, 18, 20)) {
    return 100;
  }

  if (isBetween(hours, 21, 23)) {
    return 50;
  }
};

const turnOnHallwayOnly = () => {
  const hours = dateFns.getHours(new Date());
  return isBetween(hours, 22, 23) || isBetween(hours, 0, 7);
};
const isHallwayLight = (light) =>
  light.name === "Hallen V" || light.name === "Hallen H";

module.exports = {
  isHallwayLight,
  turnOnHallwayOnly,
  getTimeBasedBrightness,
};
