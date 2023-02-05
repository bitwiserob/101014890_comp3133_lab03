const mongoose = require('mongoose');


const address = new mongoose.Schema({
    street: String,
    city: String,
    zipcode: String,
});

const restaurantSchema = new mongoose.Schema({
    address:{
        type: address,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    cuisine: {
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    restaurant_id: {
        type: String,
        required: true
    }
});


const Restaurant = mongoose.model('Restaurant', restaurantSchema);
module.exports = Restaurant;