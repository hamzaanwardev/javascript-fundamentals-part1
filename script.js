let js = 'hamza';
// if (js === 'hamza') { alert ("True");}

// 10 + 30 + 71 - 23;
console.log(10+30+71-23);

// Declaring a variable
let firstName = 'hamza';
console.log(firstName);

// Conventions for variable name
// let new = "saad";   //we can not use word new as variable name because this word is specified in JavaScript.
// let function = 'jamal'; //we can not use word function as variable name because this word is specified in JavaScript.
// let 3years = '2015' + '2016' + '2017';  //we can not use number as first letter in variable name.

// We can use $, _, camelcase, number after any alphabet as variable name. 


// Always use relevent variable names with respect to its value. so everyone can understand easily
// Here we can understand my FirstJob and myCurrentJob.
let myFirstJob = 'Mercahnt Navy Oficer';
let myCurrentJob = 'Programmer';

// Not Relevant because we don't know what is job1 and job2.
let job1 = "Mercant Navy Officer";
let job2 = "Programmer";

// JavaScript VAriables
// three types of variables 1. let  2. var  3. Const. MOstly used let and const because var is too old.
firstName = "Muhammad";
console.log(firstName);


// Basic operators
// Arthematic Operators (+, -, *, /)
// comparison Operators (===, !==, ==, !=, <, >, <=, >=, )
// Assignment Operators (=, +=, -=, *=, \=)
// logical operators(&&, ||, !!)

const birthday = "1998 was my birth year.";
const birthYear = parseInt(birthday);;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(`I was born in ${century} century`);

// Type Conversion and Type Coercion
// Type Conversion Means when we convert data type from one type to another typeof. And type coercion means that when javascript automatically converts one data type to another.
// we can covert a string into a number by using a Number() function 
// we can convert a number into string by using string() function or method
// Type Conversion
const myBirthYear = "1998";
console.log(Number(myBirthYear) + 24);
console.log ('20'+10+'30');

console.log(20+10+30);
console.log(String(20)+10+30); //this is the type Coercion because javascript automatically last two numbers to string.

// 5 falsy values in JavaScript 0, '', undefined, Null, NaN
// we can not convert Falsy values to boolean.
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean('hamza'));
console.log(Boolean({}));

// Using A falsy value in example
const money = 0;
if (money) {
    console.log("Don't Spend it all");
}else {
    console.log('You should get a job!');
}

// Truthy Values And Falsy Values
// Falsy VAlues are 0, Null, Undefined
