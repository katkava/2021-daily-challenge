// Algorithm, count number of vowels in a string 


//Using for of 
function numOfVowels(str) {
    let vowels = "aeiou"
     let counter = 0
      for(let char of str) 
      if(vowels.includes(char.toLowerCase()))
      counter++
      return counter
    }
    
    console.log(numOfVowels("I am A softWarE enginEEr"), 10)