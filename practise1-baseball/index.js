// const input = "52CD+";
const input = readline();
let result = [];

for (let intC = 0; intC < input.length; intC++) {
  // console.log(input[intC]);
  switch (input[intC]) {
    case "C":
      result.pop();
      break;
    case "D":
      // console.log(result[result.length - 1]);
      result.push(parseInt(result[result.length - 1] * 2));
      break;
    case "+":
      result.push(parseInt(result[result.length - 1] + result[result.length - 2]));
      break;
    default:
      if (parseInt(input[intC]) == input[intC]) {
        // console.log("num");
        result.push(parseInt(input[intC]));
      } else {
        // console.log("NotNum");
      }
      break;
  }
}

let intRes = 0;
for (intC = 0; intC < result.length; intC++) intRes += result[intC];
console.log(intRes);