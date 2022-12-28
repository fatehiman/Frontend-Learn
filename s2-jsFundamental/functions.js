//function declaration / function expression

//methood 1:
function addNumsA(a, b) {
  return a + b;
}
console.log(addNumsA(4, 3));

//method 2:
const addNumsB = function (a, b) {
  return a + b;
};
console.log(addNumsB(11, 22));

//method 3:
const addNumsC = (a, b) => {
  return a + b;
};
console.log(addNumsC(7, 8));

// //method 4:
// const addNumsD = (a, b)=> {
//   return a + b;
// };
// console.log(addNumsD(7, 8));

//rest parameter   (see https://dev.to/sagar/three-dots---in-javascript-26ci for rest parameters and spread operators)
const addNumsE = (a, b, ...otherArgs) => {
  console.log("TypeOf otherArgs is: " + typeof otherArgs); //typeof(otherArgs)=object
  console.log(otherArgs);
  return "a=" + a + " b=" + b + " otherArgs=" + otherArgs; //we can use otherArgs[0] otherArgs[1] etc.
};
console.log(addNumsE(2, 3, 4, 5, 6));

//spread operators
