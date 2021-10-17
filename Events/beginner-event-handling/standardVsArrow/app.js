const boxDiv = document.getElementById('box');

// creat the function to handle the box click
// e or anything we want is equal to the event object that contains information in the even that just occured
boxDiv.addEventListener('click', function(e){
  // this refers to boxDiv
  console.log(this);
})

boxDiv.addEventListener('click', e => {
	alert('arrow function');
	// this refers to the global object 
	console.log(this);
});
