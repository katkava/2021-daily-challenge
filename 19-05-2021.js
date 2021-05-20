// Find the sheep in wolf's clothing
function warnTheSheep(queue) {
queue = queue.reverse()
let wolf = queue.indexOf("wolf") 
return wolf == 0 ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${wolf}! You are about to be eaten by a wolf!`
}