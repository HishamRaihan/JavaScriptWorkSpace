function sayName() {
	console.log(this.name);
}

const person1 = { name: 'Garrett' };
const person2 = { name: 'Heshow' };

// sayName()//logs nothing this points to the window
//(param 1 = object )
sayName.apply(person2);

function tellMeDetails(age, favoriteFood) {
	console.log(
		`hey im ${this.name} and im ${age} years old, and i like to eat ${favoriteFood}`
	);
}

tellMeDetails.apply(person1, [24, 'Pizza bagels']);

function tellMeDetails2(age, favoriteFood) {
	return `hey im ${this.name} and im ${age} years old, and i like to eat ${favoriteFood}`;
}
const tellMeDetailsResult = tellMeDetails2.apply(person2, [30, 'humus']);

console.log(tellMeDetailsResult);

const btn = document.querySelector('button')

function someTing(food, age){
  console.log(food, age);
}


btn.addEventListener('click', () => someTing.apply(this, ['Pizza', 24]))

function someTing2(a) {
	return a
	
}
function printFunc(){
	console.log(someTing2.apply(this, ['blueberry']));
}
btn.addEventListener('click', printFunc)
//const resultSomeTing2 = someTing2.apply(this, ['blueberry'])


const array1 = [1,2,3]

function sum(a,b,c){
	return a+b+c;
}

console.log(sum.apply(this,array1));