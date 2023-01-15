////////////////////////////////////////////////
//in object by this definition:
const user1 = {
  name: "Rose",
  family: "Rillay",
  action(arg1, arg2) {
    console.log("This is a method and the parameter is " + arg1);
    console.log("And this is refer to the object and is " + this.name); //referes to Rose
    console.log(".");
  },
};
user1.action("par1", "par2");

////////////////////////////////////////////////
//in object by this definition is the same:
const user2 = {
  name: "Rose",
  family: "Rillay",
  action: function (arg1, arg2) {
    console.log("This is a method and the parameter is " + arg1);
    console.log("And this is refer to the object and is " + this.name); //referes to Rose
    console.log(".");
  },
};
user2.action("par1", "par2");

////////////////////////////////////////////////
//in object by this definition is the same:
function definedFunc(arg1, arg2) {
  console.log("This is a method and the parameter is " + arg1);
  console.log("And this is refer to the object and is " + this.name); //referes to Rose
  console.log(".");
}
const user3 = {
  name: "Rose",
  family: "Rillay",
  action: definedFunc,
};
user3.action("par1", "par2");

////////////////////////////////////////////////
//BUT if we use that function directly, the THIS points to the WINDOW
function definedFuncNormal(arg1, arg2) {
  console.log("This is a method and the parameter is " + arg1);
  console.log("And this is refer to the object and is " + this); //referes to Rose
  console.log(".");
}
definedFuncNormal("par1", "par2");

////////////////////////////////////////////////
//same in arrow function:
const definedFuncArrow = (arg1, arg2) => {
  console.log("This is a method and the parameter is " + arg1);
  console.log("And this is refer to the object and is " + this); //referes to Rose
  console.log(".");
};
definedFuncArrow("par1", "par2");

////////////////////////////////////////////////
//BUT different in object if we use arrowFunction instead of normalFunction:
const definedFuncArr = (arg1, arg2) => {
  console.log("This is a method and the parameter is " + arg1);
  console.log("And this is refer to the object and is " + this); //referes to WINDOW!!!!!!!!!
  console.log(".");
};
const user4 = {
  name: "Rose",
  family: "Rillay",
  action: definedFuncArr,
};
user4.action("par1", "par2");

