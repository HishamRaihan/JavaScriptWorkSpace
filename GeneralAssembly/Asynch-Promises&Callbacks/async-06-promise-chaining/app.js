const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = (opts) => {
	const promise = new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(
			(successCB) => {
				resolve(successCB);
			},
			(errorCB) => {},
			opts
		);
	});
	return promise;
};

const setTimer = (duration) => {
	const promise = new Promise((resolve, reject) => {
		// executes once promise is made
		setTimeout(() => {
			resolve('Done!');
		}, duration);
	});
	return promise;
};

function trackUserHandler() {
	let positionData;
	getPosition()
		.then((posData) => {
			// now this will be pending when we are returning something inside
      positionData = posData
			return setTimer(2000); //creates a new promise and returns it
		})
		.then((data) => {
			console.log(data, positionData);
		});
	setTimer(1000).then(() => {
		console.log('Timer Done!! asynch-06');
	});
	// this will execute once clicked because this is non blocking code
	console.log('getting current position...');
}

button.addEventListener('click', trackUserHandler);
