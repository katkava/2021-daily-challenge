//Your job is to figure out the index of which vowel is missing from a given string:

// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.

function absentVowel(x){
    let vowels = ["a", "e", "i", "o", "u"]
    let newVowels = [...new Set(x.split("").filter(el => vowels.includes(el)))]
     let notIncluded = vowels.filter(y => !newVowels.includes(y)).join("")
    return vowels.indexOf(notIncluded)
    }