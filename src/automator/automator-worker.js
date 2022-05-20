import Automator from "./automator";
import { getTimeBasedBrightness, isHallwayLight, turnOnHallwayOnly } from "../utils/automator.util";
import { __fetchAllLights, __setLight, __setTapoPrivacyMode } from "../rest/internal.resource";

const automator = new Automator(10000);

const onDeviceConnected = () => {
  console.log(
    "Cellphone was connected to the local network. Executing automator connect actions."
  );
  autoLightsOn();
  __setTapoPrivacyMode(true)
};

const onDeviceDisconnected = (status) => {
  console.log(
    "Cellphone was dicconnected to the local network. Executing automator disconnect actions."
  );

  autoLightsOff();
  autoTvOff();
  __setTapoPrivacyMode(false)

};

const lightsAsArray = (lights) => {
  return Object.keys(lights).map((key) => {
    return { ...lights[key], id: key };
  });
};

const autoLightsOn = async () => {
  const { data } = await __fetchAllLights();
  let actions = [];
  const timeBasedBrightness = getTimeBasedBrightness();
  const hallwayOnly = turnOnHallwayOnly();

  lightsAsArray(data)
    .filter((light) => !light.state.on)
    .filter((light) => !hallwayOnly || isHallwayLight(light))
    .forEach((light) => {
      actions.push(
        __setLight(light.id, { bri: timeBasedBrightness, on: !light.state.on })
      );
    });
  if (actions.length) {
    Promise.all(actions);
  }
};

const autoLightsOff = async () => {
  const { data } = await __fetchAllLights();
  let actions = [];
  let lightsArray = lightsAsArray(data);

  lightsArray
    .filter((light) => light.state.on)
    .forEach((light) => {
      actions.push(__setLight(light.id, { on: !light.state.on }));
    });

  if (actions.length) {
    Promise.all(actions);
  }
};

const autoTvOff = async () => {
  const { data } = await __fetchAllLights();
  let actions = [];
  let lightsArray = lightsAsArray(data);

  lightsArray
    .filter((light) => light.state.on)
    .forEach((light) => {
      actions.push(__setLight(light.id, { on: !light.state.on }));
    });

  if (actions.length) {
    Promise.all(actions);
  }
};

automator.on("deviceConnected", onDeviceConnected);
automator.on("deviceDisconnected", onDeviceDisconnected);

export default automator;
