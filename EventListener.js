'use strict';


let button1 = document.querySelector("#inputBtn");

let buttonPressFunction = () => {
    console.log("button pressed");
    header.textContent =`the new Penguin is: ${newPenguin}`
}

button1.addEventListener('click', () => {
    let newPenguin = newPenguin 
    printPenguin(newPenguin);
    console.log(newPenguin);
});

button1.addEventListener('click', buttonPressFunction);





let inputName = document.querySelector("#PenguinName");
let inputAge = document.querySelector("#inputAge");
let inputHappyFeet = document.querySelector("#happyFeetToggle");
let inputBtn = document.querySelector("#inputBtn");

console.log(inputBtn);
console.log(inputName);
console.log(inputHappyFeet);
console.log(inputAge);

let printText = (message) => {
    console.log(`Text in input field is ${newPenguin}`);
}



inputBtn.addEventListener('click', () => {
    console.log(newPenguin.value);

    let newPenguin = newPenguin.value; 
    // Creating a variable called textValue and assinging it the input value

    newPenguin.value = ""; 

    printText(newPenguin);

})