/*
در اینجا  بدون اینکه متغیر
intC
از بیرون قابل دسترس باشه داریم مقدارش رو افزایش میدیم
درحقیقت فقط سطر دوم تابع
increment
هست که داره هربار اجرا میشه
نکته اش اینه که تابع
increment
فقط یکبار اجرا میشه

به این حالت که یک فانکشن برمیگرده میگن
closure

*/


const increment = () => {
  let intC = 0;
  return () => ++intC;
};

const doIncrement = increment();
console.log(doIncrement());
console.log(doIncrement());
console.log(doIncrement());

const doIncrement2 = increment();
console.log(doIncrement2());
console.log(doIncrement2());
console.log(doIncrement2());
console.log(doIncrement2());

