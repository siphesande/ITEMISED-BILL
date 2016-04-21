"use strict"
var express = require('express');
var exphbs  = require('express-handlebars');
var Cell_phone_bills = require('./cell-phone-bill');

var cell_phone_bills = new Cell_phone_bills();
var listOfMaps = cell_phone_bills.find_cell_phone_bill('./ItemisedBill.csv');

var fs = require("fs"); 

var app = express();

app.set('views',__dirname + '/views');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('home');

});

app.get('/totalDurationOfProvider', function (req, res) {
    var phone = new  Cell_phone_bills();
        
    var listDurationSeconds = phone.durationSeconds(listOfMaps);
	var totalDuration = phone.phoneProvider(listDurationSeconds,"MTN","Vodacom","CellC");
    res.render('totalDurationOfProvider',{list: totalDuration} );   
});
//start the server 
var port = process.env.PORT || 3000;
var server = app.listen(port,function () {

    var host = server.address().address;
    var port = server.address().port;

     console.log('Example app listening at http://%s:%s', host, port);

});
