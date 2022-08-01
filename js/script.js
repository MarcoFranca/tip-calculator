//clacular o valor da conta com a gorgeta
// dividido pela quantidade de pessoas


let conta = prompt("valor da conta")
let people = prompt("numero de pessoas")
const tip1 = 0.05;
const tip2 = 0.1;
const tip3 = 0.15;
const tip4 = 0.25;
const tip5 = 0.50;
let tip6 = prompt("valor tip")
let select = 0
let tip = 0

if (select === tip1){
    tip = conta * tip1
    alert("valor da gorgeta: " + tip)
}else if (select === tip2){
    tip = conta * tip2
    alert("valor da gorgeta: " + tip)
}else if (select === tip3){
    tip = conta * tip3
    alert("valor da gorgeta: " + tip)
}else if (select === tip4){
    tip = conta * tip4
    alert("valor da gorgeta: " + tip)
}else if (select === tip5){
    tip = conta * tip5
    alert("valor da gorgeta: " + tip)
}else{
    tip = conta * tip6
    alert("valor da gorgeta: " + tip)
}

totalP = conta + tip / people

alert(totalP)