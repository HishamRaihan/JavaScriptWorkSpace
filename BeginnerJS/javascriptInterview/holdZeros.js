const arr = [34, 6, 76, 0, 0, 343, 90, 0, 32, 0, 34, 21, 54];
const moveZero = (arr) => {
  for (ind = 0; ind < arr.length; ind++) {
    const el = arr[ind];
    if (el === 0) {
      arr.push(arr.splice(ind, 1)[0]);
      ind--;
    };
  }
  return arr
};
moveZero(arr);
console.log(arr);
