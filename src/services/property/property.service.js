// Initializes the `property` service on path `/property`
const { Property } = require('./property.class');
const createModel = require('../../models/property.model');
const hooks = require('./property.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/property', new Property(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('property');

  service.hooks(hooks);
};
