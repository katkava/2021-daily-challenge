// check if the word is a palindrome 

function isPalindrome(x) {
  // your code here
  return x.split("").reverse().join("").toLowerCase() == x.toLowerCase()
}
