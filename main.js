const firstName = "Patryk";
const age = 20;

console.log(`nazywam się ${firstName} i mam ${age} lat.`);

const heading = document.querySelector(".kuba");
console.log(heading);

const test = document.querySelector(".jp");
test.innerHTML = `nazywam się ${firstName} i mam ${age} lat.`;

function greet(name, age){
  console.log(`Hej nazywam się ${name} i mam ${age} lat. Jestem uczniem frontendu i operatorem maszyn CNC.`)
}
greet(`Patryś`, 20);




const button = document.querySelector('.button');
const myClick = ()=>{

}

const hamburger = document.querySelector('.hamburger--js');
hamburger.addEventListener('click' ,()=> {
  const nav = document.querySelector('.links__bar--js');
  nav.classList.toggle('links__bar--open')

})
