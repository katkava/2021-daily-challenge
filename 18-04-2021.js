
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


//Keep up the hoop 
function hoopCount (n) {
  return (n < 10) ? 'Keep at it until you get it' : 'Great, now move on to tricks';
}