'use strict';

var express = require('express');
var debug = require('debug')('api');
var app = new express();

// express configs
require('./config/express')(app);


// start app
app.listen(process.env.PORT || 8080, (error) => {
    if (!error) {
        debug(`📡  Running on port: ${process.env.PORT || 8080}`);
    }
});
