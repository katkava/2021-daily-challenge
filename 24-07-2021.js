//Sort by last char. Given a string of words, organise them so that they are sorted alphabetically by their last letter. If words with same letters appear, sort them by the order they first appear in the original string. 

function last(x){
    return x.split(" ").sort((a,b) => a[a.length -1] > b[b.length -1])   
   
 }