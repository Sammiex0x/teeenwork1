var express = require('express');
var mysql = require('mysql');
var async = require("async");
var bodyParser = require("body-parser");
var app = express();
//<link rel="stylesheet" type="text/css" href="example.css">

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('.'));

// use res.render to load up an ejs view file
var connection = mysql.createConnection({
    host: '206.12.96.242',
    user: 'group6',
    password: 'untanglingGroup6',
    database: 'group6'
});

connection.connect();

var listings;

connection.query('SELECT * FROM Training_Manuals', function(err, rows, fields) {

    if (err) throw err;

    listings = rows;
    console.log(rows[0]);
});

connection.end();

app.get('/', function(req, res) {

    res.render('teenwork1', { Transportation: listings });
});

app.post('/query', function(req, res) {

    //console.log(req);
    console.log(req.body);
    async.series([function(callback) {
            var connection = mysql.createConnection({
                host: '206.12.96.242',
                user: 'group6',
                password: 'untanglingGroup6',
                database: 'group6'
            });
            connection.connect();
            var q = 'SELECT * FROM Training_Manuals WHERE Category LIKE "' + req.body.queryStr + '"';
            //console.log(q);
            connection.query(q, function(err, rows, fields) {
                if (err) throw err;

                listings = rows;
                //console.log(rows[0]);
                connection.end();
                callback(null, "query done");
            });


        }, function(callback) {
            res.redirect("/");
            callback(null, "display done");
        }


    ], function(err, results) {
        //console.log(results);
        //could do some error processing here
    });



});

// employers page 
app.get('/employers', function(req, res) {
    var sentence = "this is a test about page, passed as a variable through ejs";
    var drinks = [
        { name: 'bus' },
        { name: 'walking' },
        { name: 'parents driving' }
    ];
    res.render('employers', {
        drinks: drinks,
        sentence: sentence
    });
});

// teenwork1 page 
app.get('/teenwork1', function(req, res) {
    var sentence = "this is a test about page, passed as a variable through ejs";
    var drinks = [
        { name: 'bus' },
        { name: 'walking' },
        { name: 'parents driving' }
    ];
    res.render('teenwork', {
        drinks: drinks,
        sentence: sentence
    });
});

app.listen(8006, function() {
    console.log('Example app listening on port 8006!');
});