//Daily challenges 

// 1 - Multiply

function multiply(a, b){
  let product = a * b
  return product
}

// 2 - Even or add
function even_or_odd(number) {
  if (number%2===0){
    return "Even"
}else{

return "Odd"}
  // ...
}

//3 Convert a boolean to a string 

function booleanToString(b){
 
  return b.toString()
}

//4 Sum of positive 
function positiveSum(arr) {
 
  let sum = arr.reduce(((a, b) => b > 0 ? b + a : a), 0);
 
  return sum

}

//5 remove string spaces 

function noSpace(x){
  return x.split(' ').join('')
  }

 // 6 reversed strings 

 function solution(str){
  let splitStr = str.split("")
  let reverseStr = splitStr.reverse()
  let joinStr = reverseStr.join("")
  return joinStr
}

//7 Opposite number

function opposite(number) {
  return -number
}

//8 Counting sheep...
function countSheeps(arrayOfSheep){
  let num = 0 
  for (let i = 0; i < arrayOfSheep.length; i++){
    if(arrayOfSheep[i] == true)
      num++ }
    return num 
    }

// 9 Remove First and Last Character

function removeChar(str){
  return str.slice(1, str.length-1)
 //You got this!

};

//10 Get the mean of an array

function getAverage(marks){
  //TODO : calculate the downwar rounded average of the marks array
   let mean = marks.reduce((a, c) => a + c, 0)/marks.length 
   return Math.floor(mean)
}

// 11 Basic traingin: add item to an array 

websites.push("codewars")

// 12 FIXME: Replace all dots
var replaceDots = function(str) {
  return str.replace(/\./g, '-');
}

// 13 String repeat 

function repeatStr (n, s) {
  return s.repeat(n);
}

//14 convert a number to a string

function numberToString(num) {
  // Return a string of the number here!
  return num.toString()
}

//15 return negative 
function makeNegative(num) {
  return -Math.abs(num)
  }

  //16  convert boolean values to strings "yes" or 'no"

  function boolToWord( bool ){
 if (bool == true) {
return "Yes"
 }else{
return "No"
 }
}

// 17 find the smallest integer in the array
class SmallestIntegerFinder {
  findSmallestInt(args) {
     return Math.min(...args)
  }
}

//18 square(n) sum 
function squareSum(numbers){
 //1st square the numbers in the array
  //next I will return the output 
//  let sum = numbers.reduce((acc, c) => Math.sqrt(acc), 0)
//  return sum
 return numbers.reduce((sum, num) => sum + (num*num), 0)
  }

 // 19 needle in a haystack 
 function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf("needle")}`
}

// 20 convert a number to reverse array of digits

function digitize(n) {
  let arr =  n.toString()
  let splitFirst = arr.split("")
  let reverseArr = splitFirst.reverse()
  let arrayOfNums = reverseArr.map(Number)
  return arrayOfNums
   
}

//21 abbreviate a two word name
function abbrevName(name){
  let initials = name.split(" ")
  
  let firstName = initials[0].split("")
  let secondName = initials[1].split("")
  return `${firstName[0].toUpperCase()}.${secondName[0].toUpperCase()}`

}

