// find the margin 

function closeCompare(a, b, margin){
  if(a == b || Math.abs(a - b) <= margin){
    return 0
  }
  return a > b ? 1 : -1;
}

//2 debug health 
function checkAlive(health) {
  return health > 0;
}

//3 find subsequent traffic light 

function updateLight(current) {
  
  return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';

}

//4 Return array of numbers and exponents until that num 
// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n (inclusive).

function powersOfTwo(n){
  let array = [] 
  for(let i = 0; i <= n; i++){
   array.push(Math.pow(2, i))
}
  return array
  }

  //find distance between 2 points (geometry)

  function distanceBetweenPoints(a, b) {
  
  return Math.hypot(a.x-b.x, a.y-b.y)
}