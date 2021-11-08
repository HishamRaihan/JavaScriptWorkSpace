function callBack(cbf, word = '') {
	cbf(word);
}
//callback can be promisified
function logSmeThing(cb, a) {
	cb(a);
}
const logPromise = () =>{
  const promise = new Promise((resolve, reject) =>{
    logSmeThing(() => {
      if(!a) reject('empy param')
      resolve(a)
      console.log(a + 'with params');
    })
  })
}

const wrappingPromise = (word) => {
	const promise = new Promise((resolve, reject) => {
		callBack(() => {
			if (!word) {
				reject('your param was empty');
			} else {
				resolve(word);
			}
		}, word);
	});
	return promise;
};
const word1 = 'word1';
function testPromise(word) {
	wrappingPromise(word).then((stuff) => logSmeThing(stuff));

	console.log('hello in test Promise');
}

testPromise(word1);

wrappingPromise('word2').then((data) => logSmeThing(data));

console.log('hello outside everything');
