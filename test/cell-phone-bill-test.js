var assert = require("assert");
var Cell_phone_bills = require("../cell-phone-bill.js");

describe("read an Itemised cell phone bill in ItemisedBill.csv file", function(){
    var cell_phone_bills = new Cell_phone_bills();
    var listOfMaps = cell_phone_bills.find_cell_phone_bill('./ItemisedBill.csv');

    it('should return a list of maps of Itemised cell phone bill ', function(){
         
		 //console.log(listOfMaps);
		 assert.equal(35, listOfMaps.length);
            
        });
    it("should return all the phone calls for the Vodacom provider",function(){
    	var vodacomMap = new Cell_phone_bills();
    	var listOfMaps = cell_phone_bills.find_cell_phone_bill('./ItemisedBill.csv');

    	var voda = vodacomMap.specifiedProvider(listOfMaps,"Vodacom");
    	//console.log(voda);
    	assert.equal(8,voda.length);

    });
    it("should return all the phone calls for the MTN provider",function(){
    	var vodacomMap = new Cell_phone_bills();
    	var listOfMaps = cell_phone_bills.find_cell_phone_bill('./ItemisedBill.csv');

    	var voda = vodacomMap.specifiedProvider(listOfMaps,"MTN");
    	//console.log(voda);
    	assert.equal(16,voda.length);

    });
    it("should return all the phone calls for the CellC provider",function(){
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
    	console.log(voda);
    	assert.deepEqual(voda,{ MTN: 16, Vodacom: 8, CellC: 11 });
    });

    it('should calculate the duration in seconds of a call', function(){
       var phone = new  Cell_phone_bills();
       var list = phone.find_cell_phone_bill('./ItemisedBill.csv');
       

       var results = phone.durationSeconds(list);
      // console.log(results);
	   assert.equal(35 , results.length);
	
 });

    it("should calculate return  order the calls by ascending duration", function(){
    	var phone = new  Cell_phone_bills();
        
       var listDurationSeconds = phone.durationSeconds(listOfMaps);
       var results = phone.ascendingDuration(listDurationSeconds);
       //console.log(results);
	   assert.equal(35 , results.length);
    });
    it("sorted by cell phone provider, with a call duration sub-total at the end of each provider", function(){
    	var phone = new  Cell_phone_bills();
        
       var listDurationSeconds = phone.durationSeconds(listOfMaps);
       var results = phone.phoneProvider(listDurationSeconds,"MTN","Vodacom","CellC");
       //console.log(results);
	   assert.deepEqual([ { provider: 'MTN', sub_total1: 3471 },
  { provider: 'Vodacom', sub_total2: 610 },
  { provider: 'CellC', sub_total3: 2847 } ]

                          , results);
    });
    // it("sorted by cell phone provider, with a call duration sub-total at the end of each provider", function(){
    // 	var phone = new  Cell_phone_bills();
        
    //    var listDurationSeconds = phone.durationSeconds(listOfMaps);
    //    var results = phone.totalCallTime(listDurationSeconds);
    //    console.log(results);
	   // assert.deepEqual(6928 ,results);
    // });




   it('returns list of total phone calls to a number from MTN', function () {
     var phone_bills = new Cell_phone_bills();
     var mtnMap = phone_bills.specifiedProvider(listOfMaps,"MTN");
      var providerMap = phone_bills.totalCallsPerNumber(mtnMap);
      var results = { '0832401145': 5,
                      '0838758090': 5,
                      '0831239023': 3,
                      '0832004576': 1,
                      '0837351200': 1,
                      '0834590001': 1
                    }


      assert.deepEqual(providerMap, results);
   
    });
   it('returns list of total phone calls to a number from MTN', function () {
     var phone_bills = new Cell_phone_bills();
     var mtnMap = phone_bills.specifiedProvider(listOfMaps,"Vodacom");
      var providerMap = phone_bills.totalCallsPerNumber(mtnMap);
      var results = { '0821302398': 2,
                      '0828907600': 1,
                      '0824501276': 1,
                      '0821005078': 1,
                      '0828009712': 1,
                      '0828901271': 1,
                      '0824009001': 1 }

      //console.log(providerMap);
      assert.deepEqual(providerMap, results);
   
    });
   it('returns list of total phone calls to a number from MTN', function () {
     var phone_bills = new Cell_phone_bills();
     var mtnMap = phone_bills.specifiedProvider(listOfMaps,"CellC");
      var providerMap = phone_bills.totalCallsPerNumber(mtnMap);
      var results = { '0841257809': 8, '0825605600': 2, '0845009087': 1 }
      //console.log(providerMap);
      assert.deepEqual(providerMap, results);
   
    });
 
 
 

});











