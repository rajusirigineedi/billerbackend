const mongoose = require('mongoose');



const CustomerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Customer should have a name'],
        trim : true,
    },
    phone: {
        type: String,
        required: [true, 'Customer mobile number should be added'],
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        validate: [validator.isEmail, 'Email should be valid']
    },
    address: {
        type: String,
    },
    company: {
        type: mongoose.Schema.ObjectId,
        ref: 'Company'
    }
})


const Customer = mongoose.model('Customer', CustomerSchema);
module.exports = Customer;