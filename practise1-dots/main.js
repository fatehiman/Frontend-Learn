document.querySelector(".btn").addEventListener("click", () => {
  let intR = 0;
  let input = document.getElementsByClassName("input")[0].value;
  for (intC = 0; intC < input.length; intC++) {
    if (input[intC] == ".") intR++;
  }
  document.getElementsByClassName("result")[0].innerHTML = intR;
});
