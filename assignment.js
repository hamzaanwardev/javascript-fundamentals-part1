var country = "Pakistan";
var continent = "Asia";
var population = 22;

console.log(country);
console.log(continent);
console.log(population);

console.log();
document.write("I am from " + country + "." + " Our continent is " + continent + "." + " " + country + " have " + population + " Crore" + " Population" + "." + "<br>");
document.write(`I am from ${country}. Our continent is ${continent}. ${country} have ${population} Crore Population.`);

// Code Challenge 2 (BMI) 

const hamzaMass = 92;
const hamzaHeight = 1.95;

const arifMass = 78;
const arifHeight = 1.69;

const arifBmi = arifMass / (arifHeight * arifHeight);
const hamzaBmi = hamzaMass / (hamzaHeight * hamzaHeight);

console.log(arifBmi);
console.log(hamzaBmi);
console.log(hamzaBmi < arifBmi);

if (hamzaBmi >= arifBmi) {
    console.log (`Hamza Has (${hamzaBmi}) higher BMI than Arif (${arifBmi}).`)
}else {
    console.log(`Arif has (${arifBmi}) higher BMI than Hamza (${hamzaBmi}).`);
}

// Code Challenge 3
const dolphins__score = 96 + 108 + 89;
const koalas__score = 88 + 91 + 110;

const average__dolphins__score = dolphins__score / 3;
const average__koalas__score = koalas__score / 3;

console.log(`Average Dolphins Score Is  (${average__dolphins__score}).`);
console.log(`Average Koalas Score Is  (${average__koalas__score}).`);
