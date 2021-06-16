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

//GET Route for displaying Add page - CREATE Operation

//POST Route for processing Add page - CREATE operation

//GET Route for displaying Edit page - UPDATE Operation

//POST Route for processing Edit page - UPDATE Operation

//GET to delete Contact List row - UPDATE Operation


module.exports = router;