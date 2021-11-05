'use strict'

let PenguinName = document.querySelector("#PenguinName");
let PenguinAge = document.querySelector("#inputAge");
let HappyFeet = document.querySelector("#happyFeetToggle");
let SubmitBtn = document.querySelector("#inputBtn");


let postData = () => {
    let PenguinName = PenguinName.value;
    let inputAge = inputAge.value;
    let happyFeet = happyFeetToggle.value;

  let newPenguin = {
    name: PenguinName,
    age: inputAge,
    happyFeet: happyFeet
    };
    
  postFetch(newPenguin);

  return newPenguin
};


let postFetch = (newPenguin) => {
  fetch("http://localhost:8083/createPenguin", {
    method: "POST", 
    headers: {
      "Content-type": "application/JSON", 
    },
    body: JSON.stringify(newPenguin), 
  }).then((response) => {
    if (response.status !== 201) {
      console.error(`Status: ${response.status}`);
      return;
    }
    response.json().then((data) => {
        console.log(data);
        header.textContent
    }).catch((error) => {
        console.error(`${error}`);
    }) ;
  });
};



button1.addEventListener('click', postData);