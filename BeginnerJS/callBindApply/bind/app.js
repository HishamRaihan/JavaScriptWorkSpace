const person1 = {name: 'Garret'}
const person2 = {name: 'Hisham'}

const personSayName = sayName.bind(person2)

personSayName();
sayName()

function sayName(){
  console.log(this.name);
}

function tellDetails (age, favFood){
  console.log(`Hey Im ${this.name} and im ${age} i like ${favFood}`);
}

const sayDetails = tellDetails.bind(person1, 24, 'Cereal')
sayDetails()

function someTing(food, age){
  console.log(food, age);
}


const btn = document.querySelector('button')
btn.addEventListener('click', someTing.bind(this, 'Pizza', 24))