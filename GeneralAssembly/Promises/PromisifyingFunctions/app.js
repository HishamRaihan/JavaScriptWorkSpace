function setUp(){
  delay('Somethign')
  .then(() => console.log('Hi again'))
  .catch((err) => console.log(err))
}

function delay(time){
  return new Promise ((resolve, reject) => {
    if (isNaN(time)) {
			reject( new Error ('Your time is not a number'));
		}
    setTimeout(resolve, time)
  })
}

function sayHello(){
  console.log('hello');
}

setUp()