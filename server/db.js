const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/code_no_go_db');

module.exports = mongoose;
