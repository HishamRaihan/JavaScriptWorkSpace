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

async function testPromise() {
	let result;
	try {
		result = await wordLogger();
	} catch (error) {
		console.log(error);
	}
	console.log(result);
	// 		.then((data) => console.log(data))
	// 		.catch((error) => console.log(error));
	//
}
