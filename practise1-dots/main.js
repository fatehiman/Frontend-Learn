document.querySelector(".btn").addEventListener("click", () => {
  let intR = 0;
  let input = document.getElementsByClassName("input")[0].value;
  for (intC = 0; intC < input.length; intC++) {
    if (obj[input[intC]]) {
      // console.log(input[intC]+' '+parseInt(obj[input[intC]]));
      if (input[intC+1]) if (input[intC]=='ی' && 'ابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی'.indexOf(input[intC+1])!=-1){
        intR +=2;
        // console.log('!!'+input[intC]+' '+parseInt(obj[input[intC]]));
        // console.log('aa='+obj.indexOf(input[intC]));
      }
      intR += parseInt(obj[input[intC]]);
    }
  }
  document.getElementsByClassName("result")[0].innerHTML = intR;
});
