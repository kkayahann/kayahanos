const registry = require('./service-registry');
const heal = require('./self-heal-engine');

class Boot {
  start() {
    console.log("KAYAHANOS CORE BOOT START");

    heal.monitor();

    console.log("Self-heal engine active");
  }
}

module.exports = new Boot();
