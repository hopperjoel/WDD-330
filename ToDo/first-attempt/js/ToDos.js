
/* Need to have an input field with a button to the side that
event listens for the click, puts the text from the field into
a new <li>? */


import { todoForm, todoInput, addButton} from './utilities.js'
import { toDoList, setTodos, getTodos} from './localStorage.js'
import toDo from './localStorage.js'

// class ToDos {
//     constructor(toDoList) {
//         this.toDoList = toDoList
//     }

    function createToDo(text) {
        if (text != '') {
            const toDo = new toDo(text);
            this.toDoList.push(toDo.item);
            setTodos(this.toDoList)
        };
    };

    function addToHTML(item) {
        let text = item.content;
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
        let ul = document.querySelector("#todoUl");
        li.innerHTML = `<input type="button" class="active${state}" value="">${text}<input type="button" value="X" class="removeButton">`;
        ul.appendChild(li);
    };

    function removeToDo (item) {
        getTodos.forEach((object, index) => {
            if (object.content == item.content) {
                getTodos.splice(index, 1)
            }
        })
    }

    function changeStatus(item) {
        getTodos.forEach((object) => {
            if (object.content == item.content) {
                if (object.completed == false) {
                    object.completed = true;
                }
                else if (object.completed == true) {
                    object.completed = false;
                }
            }
        })
    };
/*
    toggleList(selection) {
        if (selection == 'All') {
            getTodos.forEach(addToHTML(item))
        }
        else if (selection == 'Active') {
            getTodos.forEach((object) => {
                if (object.completed == false) {
                    addToHTML(object)
                }
            })
        }
        else if (selection == 'Completed') {
            getTodos.forEach((object) => {
                if (object.completed == true) {
                    addToHTML(object)
                }
            })
        }
    }
}
*/






