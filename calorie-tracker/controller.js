import getFoodResponse from './data.js';

class FoodData {
    constructor(foodName, quantity=1) {
        this.foodName = foodName;
        this.quantity = quantity;
        this.foodList = {};
    }

    async getFoodData() {
        let data = await getFoodResponse(this.foodName);
        this.foodList = data.parsed[0];
        this.buildFoodData(this.foodList)
    }
    

    buildFoodData(foodNutrition) {
        // display form in a user-friendly way
        console.log(foodNutrition);
        let nutriFormParent = document.getElementById('nutriFormDiv');
        let form = document.createElement("FORM");
        form.classList.add("nutritionForm");
        let nutriFormData = `<label for="foodName">Food Item</label>
        <input name="foodName" id="foodName" value="${this.foodName}" readonly>
        <label for="foodQuantity">Quantity</label>
        <input name="foodQuantity" id="foodQuantity" value="${this.quantity}" readonly>
        <label for="foodCalories">Calories</label>
        <input name="foodCalories" id="foodCalories" value="${foodNutrition.food.nutrients.ENERC_KCAL}" readonly>
        <label for="foodCarbs">Total Carbs</label>
        <input name="foodCarbs" id="foodCarbs" value="${foodNutrition.food.nutrients.CHOCDF}" readonly>
        <label for="foodFiber">Fiber</label>
        <input name="foodFiber" id="foodFiber" value="${foodNutrition.food.nutrients.FIBTG}" readonly>
        <label for="foodProtein">Protein</label>
        <input name="foodProtein" id="foodProtein" value="${foodNutrition.food.nutrients.PROCNT}" readonly>
        <label for="foodTotalFat">Total Fat</label>
        <input name="foodTotalFat" id="foodTotalFat" value="${foodNutrition.food.nutrients.FAT}" readonly>
        <label for="foodSatFat">Saturated Fat</label>
        <input name="foodSatFat" id="foodSatFat" value="${foodNutrition.food.nutrients.FAT}" readonly>
        <label for="foodMonoFat">Monounsaturated Fat</label>
        <input name="foodMonoFat" id="foodMonoFat" value="${foodNutrition.food.nutrients.FAT}" readonly>
        <label for="foodPolyFat">Polyunsaturated Fat</label>
        <input name="foodPolyFat" id="foodPolyFat" value="${foodNutrition.food.nutrients.FAT}" readonly>`
        
        form.innerHTML = nutriFormData;
        nutriFormParent.appendChild(form);
    }

    // put data into the input values in a form that can then be posted to IndexedDB?
    storeItemData(foodList) {

    }
    
}


let foodDataTest = new FoodData('peach');

foodDataTest.getFoodData();
//foodDataTest.buildFoodData(foodNut);