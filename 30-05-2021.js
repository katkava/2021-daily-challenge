//get the middle character 

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s)
{
  //Code goes here!
  if (s.length%2 ==0){
    return s.charAt(s.length/2-1)+s.charAt(s.length/2)
  }else{
  return s.charAt(s.length/2)
    }
}