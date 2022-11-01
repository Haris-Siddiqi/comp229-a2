/** 
*  COMP229
*  Assignment 2
*  Haris Siddiqi - 301126020
*/

let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('Placeholder');
});

module.exports = router;