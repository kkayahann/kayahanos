const control = require('./control-plane');

class ServiceLoader {
  load(name, service) {
    control.register(name, service);
  }
}

module.exports = new ServiceLoader();
