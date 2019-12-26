// Initializes the `logics` service on path `/logics`
const { Logics } = require('./logics.class');
const createModel = require('../../models/logics.model');
const hooks = require('./logics.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/logics', new Logics(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('logics');

  service.hooks(hooks);
};
