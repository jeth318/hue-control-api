const { getState } = require("../db/db");

const run = () => ({
  isActive: null,
  interval: null,
  start: function (time) {
    this.interval = setInterval(function () {
      this.isActive = true;
      console.log(time);
      return true;
    }, time);
  },
  stop: function () {
    clearInterval(this.interval);
  },
  init: async function () {
    try {
      const { active } = await getState();
    } catch (error) {
      console.log(error);
    }
  },
});

const at = run();

at.init();

console.log(at.start(2000));
