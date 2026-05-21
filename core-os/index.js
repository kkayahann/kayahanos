const control = require('./kernel/control-plane');
const bus = require('./kernel/event-bus');

bus.on("boot", () => {
  console.log("KAYAHANOS CORE BOOTED");
});

bus.emit("boot");

console.log("Services:", control.status());
