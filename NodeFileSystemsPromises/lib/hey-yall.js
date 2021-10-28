'use strict';

const fs = require('fs')
const promiseReadFile = require('./promiseReadFile')



const heyYall = function (inFile) {
  // read the file using our promisified file reader funciton
  promiseReadFile(inFile, { encoding: 'utf8' })
    .then(data => { // happens after the Promise is done
      console.log(data)
      // split on the newline
      const lines = data.split('\n')
      // filter the non blank lines
      const nonBlankLines = lines.filter(line => line.length > 0)
      // loop over the text and output `hey text`
      nonBlankLines.forEach((line) => {
        console.log(`Hey ${line}!`)
      })
    })
    .catch(err => console.log(err))
  }


module.exports = heyYall;
