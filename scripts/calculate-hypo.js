const inputside = document.querySelectorAll(".side-input");
const btncheck = document.querySelector("#calculate-hypotenuse-btn");
const message = document.querySelector(".output");

function sumofsidessquare(side1, side2) {
  return side1 * side1 + side2 * side2;
}
function checktriangle() {
  if (inputside[0].value != "" && inputside[1].value != "") {
    if (Number(inputside[0].value) > 0 && Number(inputside[1].value) > 0) {
      const sum = sumofsidessquare(
        Number(inputside[0].value),
        Number(inputside[1].value)
      );
      message.innerText = Math.sqrt(sum).toFixed(4);
    }
    else{
        message.innerText = "Enter value greater than 0 in all fields";
    }
  } else {
    message.innerText = "Enter values in all fields";
  }
}
btncheck.addEventListener("click", checktriangle);
