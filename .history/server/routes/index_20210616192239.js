/*
File Name: index.js
Student Name: Davi Cavalcante de Carvalho
Student id# 301154671
June 04, 2021
*/

let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET About Us page. */
router.get('/about', indexController.displayAboutPage);

/* GET Products page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Contact Us page. */
router.get('/contact', indexController.displayContactPage);

/* GET Route for displaying Login page*/
router.get('/login', contactListController.displayAddPage);

/* POST Route for processing Login page*/
router.post('/login', contactListController.processAddPage);

/* GET Route for displaying Register page*/
router.get('/register', contactListController.displayAddPage);

/* POST Route for processing Register page*/
router.post('/register', contactListController.processAddPage);

/* GET to perform User Logout*/
router.get('/logout', contactListController.performDelete);

module.exports = router;