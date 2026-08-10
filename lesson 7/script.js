// just function
function sayHello(){
    console.log("hello guys");
}
sayHello();



function greet(){
    console.log("welcome to javascript");
}
greet();


//using function and combining name and hello
function greeting(name){
    console.log( "hello" + name);
}
greeting("kushal");



function getHim(name){
    console.log("hello "+name);
}
getHim("kushal");
getHim("thapa");
//combining different varibales in same function
function introduce(name, age){
    console.log("my name is "+ name +"and i am " + age + "years old");
}
introduce("kushal",18);

function calculateTotal(price, quantity){
    let total = price * quantity;
    console.log("total is " + total  );
    
}
calculateTotal(978, 55);

//adding using function and also finding square
function sum(a, b){
    console.log(a + b);
}
sum(22, 33);


function addNumber(a ,b){
    return a + b;
}
 let result = addNumber(10 ,10);
 console.log(result);


 function square(num){
    return num * num;
 }
 let squares = square(67);
console.log(squares);
// combining function parameter and return and also using if/else 

function ageVerify(age) {
    if (age >= 18) {
        return "you can enter";
    } else {
        return "you can't enter";
    }
}

let age = ageVerify(19);

console.log(age);
  
