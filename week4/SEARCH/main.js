// Accessing Form Elements
const form = document.forms['search'];
// const [input,button] = form.elements;

// Form Events
const input = form.elements.searchInput;
// input.addEventListener('focus', () => alert('focused'), false);
// input.addEventListener('blur', () => alert('blurred'), false);

// Submitting a Form
// input.addEventListener('change', () => alert('changed'), false);
form.addEventListener ('submit', search, false);
// function search() {
//     alert(' Form Submitted');
// }

// Retrieving and Changing Values From a Form
function search(event) {
    alert(`You Searched for: ${input.value}`);
    event.preventDefault();
}
input.value = 'Search Here';
input.addEventListener('focus', function(){
    if (input.value==='Search Here') {
        input.value = '' 
    }
}, false);
input.addEventListener('blur', function(){
    if(input.value === '') {
        input.value = 'Search Here';
    }
}, false);