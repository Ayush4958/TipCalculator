// Selecting all the input fields
const input = document.querySelectorAll('.bill')

// button for clearing all input fields
const clear_btn = document.getElementById('clear')

// button for calculating the tip
const submit_btn = document.getElementById('submit') 

// input which help in calculating the tip
const amount = document.getElementById('amount')
const tip = document.getElementById('tip')
const distribution = document.getElementById('Distribution')

// Tip will be display here 
const to_pay = document.getElementById('to_pay')

// Function for clearing the Input field
clear_btn.addEventListener('click',function(){
    for(let i=0;i<input.length;i++){
        input[i].value = ""
    }   
})

// Function for calculating the tip
submit_btn.addEventListener('click',function(){
    let cal = `${amount.value}`*`${tip.value}`/100/`${distribution.value}`
    to_pay.value = `${Math.round(cal)} Rs`;
})