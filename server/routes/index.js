/** 
*  COMP229
*  Assignment 2
*  Haris Siddiqi - 301126020
*/

let express = require('express');
let router = express.Router();

let Business = require('../models/business');

let indexController = require('../controllers/index');

/* GET default home page. */
router.get('/', indexController.DisplayHomePage);

/* GET home page. */
router.get('/home', indexController.DisplayHomePage );

/* GET About page. */
router.get('/about', indexController.DisplayAboutPage );

/* GET Projects page. */
router.get('/projects', indexController.DisplayprojectsPage );

/* GET Services page. */
router.get('/services', indexController.DisplayServicesPage );

/* GET Contact Us page. */
router.get('/contact', indexController.DisplayContactPage );

/* GET Display Login page. */
router.get('/login', indexController.DisplayLoginPage);

/* PROCESS Login page. */
router.post('/login', indexController.ProcessLoginPage);

/* GET Display Register page. */
router.get('/register', indexController.DisplayRegisterPage);

/* PROCESS Register page. */
router.post('/register', indexController.ProcessRegisterPage);

/* GET Perform Logout page. */
router.get('/logout', indexController.PerformLogout);

module.exports = router;