
import getFoodResponse from './data.js'; // import get_data function
import getDb from './database.js';
import DisplayBuilder from './buildController.js';

export default class FoodController {
    // need to redo the constructor. Don't think it needs params
    constructor() {
        this.foodList = {};
        this.completedList = {};
        this.this.dailyFoodsTable;
        this.dailyMacrosTable;
        this.curDate = Date.now();
    }

    async init() {
        userData =  await getDb();
        if (!userData) {
            try {
                window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || 
                window.msIndexedDB;
 
                if (!window.indexedDB) {
                    window.alert("Your browser doesn't support a stable version of IndexedDB.")
                }
            } catch (error) {
                console.log(error)
            }
        }
        const buildObject = new DisplayBuilder(userData);
        this.this.dailyFoodsTable = buildObject.buildthis.dailyFoods;
        this.dailyMacrosTable = buildObject.buildDailyTotals;
    }

    async getFoodData(foodName, quantity) {
        let data = await getFoodResponse(foodName);
        this.foodList = data.parsed[0];
        console.log(this.foodList);
        let adjustedList = this.macroMultiplier(this.foodList.food.nutrients, quantity);
        this.completedList = {foodName: this.foodName, quantity: this.quantity, calories: adjustedList.ENERC_KCAL, totalCarbs: adjustedList.CHOCDF, fiber: adjustedList.FIBTG, protein: adjustedList.PROCNT, totalFat: adjustedList.FAT};
        console.log(this.completedList);
        return this.completedList;
    }

    
    macroMultiplier(foodList, quantity) {
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

    buildFoodForm(completedList) {
        // display form in a user-friendly way
        const nutriFormParent = document.getElementById('nutriFormDiv');
        let form = document.createElement("FORM");
        form.classList.add("nutritionForm");
        let nutriFormData = `<label for="foodName">Food Item</label>
        <input name="foodName" id="foodName" value="${completedList.foodName}" readonly>
        <label for="foodQuantity">Quantity</label>
        <input name="foodQuantity" id="foodQuantity" value="${completedList.quantity}" readonly>
        <label for="foodCalories">Calories</label>
        <input name="foodCalories" id="foodCalories" value="${completedList.calories}" readonly>
        <label for="foodCarbs">Total Carbs</label>
        <input name="foodCarbs" id="foodCarbs" value="${completedList.totalCarbs}" readonly>
        <label for="foodFiber">Fiber</label>
        <input name="foodFiber" id="foodFiber" value="${completedList.fiber}" readonly>
        <label for="foodProtein">Protein</label>
        <input name="foodProtein" id="foodProtein" value="${completedList.protein}" readonly>
        <label for="foodTotalFat">Total Fat</label>
        <input name="foodTotalFat" id="foodTotalFat" value="${completedList.totalFat}" readonly>`;
        
        form.innerHTML = nutriFormData;
        nutriFormParent.appendChild(form);
        return form
    } 
    
    async setFoodData() {
        let request = db.transaction(["addFood"], "readwrite")
        .objectStore("addFood")
        .add(this.completedList);
        
        request.onsuccess = function(event) {
           alert("Food has been added to your database.");
        };
        
        request.onerror = function(event) {
           alert("Unable to add data");
        }
     }
}

class DailyMacros {
    // Pull use imported function to retrieve daily macro data from db
    // Create display for macro information
    constructor() {
        this.dailyMacroRaw = {}
    }

    async getMacroData() {
        await // create function to retrieve data
        // this.dailyMacroRaw = data;
        this.buildDailyDisplay(this.dailyMacroRaw);
    }

    

    
}


let foodDataTest = new FoodData('peach');

foodDataTest.getFoodData();
//foodDataTest.buildFoodData(foodNut);