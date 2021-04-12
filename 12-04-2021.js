
//convert seconds to hours and minutes
function toTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor(seconds % 3600 / 60);
  return `${hours} hour(s) and ${minutes} minute(s)`
}







