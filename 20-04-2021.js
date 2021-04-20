//Find numbers which are divisible by given number


function divisibleBy(numbers, divisor){
  let numDivisible =[]
for(let i=0; i<numbers.length; i++){
  if(numbers[i]%divisor==0){
    numDivisible.push(numbers[i])
    } 
}
  return numDivisible
}