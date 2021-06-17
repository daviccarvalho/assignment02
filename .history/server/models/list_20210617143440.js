/*
File Name: index.js
Student Name: Davi Cavalcante de Carvalho
Student id# 301154671
June 16, 2021
*/

let mongoose = require('mongoose');

//Create a model class
let listModel = mongoose.Schema({
    last_name: String,
    first_name: String,
    job_title: String,
    company: String,
    email: String,
    phone: String    
},
{
    collection: "list"
});

module.exports = mongoose.model('List', listModel);