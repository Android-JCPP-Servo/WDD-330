/****************************************************************
 * Tutorial for TODO List referenced from:
 * https://thecodingpie.com/post/how-to-build-a-todo-list-app-with-javascript-and-local-storage
 ****************************************************************/
// Select everything
// Select the todo-form
const todoForm = document.querySelector('.todo_form');
// Select the input box
const itemInput = document.querySelector('.item_add');
// Select the <ul> with class="todo-items"
const itemList = document.querySelector('.todo_items');
// Select the <li> elements
var liElements = document.getElementsByTagName('LI');
// Array which stores every todoList
let todoList = [];

localStorage.clear();

// Add eventListener for the form, and listen for submit
todoForm.addEventListener('submit', function(event) {
    // Prevent the page from reloading when submitting the form
    event.preventDefault();
    // Call addTodo function with input box current value
    addTodo(itemInput.value);
});

// Function to add item
function addTodo(item) {
    // If item is not empty...
    if (item !== '') {
        // ...make a todo object, which has id(timestamp), name(string), and completed(Boolean) properties...
        const todo = {
            id: Date.now(),
            name: item,
            completed: false
        };
        // ...add it to todoList array
        todoList.push(todo);
        // ...then store it in localStorage
        addToLocalStorage(todoList);
        // Finally clear the input box value
        itemInput.value = '';
    }
    // Display array total
    countInArray();
}

// function to render given todoList to screen
function rendertodoList(todoList) {
    // Clear everything inside <ul> section
    itemList.innerHTML = '';
    // Run through each item inside todoList
    todoList.forEach(function(item) {
        // Check if the item is completed
        const checked = item.completed ? 'checked' : 'unchecked';
        // Make a <li> element and fill it
        const li = document.createElement('li');
        // Set attributes for each item
        li.setAttribute('class', 'item');
        // Add data-keys and value IDs
        li.setAttribute('data-key', item.id);
        // If item is completed,...
        if (item.completed === true) {
            // ...then add a class to <li> called 'checked', which will add line-through style
            li.classList.add('checked');
        } else {
            li.classList.add('unchecked');
        }
        // Display each li element
        li.innerHTML = `
        <input type="checkbox" class="checkbox" ${checked}>
        ${item.name}
        <div class="close">X</div>
        `;
        // finally add the <li> to the <ul>
        itemList.append(li);
    });
}

// Function to count items in array
function countInArray() {
    if (todoList.length == 1) {
        document.getElementById("totals").innerHTML = todoList.length + " task total.";
    } else {
        document.getElementById("totals").innerHTML = todoList.length + " tasks total.";
    }
}

// function to add todoList to local storage
function addToLocalStorage(todoList) {
    // conver the array to string then store it.
    localStorage.setItem('todoList', JSON.stringify(todoList));
    // render them to screen
    rendertodoList(todoList);
}

// function helps to get everything from local storage
function getFromLocalStorage() {
    const reference = localStorage.getItem('todoList');
    // if reference exists
    if (reference) {
        // converts back to array and store it in todoList array
        todoList = JSON.parse(reference);
        rendertodoList(todoList);
    }
}

// toggle the value to completed and not completed
function toggle(id) {
    todoList.forEach(function(item) {
        // use == not ===, because here types are different. One is number and other is string
        if (item.id == id) {
        // toggle the value
        item.completed = !item.completed;
        }
    });
    // update the localStorage
    addToLocalStorage(todoList);
}

// deletes a todo from todoList array, then updates localstorage and renders updated list to screen
function deleteTodo(id) {
    // filters out the <li> with the id and updates the todoList array
    todoList = todoList.filter(function(item) {
        // use != not !==, because here types are different. One is number and other is string
        return item.id != id;
    });
    // Display array total
    countInArray();
    // update the localStorage
    addToLocalStorage(todoList);
}

// Filter each list item based on being checked off or not
// Display all items
function filterAllData() {
    var totalAll = 0;
    for (var i = 0; i < liElements.length; i++) {
        liElements[i].style.display = 'block';
        totalAll++;
    }
    if (totalAll == 1) {
        document.getElementById("totals").innerHTML = totalAll + " task total.";
    } else {
        document.getElementById("totals").innerHTML = totalAll + " tasks total.";
    }
    // console.log(itemList);
}
// Display only active items
function filterActiveData() {
    var totalActive = 0;
    for (var i = 0; i < liElements.length; i++) {
        if (liElements[i].classList.contains('checked')) {
            liElements[i].style.display = 'none';
        } else {
            liElements[i].style.display = 'block';
            totalActive++;
        }
    }
    if (totalActive == 1) {
        document.getElementById("totals").innerHTML = totalActive + " task left.";
    } else {
        document.getElementById("totals").innerHTML = totalActive + " tasks left.";
    }
    // console.log(itemList);
}
// Display only completed items
function filterCompletedData() {
    var totalCompleted = 0;
    for (var i = 0; i < liElements.length; i++) {
        if (liElements[i].classList.contains('checked')) {
            liElements[i].style.display = 'block';
            totalCompleted++;
        } else {
            liElements[i].style.display = 'none';
        }
    }
    if (totalCompleted == 1) {
        document.getElementById("totals").innerHTML = totalCompleted + " task completed.";
    } else {
        document.getElementById("totals").innerHTML = totalCompleted + " tasks completed.";
    }
    // console.log(itemList);
}

// console.log(itemList);

// Initially call everything from localStorage
getFromLocalStorage();

// Add eventListener for delete and checking off items
itemList.addEventListener('click', function(event) {
    // Check if the event was a check-off
    if (event.target.type === 'checkbox') {
        // toggle the state
        toggle(event.target.parentElement.getAttribute('data-key'));
    }
    // Check if the event was a deletion
    if (event.target.classList.contains('close')) {
        // Call deleteTodo to delete the item
        deleteTodo(event.target.parentElement.getAttribute('data-key'));
    }
});
