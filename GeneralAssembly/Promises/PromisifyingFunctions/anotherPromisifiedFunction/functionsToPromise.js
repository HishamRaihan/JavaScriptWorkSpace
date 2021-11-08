// function printWord(word){
//   console.log(word);
// }

function showMeWord(printF, word) {
	// --> callback
	printF(word);
}

const wordLogger = (word) => {
	const promise = new Promise((resolve, reject) => {
		showMeWord(() => {
			resolve(word);
		});
	});
	return promise;
};
function testPromise() {
	wordLogger('some word')
		.then((data) => {
			console.log(data + ' another word');
			return data;
		})
		.then((data) => {
			console.log(data + ' after another word');
			return data;
		})// will return some data
		.then(console.log)
		.then(() => console.log('does this prints last'));
}

testPromise();
