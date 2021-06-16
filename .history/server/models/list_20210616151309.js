let mongoose = require('mongoose');

//Create a model class
let listModel = mongoose.Schema({
    last_name: String,
    first_name: String,
    job_title: String,
    company: String,
    email: String,
    phone: String,
    _id: String
},
{
    collection: "list"
});

module.exports = mongoose.model('List', listModel);