//Reverse a string without using methods. 


function reverseStr(str) {
    let result = ""
    for(let char of str){
      result = char + result
    }
    return result 
  }
  
   console.log(reverseStr("dominos"))
  