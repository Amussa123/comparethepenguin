'use strict';


let header = document.querySelector('h2');
console.log(header);

fetch('http://localhost:8083/getAll')
    .then((response) => {                              
        if (response.status !== 200) {               
            console.error(`status: ${response.status} `);
            return;
        }
        response.json()                                
        .then((data) => {
            console.log(data);
          
        
           
            for(let obj of data){
                console.log(obj);
                createCard(obj);
            }
            
        }).catch((error) => {
            console.error(`${error}`);                 
        });
    });



let parentDiv = document.querySelector('#parentDiv');

let createCard = (data) => {
    // Creating elements
    let newCard = document.createElement('div');
    let newCardBody = document.createElement('div');
    let newId = document.createElement('h4');
    let newName = document.createElement('h4');
    let newAge = document.createElement('h4');
    let newhappyFeet= document.createElement('h4');

   
    newCard.classList = "card";
    newCardBody.classList = "card-body";
    newId.classList = "card-Id";
    newName.classList = "card-Name";
    newAge.classList = "card-Age";
    newhappyFeet.classList = "card-happyFeet";
 


    newId.textContent = data.id;
    newName.textContent = data.name;
    newAge.textContent = data.age;
    newhappyFeet.textContent = data.happyFeet;

    
    newCardBody.appendChild(newName);
    newCardBody.appendChild(newId);
    newCardBody.appendChild(newAge);
    newCardBody.appendChild(newhappyFeet);

    newCard.appendChild(newCardBody);

    parentDiv.appendChild(newCard);
}