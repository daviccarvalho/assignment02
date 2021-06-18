/*
File Name: index.js
Student Name: Davi Cavalcante de Carvalho
Student id# 301154671
June 16, 2021
*/

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//Connect to Contact List Model
let List = require('../models/list');

//Get Route for the Contact List page - READ Operation
module.exports.displayContactList = (req, res, next) => {
    List.find((err, contactList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(ContactList);
            res.render('contact/list', {title: 'Contact List', ContactList: contactList, displayName: req.user ? req.user.displayName : ''});
        }
    }).sort({last_name: 1, first_name: 1});
};

//GET Route for displaying Add page - CREATE Operation
module.exports.displayAddPage = (req, res, next) => {
    res.render('contact/add', {title: 'Add Contact', displayName: req.user ? req.user.displayName : ''});
};

//POST Route for processing Add page - CREATE operation
module.exports.processAddPage = (req, res, next) => {
    let newContact = List({
        "first_name": req.body.firstName,
        "last_name": req.body.lastName,
        "job_title": req.body.jobTitle,
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
};

//GET Route for displaying Edit page - UPDATE Operation
module.exports.displayEditPage = (req, res, next) => {
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
            res.render('contact/edit', {title: 'Contact Edit', contactList: contactToEdit, displayName: req.user ? req.user.displayName : ''});
        }
    });
};

//POST Route for processing Edit page - UPDATE Operation
module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;

    let updatedContact = List({
        "_id": id,
        "first_name": req.body.firstName,
        "last_name": req.body.lastName,
        "job_title": req.body.jobTitle,
        "company": req.body.company,
        "email": req.body.email,
        "phone": req.body.phone
    });
    List.updateOne({_id: id}, updatedContact, (err) => {
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
};

//GET Route to delete Contact List row - DELETE Operation
module.exports.performDelete = (req, res, next) => {
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
};
