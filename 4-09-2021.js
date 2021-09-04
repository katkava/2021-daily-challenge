//FIBONACCI WITH SIMPLE FOR LOOP. 

// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

// Example 1:

// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:

// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:

// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.





function fibonacci(n) {
    //1st we create an array, we want to start our sequence with the 1st two numbers of the fibonacci. 
    let arr = [0, 1]
  
    //next we create a for loop that goes up until the number n, with each loop, we add a new number to our sequence. Start our loop at index 2, because we already have the 1st two elements of our sequence. 
  
    for(let i=2; i <= n; i++){
      arr[i] = arr[i-1] + arr[i-2]
    }
  
    // return the element at the 8th position in the sequence
      return arr[n]
  }
  
  console.log(fibonacci(8))