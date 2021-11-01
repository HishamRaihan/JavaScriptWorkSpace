// anonymous function
// const start = function startGame() {
// 	console.log('Game is starting');
// };
// const person = {
//   // this is a method -> funciton stored into an object
// 	greet: function greet() {
// 		console.log('Hello There!');
// 	}
// };
// person.greet();

// functions are objects
// console.log(typeof startGame);
// console.dir(startGame)
// add eventListener must be called on an object
//startGameBtn.addEventListener('click', start);

// only use if its a one time function passing a function to a function
// better to give annymous functions names so its easier to debug
const sumUp = (...numbers) =>{
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
}
console.log(sumUp(1,2,3,4,5,6,7,8,9,10));