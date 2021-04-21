// 1) Alan Partrigde II - Apple Turnover
function apple(x){
  return Math.pow(x, 2) > 1000 ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.' ;
}

// 2) Template strings 
var TempleStrings = function(obj, feature) {
  return `${obj} are ${feature}`;
}

//3 Sort and star! Sort by alphabet, return 1 element with *** between each letter 
function twoSort(s) {
let sorting = s.sort()
return sorting[0].split("").join("***")
}

//4 Check if the array contains this element 
function check(a, x) {
 return a.includes(x)
}

//5 DNA to RNA Conversion 
function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
return dna.replace(/T/g, "U")
}