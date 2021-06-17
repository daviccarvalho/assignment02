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

//Define User Model instance
let userModel = require('../models/user');
//Alias for user model instance
let User = userModel.User;

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

//Export display login page
module.exports.displayLoginPage = (req, res, next) => {
//Check if the user is logged in
if(!req.user)
{
    res.render('auth/login',
    {
        title: "Login Page",
        messages: req.flash('loginMessage'),
        displayName: req.user ? req.user.displayName : ''
    })
}
else
{
    return res.redirect('/');
}
}

//Export process login page
module.exports.processLoginPage = (req, res, next) => {
    passport.authenticate('local', 
    (err, user, info) => {
        //Server error test
        if(err)
        {
            return next(err);
        }
        //check if there is a user login error
        if(!user)
        {
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }
        req.login(user, (err) => {
            //Check for server error
            if(err)
            {
                return next(err);
            }
            return res.redirect('/contact-list');
        });
    })(req, res, next);
}