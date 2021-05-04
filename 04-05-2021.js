// Sum mixed array 
//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

function sumMix(x){
 return x.map(item => parseInt(item)).reduce((a,b) => a+b, 0)
}