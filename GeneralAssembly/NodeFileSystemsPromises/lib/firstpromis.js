// error handling conditional
// async aspect

const isError = true;
// new keyword because its a constuctor!
// inline function defined in the promise
new Promise((resolve, reject) => {
	// promises take a callback function as an argument

	if (isError) {
		reject('fake error 🔥'); // handle any errors this is going to catch .catch
	} else {
		resolve('fake data 🍙'); // if you succeed you should give some data .then
	}
})
	.then((fakeData) => (fakeData += '🍚')) // one line arrow function is implicit return -> just returns the value
	.then((newFakeData) => console.log(newFakeData)) // this gets the return from the .then above it
	.catch((err) => console.log(err));
