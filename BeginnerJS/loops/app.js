
// for of loop used for an array
console.log("***********app.js************");
const companies = ["Youtube", "Facebook", "Instagram", "Netflix", "Amazon"]

for(const n of companies){
  console.log(n);
}

const symbols ={
  yt: "YouTube",
  ig: "Instagram",
  fb: "Facebook",
  hr: "Hisham Raihan"
}
for(const key in symbols){
  console.log('Key is: ' + key + ' Value is: ' + symbols[key]);
}

const array1 = [1,2,3,4,5,]

let result = 0;
array1.forEach(num=> result+=num)

console.log(result);

function sumArray(...a){
  let result2 = 0;
  for(const num of a){
    result2 += num
  }
  return result2
}
console.log(sumArray(1,2,3,4,5));