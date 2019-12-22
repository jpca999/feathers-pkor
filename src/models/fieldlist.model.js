// fieldlist-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const fieldlist = new Schema({
    clientId: { type: String, required: false },
    header: { type: String, required: false },
    fieldName: { type: String, required: false },
    mappedFieldName: { type: String, required: false },
    maxcharLength: { type: String, required: false },
    sequenceNumber: { type: String, required: false },
    alignment: { type: String, required: false },
    paddingLeft: { type: String, required: false },
    paddingLeftLength: { type: String, required: false },
    paddingRight: { type: String, required: false },
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://github.com/Automattic/mongoose/issues/1251
  try {
    return mongooseClient.model('fieldlist');
  } catch (e) {
    return mongooseClient.model('fieldlist', fieldlist);
  }
};
