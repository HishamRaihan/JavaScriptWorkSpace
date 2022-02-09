let arr = [2, 11, 37, 42];
function randomizeArray(array) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
console.log(randomizeArray(arr))

//wallies way 
const array = ['a', 'b', 'c', 'd', 'e']
const randomArray = (arr) => {
  const newOrder = []
  const rndOrder = []
  while (newOrder.length !== arr.length) {
    let rn = Math.floor(Math.random() * arr.length)
    if (newOrder.indexOf(rn) === -1) {
      newOrder.push(rn)
    }
  }


  newOrder.forEach((ele) => {
    rndOrder.push(arr[ele])
  })
  return rndOrder
}

const test = randomArray(array)
console.log(test);