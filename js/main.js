"use strict";

const formElement = document.querySelector('.js-new-form');

formElement.classList.remove("collapsed")

const icon = document.querySelector ('.js-icon')


const list = document.querySelector(".js-list")
const btnAdd = document.querySelector (".js-btn-add")
const inputDesc = document.querySelector (".js-input-desc")
const inputPhoto = document.querySelector (".js-input-photo")
const inputName = document.querySelector (".js-input-name")
const labelMesageError = document.querySelector('.js-label-error'); 
const valueDesc = inputDesc.value;
const valuePhoto = inputPhoto.value;
const valueName = inputName.value;
const btnRemove = document.querySelector (".js-btn-remove")


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

const input_search_desc = document.querySelector('.js_in_search_desc');
input_search_desc.value = 'cariñoso';


const descrSearchText = input_search_desc.value;

if( kittenOneDesc.includes(descrSearchText) ) { 
    list.innerHTML += kittenOne
} 
    
    if( kittenTwoDesc.includes(descrSearchText) ) {
    list.innerHTML += kittenTwo
    
 }
    
    if( kittenThreeDesc.includes(descrSearchText) ) {
    list.innerHTML += kittenThree
  
    }

    // event.preventDefault() 



icon.addEventListener (`click`, (event) => {
    console.log (`he hecho click`);
    event.preventDefault ();
    if (formElement.classList.contains('collapsed')) {
        formElement.classList.remove ('collapsed')
    } else {
        formElement.classList.add ('collapsed')}
    
});


btnAdd.addEventListener (`click`, (ev) => {
    console.log (`click añadir`)
    ev.preventDefault ();

    if (valueDesc === '' || valuePhoto === '' || valueName === '')
    {
        labelMesageError.innerHTML = 'Debe rellenar todos los valores';
    }        
    
//   ultimo ejercicio cancelar y guardar formulario    falta que se borre el formulario  
   
});

btnRemove.addEventListener (`click`, (ev) => {
    console.log (`click añadir`)
    ev.preventDefault ();
    formElement.classList.remove ('collapsed')

    if (formElement.classList.contains('collapsed')) {
        formElement.classList.remove ('collapsed')
        
    } else {
        formElement.classList.add ('collapsed')}
     
    
        
   
});

