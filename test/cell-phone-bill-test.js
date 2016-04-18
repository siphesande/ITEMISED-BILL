

var assert = require("assert");
var Cell_phone_bills = require("../cell-phone-bill.js");

var cell_phone_bills = new Cell_phone_bills();
describe("read an Itemised cell phone bill in ItemisedBill.csv file", function(){

var listOfMaps = cell_phone_bills.find_cell_phone_bill('./ItemisedBill.csv');

    it('should return a list of maps of Itemised cell phone bill ', function(){
         
		 //console.log(listOfMaps);
		 assert.equal(36, listOfMaps.length);
            
        });
    it("should return all the phone calls for the specified provider",function(){
    	var vodacomMap = new Cell_phone_bills();
    	var listOfMaps = cell_phone_bills.find_cell_phone_bill('./ItemisedBill.csv');

    	var voda = vodacomMap.specifiedProvider(listOfMaps,"Vodacom");
    	//console.log(voda);
    	assert.equal(8,voda.length);

    });
   

});











