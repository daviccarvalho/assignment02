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
            required: 'username is requires'
        },
        /*
        password:
        {
            type: String,
            default: '';
            trim: true,
            required: 'password is required'
        }
        */
    },
    {
        collection: "users"
    }
)