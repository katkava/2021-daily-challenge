// 1) Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

//In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

//Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
//If a and b have the same length treat a as the longer producing b+reverse(a)+b

function shorter_reverse_longer(a,b){
 if (a.length > b.length || a.length === b.length) {
  return b+a.split("").reverse().join("")+b
   }else{
     return a+b.split("").reverse().join("")+a
   }
}

// 2) Small enough? 
//You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

function smallEnough(a, limit){
 return  a.every(el => el<limit || el===limit)
}


//3 Check how many developer are in Europe and use JavaScript 
function countDevelopers(list) {
  // your awesome code here :) 
let howMany = list.filter(place => place.continent == "Europe" && place.language == "JavaScript")
return howMany.length
}