'use strict'
const mongoose = require('mongoose');

const URI = 'mongodb://localhost/accounting-system';
mongoose.connect(URI, { useNewUrlParser: true })
    .then(db => console.log('DB in connected'))
    .catch(err => console.error(err));
module.exports = mongoose;