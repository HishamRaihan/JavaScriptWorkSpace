const promise = new Promise((resolve, reject) => {
	let a = 1 + 2;
	if (a == 2) {
		resolve('Success bro!');
	} else {
		reject('Failed');
	}
});
promise
	.then((message) => {
		console.log('This is in then ' + message);
	})
	.catch((message) => {
		console.log('this is in the catch ' + message);
	});

//  promises are really great

// when you need to do something that's

// going to take a long time in the

// background such as downloading an image

// from a different server

// and you just want to do something after

// it's complete instead of making

// everything else wait for it and then

// also you can catch it to see if it's

// failed so that way you can maybe retry

// it or give the user an error message if

// it did fail
