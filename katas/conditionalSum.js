const conditionalSum = function(values, condition) {
  // Your code here
  let result = 0;
  for (val of values){
    if ((condition === "even" && val%2 === 0) || (condition === "odd" && val%2 !== 0)){
      result += val;
    }
  }
  return result;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));