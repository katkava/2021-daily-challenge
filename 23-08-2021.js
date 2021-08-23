// account for uppercase Letters, .toLowerCase()
// for of. If the property does equal character , then I will add to the object as property and assign value of 1. 
// if it exists, increment the value by 1 

// 2nd loop will check the object, and find which character countains the highest value.

// the object literal {}
// count = 0 
// maxEl = str[0]

function maxChar(str){
const maxObj = {}

str = str.toLowerCase()

for(let i in str){
  if(!maxObj[str[i]]){
    maxObj[str[i]] = 1
  }else{
    maxObj[str[i]]++
  }
  }

 let count = 0
 let maxEl = null

  for(let i in maxObj){
    if(maxObj[i]> count){
      count = maxObj[i]
      maxEl = i
    }
  }
  return maxEl 
  
}