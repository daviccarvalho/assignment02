let mongoose = require('mongoose');

//Create a model class
let listModel = mongoose.Schema({
    lastName: String,
    firstName: String,
    jobTitle: String,
    company: String,
    email: String,
    phone: String
},
{
    collection: "list"
});

module.exports = mongoose.model('List', listModel);