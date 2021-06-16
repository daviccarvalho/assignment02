var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  { title: 'Home'});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', 
  { title: 'Home', h1: 'my portfolio page'});
});

/* GET About me page. */
router.get('/about', function(req, res, next) {
  res.render('index', 
  { title: 'About me',
    brtte: 'Main Heading'});
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', 
  { title: 'Projects',
    h1: 'Main Heading'});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', 
  { title: 'Services',
    h1: 'Main Heading'});
});

/* GET Contact me page. */
router.get('/contact', function(req, res, next) {
  res.render('index', 
  { title: 'Contact me',
    h1: 'Main Heading'});
});

module.exports = router;
