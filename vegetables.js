const judgeVegetable = function (vegetables, metric) {
  // Your code in here ...
  let winningVeggie = vegetables[0];
  for (let vegetable of vegetables){
    if (vegetable[metric] > winningVeggie[metric]){
      winningVeggie = vegetable;
    }
  }
  return winningVeggie.submitter;
}

vegetables = [
  {
    submitter: 'A',
    d: 5,
  },
  {
    submitter: 'B',
    d: 10,
  },
  {
    submitter: 'C',
    d: 25,
  }
];
metric = 'd';
result = judgeVegetable(vegetables, metric);

console.log(judgeVegetable(vegetables, metric));