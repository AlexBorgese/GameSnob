import key from '../apiKey'

const getCoverImage = (coverNumber) => {
	return fetch(`https://api-v3.igdb.com/covers/${coverNumber}?fields=url`, {
		headers: {
			"user-key": key,
			Accept: "application/json"
		}
	  })
	  .then(response => {
		  console.log('ressss', response)
		return response.json();
		})
		.then(function(myJson) {
		const res = JSON.parse(JSON.stringify(myJson));
		console.log(res)
		return(res);
		});
}

export default getCoverImage;
