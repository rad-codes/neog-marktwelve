const inputangle=document.querySelectorAll(".angle-input");
const btncheck=document.querySelector("#is-triangle-btn")
const message=document.querySelector("#output")
console.log(inputangle)
function sumofangles(angle1,angle2,angle3){
return angle1+angle2+angle3;
}
function checktriangle(){
const sum=sumofangles(Number(inputangle[0].value),Number(inputangle[1].value),Number(inputangle[2].value))
console.log(inputangle)
if(sum===180){
    message.innerText="Triangle"
}
else{
    message.innerText="NOT Triangle"
}
}
btncheck.addEventListener("click",checktriangle)
