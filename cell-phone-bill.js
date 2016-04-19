var fs = require("fs");
module.exports = function(){
	this.find_cell_phone_bill = function(filepath){
		var fileContent  = fs.readFileSync(filepath, 'utf8');

		var rows = fileContent .split('\r');
		var listOfPhoneBills = [];
		var lineNumber = 0;

		rows.forEach(function(row) {

			// var phone = row.split(',').splice(1);

			if(lineNumber != 0){
                var columns = row.split(','); 

                var cellMap={
				
				 date : columns[0],
				 provider : columns[1],
				 number : columns[2],
				 duration : columns[3]
				}

				listOfPhoneBills.push(cellMap);
			}
			lineNumber = lineNumber + 1;
		});
		return listOfPhoneBills;
	}
   
this.specifiedProvider = function(listOfMaps, Provider){
    	var specificProvider =[];
    	
    	
		for(var i = 0; i < listOfMaps.length; i++){
			var value = listOfMaps[i];
			if(value.provider === Provider && value.provider != undefined){
				specificProvider.push(value);
               // console.log(listOfMaps[i]);
			}
		}     
		//console.log(specificProvider);
		return specificProvider;
	};



this.totalCalls = function(listOfMaps) {
		var phoneCallsMap = {};
		for(var i = 0; i < listOfMaps.length; i++){
			var value = listOfMaps[i];
			if(phoneCallsMap[value.provider] === undefined && phoneCallsMap[value.date] != ''){
				phoneCallsMap[value.provider] = 0;
			}
			phoneCallsMap[value.provider] = phoneCallsMap[value.provider]+1;
		}
		console.log(listOfMaps);
        //console.log(phoneCallsMap);
		return phoneCallsMap;
	}

}