//1 convert a string to a number 
var stringToNumber = function(str){
  // put your code here
  return Number(str);
}

//2 Remove the time 
function shortenToDate(longDate) {
  // your code here
  return longDate.split(",").splice(0, 1).toString()
}