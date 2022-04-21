const { Schema, model } = require('mongoose');

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
        default: Date.now
    },
    size: {
        type: String,
        default: 'Large'
    },
    // or we could specify the type as array
    toppings: []
});

// create the pizza model using the pizza schema
const Pizza = model('Pizza', PizzaSchema);

// export the Pizza model
module.exports = Pizza