function showMeAWord(printF, word) {
	printF(word);
}

const wordLogger = (word) => {
	const promise = new Promise((resolve, reject) => {
		showMeAWord(() => {
      if(!word) reject('word is undefined or empty')
			resolve(word);
		}, word);
	});
	return promise;
};

async function testPromise(word) {
	let result;
	try {
		result = await wordLogger(word);
		resule += 'From test promise'
	} catch (error) {
		console.log(error);
	}
	console.log(result);
}
testPromise();
testPromise('poopy')
