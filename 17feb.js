//1 Lost without a map
function maps(x){
 return  x.map(x => x*2)
}

//2 array plus array 
function arrayPlusArray(arr1, arr2) {
let firstArray = arr1.reduce((a, b) => a+b, 0)
let secondArray = arr2.reduce((a, b) => a+b, 0)
return firstArray+secondArray
}

//reduce but grow 
function grow(x){
return x.reduce((a,b) => a*b)
}

//transportation on vacation 
function rentalCarCost(d) {
//   let sum = 0
  if (d < 3){
    d = d*40
      }else if (d >= 3 && d < 7){
    d = d*40 -20 
      
    }else{
    d = d*40 -50
    }
  return d
}