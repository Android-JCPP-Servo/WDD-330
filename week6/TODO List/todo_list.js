// /*******************************************************************
//  * TODO List JavaScript code referenced from:
//  * https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_todo
//  *******************************************************************/
// // Declare global variables
// var itemList = document.getElementsByTagName('LI');
// var totalAll = 0;

// localStorage.clear();

// // Create a "close" button and append it to each list item
// for (var i = 0; i < itemList.length; i++) {
//     // @param tagName — The name of an element.
//     var span = document.createElement('span');
//     // @param data - String that specifies the nodeValue property of the text node.
//     // \u00D7 is the UNICODE character for the multiplication sign
//     var text = document.createTextNode("\u00D7");
//     // Returns the value of element's class content attribute. Can be set to change it.
//     span.className = "close";
//     // Display an 'x' at the end of each item
//     span.appendChild(text);
//     itemList[i].appendChild(span);
// }

// // Click on a close button to hide the selected list item
// var close = document.getElementsByClassName('close');
// for (var i = 0; i < close.length; i++) {
//     // Whenever a "close" button is clicked,...
//     close[i].onclick = function() {
//         //...select the host list item...
//         var div = this.parentElement;
//         //...and set its visibility to hidden or none.
//         div.style.display = "none";
//         // Remove selected item from localStorage
//         localStorage.removeItem(div);
//         console.log(localStorage);
//     }
// }

// // Add a "checked" symbol when clicking a list item
// var list = document.querySelector('ul');
// list.addEventListener('click', function(e) {
//     if (e.target.tagName === 'LI') {
//         // Set the selected item to "checked off"
//         e.target.classList.toggle('checked');
//         // Correctly display each filter if user "unchecks" an item
//         if (e.target.checked) {
//             e.target.checked = false;
//         } else {
//             e.target.checked = true;
//         }
//     }
//     // console.log(e.target.checked);
// }, false);

// // Create a new list item when clicking the "Add Item" button
// function addItem() {
//     var alert = document.getElementById('alert');
//     var newItem = document.createElement('li');
//     var itemInput = document.getElementById('item_add').value;
//     var node = document.createTextNode(itemInput);
//     newItem.appendChild(node);
//     // Check if user input is empty
//     if (itemInput === '') {
//         // If empty, display error message
//         alert.style.visibility = 'visible';
//         totalAll += 0;
//     } else {
//         // If not empty, add new item
//         alert.style.visibility = 'hidden';
//         document.getElementById('todo_items').appendChild(newItem);
//         totalAll++;
//     }
//     document.getElementById('item_add').value = '';
//     // Add 'close' symbol to the end of the item
//     var span = document.createElement('span');
//     var text = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.appendChild(text);
//     newItem.appendChild(span);
//     // If any new items are 'closed', remove them from the list
//     for (var i = 0; i < close.length; i++) {
//         // Whenever a "close" button is clicked,...
//         close[i].onclick = function() {
//             //...select the host list item...
//             var div = this.parentElement;
//             //...and set its visibility to hidden or none.
//             div.style.display = "none";
//             localStorage.removeItem(div);
//             console.log(localStorage);
//         }
//     }
//     // console.log('Total All: ' + totalAll);
//     if (totalAll == 1) {
//         document.getElementById("totals").innerHTML = totalAll + " task total.";
//     } else {
//         document.getElementById("totals").innerHTML = totalAll + " tasks total.";
//     }
//     // Store each added item to localStorage
//     storage(newItem);
//     console.log(getFromLocalStorage());
// }

// // Function used to store list to localStorage
// var i = 0;
// function storage(item) {
//     var message = "Number " + i;
//     window.localStorage.setItem(message, JSON.stringify(item));
//     console.log(localStorage);
//     i++;
// }

// function getFromLocalStorage() {
//     // var message = "Number " + i;
//     localStorage.getItem("Number 0");
//     console.log(localStorage);
//     // i++;
// }

// console.log(getFromLocalStorage());

// // Filter each list item based on being checked off or not
// // Display all items
// function filterAllData() {
//     for (var i = 0; i < itemList.length; i++) {
//         itemList[i].style.display = 'block';
//     }
//     console.log('Total All: ' + totalAll);
//     if (totalAll <= 1) {
//         document.getElementById("totals").innerHTML = totalAll + " task total.";
//     } else {
//         document.getElementById("totals").innerHTML = totalAll + " tasks total.";
//     }
// }
// // Display only active items
// function filterActiveData() {
//     var totalActive = 0;
//     for (var i = 0; i < itemList.length; i++) {
//         if (itemList[i].checked) {
//             itemList[i].style.display = 'none';
//         } else {
//             itemList[i].style.display = 'block';
//             totalActive++;
//         }
//     }
//     if (totalActive <= 1) {
//         document.getElementById("totals").innerHTML = totalActive + " task left.";
//     } else {
//         document.getElementById("totals").innerHTML = totalActive + " tasks left.";
//     }
// }
// // Display only completed items
// function filterCompletedData() {
//     var totalCompleted = 0;
//     for (var i = 0; i < itemList.length; i++) {
//         if (itemList[i].checked) {
//             itemList[i].style.display = 'block';
//             totalCompleted++;
//         } else {
//             itemList[i].style.display = 'none';
//         }
//     }
//     //console.log('Total completed: ' + totalCompleted);
//     if (totalCompleted == 1) {
//         document.getElementById("totals").innerHTML = totalCompleted + " task completed.";
//     } else {
//         document.getElementById("totals").innerHTML = totalCompleted + " tasks completed.";
//     }
// }