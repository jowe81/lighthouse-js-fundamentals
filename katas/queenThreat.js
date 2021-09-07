function generateBoard(whiteQueen, blackQueen){
  let board = [];
  let queens = [whiteQueen, blackQueen];
  for (let i=0; i<8; i++){
    board[i] = [];
    for (let j=0; j<8; j++){
      board[i][j] = 0;
      for (let k=0; k<2; k++){
        if (queens[k][0] === i && queens[k][1] === j){
          board[i][j] = 1;
        }
      }
    }
  }
  return board;
}

function queenThreat(board){
  let threat = false;
  let queens = [];
  //Re-extract the queen-positions from the board. Why did we need to generate the board in the first place?
  for (let i = 0; i < 8; i++){
    for (let j = 0; j < 8; j++){
      if (board[i][j] === 1){
        queens.push([i,j]);
      }
    }
  }
  if (queens[0][0] + queens[1][0] === queens[0][1] + queens[1][1] || Math.abs(queens[0][0] - queens[1][0]) === Math.abs(queens[0][1] - queens[1][1])){
    //Diagonal threat (sum or difference of coordinates are equal)
    threat = true;
  }
  if (queens[0][0] === queens[1][0] || queens[0][1] === queens[1][1]){
    //Vertical or horizontal threat (either coordinate matches)
    threat = true;
  }
  return threat;
}

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));