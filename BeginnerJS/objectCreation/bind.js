let dog = {
	sound: 'Woof',
	talk: function () {
		console.log(this.sound);
	},
};
dog.talk();

let talkFunction = dog.talk;
let boundFunction = talkFunction.bind(dog);
console.log('This is Bound: ');
boundFunction();

let button = document.getElementById('myNiceButton');
button.addEventListener('click', dog.talk.bind({ sound: 'meow' }));
console.log('***************');

let c1 = {
	x: 5,
	y: 10
};

let c2 = {
	x: 75,
	y: 235
};

function printCoordinates(){
	console.log(this.x + ' , ' + this.y);
}
// this will be undefined
printCoordinates();

let c1Func = printCoordinates.bind(c1)
let c2Func = printCoordinates.bind(c2)

c1Func();
c2Func();