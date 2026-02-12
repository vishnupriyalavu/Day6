//1. Execution Context
var a = 10;

function square(num) {
  var result = num * num;
  return result;
}

var square2 = square(a);
// Execution Context & Call Stack
var x = 10;

function foo() {
    var y = 20;
    bar();
}

function bar() {
    var z = 30;
    console.log(x, z);
}

foo();
// Hoisting
console.log(foo); 
hoistedFunction(); 
var foo = 10; 
function hoistedFunction() { console.log("Function hoisted"); }

// Scope & Lexical Environment
function outerFunction() { let outerVar = "outside"; function innerFunction() { console.log(outerVar); } innerFunction(); }
outerFunction();

/*
Lexical Environment = local memory + reference to parent env
*/

function outer() {
  var outerVar = 100;

  function inner() {
    console.log(outerVar);
  }

  inner();
}

outer();
// Block Scope & Shadowing
var z = 100; 
{ let z = 50; console.log(z); } 
console.log(z);

// var / let / const
const PI = 3.14; 

// Higher Order Functions
const nums = [1,2,3,4];
const doubled = nums.map(n => n*2); 
const even = nums.filter(n => n%2===0); 
const sum = nums.reduce((a,c)=>a+c,0);
console.log(doubled, even, sum);

// setTimeout Example
setTimeout(()=>{console.log("Hello after 3s");},3000);