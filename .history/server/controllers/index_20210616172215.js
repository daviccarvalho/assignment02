/*
File Name: index.js
Student Name: Davi Cavalcante de Carvalho
Student id# 301154671
June 16, 2021
*/

let express = require('express');
let router = express.Router();

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', {title: 'Home'});
}

module.exports.displayAboutPage = (req, res, next) => {
    res.render('about', { title: 'About Me'});
}

module.exports.displayProjectsPage = (req, res, next) => {
    res.render('projects', { title: 'Projects'});
}

module.exports.displayServicesPage = (req, res, next) => {
    res.render('services', { title: 'Services'});
}

module.exports.displayContactPage = (req, res, next) => {
    res.render('contact', { title: 'Contact Me'});
}