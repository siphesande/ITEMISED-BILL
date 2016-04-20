var assert = require("assert");
var Cell_phone_bills = require("../cell-phone-bill.js");

describe("read an Itemised cell phone bill in ItemisedBill.csv file", function(){
    var cell_phone_bills = new Cell_phone_bills();
    var listOfMaps = cell_phone_bills.find_cell_phone_bill('./ItemisedBill.csv');

    it('should return a list of maps of Itemised cell phone bill ', function(){
         
		 //console.log(listOfMaps);
		 assert.equal(35, listOfMaps.length);
            
        });
    it("should return all the phone calls for the specified provider",function(){
    	var vodacomMap = new Cell_phone_bills();
    	var listOfMaps = cell_phone_bills.find_cell_phone_bill('./ItemisedBill.csv');

    	var voda = vodacomMap.specifiedProvider(listOfMaps,"Vodacom");
    	//console.log(voda);
    	assert.equal(8,voda.length);

    });
    it("should return all the phone calls for the specified provider",function(){
    	var vodacomMap = new Cell_phone_bills();
    	var listOfMaps = cell_phone_bills.find_cell_phone_bill('./ItemisedBill.csv');

    	var voda = vodacomMap.specifiedProvider(listOfMaps,"MTN");
    	//console.log(voda);
    	assert.equal(16,voda.length);

    });
    it("should return all the phone calls for the specified provider",function(){
    	var vodacomMap = new Cell_phone_bills();
    	var listOfMaps = cell_phone_bills.find_cell_phone_bill('./ItemisedBill.csv');

    	var voda = vodacomMap.specifiedProvider(listOfMaps,"CellC");
    	//console.log(voda);
    	assert.equal(11,voda.length);

    });
    it("should return all the phone calls for the specified provider",function(){
    	var vodacomMap = new Cell_phone_bills();
    	var listOfMaps = cell_phone_bills.find_cell_phone_bill('./ItemisedBill.csv');

    	var voda = vodacomMap.totalCalls(listOfMaps);
    	//console.log(voda);
    	assert.deepEqual(voda,{ MTN: 16, Vodacom: 8, CellC: 11 });
    });
    it('should calculate the duration in seconds of a call', function(){
       var phone = new  Cell_phone_bills();
       var list = phone.find_cell_phone_bill('./ItemisedBill.csv');
       

       var results = phone.durationSeconds(list);
       //console.log(results);
	   assert.equal(35 , results.length);
	
 });
    it("should calculate return  order the calls by ascending duration", function(){
    	var phone = new  Cell_phone_bills();
        
       var listDurationSeconds = phone.durationSeconds(listOfMaps);
       var results = phone.acsendingDuration(listDurationSeconds);
       //console.log(results);
	   assert.equal(35 , results.length);
    });
    it("sorted by cell phone provider, with a call duration sub-total at the end of each provider", function(){
    	var phone = new  Cell_phone_bills();
        
       var listDurationSeconds = phone.durationSeconds(listOfMaps);
       var results = phone.phoneProvider(listDurationSeconds);
       //console.log(results);
	   assert.equal({ provider: 'MTN', sub_totalDuration: 6928 } , results);
    });
});











