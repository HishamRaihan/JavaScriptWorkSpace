function cbFullName(cb, fName, lName) {
	return cb(`${fName} ${lName}`);
}

const fullName = (fName, lName) => {
	const promise = new Promise((resolve, reject) => {
		cbFullName(
			() => {
				if (!fName || !lName)
					reject('one or more paramters are empty or undefined ');
				resolve(`${fName} ${lName}`);
			},
			fName,
			lName
		);
	});
	return promise;
};

const testPromise = async () => {
	const fName = await fullName('Hisham', 'Raihan');
	console.log(fName);
};

testPromise();
