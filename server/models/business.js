/** 
*  COMP229
*  Assignment 2
*  Haris Siddiqi - 301126020
*/

let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let Model = mongoose.model;

let BusinessSchema = new Schema({
    contactLastName: String,
    contactFirstName: String,
    contactNumber: String,
    emailAddress: String
},
    { 
        collection: 'business'
    });

module.exports.Model = Model('Business', BusinessSchema);