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
            res.render('contact/list', {title: 'Contact List', ContactList: contactList});
        }
    });
});

//GET Route for displaying Add page - CREATE Operation
router.get('/add', (req, res, next) => {
    res.render('contact/add', {title: 'Add Contact'});
});

//POST Route for processing Add page - CREATE operation
router.post('/add', (req, res, next) => {
    let newContact = List({
        "_id": id,
        "first_name": req.body.first_name,
        "last_name": req.body.last_name,
        "job_title": req.body.job_title,
        "company": req.body.company,
        "email": req.body.email,
        "phone": req.body.phone
    });

    List.create(newContact, (err, List) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/contact-list');
        }
    });
});

//GET Route for displaying Edit page - UPDATE Operation
router.get('/edit/:id', (req, res, next) => {
    let id = req.params.id;

    List.findById(id, (err, contactToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //Show edit view
            res.render('/contact/edit', {title: 'Contact List', contactList: contactToEdit});
        }
    });
});

//POST Route for processing Edit page - UPDATE Operation
router.post('/edit/:id', (req, res, next) => {
    let id = req.params.id;

    let updatedContact = List({
        "_id": id,
        "first_name": req.body.first_name,
        "last_name": req.body.last_name,
        "job_title": req.body.job_title,
        "company": req.body.company,
        "email": req.body.email,
        "phone": req.body.phone
    });
    List.updateOne({_id: id}, updatedContact, (er) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //Refresh the contact-list
            res.redirect('/contact-list');
        }
    })
});

//GET Route to delete Contact List row - DELETE Operation
router.get('/delete/:id', (req, res, next) => {
    let id = req.params.id;

    List.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //Refresh the contact-list
            res.redirect('/contact-list');
        }
    });
});

module.exports = router;