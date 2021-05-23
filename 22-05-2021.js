//reversing words in a string 

function reverse(string){
  return string.split(' ').reverse().join(' ');
}

// Shark pantoon 
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  if(dolphin){
    sharkSpeed /= 2;
  }
  return pontoonDistance/youSpeed < sharkDistance/sharkSpeed ? "Alive!" : "Shark Bait!";
}

//Number to String
//this code has a bug, fix it 
// var a = 123.toString()
var a = String(123);
//or
var a = 123;
a = a.toString();

//Join two strings without concat(), join() or +
function joinStrings(string1, string2){
   return `${string1} ${string2}`
}