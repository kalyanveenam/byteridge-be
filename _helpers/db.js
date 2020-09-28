const config = require('config.js');
const mongoose = require('mongoose');
mongoose.connect( config.dev, { useCreateIndex: true, useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model')
};