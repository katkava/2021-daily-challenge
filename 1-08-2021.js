//Given an array of integers, find the one that appears an odd number of times.

//There will always be only one integer that appears an odd number of times.


function findOdd(A) {
    for(let i = 0; i < A.length; i++){
      let counter = 0
      for(let j = 0; j < A.length; j++){
        if(A[i] === A[j])
          counter++
        } if(counter%2!=0)
          return A[i]
        
    }
  }