const contacts = require('./contacts/contacts.service.js');
const clients = require('./clients/clients.service.js');
const fieldlist = require('./fieldlist/fieldlist.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(contacts);
  app.configure(clients);
  app.configure(fieldlist);
};
