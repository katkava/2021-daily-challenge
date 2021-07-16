// Count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}. 

//https://www.codewars.com/kata/52efefcbcdf57161d4000091 

function countCharInStr(str) {
    let charCount = {a:2, b:1}
    str.split("").forEach(c => charCount[c] ? charCount[c]++ : charCount[c]=1)

    return charCount
}

console.log(count('aba'), '{a: b, b:1}')