
let db; 
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

let newFood = [
    {foodName: "", quantity: 1, calories: 0, totalCarbs: 0, fiber: 0, protein: 0, totalFat: 0}
]; // for reference only

window.onload = function() {
    notifications.innerHTML += '<li>App Started</li>';
    addFoodForm.addEventListener('submit', addFoodData, false);
    window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || 
    window.msIndexedDB;
     
    window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || 
    window.msIDBTransaction;
    window.IDBKeyRange = window.IDBKeyRange || 
    window.webkitIDBKeyRange || window.msIDBKeyRange
    
    const DBOpenRequest = window.indexedDB.open("dailyFoods", 1); // not sure about this
    
    DBOpenRequest.onerror = (e) => {
       notifications.innerHTML += '<li>Error Loading Database</li>';
    };

    DBOpenRequest.onsuccess = (e) => {
        notifications.innerHTML += '<li>Database initialized.</li>';
      
        // store the result of opening the database in db.
        db = DBOpenRequest.result;
     
        // call the function to begin rendering data
        displayData();
      };

    DBOpenRequest.onupgradeneeded = (e) => {
       let db = e.target.result;
       console.log('db upgrade needed');
       console.log(db);
       // respond to error
       db.onerror = (e) => {
          notifications.innerHTML += '<li>Error Loading Database</li>';
          //not sure about this, but some variable or object needs to create HTML
       };
    
       // create object stores d/t upgrade
       const objectStoreFoods = db.createObjectStore("dailyFoods", { keyPath: "foodName"});
       const objectStoreTotals = db.createObjectStore("dailyTotals", { keyPath: "day"});
    
       //define what data items the object stores will contain
    
       //objectStoreFoods.createIndex("foodName", "foodName", { unique: false});
       objectStoreFoods.createIndex("quantity", "quantity", { unique: false});
       objectStoreFoods.createIndex("calories", "calories", { unique: false});
       objectStoreFoods.createIndex("totalCarbs", "totalCarbs", { unique: false});
       objectStoreFoods.createIndex("fiber", "fiber", { unique: false});
       objectStoreFoods.createIndex("protein", "protein", { unique: false});
       objectStoreFoods.createIndex("totalFat", "totalFat", { unique: false});
    
       
       objectStoreTotals.createIndex("calories", "calories", { unique: false});
       objectStoreTotals.createIndex("totalCarbs", "totalCarbs", { unique: false});
       objectStoreTotals.createIndex("fiber", "fiber", { unique: false});
       objectStoreTotals.createIndex("protein", "protein", { unique: false});
       objectStoreTotals.createIndex("totalFat", "totalFat", { unique: false});

       notifications.innterHTML += '<li>Object stores created</li>';
    };
    
    function displayData() {

        // clear contents of dailyFoods list to avoid duplicates
        dailyFoods.innerHTML = "";
        dailyTotals.innerHTML = "";
        // call other building functions
        displayDailyFoods();
        displayDailyTotals();        
    };

    function displayDailyFoods() {
        // create transaction for dailyFoods object store
        let objectStore = db.transaction('dailyFoods').objectStore('dailyFoods');
         // Open our object store and then get a cursor list of all the different data items in the IDB to iterate through
        objectStore.openCursor().onsuccess = function(event) {
            let cursor = event.target.result;
            // if there is still another cursor to go, keep runing this code
            if(cursor) {
                // create a list item to put each data item inside when displaying it
                const listUl = document.createElement('ul');
                console.log(cursor.value.foodName);
        
                // build the to-do list entry and put it into the list item via innerHTML.
                listUl.innerHTML += `<li>${cursor.value.foodName}</li><li>Calories: ${cursor.value.calories}</li><li>Total Carbs: ${cursor.value.totalCarbs}</li><li>Fiber: ${cursor.value.fiber}</li><li>Protein: ${cursor.value.protein}</li><li>Total Fat: ${cursor.value.totalFat}</li>`;
        
                // put the item item inside the div section
                dailyFoods.appendChild(listUl);
        
                // continue on to the next item in the cursor
                cursor.continue();
        
            // if there are no more cursor items to iterate through, say so, and exit the function
            } else {
                notifications.innerHTML += '<li>Foods all displayed.</li>';
            }
        }
    };

    function displayDailyTotals() {
        // create transaction for dailyTotals object store
        let objectStore = db.transaction('dailyTotals').objectStore('dailyTotals');
        objectStore.openCursor().onsuccess = function(event) {
            let cursor = event.target.result;
            // if there is still another cursor to go, keep runing this code
            if(cursor) {
                if (cursor.value.day == 'today') {
                    // create a list item to put each data item inside when displaying it
                    dailyTotals.innerHTML = "";
                    const title = document.createElement('h3');
                    title.textContent = 'Daily Totals';
                    const listUl = document.createElement('ul');
                    console.log(cursor.value.day);
            
                    // build the to-do list entry and put it into the list item via innerHTML.
                    listUl.innerHTML += `<li>Calories: ${cursor.value.calories}</li><li>Total Carbs: ${cursor.value.totalCarbs}</li><li>Fiber: ${cursor.value.fiber}</li><li>Protein: ${cursor.value.protein}</li><li>Total Fat: ${cursor.value.totalFat}</li>`;
            
                    // put the item item inside the div section
                    dailyTotals.appendChild(title);
                    dailyTotals.appendChild(listUl);
                }
                // continue on to the next item in the cursor
                cursor.continue();
        
            // if there are no more cursor items to iterate through, say so, and exit the function
            } else {
                notifications.innerHTML += '<li>Totals all displayed.</li>';
            }
        }
    }
    
    function addFoodData(e) {
        // prevent default to avoid typical submission
        e.preventDefault();

        console.log('addData function executed');
        console.log(foodName.value);

        let newFood = [
            {foodName: foodName.value, quantity: parseInt(quantity.value), calories: parseInt(calories.value), totalCarbs: parseInt(totalCarbs.value), fiber: parseInt(fiber.value), protein: parseInt(protein.value), totalFat: parseInt(totalFat.value)}
        ];

        let transaction = db.transaction(["dailyFoods"], "readwrite");
        
        // report on the success of the transaction completing, when everything is done
        transaction.oncomplete = function() {
            notifications.innerHTML += '<li>Add Food Transaction completed: database modification finished.</li>';

            // update the display of data to show the newly added item, by running displayData() again.
            // displayData();
        };

        transaction.onerror = function() {
            notifications.innerHTML += '<li>Add Food Transaction not opened due to error: ' + transaction.error + '</li>';
        };

        // call an object store that's already been added to the database
        let objectStore = transaction.objectStore("dailyFoods");
        console.log(objectStore.indexNames);
        console.log(objectStore.keyPath);
        console.log(objectStore.name);
        console.log(objectStore.transaction);
        console.log(objectStore.autoIncrement);

        // Make a request to add our newItem object to the object store
        let objectStoreRequest = objectStore.add(newFood[0]);
            objectStoreRequest.onsuccess = function(event) {

            // report the success of our request
            // (to detect whether it has been succesfully
            // added to the database, you'd look at transaction.oncomplete)
            notifications.innerHTML += '<li>Food Request successful.</li>';

            // clear the form, ready for adding the next entry
            foodName.value = '';
            quantity.value = null;
            calories.value = null;
            totalCarbs.value = null;
            fiber.value = null;
            protein.value = null;
            totalFat.value = null;

            // send the data to be stored in the dailyTotals object store
            addDailyTotals(newFood);

        };
    };

    function addDailyTotals(list) {
        console.log(list);
        const calories = list[0].calories;
        const fiber = list[0].fiber;
        const protein = list[0].protein;
        const totalCarbs = list[0].totalCarbs;
        const totalFat = list[0].totalFat;
        let cursorCount = false;
        //check if objectStore exists
        const transaction = db.transaction(["dailyTotals"], "readwrite");
    
        // create object store variable for transaction
        const objectStore = transaction.objectStore('dailyTotals')

        objectStore.openCursor().onsuccess = function(event) {
            console.log('add totals cursor running...')
            const cursor = event.target.result; // event.target.result.value.day etc.
            console.log(cursor);
            // if there is still another cursor to go, keep running this code
            if(cursor) {
                // check to see if "today" record exists
                if(cursor.value.day === 'today') {
                    const updateData = cursor.value;
                    //update information with recently added items from foodList
                    updateData.calories += calories;
                    updateData.totalCarbs += totalCarbs;
                    updateData.fiber += fiber;
                    updateData.protein += protein;
                    updateData.totalFat += totalFat;

                    // create another request to insert item back into objectStore
                    const updateRequest = cursor.update(updateData);
                    updateRequest.onsuccess = () => {
                        displayData();
                        notifications.innerHTML += '<li>Totals addition successful.</li>';
                    }
                    updateRequest.onerror = (e) => {
                        console.log('Unable to modifiy totals data: ', error);
                    }
                }
                // continue on to the next item in the cursor
                cursorCount = true;
                cursor.continue();
            } 
            else if (cursorCount == false) {
                console.log("Today record not found.");
                console.log(list[0].calories);
                let newList =  [{day: "today", calories: list[0].calories, totalCarbs: list[0].totalCarbs, fiber: list[0].fiber, protein: list[0].protein, totalFat: list[0].totalFat}];
                // create another request to insert item back into objectStore
                const addRequest = objectStore.put(newList[0]);
                addRequest.onsuccess = () => {
                    displayData();
                    notifications.innerHTML += '<li>Totals request successful.</li>';
                }
                
            }
            
        }
    };
};
