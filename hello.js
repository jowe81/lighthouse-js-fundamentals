const sayHello  = function (name) {
  console.log("Hello, " + name);
}

const people=["Caliban","Miranda","Ferdinand","Carolin","Rachel","Bob","Mark"];

for (person of people){
	sayHello(person);
}
