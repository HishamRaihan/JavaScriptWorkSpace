const button = document.querySelector('button');
const output = document.querySelector('p');

const setTimer = (duration)=>{
  const promise = new Promise((resolve, reject) => {

    setTimeout(() =>{
      resolve('Done!', )
    }, duration)
  })
  return promise
  }

function trackUserHandler() {
  console.log('Sending the positions');
	navigator.geolocation.getCurrentPosition(
		(posData) => {
      // now setTimer is a promise it can use the .then method
      console.log('before timer in success portion');
			setTimer(2000).then(data  => { // 
        console.log(data + '1', posData);
      })// this will execute once the promise is done ie the timer
		},
		(error) => {
			console.log(error);
		}
	);
	setTimeout(() => {
		console.log('Timer running!');
	}, 3);

	console.log('Getting position...' );
}

button.addEventListener('click', trackUserHandler);

// let result = 0;

// for (let i = 0; i < 100000000; i++) {
// 	result += i;
// }

//console.log(result);
