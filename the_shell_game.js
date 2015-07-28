find_the_ball=function(start,swaps){
  //assign location
  //if location equals number x, location will equal y
  //if location equals number y, location will equal x
  location = start;
  //loop through swap list
  for (var i=0; i<swaps.length; i++){
    if (location === swaps[i][0]){
      location = swaps[i][1];
      } else if (location === swaps[i][1]){
      location = swaps[i][0];
    }
  }
  return location;
};