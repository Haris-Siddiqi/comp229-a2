/** 
*  COMP229
*  Assignment 2
*  Haris Siddiqi - 301126020
*/

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

// helper function for authentication guard
function requireAuth(req, res, next) {

  // First check if the user is logged in
  if (!req.isAuthenticated())
  {
    return res.redirect('/login');
    }
    next();
 }


let businessController = require('../controllers/business')

/* GET Business Contacts page. */
router.get('/', businessController.DisplayBusinessList );

/* GET Add page. */
router.get('/add', requireAuth, businessController.DisplayAddPage);

/* POST process the Add page. CREATE */
router.post('/add', requireAuth, businessController.ProcessAddPage);

/* GET Edit page */
router.get('/edit/:id', requireAuth, businessController.DisplayEditPage);

/* POST process the Edit page */
router.post('/edit/:id', requireAuth, businessController.ProcessEditPage);

/* GET process the Delete page */
router.get('/delete/:id', requireAuth, businessController.ProcessDeletePage);

module.exports = router;