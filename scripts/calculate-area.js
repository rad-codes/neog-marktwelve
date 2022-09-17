const side1=document.querySelector("#first-side")
const side2=document.querySelector("#second-side")
const side3=document.querySelector("#third-side")
const btncheck=document.querySelector(".btn-check")
const output=document.querySelector("#output")
function handleclick(e){
    e.preventDefault();
const semiperi=calculatesemiperimeter(Number(side1.value),Number(side2.value),Number(side3.value))
console.log("semiperi",semiperi)
const area=calculatearea(semiperi,Number(side1.value),Number(side2.value),Number(side3.value))
console.log("area",area)
output.innerText="area is "+area
}
function calculatesemiperimeter(sidea,sideb,sidec){
    return (Number(sidea)+Number(sideb)+Number(sidec))/2
}
function calculatearea(semiperimeter,sidea,sideb,sidec){
    const out=Math.sqrt(
        semiperimeter *(semiperimeter - sidea) * (semiperimeter - sideb) *(semiperimeter - sidec))
        console.log("out",out)
        return out;
    // return Math.sqrt(
    //     semiperimeter *(semiperimeter - sidea) * (semiperimeter - sideb) *(semiperimeter - sidec))
}
btncheck.addEventListener("click",handleclick)
