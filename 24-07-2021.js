//Sort by last char. Given a string of words, organise them so that they are sorted alphabetically by their last letter. If words with same letters appear, sort them by the order they first appear in the original string. 


//solution one using greater than to manipulate the logic behind sort. 
function last(x){0
    return x.split(" ").sort((a,b) => a[a.length -1] > b[b.length -1])   
   
 }

 //solution two with charCodeAt  

 function last(x){
    return x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
  }