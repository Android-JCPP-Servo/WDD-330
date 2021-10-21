/*******************************************************************
 * TODO List JavaScript code referenced from:
 * https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_todo
 *******************************************************************/
// Assign variables used throughout program
var itemList = document.getElementsByTagName('LI');
const listFragment = document.createDocumentFragment();
const $FilterButtons = document.querySelectorAll('.filter_button');
const $listItems = document.querySelector('todo_items');

// Create a "close" button and append it to each list item
for (var i = 0; i < itemList.length; i++) {
    // @param tagName — The name of an element.
    var span = document.createElement('span');
    // @param data - String that specifies the nodeValue property of the text node.
    // \u00D7 is the UNICODE character for the multiplication sign
    var text = document.createTextNode("\u00D7");
    // Returns the value of element's class content attribute. Can be set to change it.
    span.className = "close";
    // Display an 'x' at the end of each item
    span.appendChild(text);
    itemList[i].appendChild(span);
}

// Click on a close button to hide the selected list item
var close = document.getElementsByClassName('close');
for (var i = 0; i < close.length; i++) {
    // Whenever a "close" button is clicked,...
    close[i].onclick = function() {
        //...select the host list item...
        var div = this.parentElement;
        //...and set its visibility to hidden or none.
        div.style.display = "none";
    }
}

// Add a "checked" symbol when clicking a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    }
}, false);

// Create a new list item when clicking the "Add Item" button
function addItem() {
    var alert = document.getElementById('alert');
    var newItem = document.createElement('li');
    var itemInput = document.getElementById('item_add').value;
    var node = document.createTextNode(itemInput);
    newItem.appendChild(node);
    // Check if user input is empty
    if (itemInput === '') {
        alert.style.visibility = 'visible';
    } else {
        alert.style.visibility = 'hidden';
        document.getElementsByTagName('ul').appendChild(newItem);
    }
    document.getElementById('item_add').value = '';
    // Add 'close' symbol to the end of the item
    var span = document.createElement('span');
    var text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(text);
    itemList[i].appendChild(span);
    // If any new items are 'closed', remove them from the list
    for (var i = 0; i < close.length; i++) {
        // Whenever a "close" button is clicked,...
        close[i].onclick = function() {
            //...select the host list item...
            var div = this.parentElement;
            //...and set its visibility to hidden or none.
            div.style.display = "none";
        }
    }
}

// Filter each list item based on being checked off or not
var button = document.getElementsByClassName('filter_button');
function filterData() {
    if (button.id === 'active') {
        active.style.visibility = 'visible';
        checked.style.visibility = 'hidden';
    } else if (button.id === 'completed') {
        active.style.visibility = 'hidden';
        checked.style.visibility = 'visible';
    } else if (button.id === 'all') {
        active.style.visibility = 'visible';
        checked.style.visibility = 'visible';
    }
}