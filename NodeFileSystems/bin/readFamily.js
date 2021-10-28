const heyFamily = require('../lib/readFamily.js');

const inFile = process.argv[2];

if(!inFile){
  throw new Error ('Add more agruments please in the input file')
}

heyFamily(inFile)