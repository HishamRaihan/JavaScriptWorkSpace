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