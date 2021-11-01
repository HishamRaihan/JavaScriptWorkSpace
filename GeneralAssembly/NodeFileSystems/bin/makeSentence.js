const turnIntoSentence = require('../lib/makeSentence.js');

const inFile = process.argv[2];
const outFile = process.argv[3];

if(!inFile|| !outFile){
  throw new Error('Script requires more agrs an input file')
}
turnIntoSentence(inFile,outFile)
