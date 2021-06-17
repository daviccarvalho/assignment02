/*
File Name: index.js
Student Name: Davi Cavalcante de Carvalho
Student id# 301154671
June 16, 2021
*/
//Require modules for the user model
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let User = mongoose.Schema
(
    {
        username:
        {
            type: String,
            default: '',
            trim: true,
            required: 'Username is requires'
        },
        /*
        password:
        {
            type: String,
            default: '',
            trim: true,
            required: 'Password is required'
        }
        */
       email:
       {
        type: String,
        default: '',
        trim: true,
        required: 'Email address is required'
       },
       displayName:
       {
        type: String,
        default: '',
        trim: true,
        required: 'Display name is required'
       },
       created:
       {
        type: Date,
        default: Date.now
       },
       update:
       {
        type: Date,
        default: Date.now
       }
    },
    {
        collection: "users"
    }
);

//Configure options for user model

let options = ({missingPasswordError: 'Wrong / Missing Password'});

User.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', User);