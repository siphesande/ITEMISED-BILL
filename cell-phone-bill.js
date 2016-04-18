var fs = require("fs");
module.exports = function(){
	this.find_cell_phone_bill = function(filepath){
		var fileContent  = fs.readFileSync(filepath, 'utf8');

		var rows = fileContent .split('\r');
		var listOfPhoneBills = [];
		var lineNumber = 0;

		rows.forEach(function(row) {

			var phone = row.split(',').slice(1);

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
    this.specifiedProvider = function(listOfMaps,provider){
    	listOfVodacom=[];
    	listOfMaps.forEach(function(map){
    		if(map.provider = provider){
               listOfVodacom.push(map); 
    		}
    		listOfVodacom.push(map);
    	});
    	  

    	 
    	 //console.log(listOfVodacom);
    	 return listOfVodacom;
    }
 }