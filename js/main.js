"use strict";

const formElement = document.querySelector('.js-new-form');

formElement.classList.remove("collapsed")

document.querySelector(".js-list") 


const list = document.querySelector(".js-list")

const kittenOneImage= 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg' ;
const kittenOneName = 'Anastacio';
const kittenOneDesc = 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!'
const kittenOneRace = 'British Shorthair'

const kittenTwoImage= 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg' ;
const kittenTwoName = 'Fiona';
const kittenTwoDesc = 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!'
const kittenTwoRace = 'British Shorthair'

const kittenThreeImage= 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg' ;
const kittenThreeName = 'Cielo';
const kittenThreeDesc = 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!'
const kittenThreeRace = 'British Shorthair'

const input_search_desc = document.querySelector('.js_in_search_desc');
input_search_desc.value = 'cariñoso';


const descrSearchText = input_search_desc.value;

if( kittenOneDesc.includes(descrSearchText) ) { 
    list.innerHTML = kittenOne
} 
    
    if( kittenTwoDesc.includes(descrSearchText) ) {
    list.innerHTML = kittenTwo
    
 }
    
    if( kittenThreeDesc.includes(descrSearchText) ) {
    list.innerHTML = kittenThree
  
    }


const kittenOne = 
`<li class="card"> <article> <img class="card_img" src=  ${kittenOneImage}  alt="gatito" /> <h3 class="card_title"> ${kittenOneName} </h3> <h4 class="card_race"> ${kittenOneRace} </h4> <p class="card_description"> ${kittenOneDesc} </p></article></li>`;



const kittenTwo = 
`<li class="card"> <article> <img class="card_img"
src= "${kittenTwoImage}""alt="gatito" />
<h3 class="card_title"> ${kittenTwoName}</h3>
<h4 class="card_race"> ${kittenTwoRace} </h4>
<p class="card_description">
${kittenTwoDesc}
</p>
</article>
</li>`; 

const kittenThree =
 `<li class="card"> <article> 
<img class="card_img" src="${kittenThreeImage}" alt="gatito" />
<h3 class="card_title">${kittenThreeName}</h3>
<h4 class="card_race"> ${kittenThreeRace} </h4>
<p class="card_description">
${kittenThreeDesc}
</p>
</article>
</li>`; 

list.innerHTML += kittenOne + kittenTwo + kittenThree;

