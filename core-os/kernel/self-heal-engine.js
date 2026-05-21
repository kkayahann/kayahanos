const registry = require('./service-registry');

class SelfHealEngine {
  monitor() {
    setInterval(() => {
      for (const [name, svc] of registry.services.entries()) {
        if (svc.status === "crashed") {
          console.log("[HEAL] restarting:", name);
          registry.start(name);
        }
      }
    }, 3000);
  }
}

module.exports = new SelfHealEngine();
