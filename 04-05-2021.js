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

//3) Sort and merge 2 arrays and remove duplicates 
function mergeArrays(arr1, arr2) {
 let sorted = arr1.concat(arr2).sort((a, b) => a-b, 0)
 return [... new Set(sorted)]
}

//4) Sort arrays by alphabetical 
// input: names - unsorted array
// output: sorted array
sortme = function( names ){
  return names.sort()
}

//5 Input: Array of elements

// ["h","o","l","a"]
// Output: String with comma delimited elements of the array in th same order.
// "h,o,l,a"

function printArray(array){
  //show me the code!
  return array.join(",")
}