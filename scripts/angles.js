const inputangle = document.querySelectorAll(".angle-input");
const btncheck = document.querySelector("#is-triangle-btn");
const message = document.querySelector("#output");
console.log(inputangle);
function sumofangles(angle1, angle2, angle3) {
  return angle1 + angle2 + angle3;
}
function checktriangle() {
  if (
    inputangle[0].value != "" &&
    inputangle[1].values!= "" &&
   inputangle[2].value != ""
  ) {
    if (
      Number(inputangle[0].value) > 0 &&
      Number(inputangle[1].value) > 0 &&
      Number(inputangle[2].value) >0
    ) {
      const sum = sumofangles(
        Number(inputangle[0].value),
        Number(inputangle[1].value),
        Number(inputangle[2].value)
      );
      console.log(inputangle);
      if (sum === 180) {
        message.innerText = "Triangle";
      } else {
        message.innerText = "NOT Triangle";
      }
    } else {
      message.innerText = "Enter correct values in angles";
    
    }
  }
  else{
    message.innerText="All fields mandatory"
  }
}

btncheck.addEventListener("click", checktriangle);
