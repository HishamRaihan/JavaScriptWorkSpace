// Random num from an array
// const nums = [1, 2, 3];

// const randomNum = Math.floor(Math.random() * nums.length);
// console.log(randomNum, nums[randomNum]);

function randomNum(num) {

  return num[Math.floor(Math.random() * num.length)];

}

let nums  = [1,2,3];
console.log(randomNum(nums));



// reverse
const numsArray = [5,4,3,2,1]
const revereArray = function(arr){

  let revArr = arr.length
  for(i= 0; i< revArr; i++){
    // since pop removes from the end and splice allows to add/insert into an array
    arr.splice(i, 0, arr.pop())
  }
  return arr
}

console.log(revereArray(numsArray));