var fs = require('fs');

var handlebars = require("handlebars");

var Cell_phone_bills = require('./cell-phone-bill');

var cell_phone_bills = new Cell_phone_bills();
var listOfMaps = cell_phone_bills.find_cell_phone_bill('./ItemisedBill.csv');



var phone = new  Cell_phone_bills();
        
var listDurationSeconds = phone.durationSeconds(listOfMaps);
var results = phone.phoneProvider(listDurationSeconds,"MTN","Vodacom","CellC");
console.log(results);



var source = fs.readFileSync('./display.handlebars', "utf8");
var template = handlebars.compile(source);

var data = { bills:[results]};

var result = template(data);

///http://jsfiddle.net/webpro/9xwum/     example
fs.writeFileSync('_display.html', result);
//document.body.innerHTML = result;








