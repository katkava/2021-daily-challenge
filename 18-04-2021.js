
//Do you speak "English"? 

function spEng(sentence){
 sentence = sentence.toLowerCase() 
   return sentence.includes("english")
}

//Find average of array 
function find_average(array) {
  var sum = array.reduce((a, b) => a + b, 0);
  return sum/array.length;
}