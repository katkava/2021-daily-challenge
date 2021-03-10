//1 Basic Mathematical Operations

function basicOp(operation, value1, value2)
{
  if (operation === "+"){
    return value1 + value2
  }else if(operation === "-"){
    return value1 - value2
  }else if(operation === "*"){
    return value1*value2
  }else{
   return value1/value2
  }
}

//2 MakeUpperCase
function makeUpperCase(str) {
  return str.toUpperCase()
}

//3 Hello world 
// Write a function "greet" that returns "hello world!"
function greet(){
  return "hello world!"
}

//4 Grasshopper - Terminal game move function 
function move (position, roll) {
  return position+(roll*2)
}

//5 Abbreviate a Two Word Name 
function abbrevName(name){
let names = name.split(" ")
let firstName = names[0].split("")
let secondName = names[1].split("")
    return `${firstName[0].toUpperCase()}.${secondName[0].toUpperCase()}`

}

//6 Counting sheep 
function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
let result = arrayOfSheep.filter(sheep => sheep ===true);
  return result.length
}

//7 Is he gonna survive?
function hero(bullets, dragons){
if (bullets/2 >= dragons){
  return true
}else{
  return false
}
}

//8 Beginner Series #School Paperwork

function paperwork(n, m) {
  if( n < 0 || m < 0){
    return 0
  }else{
  return n*m
 }
}

//9 Reverse words 

function reverseWords(str){
 // reverse those words
 let splitting =  str.split(" ")
 let reversing = splitting.reverse()
let joining = reversing.join(" ")
return joining
}

//some comment added
