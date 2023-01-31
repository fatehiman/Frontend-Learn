//we defined a promise (like fetch)
const myPromise = new Promise((resolve, reject) => {
  const intRnd = Math.floor(Math.random() * 10 + 1);
  if (intRnd > 5) {
    setTimeout(() => {
      resolve({ isSuccess: true, data: intRnd, from: "myPromise" });
    }, 1000);
  } else {
    setTimeout(() => {
      reject({ isSuccess: false, data: intRnd, from: "myPromise" });
    }, 1010);
  }
});

//format of calling a promise:
//myPromise.then().catch();
console.log("Before promise");

myPromise
  .then((data) => {
    console.log("Resolved=", data);
  })
  .catch((error) => {
    console.log("Rejected=", error);
  });

console.log("After promise");

//Thas it!
