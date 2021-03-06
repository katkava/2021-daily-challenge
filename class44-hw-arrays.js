//One:
//Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
//[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function multiplyValues(array) {
return array.reduce((a, b) => a*b, 1)
}  

//Two:
// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed 'age' of 0. Return a new array with [youngest age, oldest age, difference between the youngest and oldest age].

function familyIssues(family){
 let finalArray = []
 const minAge = [Math.min(...family)]
 const maxAge = [Math.max(...family)]
 const difMaxMin = maxAge-minAge
 return finalArray.concat(minAge, maxAge, difMaxMin)
}

// Three:
// Sum all the numbers of the array except the highest and the lowest element (the value, not the index!).
// Example:
// [ 6, 2, 1, 8, 10 ] => 16
// [ 1, 1, 11, 2, 3 ] => 6

function addRemoveFirstAndLast(array) {
let sortedArray = array.sort((a, b) => a-b).slice(1, -1)
return sortedArray.reduce((a, b) => a+b, 0)
}