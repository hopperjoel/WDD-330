
const baseURL = 'https://api.edamam.com';
const loggingString = '&nutrition-type=logging';
const cookingString = '&nutrition-type=cooking';

export default async function getFoodResponse(foodName) {
const response = await fetch(`${baseURL}/api/food-database/v2/parser?app_id=cc5fb076&app_key=%2040229d028382bdb7b2ac0fe993ba2e60&ingr=${foodName}&nutrition-type=logging`, {
	"method": "GET",
	"headers": {
        "cache-control": "private",
        "connection": "keep-alive",
        "content-encoding": "gzip",
        "content-type": "application/json;charset=UTF-8",
        "server": "openresty",
        "strict-transport-security": "max-age=15552001",
        "vary": "accept-encoding",
        "x-envoy-upstream-service-time": "1157",
        "x-served-by": "ip-10-0-1-49.ec2.internal/10.0.1.49"
	}
})
if (response.ok) {
    const data = await response.json();
    return Promise.resolve(data);
} else {
    return Promise.reject('Data not found');
}
}

async function getFoodData(foodName) {
    let data = await getFoodResponse(foodName);
    return data;
}




/*
response object array contains nested arrays and objects for specific things
***** FOOD DATABASE *****

    if using response method - object.hints returns array
    array[item]: object (with nested objects) for specific sub-types of the requested food
    array[item].food: category, categoryLabel, foodId, image, label, nutrients(object)
    array[item].food.nutrients: CHOCDF?, ENERC_KCAL, FAT, FIBTG, PROCNT
    array[item].measures: an array for different measures of food serving
    array[item].measures[0]: has label: "Whole" with qualified[0].qualifiers such as "Large"
*/