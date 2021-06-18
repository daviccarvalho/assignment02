/*
File Name: index.js
Student Name: Davi Cavalcante de Carvalho
Student id# 301154671
June 16, 2021
*/

let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

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

//GET home page.
router.get('/', indexController.displayHomePage);

//GET home page.
router.get('/home', indexController.displayHomePage);

//GET About Us page.
router.get('/about', indexController.displayAboutPage);

//GET Products page.
router.get('/projects', indexController.displayProjectsPage);

//GET Services page.
router.get('/services', indexController.displayServicesPage);

// GET Contact Us page.
router.get('/contact', indexController.displayContactPage);

//GET Route for displaying Login page
router.get('/login', indexController.displayLoginPage);

//POST Route for processing Login page
router.post('/login', indexController.processLoginPage);

/*Not required for Assignment 02
//GET Route for displaying Register page
router.get('/register', requireAuth, indexController.displayRegisterPage);

//POST Route for processing Register page
router.post('/register', requireAuth, indexController.processRegisterPage);
*/

//GET to perform User Logout
router.get('/logout', indexController.performLogout);

module.exports = router;