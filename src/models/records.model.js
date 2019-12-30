// records-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const records = new Schema({
    RecordId: { type: Number, required: false },
    RecordName: { type: String, required: false },
    RecordOrderNo: { type: Number, required: false }
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://github.com/Automattic/mongoose/issues/1251
  try {
    return mongooseClient.model('records');
  } catch (e) {
    return mongooseClient.model('records', records);
  }
};
