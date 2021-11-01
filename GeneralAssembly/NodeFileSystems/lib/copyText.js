const FS = require('fs');

const copyText = function (inFile, outFile) {
	FS.readFile(inFile, 'utf-8', (error, data) => {
		if (error) console.error(error.stack);

		FS.writeFile(outFile, data, 'utf-8', (error) => {
			if (error) console.error(error);
			console.log(data);
		});
	});
};
module.exports = copyText;
