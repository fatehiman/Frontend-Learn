const myData = {
  name: "Bill",
  family: "Gates",
};

console.log("Name is " + myData.name + " family is " + myData.family);

const myData2 = {
  name: "William",
  doAction: () => {
    //definition model 1
    console.log("Action is triggered.");
  },
  doAction2() {
    //definition model 2
    console.log("Action2 is triggered.");
  },
  doAction3: function () {
    //definition model 3
    console.log("Action3 is triggered.");
  },
};

myData2.doAction();
myData2.doAction2();
myData2.doAction3();

///////////////////////////////////////////////////////
//some useful functions for objects:
const myData3 = {
  name: "Jim",
  family: "Carry",
  tel: "+123456789",
};

console.log(Object.values(myData3)); //returns an array contains the values only
console.log(Object.keys(myData3)); //returns an array contains the keys only
console.log(Object.entries(myData3)); //returns an array contains the keys and values

console.log("family" in myData3); // in is an operator that return TRUE if the KEY found in the object

for (let key in myData3) {
  console.log(key + "=" + myData3[key]);
}

///////////////////////////////////////////////////////
//some notes:
//اگر یک آبجکت یا آرایه را معمولی مساوی کنیم فقط اشاره گر مساوی می شود
//و آرایه کپی نمیشود:
const a = {
  name: "Al",
  family: "Pachino",
  acc: {
    bank: "NAB",
    accNo: "5345345",
  },
};

let b = a;
b.tel = "+123456789";
console.log("Normal = :");
console.log(a);
console.log(b);

//اگر بخواهیم فقط لایه اول از آبجکت یا آرایه کپی شود باید اینکار را بکنیم:
//shallow copy:
let c = Object.assign({}, a);
c.email = "abc@def.net";
c.parents = { mom: "Janet", dad: "Adolf" };
c.acc.bank = "Ziraat";
console.log("Shallow copy:");
console.log(a); //a.acc.bank=ziaarat
console.log(c); //c.acc.bank=ziaarat

//اگر بخواهیم کل لایه ها کپی شود و دیگر هیچ کاری به هم نداشته باشند باید این کار را بکنیم
//deep copy:
let d = JSON.parse(JSON.stringify(a));
d.acc.bank = "US-Bank";
console.log("Deep copy:");
console.log(a);
console.log(d);

//کلیدهای یک آبجکت یا آرایه را میتوان به صورت داینامیک وارد کرد:
//نکته اینکه می توان در نام کلیدها از اسپیس هم استفاده کرد
const keyName = "class level";
const student1 = {
  name: "Rio",
  [keyName]: 5,
  ["key with space"]: "a key can contain space",
};

console.log("Dynamic key:");
console.log(student1);
