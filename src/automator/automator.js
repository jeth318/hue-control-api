import EventEmitter from "events";
import { clearInterval } from "timers";
import { getState } from "../db/db";
import { __getDeviceConnectivity } from "../rest/internal.resource.js";

class Automator extends EventEmitter {
  constructor(pollTime) {
    super(pollTime);
    this.pollTime = pollTime;
    this.interval = null;
    this.enabled = null;
    this.isDeviceConnected = null;
    this.init();
  }

  async fetchState() {
    const { connected } = await __getDeviceConnectivity();
    console.log('this.isDeviceConnected', this.isDeviceConnected);
    console.log('connected', connected);
    if (connected !== this.isDeviceConnected) {
      const event = connected ? "deviceConnected" : "deviceDisconnected";
      this.isDeviceConnected = connected;
      this.emit(event);
    }
  }

  setEnabled(enabled) {
    if (enabled !== this.enabled) {
      if (enabled && !this.enabled) {
        this.init();
        console.log("Automator was enabled");
      } else if (!enabled && typeof this.interval === "object") {
        console.log("Automator was disabled");
        clearInterval(this.interval);
      }
      this.enabled = enabled;
    }
  }

  async init() {
    const { active } = await getState();
    const { connected } = await __getDeviceConnectivity();
    this.enabled = active;
    this.isDeviceConnected = connected;

    this.interval = setInterval(async () => {
      this.fetchState();
    }, this.pollTime);
  }
}

export default Automator;
