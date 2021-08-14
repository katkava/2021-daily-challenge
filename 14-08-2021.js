//Reverse an array 

function reverseArray(arr) {
    for(let i = 0; i < (arr.length -1)/2; i++){
      let firstEl = arr[i] //holding 1st element for now
      arr[i] = arr[arr.length-1 -i] //reassigning first value to be last value
      arr[arr.length-1 -i] = firstEl
  
    }
    return arr
  }
  
  console.log(reverseArray(["a", "b", "c", "d", "e", "f"]), ["f", "e", "d", "c", "b", "a"]) 
  
  console.log(reverseArray([ 1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]) 