

const baseURL = 'https://api.edamam.com';
const loggingString = '&nutrition-type=logging';
const cookingString = '&nutrition-type=cooking';
const apiKey = '56a9b4dd6f352170c85e8f2e39b67840';
const apiId = 'e5af6ece'
const responseHeaders = { "cache-control": "private",
"connection": "keep-alive",
"content-encoding": "gzip",
"content-length": "105",
"content-type": "application/json;charset=UTF-8",
"date": "Thu, 09 Dec 2021 23:41:14 GMT",
"server": "openresty",
"strict-transport-security": "max-age=15552001",
"vary": "accept-encoding",
"x-envoy-upstream-service-time": "153",
"x-served-by": "ip-10-0-1-151.ec2.internal/10.0.1.151"
}

export default function getFoodResponse(foodName) {
    try{ fetch(`${baseURL}/api/food-database/v2/parser?app_id=${apiId}&app_key=${apiKey}&ingr=${foodName}&nutrition-type=logging` , {
        "method": "GET",
        "headers": responseHeaders
    })
    .then( response => {
        if(response.ok) {
            return response;
        }
        throw Error(response.statusText);
    })
    .then ( response => {const data = response.json();
            return Promise.resolve(data)})
    .catch ( error => console.log('There was some sort of error'))
    } catch(error) {
        console.log(error);
    }
}


/*

const baseURL = 'https://api.edamam.com';
const loggingString = '&nutrition-type=logging';
const cookingString = '&nutrition-type=cooking';
const apiKey = '56a9b4dd6f352170c85e8f2e39b67840';
const apiId = 'e5af6ece'
const responseHeaders = { "cache-control": "private",
"connection": "keep-alive",
"content-encoding": "gzip",
"content-length": "105",
"content-type": "application/json;charset=UTF-8",
"date": "Thu, 09 Dec 2021 23:41:14 GMT",
"server": "openresty",
"strict-transport-security": "max-age=15552001",
"vary": "accept-encoding",
"x-envoy-upstream-service-time": "153",
"x-served-by": "ip-10-0-1-151.ec2.internal/10.0.1.151"
}
export default function getFoodResponse(foodName) {
    fetch(`https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=${foodName}`, {
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
    }

export default function getFoodResponse(foodName) {
    fetch(`${baseURL}/api/food-database/v2/parser?app_id=${apiId}&app_key=${apiKey}&ingr=${foodName}&nutrition-type=logging`)
    .then( response => {
        if(response.ok) {
            return response;
        }
        throw Error(response.statusText);
    })
    .then ( response => {const data = response.json();
            return Promise.resolve(data)})
    .catch ( error => console.log('There was some sort of error'))
}


export default async function getFoodResponse(foodName) {
    const response = await fetch(`${baseURL}/api/food-database/v2/parser?app_id=${apiId}&app_key=${apiKey}&ingr=${foodName}&nutrition-type=logging`, {
        "method": "GET",
        "headers": responseHeaders
    })
        if (response.ok) {
            const data = await response.json();
            return Promise.resolve(data);
        } else {
            return Promise.reject('Data not found');
        }
    }


export default function getFoodResponse(foodName) {
    'use strict';
    try {
        return fetch(`${baseURL}/api/food-database/v2/parser?app_id=${apiId}&app_key=${apiKey}&ingr=${foodName}&nutrition-type=logging`, {
            "method": "GET",
            "headers": responseHeaders
        })
        
} catch (error) {
    console.log(error);
} finally {
    if (response.ok) {
        const data = await response.json();
        return Promise.resolve(data);
    } else {
        return Promise.reject('Data not found');
    }
}
}

export default class FoodAPI {
    constructor() {
        this._foodData = [];
        this.baseURL = 'https://api.edamam.com';
        this.apiKey = '56a9b4dd6f352170c85e8f2e39b67840';
        this.apiId = 'e5af6ece'
        this.responseHeaders = { "cache-control": "private",
        "connection": "keep-alive",
        "content-encoding": "gzip",
        "content-length": "105",
        "content-type": "application/json;charset=UTF-8",
        "date": "Thu, 09 Dec 2021 23:41:14 GMT",
        "server": "openresty",
        "strict-transport-security": "max-age=15552001",
        "vary": "accept-encoding",
        "x-envoy-upstream-service-time": "153",
        "x-served-by": "ip-10-0-1-151.ec2.internal/10.0.1.151"
        };
        
    };
    async getFoodResponse(foodName) {
        const query = `${this.baseURL}/api/food-database/v2/parser?app_id=${this.apiId}&app_key=${this.apiKey}&ingr=${foodName}&nutrition-type=logging`;
        this._foodData = getJSON(query);
        console.log(this._foodData);
        return this._foodData;
       
    };
}



response object array contains nested arrays and objects for specific things
***** FOOD DATABASE *****

    if using response method - object.hints returns array
    array[item]: object (with nested objects) for specific sub-types of the requested food
    array[item].food: category, categoryLabel, foodId, image, label, nutrients(object)
    array[item].food.nutrients: CHOCDF?, ENERC_KCAL, FAT, FIBTG, PROCNT
    array[item].measures: an array for different measures of food serving
    array[item].measures[0]: has label: "Whole" with qualified[0].qualifiers such as "Large"
*/