//Remove the spaces from the string and return it using filter . 

function removeSpace(str) {
return [...str].filter(x => x !== " ").join("")
}