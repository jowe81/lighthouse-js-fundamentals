const loopyLighthouse = function(range,multiples,words){
  let t;
  for (let i = range[0]; i <= range[1]; i++){
    t = "";
    for (let j = 0; j < multiples.length; j++){
      if (i % multiples[j] === 0){
        t += words[j];
      }  
    }
    t ? console.log(t) : console.log(i);   
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);