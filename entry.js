// server.js

    // set up ========================
    const express  = require('express');
    const app      = express();                               // create our app w/ express
    const morgan = require('morgan');             // log requests to the console (express4)
    const bodyParser = require('body-parser');    // pull information from HTML POST (express4)
    const os = require('os');
    const path = require('path');

    // configuration =================


    app.use(express.static(__dirname + '/app'));                 // set the static files location /public/img will be /img for users
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
         "network": os.networkInterfaces(),
         "ostype": os.type(),
         "os": os.release(),
         "uptime": os.uptime()
       });
     });

     app.get('/api/network', function(req, res) {
       res.send(os.networkInterfaces());
     });



    // listen (start app with node server.js) ======================================
    app.listen(8080);
    console.log("AM PORNIT APLICATIA");
