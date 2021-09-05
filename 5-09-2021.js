//FACTORIAL USING RECURSION! 
//Example:  5! => 5*4*3*2*1 = 120 where 0! = 1

function fac(n) {
    //base case 
    if(n<2){
      return 1
    }
    return n * fac(n-1)
  }
  
  //How does this work. 
  //Let's say n = 5. we plug 5 into our function, it's not less than 2, so we do the n * fac(n-1) which will be 5 * fac(4). But we don't know what fac(4) equals to, so we need to find it. So we plug 4 into our fac function. Again it's not less than 2, so we do 4 * fac(3). But oh man, we don't know the fac(3). So we keep replugging this into our function until we reach our base case and realise that fac(1) = 1. While the computer executes this, it pauses all the other calculations until it reaches the base case (in our case this is fac(1))
  //Finally the computer works it's way back up  the tree.
  //So now we have all of these equations it didn't execute whilst it was trying to figure out the base case
  //fac(5) = 5 * fac(4) => 5 * 24 = 120
  //fac(4) = 4 * fac(3) => 4 * 6 = 24
  //fac(3) = 3 * fac(2) => 3 * 2 = 6
  //fac(2) = 2 * fac(1) => 2 * 1 = 2;  fac(2) = 2
  //fac(1) = 1 
  //the above are the equations that the computer was trying to figure out, but it will work its way from the bottom back upwards 
  console.log(fac(5), 120)