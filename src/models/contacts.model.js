// contacts-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const contacts = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true , index: true },
    bio: { type: String, match: /[a-z]/ },
    date: { type: Date, default: Date.now },
    
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://github.com/Automattic/mongoose/issues/1251
  try {
    return mongooseClient.model('contacts');
  } catch (e) {
    return mongooseClient.model('contacts', contacts);
  }
};
