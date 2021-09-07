const numberOfVowels = function(data) {
  // Put your solution here
  let result = 0;
  let vowels = ["a","e","i","o","u"];
  for (char of data){
    if (vowels.includes(char)){
      result++;
    }
    /*

    //In case I'm not allowed to use Array.includes, consider the below solution instead:

    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
      result++;
    }
    
    */
  }
  return result;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));