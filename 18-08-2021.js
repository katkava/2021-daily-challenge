// Reverse the letters in each word 


function reverseWords(str){
    let wordsArr = str.split(" ")
    let reversedArr = []
  
    
    wordsArr.forEach(word => {
      let reverseWord = "" //We want the variable to be empty each time we run the for. Otherwise, if we make reverseWord a global variable it will concatenate and keep adding like this "I Ievol Ievol!tpircSavaJ" because we are not clearing the reverseWord variable and just pushing more and more with each time. 
      for(let i = word.length-1; i >= 0; i--){
     reverseWord+=word[i]
      }
    reversedArr.push(reverseWord)
    })
   return reversedArr.join(" ")
  
   //WHy do we need an array? Because otherwise we will loop through all the words and add them to a string but our string won't have any spaces and won't know where a word begins and ends. So we want to push the new reverse string each time so they remain separate words. 
  }
  console.log(reverseWords("I love JavaScript!"), "I evol !tpircSavaJ")