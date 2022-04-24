const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

// since we are using NoSQL, we don't have to define the fields, but for clarity and usability we should regulate what the data will look like
const PizzaSchema = new Schema({
    pizzaName: {
        type: String
    },
    createdBy: {
        type: String
    },
    createdAt: {
        type: Date, 
        default: Date.now,
        // 'getter' to transform the data using the dateFormat func before it gets to the controller
        get: (createdAtVal) => dateFormat(createdAtVal)
    },
    size: {
        type: String,
        default: 'Large'
    },
    // or we could specify the type as array
    toppings: [],
    comments: [
        {
            type: Schema.Types.ObjectId,
            // to Mongoose what 'references' is to Sequelize, tell model what documents to search to find in the comments
            ref: 'Comment'
        }
    ]
},
{
    // when adding virtuals or getters we must ensure that we use them by adding a boolean value to the toJSON field
    toJSON: {
        virtuals: true,
        getters: true
    },
    // set id to false, because its an unneeded virtual and we dont want it
    id: false
}
);

// get total count of comments and replies on retrieval 
PizzaSchema.virtual('commentCount').get(function() {
    return this.comments.length;
})

// create the pizza model using the pizza schema
const Pizza = model('Pizza', PizzaSchema);

// export the Pizza model
module.exports = Pizza