const contacts = require('./contacts/contacts.service.js');
const clients = require('./clients/clients.service.js');
const fieldlist = require('./fieldlist/fieldlist.service.js');
const properties = require('./properties/properties.service.js');
const logics = require('./logics/logics.service.js');
const records = require('./records/records.service.js');
const fields = require('./fields/fields.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(contacts);
  app.configure(clients);
  app.configure(fieldlist);
  app.configure(properties);
  app.configure(logics);
  app.configure(records);
  app.configure(fields);
};
