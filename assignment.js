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

if (average__dolphins__score > average__koalas__score) {
    console.log ("Team Dolphin is the Winner");
}else if (average__dolphins__score < average__koalas__score) {
    console.log ("Team Koalas is the winner");
}else if(average__dolphins__score === average__koalas__score){
    console.log("Both Teams got equal Score. And Both Are The winner.");
}

// Bonus 1
const bdolphins__score = 97 + 112 + 110;
const bkoalas__score = 109 + 95 + 106;

const baverage__dolphins__score = bdolphins__score / 3;
const baverage__koalas__score = bkoalas__score / 3;

console.log(`Average Dolphins Score Is  (${baverage__dolphins__score}).`);
console.log(`Average Koalas Score Is  (${baverage__koalas__score}).`);

if (baverage__dolphins__score > baverage__koalas__score && baverage__dolphins__score >= 100) {
    console.log ("Team Dolphin is the Winner");
}else if (baverage__dolphins__score < baverage__koalas__score && baverage__dolphins__score >= 100) {
    console.log ("Team Koalas is the winner");
}else if(baverage__dolphins__score === baverage__koalas__score && baverage__dolphins__score >= 100 && baverage__koalas__score >= 100){
    console.log("Both Teams got equal Score. And Both Are The winner.");
} else {
    console.log ("No One is the Winner");
}
