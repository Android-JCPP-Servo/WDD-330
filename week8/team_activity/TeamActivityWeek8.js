/*
/***********************************
 * Our Team's Original Code
 * The attempt was to get the data 
 * from the URL, and then display it
 * in a table.
 ***********************************
const url = "https://swapi.dev/api/starships";
let view = document.getElementById("display");
let table;
let dataR;
fetch(url)
.then( response => {
    view.innerHTML = 'Waiting for response...';
if(response.ok) {
    return response;
}
throw Error(response.statusText);
})
.then( response => response.json() )
.then( data => Object.entries(data) )
.then ( data => data = dataR)
.catch( error => console.log('There was an error: ', error));
// const returndata = Object;
// console.log(returndata);
// console.log(returndata[3][1][0]);
// dataR[3][1].forEach(element => {
// });
table = "<table> <tr> <th>Name</th><th>Model</th><th>Manufacturer</th><th>Cost in credits</th></tr>";
for (var i = 0; i < dataR.length; i++) {
    table += "<tr>";
	table += `<td>"${dataR[3][1][i].name}"</td>`;
    table += `<td>"${dataR[3][1][i].model}"</td>`;
    table += `<td>"${dataR[3][1][i].manufacturer}"</td>`;
    table += `<td>"${dataR[3][1][i].cost_in_credits}"</td>`;
    table +="</tr>";
}
table += "</table>"
view.innerText = table;
*/

// Initialize the external URL and other HTML elements
const url = "https://swapi.dev/api/starships";
const displayTable = document.getElementById('display');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
// Function to return external data in JSON format
function returnJson(url) {
    return fetch(url)
    .then(response => {
        if(response.ok) {
            return response.json();
        } else {
            throw Error(response.statusText);
        }
    })
    .catch(error => {
        console.log(error);
    });
}
// For simplicity, start with only calling returnJson. Add deeper functionality as the program grows more complex.
function displayShips(url) {
    returnJson(url)
    .then(data => {
        console.log(data);
        const ships = data.results;
        // Display the list
        renderList(ships, displayTable);
        // Display 'Prev' and 'Next' buttons
        if (data.previous) {
            prev.ontouchend = () => {
                // Call the previous data shown
                displayShips(data.previous);
            };
        }
        if (data.next) {
            next.ontouchend = () => {
                // notice to show the next page we just re-call the showShips function with a new URL
                displayShips(data.next);
            };
        }
    });
}
// Render ship details to the screen
function renderList(ships, displayTable) {
    // With the table have two children (thead and tbody), we need to call the second child to display our ship list
    const displayRows = displayTable.children[1];
    // Set the row(s) to empty
    displayRows.innerHTML = "";
    // Loop through the ships
    ships.forEach(ship => {
        // console.log(ship);
        // Display tables rows
        let displayRow = document.createElement("tr");
        displayRow.innerHTML = `
        <td><a href="${ship.url}">${ship.name}</a></td>
        <td>${ship.model}</td>
        <td>${ship.manufacturer}</td>
        <td>${ship.cost_in_credits}</td>
        `;
        // Establish eventListener that calls the ship details instead of the natural link behavior
        displayRow.addEventListener('click', event => {
            event.preventDefault();
            returnDetails(ship.url);
        });
        // Append row to table
        displayRows.appendChild(displayRow);
    });
}
// Return ship details
function returnDetails(url) {
    // Render details in the console
    returnJson(url)
    .then(data => {
        renderDetails(data);
    });
}
// Render ship details - STRETCH CHALLENGE
function renderDetails(shipData) {
    shipData.forEach(detail => {
        detail.forEach(item => {
            console.log(item);
        })
    })
}
// Finally, begin showing the ships
displayShips(url);