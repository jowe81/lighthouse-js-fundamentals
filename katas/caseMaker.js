const camelCase = function(input) {
  // Your code here
  let words = input.split(' ');
  //Capitalize all but the first word
  for (let i = 0; i < words.length; i++){
    if (i > 0){
      words[i]=words[i][0].toUpperCase() + words[i].slice(1);
    } else {
      words[i]=words[i].toLowerCase();
    }
  }
  return words.join('');
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
