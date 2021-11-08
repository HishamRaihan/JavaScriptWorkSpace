function callBackPlease(cb, fName,lName){
  cb(fName + ' ' + lName)
}


const fullName = (fName, lName) => {
  const promise = new Promise((resolve, reject) => {
    callBackPlease(() => {
      resolve(fName + ' ' + lName)
    }, fName, lName)
  })
  return promise
}

const testPromiseFunction = () =>{
  fullName('Hisham', 'Raihan').then (name =>{
    console.log(`Sir ${name}`);
    return name
  }).then(console.log)
}
testPromiseFunction()