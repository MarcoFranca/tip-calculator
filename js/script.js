const form = document.querySelector("#tip")
const bill =  document.querySelector('#bill')
const peaple =  document.querySelector('#numPeaple')
const customTip = form.querySelector("#customTip")
const send = document.querySelector("#send")
const tipVal = document.querySelector("#tipValue")
const personBill = document.querySelector("#personBill")
const resetButton = document.querySelector("#reset")

let billVal = 0;
let qtdPeaple = 0;
let tip = 10 /100;
let calc = 0;

// **** envio dos valores****

send.addEventListener('click',(e)=>{
    e.preventDefault()
    if (validate(bill.value, peaple.value, "billEmpty","peapleEmpty")){
        billVal = parseFloat(bill.value)
        qtdPeaple = parseFloat(peaple.value)
        calc = (billVal + (billVal * tip))/qtdPeaple

        tipVal.innerHTML = `$ ${String(billVal * tip)}`
        personBill.innerHTML = `$ ${String(calc)}`
        clearValue()
        if (customTip.value !== ''){
            tip = parseInt(customTip.value) / 100
        }
    }
})

// *****pegando valores das taxas de botões*****

form.addEventListener('click', (e)=>{
    e.preventDefault()
    if (e.target.id === 'customTip'){
        e.target.removeEventListener('click',()=>{
        })
        customTip.addEventListener('keypress', (e)=>{
            if (e.key === "Enter"){
                e.preventDefault()
            }})
    }else{
        tip = e.target.id /100
        console.log(e.target.id)
    }

})

// ***** botão de reset******

resetButton.addEventListener('click', ()=>{
    reset()
})


//****funções****

let clearValue = function () {
    bill.value = ''
    peaple.value = ''
    customTip.value = ''
}

function reset() {
    billVal = 0;
    qtdPeaple = 0;
    tip = 10 /100;
    calc = 0;
    tipVal.innerHTML = ''
    personBill.innerHTML = ''
}

function validate(value1, value2,  idAlert, idAlert2) {

    if (value1 === '' || value2 === ''){
        if (value1 === '' && value2 === ''){
            document.getElementById(idAlert).innerHTML="Can't be zero"
            document.getElementById(idAlert2).innerHTML="Can't be zero"
        }else if (value1 !== '' && value2 === ''){
            document.getElementById(idAlert2).innerHTML="Can't be zero"
            document.getElementById(idAlert).innerHTML=""
        }else {
            document.getElementById(idAlert).innerHTML="Can't be zero"
            document.getElementById(idAlert2).innerHTML=""
        }
        console.error("Can't be zero")
        return false

    }else {
        document.getElementById(idAlert).innerHTML=""
        document.getElementById(idAlert2).innerHTML=""
        return true
    }
}




