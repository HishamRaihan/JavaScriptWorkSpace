console.log('Stacks');
let stackArry = []

stackArry.push('Sup')
stackArry.push('My')
stackArry.push('Friend')
console.log(stackArry);
stackArry.pop()
console.log(stackArry);

const word = "words"

const reverseWord = (w) => {
  w = Array.from(w)
  let rWord = ''
  for (let i = 0; 0 < w.length; i++) {
    rWord += w.pop()
  }
  return rWord
}

console.log(reverseWord(word))