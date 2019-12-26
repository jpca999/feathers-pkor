// Initializes the `logic` service on path `/logic`
const { Logic } = require('./logic.class');
const createModel = require('../../models/logic.model');
const hooks = require('./logic.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/logic', new Logic(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('logic');

  service.hooks(hooks);
};
