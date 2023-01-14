const users = [
  {
    id: 1,
    name: "Alicia",
    family: "Silver Stone",
    age: 44,
  },
  {
    id: 2,
    name: "Paul",
    family: "Doulf",
    age: 55,
  },
  {
    id: 3,
    name: "Jims",
    family: "Cameron",
    age: 66,
  },
  {
    id: 4,
    name: "Stiven",
    family: "Hawkins",
    age: 77,
  },
];

//map:
//نکته: به ازای هر المان چیزی رو بر میگردونه که ریترن میکنیم
console.log(users.map((passedArr) => passedArr.id + 100)); //output all IDs+100

//filter:
//نکته: آرایه ای رو برمیگردونه که خروجی تابعمون ترو باشه
let newArr = users.filter((passedArr) => passedArr.age > 60);
console.log(newArr);

//some:
//OR operand for all elements
console.log(users.some((passedArr) => passedArr.age == 66));

//every:
//AND operand for all elements
console.log(users.every((passedArr) => passedArr.age == 66));

//foreach
users.forEach((passedArr) => {
  passedArr.isActive = true;
});
console.log(users);

//find
//یک تک عضو آرایه رو برمیگردونه
//فرقش با فیلتر اینه که فقط یک عضو برمیگردونه که اولین عضوی هست که خروجی تابعمون ترو باشه
console.log(users.find((passedArr) => passedArr.age == 77 || passedArr.age == 66));

//findIndex
console.log("Find index result: " + users.findIndex((passedArr) => passedArr.age == 77 || passedArr.age == 66));

//reduce
//پیمایش می کند و در هر پیمایش نتیجه قبلی تابع را به ورودی میدهد
//در اولین پیمایش چون خروجی قبلی نداریم از مقدار دستی یعنی پارامتر دوم که در اینجا عدد دو است استفاده می کند
const simpleArray = [4, 5, 6, 7];
let newArrRes = simpleArray.reduce((prevData, arrayItem) => {
  return prevData + arrayItem;
}, 2);

console.log("Reduce result= " + newArrRes);

//exercise: count the elections
const elections = ["a", "b", "a", "a", "c", "d", "b", "c", "c", "a"];
var electionsRes = [];
elections.map((arrItem) => {
  if (!electionsRes[arrItem]) electionsRes[arrItem]=0;
  electionsRes[arrItem]++;
});
console.log(electionsRes);
