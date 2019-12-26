const contacts = require('./contacts/contacts.service.js');
const clients = require('./clients/clients.service.js');
const fieldlist = require('./fieldlist/fieldlist.service.js');
const property = require('./property/property.service.js');
const properties = require('./properties/properties.service.js');
const logics = require('./logics/logics.service.js');
const logic = require('./logic/logic.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(contacts);
  app.configure(clients);
  app.configure(fieldlist);
  app.configure(property);
  app.configure(properties);
  app.configure(logics);
  app.configure(logic);
};
