const finalPosition = function (moves) {
  const position = [0,0];
  
  for (let x of moves) {
    
    if ( x === "east") {
      position[0] += 1;
    }
    else if ( x === "west") {
      position[0] += -1;
    }
    else if ( x === "north") {
      position[1] += 1;
    }
    else if ( x === "south") {
      position[1] += -1;
    }
  }
  return position;
}
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  
console.log(finalPosition(moves));