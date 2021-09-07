function turnRight(heading){
  heading === 270 ? heading = 0 : heading += 90;
  return heading;
}

function turnLeft(heading){
  heading === 0 ? heading = 270 : heading -= 90;
  return heading;
}

const blocksAway = function(directions) {
  // Put your solution here
  let east = 0;
  let north = 0;
  let heading = 0; //North: From the illustrated example I'll assume that we are starting headed north.
  for (let i = 0; i < directions.length; i = i + 2){
    //Turn
    if (directions[i] === "right"){
      heading = turnRight(heading);
    } else if (directions[i] === "left"){
      heading = turnLeft(heading);
    }
    //Drive
    if (heading === 0){
      north = north + directions[i + 1];
    } else if (heading === 90){
      east += directions[i + 1];
    } else if (heading === 270){
      east -= directions[i + 1];
    } else if (heading === 180){
      north -= directions[i + 1];
    }
  }
  return { "east" : east, "north" : north };
};

//This is the only example in which the cab stays on the grid the entire trip
console.log(blocksAway(["right", 2, "left", 3, "left", 1]));

/*
  Manual verification shows that expected output for this next example is given incorrectly
  on the website - we're driving (and staying) off the grid, ending up at east: -3, north: 3
*/
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));

// Here we're also driving off the grid, but ending up at the starting point (on the grid)
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));