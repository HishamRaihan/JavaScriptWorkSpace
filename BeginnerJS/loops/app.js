
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
for(const n in symbols){
  console.log(`Keys is: ${n} and value is: ${symbols}`);
}