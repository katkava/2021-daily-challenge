//Array combinations 

function solve(arr) {
    return  arr.map(x => [...new Set(x)].length).reduce((a, c) => a*c)
  }; 

