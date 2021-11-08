const kanyeQoutesAPI = 'https://api.kanye.rest/';
const btn = document.querySelector('button');
const element = document.createElement('p');

function fetchKanyeQuotes(url) {
	const res = fetch(url);
	console.log(res);
	res
		.then(res => res.json())
		.then(result => {
			element.textContent = result.quote;
			btn.parentNode.insertBefore(element, btn);
			console.log(result);
		})
		.catch(err => console.log(err));
}

fetchKanyeQuotes(kanyeQoutesAPI);

btn.addEventListener('click', fetchKanyeQuotes.bind(this, kanyeQoutesAPI))