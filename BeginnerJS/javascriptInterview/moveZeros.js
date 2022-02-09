// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

const intArray = [1, 2, 3, 412, 0, 0, 21, 2, 3, 4]

const moveToEnd = (num) => {
  for (let i = 0; i < num.length; i++) {
    const zeroElements = num[i]
    if (zeroElements === 0) {
      intArray.push(intArray.splice(i, 1)[0])
    }
  }
  return num
}
moveToEnd(intArray)
console.log(moveToEnd(intArray))
