
import { todoForm, todoInput, addButton, removeButton} from './utilities.js'
import { toDoList, todoData, setTodos} from './localStorage.js'
import toDo from './localStorage.js'
import {createToDo, addToHTML, removeToDo, changeStatus} from './ToDos.js'

addButton.addEventListener('click', (e) => {
    e.preventDefault();
    let value = todoInput.value;
    createToDo(value);
    addToHTML(value);
    todoInput.value = '';
})

addButton.addEventListener('touchend', (e) => {
    e.preventDefault();
    let value = todoInput.value;
    createToDo(value);
    addToHTML(value);
    todoInput.value = '';
})

removeButton.addEventListener('click', (e) => {
    e.preventDefault();
})

function toggleCompleted() {
    document.querySelector(".activeYes").classList.toggle("hide");
};

function toggleActive() {
    document.querySelector(".activeNo").classList.toggle("hide"); 
};

function toggleAll() {
    document.querySelector(".activeNo").classList.remove("hide");
    document.querySelector(".activeYes").classList.remove("hide");
};


// Need to get localstorage
// Cycle through objects in todoList (array) and determine which as true/false as completed
// Have function(s) that toggle displaying completed or not completed
// Have function that changes completed status - then 



/*function clearStorage() {
    localStorage.clear;
}
clearStorage();*/