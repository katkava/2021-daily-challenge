//Return area or perimeter based on parameters

const areaOrPerimeter = function(l , w) {
 //if square return area, if rectangle return perimeter
  if (l===w){
    return l*w
  }else{
    return l*2 + w*2
  }
}; 