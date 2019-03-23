'use strict'
const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    username:  String, 
    password: String, 
    position: String
});

module.exports = mongoose.model('User', UserSchema);