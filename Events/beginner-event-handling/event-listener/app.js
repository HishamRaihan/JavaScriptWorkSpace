const boxDiv = document.getElementById('box');

// creat the function to handle the box click
// e or anything we want is equal to the event object that contains information in the even that just occured
function handleBoxClick(e) {
  console.log(e);
	alert('Hey Page!');
}
boxDiv.addEventListener('click', handleBoxClick);
