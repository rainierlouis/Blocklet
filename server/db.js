const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/wallto_db');

module.exports = mongoose;
