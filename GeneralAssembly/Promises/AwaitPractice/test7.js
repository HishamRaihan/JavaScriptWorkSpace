const callBackFunction = (cbf, num1, num2) => {
	return cbf(num1, num2);
};
const testCBFN = (num1, num2) => {
	return new Promise((resolve, reject) => {
		callBackFunction(
			() => {
				if (isNaN(num1) || isNaN(num2)) {
					reject(`${num1} & ${num2} are not numbers`);
				} else {
					console.log(`${num1} & ${num2} are Good numbers you chose`);
					resolve(+num1 + +num2);
				}
			},
			num1,
			num2
		);
	});
};
const testPromise = async (num1, num2) => {
	const result = await testCBFN(num1, num2);
	console.log(result);
};
testPromise(2, '3');
