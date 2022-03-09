const mongoose = require('mongoose');


const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Company must have a name'],
        unique: true,
        trim: true,
    },
    // TODO : Create an address object to stop repetition
    address: {
        type: String,
    },
    admin: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    staff: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'User'
        }
    ],
    // we need customers .. but the list goes too big. so we are not including them here.. But they are here
});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;





// admin has a company or multiple companies
// admin has staff for each company non overlapping staff
// staff should signup themselves from the app and register themselves for the company / companies they are working
