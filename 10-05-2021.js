//Given a sequence of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

//Indices in sequence start from 0.
function evenLast(numbers) {

  if (numbers ===0) return 0;
  let sum = 0
  for(let i=0; i<numbers.length; i+=2){
 sum += numbers[i]
  }
  return sumnumbers[numbers.length-1]
}
