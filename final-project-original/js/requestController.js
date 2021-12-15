// import statements for request
//import FoodAPI from './data.js';
import getFoodResponse from './data.js';

const foodList = {};
const completedList = {};
const data = [];

export function nutritionData(foodName, quantity) {
    data = getFoodResponse(foodName);
    foodList = data.parsed[0];
    console.log(foodList);
    let adjustedList = macroMultiplier(foodList.food.nutrients, quantity);
    completedList = {foodName: this.foodName, quantity: this.quantity, calories: adjustedList.ENERC_KCAL, totalCarbs: adjustedList.CHOCDF, fiber: adjustedList.FIBTG, protein: adjustedList.PROCNT, totalFat: adjustedList.FAT};
    console.log(completedList);
    return completedList;
    //buildFoodForm(completedList);
}

    
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

export function buildFoodForm(completedList) {
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

