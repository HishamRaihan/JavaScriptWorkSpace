let dog = {
	sound: 'Woof',
	talk: function () {
		console.log(this.sound);
	},
};
dog.talk();

let talkFunction = dog.talk;
let boundFunction = talkFunction.bind(dog)
console.log('This is Bound: ');boundFunction();

let button = document.getElementById('myNiceButton')
button.addEventListener('click', dog.talk.bind(dog))