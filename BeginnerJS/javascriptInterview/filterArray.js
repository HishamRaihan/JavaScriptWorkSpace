const myFilter =(array,func) =>{
  const newArray = []
  for(let i = 0; i <array.length; i++){
    if(func(array[i], i, array)){
      newArray.push(array[i])
    }
  }
  return newArray
}