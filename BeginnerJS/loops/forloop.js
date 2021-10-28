console.log('*********LOOPS***********');
const names = ['Hisham', 'Wayel', 'Garret', 'Korakot'];
const user = { firstName: 'Hisham', lastName: 'Raihan' };
const animals = ['cat', 'dog', 'horse', 'sheep', 'pigeon'];
for (let i = 0; i < 5; i++) {
	console.log('Loop: ' + i);
	if (i === 3) break;
}

console.log('**************');
for (let i = 5; i > 0; i--) {
	console.log('Loop: ' + i);
}

console.log('*************');
for (let i = 0; i < names.length; i++) {
	console.log(names[i]);
}

console.log('******For Of*******');
for (n of names) {
	console.log(n);
}

console.log('******For In******');
for (key in user) {
	console.log(key + ' ' + user[key]);
}

console.log('******While******');
let i = 0;
while (i < 10) {
	i++;
	if (i === 5) break;
	console.log(i);
}

console.log('******Do While******');
let j = 0;
do {
	j++;
	if (j === 8) break;
	console.log(j);
} while (j < 10);

console.log('******For Each******');
animals.forEach((pet) => {
	console.log(pet);
});

let sum = 0;
for (let i = 0; i < 5; i++) {
	for (let j = 0; j < 2; j++) {
		sum = sum + i + j;
		console.log('outer', i);
		console.log('inner', j);
		continue;
	}
}
console.log(sum);

{
	let sum = 0;
	for (let i = 0; i < 5; i++) {
		for (let j = 0; j < 2; j++) {
			if (i >= 2) {
				continue;
			}
			sum = sum + i + j;
			console.log('outer', i);
			console.log('inner', j);
		}
	}
	console.log(sum);
}
