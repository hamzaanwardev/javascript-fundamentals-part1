var country = "Pakistan";
var continent = "Asia";
var population = 22;

console.log(country);
console.log(continent);
console.log(population);

console.log();
document.write("I am from " + country + "." + " Our continent is " + continent + "." + " " + country + " have " + population + " Crore" + " Population" + "." + "<br>");
document.write(`I am from ${country}. Our continent is ${continent}. ${country} have ${population} Crore Population.`);

// BMI 

const hamzaMass = 92;
const hamzaHeight = 1.95;

const arifMass = 78;
const arifHeight = 1.69;

const arifBmi = arifMass / (arifHeight * arifHeight);
const hamzaBmi = hamzaMass / (hamzaHeight * hamzaHeight);

console.log(arifBmi);
console.log(hamzaBmi);
console.log(hamzaBmi < arifBmi);


