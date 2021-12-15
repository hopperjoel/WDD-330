
const foodList = {};
const completedList = {};
const data = [];
const foodSearchSubmit = document.querySelector('#searchItemForm');
foodSearchSubmit.addEventListener('submit', requestFood);
const baseURL = 'https://api.edamam.com';
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

function getNutritionData(foodName) {
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
    .catch (error => console.log('There was some sort of error'))
    } catch(error) {
        console.log(error);
    }
}

function nutritionHandler(foodName, quantity) {
    data = getNutritionData(foodName);
    foodList = data.parsed[0];
    console.log(foodList);
    let adjustedList = macroMultiplier(foodList.food.nutrients, quantity);
    completedList = {foodName: this.foodName, quantity: this.quantity, calories: adjustedList.ENERC_KCAL, totalCarbs: adjustedList.CHOCDF, fiber: adjustedList.FIBTG, protein: adjustedList.PROCNT, totalFat: adjustedList.FAT};
    console.log(completedList);
    return completedList
}


function requestFood() {
    const foodName = document.getElementById('foodItem').value;
    const quantity = document.getElementById('itemQuantity').value;
    console.log(foodName, quantity);
    foodData = nutritionHandler(foodName, quantity);
    buildFoodForm(foodData);
};

    
function macroMultiplier(foodList, quantity) {
    let listKeys = Object.keys(foodList);
    listKeys.forEach(key => {
        let i = foodList[key];
        i = i * quantity;
        foodList[key] = i;
    })
    return foodList
}
    
    // should probably put this in a view.js
    // should include setData function in this class

function buildFoodForm(completedList) {
    // display form in a user-friendly way
    const nutriFormParent = document.getElementById('nutriFormDiv');
    let form = document.getElementById('foodForm');
    let nutriFormData = `<label for="foodName" class="top">Food Item</label>
    <input name="foodName" id="foodName" class="top input" value="${completedList.foodName}">
    <label for="quantity" class="top">Quantity</label>
    <input name="quantity" id="quantity" class="top input" value="${completedList.quantity}">
    <label for="calories" class="top">Calories</label>
    <input name="calories" id="calories" class="top input" value="${completedList.calories}">
    <label for="totalCarbs" class="top">Total Carbs</label>
    <input name="totalCarbs" id="totalCarbs" class="top input" value="${completedList.totalCarbs}">
    <label for="fiber" class="top">Fiber</label>
    <input name="fiber" id="fiber" class="top input" value="${completedList.fiber}" readonly>
    <label for="protein" class="top">Protein</label>
    <input name="protein" id="protein" class="top input" value="${completedList.protein}">
    <label for="totalFat" class="top">Total Fat</label>
    <input name="totalFat" id="totalFat" class="top input" value="${completedList.totalFat}"><input type="submit" id="submit" value="Add Food">`;
    
    form.innerHTML = '';
    form.innerHTML = nutriFormData;
    form.classList.toggle('hide');
}

