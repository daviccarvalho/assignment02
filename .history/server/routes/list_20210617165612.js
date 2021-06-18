/*
File Name: index.js
Student Name: Davi Cavalcante de Carvalho
Student id# 301154671
June 16, 2021
*/

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

//Connect to our List Model (not necessary anymore, the logic is done elsewhere)
//let List = require('../models/list');

let contactListController = require('../controllers/list');

//Require authentications whenever changing the DB
function requireAuth(req, res, next)
{
    //check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/* GET Route for Contact List page - READ Operation */
router.get('/', requireAuth, contactListController.displayContactList);

/* GET Route for displaying Add page - CREATE Operation */
router.get('/add', requireAuth, contactListController.displayAddPage);

/* POST Route for processing Add page - CREATE Operation */
router.post('/add', requireAuth, contactListController.processAddPage);

/* GET Route for displaying Edit page - UPDATE Operation */
router.get('/edit/:id', requireAuth, contactListController.displayEditPage);

/* POST Route for processing Edit page - UPDATE Operation */
router.post('/edit/:id', requireAuth, contactListController.processEditPage);

/* GET to perform Deletion - DELETE Operation */
router.get('/delete/:id', requireAuth, contactListController.performDelete);

module.exports = router;