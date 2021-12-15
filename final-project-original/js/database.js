/* window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || 
window.msIndexedDB;
 
IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || 
window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || 
window.webkitIDBKeyRange || window.msIDBKeyRange
 
if (!window.indexedDB) {
   window.alert("Your browser doesn't support a stable version of IndexedDB.")
}

// this section is probably supposed to be in main?

// line to create a database store (table)
upgradeDb.createObjectStore('storeName', options);

(function() {
   'use strict';
 
   //check for support
   if (!('indexedDB' in window)) {
     console.log('This browser doesn\'t support IndexedDB');
     return;
   }
  // Is it createObjectStore or just open??
   var dbPromise = idb.open('test-db2', 1, function(upgradeDb) {
     console.log('making a new object store');
     if (!upgradeDb.objectStoreNames.contains('firstOS')) {
       upgradeDb.createObjectStore('firstOS');
     }
   });
 
 })();

 function idbOK() {
   return "indexedDB" in window;
}

var db;

$(document).ready(function() {

   //No support? Go in the corner and pout.
   if(!idbOK()) return;

   var openRequest = indexedDB.open("ora_idb1",1);

   openRequest.onupgradeneeded = function(e) {
       console.log("running onupgradeneeded");
   }

   openRequest.onsuccess = function(e) {
       console.log("running onsuccess");
       db = e.target.result;
   }

   openRequest.onerror = function(e) {
       console.log("onerror!");
       console.dir(e);
   }

});
*/
// Trying out my own code here

// check for browser support

export default function getDb() {

try {window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || 
window.msIndexedDB;
 
IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || 
window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || 
window.webkitIDBKeyRange || window.msIDBKeyRange
} catch (error) {
   console.log(error);
}
 
if (!window.indexedDB) {
   window.alert("Your browser doesn't support a stable version of IndexedDB.")
}

// Declare necessary objects and variables

let db; // declare the db object
const this.notifications = document.getElementById('this.notifications')

// create request
let DBOpenRequest = window.indexedDB.open("TMCDB", 1);


// respond to request object if upgradeneeded

DBOpenRequest.onerror = (e) => {
   this.notifications.innerHTML += '<li>Error Loading Database</li>';
}
DBOpenRequest.onupgradeneeded = (e) => {
   let db = e.target.result;
   console.log(db);
   // respond to error
   db.onerror = (e) => {
      this.notifications.innerHTML += '<li>Error Loading Database</li>';
      //not sure about this, but some variable or object needs to create HTML
   };

   // create object stores d/t upgrade
   const objectStoreFoods = db.createObjectStore("this.dailyFoods", { keyPath: "foodName"});
   const objectStoreMacros = db.createObjectStore("weeklyMacros", { keyPath: "dayNumber"});

   //define what data items the object stores will contain

   objectStoreFoods.createIndex("foodName", "foodName", { unique: false});
   objectStoreFoods.createIndex("quantity", "quantity", { unique: false});
   objectStoreFoods.createIndex("calories", "calories", { unique: false});
   objectStoreFoods.createIndex("totalCarbs", "totalCarbs", { unique: false});
   objectStoreFoods.createIndex("fiber", "fiber", { unique: false});
   objectStoreFoods.createIndex("protein", "protein", { unique: false});
   objectStoreFoods.createIndex("totalFat", "totalFat", { unique: false});

   objectStoreMacros.createIndex("calories", "calories", { unique: false});
   objectStoreMacros.createIndex("totalCarbs", "totalCarbs", { unique: false});
   objectStoreMacros.createIndex("fiber", "fiber", { unique: false});
   objectStoreMacros.createIndex("protein", "protein", { unique: false});
   objectStoreMacros.createIndex("totalFat", "totalFat", { unique: false});

   this.notifications.innterHTML += '<li>Object stores created</li>';
};

DBOpenRequest.onsuccess = (e) => {
   this.notifications.innerHTML += '<li>Database initialized.</li>';
 
   // store the result of opening the database in db.
   db = DBOpenRequest.result;

   // call the function to begin rendering data

   displayData();
 };
};

function displayData() {
   
}

  // Open our object store and then get a cursor list of all the different data items in the IDB to iterate through
  let objectStore = db.transaction('TMCDB').objectStore('this.dailyFoods');
  objectStore.openCursor().onsuccess = function(event) {
    let cursor = event.target.result;
      // if there is still another cursor to go, keep runing this code
      if(cursor) {
        // create a list item to put each data item inside when displaying it
        const listItem = document.createElement('li');

        // check which suffix the deadline day of the month needs
        if(cursor.value.day == 1 || cursor.value.day == 21 || cursor.value.day == 31) {
          daySuffix = "st";
        } else if(cursor.value.day == 2 || cursor.value.day == 22) {
          daySuffix = "nd";
        } else if(cursor.value.day == 3 || cursor.value.day == 23) {
          daySuffix = "rd";
        } else {
          daySuffix = "th";
        }

        // build the to-do list entry and put it into the list item via innerHTML.
        listItem.innerHTML = cursor.value.taskTitle + ' — ' + cursor.value.hours + ':' + cursor.value.minutes + ', ' + cursor.value.month + ' ' + cursor.value.day + daySuffix + ' ' + cursor.value.year + '.';

        if(cursor.value.notified == "yes") {
          listItem.style.textDecoration = "line-through";
          listItem.style.color = "rgba(255,0,0,0.5)";
        }

        // put the item item inside the task list
        taskList.appendChild(listItem);

        // create a delete button inside each list item, giving it an event handler so that it runs the deleteButton()
        // function when clicked
        const deleteButton = document.createElement('button');
        listItem.appendChild(deleteButton);
        deleteButton.innerHTML = 'X';
        // here we are setting a data attribute on our delete button to say what task we want deleted if it is clicked!
        deleteButton.setAttribute('data-task', cursor.value.taskTitle);
        deleteButton.onclick = function(event) {
          deleteItem(event);
        }

        // continue on to the next item in the cursor
        cursor.continue();

      // if there are no more cursor items to iterate through, say so, and exit the function
      } else {
        note.innerHTML += '<li>Entries all displayed.</li>';
      }
    }
  }


 // food would have to be submitted from form

let newFood = [
   {foodName: 'peach', quantity: 1, calories: 39, totalCarbs: 9.54, fiber: 1.5, protein: 0.91, totalFat: 0.25}
];

// open transaction to start the storage process
let transaction = db.transaction(["this.dailyFoods"], "readwrite");

transaction.onsuccess = (e) => {
   this.notifications.innerHTML += '<li>Transaction completed.</li>';
};

transaction.onerror = (e) => {
   this.notifications.innerHTML += '<li>Error. Transaction not completed.</li>';
};

let objectStoreFoods = db.transaction.objectStoreFoods("this.dailyFoods");
let objectStoreRequest = objectStoreFoods.add(newFood[0]);

// check response for success
objectStoreRequest.onsuccess = (e) => {
   this.notifications.innerHTML = '<li>Request successful. </li>';
};

objectStoreRequest.onerror = (e) => {
   this.notifications.innerHTML = '<li>Error. Request not successful</li>';
}
}
