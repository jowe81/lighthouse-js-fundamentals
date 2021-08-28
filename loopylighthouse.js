let t;

for (let i=100;i<=200;i++){
  t="";
  if (i%3===0){
    t="Loopy";
  }
  if (i%4===0){
    t+="Lighthouse";
  }
  if (t){
    console.log(t);
  } else {
    console.log(i);
  }
}