//when we want to use a method in many objects, we can bound a separated method to many objects
//see this simple describe video: https://www.youtube.com/watch?v=c0mLRpw-9rI

//we have three objects and we want to add a method, named add() for all of them.
//so we can define this method separately, then bound them to these objects to use inside them.
const obj1 = {
  num: 2,
};

const obj2 = {
  num: 3,
};

const obj3 = {
  num: 4,
};

const addNum = function (a, b, c) {
  return this.num + a + b + c;
};

//پارامتر اول باید حتما آبجکت باشد و بقیه پارامترها مربوط به تابعی هستند که فراخوانی میکنیم
console.log("Call res: ");
console.log(addNum.call(obj1, 1, 2, 3));

//اپلای فقط فرقش این هست که پارامترها رو باید به صورت آرایه بهش بدیم
console.log("Apply res: ");
console.log(addNum.apply(obj1, [1, 2, 3]));

//اگر بایند کنیم، کلا آن متد به آن آبجکت متصل می شود ولی تحت یک آبجکت جدید باید تعریف شود
var newObj = addNum.bind(obj1);
console.log("Bind res: ");
console.log(newObj(1, 2, 3));
// console.dir(newObj);
