//Grasshopper - Grade Book 

function getGrade (s1, s2, s3) {
 let average = (s1+s2+s3)/3
 if (average <= 100 && average >= 90){
   return "A"
 }else if (average <= 90 && average >= 80){
   return "B"
 }else if(average <= 80 && average >= 70){
   return "C"
 }else if(average <= 70 && average >= 60){
   return "D"
 } else{
   return "F"
 }
}
