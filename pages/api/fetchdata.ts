export default function fetchdata() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'eb9553bd44msh3108bcbe4963c36p193606jsn5e7972425ad7',
      'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
    }
  };

  fetch('https://shazam-core.p.rapidapi.com/v1/search/multi?search_type=SONGS&query=lofi', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
} 
