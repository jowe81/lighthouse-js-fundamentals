const finalPosition = function (moves) {
  // Your code in here ...
  let x = 0, y = 0;
  for (const move of moves){
    switch (move){
    case "east":
      x++;
      break;
    case "south":
      y--;
      break;
    case "west":
      x--;
      break;
    case "north":
      y++;
    }
  }
  return [x,y];
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

console.log(finalPosition(moves));

