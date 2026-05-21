class ControlPlane {
  constructor() {
    this.services = new Map();
  }

  register(name, service) {
    this.services.set(name, service);
  }

  start(name) {
    const svc = this.services.get(name);
    if (svc && typeof svc.start === "function") {
      svc.start();
    }
  }

  status() {
    return Array.from(this.services.keys());
  }
}

module.exports = new ControlPlane();
