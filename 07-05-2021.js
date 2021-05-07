// Create a multiplication table for every number passed in from 1-10. 
function multiTable(number) {
  let outcome = ""
  for(let i=1; i<11; i++){
  outcome += `${i} * ${number} = ${i*number}\n`
  }
  return outcome.slice(0, -1)
}