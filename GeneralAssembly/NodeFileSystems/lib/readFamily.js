const FS = require('fs');

const heyFamily = function (inFile) {
	FS.readFile(inFile, { encoding: 'utf-8' }, (error, list) => {
		if (error) console.error(error);

		// turning the list into an array of each line
		const lines = list.split(' ');
		// clean up array - removing any lines of names.tx that are empty lines
		// non-empty lines are oging to be our names and same them to names variable
		const names = lines.filter((line) => line != '');

		const sortedNames = names.sort();

		sortedNames.forEach((familyMember) => {
			console.log(`Hey ${familyMember} today is a good day!`);
		});
	});
};

module.exports = heyFamily;
