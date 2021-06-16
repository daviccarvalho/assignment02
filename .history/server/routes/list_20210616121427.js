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
router.get('/add', (req, res, next) => {

});

//POST Route for processing Add page - CREATE operation
router.post('/add', (req, res, next) => {

});

//GET Route for displaying Edit page - UPDATE Operation
router.get('/edit/:id', (req, res, next) => {

});

//POST Route for processing Edit page - UPDATE Operation
router.post('/edit/:id', (req, res, next) => {

});

//GET Route to delete Contact List row - DELETE Operation


module.exports = router;