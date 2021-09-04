//Fibonacci with recursion. 

function fib(n){
    //need a base case which will eventually stop the recursive function call. 
  if(n <2){
    return n
  }return fib(n-1) + fib(n-2)
  }
  //the stuff that's going on behind is like a tree, it keeps going and going until it reaches the base case for each return and it essentially adds up all the numbers when going back up the tree 
  console.log(fib(8))