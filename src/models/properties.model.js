// properties-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const properties = new Schema({
        address: {
            type: String,
            required: true,
            trim: true
        },
        county: {
            type: String,
            trim: true
        },
        member: {
            type: String,
            trim: true
        },
        city: {
            type: String,
            trim: true
        },
        phone: {
            type: String,
            required: false
        },
        Offer: {
            type: String,
            default: '-',
            required: false,
            trim: true
        },        
        CounterOffer: {
            type: String,
            default: '-',
            required: false,
            trim: true
        },
        Call_PrioritiesArr: {
            red: String,
            green: String,
            blue: String,
            // default: [],
            required: false
            // required: 'Please fill Call_PrioritiesArr',
            // trim: true
        },
        Red_Priority_P: {
            type: Boolean,
            default: false,
            required: false,
            // required: 'Please fill CounterOffer',
        },
        comment_next_time: {
            type: String,
            default: null,
            required: false
        },
        nextTask: {
            type: String,
            default: null,
            required: false
        },
        Homework_Needed_P: {
            type: Boolean,
            default: false,
            required: false,
            // required: 'Please fill CounterOffer',
        },
        Distressed_RequireWork_P: {
            type: Boolean,
            default: false,
            required: false,
        },
        Research_Needed_P: {
            type: Boolean,
            default: false,
            required: false,
        },
        Continue_P: {
            type: Boolean,
            default: false,
            required: false,
            //required: 'Please fill CounterOffer',
        },
        Send_Contract_P: {
            type: Boolean,
            default: false,
            required: false,
            // required: 'Please fill CounterOffer',
        },
        Later_P: {
            type: Boolean,
            default: 'false',
            required: false,
            // required: 'Please fill CounterOffer',
        },
        No_Updated_P: {
            type: Boolean,
            default: 'false',
            required: false,
            // required: 'Please fill CounterOffer',
        },
        Later_Today_P: {
            type: Boolean,
            default: 'false',
            required: false,
            // required: 'Please fill CounterOffer',
        },
        Left_VM_P: {
            type: Boolean,
            default: 'false',
            required: false,
            // required: 'Please fill CounterOffer',
        },
        Motivated_Seller_P: {
            type: Boolean,
            default: 'false',
            required: false,
            // required: 'Please fill CounterOffer',
        },
        Bi_Weekly_P: {
            type: Boolean,
            default: false,
            required: false,
            // required: 'Please fill CounterOffer',
        },
        response_waiting: {
            type: Boolean,
            default: false,
            required: false
        },
        Polite_P: {
            type: Boolean,
            default: 'false',
            required: false,
            // required: 'Please fill CounterOffer',
        },
        Awesome_Person_P: {
            type: Boolean,
            default: 'false',
            required: false,
            // required: 'Please fill CounterOffer',
        },
        Wrong_NO_P: {
            type: Boolean,
            default: 'false',
            required: false,
            // required: 'Please fill CounterOffer',
        },

        Grey_P: {
            type: Boolean,
            default: 'false',
            required: false,
            // required: 'Please fill CounterOffer',
        },
        Negotiation_Willing_P: {
            type: Boolean,
            default: 'false',
            required: false,
            // required: 'Please fill CounterOffer',
        },
        Counter_P: {
            type: Boolean,
            default: 'false',
            required: false,
            // required: 'Please fill CounterOffer',
        },
        cell: {
            type: String,
            trim: true
        },
        agent_email_address: {
            type: String,
            trim: true
        },
        listPrice: {
            type: String,
            trim: true
        },
        offerPrice: {
            type: String,
            trim: true
        },
        agent_name: {
            type: String,
            required: true,
            trim: true
        },
        calls_stack: {
            type: Array,
            default: [],
            required: false,
            trim: true
        },
        FollowUp_Call_Date: {
            type: String,
            default: null,
            required: false
        },
        comments: {
            type: String,
            default: '-',
            required: false,
            trim: true
        },
        homework_notes: {
            type: String,
            default: '-',
            required: false,
            trim: true
        },
        dateAdded: {
            type: String,
            trim: true
        },
        DOM: {
            type: String,
            default: 'default',
            trim: true
        },
        owner: {
            type: String,
            trim: true
        },
        status: {
            type: String,
            trim: true
        },
        last_date_email_sent_on: {
            type: Date,
            trim: true
        },
        createdAt: {
            type: Date,
            trim: true
        },
        dates_email_were_sent_on: {
            type: String,
            trim: true
        },
        no_of_emails_sent: {
            type: String,
            default: 'default',
            required: 'Please fill no_of_emails_sent',
            trim: true
        },
        last_date_email_open: {
            type: String,
            default: 'default',
            required: 'Please fill last_date_email_open',
            trim: true
        },
        Folio_no: {
            type: String,
            trim: true
        },
        unit: {
            type: String
        },
        no_of_emails_open: {
            type: String,
            default: 'default',
            required: 'Please fill no_of_emails_open',
            trim: true
        },
        last_date_call_was_made: {
            type: String,
            default: null,
            required: false,
            trim: true
        },
        propertyStatus: {
            type: String,
            trim: true
        },
        agent_State: {
            type: String,
            trim: true
        },
        agent_Type: {
            type: String,
            trim: true
        },
        call_priority: {
            type: String,
            trim: true
        },
        userId: {
            type: String
        }
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://github.com/Automattic/mongoose/issues/1251
  try {
    return mongooseClient.model('properties');
  } catch (e) {
    return mongooseClient.model('properties', properties);
  }
};
