// Variables to store information for determing
// our websocket connection.
const URL = 'wss://echo.websocket.org/';
const outputDiv = document.getElementById('output');
const form = document.forms[0];
const connection = new WebSocket(URL);

// When the connection to the URL is successful,
// an 'open' event is fired, and a result message
// is displayed.
connection.addEventListener('open', () => {
    // Method used to display messages
    output('CONNECTED');
}, false);

// Method used to display messages
function output(message) {
    const para = document.createElement('p');
    para.innerHTML = message;
    outputDiv.appendChild(para);
}

// Event Listener that allows us to display
// more messages using the message() method
form.addEventListener('submit', message, false);

// The message() method
function message(event) {
    // stop the default behavior,
    // so the form isn't submitted
    event.preventDefault();
    // grab the value of the text input
    // and store it in a local variable
    const text = form.message.value;
    // use the output() function again to
    // add the message to the output div
    output(`SENT: ${text}`);
    // send the message to the URL that 
    // the websocket is connected to
    connection.send(text);
}

// When this message is received, the server 
// will process it and send a response. The 
// connection object waits for the response, 
// and when it receives one, a 'message' event 
// is fired.
connection.addEventListener('message', (event) => {
    output(`RESPONSE: ${event.data}`);
}, false);

// The close event occurs when the connection is closed, 
// which can be done using the close() method. The error 
// event is fired when any sort of error occurs with the 
// connection.
connection.addEventListener('close', () => {
    output('DISCONNECTED');
}, false);

connection.addEventListener('error', (event) => {
output(`<span style='color: red;'>ERROR: ${event.data}</span>`);
}, false);