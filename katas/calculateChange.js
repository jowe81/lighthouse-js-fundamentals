const calculateChange = function(total, cash) {
  // Your code here
  let bills=[
    { "name":"twentyDollar", "value":2000},
    { "name":"tenDollar", "value":1000},
    { "name":"fiveDollar", "value":500},
    { "name":"twoDollar", "value":200},
    { "name":"oneDollar", "value":100},
    { "name":"quarter", "value":25},
    { "name":"dime", "value":10},
    { "name":"nickel", "value":5},
    { "name":"penny", "value":1},
  ]

  let i=0;
  let remainingChange=cash - total;
  let result={};
  let currentBillCount=0;
  
  while (i < bills.length){
    currentBillCount=Math.floor(remainingChange / bills[i].value);
    if (currentBillCount>0) {
      result[bills[i].name]=currentBillCount;
    }
    remainingChange=remainingChange % bills[i].value;
    i++;
  }

  return result;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
