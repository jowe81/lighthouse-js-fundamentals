const findLargestNumber = function(data){
  let largest = data[0];
  for (num of data){
    if (num > largest){
      largest = num;
    }
  }
  return largest;
}

const sumLargestNumbers = function(data) {
  // Put your solution here
  /*
    I will assume I am not allowed to sort the array with built-in functionality
  */
  let largest, secondLargest;
  //Find the largest number
  largest = findLargestNumber(data);
  //Get rid of the largest number from the input array
  data.splice(data.indexOf(largest),1)
  //Find the second largest by identifiying the largest of the remaining numbers
  secondLargest = findLargestNumber(data);
  return largest + secondLargest;
 };

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));