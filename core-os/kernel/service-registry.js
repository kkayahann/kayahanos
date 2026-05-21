class ServiceRegistry {
  constructor() {
    this.services = new Map();
  }

  register(name, service) {
    this.services.set(name, {
      instance: service,
      status: "stopped"
    });
  }

  start(name) {
    const svc = this.services.get(name);
    if (!svc) return;

    try {
      if (typeof svc.instance.start === "function") {
        svc.instance.start();
      }
      svc.status = "running";
    } catch (err) {
      svc.status = "crashed";
    }
  }

  stop(name) {
    const svc = this.services.get(name);
    if (!svc) return;

    if (typeof svc.instance.stop === "function") {
      svc.instance.stop();
    }

    svc.status = "stopped";
  }

  status() {
    const out = {};
    for (const [k, v] of this.services.entries()) {
      out[k] = v.status;
    }
    return out;
  }
}

module.exports = new ServiceRegistry();
