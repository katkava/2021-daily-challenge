//Convert all elements in array to numbers and find sum 

function sumMix(x){
  return x.map(a => +a).reduce((a, b) => a + b);
}