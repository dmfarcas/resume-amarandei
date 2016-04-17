"use strict";
    // set up ========================
    const express  = require('express');
    const app      = express();                               // create our app w/ express
    const morgan = require('morgan');             // log requests to the console (express4)
    const bodyParser = require('body-parser');    // pull information from HTML POST (express4)
    const os = require('os');
    const path = require('path');
    const sys = require('util');
    let exec = require('child_process').exec;

    // configuration =================


    app.use(express.static(__dirname + '/dist'));                 // set the static files location /public/img will be /img for users
    app.use('/bower_components',  express.static(__dirname + '/bower_components'));

    app.use(morgan('dev'));                                         // log every request to the console
    app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

     app.get('/api/sysinfo', function(req, res) {
       res.send({
         "cpu": os.cpus(),
         "totalmem": os.totalmem(),
         "loadavg": os.loadavg(),
         "ostype": os.type(),
         "os": os.release(),
         "uptime": os.uptime()
       });
     });

     app.get('/api/uptime', function(req, res) {
       exec("uptime", function (error, stdout, stderr) {
         res.send(stdout);
          if (error !== null) {
            console.log('exec error: ' + error);
          }
        });
     });



    // listen (start app with node server.js) ======================================
    app.listen(8080);
    console.log("AM PORNIT APLICATIA");
