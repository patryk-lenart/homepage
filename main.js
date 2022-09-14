const firstName = "Patryk";
const age = 20;

console.log(`nazywam się ${firstName} i mam ${age} lat.`);

const heading = document.querySelector(".kuba");
console.log(heading);

const test = document.querySelector(".jp");
test.innerHTML = `nazywam się ${firstName} i mam ${age} lat.`;

const deathStar = {
  diameter: 21150,
  name: `Death Star`,
  fire: (target) => {
    console.log(`${target} destroyed`);
  },
  isOperating: true,
  population: 21818,
  commander: {
    name: `Darth Vader`,
    age: 69,
  },
};
console.log(deathStar);
deathStar.fire(`rebel ship`);
console.log(deathStar.commander);

const humanOne = {
  name: "patryk",
  age: 25,
};
const humanTwo = {
  name: "kuba",
  age: 12,
};
console.log(humanOne);
console.log(humanTwo);

console.log(humanTwo);
humanOne.age = 30;
humanTwo.age = humanOne.age;
console.log(humanOne);
console.log(humanTwo);

function calculate(myNumber) {
  return myNumber * 5;
}
const myResult = calculate(6);
console.log(`musiałem pomnożyć moj numer przez 5 i otrzymałem ${myResult}`);

function greet(name, age) {
  console.log(`hej nazywam się ${name} i mam ${age} lat`);
}
greet(`huj`, 89393);

const tank = {
  name: `tiger`,
  age: 20,
  driver: {
    name: "piotr",
    age: 16,
  },
  rozpierdol(myTarget) {
    console.log(`${myTarget} został rozpierdolony 💣`);
  },
};
