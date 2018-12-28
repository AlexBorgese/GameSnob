import key from '../apiKey'

const getGames = () => {
	return fetch("https://api-v3.igdb.com/games/1942?fields=*", {
	headers: {
		"user-key": key,
		Accept: "application/json"
	}
  })
  .then(response => {
	return response.json();
	})
	.then(function(myJson) {
	const res = JSON.parse(JSON.stringify(myJson));
	// console.log(res)
	return(res);
	});
}

export default getGames;
