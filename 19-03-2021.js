//How many light sabers 

function howManyLightsabersDoYouOwn(name) {
  return name === 'Zach' ? 18 : 0;
}

//Twice as old 

function twiceAsOld(dadYearsOld, sonYearsOld) {
  // your code here 
 return Math.abs(dadYearsOld - 2 * sonYearsOld)
}

//return a string as an array 
function stringToArray(string){
  return string.split(' ');
}


//Super duper easy - return error if not number


function problem(x){
let maths = x*50 + 6
  if (x !== Number(x)){
    return "Error"
  }else{
    return maths
  }
 
}