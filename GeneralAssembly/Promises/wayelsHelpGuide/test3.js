function showMeWord(printW) {
	printW();
}

const wordLogger = () => {
	const promise = new Promise((resolve, reject) => {
		showMeWord(() => {
			resolve('Yay it worked');
		});
	});
	return promise;
};

function testPromise() {
	wordLogger()
		.then((data) => console.log(data))
		.catch((error) => console.log(error));
}
