// 1) Alan Partrigde II - Apple Turnover
function apple(x){
  return Math.pow(x, 2) > 1000 ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.' ;
}

// 2) Template strings 
var TempleStrings = function(obj, feature) {
  return `${obj} are ${feature}`;
}