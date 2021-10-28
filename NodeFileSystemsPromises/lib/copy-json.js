'use strict';

const fs = require('fs');
const promiseReadFile = require('./promiseReadFile');
const promiseWriteFile = require('./promiseWriteFile');

// promiseReadFile('./package.json') // here we get a new promise
//   .then(console.log) // here we expect to see data from the file
//   .catch(err => console.log(err))

// promisified write function
const promiseWriteFile = (outFile, writeData, options) => {
	return new Promise((resolve, reject) => {
		fs.writeFile(outFile, writeData, options, (error) => {
			if (error) reject(error); // go to catch if error
			resolve(writeData); // return the data that got written
		});
	});
};

// promiseWriteFile('./fruits.txt', 'mango\nbanana\npassion fruit\nkiwi\npineapple')
//   .then(console.log) // should see some fruits
//   .catch(console.log)

const copyJson = (inFile, outFile) => {
	// read the inFile
	promiseReadFile(inFile, { encoding: 'utf8' }) // starts with the chain of promises
		// parse the json data
		.then((rawData) => JSON.parse(rawData))
		// stringify the json data
		.then((pojo) => JSON.stringify(pojo, null, 2))
		// write the file
		.then((jsonString) => promiseWriteFile(outFile, jsonString))
		.then(console.log)
		.catch((err) => console.log(err));
};

const copyJsonCallback = function (inFile, outFile) {
	// reads a file
	fs.readFile(inFile, { encoding: 'utf8' }, (error, data) => {
		let pojo;
		if (error) {
			console.error(error.stack);
			return;
		}

		// parses the json data
		try {
			// this is allowed to happen if ther eare no errors
			pojo = JSON.parse(data);
		} catch (error) {
			// errors shoot oyu down here
			console.error(error.stack);
			return;
		}
		// stringifies
		const json = JSON.stringify(pojo, null, 2);

		//writes the file
		fs.writeFile(outFile, json, { flag: 'w' }, (error) => {
			if (error) {
				console.error(error.stack);
				return;
			}
			console.log('\ncopied');
		});
	});
};

module.exports = copyJson;
