// function that takes an array and an element. The function should return true if the element exists in the array. return false if the element does not exist in the array
// example: 
// array: ['a','b','c','d','e']
// ele : 'd'
// should return : true




const array = ['a','b','c','d','e']

const arrayCheck = (arr, target) =>{
  let isThere = false
  arr.forEach(element => {
    if(element === target){
      isThere = true
    }
  });
  return true
}

console.log(arrayCheck(array, 'd'))