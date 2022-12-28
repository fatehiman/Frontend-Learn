//simple variables
let simpleVar = 123;
console.log({ simpleVar }); //to see variable name in console add {}

//simple array
let arr = [1, 2, 3];
console.log(arr);

//hierarchical array
let extArr = [[11, 22, 33], 44, 55];
console.log(extArr);

//simple object NOTE: associative array is the old name for objects in JS
let simpleObj = { name: "Peter", family: "Norton" };
console.log(simpleObj);
console.log(simpleObj.name);

//hierarchical object
let extObj = {
  person1: { name: "Jeff", family: "Bezos" },
  person2: { name: "Garry", family: "Pitch" },
};
console.log(extObj);
console.log(extObj.person1.family);

//template string, must inside backtic
let strTemplate = `Mr. ${extObj.person1.name + " " + extObj.person1.family} is the owener of Amazon company.`;
console.log(strTemplate);
//strings can access like string arrays
console.log(strTemplate[0]);

//Booleans in JS: (truthy and falsy values) NOTE: use == instead of === to compare these values
let isTrue = true;
isTrue = 12; //a number except ZERO
isTrue = "abc"; //a string that is not empty
isTrue = []; //an empty or not-empty array !IMPORTANT
isTrue = {}; //an emprt or not-empty object !IMPORTANT

let isFalse = false;
isFalse = 0;
isFalse = "";
isFalse = null;
isFalse = undefined;
isFalse = NaN;

//boolean function will convert a value to boolean.
console.log(Boolean(NaN));

//NOTE: === will convert both sides to the same type, then compare. but
//       == will
console.log(NaN == false);

//SCOPES:
//blocking scope:
if (false) {
  let letInsideBlockingScode=111;
  var varInsideBlockingScode=222;
}
//console.log(letInsideBlockingScode);     //undefined
console.log(varInsideBlockingScode);     //will return 222


//function scope:
function append(a, b) {
  let letInsideFunctionScope=333;
  var varInsideFunctionScope=444;
  return a + b;
}
append(3, 4);
//console.log(letInsideFunctionScope);     //undefined
//console.log(varInsideFunctionScope);     //undefined

//let and var:
//let
