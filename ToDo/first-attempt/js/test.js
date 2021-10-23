
import toDo from './localStorage.js';

/* 

I Could not fix the "Uncaught SyntaxError: Cannot use import statement outside a module" error when I had everything separated into the different js files. I tried
to fix it for about 2 hours. I also could not find a solultion for the Uncaught ReferenceError: [togglefunction] is not defined at HTMLButtonElement.onclick with
several hours of attempts.

Everything else works otherwise, the values entered into Add Item are added to the
list and stored in localStorage properly.

*/

const getTodos = JSON.parse(localStorage.getItem('toDoList'));

if (localStorage.length > 0) {
    console.log("local storage not empty");
    var toDoList = getTodos;
} else{
    console.log("ls empty");
    var toDoList = [];
}

const todoInput = document.querySelector('#todoInput');
const addButton = document.querySelector('#addButton');
document.querySelector("body").addEventListener("onload", pageLoad(toDoList));

function pageLoad(getTodos) {
    if (getTodos.length != 0) {
        getTodos.forEach(addToHTML);
    }
};

function setTodos(toDoList) {
    localStorage.removeItem('toDoList');
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
};

function createToDo(text) {
    if (text != '') {
        var toDoObject = new toDo(text);
        let task = toDoObject.item;
        toDoList.push(task);
        addToHTML(task);
        setTodos(toDoList);
        console.log(getTodos);
    };
};

function addToHTML(item) {
    let text = item.content;
    console.log(text);
    let state = '';
    switch(item.completed) {
        case false:
            state = 'Yes'
            break;
        case true:
            state = 'No'
            break;
        default:
            state = 'Yes'
    }
    let li = document.createElement("li");
    li.setAttribute("class", `active${state}`);
    li.setAttribute("id", `${text}`);
    let ul = document.querySelector("#todoUl");
    li.innerHTML = `<button type="button" class="${state}" onclick="changeStatus(${text})"><img src="/ToDo/empty-box.png">${text}</button><input type="button" value="X" onclick="removeToDo(${text})">`;
    ul.appendChild(li);
};

function removeToDo(text) {
    toDoList.forEach((object, index) => {
        if (object.content == text) {
            toDoList.splice(index, 1);
            setTodos(toDoList);
            listItem = document.getElementById(`${text}`);
            listItem.parentNode.removeChild(listItem);
        }
    })
}

function changeStatus(text) {
    getTodos.forEach((object) => {
        if (object.content == text) {
            if (object.completed == false) {
                object.completed = true;
                let li = document.getElementById("text");
                li.setAttribute("class", "activeNo");
            }
            else if (object.completed == true) {
                object.completed = false;
                let li = document.getElementById("text")
                li.setAttribute("class", "activeYes");
            }
        }
    })
};

function toggleCompleted() {
    activeYes = document.querySelectorAll(".activeYes")
    activeYes.classList.toggle("hide");
};

function toggleActive() {
    activeNo = document.querySelectorAll(".activeNo")
    activeNo.classList.toggle("hide"); 
};

function toggleAll() {
    document.querySelectorAll(".activeNo").classList.remove("hide");
    document.querySelectorAll(".activeYes").classList.remove("hide");
};

addButton.addEventListener('click', (e) => {
    e.preventDefault();
    let value = todoInput.value;
    createToDo(value);
    todoInput.value = '';
})

addButton.addEventListener('touchend', (e) => {
    e.preventDefault();
    let value = todoInput.value;
    createToDo(value);
    todoInput.value = '';
})

