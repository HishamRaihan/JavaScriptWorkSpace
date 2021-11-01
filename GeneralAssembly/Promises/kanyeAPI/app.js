const btn = document.querySelector('button')
const kanyeQoutesAPI = 'https://api.kanye.rest/';

function fetchKanyeQuotes(url){
  const res = fetch(url)
  console.log(res);
  res.then((res) => console.log(result))
  .catch((err) => console.log(err))
}

fetchKanyeQuotes(kanyeQoutesAPI)
btn.addEventListener('click', fetchKanyeQuotes.bind(this, kanyeQoutesAPI))