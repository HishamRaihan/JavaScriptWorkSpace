// function that takes a string
const isTrue = false
function callBack(cb) {
	cb();
}
const promisedCallback = () => {
	return new Promise((resolve, reject) => {
		callBack(() => {
			if (!isTrue) reject('Its false');
			resolve('Its True');
		});
	});
};

promisedCallback()
	.then((str) => {
		console.log(str);
		return str;
	})
	.catch((err) => {
		console.log(err);
		return 'False From Catch';
	})
	.then((str) => {
		console.log(str, 'This is another then');
	}).finally(()=>console.log('Bye from finally'))
