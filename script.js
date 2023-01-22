const convertBtn = document.getElementById("converter-btn")
const inputEl = document.getElementById("input-el")
const meterFeetEl = document.getElementById("meter-feet-el")
const literGallonsEl = document.getElementById("liter-gallons-el")
const kgPdEl = document.getElementById("kg-pd-el")
let meter = 0
let liter = 0
let kilogram = 0

convertBtn.addEventListener("click", function(){
    converter()
})

inputEl.addEventListener('keypress', function(e){
    if(e.which == 13){
       converter()
    }
 })

 function converter(){
    if (inputEl.value){
        meterFeetEl.innerHTML = `<p> ${inputEl.value} metros = ${(inputEl.value * 3.281).toFixed(3)} pes | ${inputEl.value} pes = ${(inputEl.value / 3.281).toFixed(3)} metros</p>`
        literGallonsEl.innerHTML = `<p> ${inputEl.value} litros = ${(inputEl.value * 0.264).toFixed(3)} galões | ${inputEl.value} galões = ${(inputEl.value / 0.264).toFixed(3)} litros</p>`
        kgPdEl.innerHTML = `<p> ${inputEl.value} kilos = ${(inputEl.value * 2.204).toFixed(3)} pounds | ${inputEl.value} pounds = ${(inputEl.value / 2.204).toFixed(3)} kilos </p>`
    }
 }