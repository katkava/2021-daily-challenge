//Grouped by commas. Separate the following numbers by the conventional use of "," to differentiate the numbers easier

function groupByCommas(n) {
    var s = n.toString(),
        r = [];
    
    // reverse number string so we can easily count up in blocks of 3
    s = reverse(s);
    
    for (var i = 0, l = s.length; i < l; i += 3) {
      r.push(s.substr(i, 3));
    }
    
    // combine the groups of 3 numbers into string, then reverse back to original order
    return reverse(r.join(','));
  }
  
  function reverse(s) {
    return s.split('').reverse().join('');
  }


  //Simpler solution with localeString 

  function groupByCommas(n) {
    return n.toLocaleString()
  }