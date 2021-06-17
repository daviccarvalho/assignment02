let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

//Connect to our List Model (not necessary anymore, the logic is done elsewhere)
//let List = require('../models/list');

let contactListController = require('../controllers/list');

//Helper function for guard purposes
function requireAuth(req, res, next)
{
    //check if the user is logged in
    if(!req.isAuthenticated()
    {
        return res.redirect('/login');
    })
}

/* GET Route for Contact List page - READ Operation */
router.get('/', contactListController.displayContactList);

/* GET Route for displaying Add page - CREATE Operation */
router.get('/add', contactListController.displayAddPage);

/* POST Route for processing Add page - CREATE Operation */
router.post('/add', contactListController.processAddPage);

/* GET Route for displaying Edit page - UPDATE Operation */
router.get('/edit/:id', contactListController.displayEditPage);

/* POST Route for processing Edit page - UPDATE Operation */
router.post('/edit/:id', contactListController.processEditPage);

/* GET to perform Deletion - DELETE Operation */
router.get('/delete/:id', contactListController.performDelete);

module.exports = router;