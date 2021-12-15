
/*
const notifications = document.getElementById('notifications')
const dailyFoods = document.getElementById('dailyFoods');
const dailyTotals = document.getElementById('dailyTotals');
const foodName = document.getElementById('foodName');
const quantity = document.getElementById('quantity');
const calories = document.getElementById('calories');
const totalCarbs = document.getElementById('totalCarbs');
const fiber = document.getElementById('fiber');
const protein = document.getElementById('protein');
const totalFat = document.getElementById('totalFat');
const addFoodForm = document.getElementById('foodForm');
*/
// import { toggleHide, toggleMenu } from './functions.js';
// use listener to detect form submit and send information to database


/* This is meant to be the modular approach to writing the app
    - main - to start the program with window.onload to a function in the controller?
    - controller - to request data from model and build html elements

*/

// create object instance for main controller

let foodData = [];
const foodAddSubmit = document.getElementById('foodForm');
const foodAddButton = document.getElementById('addFoodButton');
const foodSearchButton = document.getElementById('searchFoodButton');
// add event listeners for "Add a food item" to display?
foodSearchButton.addEventListener('click', e => {
    foodSearchSubmit.classList.toggle('hide');
    let button = document.getElementById('arrowButton');
    button.style += 'transition: transform 0.2s ease-out; transform: rotate(90deg)';
})
foodAddButton.addEventListener('click', e => {
    foodAddSubmit.classList.toggle('hide');
    let button = document.getElementById('arrowButton2');
    button.style += 'transition: transform 0.2s ease-out; transform: rotate(90deg)';
})




// Need to create event listener for moving food and quantity to controller and retrieve html
/*
async function requestFood() {
    const foodName = document.getElementById('foodItem').value;
    const quantity = document.getElementById('itemQuantity').value;
    console.log(foodName, quantity);
    foodData = nutritionData(foodName, quantity);
    buildFoodForm(foodData);
};
*/
// call the setFoodData function with the foodData to set in database
// database function needs to be imported to requestController in object?