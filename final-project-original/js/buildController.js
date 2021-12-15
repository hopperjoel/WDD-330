

export default class DisplayBuilder {
    constructor(userData) {
        this.userData = userData;
    }

    // build out table for reported foods and their macros
    dailyFoods(array) {
        let table = document.createElement('TABLE');
        table.classList.add('dailyFoodList');
        let tableHeaders = document.createElement('TR');
        tableHeaders.innerHTML = '<th>Item</th><th>Quantity</th><th>Calories</th><th>Total Carbs</th><th>Fiber</th><th>Protein</th><th>Total Fat</th>';
        table.appendChild(tableHeaders);
        array.slice().reverse().forEach(object => {
            let row = document.createElement('TR');
            row.innerHTML = `<td>${object.foodName}</td><td>${object.quantity}</td><td>${object.calories}</td><td>${object.totalCarbs}</td><td>${object.fiber}</td><td>${object.protein}</td><td>${object.totalFat}</td>`;
            table.appendChild(row);
        })
        return table;
    }

    // build out small table for daily macro totals
    buildDailyTotals(array) {
        // html to display for totals
        let table = document.createElement('TABLE');
        table.classList.add('dailyTotals');
        let tableHeaders = document.createElement('TR');
        tableHeaders.innerHTML = '<th>Calories</th><th>Total Carbs</th><th>Fiber</th><th>Protein</th><th>Total Fat</th>';
        table.appendChild(tableHeaders);
        // map function to add totals?
        return table;
        
    }
}