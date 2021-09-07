const squareCode = function(message) {
  // Put your solution here
  let matrix = [];
  let output = "";
  message=message.replaceAll(' ','');
  n=Math.ceil(Math.sqrt(message.length));
  // Assemble the matrix
  for (i = 0; i < n; i++){
    matrix[i] = [];
    for (let j = 0; j < n; j++){      
      matrix[i][j] = message[i * n + j];
    }
  }
  // Rotate and read out the matrix
  for (i = 0; i < n; i++){
    for (let j = 0; j < n; j++){      
      if (matrix[j][i] !== undefined){
        output += matrix[j][i];
      }
    }
    output += " ";
  }
  return output;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));