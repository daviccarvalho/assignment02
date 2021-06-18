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

//Enable jwt
let jwt = require('jsonwebtoken');
let DB = require('../config/db');

//Define User Model instance
let userModel = require('../models/user');
//Alias for user model instance
let User = userModel.User;

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', {title: 'Home', displayName: req.user ? req.user.displayName : ''});
}

module.exports.displayAboutPage = (req, res, next) => {
    res.render('about', { title: 'About Me', displayName: req.user ? req.user.displayName : ''});
}

module.exports.displayProjectsPage = (req, res, next) => {
    res.render('projects', { title: 'Projects', displayName: req.user ? req.user.displayName : ''});
}

module.exports.displayServicesPage = (req, res, next) => {
    res.render('services', { title: 'Services', displayName: req.user ? req.user.displayName : ''});
}

module.exports.displayContactPage = (req, res, next) => {
    res.render('contact', { title: 'Contact Me', displayName: req.user ? req.user.displayName : ''});
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

            const payload =
            {
                id: user._id,
                displayName: user.displayName,
                user: user.username,
                email: user.email
            }

            const authToken = jwt.sign(payload, DB.Secret,{
                expiresIn: 604800 //1week
            });

            /*Getting ready for API
            res.json({success: true, msg: 'User logged in', user:{
                id: user._id,
                displayName: user.displayName,
                user: user.username,
                email: user.email
            }, token: authToken});
            */

            return res.redirect('/contact-list');
        });
    })(req, res, next);
}

//Export display register page

module.exports.displayRegisterPage = (req, res, next) => {
    res.render('auth/register',
    {
        title: 'Register',
        messages: req.flash('registerMessage'),
        displayName: req.user ? req.user.displayName : ''
    });
}

//Save code for future
module.exports.displayRegisterPage = (req, res, next) => {
    if(!req.user)
    {
        res.render('auth/register',
        {
            title: 'Register',
            messages: req.flash('registerMessage'),
            displayName: req.user ? req.user.displayName : ''
        });
    }
    else
    {
        return res.redirect('/');
    }
}

//Export process register page

module.exports.processRegisterPage = (req, res, next) => {
    //Instantiate a user object
    let newUser = new User({
        username: req.body.password,
        password: req.body.password,
        email: req.body.email,
        displayName: req.body.displayName
    });

    User.register(newUser, req.body.password, (err) => {
        if(err)
        {
            console.log("error: Inserting New User");
            if(err.name = "UserExistsError")
            {
                req.flash(
                    'registerMessage',
                    'Registration Error: User Already Exists!'
                );
                console.log('Error: User Already Exists"')
            }
            return res.render('auth/register',
            {
                title: 'Register',
                messages: req.flash('registerMessage'),
                displayName: req.user ? req.user.displayName : ''
            });
        }
        else
        {
            //If there is no error, registration is successful
            //Redirects to user authentication

            res.json({success: true, msg: 'User created'});

            return res.redirect('/register');
            /*return passport.authenticate('local')(req, res, () => {
                res.redirect('/contact-list')
            });*/
        }
    });
}

//Export logout
module.exports.performLogout = (req, res, next) => {
    req.logout();
    res.redirect('/');
}