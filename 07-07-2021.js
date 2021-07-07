
//Complete the square sum function so that it squares each number passed into it and then sums the results together.

//For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.


function squareSum(numbers){
    //1st square the numbers in the array
     //next I will return the output 
   //  let sum = numbers.reduce((acc, c) => sum and squared number, 0)
   //  return sum
    return numbers.reduce((sum, num) => sum + (num*num), 0)
     }
   