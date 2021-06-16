let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//Connect to Contact List Model
let List = require('../models/list');

//Get Route for the Contact List page - READ Operation
router.get('/', (req, res, next) => {
    List.find((err, contactList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(ContactList);
            res.render('list', {title: 'Contact List', ContactList: contactList});
        }
    });
});
module.exports = router;