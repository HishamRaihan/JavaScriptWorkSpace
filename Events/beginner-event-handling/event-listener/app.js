const boxDiv = document.getElementById('box');

// creat the function to handle the box click
// e or anything we want is equal to the event object that contains information in the even that just occured
function handleBoxClick(e) {
  console.log(e);
	alert('Hey Page!');
  add()
}
boxDiv.addEventListener('click', handleBoxClick);



function add(){
  let num1 = 1
  let num2 = 2

  const sum = num1 + num2

  console.log('NUM1 + NUM2 = ' + sum);
}
