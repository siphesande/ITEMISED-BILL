var fs = require("fs");
module.exports = function(){
	this.find_cell_phone_bill = function(filepath){
		var fileContent  = fs.readFileSync(filepath, 'utf8');

		var rows = fileContent .split('\r');
		var listOfPhoneBills = [];
		var lineNumber = 0;

		rows.forEach(function(row) {

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
   this.ascendingDuration = function(listDurationSeconds){
 

   listDurationSeconds.sort(function(a,b){
   		//console.log(a.durationInSeconds -b.durationInSeconds);
   		{return(a.durationInSeconds - b.durationInSeconds)};
   	});
  // console.log(listDurationSeconds);
   
   return listDurationSeconds;
 }

this.phoneProvider = function(listDurationSeconds, serviceProvider1,serviceProvider2,serviceProvider3){
	var phoneCallList = [];
	var sub_total1 =0;
	var sub_total2 =0;
	var sub_total3 =0;
	var total = 0;
		for(var x in listDurationSeconds){
			if(listDurationSeconds[x].provider == serviceProvider1 && listDurationSeconds[x] !== undefined){
            seconds1 = parseInt(listDurationSeconds[x].durationInSeconds);
            sub_total1 += seconds1;
       }
   }

       for(var x in listDurationSeconds){
			if(listDurationSeconds[x].provider == serviceProvider2 && listDurationSeconds[x] !== undefined){
            seconds2 = parseInt(listDurationSeconds[x].durationInSeconds);
            sub_total2 += seconds2;
       }
   }
       for(var x in listDurationSeconds){
			if(listDurationSeconds[x].provider == serviceProvider3 && listDurationSeconds[x] !== undefined){
            seconds3 = parseInt(listDurationSeconds[x].durationInSeconds);
            sub_total3 += seconds3;
       }
     }

   for(var x in listDurationSeconds){
			if( listDurationSeconds[x] !== undefined){
            seconds = parseInt(listDurationSeconds[x].durationInSeconds);
            total += seconds;
       }
     }

           map1 = {
				provider :serviceProvider1,
                sub_total1: sub_total1
           }
            map2 = {
				provider :serviceProvider2,
                sub_total2: sub_total2
           }
			map3 = {
				provider :serviceProvider3,
                sub_total3: sub_total3
           }
   var totals = sub_total1+sub_total3+sub_total2;

          map = {
          	providers : serviceProvider1,serviceProvider2,serviceProvider3,
          	overRollTotal : totals
          }
   console.log(totals);

// map4 ={
// 	Providers = 

// 	}


           
 phoneCallList.push(map1,map2,map3,map);
 console.log(phoneCallList);
	return phoneCallList;	
  }

this.totalCallTime = function(listDurationSeconds) {
var totalTime =0;
  for (var x in listDurationSeconds){
    timeDuration = parseInt(listDurationSeconds[x].durationInSeconds);
    totalTime += timeDuration;
  }
  var total =  totalTime
  return total;
};


this.totalCallsPerNumber = function(providerMap) {
  var totalCallsMap = {};
  for (var x in providerMap){


    if(!totalCallsMap[providerMap[x].number]){
      totalCallsMap[providerMap[x].number] = 1;
    }
    else{
      totalCallsMap[providerMap[x].number] += 1;
    }

  }
  //console.log(totalCallsMap);
    return totalCallsMap;

 }

}