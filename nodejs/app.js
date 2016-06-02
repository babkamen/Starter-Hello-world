'use strict';

var express = require('express');
var app = express();

app.get("/hello", (req, res) => res.end("world"));

app.listen(process.env.PORT, function () {
    console.log('READY');
});