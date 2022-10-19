"use strict";

const formElement = document.querySelector('.js-new-form');

formElement.classList.remove("collapsed")

document.querySelector(".js-list") 


const list = document.querySelector(".js-list")



const kittenOne = 
  `<li class="card">
<article>
<img
class="card_img"
src="https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg"
alt="gatito"
/>
<h3 class="card_title">Anastacio</h3>
<p class="card_description">
Ruiseño, juguetón, le guta estar tranquilo y que nadie le
moleste. Es una maravilla acariciarle!
</p>
</article>
</li>`; 



const kittenTwo = `<li class="card">
<article>
<img
class="card_img"
src="https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg"
alt="gatito"
/>
<h3 class="card_title">Fiona</h3>
<p class="card_description">
Ruiseño, juguetón, le guta estar tranquilo y que nadie le
moleste. Es una maravilla acariciarle!
</p>
</article>
</li>`; 

const kittenThree = `<li class="card">
<article>
<img
class="card_img"
src="https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg"
alt="gatito"
/>
<h3 class="card_title">Cielo</h3>
<p class="card_description">
Ruiseño, juguetón, le guta estar tranquilo y que nadie le
moleste. Es una maravilla acariciarle!
</p>
</article>
</li>`; 


list.innerHTML += kittenOne + kittenTwo + kittenThree;
