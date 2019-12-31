// fieldlist-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const fieldlist = new Schema({
    clientId: { type: Number, required: false },
    HeaderInfo: { type: String, required: false },
    FieldName: { type: String, required: false },
    MappedFieldName: { type: String, required: false },
    MaxCharLength: { type: String, required: false },
    SequenceNumber: { type: Number, required: false },
    alignment: { type: String, required: false },
    PaddingLeft: { type: String, required: false },
    paddingLeftLength: { type: String, required: false },
    PaddingRight: { type: String, required: false },
    paddingRightLength: { type: String, required: false },    
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
