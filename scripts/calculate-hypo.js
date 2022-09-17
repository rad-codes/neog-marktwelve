const inputside=document.querySelectorAll(".side-input");
const btncheck=document.querySelector("#calculate-hypotenuse-btn")
const message=document.querySelector(".output")

function sumofsidessquare(side1,side2){

return side1*side1+side2*side2;
}
function checktriangle(){
const sum=sumofsidessquare(Number(inputside[0].value),Number(inputside[1].value))
message.innerText=Math.sqrt(sum)

}
btncheck.addEventListener("click",checktriangle)
