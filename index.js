// Code your solution in this file!
function distanceFromHqInBlocks(location){
 if (location > 42) { return location - 42
 }
 else {
   return 42 - location
 }
}

function distanceFromHqInFeet(location){
  return (distanceFromHqInBlocks(location)) * 264
}

function distanceTravelledInFeet(start, destination){
  if (start > destination) {
  return  (start - destination) * 264
  }
  else {
  return (destination - start) * 264
  }
}

function calculatesFarePrice(start, destination){
  if (distanceTravelledInFeet(start, destination) >= 2500) {
    return 'cannot travel that far'
  }
  else if (distanceTravelledInFeet(start, destination)) >= 2000 {
    return (distanceTravelledInFeet(start, destination)) * .02
  }
}
