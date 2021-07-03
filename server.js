#!/bin/env node
//  OpenShift sample Node application
var express = require('express');

//start
var express = require('express');
var app = express();
var http = require('http').Server(app);
var port      = process.env.PORT || 3000;
//var ip = process.env.OPENSHIFT_NODEJS_IP || 'localhost';
var path = require('path');

app.use(express.static(path.resolve(__dirname)));

app.get('/', function(req, res) {
    res.render('index.html');
});

http.listen(port,function() {
    console.log('SERVER RUNNING... PORT: ' + port);
})