console.log('*******WHILE*********');
let randomNumber = [];
let finished = false;

while (!finished){
  const rndNumber = Math.random();
  randomNumber.push(rndNumber);
  if(rndNumber > 0.5){
    finished = true;
    console.log(randomNumber);
  }
}
let counter = 0;
while (counter < 5) {
	const a = 1;
	counter++;
  console.log(a);
}

// let number = 0;
// for (let i = 1; i < 2; i++) {
// 	number += 1;
// }
// console.log(i);
