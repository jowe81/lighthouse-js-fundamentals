const merge = function(a,b){
  let result = [];
  while (a.length > 0 || b.length > 0){
    if (a.length === 0){
      result.push(b.shift());
    } else if (b.length === 0){
      result.push(a.shift());
    } else if (a[0] < b[0]){
      result.push(a.shift());
    } else {
      result.push(b.shift());
    }   
  }
  return result;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);