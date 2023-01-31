const myPromise1 = new Promise((resolve, reject) => {
  const intRnd1 = Math.floor(Math.random() * 10);
  if (intRnd1 > 5) {
    setTimeout(() => {
      resolve("1-intRndOk=" + intRnd1);
    }, 1000);
  } else {
    setTimeout(() => {
      reject("1-intRndErr=" + intRnd1);
    }, 1000);
  }
});

const myPromise2 = new Promise((resolve, reject) => {
  const intRnd2 = Math.floor(Math.random() * 10);
  if (intRnd2 > 5) {
    setTimeout(() => {
      resolve("2-intRndOk=" + intRnd2);
    }, 1000);
  } else {
    setTimeout(() => {
      reject("2-intRndErr=" + intRnd2);
    }, 1000);
  }
});

const myPromise3 = new Promise((resolve, reject) => {
  const intRnd3 = Math.floor(Math.random() * 10);
  if (intRnd3 > 5) {
    setTimeout(() => {
      resolve("3-intRndOk=" + intRnd3);
    }, 1000);
  } else {
    setTimeout(() => {
      reject("3-intRndErr=" + intRnd3);
    }, 1000);
  }
});

// console.log("Start");
// console.log("call promise1");

// myPromise1
//   .then((data) => {
//     console.log("promise1 result=ok", data);
//   })
//   .catch((error) => {
//     console.log("promise1 result=err", error);
//   });

// console.log("call promise2");
// myPromise2
//   .then((data) => {
//     console.log("promise2 result=ok", data);
//   })
//   .catch((error) => {
//     console.log("promise2 result=err", error);
//   });

// console.log("call promise3");
// myPromise3
//   .then((data) => {
//     console.log("promise3 result=ok", data);
//   })
//   .catch((error) => {
//     console.log("promise3 result=err", error);
//   });

// console.log("End");

// const allPromise = Promise.all([myPromise1, myPromise2, myPromise3]);
const allPromise = Promise.race([myPromise1, myPromise2, myPromise3]);

allPromise
  .then((data) => {
    console.log("allPromise result=ok", data);
  })
  .catch((error) => {
    console.log("allPromise result=err", error);
  });

//نکات:
//اگر پرامیسی فقط تعریف شود و فراخوانی نشود باز هم اجرا می شود
//و اگر به خطا بخورد خطای ران تایم می دهد
