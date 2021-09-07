const urlDecode = function(text) {
  // Put your solution here  
  let outputObject={};
  let remainingInput = text;
  let nextParamString, nextIndex;
  let key, value;
  while (remainingInput.length > 0){
    //Find next param string and trim remaining input
    nextIndex = remainingInput.indexOf('&');
    if (nextIndex > -1){
      nextParamString = remainingInput.substr(0,nextIndex);
      remainingInput=remainingInput.substr(nextIndex+1);
    } else {
      nextParamString = remainingInput;
      remainingInput="";
    }
    //Extract key and value
    key = nextParamString.substr(0,nextParamString.indexOf('='));
    value = nextParamString.substr(nextParamString.indexOf('=')+1).replace(/%20/g, " ");
    //Put new property in output object
    outputObject[key]=value;
  }
  return outputObject;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);

