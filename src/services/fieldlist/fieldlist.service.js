// Initializes the `fieldlist` service on path `/fieldlist`
const { Fieldlist } = require('./fieldlist.class');
const createModel = require('../../models/fieldlist.model');
const hooks = require('./fieldlist.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/fieldlist', new Fieldlist(options, app));

	 app.get('/findWithCliendID', function(req, res){
	 	console.log(' 16 -  req ', req ); 

	    Model.remove({userId : req.body.userId}, function(err, properties){
	      res.json(properties);
	    });
	});

  // Get our initialized service so that we can register hooks
  const service = app.service('fieldlist');

  service.hooks(hooks);
};
