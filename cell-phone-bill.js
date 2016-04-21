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
		//console.log(listOfPhoneBills);
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
		//console.log(phoneCallsMap);
		return phoneCallsMap;
	}
  this.durationSeconds = function(listOfMaps){
    var listDurationSeconds =[];
    for(var i = 0; i < listOfMaps.length; i++){
		var value = listOfMaps[i];
			
        var callDuration = value.duration; 
			
            //console.log(callDuration);
        var replace_h = callDuration.replace(/h/g,":");
	    var replace_m = replace_h.replace(/m/g,":");
	    var replace_s = replace_m.replace(/s/g,"");
	
        var replace_s = replace_s.split(':');
        var seconds = (replace_s[0]) * 60 * 60 + (+replace_s[1]) * 60 + (+replace_s[2]);
       //console.log(replace_s);
        var map = {
        	provider:value.provider,
   		    durationInSeconds :seconds
        }

   listDurationSeconds.push(map);

    }

 //console.log(listDurationSeconds);
  return listDurationSeconds;
 }
   this.acsendingDuration = function(listDurationSeconds){
 

   listDurationSeconds.sort(function(a,b){
   		//console.log(a.durationInSeconds -b.durationInSeconds);
   		{return(a.durationInSeconds - b.durationInSeconds)};
   	});
   //console.log(listDurationSeconds);
   return listDurationSeconds;
 }


