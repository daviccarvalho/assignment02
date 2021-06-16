/*
File Name: users.js
Student Name: Davi Cavalcante de Carvalho
Student id# 301154671
June 04, 2021
*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
