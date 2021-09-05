// Greatest common denominator using recursion


function greatCommonDen(x, y) {
    return y === 0 ? x : greatCommonDen(y, x%y)
  }
  
  console.log(greatCommonDen(12, 30))
  
  //What's going on, the mechanics. 
  
  //plug in x=12 and y=30. First round, y != 0 so we plug it into our weird function situation. greatCommonDen(30, 12%30(mod is 12 because 12 is less than 30 so basically it's the remainder))
  //next round we have switched them around, so now it is greatest CommonDev (12, 30%12(mod is 6))
  //next round (6, 12%6 ==0)
  //so finally our y === 0, meaning we return 6 which is our greatest common denominator. 
  //Leon just said to commit this to memory 