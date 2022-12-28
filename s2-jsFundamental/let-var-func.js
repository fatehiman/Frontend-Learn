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
if (true) {
  let letInsideBlockingScope=111;
  var varInsideBlockingScope=222;
  const constInsideBlockingScope=333;
}
//console.log(letInsideBlockingScode);     //will raise undefined error and stop
//console.log(constInsideBlockingScope);   //will raise undefined error and stop
console.log(varInsideBlockingScope);       //will return 222 (or if the IF-BLOCK not run, will return undefined but no error)
//یک نکته خیلی جالب در فسمت بالا هست و اون اینکه اگر داخل بلاک شرط نشه
//متغیری که با ور تعریف شده خطا نمیده و فقط مقدارش آندیفایند میشه
//ولی در مورد لت، اگر از روی کدی که توش لت داره رد نشه خطای آندیفایند میده
//و نرم افزار روی خطا متوقف میشه
//که این بخاطر هویستینگه ور هست. و جالب اینه که تعریفش هویستینگ میشه ولی
//مقداردهی اولیه فقط وقتی به سطرش میرسه انجام میشه

//function scope:
function append(a, b) {
  let letInsideFunctionScope=333;
  var varInsideFunctionScope=444;
  const constInsideFunctionScope=555;
  return a + b;
}
append(3, 4);
//console.log(letInsideFunctionScope);     //will raise undefined error and stop
//console.log(constInsideFunctionScope);   //will raise undefined error and stop
//console.log(varInsideFunctionScope);     //will raise undefined error and stop

//let and var:
//console.log(x);   //will raise undefined error and stop
let x=1;
console.log(y);     //will return undefined but no error
var y=1;
