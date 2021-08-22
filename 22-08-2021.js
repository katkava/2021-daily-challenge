// 5 Given an array of numbers, return the majority element (eg. the number that appears the most!)


function majorityElement(nums) {
// 1st we need to store some values 
// want to add them to an object
// need a counte
// need a placeholder for the value itself

let objVal = {}
  let count = 0
  let maxEl = nums[0]
  //added all of our elements to object
  for(let i = 0; i < nums.length; i++){
    if(!objVal[nums[i]]){
      objVal[nums[i]] = 1
    }else{
      objVal[nums[i]]++
    }
  } 

  //careful, for IN iterates over the object properties, for OF iterates over the values. 
  for(let prop in objVal){
    if (objVal[prop]>count){
      count = objVal[prop]
      maxEl = prop
    }
  }
  return maxEl
}