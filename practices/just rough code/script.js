
//method to find position using indexof
let sentence = "javascript is awesome!";
let position = sentence.indexOf("is");
console.log(position); // got 11

//lets see what if substring is not found
const sentence1 = "javascript os awesome!";
const position1 = sentence.indexOf("fantastic");
console.log(position1);//we get -1

//this is how to start search from specfic sentence while using index.of
let sentence2 =  "JavaScript is awesome, and JavaScript is powerful!";
let position2 = sentence.indexOf("JavaScript", 10);
console.log(position2); 

const defaultValue = "Guest";
const userInput = prompt("Please enter your name:", defaultValue);