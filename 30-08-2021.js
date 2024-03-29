// 7 Ransom note 

// Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.
const magazine =
 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

 //brute force with methods 

// function ransomNote(note, magazine) {
//   return note.split(" ").filter(x => magazine.indexOf(x) > -1).length == note.split(" ").length
//   }


//no methods answer 

function ransomNote(note, magazine) {
  const magazineWords = magazine.split(" ")
  const magazineHash = {} 

magazineWords.forEach(word => {
    if(!magazineHash[word]) magazineHash[word] = 0;
    magazineHash[word]++
  })
  const noteWords = note.split(" ")
  let possible = true;

  noteWords.forEach(word => {
    if(magazineHash[word]) { 
      magazineHash[word]--;
      if(magazineHash[word] < 0) possible = false;
  } else possible = false 
  })
  return possible 
}


console.log(ransomNote("sit ad est sint", magazine))
console.log(ransomNote("sit ad est love", magazine))