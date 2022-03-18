

// const word = 'word'
// const revWord = (w) => {
//   let arrW = w.split('').reverse().join('')
//   console.log(arrW)
// }

// revWord(word)


const word = 'word'
const anotherOne = 'level'

const palindrome = (str) => {
  // split turns into an array with every cha it takes it
  // reverse will reverese the string 
  // join will join the array togther
  let arrayedWord = str.split('').reverse().join('')
  if (arrayedWord === str) {
    console.log('this is a palindrome')
  } else {
    console.log('this is not a palindrome');
  }
}

palindrome('cat')
