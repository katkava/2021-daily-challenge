//return array based on number passed into "n"
function first(arr, n) {
  // return arr;
if (n==0){
  return []
}else if (n>0){
  return arr.slice(0, n)
  }else{
    return arr.slice(0, 1)
  }
}