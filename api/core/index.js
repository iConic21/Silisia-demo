module.exports.config = require('./config');
module.exports.express = require('express');
module.exports.bodyParser = require('body-parser');
module.exports.cookieParser = require('cookie-parser');
module.exports.path = require('path');
module.exports.fs = require('fs');
module.exports.crypto = require('crypto');
module.exports.promise = require('promise');
module.exports.axios = require('axios');
module.exports.cookieSession = require('cookie-session');
module.exports.mongoose = require('mongoose');

module.exports.app = module.exports.express();
module.exports.app.use(module.exports.bodyParser.json());
module.exports.app.use(module.exports.cookieParser());
module.exports.app.use(module.exports.cookieSession({
    name: 'session',
    keys: module.exports.config.sessionCookie.keys
}));
module.exports.mongoose.connect(module.exports.config.mongoose.url, {
    useNewUrlParser: true
}).catch(console.error);

module.exports.http = require('http').Server(module.exports.app);
module.exports.io = require('socket.io')(module.exports.http);

module.exports.schema = require('./../schemas');
module.exports.services = require('./../services');
module.exports.routes = require('./../routes');