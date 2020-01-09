// records-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const records = new Schema({
    MapId: { type: String, required: false },
    RecordId: { type: Number, required: false },
    RecordName: { type: String, required: false },
    FieldName: { type: String, required: false },
    MappedFieldName: { type: String, required: false },
    MaxCharLength: { type: String, required: false },
    SequenceNumber: { type: Number, required: false },
    Alignment: { type: String, required: false },
    PaddingLeft: { type: String, required: false },
    PaddingLeftLength: { type: String, required: false },
    PaddingRight: { type: String, required: false },
    PaddingRightLength: { type: String, required: false }
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
