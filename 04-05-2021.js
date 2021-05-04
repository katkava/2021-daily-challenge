//1) Sum mixed array 
//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

function sumMix(x){
 return x.map(item => parseInt(item)).reduce((a,b) => a+b, 0)
}

//2) Filter out the geese 
// return an array containing all of the strings in the input array except those that match strings in geese
function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return gooseFilter.pop(geese); 
};

//3) 