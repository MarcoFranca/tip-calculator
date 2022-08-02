//clacular o valor da conta com a gorgeta
// dividido pela quantidade de pessoas


function conta(tip) {
    let conta = document.getElementById('bill');
    let person = document.getElementById('numPeaple');
    let customTip = document.getElementById("customTip");


    if (conta.value === '' || person.value === '') {
        document.getElementById("billEmpty").innerHTML=""
        document.getElementById("peapleEmpty").innerHTML=""
        if (conta.value === '' && person.value === ''){
            document.getElementById("billEmpty").innerHTML="Can't be zero"
            document.getElementById("peapleEmpty").innerHTML="Can't be zero"

        } else if (conta.value === '' && person.value !== '') {
            document.getElementById("billEmpty").innerHTML="Can't be zero"
        } else {
            console.log("pessoa vazio");
            document.getElementById("peapleEmpty").innerHTML="Can't be zero"
        }
    }else {
        document.getElementById("billEmpty").innerHTML=""
        document.getElementById("peapleEmpty").innerHTML=""

        if (tip === 0){
            let tipValue = (customTip.value / 100) * conta.value
            document.getElementById("tipValue").innerHTML= `$ ${tipValue}`

            let totalPerson = (parseFloat(conta.value) + tipValue)/parseInt(person.value)
            document.getElementById("personBill").innerHTML= `$ ${totalPerson}`
        }else{
            let tipValue = tip * conta.value
            document.getElementById("tipValue").innerHTML= `$ ${tipValue}`


            let totalPerson = (parseFloat(conta.value) + tipValue)/parseInt(person.value)
            document.getElementById("personBill").innerHTML= `$ ${totalPerson}`
        }}
}

function resetAll() {
    location.reload()
}



