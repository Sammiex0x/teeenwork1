var express = require('express');
var mysql = require('mysql');
var app = express();
 <link rel="stylesheet" type="text/css" href="example.css">

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file
var connection = mysql.createConnection({
    host: '206.12.96.242',
    user: 'group6',
    password: 'untanglingGroup6',
    database: 'group6'

connection.connect();

var listings;

connection.query('SELECT * FROM Training_Manuals', function(err, rows, fields) {

    if (err) throw err;

    listings = rows;
    console.log(rows[0]);
});

connection.end();

app.get('/', function(req, res) {

    res.render('simple1', {Transportation })
=

// about page 
app.get('/about', function(req, res) {
    var sentence = "this is a test about page, passed as a variable through ejs";
    var drinks = [
        { name: 'bus' },
        { name: 'walking'},
        { name: 'parents driving' }
    ];
    res.render('about', {
        drinks: drinks,
        sentence: sentence
    });
});

app.listen(8006, function() {
    console.log('Example app listening on port 8000!')
})