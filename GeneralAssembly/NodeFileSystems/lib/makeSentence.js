const FS = require('fs')

const turnIntoSentence = function(inFile, outFile){
  FS.readFile(inFile, 'utf-8', (error, data) => {
    if(error) console.error(error.stack);

    // everytime we see a space make an element and push it to the variable array
    const nameList = data.split(' ')
    // if name is an empty string we will not add it 
    const cleanNameList = nameList.filter((name) => name != '')

    const sortedNames = cleanNameList.sort()

    let namesWithText = []

    sortedNames.forEach((familyNames) =>{
      namesWithText.push(`Hey ${familyNames} I hope your having a wonderful day!`);
    })
    namesWithText = namesWithText.join('\n')
    

    FS.writeFile(outFile, namesWithText, 'utf-8', (error) =>{
      if(error) console.error(error.stack);
      console.log(namesWithText);
    })
  })
}
module.exports = turnIntoSentence