


const copyText = require('../lib/copyText.js');

const inFile = process.argv[2];
const outFile = process.argv[3];

if(!inFile|| !outFile){
  throw new Error('Script requires more arguments an input file')
}

copyText(inFile,outFile)