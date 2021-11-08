// function that takes a string

function callBack(cb,str){
  cb(str)
}
const promisedCallback = (str) =>{
  return new Promise((resolve, reject) =>{
    callBack(() => {
      if(!str) reject('No string found')
      resolve(str)
    }, str)
  })
}

promisedCallback('').then((str) =>{
  console.log(str)
  return str
}).catch((err) =>{
  console.log(err)
  return 'Word From Catch'
}).then((str)=>{
  console.log(str);
})
