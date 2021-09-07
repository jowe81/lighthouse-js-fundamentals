const urlEncode = function(text) {
  // Put your solution here
  let output="";
  for (char of text){
    char === " " ? output += "%20" : output += char;
  }
  return output;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));