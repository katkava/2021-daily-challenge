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

//find subsequent traffic light 

function updateLight(current) {
  
  return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';

}