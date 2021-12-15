


fetch("https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=apple", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com",
		"x-rapidapi-key": "769537e4d4msh6076f93332186b4p1f6d43jsncc7d86bb2e98"
	}
})
.then( response => {
    if(response.ok) {
        return response;
    }
    throw Error(response.statusText);
})
.then ( response => {const data = response.json();
    console.log(Promise.resolve(data))
        return Promise.resolve(data)})
.catch ( error => console.log('There was some sort of error', error))
